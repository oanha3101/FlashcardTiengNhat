<?php
// htdocs/tiengnhat/api/generate_question.php

ini_set('display_errors', 1);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);


error_reporting(E_ALL);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Cần cấu hình chặt hơn cho production
header('Access-Control-Allow-Methods: POST, OPTIONS'); // Chỉ cho phép POST và OPTIONS
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Đọc API Key từ file config ---
$configPath = 'c:\xampp\app_config\tiengnhat_config.ini'; // << THAY THẾ BẰNG ĐƯỜNG DẪN TUYỆT ĐỐI THỰC TẾ CỦA BẠN

if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
    $configPath = str_replace('/', DIRECTORY_SEPARATOR, $configPath);
}

$apiKey = null;
if (file_exists($configPath)) {
    $config = parse_ini_file($configPath);
    if ($config && isset($config['GEMINI_API_KEY'])) {
        $apiKey = $config['GEMINI_API_KEY'];
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'GEMINI_API_KEY not found in config file or config file is invalid.', 'path' => $configPath]);
        exit();
    }
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Config file not found. Please check the absolute path.', 'path' => $configPath]);
    exit();
}

if (empty($apiKey)) {
    http_response_code(500);
    echo json_encode(['error' => 'API Key is empty after reading config file.']);
    exit();
}
// --- KẾT THÚC ĐỌC API Key ---

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['targetWord']) || !isset($input['targetWord']['hiragana']) || !isset($input['targetWord']['nghiatiengviet'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Thiếu thông tin từ mục tiêu (targetWord).']);
        exit;
    }

    $targetWordData = $input['targetWord'];
    $vocabListHintRaw = isset($input['vocabListHint']) && is_array($input['vocabListHint']) ? $input['vocabListHint'] : [];

    $targetWordDisplay = isset($targetWordData['kanji']) && !empty($targetWordData['kanji']) ? $targetWordData['kanji'] . ' (' . $targetWordData['hiragana'] . ')' : $targetWordData['hiragana'];
    $targetWordForAnswer = isset($targetWordData['kanji']) && !empty($targetWordData['kanji']) ? $targetWordData['kanji'] : $targetWordData['hiragana'];


    $vocabListHintText = "";
    if (!empty($vocabListHintRaw)) {
        $hintWords = [];
        foreach (array_slice($vocabListHintRaw, 0, 10) as $v) { // Giới hạn 10 gợi ý
            if (isset($v['hiragana'])) { // Đảm bảo có hiragana
                $hintWords[] = isset($v['kanji']) && !empty($v['kanji']) ? $v['kanji'] : $v['hiragana'];
            }
        }
        if (!empty($hintWords)) {
            $vocabListHintText = implode(', ', array_unique($hintWords)); // Loại bỏ trùng lặp
        } else {
            $vocabListHintText = 'Không có gợi ý cụ thể';
        }
    } else {
        $vocabListHintText = 'Không có gợi ý cụ thể';
    }

    // Thiết kế Prompt
    $promptText = "Bạn là một trợ lý AI chuyên tạo câu hỏi trắc nghiệm tiếng Nhật trình độ N3.\n";
    $promptText .= "Nhiệm vụ: Tạo một câu hỏi trắc nghiệm điền từ vào chỗ trống bằng tiếng Nhật cho từ vựng sau:\n";
    $promptText .= "Từ mục tiêu: " . $targetWordDisplay . "\n";
    $promptText .= "Nghĩa tiếng Việt: " . $targetWordData['nghiatiengviet'] . "\n";
    $promptText .= "Loại từ (nếu có): " . (isset($targetWordData['type']) ? $targetWordData['type'] : 'Không xác định') . "\n\n";
    $promptText .= "Yêu cầu cụ thể:\n";
    $promptText .= "1. Tạo một câu tiếng Nhật tự nhiên, thường dùng ở trình độ N3, có chứa từ mục tiêu. Sau đó, thay thế từ mục tiêu trong câu bằng \"＿＿＿\".\n";
    $promptText .= "2. Cung cấp chính xác 4 lựa chọn đáp án (options) dưới dạng một mảng các chuỗi tiếng Nhật.\n";
    $promptText .= "3. Một trong các lựa chọn phải là từ mục tiêu (dạng: \"" . $targetWordForAnswer . "\"). Đây là đáp án đúng (correctAnswer).\n";
    $promptText .= "4. Ba lựa chọn còn lại (distractors) phải là các từ tiếng Nhật khác, cùng trình độ N3, có vẻ hợp lý về ngữ pháp khi điền vào chỗ trống nhưng sai về nghĩa hoặc không phù hợp bằng từ mục tiêu. Các distractors phải khác nhau và khác đáp án đúng.\n";
    $promptText .= "   - Gợi ý cho việc chọn distractors (bạn có thể sử dụng chúng nếu thấy phù hợp, nhưng không bắt buộc): " . $vocabListHintText . "\n";
    $promptText .= "5. Output phải là một đối tượng JSON hợp lệ, được bao quanh bởi ```json ... ```. Đối tượng JSON phải có các trường sau:\n";
    $promptText .= "   - \"questionText\": (string) Câu hỏi tiếng Nhật hoàn chỉnh với chỗ trống \"＿＿＿\".\n";
    $promptText .= "   - \"options\": (array of strings) Mảng chứa chính xác 4 lựa chọn đáp án, đã được xáo trộn ngẫu nhiên. Mảng này phải bao gồm cả đáp án đúng và 3 đáp án sai.\n";
    $promptText .= "   - \"correctAnswer\": (string) Đáp án đúng (chính là từ \"" . $targetWordForAnswer . "\").\n\n";
    $promptText .= "Ví dụ cấu trúc JSON output mong muốn:\n";
    $promptText .= "```json\n";
    $promptText .= "{\n";
    $promptText .= "  \"questionText\": \"毎日、朝ごはんを＿＿＿。\",\n";
    $promptText .= "  \"options\": [\"飲みます\", \"食べます\", \"読みます\", \"書きます\"],\n";
    $promptText .= "  \"correctAnswer\": \"食べます\"\n";
    $promptText .= "}\n";
    $promptText .= "```\n";
    $promptText .= "Hãy đảm bảo câu ví dụ bạn tạo ra thực sự sử dụng từ mục tiêu một cách tự nhiên và phù hợp với nghĩa của nó. Các distractors phải khác nhau và khác đáp án đúng. Đáp án đúng phải là một trong các phần tử của mảng 'options'.";


    $data = [
        "contents" => [
            [
                "parts" => [
                    ["text" => $promptText]
                ]
            ]
        ],
        "generationConfig" => [
            "temperature" => 0.7,
            "maxOutputTokens" => 2048,
            // "responseMimeType" => "application/json", // Thử dùng nếu model hỗ trợ JSON mode trực tiếp
        ],
        // "safetySettings": [ // Cân nhắc thêm nếu cần kiểm soát nội dung chặt hơn
        //     { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
        //     { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
        //     { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
        //     { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" }
        // ]
    ];

    $modelName = "gemini-1.5-flash-latest"; // Thử với flash để nhanh hơn, hoặc pro nếu cần chất lượng cao nhất
    $url = "https://generativelanguage.googleapis.com/v1beta/models/{$modelName}:generateContent?key={$apiKey}";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_TIMEOUT, 60); // Tăng timeout lên 60 giây

    $response = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        http_response_code(500);
        echo json_encode(['error' => 'Lỗi cURL khi gọi Gemini API', 'details' => $curlError]);
        exit;
    }

    if ($httpcode >= 200 && $httpcode < 300) {
        $responseData = json_decode($response, true);

        if (isset($responseData['candidates'][0]['content']['parts'][0]['text'])) {
            $aiTextOutput = $responseData['candidates'][0]['content']['parts'][0]['text'];

            // Trích xuất JSON từ text (thường nằm trong ```json ... ```)
            $jsonString = $aiTextOutput;
            if (preg_match('/```json\s*([\s\S]*?)\s*```/', $aiTextOutput, $matches)) {
                $jsonString = trim($matches[1]);
            } else {
                $jsonString = trim($aiTextOutput); // Thử parse trực tiếp nếu không có markdown
            }

            $generatedQuestion = json_decode($jsonString, true);

            if (
                json_last_error() === JSON_ERROR_NONE &&
                isset($generatedQuestion['questionText']) && !empty($generatedQuestion['questionText']) &&
                isset($generatedQuestion['options']) && is_array($generatedQuestion['options']) &&
                isset($generatedQuestion['correctAnswer']) && !empty($generatedQuestion['correctAnswer'])
            ) {
                // ---- Xử lý và chuẩn hóa options ----
                $finalOptions = [];
                $correctAnswer = $generatedQuestion['correctAnswer']; // Đáp án đúng từ AI
                $aiProvidedOptions = $generatedQuestion['options'];

                // 1. Đảm bảo đáp án đúng ($targetWordForAnswer từ input của bạn) là cơ sở
                // Vì AI có thể trả về một biến thể của từ, hoặc bạn muốn ép theo từ gốc.
                // Tuy nhiên, nếu AI đã chọn một dạng từ hợp lý, có thể dùng $correctAnswer từ AI.
                // Ở đây, chúng ta tin vào $correctAnswer mà AI trả về, nhưng đảm bảo nó phải có trong options.
                // $authoritativeCorrectAnswer = $targetWordForAnswer;
                $authoritativeCorrectAnswer = $correctAnswer; // Lấy luôn từ AI nếu nó đã xác định

                // 2. Thêm đáp án đúng vào danh sách cuối cùng
                if (!in_array($authoritativeCorrectAnswer, $finalOptions)) {
                    $finalOptions[] = $authoritativeCorrectAnswer;
                }

                // 3. Thêm các distractors từ AI cung cấp, đảm bảo không trùng và khác đáp án đúng
                foreach ($aiProvidedOptions as $opt) {
                    if (count($finalOptions) >= 4) break;
                    // Loại bỏ khoảng trắng thừa và so sánh
                    $trimmedOpt = trim($opt);
                    if ($trimmedOpt !== $authoritativeCorrectAnswer && !in_array($trimmedOpt, $finalOptions) && !empty($trimmedOpt)) {
                        $finalOptions[] = $trimmedOpt;
                    }
                }

                // 4. Nếu vẫn chưa đủ 3 distractors, thử lấy từ vocabListHintRaw
                if (count($finalOptions) < 4 && !empty($vocabListHintRaw)) {
                    $potentialDistractorsFromHint = [];
                    foreach ($vocabListHintRaw as $v) {
                        $hintWord = isset($v['kanji']) && !empty($v['kanji']) ? $v['kanji'] : $v['hiragana'];
                        $trimmedHintWord = trim($hintWord);
                        if ($trimmedHintWord !== $authoritativeCorrectAnswer && !in_array($trimmedHintWord, $finalOptions) && !empty($trimmedHintWord)) {
                            $potentialDistractorsFromHint[] = $trimmedHintWord;
                        }
                    }
                    shuffle($potentialDistractorsFromHint); // Xáo trộn để lấy ngẫu nhiên

                    foreach ($potentialDistractorsFromHint as $hintDistractor) {
                        if (count($finalOptions) >= 4) break;
                        $finalOptions[] = $hintDistractor;
                    }
                }

                // 5. Kiểm tra cuối cùng: Nếu không đủ 4 options -> Báo lỗi
                if (count($finalOptions) < 4) {
                    http_response_code(500);
                    echo json_encode([
                        'error' => 'Không thể tạo đủ 4 lựa chọn hợp lệ cho câu hỏi.',
                        'details' => 'AI không cung cấp đủ distractors và không có đủ gợi ý thay thế. Yêu cầu tối thiểu 1 đáp án đúng và 3 đáp án sai.',
                        'ai_output_parsed' => $generatedQuestion,
                        'final_options_attempt' => $finalOptions,
                        'target_word_for_answer' => $authoritativeCorrectAnswer
                    ]);
                    exit;
                }

                // Đảm bảo chỉ có đúng 4 options (cắt bớt nếu thừa - ít khả năng xảy ra với logic trên)
                if (count($finalOptions) > 4) {
                    $finalOptions = array_slice($finalOptions, 0, 4);
                    // Kiểm tra lại correctAnswer sau khi slice (hiếm khi cần nếu logic trên đúng)
                    if (!in_array($authoritativeCorrectAnswer, $finalOptions)) {
                        // Nếu bị mất, thay thế cái cuối cùng hoặc một cái ngẫu nhiên
                        $finalOptions[array_rand($finalOptions)] = $authoritativeCorrectAnswer;
                    }
                }

                shuffle($finalOptions); // Xáo trộn các lựa chọn cuối cùng

                $outputQuestion = [
                    'questionText' => trim($generatedQuestion['questionText']),
                    'options' => $finalOptions,
                    'correctAnswer' => $authoritativeCorrectAnswer // Trả về đáp án đúng đã được xác thực
                ];
                echo json_encode($outputQuestion);
            } else {
                http_response_code(500);
                echo json_encode([
                    'error' => 'Output từ AI không đúng định dạng JSON mong muốn hoặc thiếu trường quan trọng.',
                    'raw_ai_output' => $aiTextOutput, // Giữ nguyên để debug
                    'json_decode_error' => json_last_error_msg(),
                    'parsed_json_attempt' => $generatedQuestion // Xem AI đã parse ra gì
                ]);
            }
        } else {
            // Kiểm tra xem có thông tin lỗi từ API không
            $errorDetails = isset($responseData['error']) ? $responseData['error'] : (isset($responseData['promptFeedback']) ? $responseData['promptFeedback'] : 'Unknown error structure from API');
            http_response_code(500);
            echo json_encode(['error' => 'Không nhận được nội dung hợp lệ từ AI (thiếu candidates/content/parts).', 'api_response_structure' => $responseData, 'api_error_details' => $errorDetails]);
        }
    } else {
        http_response_code($httpcode);
        echo json_encode(['error' => 'Lỗi từ Gemini API', 'status_code' => $httpcode, 'response_body' => json_decode($response, true)]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Chỉ chấp nhận phương thức POST.']);
}
