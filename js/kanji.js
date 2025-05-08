document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements - Reusing similar structure as script.js
    const flashcardContainer = document.getElementById('flashcardContainer');
    const flashcard = document.getElementById('flashcard');
    const kanjiDisplay = document.getElementById('kanjiDisplay');
    const onYomiDisplay = document.getElementById('onYomiDisplay');
    const kunYomiDisplay = document.getElementById('kunYomiDisplay');
    const meaningDisplay = document.getElementById('meaningDisplay');
    const exampleDisplay = document.getElementById('exampleDisplay');
    const flipButton = document.getElementById('flipButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const intervalSelect = document.getElementById('intervalSelect');
    const progressBar = document.getElementById('progressBar');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const flashcardApp = document.getElementById('flashcardApp');
    const remainingCountDisplay = document.getElementById('remainingCount');
    const currentCardNumberDisplay = document.getElementById('currentCardNumber');
    const totalInReviewSetDisplay = document.getElementById('totalInReviewSet'); 
    const totalSelectedCountDisplay = document.getElementById('totalSelectedCount');

    const initialSetupDiv = document.getElementById('initialSetup');
    const startWordInput = document.getElementById('startWord');
    const endWordInput = document.getElementById('endWord');
    const loadRangeButton = document.getElementById('loadRangeButton');
    const totalWordsMessage = document.getElementById('totalWordsMessage');
    const restartButton = document.getElementById('restartButton');

    const markKnownButton = document.getElementById('markKnownButton');
    const markUnknownButton = document.getElementById('markUnknownButton');
    const clearMarkButton = document.getElementById('clearMarkButton');
    const markIndicator = document.getElementById('markIndicator');
    const reviewModeSelect = document.getElementById('reviewModeSelect');
    const clearAllMarksButton = document.getElementById('clearAllMarksButton');

    // Mode switcher elements
    const modeSwitcher = document.getElementById('modeSwitcher');
    const switchToFlashcardSetupBtn = document.getElementById('switchToFlashcardSetupBtn');
    const switchToWordSetManagerBtn = document.getElementById('switchToWordSetManagerBtn');
    const switchToTestSetupBtn = document.getElementById('switchToTestSetupBtn');

    // Word set manager elements
    const wordSetManagerDiv = document.getElementById('wordSetManager');
    const wordSetNameInput = document.getElementById('wordSetName');
    const wordSetStartInput = document.getElementById('wordSetStart');
    const wordSetEndInput = document.getElementById('wordSetEnd');
    const createWordSetButton = document.getElementById('createWordSetButton');
    const wordSetListContainer = document.getElementById('wordSetListContainer');
    const wordSetListDiv = document.getElementById('wordSetList');
    const noWordSetsMessage = document.getElementById('noWordSetsMessage');
    const wordSetTotalMessage = document.getElementById('wordSetTotalMessage');

    // Word set detail elements
    const wordSetDetailViewDiv = document.getElementById('wordSetDetailView');
    const detailViewName = document.getElementById('detailViewName');
    const detailViewRange = document.getElementById('detailViewRange');
    const studySetFlashcardButton = document.getElementById('studySetFlashcardButton');
    const testSetButton = document.getElementById('testSetButton');
    const backToSetManagerButton = document.getElementById('backToSetManagerButton');
    const detailWordListDiv = document.getElementById('detailWordList');
    const backToWordSetManagerFromFlashcardBtn = document.getElementById('backToWordSetManagerFromFlashcard');
    const backToWordSetManagerFromTestSetupBtn = document.getElementById('backToWordSetManagerFromTestSetup');

    // Test elements
    const testSetupDiv = document.getElementById('testSetup');
    const numTestQuestionsInput = document.getElementById('numTestQuestions');
    const testTypeSelect = document.getElementById('testType');
    const testStartWordInput = document.getElementById('testStartWord');
    const testEndWordInput = document.getElementById('testEndWord');
    const startTestButton = document.getElementById('startTestButton');
    const backToFlashcardModeButton = document.getElementById('backToFlashcardModeButton');
    const testInterfaceDiv = document.getElementById('testInterface');
    const currentQuestionNumDisplay = document.getElementById('currentQuestionNum');
    const totalTestQuestionsDisplay = document.getElementById('totalTestQuestions');
    const questionTextDisplay = document.getElementById('questionText');
    const optionsArea = document.getElementById('optionsArea');
    const nextQuestionButton = document.getElementById('nextQuestionButton');
    const testFeedbackDisplay = document.getElementById('testFeedback');
    const finishTestButton = document.getElementById('finishTestButton');
    const testResultsDiv = document.getElementById('testResults');
    const scoreCorrectDisplay = document.getElementById('scoreCorrect');
    const scoreTotalDisplay = document.getElementById('scoreTotal');
    const scorePercentageDisplay = document.getElementById('scorePercentage');
    const reviewAnswersArea = document.getElementById('reviewAnswersArea');
    const retakeTestButton = document.getElementById('retakeTestButton');
    const backToTestSetupButton = document.getElementById('backToTestSetupButton');
    const backToFlashcardFromResultsButton = document.getElementById('backToFlashcardFromResultsButton');

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');

    // State variables
    let fullVocabulary = [];      
    let vocabulary = [];          
    let activeVocabulary = [];    
    let currentCardIndex = -1;    
    let isFlipped = false;
    let autoNextInterval;
    let autoNextDuration = 5000;
    let wordSets = [];
    let currentStudyingSet = null;
    let testQuestions = [];
    let currentTestQuestionIndex = 0;
    let userScore = 0;
    let currentTestConfig = {};
    let answeredQuestions = [];
    let isDarkMode = false;

    // Constants
    const STORAGE_KEY_PREFIX = 'kanji_mark_';
    const WORD_SETS_STORAGE_KEY = 'kanji_word_sets';
    const THEME_STORAGE_KEY = 'flashcard_theme';

    // Theme toggle functionality
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            isDarkMode = true;
        }
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    });

    // Function to generate a unique key for localStorage
    function generateStorageKey(card) {
        if (!card || !card.kanji) return null;
        const primaryId = card.kanji.replace(/\s+/g, '_');
        const secondaryId = (card.meaning || 'no_meaning').substring(0,15).replace(/\s+/g, '_');
        return `${STORAGE_KEY_PREFIX}${primaryId}_${secondaryId}`;
    }

    // // Load CSV vocabulary
    // async function loadFullCSVVocabulary(filePath = '../csv/n3_kanji.csv') {
    //     showScreen('loading');
    //     try {
    //         const response = await fetch(filePath);
    //         if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }
    //         const csvText = await response.text();
    //         if (!csvText.trim()) throw new Error("File CSV trống.");
            
    //         const lines = csvText.trim().split(/\r?\n/);
    //         if (lines.length < 2) throw new Error("CSV cần header và ít nhất 1 dòng data.");

    //         const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    //         ['kanji', 'on_yomi', 'kun_yomi', 'meaning', 'example'].forEach(reqH => {
    //             if (!headers.includes(reqH)) throw new Error(`Thiếu header '${reqH}'.`);
    //         });

    //         const data = lines.slice(1).map((line, lineIndex) => {
    //             const values = [];
    //             let currentVal = ''; 
    //             let inQuotes = false;
                
    //             for (let i = 0; i < line.length; i++) {
    //                 const char = line[i];
    //                 if (char === '"') {
    //                     if (inQuotes && i + 1 < line.length && line[i+1] === '"') { 
    //                         currentVal += '"'; 
    //                         i++; 
    //                     } else { 
    //                         inQuotes = !inQuotes; 
    //                     }
    //                 } else if (char === ',' && !inQuotes) { 
    //                     values.push(currentVal.trim()); 
    //                     currentVal = ''; 
    //                 } else { 
    //                     currentVal += char; 
    //                 }
    //             }
    //             values.push(currentVal.trim());

    //             if (values.length !== headers.length) { 
    //                 console.warn(`Dòng ${lineIndex + 2} CSV cột không khớp.`); 
    //                 return null; 
    //             }
                
    //             let entry = {};
    //             headers.forEach((header, index) => { 
    //                 entry[header] = values[index] || ''; 
    //             });
                
    //             if (!entry.kanji || !entry.meaning) { 
    //                 console.warn(`Dòng ${lineIndex + 2} thiếu data.`); 
    //                 return null; 
    //             }

    //             // Load mark from localStorage
    //             const storageKey = generateStorageKey(entry);
    //             const savedMark = storageKey ? localStorage.getItem(storageKey) : null;
    //             entry.mark = (savedMark === 'known' || savedMark === 'unknown') ? savedMark : null;
                
    //             return entry;
    //         }).filter(entry => entry !== null);

    //         if (data.length === 0) throw new Error("Không có data hợp lệ từ CSV.");
            
    //         return data;
    //     } catch (error) {
    //         console.error("Lỗi tải/xử lý CSV:", error);
    //         displayError(`Lỗi CSV: ${error.message}`);
    //         return [];
    //     }
    // }
    async function prepareInitialSetup() {
        showScreen('loading');
        // fullVocabulary = await loadFullCSVVocabulary(); // Dòng này sẽ được thay thế
    
        // KIỂM TRA XEM N3_KANJI_DATA CÓ TỒN TẠI KHÔNG
        if (typeof N3_KANJI_DATA !== 'undefined' && Array.isArray(N3_KANJI_DATA)) {
            fullVocabulary = N3_KANJI_DATA.map(entry => {
                // Bạn vẫn cần load mark từ localStorage nếu có logic này
                const storageKey = generateStorageKey(entry); // Giả sử bạn có hàm này
                const savedMark = storageKey ? localStorage.getItem(storageKey) : null;
                return {
                    ...entry, // Sao chép tất cả thuộc tính từ entry
                    mark: (savedMark === 'known' || savedMark === 'unknown') ? savedMark : null
                };
            });
        } else {
            console.error("Dữ liệu N3_KANJI_DATA không được định nghĩa hoặc không phải là mảng.");
            fullVocabulary = []; // Khởi tạo mảng rỗng để tránh lỗi ở các phần sau
        }
    
    
        if (fullVocabulary && fullVocabulary.length > 0) {
            loadWordSets(); // Giữ lại nếu bạn có quản lý bộ từ
            showScreen('wordSetManager'); // Hoặc màn hình bạn muốn hiển thị đầu tiên
    
            // Update max values for range inputs
            endWordInput.max = fullVocabulary.length;
            startWordInput.max = fullVocabulary.length;
            wordSetStartInput.max = fullVocabulary.length;
            wordSetEndInput.max = fullVocabulary.length;
            testStartWordInput.max = fullVocabulary.length;
            testEndWordInput.max = fullVocabulary.length;
    
            // Set default values
            if (fullVocabulary.length > 0) {
                endWordInput.value = fullVocabulary.length;
                testEndWordInput.value = fullVocabulary.length;
                wordSetEndInput.value = fullVocabulary.length;
            }
    
            totalWordsMessage.textContent = `Tổng số Kanji trong file: ${fullVocabulary.length}`;
            updateWordSetTotalMessage(); // Giữ lại nếu có
        } else if (errorMessage.classList.contains('hidden') || (typeof N3_KANJI_DATA === 'undefined')) {
            displayError("Không tải được Kanji. Không thể tiếp tục. Vui lòng kiểm tra file n3_kanji_data.js.");
        }
    }

    // function displayError(message) { 
    //     errorMessage.textContent = message;
    //     showScreen('error');
    // }

    // async function prepareInitialSetup() {
    //     showScreen('loading');
    //     fullVocabulary = await loadFullCSVVocabulary();
    //     if (fullVocabulary && fullVocabulary.length > 0) {
    //         loadWordSets();
    //         showScreen('wordSetManager');
            
    //         // Update max values for range inputs
    //         endWordInput.max = fullVocabulary.length;
    //         startWordInput.max = fullVocabulary.length;
    //         wordSetStartInput.max = fullVocabulary.length;
    //         wordSetEndInput.max = fullVocabulary.length;
    //         testStartWordInput.max = fullVocabulary.length;
    //         testEndWordInput.max = fullVocabulary.length;
            
    //         // Set default values
    //         if (fullVocabulary.length > 0) {
    //             endWordInput.value = fullVocabulary.length;
    //             testEndWordInput.value = fullVocabulary.length;
    //             wordSetEndInput.value = fullVocabulary.length;
    //         }
            
    //         totalWordsMessage.textContent = `Tổng số Kanji trong file: ${fullVocabulary.length}`;
    //         updateWordSetTotalMessage();
    //     } else if (errorMessage.classList.contains('hidden')) {
    //         displayError("Không tải được Kanji. Không thể tiếp tục.");
    //     }
    // }
    
    function initializeAppWithRange(sourceVocabArray = null, sourceName = "khoảng đã chọn") {
        let start, end;
        if (sourceVocabArray) {
            vocabulary = sourceVocabArray.map(card => ({ ...card }));
        } else {
            start = parseInt(startWordInput.value);
            end = parseInt(endWordInput.value);

            if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
                alert(`Khoảng Kanji không hợp lệ (1-${fullVocabulary.length}, Từ <= Đến).`);
                showScreen('initialSetup');
                return;
            }
            vocabulary = fullVocabulary.slice(start - 1, end).map(card => ({ ...card }));
        }

        if (vocabulary.length > 0) {
            showScreen('flashcardApp');
            errorMessage.classList.add('hidden');

            shuffleArray(vocabulary);
            reviewModeSelect.value = 'all';
            applyReviewMode();

            totalSelectedCountDisplay.textContent = vocabulary.length;
            
            // Update title if studying from a set
            const fcAppTitle = flashcardApp.querySelector('h2');
            if (sourceName !== "khoảng đã chọn" && fcAppTitle) {
                fcAppTitle.textContent = `Flashcard Kanji - Bộ: ${sourceName}`;
            } else if (fcAppTitle) {
                fcAppTitle.textContent = `Flashcard Kanji N3`;
            }
        } else {
            displayError(`Không có Kanji trong ${sourceName}.`);
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'initialSetup');
        }
    }
    
    function applyReviewMode() {
        const mode = reviewModeSelect.value;
        clearTimeout(autoNextInterval);

        switch(mode) {
            case 'unknown':
                activeVocabulary = vocabulary.filter(card => card.mark === 'unknown');
                break;
            case 'known':
                activeVocabulary = vocabulary.filter(card => card.mark === 'known');
                break;
            case 'unmarked':
                activeVocabulary = vocabulary.filter(card => card.mark === null);
                break;
            case 'all':
            default:
                activeVocabulary = [...vocabulary];
                break;
        }
        if (mode !== 'all') {
            shuffleArray(activeVocabulary);
        }

        if (activeVocabulary.length === 0) {
            showCompletionMessage(`Không có Kanji nào ở chế độ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}".`);
            currentCardIndex = -1; 
            updateMarkIndicator(); 
        } else {
            displayCardAtIndex(0);
        }
        updateCounts();
    }

    function shuffleArray(array) { 
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function displayCardAtIndex(index) {
        if (activeVocabulary.length === 0 || index < 0 || index >= activeVocabulary.length) {
            console.warn("displayCardAtIndex được gọi với index không hợp lệ hoặc activeVocabulary trống.", index, activeVocabulary.length);
            if (isFlipped) {
                flashcard.style.transition = 'none';
                flipCard(false);
                void flashcard.offsetWidth;
                flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
            
            kanjiDisplay.textContent = "";
            onYomiDisplay.textContent = "";
            kunYomiDisplay.textContent = "";
            meaningDisplay.textContent = "Không có thẻ để hiển thị.";
            exampleDisplay.textContent = "";
            updateCounts();
            updateMarkIndicator();
            
            flipButton.disabled = true;
            markKnownButton.disabled = true;
            markUnknownButton.disabled = true;
            clearMarkButton.disabled = true;
            nextButton.disabled = true;
            prevButton.disabled = true;
            return;
        }

        if (isFlipped) {
            flashcard.style.transition = 'none';
            flipCard(false);
            void flashcard.offsetWidth;
            flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        currentCardIndex = index;
        const cardData = activeVocabulary[currentCardIndex];

        kanjiDisplay.textContent = cardData.kanji || "N/A";
        onYomiDisplay.textContent = cardData.on_yomi || "";
        kunYomiDisplay.textContent = cardData.kun_yomi || "";
        meaningDisplay.textContent = cardData.meaning || "N/A";
        exampleDisplay.textContent = cardData.example || "";

        updateMarkIndicator();
        enableControlsOnCardDisplay();
        resetProgressBar();
        startProgressBar();
        setupAutoNext();
        updateCounts();
    }

    function enableControlsOnCardDisplay() {
        flipButton.disabled = false;
        markKnownButton.disabled = false;
        markUnknownButton.disabled = false;
        clearMarkButton.disabled = false;
        intervalSelect.disabled = false;
        restartButton.disabled = false;
        
        nextButton.disabled = (currentCardIndex >= activeVocabulary.length - 1);
        prevButton.disabled = (currentCardIndex <= 0);
    }

    function showNextCard() {
        clearTimeout(autoNextInterval);
        if (currentCardIndex + 1 < activeVocabulary.length) {
            displayCardAtIndex(currentCardIndex + 1);
        } else {
            showCompletionMessage(`Bạn đã xem hết Kanji trong bộ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}"!`);
        }
    }

    function showPreviousCard() {
        clearTimeout(autoNextInterval);
        if (currentCardIndex > 0) {
            displayCardAtIndex(currentCardIndex - 1);
        } else {
            if (activeVocabulary.length > 0 && currentCardIndex === 0) {
                setupAutoNext(); 
                startProgressBar();
            }
        }
    }
    
    function showCompletionMessage(message) {
        if (isFlipped) {
            flashcard.style.transition = 'none';
            flipCard(false);
            void flashcard.offsetWidth;
            flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        kanjiDisplay.textContent = "Hoàn thành bộ!";
        onYomiDisplay.textContent = "";
        kunYomiDisplay.textContent = "";
        meaningDisplay.textContent = message;
        exampleDisplay.textContent = "";

        clearTimeout(autoNextInterval);
        progressBar.style.width = '100%';

        flipButton.disabled = true;
        markKnownButton.disabled = true;
        markUnknownButton.disabled = true;
        clearMarkButton.disabled = true;
        nextButton.disabled = true;
        prevButton.disabled = (activeVocabulary.length === 0 || currentCardIndex <= 0);
        intervalSelect.disabled = true;
        restartButton.disabled = false;
        
        updateCounts();
        updateMarkIndicator();
    }

    function updateCounts() {
        let studiedInSet = 0;
        if (activeVocabulary.length > 0) {
            if (kanjiDisplay.textContent === "Hoàn thành bộ!") {
                 studiedInSet = activeVocabulary.length;
            } else {
                 studiedInSet = Math.max(0, currentCardIndex + 1);
            }
        }
        
        let remainingInSet = activeVocabulary.length - studiedInSet;
        remainingCountDisplay.textContent = Math.max(0, remainingInSet);
        currentCardNumberDisplay.textContent = (activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length && currentCardIndex !== -1) ? currentCardIndex + 1 : (activeVocabulary.length > 0 ? activeVocabulary.length : 0);
        totalInReviewSetDisplay.textContent = activeVocabulary.length;
        totalSelectedCountDisplay.textContent = vocabulary.length; 
    }

    function flipCard(toggle = true) {
        if (flipButton.disabled) return;
        if (toggle) isFlipped = !isFlipped;
        else isFlipped = false; 
        flashcard.classList.toggle('is-flipped', isFlipped);
    }

    function markCurrentCard(status) { 
        if (currentCardIndex === -1 || currentCardIndex >= activeVocabulary.length) return;
        
        const currentCardInActive = activeVocabulary[currentCardIndex];
        const storageKey = generateStorageKey(currentCardInActive);

        // Update in-memory activeVocabulary
        currentCardInActive.mark = status;

        // Find and update in vocabulary (session's full selected range)
        const originalCardInSession = vocabulary.find(card => 
            generateStorageKey(card) === storageKey
        );
        if (originalCardInSession) {
            originalCardInSession.mark = status;
        }

        // Find and update in fullVocabulary (all CSV data)
        const originalCardInFull = fullVocabulary.find(card =>
            generateStorageKey(card) === storageKey
        );
        if(originalCardInFull) {
            originalCardInFull.mark = status;
        }

        // Save to localStorage
        if (storageKey) {
            if (status === null) {
                localStorage.removeItem(storageKey);
            } else {
                localStorage.setItem(storageKey, status);
            }
        }
        updateMarkIndicator();
    }

    function updateMarkIndicator() {
        if (currentCardIndex === -1 || currentCardIndex >= activeVocabulary.length || !activeVocabulary[currentCardIndex]) {
            markIndicator.textContent = '';
            markIndicator.className = 'mark-indicator';
            return;
        }
        const mark = activeVocabulary[currentCardIndex].mark;
        if (mark === 'known') {
            markIndicator.textContent = 'O';
            markIndicator.className = 'mark-indicator mark-known';
        } else if (mark === 'unknown') {
            markIndicator.textContent = 'X';
            markIndicator.className = 'mark-indicator mark-unknown';
        } else {
            markIndicator.textContent = '';
            markIndicator.className = 'mark-indicator';
        }
    }

    function setupAutoNext() {
        clearTimeout(autoNextInterval);
        if (autoNextDuration > 0 && activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length) {
            autoNextInterval = setTimeout(() => {
                if (!isFlipped) flipCard(); 
                setTimeout(() => { showNextCard(); }, isFlipped ? 0 : 600); 
            }, autoNextDuration);
        }
    }
    
    function resetProgressBar() {
        progressBar.style.transition = 'none';
        progressBar.style.width = '100%';
        void progressBar.offsetWidth; 
        progressBar.style.transition = `width ${autoNextDuration / 1000}s linear`;
    }
    
    function startProgressBar() {
        if (autoNextDuration <= 0 || currentCardIndex >= activeVocabulary.length) {
            progressBar.style.width = '100%'; 
            return;
        }
        resetProgressBar();
        setTimeout(() => { progressBar.style.width = '0%'; }, 50);
    }

    function handleRestart() {
        clearTimeout(autoNextInterval);
        
        if (currentStudyingSet) {
            viewWordSetDetail(wordSets.findIndex(s => s.id === currentStudyingSet.id));
        } else {
            showScreen('wordSetManager');
        }
        
        reviewModeSelect.value = 'all';
        activeVocabulary = [];
        vocabulary = [];
        currentCardIndex = -1;

        const fcAppTitle = flashcardApp.querySelector('h2');
        if(fcAppTitle) fcAppTitle.textContent = "Flashcard Kanji N3";
    }

    function handleClearAllMarks() {
        if (confirm("Bạn có chắc chắn muốn xóa TẤT CẢ các đánh dấu (O/X) đã lưu không? Hành động này không thể hoàn tác.")) {
            let keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).startsWith(STORAGE_KEY_PREFIX)) {
                    keysToRemove.push(localStorage.key(i));
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            alert("Đã xóa tất cả đánh dấu đã lưu.");

            fullVocabulary = [];
            if (!flashcardApp.classList.contains('hidden')) {
                handleRestart();
            } else {
                prepareInitialSetup();
            }
        }
    }

    // Word Set Management Functions
    function saveWordSets() {
        localStorage.setItem(WORD_SETS_STORAGE_KEY, JSON.stringify(wordSets));
    }

    function loadWordSets() {
        const storedSets = localStorage.getItem(WORD_SETS_STORAGE_KEY);
        if (storedSets) {
            wordSets = JSON.parse(storedSets);
        } else {
            // Create default word sets if none exist
            wordSets = [
                { name: "N3 Kanji Phần 1", start: 1, end: 50, id: Date.now() + "_p1" },
                { name: "N3 Kanji Phần 2", start: 51, end: 100, id: Date.now() + "_p2" },
                { name: "N3 Kanji Phần 3", start: 101, end: 150, id: Date.now() + "_p3" },
            ];
            saveWordSets();
        }
        renderWordSetList();
    }

    function renderWordSetList() {
        wordSetListDiv.innerHTML = '';
        if (wordSets.length === 0) {
            noWordSetsMessage.classList.remove('hidden');
            return;
        }
        noWordSetsMessage.classList.add('hidden');

        wordSets.forEach((set, index) => {
            const item = document.createElement('div');
            item.classList.add('word-set-item');
            item.innerHTML = `
                <div>
                    <span class="word-set-name">${set.name}</span>
                    <span class="word-set-info">(Từ ${set.start} - ${set.end}, ${set.end - set.start + 1} Kanji)</span>
                </div>
                <div class="word-set-actions">
                    <button data-index="${index}" class="view-set-btn primary-btn">Xem</button>
                    <button data-index="${index}" class="delete-set-btn danger-btn">Xóa</button>
                </div>
            `;
            
            item.querySelector('.view-set-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                viewWordSetDetail(index);
            });
            
            item.querySelector('.delete-set-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteWordSet(index);
            });
            
            wordSetListDiv.appendChild(item);
        });
    }

    function createWordSet() {
        const name = wordSetNameInput.value.trim();
        const start = parseInt(wordSetStartInput.value);
        const end = parseInt(wordSetEndInput.value);

        if (!name) {
            alert("Vui lòng nhập tên cho bộ Kanji.");
            return;
        }
        if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
            alert(`Khoảng Kanji không hợp lệ. Đảm bảo Từ >= 1, Đến >= Từ, và Đến <= ${fullVocabulary.length}.`);
            return;
        }

        const newSet = {
            id: Date.now().toString(),
            name: name,
            start: start,
            end: end
        };
        wordSets.push(newSet);
        saveWordSets();
        renderWordSetList();
        wordSetNameInput.value = '';
        updateWordSetTotalMessage();
    }

    function deleteWordSet(index) {
        if (index < 0 || index >= wordSets.length) return;
        const setName = wordSets[index].name;
        if (confirm(`Bạn có chắc chắn muốn xóa bộ Kanji "${setName}" không?`)) {
            wordSets.splice(index, 1);
            saveWordSets();
            renderWordSetList();
        }
    }

    function viewWordSetDetail(index) {
        if (index < 0 || index >= wordSets.length) return;
        const set = wordSets[index];
        currentStudyingSet = set;

        detailViewName.textContent = set.name;
        detailViewRange.textContent = `Từ ${set.start} đến ${set.end} (Tổng: ${set.end - set.start + 1} Kanji)`;

        const wordsInSet = fullVocabulary.slice(set.start - 1, set.end);
        detailWordListDiv.innerHTML = '';

        if (wordsInSet.length > 0) {
            const table = document.createElement('table');
            const thead = table.createTHead();
            const headerRow = thead.insertRow();
            ['STT', 'Kanji', 'Âm On', 'Âm Kun', 'Ý nghĩa'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });

            const tbody = table.createTBody();
            wordsInSet.forEach((word, i) => {
                const row = tbody.insertRow();
                row.insertCell().textContent = set.start + i;
                row.insertCell().textContent = word.kanji || '-';
                row.insertCell().textContent = word.on_yomi || '-';
                row.insertCell().textContent = word.kun_yomi || '-';
                row.insertCell().textContent = word.meaning;
            });
            detailWordListDiv.appendChild(table);
        } else {
            detailWordListDiv.textContent = "Không có Kanji nào trong bộ này (có thể do file CSV đã thay đổi).";
        }

        showScreen('wordSetDetail');
    }

    function updateWordSetTotalMessage() {
        if (fullVocabulary.length > 0) {
            wordSetStartInput.max = fullVocabulary.length;
            wordSetEndInput.max = fullVocabulary.length;
            wordSetTotalMessage.textContent = `Tổng số Kanji trong file CSV: ${fullVocabulary.length}. Nhập khoảng Kanji để tạo bộ.`;
        } else {
            wordSetTotalMessage.textContent = "Đang chờ tải file CSV...";
        }
    }

    // Test Functions
    function startTest(sourceVocabArray = null, sourceSetName = null) {
        const numQuestions = parseInt(numTestQuestionsInput.value);
        const type = testTypeSelect.value;
        let start, end;
        let vocabSource;

        if (sourceVocabArray) {
            vocabSource = [...sourceVocabArray];
            start = currentStudyingSet ? currentStudyingSet.start : 1;
            end = currentStudyingSet ? currentStudyingSet.end : vocabSource.length;
        } else {
            start = parseInt(testStartWordInput.value);
            end = parseInt(testEndWordInput.value);

            if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
                alert(`Vui lòng nhập khoảng Kanji hợp lệ cho bài kiểm tra (Từ 1 đến ${fullVocabulary.length}, Từ số <= Đến số).`);
                showScreen('testSetup');
                return;
            }
            vocabSource = fullVocabulary.slice(start - 1, end);
        }

        if (vocabSource.length < 1) {
            alert("Không đủ Kanji trong nguồn đã chọn để tạo bài kiểm tra.");
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
            return;
        }
        
        if (vocabSource.length < 4 && numQuestions > 1) {
            alert("Nguồn Kanji quá ít (< 4 Kanji) để tạo nhiều câu hỏi với các lựa chọn khác nhau. Vui lòng giảm số câu hỏi hoặc mở rộng nguồn Kanji.");
            if (!(numQuestions === 1 && vocabSource.length >=1)) {
                showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
                return;
            }
        }
        
        if (numQuestions > vocabSource.length) {
            alert(`Số câu hỏi (${numQuestions}) không thể lớn hơn số Kanji có sẵn (${vocabSource.length}).`);
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
            return;
        }

        currentTestConfig = { numQuestions, type, start, end, sourceSetName: sourceSetName };

        testQuestions = generateTestQuestions(vocabSource, numQuestions, type);
        if (testQuestions.length === 0) {
            alert("Không thể tạo câu hỏi. Vui lòng kiểm tra lại dữ liệu và cài đặt.");
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
            return;
        }

        currentTestQuestionIndex = 0;
        userScore = 0;
        answeredQuestions = [];

        showScreen('testInterface');
        nextQuestionButton.classList.add('hidden');
        finishTestButton.classList.remove('hidden');

        // Update title if testing from a set
        const testInterfaceTitle = document.querySelector('#testInterface h2');
        if (sourceSetName && testInterfaceTitle) {
            testInterfaceTitle.textContent = `Bài Kiểm Tra Kanji - Bộ: ${sourceSetName}`;
        } else if (testInterfaceTitle) {
            testInterfaceTitle.textContent = `Bài Kiểm Tra Kanji`;
        }

        displayTestQuestion();
    }

    function generateTestQuestions(sourceVocab, numQuestions, type) {
        const questions = [];
        let availableVocab = [...sourceVocab];

        if (availableVocab.length < numQuestions) {
            console.error("Không đủ Kanji nguồn để tạo đủ số câu hỏi yêu cầu.");
            return [];
        }

        for (let i = 0; i < numQuestions; i++) {
            if (availableVocab.length === 0) break;

            const correctIndex = Math.floor(Math.random() * availableVocab.length);
            const correctAnswerCard = availableVocab.splice(correctIndex, 1)[0];

            let questionText, correctAnswerText;
            const options = [];

            switch(type) {
                case 'kanjiToMeaning':
                    questionText = correctAnswerCard.kanji;
                    correctAnswerText = correctAnswerCard.meaning;
                    options.push(correctAnswerText);
                    break;
                case 'meaningToKanji':
                    questionText = correctAnswerCard.meaning;
                    correctAnswerText = correctAnswerCard.kanji;
                    options.push(correctAnswerText);
                    break;
                case 'kanjiToReading':
                    questionText = correctAnswerCard.kanji;
                    correctAnswerText = correctAnswerCard.on_yomi || correctAnswerCard.kun_yomi;
                    options.push(correctAnswerText);
                    break;
                case 'readingToKanji':
                    questionText = correctAnswerCard.on_yomi || correctAnswerCard.kun_yomi;
                    correctAnswerText = correctAnswerCard.kanji;
                    options.push(correctAnswerText);
                    break;
            }

            let tempVocabForDistractors = sourceVocab.filter(word => 
                word.kanji !== correctAnswerCard.kanji
            );
            
            shuffleArray(tempVocabForDistractors);

            for (let j = 0; j < 3; j++) {
                if (tempVocabForDistractors.length === 0) break;
                const distractorCard = tempVocabForDistractors.pop();
                
                switch(type) {
                    case 'kanjiToMeaning':
                        options.push(distractorCard.meaning);
                        break;
                    case 'meaningToKanji':
                        options.push(distractorCard.kanji);
                        break;
                    case 'kanjiToReading':
                        options.push(distractorCard.on_yomi || distractorCard.kun_yomi);
                        break;
                    case 'readingToKanji':
                        options.push(distractorCard.kanji);
                        break;
                }
            }
            
            if (options.length < 2 && sourceVocab.length >= 4) {
                console.warn("Không đủ Kanji khác biệt để tạo đáp án nhiễu cho câu hỏi:", correctAnswerCard);
                i--;
                availableVocab.push(correctAnswerCard);
                continue;
            }
            
            shuffleArray(options);

            questions.push({
                questionText: questionText,
                options: options,
                correctAnswer: correctAnswerText,
                originalCard: correctAnswerCard
            });
        }
        return questions;
    }

    function displayTestQuestion() {
        if (currentTestQuestionIndex >= testQuestions.length) {
            finishTest();
            return;
        }

        const q = testQuestions[currentTestQuestionIndex];
        questionTextDisplay.textContent = q.questionText;
        optionsArea.innerHTML = '';

        q.options.forEach(optionText => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = optionText;
            button.addEventListener('click', () => handleAnswerSelection(optionText, q.correctAnswer, button, q.originalCard));
            optionsArea.appendChild(button);
        });

        currentQuestionNumDisplay.textContent = currentTestQuestionIndex + 1;
        totalTestQuestionsDisplay.textContent = testQuestions.length;
        testFeedbackDisplay.textContent = '';
        nextQuestionButton.classList.add('hidden');
        document.querySelectorAll('.option-button').forEach(btn => btn.disabled = false);
    }

    function handleAnswerSelection(selectedAnswer, correctAnswer, selectedButton, originalCard) {
        // Disable all option buttons after selection
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.remove('bg-blue-500', 'hover:bg-blue-700');
                btn.classList.add('bg-green-500'); // Highlight correct answer
            }
        });

        let isCorrect = false;
        if (selectedAnswer === correctAnswer) {
            userScore++;
            isCorrect = true;
            testFeedbackDisplay.textContent = "Chính xác!";
            testFeedbackDisplay.className = 'test-feedback text-success-color';
            selectedButton.classList.add('bg-success-color');
        } else {
            testFeedbackDisplay.textContent = `Sai rồi! Đáp án đúng: ${correctAnswer}`;
            testFeedbackDisplay.className = 'test-feedback text-danger-color';
            selectedButton.classList.add('bg-danger-color');
        }
        
        answeredQuestions.push({
            questionText: testQuestions[currentTestQuestionIndex].questionText,
            options: testQuestions[currentTestQuestionIndex].options,
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer,
            isCorrect: isCorrect,
            originalCard: originalCard
        });

        nextQuestionButton.classList.remove('hidden');
        if (currentTestQuestionIndex >= testQuestions.length - 1) {
            nextQuestionButton.textContent = "Xem Kết Quả";
        } else {
            nextQuestionButton.textContent = "Câu Tiếp Theo";
        }
    }

    function nextTestQuestion() {
        currentTestQuestionIndex++;
        displayTestQuestion();
    }
    
    function finishTest() {
        showScreen('testResults');
        finishTestButton.classList.add('hidden');

        scoreCorrectDisplay.textContent = userScore;
        scoreTotalDisplay.textContent = testQuestions.length;
        const percentage = testQuestions.length > 0 ? Math.round((userScore / testQuestions.length) * 100) : 0;
        scorePercentageDisplay.textContent = percentage;
        
        // Update score circle with percentage
        document.querySelector('.score-circle').style.setProperty('--score-percent', `${percentage}%`);

        reviewAnswersArea.innerHTML = '<h4>Xem lại câu sai:</h4>';
        const incorrectAnswers = answeredQuestions.filter(aq => !aq.isCorrect);
        if (incorrectAnswers.length > 0) {
            const ul = document.createElement('ul');
            incorrectAnswers.forEach(aq => {
                const li = document.createElement('li');
                li.innerHTML = `<b>Câu hỏi:</b> ${aq.questionText}<br/><b>Bạn chọn:</b> <span class="text-danger-color">${aq.selectedAnswer}</span><br/><b>Đáp án đúng:</b> <span class="text-success-color">${aq.correctAnswer}</span>`;
                ul.appendChild(li);
            });
            reviewAnswersArea.appendChild(ul);
        } else {
            reviewAnswersArea.innerHTML += '<p class="text-success-color">Tuyệt vời! Bạn đã trả lời đúng tất cả các câu!</p>';
        }
    }
    
    function retakeTestWithSameSettings() {
        if (currentTestConfig.numQuestions) {
            let vocabSourceForRetake;
            if (currentTestConfig.sourceSetName && currentStudyingSet && currentStudyingSet.name === currentTestConfig.sourceSetName) {
                vocabSourceForRetake = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
            } else if (currentTestConfig.sourceSetName) {
                const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
                if (originalSet) {
                    vocabSourceForRetake = fullVocabulary.slice(originalSet.start - 1, originalSet.end);
                    currentStudyingSet = originalSet;
                } else {
                    alert("Không tìm thấy bộ Kanji gốc để làm lại bài kiểm tra. Vui lòng cài đặt lại.");
                    showScreen('wordSetManager');
                    return;
                }
            } else {
                vocabSourceForRetake = fullVocabulary.slice(currentTestConfig.start - 1, currentTestConfig.end);
            }

            testQuestions = generateTestQuestions(vocabSourceForRetake, currentTestConfig.numQuestions, currentTestConfig.type);
            if (testQuestions.length === 0) {
                alert("Không thể tạo lại câu hỏi. Vui lòng kiểm tra lại dữ liệu.");
                showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
                return;
            }
            
            currentTestQuestionIndex = 0;
            userScore = 0;
            answeredQuestions = [];
            showScreen('testInterface');
            nextQuestionButton.classList.add('hidden');
            finishTestButton.classList.remove('hidden');

            const testInterfaceTitle = document.querySelector('#testInterface h2');
            if (currentTestConfig.sourceSetName && testInterfaceTitle) {
                testInterfaceTitle.textContent = `Bài Kiểm Tra Kanji - Bộ: ${currentTestConfig.sourceSetName}`;
            } else if (testInterfaceTitle) {
                testInterfaceTitle.textContent = `Bài Kiểm Tra Kanji`;
            }
            
            displayTestQuestion();
        } else {
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
        }
    }

    // Screen Management
    function showScreen(screenName) {
        // Hide all main screens
        initialSetupDiv.classList.add('hidden');
        flashcardApp.classList.add('hidden');
        testSetupDiv.classList.add('hidden');
        testInterfaceDiv.classList.add('hidden');
        testResultsDiv.classList.add('hidden');
        wordSetManagerDiv.classList.add('hidden');
        wordSetDetailViewDiv.classList.add('hidden');
        loadingMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');

        // Hide "back to word set manager" buttons
        backToWordSetManagerFromFlashcardBtn.classList.add('hidden');
        backToWordSetManagerFromTestSetupBtn.classList.add('hidden');

        // Update active state in mode switcher
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));

        // Show requested screen
        switch (screenName) {
            case 'initialSetup':
                initialSetupDiv.classList.remove('hidden');
                switchToFlashcardSetupBtn.classList.add('active');
                if (fullVocabulary.length > 0) totalWordsMessage.textContent = `Tổng số Kanji trong file: ${fullVocabulary.length}`;
                currentStudyingSet = null;
                break;
            case 'flashcardApp':
                flashcardApp.classList.remove('hidden');
                switchToFlashcardSetupBtn.classList.add('active');
                if (currentStudyingSet) {
                    backToWordSetManagerFromFlashcardBtn.classList.remove('hidden');
                }
                break;
            case 'testSetup':
                testSetupDiv.classList.remove('hidden');
                switchToTestSetupBtn.classList.add('active');
                if (fullVocabulary.length > 0) {
                    testEndWordInput.value = fullVocabulary.length;
                    numTestQuestionsInput.max = fullVocabulary.length;
                }
                if (currentStudyingSet) {
                    testStartWordInput.value = currentStudyingSet.start;
                    testEndWordInput.value = currentStudyingSet.end;
                    numTestQuestionsInput.max = currentStudyingSet.end - currentStudyingSet.start + 1;
                    testStartWordInput.disabled = true;
                    testEndWordInput.disabled = true;
                    backToWordSetManagerFromTestSetupBtn.classList.remove('hidden');
                } else {
                    testStartWordInput.disabled = false;
                    testEndWordInput.disabled = false;
                }
                break;
            case 'testInterface':
                testInterfaceDiv.classList.remove('hidden');
                switchToTestSetupBtn.classList.add('active');
                break;
            case 'testResults':
                testResultsDiv.classList.remove('hidden');
                switchToTestSetupBtn.classList.add('active');
                break;
            case 'wordSetManager':
                wordSetManagerDiv.classList.remove('hidden');
                switchToWordSetManagerBtn.classList.add('active');
                renderWordSetList();
                updateWordSetTotalMessage();
                currentStudyingSet = null;
                break;
            case 'wordSetDetail':
                wordSetDetailViewDiv.classList.remove('hidden');
                switchToWordSetManagerBtn.classList.add('active');
                break;
            case 'loading':
                loadingMessage.classList.remove('hidden');
                break;
            case 'error':
                errorMessage.classList.remove('hidden');
                break;
        }
    }

    // Event Listeners
    loadRangeButton.addEventListener('click', () => initializeAppWithRange());
    restartButton.addEventListener('click', handleRestart);
    reviewModeSelect.addEventListener('change', applyReviewMode);
    clearAllMarksButton.addEventListener('click', handleClearAllMarks);

    flashcardContainer.addEventListener('click', () => { if (!flipButton.disabled) flipCard(); });
    flipButton.addEventListener('click', () => flipCard());
    prevButton.addEventListener('click', () => { if (!prevButton.disabled) showPreviousCard(); });
    nextButton.addEventListener('click', () => { if (!nextButton.disabled) showNextCard(); });
    
    markKnownButton.addEventListener('click', () => markCurrentCard('known'));
    markUnknownButton.addEventListener('click', () => markCurrentCard('unknown'));
    clearMarkButton.addEventListener('click', () => markCurrentCard(null));

    intervalSelect.addEventListener('change', (event) => { 
        autoNextDuration = parseInt(event.target.value);
        if (activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length) { 
            clearTimeout(autoNextInterval); resetProgressBar(); startProgressBar(); setupAutoNext();
        } else if (autoNextDuration > 0) { resetProgressBar(); } 
        else { progressBar.style.width = '100%'; }
    });

    // Mode switcher listeners
    switchToFlashcardSetupBtn.addEventListener('click', () => showScreen('initialSetup'));
    switchToWordSetManagerBtn.addEventListener('click', () => showScreen('wordSetManager'));
    switchToTestSetupBtn.addEventListener('click', () => {
        currentStudyingSet = null;
        showScreen('testSetup');
    });

    // Word set manager listeners
    createWordSetButton.addEventListener('click', createWordSet);
    studySetFlashcardButton.addEventListener('click', () => {
        if (currentStudyingSet) {
            const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
            initializeAppWithRange(words, currentStudyingSet.name);
        }
    });
    testSetButton.addEventListener('click', () => {
        if (currentStudyingSet) {
            showScreen('testSetup');
            const numWordsInSet = currentStudyingSet.end - currentStudyingSet.start + 1;
            numTestQuestionsInput.value = Math.min(10, numWordsInSet);
            numTestQuestionsInput.max = numWordsInSet;
        }
    });
    backToSetManagerButton.addEventListener('click', () => showScreen('wordSetManager'));
    backToWordSetManagerFromFlashcardBtn.addEventListener('click', () => {
        if(currentStudyingSet) viewWordSetDetail(wordSets.findIndex(s => s.id === currentStudyingSet.id));
        else showScreen('wordSetManager');
    });
    backToWordSetManagerFromTestSetupBtn.addEventListener('click', () => {
        if(currentStudyingSet) viewWordSetDetail(wordSets.findIndex(s => s.id === currentStudyingSet.id));
        else showScreen('wordSetManager');
    });

    // Test listeners
    startTestButton.addEventListener('click', () => {
        if (currentStudyingSet && testStartWordInput.disabled) {
            const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
            startTest(words, currentStudyingSet.name);
        } else {
            startTest();
        }
    });
    nextQuestionButton.addEventListener('click', nextTestQuestion);
    finishTestButton.addEventListener('click', () => {
        if(confirm("Bạn có chắc muốn kết thúc bài kiểm tra sớm?")) {
            finishTest();
        }
    });
    retakeTestButton.addEventListener('click', retakeTestWithSameSettings);
    backToTestSetupButton.addEventListener('click', () => {
        if (currentTestConfig && currentTestConfig.sourceSetName) {
            const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
            if (originalSet) {
                currentStudyingSet = originalSet;
            } else {
                currentStudyingSet = null;
            }
        } else {
            currentStudyingSet = null;
        }
        showScreen('testSetup');
    });
    backToFlashcardFromResultsButton.addEventListener('click', () => {
        if (currentTestConfig && currentTestConfig.sourceSetName) {
            const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
            if (originalSet) {
                currentStudyingSet = originalSet;
                viewWordSetDetail(wordSets.indexOf(originalSet));
            } else {
                showScreen('wordSetManager');
            }
        } else {
            showScreen('wordSetManager');
        }
    });
    backToFlashcardModeButton.addEventListener('click', () => {
        if (currentStudyingSet) {
            viewWordSetDetail(wordSets.findIndex(s => s.id === currentStudyingSet.id));
        } else {
            showScreen('wordSetManager');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        if (flashcardApp.classList.contains('hidden')) return; 

        const activeEl = document.activeElement;
        const inInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'SELECT');

        if (inInput && ['ArrowLeft', 'ArrowRight', ' ', 'o', 'x'].includes(event.key.toLowerCase())) {
            if (event.key === ' ' && activeEl.tagName === 'SELECT') return;
            if (event.key.toLowerCase() === 'o' || event.key.toLowerCase() === 'x') { /* allow */ }
            else if (event.key !== ' ') return;
        }
        
        if (event.key === ' ' && (!inInput || (inInput && activeEl.type !== "text" && activeEl.type !== "number"))) {
            event.preventDefault();
        }
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.preventDefault();
        }

        switch (event.key.toLowerCase()) {
            case ' ': 
                if (!flipButton.disabled) flipCard();
                break;
            case 'arrowright':
                if (!nextButton.disabled) showNextCard();
                break;
            case 'arrowleft':
                if (!prevButton.disabled) showPreviousCard();
                break;
            case 'o':
                if (!markKnownButton.disabled) markCurrentCard('known');
                break;
            case 'x':
                if (!markUnknownButton.disabled) markCurrentCard('unknown');
                break;
        }
    });

    // Initialize
    initTheme();
    prepareInitialSetup();
});