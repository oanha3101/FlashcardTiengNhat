// js/n3_grammar_data.js
const n3GrammarData = [
    {
        id: "N3G001",
        grammar: "〜ことにしている",
        meaning: "Quyết định (tạo thành thói quen) làm gì đó.",
        connection: "Động từ thể từ điển (Vる)／Động từ thể ない (Vない) + ことにしている",
        notes: "Diễn tả một thói quen, một việc làm thường xuyên do bản thân mình quyết định và duy trì.",
        examples: [
            {
                jp: "<ruby>健康<rp>(</rp><rt>けんこう</rt><rp>)</rp></ruby>のため、<ruby>毎朝<rp>(</rp><rt>まいあさ</rt><rp>)</rp></ruby><ruby>牛乳<rp>(</rp><rt>ぎゅうにゅう</rt><rp>)</rp></ruby>を<ruby>飲<rp>(</rp><rt>の</rt><rp>)</rp></ruby>むことにしている。",
                vi: "Vì sức khỏe, tôi quyết định (tạo thói quen) uống sữa mỗi sáng.",
                cloze_jp: "健康のため、毎朝牛乳を飲む＿＿＿＿＿。",
                cloze_answer: "ことにしている"
            },
            {
                jp: "<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>さんは、<ruby>帰<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>りが<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>くなるときは、<ruby>必<rp>(</rp><rt>かなら</rt><rp>)</rp></ruby>ずメールすることにしているそうだ。",
                vi: "Nghe nói anh Tanaka quyết định (có thói quen) là những lúc về muộn thì nhất định sẽ gửi mail.",
                cloze_jp: "田中さんは、帰りが遅くなるときは、必ずメールする＿＿＿＿＿そうだ。",
                cloze_answer: "ことにしている"
            },
            {
                jp: "<ruby>若<rp>(</rp><rt>わか</rt><rp>)</rp></ruby>いころはオリンピックに<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>るのが<ruby>夢<rp>(</rp><rt>ゆめ</rt><rp>)</rp></ruby>で、<ruby>毎日<rp>(</rp><rt>まいにち</rt><rp>)</rp></ruby>８<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby><ruby>練習<rp>(</rp><rt>れんしゅう</rt><rp>)</rp></ruby>することにしていた。",
                vi: "Thời còn trẻ, ước mơ của tôi là được tham gia Olympic, nên tôi đã (quyết định) luyện tập 8 tiếng mỗi ngày.",
                cloze_jp: "若いころはオリンピックに出るのが夢で、毎日８時間練習する＿＿＿＿＿。",
                cloze_answer: "ことにしていた"
            },
            {
                jp: "<ruby>休日<rp>(</rp><rt>きゅうじつ</rt><rp>)</rp></ruby>は<ruby>家<rp>(</rp><rt>いえ</rt><rp>)</rp></ruby>で<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>をしないことにしているのに、<ruby>今週<rp>(</rp><rt>こんしゅう</rt><rp>)</rp></ruby>はどうしても<ruby>金曜日<rp>(</rp><rt>きんようび</rt><rp>)</rp></ruby>に<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わらせることができず、<ruby>持<rp>(</rp><rt>も</rt><rp>)</rp></ruby>って<ruby>帰<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>ってきた。",
                vi: "Tôi quyết định (có thói quen) không làm việc ở nhà vào ngày nghỉ, vậy mà tuần này dù thế nào cũng không thể xong việc vào thứ Sáu nên đã phải mang về nhà.",
                cloze_jp: "休日は家で仕事をしない＿＿＿＿＿のに、今週はどうしても金曜日に終わらせることができず、持って帰ってきた。",
                cloze_answer: "ことにしている"
            }
        ]
    },
    {
        id: "N3G002",
        grammar: "〜ことになっている",
        meaning: "Được quy định là/ Dự định là (không phải do bản thân quyết định)",
        connection: "Động từ thể từ điển (Vる)／Động từ thể ない (Vない) + ことになっている",
        notes: "Diễn tả những quy định, quy tắc, lịch trình, kế hoạch đã được định sẵn mà không phụ thuộc vào ý chí của người nói.",
        examples: [
            {
                jp: "<ruby>本校<rp>(</rp><rt>ほんこう</rt><rp>)</rp></ruby>では、<ruby>教室<rp>(</rp><rt>きょうしつ</rt><rp>)</rp></ruby>では<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>しか<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せないことになっている。",
                vi: "Ở trường này, quy định là trong lớp học chỉ được nói tiếng Nhật.",
                cloze_jp: "本校では、教室では日本語しか話せない＿＿＿＿＿＿。",
                cloze_answer: "ことになっている"
            },
            {
                jp: "<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>では、20<ruby>歳未満<rp>(</rp><rt>さいみまん</rt><rp>)</rp></ruby>はお<ruby>酒<rp>(</rp><rt>さけ</rp><rp>)</rp></ruby>を<ruby>飲<rp>(</rp><rt>の</rt><rp>)</rp></ruby>んではいけないことになっている。",
                vi: "Theo pháp luật, người dưới 20 tuổi không được uống rượu.",
                cloze_jp: "法律では、20歳未満はお酒を飲んではいけない＿＿＿＿＿＿。",
                cloze_answer: "ことになっている"
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>のうちでは、1<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>2<ruby>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby>に<ruby>親<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>せきが<ruby>皆<rp>(</rp><rt>みな</rt><rp>)</rp></ruby>、<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まることになっている。",
                vi: "Ở nhà tôi, (theo thông lệ/quyết định chung) vào ngày 2 tháng 1, tất cả họ hàng sẽ tụ tập.",
                cloze_jp: "私のうちでは、1月2日に親せきが皆、集まる＿＿＿＿＿＿。",
                cloze_answer: "ことになっている"
            },
            {
                jp: "<ruby>あした<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>はアルバイトの<ruby>面接<rp>(</rp><rt>めんせつ</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くことになっている。",
                vi: "Ngày mai tôi có lịch đi phỏng vấn xin việc làm thêm.",
                cloze_jp: "あしたはアルバイトの面接に行く＿＿＿＿＿＿。",
                cloze_answer: "ことになっている"
            },
            {
                jp: "「<ruby>中村<rp>(</rp><rt>なかむら</rt><rp>)</rp></ruby>さんとここで10<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>に<ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>うことになっていたんですが･･････」",
                vi: "Tôi đã có hẹn gặp anh Nakamura ở đây lúc 10 giờ nhưng...",
                cloze_jp: "「中村さんとここで10時に会う＿＿＿＿＿＿んですが･･････」",
                cloze_answer: "ことになっていた"
            }
        ]
    },
    {
        id: "N3G003",
        grammar: "〜ようになっている",
        meaning: "Được làm/thiết kế để (chức năng của máy móc, thiết bị)",
        connection: "Động từ thể từ điển (Vる)／Động từ thể ない (Vない) + ようになっている",
        notes: "Diễn tả một cơ chế, chức năng tự động của một máy móc hay hệ thống nào đó.",
        examples: [
            {
                jp: "このストーブは<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きく<ruby>傾<rp>(</rp><rt>かたむ</rt><rp>)</rp></ruby>くと、<ruby>自動的<rp>(</rp><rt>じどうてき</rt><rp>)</rp></ruby>に<ruby>火<rp>(</rp><rt>ひ</rp><rp>)</rp></ruby>が<ruby>消<rp>(</rp><rt>き</rt><rp>)</rp></ruby>えるようになっている。",
                vi: "Cái lò sưởi này được làm để lửa tự động tắt khi nó bị nghiêng nhiều.",
                cloze_jp: "このストーブは大きく傾くと、自動的に火が消える＿＿＿＿＿＿＿。",
                cloze_answer: "ようになっている"
            },
            {
                jp: "このドアは<ruby>閉<rp>(</rp><rt>し</rt><rp>)</rp></ruby>めると、カギがかかるようになっている。",
                vi: "Cánh cửa này được thiết kế để tự khóa khi đóng lại.",
                cloze_jp: "このドアは閉めると、カギがかかる＿＿＿＿＿＿＿。",
                cloze_answer: "ようになっている"
            },
            {
                jp: "この<ruby>自動販売機<rp>(</rp><rt>じどうはんばいき</rt><rp>)</rp></ruby>はレバーを<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>さないと、おつりが<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>ないようになっている。",
                vi: "Máy bán hàng tự động này được thiết kế để không nhả tiền thừa nếu không nhấn cần gạt.",
                cloze_jp: "この自動販売機はレバーを押さないと、おつりが出ない＿＿＿＿＿＿＿。",
                cloze_answer: "ようになっている"
            },
            {
                jp: "この<ruby>画面<rp>(</rp><rt>がめん</rt><rp>)</rp></ruby>はパスワードを<ruby>入力<rp>(</rp><rt>にゅうりょく</rt><rp>)</rp></ruby>しないと、<ruby>開<rp>(</rp><rt>ひら</rt><rp>)</rp></ruby>くことができないようになっている。",
                vi: "Màn hình này được thiết kế để không thể mở nếu không nhập mật khẩu.",
                cloze_jp: "この画面はパスワードを入力しないと、開くことができない＿＿＿＿＿＿＿。",
                cloze_answer: "ようになっている"
            }
        ]
    },
    {
        id: "N3G004",
        grammar: "〜ような/ように",
        meaning: "Như là, giống như (đưa ra ví dụ)",
        connection: "Danh từ + の + ような + Danh từ / Danh từ + の + ように + Động từ/Tính từ. Động từ (dạng bổ nghĩa danh từ) + ような + Danh từ / Động từ (dạng bổ nghĩa danh từ) + ように + Động từ/Tính từ.",
        notes: "Dùng để đưa ra ví dụ minh họa, so sánh. Cấu trúc theo tài liệu: 【名詞・動詞】の名詞修飾形 + ような + N / ように + V/Adj.",
        examples: [
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>赤<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>やピンクのような、<ruby>明<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>るい<ruby>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>が<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きだ。",
                vi: "Tôi thích những màu sắc tươi sáng như màu đỏ hay màu hồng.",
                cloze_jp: "私は赤やピンクの＿＿＿、明るい色が好きだ。",
                cloze_answer: "ような"
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>も<ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>くリンさんのように、<ruby>上手<rp>(</rp><rt>じょうず</rt><rp>)</rp></ruby>に<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>が<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せるようになりたい。",
                vi: "Tôi cũng muốn nhanh chóng có thể nói tiếng Nhật giỏi như bạn Linh.",
                cloze_jp: "私も早くリンさんの＿＿＿、上手に日本語が話せるようになりたい。",
                cloze_answer: "ように"
            },
            {
                jp: "「<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>もあなたが<ruby>着<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ているようなセーターがほしい」",
                vi: "Tôi cũng muốn một chiếc áo len giống như chiếc bạn đang mặc.",
                cloze_jp: "「私もあなたが着ている＿＿＿セーターがほしい」",
                cloze_answer: "ような"
            },
            {
                jp: "アメリカのような<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きな<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>では、<ruby>国内<rp>(</rp><rt>こくない</rt><rp>)</rp></ruby>にも<ruby>時差<rp>(</rp><rt>じさ</rp><rp>)</rp></ruby>があって<ruby>当然<rp>(</rp><rt>とうぜん</rt><rp>)</rp></ruby>だ。",
                vi: "Ở một đất nước lớn như Mỹ, việc có sự chênh lệch múi giờ trong nước là điều đương nhiên.",
                cloze_jp: "アメリカの＿＿＿大きな国では、国内にも時差があって当然だ。",
                cloze_answer: "ような"
            }
        ]
    },
    {
        id: "N3G005",
        grammar: "〜みたいだ",
        meaning: "① Hình như, dường như (suy đoán). ② Trông như, giống như (so sánh). ③ Như là (đưa ra ví dụ).",
        connection: "Danh từ / Động từ thể thông thường / Tính từ -i / Tính từ -na (bỏ だ) + みたいだ/みたいな + N/みたいに + V/Adj. (Đối với ý nghĩa ③, thường là Danh từ + みたい)",
        notes: "Là cách nói thân mật, suồng sã hơn của 「ようだ」. 「みたい」có thể dùng như một tính từ -na (みたいだ、みたいな、みたいに).",
        examples: [
            {
                jp: "「<ruby>星<rp>(</rp><rt>ほし</rt><rp>)</rp></ruby>がたくさん<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>ている。あしたも<ruby>晴<rp>(</rp><rt>は</rt><rp>)</rp></ruby>れみたい」 (①)",
                vi: "Nhiều sao quá. Có vẻ ngày mai trời cũng sẽ đẹp.",
                cloze_jp: "「星がたくさん出ている。あしたも晴れ＿＿＿」",
                cloze_answer: "みたい"
            },
            {
                jp: "「あの<ruby>店<rp>(</rp><rt>みせ</rt><rp>)</rp></ruby>、<ruby>人気<rp>(</rp><rt>にんき</rt><rp>)</rp></ruby>がないみたいだね。いつ<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってもすいている」 (①)",
                vi: "Quán kia có vẻ không nổi tiếng nhỉ. Lúc nào đến cũng vắng.",
                cloze_jp: "「あの店、人気がない＿＿＿＿＿ね。いつ行ってもすいている」",
                cloze_answer: "みたいだ"
            },
            {
                jp: "<ruby>宝<rp>(</rp><rt>たから</rt><rp>)</rp></ruby>くじで1,000<ruby>万円<rp>(</rp><rt>まんえん</rt><rp>)</rp></ruby><ruby>当<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>たった。<ruby>夢<rp>(</rp><rt>ゆめ</rt><rp>)</rp></ruby>(を<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ている)みたいだ。 (②)",
                vi: "Tôi đã trúng 10 triệu yên xổ số. Cứ như là mơ vậy.",
                cloze_jp: "宝くじで1,000万円当たった。夢(を見ている)＿＿＿＿＿。",
                cloze_answer: "みたいだ"
            },
            {
                jp: "「あの<ruby>雲<rp>(</rp><rt>くも</rt><rp>)</rp></ruby>、<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>て。ゾウみたいな<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>だよ」「ほんとだ」 (②)",
                vi: "Nhìn đám mây kia kìa. Hình dạng giống con voi nhỉ. Ừ, đúng thật.",
                cloze_jp: "「あの雲、見て。ゾウ＿＿＿＿＿形だよ」「ほんとだ」",
                cloze_answer: "みたいな"
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>寒<rp>(</rp><rt>さむ</rt><rp>)</rp></ruby>いのが<ruby>嫌<rp>(</rp><rt>きら</rt><rp>)</rp></ruby>いなので、ハワイみたいな、1<ruby>年中<rp>(</rp><rt>ねんじゅう</rt><rp>)</rp></ruby><ruby>暖<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かいところで<ruby>暮<rp>(</rp><rt>く</rt><rp>)</rp></ruby>らしたい。 (③)",
                vi: "Tôi ghét lạnh nên muốn sống ở một nơi ấm áp quanh năm như Hawaii.",
                cloze_jp: "私は寒いのが嫌いなので、ハワイ＿＿＿＿＿、1年中暖かいところで暮らしたい。",
                cloze_answer: "みたいな"
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>も<ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>くリンさんみたいに、<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>が<ruby>上手<rp>(</rp><rt>じょうず</rt><rp>)</rp></ruby>になりたいなあ。 (③)",
                vi: "Tôi cũng muốn nhanh chóng giỏi tiếng Nhật như bạn Linh.",
                cloze_jp: "私も早くリンさん＿＿＿＿＿、日本語が上手になりたいなあ。",
                cloze_answer: "みたいに"
            }
        ]
    },
    {
        id: "N3G006",
        grammar: "〜らしい",
        meaning: "① Có vẻ là, dường như là (suy đoán dựa trên thông tin nghe được, quan sát được). ② Đúng kiểu, ra dáng (phù hợp với bản chất).",
        connection: "① Danh từ / Động từ thể thông thường / Tính từ -i / Tính từ -na (bỏ だ) + らしい. ② Danh từ + らしい.",
        notes: "Khi diễn tả ý 'đúng kiểu', 「らしい」có cách chia giống tính từ -i. 「らしい」ở nghĩa ① thể hiện sự suy đoán có căn cứ hơn 「みたい」 một chút.",
        examples: [
            {
                jp: "「うわさによると、あの<ruby>二人<rp>(</rp><rt>ふたり</rt><rp>)</rp></ruby>、<ruby>結婚<rp>(</rp><rt>けっこん</rt><rp>)</rp></ruby>するらしいよ」 (①)",
                vi: "Nghe đồn hai người đó sắp cưới đấy.",
                cloze_jp: "「うわさによると、あの二人、結婚する＿＿＿＿＿よ」",
                cloze_answer: "らしい"
            },
            {
                jp: "<ruby>朝<rp>(</rp><rt>あさ</rt><rp>)</rp></ruby><ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きて<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ると、<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>がぬれていた。<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>の<ruby>間<rp>(</rp><rt>あいだ</rt><rp>)</rp></ruby>に<ruby>雨<rp>(</rp><rt>あめ</rt><rp>)</rp></ruby>が<ruby>降<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>ったらしい。 (①)",
                vi: "Sáng thức dậy thấy đường ướt. Có vẻ như đêm qua trời đã mưa.",
                cloze_jp: "朝起きて見ると、道がぬれていた。夜の間に雨が降った＿＿＿＿＿。",
                cloze_answer: "らしい"
            },
            {
                jp: "<ruby>大山<rp>(</rp><rt>おおやま</rt><rp>)</rp></ruby>さんは<ruby>拾<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>ってきたネコを<ruby>育<rp>(</rp><rt>そだ</rt><rp>)</rp></ruby>てているそうだ。いかにも<ruby>動物好<rp>(</rp><rt>どうぶつず</rt><rp>)</rp></ruby>きな<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>らしい。 (②)",
                vi: "Nghe nói anh Oyama đang nuôi một con mèo nhặt được. Đúng là kiểu người yêu động vật như anh ấy.",
                cloze_jp: "大山さんは拾ってきたネコを育てているそうだ。いかにも動物好きな彼＿＿＿＿＿。",
                cloze_answer: "らしい"
            },
            {
                jp: "「そのセーターの<ruby>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>、<ruby>春<rp>(</rp><rt>はる</rt><rp>)</rp></ruby>らしくてすてきね」 (②)",
                vi: "Màu áo len đó thật hợp với mùa xuân, đẹp quá nhỉ.",
                cloze_jp: "「そのセーターの色、春＿＿＿＿＿すてきね」",
                cloze_answer: "らしくて"
            },
            {
                jp: "「<ruby>就職<rp>(</rp><rt>しゅうしょく</rt><rp>)</rp></ruby>したのだから、もっと<ruby>社会人<rp>(</rp><rt>しゃかいじん</rt><rp>)</rp></ruby>らしくしなさい」 (②)",
                vi: "Vì đã đi làm rồi nên hãy cư xử cho ra dáng người đi làm hơn đi.",
                cloze_jp: "「就職したのだから、もっと社会人＿＿＿＿＿しなさい」",
                cloze_answer: "らしく"
            }
        ]
    },
    {
        id: "N3G007",
        grammar: "〜つもり (だった)",
        meaning: "Cứ ngỡ là, cứ tưởng là (nhưng thực tế không phải vậy).",
        connection: "Danh từ + の / Động từ thể た・ている / Tính từ -i (dạng bổ nghĩa cho danh từ) / Tính từ -na (dạng bổ nghĩa cho danh từ) + つもり (だった)",
        notes: "Diễn tả sự khác biệt giữa suy nghĩ, nhận thức của bản thân và thực tế. Thường dùng ở thì quá khứ (つもりだった).",
        examples: [
            {
                jp: "メールを<ruby>送<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>ったつもりだったが、<ruby>届<rp>(</rp><rt>とど</rt><rp>)</rp></ruby>いていなかった。",
                vi: "Tôi cứ ngỡ là đã gửi mail rồi, nhưng mail lại chưa tới.",
                cloze_jp: "メールを送った＿＿＿＿＿だったが、届いていなかった。",
                cloze_answer: "つもり"
            },
            {
                jp: "バッグにさいふを<ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れたつもりだったが、<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>い<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>をしようとしたら、なかった。",
                vi: "Tôi cứ tưởng là đã bỏ ví vào túi rồi, nhưng lúc định mua đồ thì không thấy đâu.",
                cloze_jp: "バッグにさいふを入れた＿＿＿＿＿だったが、買い物をしようとしたら、なかった。",
                cloze_answer: "つもり"
            },
            {
                jp: "この<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>はわかっているつもりだったが、テストでは<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>えてしまった。",
                vi: "Tôi cứ nghĩ là mình hiểu vấn đề này rồi, nhưng trong bài kiểm tra lại làm sai.",
                cloze_jp: "この問題はわかっている＿＿＿＿＿だったが、テストでは間違えてしまった。",
                cloze_answer: "つもり"
            },
            {
                jp: "まだ<ruby>若<rp>(</rp><rt>わか</rt><rp>)</rp></ruby>いつもりだったのに、<ruby>電車<rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>の<ruby>中<rp>(</rp><rt>なか</rp><rp>)</rp></ruby>で<ruby>席<rp>(</rp><rt>せき</rt><rp>)</rp></ruby>を<ruby>譲<rp>(</rp><rt>ゆず</rt><rp>)</rp></ruby>られてショックだった。",
                vi: "Tôi cứ tưởng mình vẫn còn trẻ, thế mà lại bị nhường ghế trên tàu điện, sốc thật.",
                cloze_jp: "まだ若い＿＿＿＿＿だったのに、電車の中で席を譲られてショックだった。",
                cloze_answer: "つもり"
            }
        ]
    },
    {
        id: "N3G008",
        grammar: "〜てくる (感情・感覚)",
        meaning: "Bộc phát, trào dâng (cảm xúc, cảm giác, hiện tượng sinh lý tự nhiên từ bên trong)",
        connection: "Động từ thể て + くる",
        notes: "Thường đi kèm với các động từ chỉ cảm xúc (涙が出る、怒りがわく), cảm giác hoặc hiện tượng sinh lý tự nhiên (汗が出る).",
        examples: [
            {
                jp: "<ruby>悲<rp>(</rp><rt>かな</rt><rp>)</rp></ruby>しくて、<ruby>涙<rp>(</rp><rt>なみだ</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>てきた。",
                vi: "Vì buồn nên nước mắt cứ trào ra.",
                cloze_jp: "悲しくて、涙が出て＿＿＿。",
                cloze_answer: "きた"
            },
            {
                jp: "こう<ruby>暑<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>いと、じっとしていても<ruby>汗<rp>(</rp><rt>あせ</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>てくる。",
                vi: "Nóng thế này thì dù có ngồi yên mồ hôi cũng túa ra.",
                cloze_jp: "こう暑いと、じっとしていても汗が出て＿＿＿。",
                cloze_answer: "くる"
            },
            {
                jp: "そのときはあまり<ruby>感<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>じなかったが、あとになって<ruby>怒<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>りがわいてきた。",
                vi: "Lúc đó thì không cảm thấy gì lắm, nhưng sau đó cơn tức giận lại trào dâng.",
                cloze_jp: "そのときはあまり感じなかったが、あとになって怒りがわいて＿＿＿。",
                cloze_answer: "きた"
            },
            {
                jp: "しばらくしてから、<ruby>優勝<rp>(</rp><rt>ゆうしょう</rt><rp>)</rp></ruby>の<ruby>喜<rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>びがこみあげてきた。",
                vi: "Một lúc sau, niềm vui chiến thắng dâng trào trong tôi.",
                cloze_jp: "しばらくしてから、優勝の喜びがこみあげて＿＿＿。",
                cloze_answer: "きた"
            }
        ]
    },
    {
        id: "N3G009",
        grammar: "〜てほしい/てもらいたい",
        meaning: "Muốn ai đó làm gì/không làm gì cho mình.",
        connection: "Động từ thể て／Động từ thể ないで + ほしい/もらいたい",
        notes: "「てもらいたい」 lịch sự hơn 「てほしい」 một chút. Dùng để bày tỏ mong muốn, yêu cầu đối với người khác.",
        examples: [
            {
                jp: "<ruby>親<rp>(</rp><rt>おや</rt><rp>)</rp></ruby>には<ruby>長生<rp>(</rp><rt>ながい</rt><rp>)</rp></ruby>きしてもらいたい。",
                vi: "Tôi muốn bố mẹ sống lâu.",
                cloze_jp: "親には長生きして＿＿＿＿＿＿。",
                cloze_answer: "もらいたい"
            },
            {
                jp: "<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>どもには、<ruby>皆<rp>(</rp><rt>みな</rt><rp>)</rp></ruby>に<ruby>愛<rp>(</rp><rt>あい</rt><rp>)</rp></ruby>される<ruby>人間<rp>(</rp><rt>にんげん</rt><rp>)</rp></ruby>になってほしいと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>う。",
                vi: "Tôi muốn con cái trở thành người được mọi người yêu mến.",
                cloze_jp: "子どもには、皆に愛される人間になって＿＿＿＿＿と思う。",
                cloze_answer: "ほしい"
            },
            {
                jp: "「これはここだけの<ruby>秘密<rp>(</rp><rt>ひみつ</rt><rp>)</rp></ruby>だから、だれにも<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>わないでほしい」",
                vi: "Đây là bí mật chỉ ở đây thôi, nên tôi muốn bạn đừng nói cho ai biết.",
                cloze_jp: "「これはここだけの秘密だから、だれにも言わないで＿＿＿＿＿」",
                cloze_answer: "ほしい"
            },
            {
                jp: "「すみません、ちょっと<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>てもらいたいものがあるんですけど」",
                vi: "Xin lỗi, tôi có thứ muốn bạn xem qua một chút.",
                cloze_jp: "「すみません、ちょっと見て＿＿＿＿＿ものがあるんですけど」",
                cloze_answer: "もらいたい"
            }
        ]
    },
    {
        id: "N3G010",
        grammar: "〜ば/たら/と…たい/のに/よかった など",
        meaning: "① Giá mà... (diễn tả mong muốn về điều không có thật ở hiện tại, hoặc tiếc nuối). ② Nếu mà... thì đã tốt... (diễn tả sự tiếc nuối về một việc không xảy ra trong quá khứ).",
        connection: "Động từ thể điều kiện (～Vば／Vたら／Vると) + ～たい／のに／よかった／のだが／いいのに など",
        notes: "Dùng để diễn tả giả định trái với hiện thực hoặc quá khứ, thường kèm theo cảm xúc tiếc nuối, ao ước.",
        examples: [
            {
                jp: "もし<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>が<ruby>医者<rp>(</rp><rt>いしゃ</rt><rp>)</rp></ruby>だったら、<ruby>病気<rp>(</rp><rt>びょうき</rt><rp>)</rp></ruby>で<ruby>苦<rp>(</rp><rt>くる</rt><rp>)</rp></ruby>しむ<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>たちを<ruby>助<rp>(</rp><rt>たす</rt><rp>)</rp></ruby>けてあげられるのに。(①)",
                vi: "Nếu tôi là bác sĩ, tôi đã có thể giúp đỡ những người đang đau khổ vì bệnh tật rồi.",
                cloze_jp: "もし私が医者だったら、病気で苦しむ人たちを助けてあげられる＿＿＿。",
                cloze_answer: "のに"
            },
            {
                jp: "「<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わないんですか」「ええ、もう<ruby>少<rp>(</rp><rt>すこ</rt><rp>)</rp></ruby>し<ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>ければ<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>うんですけど」(①)",
                vi: "Bạn không mua à? Ừm, nếu rẻ hơn một chút thì tôi sẽ mua.",
                cloze_jp: "「買わないんですか」「ええ、もう少し安ければ買う＿＿＿＿＿」",
                cloze_answer: "んですけど"
            },
            {
                jp: "もう<ruby>少<rp>(</rp><rt>すこ</rt><rp>)</rp></ruby>し<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>があれば、<ruby>全部<rp>(</rp><rt>ぜんぶ</rt><rp>)</rp></ruby>できたのに。(②)",
                vi: "Nếu có thêm chút thời gian nữa thì tôi đã làm xong hết rồi.",
                cloze_jp: "もう少し時間があれば、全部できた＿＿＿。",
                cloze_answer: "のに"
            },
            {
                jp: "「きのうの<ruby>交流会<rp>(</rp><rt>こうりゅうかい</rt><rp>)</rp></ruby>、<ruby>楽<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しかったよ。<ruby>鈴木<rp>(</rp><rt>すずき</rt><rp>)</rp></ruby>さんも<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>けばよかったのに」(②)",
                vi: "Buổi giao lưu hôm qua vui lắm. Giá mà anh Suzuki cũng đi thì tốt biết mấy.",
                cloze_jp: "「きのうの交流会、楽しかったよ。鈴木さんも行けば＿＿＿＿＿＿」",
                cloze_answer: "よかったのに"
            },
            {
                jp: "タクシーで<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>けばよかった。そうすれば<ruby>間<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>に<ruby>合<rp>(</rp><rt>あ</rp><rp>)</rp></ruby>ったかもしれない。(②)",
                vi: "Lẽ ra nên đi taxi. Nếu vậy thì có lẽ đã kịp rồi.",
                cloze_jp: "タクシーで行けば＿＿＿＿＿。そうすれば間に合ったかもしれない。",
                cloze_answer: "よかった"
            }
        ]
    },
    {
        id: "N3G011A",
        grammar: "〜（さ）せる （許可・許容）",
        meaning: "Cho phép (ai đó làm gì)",
        connection: "Động từ thể sai khiến (Vさせる)",
        notes: "Diễn tả sự cho phép, chấp thuận cho người khác thực hiện một hành động. Ví dụ: 読ませる (cho đọc), 行かせる (cho đi).",
        examples: [
            {
                jp: "<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>どもが<ruby>習<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>いたいというので、ピアノを<ruby>習<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>わせることにした。",
                vi: "Vì con tôi nói muốn học, nên tôi đã quyết định cho nó học piano.",
                cloze_jp: "子どもが習いたいというので、ピアノを習わ＿＿＿ことにした。",
                cloze_answer: "せる"
            },
            {
                jp: "アルバイトをしたいのだが、<ruby>親<rp>(</rp><rt>おや</rt><rp>)</rp></ruby>が<ruby>高校生<rp>(</rp><rt>こうこうせい</rt><rp>)</rp></ruby>の<ruby>間<rp>(</rp><rt>あいだ</rt><rp>)</rp></ruby>はだめだと言って、させてくれない。",
                vi: "Tôi muốn đi làm thêm, nhưng bố mẹ nói là học sinh cấp ba thì không được, nên không cho phép tôi làm.",
                cloze_jp: "アルバイトをしたいのだが、親が高校生の間はだめだと言って、＿＿＿＿くれない。",
                cloze_answer: "させて"
            }
        ]
    },
    {
        id: "N3G011B",
        grammar: "〜（さ）せる （悪い結果）",
        meaning: "Lỡ làm cho/để cho (xảy ra kết quả xấu không mong muốn)",
        connection: "Động từ thể sai khiến (Vさせる)",
        notes: "Diễn tả hành động của người nói (hoặc người khác) vô tình gây ra một kết quả tiêu cực. Ví dụ: 腐らせる (làm cho thối), 泣かせる (làm cho khóc).",
        examples: [
            {
                jp: "<ruby>冷蔵庫<rp>(</rp><rt>れいぞうこ</rt><rp>)</rp></ruby>に<ruby>肉<rp>(</rp><rt>にく</rt><rp>)</rp></ruby>があるのを<ruby>忘<rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れていて、<ruby>腐<rp>(</rp><rt>くさ</rt><rp>)</rp></ruby>らせてしまった。",
                vi: "Tôi quên mất có thịt trong tủ lạnh, nên đã để nó bị hỏng mất.",
                cloze_jp: "冷蔵庫に肉があるのを忘れていて、腐ら＿＿＿＿しまった。",
                cloze_answer: "せて"
            },
            {
                jp: "<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>どもを<ruby>病気<rp>(</rp><rt>びょうき</rt><rp>)</rp></ruby>で<ruby>死<rp>(</rp><rt>し</rt><rp>)</rp></ruby>なせてしまった。",
                vi: "Tôi đã (lỡ) để con mất vì bệnh (mang ý có trách nhiệm, đau xót).",
                cloze_jp: "子どもを病気で死な＿＿＿＿しまった。",
                cloze_answer: "せて"
            }
        ]
    },
    {
        id: "N3G011C",
        grammar: "〜（さ）せてください / 〜（さ）せてもらう / 〜（さ）せていただく",
        meaning: "Xin phép làm gì / Được cho phép làm gì",
        connection: "Động từ thể sai khiến + てください / てもらう / ていただく",
        notes: "Dùng để xin phép một cách lịch sự. 「いただく」 lịch sự hơn 「もらう」.",
        examples: [
            {
                jp: "<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>が<ruby>入院<rp>(</rp><rt>にゅういん</rt><rp>)</rp></ruby>したので、きょうは<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>を<ruby>休<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>ませてもらった。",
                vi: "Vì mẹ tôi nhập viện, nên hôm nay tôi đã được (xin) cho nghỉ làm.",
                cloze_jp: "母が入院したので、きょうは仕事を休ま＿＿＿＿＿＿。",
                cloze_answer: "せてもらった"
            },
            {
                jp: "「すみません、<ruby>体調<rp>(</rp><rt>たいちょう</rt><rp>)</rp></ruby>が<ruby>悪<rp>(</rp><rt>わる</rt><rp>)</rp></ruby>いので、<ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>く<ruby>帰<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>らせてください」",
                vi: "Xin lỗi, vì sức khỏe không tốt, xin hãy cho tôi về sớm.",
                cloze_jp: "「すみません、体調が悪いので、早く帰ら＿＿＿＿＿＿」",
                cloze_answer: "せてください"
            },
            {
                jp: "「そのお<ruby>話<rp>(</rp><rt>はなし</rt><rp>)</rp></ruby>、<ruby>少<rp>(</rp><rt>すこ</rt><rp>)</rp></ruby>し<ruby>考<rp>(</rp><rt>かんが</rp><rp>)</rp></ruby>えさせていただけませんか」",
                vi: "Chuyện đó, liệu ngài có thể cho phép tôi suy nghĩ một chút được không?",
                cloze_jp: "「そのお話、少し考え＿＿＿＿＿＿＿＿ませんか」",
                cloze_answer: "させていただけ"
            }
        ]
    },
    {
        id: "N3G011D",
        grammar: "〜（さ）せてくれる / 〜（さ）せてもらう / 〜（さ）せていただく （感謝）",
        meaning: "Cảm ơn vì (ai đó) đã cho mình làm gì / Mình được (ai đó) cho làm gì (và cảm thấy biết ơn)",
        connection: "Động từ thể sai khiến + てくれる / てもらう / ていただく",
        notes: "Diễn tả lòng biết ơn khi được người khác cho phép hoặc tạo điều kiện để làm một việc gì đó.",
        examples: [
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>の<ruby>家<rp>(</rp><rt>いえ</rt><rp>)</rp></ruby>は<ruby>貧<rp>(</rp><rt>まず</rt><rp>)</rp></ruby>しかったが、<ruby>親<rp>(</rp><rt>おや</rt><rp>)</rp></ruby>は<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>を<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>まで<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かせてくれた。",
                vi: "Nhà tôi nghèo nhưng bố mẹ đã cho tôi học đến đại học (và tôi biết ơn điều đó).",
                cloze_jp: "私の家は貧しかったが、親は私を大学まで行か＿＿＿＿＿。",
                cloze_answer: "せてくれた"
            },
            {
                jp: "けがをして<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>が<ruby>使<rp>(</rp><rt>つか</rp><rp>)</rp></ruby>えないので、<ruby>姉<rp>(</rp><rt>あね</rt><rp>)</rp></ruby>にごはんを<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べさせてもらった。",
                vi: "Vì bị thương không dùng tay được, nên tôi đã được chị gái đút cơm cho ăn.",
                cloze_jp: "けがをして手が使えないので、姉にごはんを食べさ＿＿＿＿＿＿。",
                cloze_answer: "せてもらった"
            },
            {
                jp: "「きょうはすばらしいお<ruby>話<rp>(</rp><rt>はなし</rt><rp>)</rp></ruby>を<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>かせていただき、<ruby>本当<rp>(</rp><rt>ほんとう</rt><rp>)</rp></ruby>にありがとうございます」",
                vi: "Hôm nay đã được nghe một câu chuyện tuyệt vời, tôi xin chân thành cảm ơn.",
                cloze_jp: "「きょうはすばらしいお話を聞かせて＿＿＿＿＿、本当にありがとうございます」",
                cloze_answer: "いただき"
            }
        ]
    },
    {
        id: "N3G012",
        grammar: "自動詞を使った表現 (〜がV自動詞)",
        meaning: "Mô tả tính chất, trạng thái của sự vật bằng tự động từ.",
        connection: "Danh từ + が + Tự động từ (thường ở dạng Vる, Vている, Vやすい, Vにくい, Vれる-khả năng)",
        notes: "Dùng tự động từ để mô tả trạng thái, đặc điểm vốn có hoặc khả năng của một đối tượng nào đó. Ví dụ: ドアが開く (cửa mở), 髪が伸びる (tóc dài ra).",
        examples: [
            {
                jp: "このかばんは<ruby>軽<rp>(</rp><rt>かる</rt><rp>)</rp></ruby>くてたくさん<ruby>入<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>るので、<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>に<ruby>便利<rp>(</rp><rt>べんり</rt><rp>)</rp></ruby>だ。",
                vi: "Cái túi này nhẹ và đựng được nhiều đồ (nó tự chứa được nhiều) nên rất tiện lợi khi đi du lịch.",
                cloze_jp: "このかばんは軽くてたくさん＿＿＿ので、旅行に便利だ。",
                cloze_answer: "入る"
            },
            {
                jp: "このマンガはよく<ruby>売<rp>(</rp><rt>う</rt><rp>)</rp></ruby>れている。<ruby>人気<rp>(</rp><rt>にんき</rt><rp>)</rp></ruby>があるのだろう。",
                vi: "Truyện tranh này bán rất chạy (nó tự bán được). Chắc là nó nổi tiếng.",
                cloze_jp: "このマンガはよく売れ＿＿＿。人気があるのだろう。",
                cloze_answer: "ている"
            },
            {
                jp: "「<ruby>壊<rp>(</rp><rt>こわ</rt><rp>)</rp></ruby>れやすいものですから、<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>をつけて<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>んでください」",
                vi: "Vì đây là đồ dễ vỡ (nó tự dễ vỡ) nên xin hãy vận chuyển cẩn thận.",
                cloze_jp: "「壊れ＿＿＿ものですから、気をつけて運んでください」",
                cloze_answer: "やすい"
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>の<ruby>髪<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>はパーマがかかりにくいんです。",
                vi: "Tóc tôi khó vào nếp khi uốn (nó khó tự vào nếp).",
                cloze_jp: "私の髪はパーマがかかり＿＿＿んです。",
                cloze_answer: "にくい"
            },
            {
                jp: "この<ruby>包丁<rp>(</rp><rt>ほうちょう</rt><rp>)</rp></ruby>はよく<ruby>切<rp>(</rp><rt>き</rt><rp>)</rp></ruby>れる。",
                vi: "Con dao này rất sắc (nó có thể tự cắt tốt).",
                cloze_jp: "この包丁はよく切れ＿＿＿。",
                cloze_answer: "る"
            }
        ]
    },
    {
        id: "N3G013",
        grammar: "〜み",
        meaning: "Sự/Vẻ/Nét/Cảm giác (chuyển tính từ thành danh từ chỉ trạng thái, tính chất có thể cảm nhận được)",
        connection: "Tính từ -i (bỏ い) / Tính từ -na (bỏ な) + み",
        notes: "Tạo danh từ từ tính từ, nhấn mạnh đến tính chất hoặc trạng thái có thể cảm nhận được. Không phải tất cả tính từ đều dùng được với 「み」. Ví dụ: 赤み (sắc đỏ), 強み (điểm mạnh), 弱み (điểm yếu).",
        examples: [
            {
                jp: "<ruby>丸<rp>(</rp><rt>まる</rt><rp>)</rp></ruby>みを<ruby>帯<rp>(</rp><rt>お</rt><rp>)</rp></ruby>びた<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>。",
                vi: "Hình dạng có nét tròn.",
                cloze_jp: "丸＿＿を帯びた形。",
                cloze_answer: "み"
            },
            {
                jp: "<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>みを<ruby>帯<rp>(</rp><rt>お</rt><rp>)</rp></ruby>びた<ruby>白<rp>(</rp><rt>しろ</rt><rp>)</rp></ruby>。",
                vi: "Màu trắng ánh xanh.",
                cloze_jp: "青＿＿を帯びた白。",
                cloze_answer: "み"
            },
            {
                jp: "<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>みのある<ruby>板<rp>(</rp><rt>いた</rt><rp>)</rp></ruby>。",
                vi: "Tấm ván có độ dày.",
                cloze_jp: "厚＿＿のある板。",
                cloze_answer: "み"
            },
            {
                jp: "<ruby>校長<rp>(</rp><rt>こうちょう</rt><rp>)</rp></ruby>は<ruby>入学式<rp>(</rp><rt>にゅうがくしき</rt><rp>)</rp></ruby>で<ruby>毎年<rp>(</rp><rt>まいとし</rt><rp>)</rp></ruby><ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じことを<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>っている。ぜんぜん<ruby>新鮮<rp>(</rp><rt>しんせん</rt><rp>)</rp></ruby>みがない。",
                vi: "Thầy hiệu trưởng năm nào cũng nói những điều giống nhau trong lễ khai giảng. Chẳng có chút gì mới mẻ cả.",
                cloze_jp: "校長は入学式で毎年同じことを言っている。ぜんぜん新鮮＿＿＿がない。",
                cloze_answer: "み"
            },
            {
                jp: "「お<ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>いできる<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>を<ruby>楽<rp>(</rp><rt>たの</rt><rp>)</rp></ruby>しみにしています」",
                vi: "Tôi rất mong chờ ngày được gặp bạn. (楽しみ là một danh từ cố định xuất phát từ 楽しい)",
                cloze_jp: "「お会いできる日を＿＿＿＿＿にしています」",
                cloze_answer: "楽しみ"
            }
        ]
    },
    {
        id: "N3G014A",
        grammar: "〜のではないだろうか / 〜ないかと思う",
        meaning: "Phải chăng là.../ Tôi nghĩ là... (Đưa ra ý kiến, phán đoán một cách mềm mỏng, không khẳng định)",
        connection: "Danh từ + な / Động từ thể thông thường / Tính từ -i / Tính từ -na (giữ な hoặc + である) + のではないだろうか / ないかと思う",
        notes: "Là cách nói mang tính suy đoán, gợi ý hoặc trình bày ý kiến một cách gián tiếp, lịch sự.",
        examples: [
            {
                jp: "<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>が<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>んでいる。これでは<ruby>間<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>に<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わないのではないだろうか。",
                vi: "Đường đông quá. Thế này thì phải chăng là sẽ không kịp giờ?",
                cloze_jp: "道が込んでいる。これでは間に合わない＿＿＿＿＿＿＿＿＿。",
                cloze_answer: "のではないだろうか"
            },
            {
                jp: "この<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>を6<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>までに<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わらせるのは<ruby>無理<rp>(</rp><rt>むり</rt><rp>)</rp></ruby>なのではないだろうか。",
                vi: "Hoàn thành công việc này trước 6 giờ phải chăng là không thể?",
                cloze_jp: "この仕事を6時までに終わらせるのは無理な＿＿＿＿＿＿＿＿＿。",
                cloze_answer: "のではないだろうか"
            },
            {
                jp: "AチームよりBチームのほうが<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>いのではないかと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>う。",
                vi: "Tôi nghĩ là đội B mạnh hơn đội A.",
                cloze_jp: "AチームよりBチームのほうが強いの＿＿＿＿＿＿＿思う。",
                cloze_answer: "ではないかと"
            },
            {
                jp: "<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>は<ruby>犯人<rp>(</rp><rt>はんにん</rt><rp>)</rp></ruby>ではないのではないかと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>う。",
                vi: "Tôi nghĩ phải chăng anh ta không phải là thủ phạm.",
                cloze_jp: "彼は犯人ではないの＿＿＿＿＿＿＿思う。",
                cloze_answer: "ではないかと"
            }
        ]
    },
    {
        id: "N3G014B",
        grammar: "〜んじゃない? / 〜んじゃないかと思う",
        meaning: "Chẳng phải là...hay sao? / Tôi nghĩ là... (Dạng nói thân mật của 〜のではないだろうか)",
        connection: "Thể thông thường + んじゃない? / んじゃないかと思う",
        notes: "Cách nói suồng sã, thân mật hơn của 「〜のではないだろうか」, dùng trong văn nói.",
        examples: [
            {
                jp: "「<ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>さんは<ruby>甘<rp>(</rp><rt>あま</rt><rp>)</rp></ruby>いものが<ruby>好<rp>(</rp><rt>す</rt><rp>)</rp></ruby>きだから、おいしいお<ruby>菓子<rp>(</rp><rt>かし</rt><rp>)</rp></ruby>がいいんじゃない?」",
                vi: "Yamada thích đồ ngọt, nên bánh kẹo ngon chẳng phải là tốt sao?",
                cloze_jp: "「山田さんは甘いものが好きだから、おいしいお菓子がいい＿＿＿＿＿?」",
                cloze_answer: "んじゃない"
            },
            {
                jp: "「<ruby>木村<rp>(</rp><rt>きむら</rt><rp>)</rp></ruby>さん、<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>いね」 「もしかしたら、<ruby>約束<rp>(</rp><rt>やくそく</rt><rp>)</rp></ruby>を<ruby>忘<rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れているんじゃない?」",
                vi: "Kimura muộn nhỉ. Biết đâu cậu ấy quên mất cuộc hẹn rồi cũng nên?",
                cloze_jp: "「もしかしたら、約束を忘れている＿＿＿＿＿?」",
                cloze_answer: "んじゃない"
            },
            {
                jp: "「<ruby>林<rp>(</rp><rt>はやし</rt><rp>)</rp></ruby>さん、きょう<ruby>会議<rp>(</rp><rt>かいぎ</rt><rp>)</rp></ruby>があることを<ruby>知<rp>(</rp><rt>し</rt><rp>)</rp></ruby>らないんじゃないかと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>うんですけど」",
                vi: "Tôi nghĩ là có lẽ anh Hayashi không biết hôm nay có cuộc họp.",
                cloze_jp: "「林さん、きょう会議があることを知らない＿＿＿＿＿＿＿思うんですけど」",
                cloze_answer: "んじゃないかと"
            }
        ]
    },
    {
        id: "N3G015A",
        grammar: "〜てる / 〜でる (縮約形)",
        meaning: "Đang... (Dạng rút gọn của 〜ている/〜でいる, dùng trong văn nói thân mật)",
        connection: "Động từ thể て形 + る (Vてる) / Động từ thể で形 + る (Vでる)",
        notes: "Chỉ dùng trong hội thoại thân mật, không trang trọng. 例: 食べている → 食べてる, 読んでいる → 読んでる.",
        examples: [
            {
                jp: "「あそこに<ruby>座<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>ってる<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>、だれ?」",
                vi: "Người đang ngồi đằng kia là ai vậy?",
                cloze_jp: "「あそこに座っ＿＿＿人、だれ?」",
                cloze_answer: "てる"
            },
            {
                jp: "「すぐ<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くから、<ruby>先<rp>(</rp><rt>さき</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってて」",
                vi: "Tớ đến ngay đây, cậu cứ đi trước đi. (行っていて → 行ってて)",
                cloze_jp: "「すぐ行くから、先に行って＿＿」",
                cloze_answer: "てて"
            }
        ]
    },
    {
        id: "N3G015B",
        grammar: "〜とく / 〜どく (縮約形)",
        meaning: "...trước, ...sẵn (Dạng rút gọn của 〜ておく/〜でおく, dùng trong văn nói thân mật)",
        connection: "Động từ thể て形 + おく → とく / Động từ thể で形 + おく → どく",
        notes: "Chỉ dùng trong hội thoại thân mật, không trang trọng. 例: 買っておく → 買っとく, 読んでおく → 読んどく.",
        examples: [
            {
                jp: "「<ruby>来週<rp>(</rp><rt>らいしゅう</rt><rp>)</rp></ruby>までにこの<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>、<ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>んどいてください」",
                vi: "Đến tuần sau hãy đọc (sẵn) cuốn sách này nhé.",
                cloze_jp: "「来週までにこの本、読ん＿＿＿ください」",
                cloze_answer: "どいて"
            },
            {
                jp: "「これ、どこに<ruby>片付<rp>(</rp><rt>かたづ</rt><rp>)</rp></ruby>けるんですか」「<ruby>机<rp>(</rp><rt>つくえ</rt><rp>)</rp></ruby>の<ruby>上<rp>(</rp><rt>うえ</rt><rp>)</rp></ruby>に<ruby>置<rp>(</rp><rt>お</rt><rp>)</rp></ruby>いといていいよ」",
                vi: "Cái này dọn ở đâu ạ? Cứ để (sẵn) trên bàn là được.",
                cloze_jp: "「机の上に置い＿＿＿いいよ」",
                cloze_answer: "といて"
            },
            {
                jp: "「<ruby>夏休<rp>(</rp><rt>なつやす</rt><rp>)</rp></ruby>みに<ruby>海外旅行<rp>(</rp><rt>かいがいりょこう</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くんでしょ。<ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>くパスポート<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>っとかないと、<ruby>間<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>に<ruby>合<rp>(</rp><rt>あ</rp><rp>)</rp></ruby>わないよ」",
                vi: "Kỳ nghỉ hè này cậu đi du lịch nước ngoài phải không? Nếu không lấy (sẵn) hộ chiếu sớm thì không kịp đâu.",
                cloze_jp: "「早くパスポート取っ＿＿＿ないと、間に合わないよ」",
                cloze_answer: "とか"
            }
        ]
    },
    {
        id: "N3G015C",
        grammar: "〜なきゃ (縮約形)",
        meaning: "Nếu không.../ Phải... (Dạng rút gọn của 〜なければ, dùng trong văn nói thân mật)",
        connection: "Động từ thể ない (bỏ い) + なければ → なきゃ",
        notes: "Chỉ dùng trong hội thoại thân mật. Thường đi với 「いけない」 hoặc 「ならない」 được lược bỏ. 例: 行かなければ → 行かなきゃ.",
        examples: [
            {
                jp: "もっと<ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>しなきゃ、<ruby>合格<rp>(</rp><rt>ごうかく</rt><rp>)</rp></ruby>できないだろうな。",
                vi: "Nếu không học thêm thì chắc không đỗ được đâu.",
                cloze_jp: "もっと勉強し＿＿＿、合格できないだろうな。",
                cloze_answer: "なきゃ"
            },
            {
                jp: "そろそろ<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>きなきゃ<ruby>遅刻<rp>(</rp><rt>ちこく</rt><rp>)</rp></ruby>しちゃう。",
                vi: "Phải dậy thôi không thì muộn mất.",
                cloze_jp: "そろそろ起き＿＿＿遅刻しちゃう。",
                cloze_answer: "なきゃ"
            }
        ]
    },
    {
        id: "N3G015D",
        grammar: "〜なくちゃ / 〜なきゃ (いけない/ならない) (縮約形)",
        meaning: "Phải... (Dạng rút gọn của 〜なくてはいけない／〜なければならない, dùng trong văn nói thân mật)",
        connection: "Động từ thể ない (bỏ い) + なくては(いけない) → なくちゃ(いけない) / Động từ thể ない (bỏ い) + なければ(ならない) → なきゃ(ならない)",
        notes: "Chỉ dùng trong hội thoại thân mật. Phần 「いけない」hoặc「ならない」 thường được lược bỏ. 例: 食べなくてはいけない → 食べなくちゃ.",
        examples: [
            {
                jp: "「そろそろ<ruby>帰<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>らなくちゃ。<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>くなると<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>が<ruby>心配<rp>(</rp><rt>しんぱい</rt><rp>)</rp></ruby>するから」",
                vi: "Tớ phải về thôi. Muộn là mẹ tớ lo đấy.",
                cloze_jp: "「そろそろ帰ら＿＿＿＿。遅くなると母が心配するから」",
                cloze_answer: "なくちゃ"
            },
            {
                jp: "もうこんな<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>。 <ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>く<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かなきゃ。",
                vi: "Đã giờ này rồi. Phải đi nhanh thôi.",
                cloze_jp: "もうこんな時間。早く行か＿＿＿。",
                cloze_answer: "なきゃ"
            },
            {
                jp: "「<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>になるためには、もっと<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べなきゃだめだよ」",
                vi: "Để khỏe lại thì phải ăn nhiều hơn nữa, không thì không được đâu.",
                cloze_jp: "「元気になるためには、もっと食べ＿＿＿だめだよ」",
                cloze_answer: "なきゃ"
            }
        ]
    },
    {
        id: "N3G016",
        grammar: "〜から〜にかけて",
        meaning: "Từ... đến... (khoảng thời gian hoặc không gian không xác định chính xác điểm đầu/cuối)",
        connection: "Danh từ (Thời gian/Địa điểm) + から + Danh từ (Thời gian/Địa điểm) + にかけて",
        notes: "Diễn tả một phạm vi không xác định rõ ràng điểm bắt đầu và kết thúc, mang tính 'khoảng chừng', 'suốt từ...đến...'.",
        examples: [
            {
                jp: "このあたりでは、4<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>から5<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>にかけていろいろな<ruby>花<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>が<ruby>咲<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>く。",
                vi: "Ở quanh đây, từ khoảng tháng 4 đến tháng 5 có nhiều loại hoa nở.",
                cloze_jp: "このあたりでは、4月から5月＿＿＿＿＿＿いろいろな花が咲く。",
                cloze_answer: "にかけて"
            },
            {
                jp: "<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>で、<ruby>昨夜<rp>(</rp><rt>さくや</rt><rp>)</rp></ruby>からけさにかけて、<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しい<ruby>雨<rp>(</rp><rt>あめ</rt><rp>)</rp></ruby>が<ruby>降<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>り<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた。",
                vi: "Do ảnh hưởng của bão, từ đêm qua đến sáng nay, mưa lớn đã kéo dài liên tục.",
                cloze_jp: "台風の影響で、昨夜からけさ＿＿＿＿＿＿、激しい雨が降り続いた。",
                cloze_answer: "にかけて"
            },
            {
                jp: "この<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>は<ruby>九州北部<rp>(</rp><rt>きゅうしゅうほくぶ</rt><rp>)</rp></ruby>から<ruby>中部<rp>(</rp><rt>ちゅうぶ</rt><rp>)</rp></ruby>にかけて<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>られる。",
                vi: "Loài thực vật này có thể được tìm thấy từ vùng Bắc Kyushu đến vùng Chubu.",
                cloze_jp: "この植物は九州北部から中部＿＿＿＿＿＿見られる。",
                cloze_answer: "にかけて"
            }
        ]
    },
    {
        id: "N3G017",
        grammar: "〜だらけ",
        meaning: "Toàn là, đầy (những thứ không tốt, không mong muốn)",
        connection: "Danh từ + だらけ",
        notes: "Thường dùng với những thứ mang ý nghĩa tiêu cực, bẩn thỉu, hoặc quá nhiều đến mức gây khó chịu. Ví dụ: 間違いだらけ (toàn lỗi sai), 借金だらけ (nợ nần chồng chất).",
        examples: [
            {
                jp: "ほこりだらけの<ruby>部屋<rp>(</rp><rt>へや</rt><rp>)</rp></ruby>。",
                vi: "Căn phòng đầy bụi.",
                cloze_jp: "ほこり＿＿＿の部屋。",
                cloze_answer: "だらけ"
            },
            {
                jp: "<ruby>泥<rp>(</rp><rt>どろ</rt><rp>)</rp></ruby>だらけのくつ。",
                vi: "Đôi giày đầy bùn.",
                cloze_jp: "泥＿＿＿のくつ。",
                cloze_answer: "だらけ"
            },
            {
                jp: "<ruby>数学<rp>(</rp><rt>すうがく</rt><rp>)</rp></ruby>の<ruby>答案<rp>(</rp><rt>とうあん</rt><rp>)</rp></ruby>は<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>いだらけだった。",
                vi: "Bài thi toán của tôi toàn lỗi sai.",
                cloze_jp: "数学の答案は間違い＿＿＿＿だった。",
                cloze_answer: "だらけ"
            },
            {
                jp: "<ruby>苦労<rp>(</rp><rt>くろう</rt><rp>)</rp></ruby>した<ruby>祖父<rp>(</rp><rt>そふ</rt><rp>)</rp></ruby>の<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>は<ruby>固<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>くてしわだらけだ。",
                vi: "Bàn tay của ông tôi, người đã trải qua nhiều vất vả, thì cứng và đầy nếp nhăn.",
                cloze_jp: "苦労した祖父の手は固くてしわ＿＿＿＿だ。",
                cloze_answer: "だらけ"
            }
        ]
    },
    {
        id: "N3G018",
        grammar: "〜おかげで / 〜おかげだ",
        meaning: "Nhờ vào, nhờ có (kết quả tốt, đôi khi dùng với nghĩa mỉa mai cho kết quả xấu)",
        connection: "Danh từ + の / Động từ thể thông thường (名詞修飾形) / Tính từ -i (名詞修飾形) / Tính từ -na + な + おかげで / おかげだ",
        notes: "Diễn tả nguyên nhân dẫn đến kết quả tốt, mang hàm ý biết ơn. 「おかげさまで」 là một cách nói cảm ơn lịch sự. Trong một số trường hợp, có thể dùng để nói về kết quả xấu với ý mỉa mai.",
        examples: [
            {
                jp: "<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>が<ruby>早<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>く<ruby>済<rp>(</rp><rt>す</rt><rp>)</rp></ruby>んだのは、<ruby>友<rp>(</rp><rt>とも</rt><rp>)</rp></ruby>だちが<ruby>手伝<rp>(</rp><rt>てつだ</rt><rp>)</rp></ruby>ってくれたおかげだ。",
                vi: "Công việc xong sớm là nhờ bạn bè đã giúp đỡ.",
                cloze_jp: "仕事が早く済んだのは、友だちが手伝ってくれた＿＿＿＿＿。",
                cloze_answer: "おかげだ"
            },
            {
                jp: "<ruby>白髪<rp>(</rp><rt>しらが</rt><rp>)</rp></ruby>が<ruby>少<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>ないおかげで<ruby>若<rp>(</rp><rt>わか</rt><rp>)</rp></ruby>く<ruby>見<rp>(</rp><rt>み</rp><rp>)</rp></ruby>られることが<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>い。",
                vi: "Nhờ có ít tóc bạc mà tôi thường được xem là trẻ hơn tuổi.",
                cloze_jp: "白髪が少ない＿＿＿＿で若く見られることが多い。",
                cloze_answer: "おかげ"
            },
            {
                jp: "<ruby>医療技術<rp>(</rp><rt>いりょうぎじゅつ</rt><rp>)</rp></ruby>の<ruby>進歩<rp>(</rp><rt>しんぽ</rt><rp>)</rp></ruby>のおかげで<ruby>平均寿命<rp>(</rp><rt>へいきんじゅみょう</rt><rp>)</rp></ruby>が<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>びた。",
                vi: "Nhờ sự tiến bộ của kỹ thuật y học mà tuổi thọ trung bình đã tăng lên.",
                cloze_jp: "医療技術の進歩の＿＿＿＿で平均寿命が伸びた。",
                cloze_answer: "おかげ"
            },
            {
                jp: "<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>の<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>うことを<ruby>信<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>じたおかげでひどい<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>にあった。(mỉa mai)",
                vi: "Nhờ tin lời anh ta mà tôi đã gặp phải chuyện tồi tệ.",
                cloze_jp: "彼の言うことを信じた＿＿＿＿でひどい目にあった。",
                cloze_answer: "おかげ"
            },
            {
                jp: "「お<ruby>母様<rp>(</rp><rt>かあさま</rt><rp>)</rp></ruby>の<ruby>具合<rp>(</rp><rt>ぐあい</rt><rp>)</rp></ruby>はいかがですか」「おかげさまで、すっかり<ruby>良<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>くなりました」",
                vi: "Tình hình sức khỏe của mẹ bạn thế nào rồi? Ơn trời/Nhờ ơn (của mọi người), bà đã hoàn toàn khỏe lại.",
                cloze_jp: "「お母様の具合はいかがですか」「＿＿＿＿＿＿で、すっかり良くなりました」",
                cloze_answer: "おかげさま"
            }
        ]
    },
    {
        id: "N3G019",
        grammar: "〜せいで / 〜せいだ / 〜せいか",
        meaning: "Tại vì, do (kết quả xấu, mang ý đổ lỗi, trách móc). 〜せいか: Có lẽ là do...",
        connection: "Danh từ + の / Động từ thể thông thường (名詞修飾形) / Tính từ -i (名詞修飾形) / Tính từ -na + な + せいで / せいだ / せいか",
        notes: "Diễn tả nguyên nhân dẫn đến kết quả tiêu cực. 「〜せいか」 được dùng khi không chắc chắn về nguyên nhân, mang nghĩa 'có lẽ là do'.",
        examples: [
            {
                jp: "あの<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>のせいでみんなが<ruby>迷惑<rp>(</rp><rt>めいわく</rt><rp>)</rp></ruby>している。",
                vi: "Tại người đó mà mọi người đều gặp phiền phức.",
                cloze_jp: "あの人の＿＿＿でみんなが迷惑している。",
                cloze_answer: "せい"
            },
            {
                jp: "<ruby>景気<rp>(</rp><rt>けいき</rt><rp>)</rp></ruby>が<ruby>悪<rp>(</rp><rt>わる</rt><rp>)</rp></ruby>いせいでボーナスが<ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>った。",
                vi: "Do tình hình kinh tế xấu mà tiền thưởng bị giảm.",
                cloze_jp: "景気が悪い＿＿＿でボーナスが減った。",
                cloze_answer: "せい"
            },
            {
                jp: "<ruby>試合<rp>(</rp><rt>しあい</rt><rp>)</rp></ruby>に<ruby>負<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>けたのはミスをした<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>のせいだ。",
                vi: "Thua trận đấu là do lỗi của tôi.",
                cloze_jp: "試合に負けたのはミスをした私の＿＿＿だ。",
                cloze_answer: "せい"
            },
            {
                jp: "<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>のせいか、<ruby>最近<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby><ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>は<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>がないようだ。",
                vi: "Có lẽ do tôi tưởng tượng (do cảm giác của tôi), nhưng dạo này bố có vẻ không được khỏe.",
                cloze_jp: "気の＿＿＿か、最近父は元気がないようだ。",
                cloze_answer: "せい"
            },
            {
                jp: "<ruby>年<rp>(</rp><rt>とし</rt><rp>)</rp></ruby>のせいか、このごろ<ruby>物忘<rp>(</rp><rt>ものわす</rt><rp>)</rp></ruby>れがひどい。",
                vi: "Có lẽ do tuổi tác, dạo này tôi hay quên 심각하게.",
                cloze_jp: "年の＿＿＿か、このごろ物忘れがひどい。",
                cloze_answer: "せい"
            }
        ]
    },
    {
        id: "N3G020",
        grammar: "〜とおり(に) / 〜どおり(に)",
        meaning: "Đúng như, theo như",
        connection: "Động từ thể từ điển (Vる) / Động từ thể た (Vた) + とおり(に) ； Danh từ + の + とおり(に) ； Danh từ + どおり(に)",
        notes: "Diễn tả một hành động hoặc trạng thái diễn ra đúng theo một πρότυπο, chỉ dẫn, dự đoán, v.v. 「どおり」 thường được dùng sau một số danh từ quen thuộc như 予定(よてい)、計画(けいかく)、予想(よそう)、指示(しじ)、命令(めいれい)、希望(きぼう)、望(のぞ)み.",
        examples: [
            {
                jp: "<ruby>学生<rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby>たちは、<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>が<ruby>黒板<rp>(</rp><rt>こくばん</rt><rp>)</rp></ruby>に<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いたとおりにノートに<ruby>写<rp>(</rp><rt>うつ</rt><rp>)</rp></ruby>した。",
                vi: "Học sinh đã chép vào vở đúng như những gì giáo viên viết trên bảng.",
                cloze_jp: "学生たちは、先生が黒板に書いた＿＿＿＿＿ノートに写した。",
                cloze_answer: "とおりに"
            },
            {
                jp: "<ruby>外国語<rp>(</rp><rt>がいこくご</rt><rp>)</rp></ruby>だと、なかなか<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>ったとおりに<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>すことができない。",
                vi: "Khi nói ngoại ngữ, thật khó để nói được đúng như những gì mình nghĩ.",
                cloze_jp: "外国語だと、なかなか思った＿＿＿＿＿話すことができない。",
                cloze_answer: "とおりに"
            },
            {
                jp: "<ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>がなかなか<ruby>予定<rp>(</rp><rt>よてい</rt><rp>)</rp></ruby>どおりに<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>まない。",
                vi: "Việc học mãi không tiến triển theo đúng kế hoạch.",
                cloze_jp: "勉強がなかなか予定＿＿＿＿＿に進まない。",
                cloze_answer: "どおりに"
            },
            {
                jp: "<ruby>幼<rp>(</rp><rt>おさな</rt><rp>)</rp></ruby>い<ruby>弟<rp>(</rp><rt>おとうと</rt><rp>)</rp></ruby>は<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>いどおりにならないと<ruby>大声<rp>(</rp><rt>おおごえ</rt><rp>)</rp></ruby>で<ruby>泣<rp>(</rp><rt>な</rt><rp>)</rp></ruby>く。",
                vi: "Em trai nhỏ của tôi hễ không theo ý mình (không được như ý muốn) là lại khóc toáng lên.",
                cloze_jp: "幼い弟は思い＿＿＿＿＿にならないと大声で泣く。",
                cloze_answer: "どおり"
            },
            {
                jp: "<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>のとおりに<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>きなさい。",
                vi: "Hãy viết theo như ví dụ.",
                cloze_jp: "例の＿＿＿＿＿書きなさい。",
                cloze_answer: "とおりに"
            },
     


        ]
    },
     {
        id: "N3G021",
        grammar: "〜について / 〜につき",
        meaning: "Về (một chủ đề, một sự việc nào đó). Dùng khi muốn nói, viết, điều tra, v.v. về điều gì đó.",
        connection: "名詞 + について/につき",
        notes: "「〜につき」 là dạng trang trọng hơn của 「〜について」, thường được sử dụng trong văn viết hoặc các thông báo, diễn giải mang tính chính thức.",
        examples: [
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>で<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>について<ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>したい。",
                vi: "Tôi muốn học về lịch sử Nhật Bản ở trường đại học.",
                cloze_jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>大学<rp>(</rp><rt>だいがく</rt><rp>)</rp></ruby>で<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>したい。",
                cloze_answer: "について"
            },
            {
                jp: "<ruby>両親<rp>(</rp><rt>りょうしん</rt><rp>)</rp></ruby>と<ruby>卒業<rp>(</rp><rt>そつぎょう</rt><rp>)</rp></ruby><ruby>後<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>の<ruby>進路<rp>(</rp><rt>しんろ</rt><rp>)</rp></ruby>について<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>し<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>った。",
                vi: "Tôi đã nói chuyện với bố mẹ về con đường sau khi tốt nghiệp.",
                cloze_jp: "<ruby>両親<rp>(</rp><rt>りょうしん</rt><rp>)</rp></ruby>と<ruby>卒業<rp>(</rp><rt>そつぎょう</rt><rp>)</rp></ruby><ruby>後<rp>(</rp><rt>ご</rt><rp>)</rp></ruby>の<ruby>進路<rp>(</rp><rt>しんろ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>し<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>った。",
                cloze_answer: "について"
            },
            {
                jp: "「この<ruby>記事<rp>(</rp><rt>きじ</rt><rp>)</rp></ruby>についてのご<ruby>意見<rp>(</rp><rt>いけん</rt><rp>)</rp></ruby>をお<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>かせください」",
                vi: "Xin hãy cho chúng tôi biết ý kiến của bạn về bài viết này.",
                cloze_jp: "「この<ruby>記事<rp>(</rp><rt>きじ</rt><rp>)</rp></ruby>＿＿＿＿＿のご<ruby>意見<rp>(</rp><rt>いけん</rt><rp>)</rp></ruby>をお<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>かせください」",
                cloze_answer: "について"
            },
            {
                jp: "「<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>事業<rp>(</rp><rt>じぎょう</rt><rp>)</rp></ruby><ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>につき、これからご<ruby>説明<rp>(</rp><rt>せつめい</rt><rp>)</rp></ruby>いたします」",
                vi: "Về kế hoạch kinh doanh mới, tôi xin phép được giải thích ngay sau đây.",
                cloze_jp: "「<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>事業<rp>(</rp><rt>じぎょう</rt><rp>)</rp></ruby><ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>＿＿＿＿＿、これからご<ruby>説明<rp>(</rp><rt>せつめい</rt><rp>)</rp></ruby>いたします」",
                cloze_answer: "につき"
            }
        ]
    },
    {
        id: "N3G022",
        grammar: "〜に関して（て）",
        meaning: "Liên quan đến, về (một vấn đề, chủ đề nào đó).",
        connection: "名詞 + に関し（て）",
        notes: "Mang sắc thái trang trọng hơn 「〜について」. Thường dùng trong văn viết, tin tức, thảo luận chính thức.",
        examples: [
            {
                jp: "「<ruby>申<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>し<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>み<ruby>手続<rp>(</rp><rt>てつづ</rt><rp>)</rp></ruby>きに<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>してお<ruby>伺<rp>(</rp><rt>うかが</rt><rp>)</rp></ruby>いしたいのですが」",
                vi: "Tôi muốn hỏi về thủ tục đăng ký.",
                cloze_jp: "「<ruby>申<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>し<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>み<ruby>手続<rp>(</rp><rt>てつづ</rt><rp>)</rp></ruby>き＿＿＿＿＿お<ruby>伺<rp>(</rp><rt>うかが</rt><rp>)</rp></ruby>いしたいのですが」",
                cloze_answer: "に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "パソコンで<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby><ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>する<ruby>記事<rp>(</rp><rt>きじ</rt><rp>)</rp></ruby>を<ruby>検索<rp>(</rp><rt>けんさく</rt><rp>)</rp></ruby>した。",
                vi: "Tôi đã tìm kiếm các bài viết liên quan đến vấn đề môi trường trên máy tính.",
                cloze_jp: "パソコンで<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby><ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>記事<rp>(</rp><rt>きじ</rt><rp>)</rp></ruby>を<ruby>検索<rp>(</rp><rt>けんさく</rt><rp>)</rp></ruby>した。",
                cloze_answer: "に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>する"
            },
            {
                jp: "<ruby>議長<rp>(</rp><rt>ぎちょう</rt><rp>)</rp></ruby>は<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>して<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しいので、<ruby>絶対<rp>(</rp><rt>ぜったい</rt><rp>)</rp></ruby><ruby>遅刻<rp>(</rp><rt>ちこく</rt><rp>)</rp></ruby>はできない。",
                vi: "Chủ tọa rất nghiêm khắc về thời gian, nên tuyệt đối không thể đi trễ.",
                cloze_jp: "<ruby>議長<rp>(</rp><rt>ぎちょう</rt><rp>)</rp></ruby>は<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しいので、<ruby>絶対<rp>(</rp><rt>ぜったい</rt><rp>)</rp></ruby><ruby>遅刻<rp>(</rp><rt>ちこく</rt><rp>)</rp></ruby>はできない。",
                cloze_answer: "に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "「その<ruby>件<rp>(</rp><rt>けん</rt><rp>)</rp></ruby>に<ruby>関<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>しましては、<ruby>後<rp>(</rp><rt>のち</rt><rp>)</rp></ruby>ほどご<ruby>説明<rp>(</rp><rt>せつめい</rt><rp>)</rp></ruby>いたします」",
                vi: "Về vấn đề đó, tôi sẽ giải thích sau.",
                cloze_jp: "「その<ruby>件<rp>(</rp><rt>けん</rt><rp>)</rp></ruby>＿＿＿＿＿は、<ruby>後<rp>(</rp><rt>のち</rt><rp>)</rp></ruby>ほどご<ruby>説明<rp>(</rp><rt>せつめい</rt><rp>)</rp></ruby>いたします」",
                cloze_answer: "に<ruby>関<rp>(</rp><rt>かん</rp><rp>)</rp></ruby>しまして"
            }
        ]
    },
    {
        id: "N3G023",
        grammar: "〜に比べて",
        meaning: "So với... (dùng để so sánh hai đối tượng).",
        connection: "名詞 + に比べて",
        notes: "Dùng để đưa ra nhận xét, đánh giá sau khi so sánh hai sự vật, sự việc.",
        examples: [
            {
                jp: "<ruby>昼間<rp>(</rp><rt>ひるま</rt><rp>)</rp></ruby>に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べて<ruby>深夜<rp>(</rp><rt>しんや</rt><rp>)</rp></ruby>は<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby><ruby>料金<rp>(</rp><rt>りょうきん</rt><rp>)</rp></ruby>が<ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>い。",
                vi: "So với ban ngày, tiền điện vào đêm khuya rẻ hơn.",
                cloze_jp: "<ruby>昼間<rp>(</rp><rt>ひるま</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>深夜<rp>(</rp><rt>しんや</rt><rp>)</rp></ruby>は<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby><ruby>料金<rp>(</rp><rt>りょうきん</rt><rp>)</rp></ruby>が<ruby>安<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>い。",
                cloze_answer: "に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べて"
            },
            {
                jp: "<ruby>今年<rp>(</rp><rt>ことし</rt><rp>)</rp></ruby>は<ruby>例年<rp>(</rp><rt>れいねん</rt><rp>)</rp></ruby>に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べ、<ruby>寒<rp>(</rp><rt>さむ</rt><rp>)</rp></ruby>さが<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しいそうだ。",
                vi: "Nghe nói năm nay so với mọi năm thì lạnh hơn nhiều.",
                cloze_jp: "<ruby>今年<rp>(</rp><rt>ことし</rt><rp>)</rp></ruby>は<ruby>例年<rp>(</rp><rt>れいねん</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>寒<rp>(</rp><rt>さむ</rt><rp>)</rp></ruby>さが<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しいそうだ。",
                cloze_answer: "に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べ"
            },
            {
                jp: "<ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby>のほうが<ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べ<ruby>平均<rp>(</rp><rt>へいきん</rt><rp>)</rp></ruby><ruby>寿命<rp>(</rp><rt>じゅみょう</rt><rp>)</rp></ruby>の<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>い<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>が<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>い。",
                vi: "Có nhiều quốc gia mà phụ nữ có tuổi thọ trung bình dài hơn so với nam giới.",
                cloze_jp: "<ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby>のほうが<ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>平均<rp>(</rp><rt>へいきん</rt><rp>)</rp></ruby><ruby>寿命<rp>(</rp><rt>じゅみょう</rt><rp>)</rp></ruby>の<ruby>長<rp>(</rp><rt>なが</rt><rp>)</rp></ruby>い<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>が<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>い。",
                cloze_answer: "に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べ"
            },
            {
                jp: "「<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>すのに<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べて<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>く<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>が<ruby>弱<rp>(</rp><rt>よわ</rt><rp>)</rp></ruby>いんです」",
                vi: "So với nói, khả năng viết của tôi yếu hơn.",
                cloze_jp: "「<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>は<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>すの＿＿＿＿＿<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>く<ruby>力<rp>(</rp><rt>ちから</rt><rp>)</rp></ruby>が<ruby>弱<rp>(</rp><rt>よわ</rt><rp>)</rp></ruby>いんです」",
                cloze_answer: "に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べて"
            }
        ]
    },
    {
        id: "N3G024",
        grammar: "〜に加えて",
        meaning: "Thêm vào đó, ngoài ra, hơn nữa.",
        connection: "名詞 + に加えて",
        notes: "Dùng để bổ sung thêm một thông tin, yếu tố vào một sự việc đã có.",
        examples: [
            {
                jp: "<ruby>今週<rp>(</rp><rt>こんしゅう</rt><rp>)</rp></ruby>はいつものテストに<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>えてレポート<ruby>提出<rp>(</rp><rt>ていしゅつ</rt><rp>)</rp></ruby>もあり、とても<ruby>忙<rp>(</rp><rt>いそが</rt><rp>)</rp></ruby>しい。",
                vi: "Tuần này ngoài bài kiểm tra thông thường còn có nộp báo cáo nữa, nên rất bận.",
                cloze_jp: "<ruby>今週<rp>(</rp><rt>こんしゅう</rt><rp>)</rp></ruby>はいつものテスト＿＿＿＿＿レポート<ruby>提出<rp>(</rp><rt>ていしゅつ</rt><rp>)</rp></ruby>もあり、とても<ruby>忙<rp>(</rp><rt>いそが</rt><rp>)</rp></ruby>しい。",
                cloze_answer: "に<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>えて"
            },
            {
                jp: "キムさんの<ruby>作文<rp>(</rp><rt>さくぶん</rt><rp>)</rp></ruby>は<ruby>文法<rp>(</rp><rt>ぶんぽう</rt><rp>)</rp></ruby>の<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>いが<ruby>少<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>ないことに<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え、<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>がはっきりしていて<ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>みやすい。",
                vi: "Bài văn của Kim không chỉ ít lỗi ngữ pháp mà còn có luận điểm rõ ràng, dễ đọc.",
                cloze_jp: "キムさんの<ruby>作文<rp>(</rp><rt>さくぶん</rt><rp>)</rp></ruby>は<ruby>文法<rp>(</rp><rt>ぶんぽう</rt><rp>)</rp></ruby>の<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>いが<ruby>少<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>ないこと＿＿＿＿＿、<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>がはっきりしていて<ruby>読<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>みやすい。",
                cloze_answer: "に<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え"
            },
            {
                jp: "<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>は<ruby>原油<rp>(</rp><rt>げんゆ</rt><rp>)</rp></ruby>の<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がりに<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え、<ruby>急激<rp>(</rp><rt>きゅうげき</rt><rp>)</rp></ruby>な<ruby>円高<rp>(</rp><rt>えんだか</rt><rp>)</rp></ruby>で<ruby>低迷<rp>(</rp><rt>ていめい</rt><rp>)</rp></ruby>している。",
                vi: "Kinh tế Nhật Bản đang trì trệ do giá dầu thô tăng cộng thêm việc đồng Yên tăng giá đột ngột.",
                cloze_jp: "<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>は<ruby>原油<rp>(</rp><rt>げんゆ</rt><rp>)</rp></ruby>の<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がり＿＿＿＿＿、<ruby>急激<rp>(</rp><rt>きゅうげき</rt><rp>)</rp></ruby>な<ruby>円高<rp>(</rp><rt>えんだか</rt><rp>)</rp></ruby>で<ruby>低迷<rp>(</rp><rt>ていめい</rt><rp>)</rp></ruby>している。",
                cloze_answer: "に<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え"
            },
            {
                jp: "3<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>に<ruby>電車<rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby><ruby>賃<rp>(</rp><rt>ちん</rt><rp>)</rp></ruby>が<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がりしたが、それに<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え、4<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>からはバス<ruby>代<rp>(</rp><rt>だい</rt><rp>)</rp></ruby>が<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がりするそうだ。",
                vi: "Tháng 3 giá vé tàu đã tăng, thêm vào đó, nghe nói từ tháng 4 giá vé xe buýt cũng sẽ tăng.",
                cloze_jp: "3<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>に<ruby>電車<rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby><ruby>賃<rp>(</rp><rt>ちん</rt><rp>)</rp></ruby>が<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がりしたが、それ＿＿＿＿＿、4<ruby>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby>からはバス<ruby>代<rp>(</rp><rt>だい</rt><rp>)</rp></ruby>が<ruby>値上<rp>(</rp><rt>ねあ</rt><rp>)</rp></ruby>がりするそうだ。",
                cloze_answer: "に<ruby>加<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>え"
            }
        ]
    },
    {
        id: "N3G025",
        grammar: "〜に対して",
        meaning: "Đối với..., trái ngược với...",
        connection: "名詞 + に対して / Danh từ + なの + に対して / 【動詞・い形容詞・な形容詞】の名詞修飾形 + のに対して",
        notes: "Dùng để so sánh hai sự vật, sự việc có tính chất trái ngược nhau. Cũng có thể diễn tả thái độ, hành động hướng đến một đối tượng nào đó (trong trường hợp này sẽ gần nghĩa với mẫu 〜に対して ở Unit 04, mục 34).",
        examples: [
            {
                jp: "あの<ruby>二人<rp>(</rp><rt>ふたり</rt><rp>)</rp></ruby>はふたごなのに、<ruby>兄<rp>(</rp><rt>あに</rt><rp>)</rp></ruby>はおとなしいのに<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して、<ruby>弟<rp>(</rp><rt>おとうと</rt><rp>)</rp></ruby>はよくしゃべる。",
                vi: "Hai người đó là sinh đôi vậy mà, trong khi người anh thì trầm tính, người em lại nói nhiều.",
                cloze_jp: "あの<ruby>二人<rp>(</rp><rt>ふたり</rt><rp>)</rp></ruby>はふたごなのに、<ruby>兄<rp>(</rp><rt>あに</rt><rp>)</rp></ruby>はおとなしいの＿＿＿＿＿、<ruby>弟<rp>(</rp><rt>おとうと</rt><rp>)</rp></ruby>はよくしゃべる。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "<ruby>近所<rp>(</rp><rt>きんじょ</rt><rp>)</rp></ruby>のスーパーは<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>11<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby><ruby>閉店<rp>(</rp><rt>へいてん</rt><rp>)</rp></ruby>なのに<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>し、コンビニは24<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby><ruby>営業<rp>(</rp><rt>えいぎょう</rt><rp>)</rp></ruby>だ。",
                vi: "Trong khi siêu thị gần nhà đóng cửa lúc 11 giờ đêm, cửa hàng tiện lợi lại mở cửa 24 giờ.",
                cloze_jp: "<ruby>近所<rp>(</rp><rt>きんじょ</rt><rp>)</rp></ruby>のスーパーは<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>11<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby><ruby>閉店<rp>(</rp><rt>へいてん</rt><rp>)</rp></ruby>なの＿＿＿＿＿、コンビニは24<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby><ruby>営業<rp>(</rp><rt>えいぎょう</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rp><rp>)</rp></ruby>し"
            },
            {
                jp: "この<ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>は<ruby>海外<rp>(</rp><rt>かいがい</rt><rp>)</rp></ruby>では<ruby>人気<rp>(</rp><rt>にんき</rt><rp>)</rp></ruby>があるのに<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>国内<rp>(</rp><rt>こくない</rt><rp>)</rp></ruby>ではそうでもない。",
                vi: "Bộ phim này nổi tiếng ở nước ngoài, trong khi ở Nhật Bản thì không hẳn vậy.",
                cloze_jp: "この<ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>は<ruby>海外<rp>(</rp><rt>かいがい</rt><rp>)</rp></ruby>では<ruby>人気<rp>(</rp><rt>にんき</rt><rp>)</rp></ruby>があるの＿＿＿＿＿、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>国内<rp>(</rp><rt>こくない</rt><rp>)</rp></ruby>ではそうでもない。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "<ruby>一般<rp>(</rp><rt>いっぱん</rt><rp>)</rp></ruby>に、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>は<ruby>洋食<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby>を<ruby>好<rp>(</rp><rt>この</rt><rp>)</rp></ruby>む。それに<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して、<ruby>中高年<rp>(</rp><rt>ちゅうこうねん</rt><rp>)</rp></ruby>は<ruby>和食<rp>(</rp><rt>わしょく</rt><rp>)</rp></ruby>を<ruby>好<rp>(</rp><rt>この</rt><rp>)</rp></ruby>む。",
                vi: "Nhìn chung, giới trẻ Nhật Bản thích đồ Tây. Ngược lại, người trung và cao niên lại thích đồ Nhật.",
                cloze_jp: "<ruby>一般<rp>(</rp><rt>いっぱん</rt><rp>)</rp></ruby>に、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>の<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>は<ruby>洋食<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby>を<ruby>好<rp>(</rp><rt>この</rt><rp>)</rp></ruby>む。それ＿＿＿＿＿、<ruby>中高年<rp>(</rp><rt>ちゅうこうねん</rt><rp>)</rp></ruby>は<ruby>和食<rp>(</rp><rt>わしょく</rt><rp>)</rp></ruby>を<ruby>好<rp>(</rp><rt>この</rt><rp>)</rp></ruby>む。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            }
        ]
    },
    {
        id: "N3G026",
        grammar: "〜たびに",
        meaning: "Cứ mỗi lần... thì lại...",
        connection: "名詞 + の + たびに / 動詞の辞書形 + たびに",
        notes: "Diễn tả một hành động hoặc sự việc lặp đi lặp lại mỗi khi có một điều kiện nhất định xảy ra.",
        examples: [
            {
                jp: "バーゲンセールのたびに、ついいらないものも<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>ってしまう。",
                vi: "Cứ mỗi lần có giảm giá, tôi lại lỡ mua cả những thứ không cần thiết.",
                cloze_jp: "バーゲンセール＿＿＿＿＿、ついいらないものも<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>ってしまう。",
                cloze_answer: "のたびに"
            },
            {
                jp: "<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>は<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>のたびに、その<ruby>土地<rp>(</rp><rt>とち</rt><rp>)</rp></ruby>の<ruby>名産<rp>(</rp><rt>めいさん</rt><rp>)</rp></ruby><ruby>品<rp>(</rp><rt>ひん</rt><rp>)</rp></ruby>をおみやげに<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>ってきてくれる。",
                vi: "Bố tôi cứ mỗi lần đi du lịch là lại mua đặc sản của vùng đó về làm quà.",
                cloze_jp: "<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>は<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>＿＿＿＿＿、その<ruby>土地<rp>(</rp><rt>とち</rt><rp>)</rp></ruby>の<ruby>名産<rp>(</rp><rt>めいさん</rt><rp>)</rp></ruby><ruby>品<rp>(</rp><rt>ひん</rt><rp>)</rp></ruby>をおみやげに<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>ってきてくれる。",
                cloze_answer: "のたびに"
            },
            {
                jp: "<ruby>辞書<rp>(</rp><rt>じしょ</rt><rp>)</rp></ruby>を<ruby>引<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>くたびに<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>発見<rp>(</rp><rt>はっけん</rt><rp>)</rp></ruby>がある。",
                vi: "Mỗi lần tra từ điển, tôi lại có một phát hiện mới.",
                cloze_jp: "<ruby>辞書<rp>(</rp><rt>じしょ</rt><rp>)</rp></ruby>を<ruby>引<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>く＿＿＿＿＿<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しい<ruby>発見<rp>(</rp><rt>はっけん</rt><rp>)</rp></ruby>がある。",
                cloze_answer: "たびに"
            },
            {
                jp: "<ruby>友人<rp>(</rp><rt>ゆうじん</rt><rp>)</rp></ruby>たちの<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>を<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>くたびに、うれしく<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>う。",
                vi: "Mỗi lần nghe về sự thành công của bạn bè, tôi lại cảm thấy vui.",
                cloze_jp: "<ruby>友人<rp>(</rp><rt>ゆうじん</rt><rp>)</rp></ruby>たちの<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>を<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>く＿＿＿＿＿、うれしく<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>う。",
                cloze_answer: "たびに"
            }
        ]
    },
    {
        id: "N3G027",
        grammar: "たとえ〜ても",
        meaning: "Cho dù... thì cũng...",
        connection: "たとえ + 【動詞・イ形容詞・ナ形容詞】のテ形 + も / 名詞 + でも",
        notes: "Dùng để diễn tả một giả định, dù điều kiện đó có xảy ra thì kết quả ở vế sau vẫn không thay đổi.",
        examples: [
            {
                jp: "たとえ<ruby>少々<rp>(</rp><rt>しょうしょう</rt><rp>)</rp></ruby><ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>くても、<ruby>質<rp>(</rp><rt>しつ</rt><rp>)</rp></ruby>のいいものが<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いたい。",
                vi: "Cho dù có hơi đắt một chút, tôi vẫn muốn mua đồ chất lượng tốt.",
                cloze_jp: "たとえ<ruby>少々<rp>(</rp><rt>しょうしょう</rt><rp>)</rp></ruby><ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>く＿＿＿＿＿、<ruby>質<rp>(</rp><rt>しつ</rt><rp>)</rp></ruby>のいいものが<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いたい。",
                cloze_answer: "ても"
            },
            {
                jp: "たとえ<ruby>両親<rp>(</rp><rt>りょうしん</rt><rp>)</rp></ruby>に<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>されても、<ruby>家<rp>(</rp><rt>いえ</rt><rp>)</rp></ruby>を<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>て<ruby>一人暮<rp>(</rp><rt>ひとりぐ</rt><rp>)</rp></ruby>らしがしたい。",
                vi: "Cho dù bị bố mẹ phản đối, tôi vẫn muốn ra ở riêng.",
                cloze_jp: "たとえ<ruby>両親<rp>(</rp><rt>りょうしん</rt><rp>)</rp></ruby>に<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>され＿＿＿＿＿、<ruby>家<rp>(</rp><rt>いえ</rt><rp>)</rp></ruby>を<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>て<ruby>一人暮<rp>(</rp><rt>ひとりぐ</rt><rp>)</rp></ruby>らしがしたい。",
                cloze_answer: "ても"
            },
            {
                jp: "<ruby>手紙<rp>(</rp><rt>てがみ</rt><rp>)</rp></ruby>は、たとえ<ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>が<ruby>下手<rp>(</rp><rt>へた</rt><rp>)</rp></ruby>でも<ruby>手書<rp>(</rp><rt>てが</rt><rp>)</rp></ruby>きのほうが<ruby>暖<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かみがある。",
                vi: "Thư thì cho dù chữ có xấu, viết tay vẫn ấm áp hơn.",
                cloze_jp: "<ruby>手紙<rp>(</rp><rt>てがみ</rt><rp>)</rp></ruby>は、たとえ<ruby>字<rp>(</rp><rt>じ</rp><rp>)</rp></ruby>が<ruby>下手<rp>(</rp><rt>へた</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>手書<rp>(</rp><rt>てが</rt><rp>)</rp></ruby>きのほうが<ruby>暖<rp>(</rp><rt>あたた</rt><rp>)</rp></ruby>かみがある。",
                cloze_answer: "でも"
            },
            {
                jp: "たとえ<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さな<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>どもでも、ゆっくり<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>してやればわかるはずだ。",
                vi: "Cho dù là trẻ con, nếu nói chuyện từ từ thì chắc chắn chúng sẽ hiểu.",
                cloze_jp: "たとえ<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さな<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>ども＿＿＿＿＿、ゆっくり<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>してやればわかるはずだ。",
                cloze_answer: "でも"
            }
        ]
    },
    {
        id: "N3G028",
        grammar: "〜って",
        meaning: "Nghe nói là..., (ai đó) nói là... (Dùng để truyền đạt lại thông tin đã nghe được).",
        connection: "【名詞・動詞・イ形容詞・ナ形容詞】の普通体 + って",
        notes: "Là cách nói thân mật, suồng sã của 「〜と聞いた」、「〜そうだ」、「〜という」 (khi truyền đạt lại lời nói). Thường dùng trong văn nói.",
        examples: [
            {
                jp: "「お<ruby>母<rp>(</rp><rt>かあ</rt><rp>)</rp></ruby>さん、お<ruby>父<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>さん、きょうは<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>くなるって」",
                vi: "Mẹ ơi, bố ơi, (anh/chị ấy) nói là hôm nay sẽ về muộn.",
                cloze_jp: "「お<ruby>母<rp>(</rp><rt>かあ</rp><rp>)</rp></ruby>さん、お<ruby>父<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>さん、きょうは<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>くなる＿＿＿＿＿」",
                cloze_answer: "って"
            },
            {
                jp: "「<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>さん、<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>くって？」「ううん、<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かないって」",
                vi: "Anh Tanaka nói là sẽ đi à? Không, anh ấy nói là không đi.",
                cloze_jp: "「<ruby>田中<rp>(</rp><rt>たなか</rt><rp>)</rp></ruby>さん、<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>く＿＿＿＿＿？」「ううん、<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かない＿＿＿＿＿」",
                cloze_answer: "って"
            },
            {
                jp: "「<ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>で<ruby>習<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>ったんだけど、このあたりは<ruby>昔<rp>(</rp><rt>むかし</rt><rp>)</rp></ruby>、<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>だったんだって」",
                vi: "Tớ học ở trường rồi, nghe nói vùng này ngày xưa là biển đấy.",
                cloze_jp: "「<ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby>で<ruby>習<rp>(</rp><rt>なら</rp><rp>)</rp></ruby>ったんだけど、このあたりは<ruby>昔<rp>(</rp><rt>むかし</rt><rp>)</rp></ruby>、<ruby>海<rp>(</rp><rt>うみ</rt><rp>)</rp></ruby>だったんだ＿＿＿＿＿」",
                cloze_answer: "って"
            },
            {
                jp: "「<ruby>天気<rp>(</rp><rt>てんき</rt><rp>)</rp></ruby><ruby>予報<rp>(</rp><rt>よほう</rt><rp>)</rp></ruby>、なんて<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってた？」「<ruby>晴<rp>(</rp><rt>は</rt><rp>)</rp></ruby>れるって。それに、<ruby>暑<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>いって」",
                vi: "Dự báo thời tiết nói sao? Nói là trời sẽ nắng. Hơn nữa, còn nói là sẽ nóng.",
                cloze_jp: "「<ruby>天気<rp>(</rp><rt>てんき</rt><rp>)</rp></ruby><ruby>予報<rp>(</rp><rt>よほう</rt><rp>)</rp></ruby>、なんて<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ってた？」「<ruby>晴<rp>(</rp><rt>は</rt><rp>)</rp></ruby>れる＿＿＿＿＿。それに、<ruby>暑<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>い＿＿＿＿＿」",
                cloze_answer: "って"
            },
            {
                jp: "「<ruby>久<rp>(</rp><rt>ひさ</rt><rp>)</rp></ruby>しぶりにテイさんからメールが<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>たよ。<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>だって」",
                vi: "Lâu rồi mới nhận được mail từ anh Tei đấy. Anh ấy nói là vẫn khỏe.",
                cloze_jp: "「<ruby>久<rp>(</rp><rt>ひさ</rt><rp>)</rp></ruby>しぶりにテイさんからメールが<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>たよ。<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>だ＿＿＿＿＿」",
                cloze_answer: "って"
            }
        ]
    },
    {
        id: "N3G029",
        grammar: "〜くらい/ぐらい",
        meaning: "① Khoảng, xấp xỉ (số lượng, mức độ). ② Đến mức (mô tả mức độ cao). ③ Cỡ như, chỉ là (mô tả mức độ thấp, xem nhẹ).",
        connection: "名詞 / 【動詞・イ形容詞・ナ形容詞】の名詞修飾形 + くらい/ぐらい",
        notes: "「ぐらい」 thường được dùng phổ biến hơn trong văn nói. Nghĩa ③ thường mang hàm ý xem nhẹ, coi thường.",
        examples: [
            {
                jp: "ここから<ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>まで10<ruby>分<rp>(</rp><rt>ぷん</rt><rp>)</rp></ruby>ぐらいだ。(①)",
                vi: "Từ đây đến ga khoảng 10 phút.",
                cloze_jp: "ここから<ruby>駅<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>まで10<ruby>分<rp>(</rp><rt>ぷん</rt><rp>)</rp></ruby>＿＿＿＿＿だ。",
                cloze_answer: "ぐらい"
            },
            {
                jp: "もう<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>けないくらい<ruby>疲<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>れた。(②)",
                vi: "Tôi mệt đến mức không thể cử động được nữa.",
                cloze_jp: "もう<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>けない＿＿＿＿＿<ruby>疲<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>れた。",
                cloze_answer: "くらい"
            },
            {
                jp: "ライバルに<ruby>負<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>けた。<ruby>悔<rp>(</rp><rt>くや</rt><rp>)</rp></ruby>しくて<ruby>泣<rp>(</rp><rt>な</rt><rp>)</rp></ruby>きたいぐらいだ。(②)",
                vi: "Tôi đã thua đối thủ. Tiếc đến mức muốn khóc.",
                cloze_jp: "ライバルに<ruby>負<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>けた。<ruby>悔<rp>(</rp><rt>くや</rt><rp>)</rp></ruby>しくて<ruby>泣<rp>(</rp><rt>な</rt><rp>)</rp></ruby>きたい＿＿＿＿＿だ。",
                cloze_answer: "ぐらい"
            },
            {
                jp: "<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>くらいの<ruby>背<rp>(</rp><rt>せ</rt><rp>)</rp></ruby>の<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さなら、<ruby>棚<rp>(</rp><rt>たな</rt><rp>)</rp></ruby>に<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>が<ruby>届<rp>(</rp><rt>とど</rt><rp>)</rp></ruby>くだろう。(①/②)",
                vi: "Nếu cao tầm như anh ấy thì chắc là với tới kệ được.",
                cloze_jp: "<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>＿＿＿＿＿の<ruby>背<rp>(</rp><rt>せ</rp><rp>)</rp></ruby>の<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さなら、<ruby>棚<rp>(</rp><rt>たな</rt><rp>)</rp></ruby>に<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>が<ruby>届<rp>(</rp><rt>とど</rt><rp>)</rp></ruby>くだろう。",
                cloze_answer: "くらい"
            },
            {
                jp: "かぜくらいで<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>を<ruby>休<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>めない。(③)",
                vi: "Chỉ cảm cúm thôi thì không thể nghỉ làm được.",
                cloze_jp: "かぜ＿＿＿＿＿で<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>を<ruby>休<rp>(</rp><rt>やす</rt><rp>)</rp></ruby>めない。",
                cloze_answer: "くらい"
            },
            {
                jp: "これぐらいの<ruby>傷<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>なら<ruby>医者<rp>(</rp><rt>いしゃ</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かなくてもいいだろう。(③)",
                vi: "Vết thương cỡ này thì chắc không cần đi bác sĩ đâu.",
                cloze_jp: "これ＿＿＿＿＿の<ruby>傷<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>なら<ruby>医者<rp>(</rp><rt>いしゃ</rt><rp>)</rp></ruby>に<ruby>行<rp>(</rp><rt>い</rt><rp>)</rp></ruby>かなくてもいいだろう。",
                cloze_answer: "ぐらい"
            },
            {
                jp: "<ruby>半年<rp>(</rp><rt>はんとし</rt><rp>)</rp></ruby><ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>したので、<ruby>簡単<rp>(</rp><rt>かんたん</rt><rp>)</rp></ruby>な<ruby>会話<rp>(</rp><rt>かいわ</rt><rp>)</rp></ruby>くらいならできる。(③)",
                vi: "Vì đã học nửa năm nên hội thoại đơn giản thì có thể được.",
                cloze_jp: "<ruby>半年<rp>(</rp><rt>はんとし</rt><rp>)</rp></ruby><ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>したので、<ruby>簡単<rp>(</rp><rt>かんたん</rt><rp>)</rp></ruby>な<ruby>会話<rp>(</rp><rt>かいわ</rt><rp>)</rp></ruby>＿＿＿＿＿ならできる。",
                cloze_answer: "くらい"
            },
            {
                jp: "<ruby>忙<rp>(</rp><rt>いそが</rt><rp>)</rp></ruby>しくても、<ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>をするくらいの<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>はあるはずだ。(③)",
                vi: "Dù bận rộn, chắc chắn vẫn có thời gian cỡ để gọi điện thoại.",
                cloze_jp: "<ruby>忙<rp>(</rp><rt>いそが</rt><rp>)</rp></ruby>しくても、<ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>をする＿＿＿＿＿の<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>はあるはずだ。",
                cloze_answer: "くらい"
            },
            {
                jp: "「こんなことを<ruby>知<rp>(</rp><rt>し</rt><rp>)</rp></ruby>らないのは<ruby>君<rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>くらいだよ」(③)",
                vi: "Người không biết chuyện này thì chỉ có cậu thôi đấy.",
                cloze_jp: "「こんなことを<ruby>知<rp>(</rp><rt>し</rt><rp>)</rp></ruby>らないのは<ruby>君<rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>＿＿＿＿＿だよ」",
                cloze_answer: "くらい"
            }
        ]
    },
    {
        id: "N3G030",
        grammar: "〜くらいなら / 〜ぐらいなら",
        meaning: "Nếu phải... thì thà... còn hơn.",
        connection: "動詞の辞書形 + くらいなら/ぐらいなら",
        notes: "Diễn tả sự lựa chọn tiêu cực, thà chọn một phương án khác còn hơn là làm điều được nêu ở vế 「〜くらいなら」.",
        examples: [
            {
                jp: "<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>でやめるくらいなら、<ruby>初<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>めからやらないほうがいい。",
                vi: "Nếu bỏ dở giữa chừng thì thà đừng làm ngay từ đầu còn hơn.",
                cloze_jp: "<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>でやめる＿＿＿＿＿、<ruby>初<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>めからやらないほうがいい。",
                cloze_answer: "くらいなら"
            },
            {
                jp: "お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>のためにいやな<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>をするくらいなら、<ruby>貧<rp>(</rp><rt>まず</rt><rp>)</rp></ruby>しくてもいい。",
                vi: "Nếu phải làm công việc mình ghét vì tiền thì thà nghèo còn hơn.",
                cloze_jp: "お<ruby>金<rp>(</rp><rt>かね</rt><rp>)</rp></ruby>のためにいやな<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>をする＿＿＿＿＿、<ruby>貧<rp>(</rp><rt>まず</rt><rp>)</rp></ruby>しくてもいい。",
                cloze_answer: "くらいなら"
            },
            {
                jp: "あいつに<ruby>謝<rp>(</rp><rt>あやま</rt><rp>)</rp></ruby>るくらいなら、<ruby>死<rp>(</rp><rt>し</rt><rp>)</rp></ruby>んだほうがましだ。",
                vi: "Nếu phải xin lỗi hắn ta thì thà chết còn hơn.",
                cloze_jp: "あいつに<ruby>謝<rp>(</rp><rt>あやま</rt><rp>)</rp></ruby>る＿＿＿＿＿、<ruby>死<rp>(</rp><rt>し</rt><rp>)</rp></ruby>んだほうがましだ。",
                cloze_answer: "くらいなら"
            },
            {
                jp: "「<ruby>練習<rp>(</rp><rt>れんしゅう</rt><rp>)</rp></ruby>が<ruby>辛<rp>(</rp><rt>つら</rt><rp>)</rp></ruby>くて<ruby>泣<rp>(</rp><rt>な</rt><rp>)</rp></ruby>くぐらいなら、やめてしまいなさい」",
                vi: "Nếu khổ luyện đến mức phải khóc thì bỏ đi cho rồi.",
                cloze_jp: "「<ruby>練習<rp>(</rp><rt>れんしゅう</rt><rp>)</rp></ruby>が<ruby>辛<rp>(</rp><rt>つら</rt><rp>)</rp></ruby>くて<ruby>泣<rp>(</rp><rt>な</rt><rp>)</rp></ruby>く＿＿＿＿＿、やめてしまいなさい」",
                cloze_answer: "ぐらいなら"
            }
        ]
    },
   
    {
        id: "N3G031",
        grammar: "〜うちに",
        meaning: "① Trong lúc..., trước khi... (thực hiện một hành động trước khi một sự thay đổi nào đó xảy ra). ② Trong khi... (một sự thay đổi không lường trước xảy ra trong quá trình diễn ra một hành động khác).",
        connection: "① 【名詞・イ形容詞・ナ形容詞】の名詞修飾形 / 動詞の【ナイ形・ている】 + うちに. ② 動詞の【ナイ形・ている】 (ている của động từ không có dạng ている thì dùng Vる) + うちに",
        notes: "Nghĩa ① nhấn mạnh việc tranh thủ làm gì đó. Nghĩa ② thường diễn tả một sự thay đổi tự nhiên, không chủ ý.",
        examples: [
            {
                jp: "<ruby>暗<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>くならないうちに<ruby>山<rp>(</rp><rt>やま</rt><rp>)</rp></ruby>を<ruby>下<rp>(</rp><rt>お</rt><rp>)</rp></ruby>りたい。(①)",
                vi: "Tôi muốn xuống núi trong lúc trời chưa tối.",
                cloze_jp: "<ruby>暗<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>くならない＿＿＿＿＿<ruby>山<rp>(</rp><rt>やま</rt><rp>)</rp></ruby>を<ruby>下<rp>(</rp><rt>お</rt><rp>)</rp></ruby>りたい。",
                cloze_answer: "うちに"
            },
            {
                jp: "<ruby>祖父<rp>(</rp><rt>そふ</rt><rp>)</rp></ruby>は<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>なうちにいろいろな<ruby>所<rp>(</rp><rt>ところ</rt><rp>)</rp></ruby>へ<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>したいと<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>っている。(①)",
                vi: "Ông tôi nói rằng muốn đi du lịch nhiều nơi trong lúc còn khỏe.",
                cloze_jp: "<ruby>祖父<rp>(</rp><rt>そふ</rt><rp>)</rp></ruby>は<ruby>元気<rp>(</rp><rt>げんき</rt><rp>)</rp></ruby>な＿＿＿＿＿いろいろな<ruby>所<rp>(</rp><rt>ところ</rt><rp>)</rp></ruby>へ<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>したいと<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>っている。",
                cloze_answer: "うちに"
            },
            {
                jp: "あしたは<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>の<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>だ。<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>が<ruby>寝<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>ているうちに<ruby>朝<rp>(</rp><rt>あさ</rt><rp>)</rp></ruby>ごはんを<ruby>作<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>って<ruby>驚<rp>(</rp><rt>おどろ</rt><rp>)</rp></ruby>かせよう。(①)",
                vi: "Ngày mai là Ngày của Mẹ. Trong lúc mẹ ngủ, mình sẽ làm bữa sáng để mẹ ngạc nhiên.",
                cloze_jp: "あしたは<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>の<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>だ。<ruby>母<rp>(</rp><rt>はは</rt><rp>)</rp></ruby>が<ruby>寝<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>ている＿＿＿＿＿<ruby>朝<rp>(</rp><rt>あさ</rt><rp>)</rp></ruby>ごはんを<ruby>作<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>って<ruby>驚<rp>(</rp><rt>おどろ</rt><rp>)</rp></ruby>かせよう。",
                cloze_answer: "うちに"
            },
            {
                jp: "10<ruby>代<rp>(</rp><rt>だい</rt><rp>)</rp></ruby>のうちに<ruby>将来<rp>(</rp><rt>しょうらい</rt><rp>)</rp></ruby>の<ruby>目標<rp>(</rp><rt>もくひょう</rt><rp>)</rp></ruby>を<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>めたいと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>っている。(①)",
                vi: "Tôi muốn quyết định mục tiêu tương lai trong độ tuổi thiếu niên (10-19 tuổi).",
                cloze_jp: "10<ruby>代<rp>(</rp><rt>だい</rt><rp>)</rp></ruby>の＿＿＿＿＿<ruby>将来<rp>(</rp><rt>しょうらい</rt><rp>)</rp></ruby>の<ruby>目標<rp>(</rp><rt>もくひょう</rt><rp>)</rp></ruby>を<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>めたいと<ruby>思<rp>(</rp><rt>おも</rt><rp>)</rp></ruby>っている。",
                cloze_answer: "うちに"
            },
            {
                jp: "「<ruby>大事<rp>(</rp><rt>だいじ</rt><rp>)</rp></ruby>なことは<ruby>忘<rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れないうちにメモしておいたほうがいいですよ」(①)",
                vi: "Những việc quan trọng thì nên ghi chú lại trong lúc chưa quên.",
                cloze_jp: "「<ruby>大事<rp>(</rp><rt>だいじ</rt><rp>)</rp></ruby>なことは<ruby>忘<rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れない＿＿＿＿＿メモしておいたほうがいいですよ」",
                cloze_answer: "うちに"
            },
            {
                jp: "テレビを<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ているうちに<ruby>寝<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>てしまい、<ruby>試験<rp>(</rp><rt>しけん</rt><rp>)</rp></ruby><ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>ができなかった。(②)",
                vi: "Trong lúc xem TV tôi ngủ quên mất, nên không thể học bài thi được.",
                cloze_jp: "テレビを<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>ている＿＿＿＿＿<ruby>寝<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>てしまい、<ruby>試験<rp>(</rp><rt>しけん</rt><rp>)</rp></ruby><ruby>勉強<rp>(</rp><rt>べんきょう</rt><rp>)</rp></ruby>ができなかった。",
                cloze_answer: "うちに"
            },
            {
                jp: "<ruby>切符<rp>(</rp><rt>きっぷ</rt><rp>)</rp></ruby>を<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>っているうちに<ruby>電車<rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>てしまった。(②)",
                vi: "Trong lúc đang mua vé thì tàu chạy mất rồi.",
                cloze_jp: "<ruby>切符<rp>(</rp><rt>きっぷ</rt><rp>)</rp></ruby>を<ruby>買<rp>(</rp><rt>か</rt><rp>)</rp></ruby>っている＿＿＿＿＿<ruby>電車<rp>(</rp><rt>でんしゃ</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>てしまった。",
                cloze_answer: "うちに"
            },
            {
                jp: "しばらく<ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わないうちに、その<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>はずいぶん<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>きくなっていた。(②)",
                vi: "Trong lúc không gặp một thời gian, đứa bé đó đã lớn hẳn lên.",
                cloze_jp: "しばらく<ruby>会<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わない＿＿＿＿＿、その<ruby>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>はずいぶん<ruby>大<rp>(</rp><rt>おお</rp><rp>)</rp></ruby>きくなっていた。",
                cloze_answer: "うちに"
            }
        ]
    },
    {
        id: "N3G032",
        grammar: "〜を中心に / 〜を中心として / 〜を中心にして",
        meaning: "Lấy... làm trung tâm, tập trung vào...",
        connection: "名詞 + を中心に / を中心として / を中心にして",
        notes: "Diễn tả một đối tượng là trung tâm, nòng cốt của một hoạt động, sự việc hoặc một nhóm.",
        examples: [
            {
                jp: "<ruby>駅前<rp>(</rp><rt>えきまえ</rt><rp>)</rp></ruby>を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>に<ruby>再開発<rp>(</rp><rt>さいかいはつ</rt><rp>)</rp></ruby>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>められ、<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しいビルが<ruby>次々<rp>(</rp><rt>つぎつぎ</rt><rp>)</rp></ruby>と<ruby>建<rp>(</rp><rt>た</rt><rp>)</rp></ruby>てられている。",
                vi: "Việc tái phát triển đang được tiến hành tập trung ở khu vực trước nhà ga, các tòa nhà mới đang được xây dựng liên tiếp.",
                cloze_jp: "<ruby>駅前<rp>(</rp><rt>えきまえ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>再開発<rp>(</rp><rt>さいかいはつ</rt><rp>)</rp></ruby>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>められ、<ruby>新<rp>(</rp><rt>あたら</rt><rp>)</rp></ruby>しいビルが<ruby>次々<rp>(</rp><rt>つぎつぎ</rt><rp>)</rp></ruby>と<ruby>建<rp>(</rp><rt>た</rt><rp>)</rp></ruby>てられている。",
                cloze_answer: "を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>に"
            },
            {
                jp: "<ruby>今度<rp>(</rp><rt>こんど</rt><rp>)</rp></ruby>の<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>代表<rp>(</rp><rt>だいひょう</rt><rp>)</rp></ruby>チームは<ruby>主将<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>の<ruby>中村<rp>(</rp><rt>なかむら</rt><rp>)</rp></ruby><ruby>選手<rp>(</rp><rt>せんしゅ</rt><rp>)</rp></ruby>を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>によくまとまっている。",
                vi: "Đội tuyển Nhật Bản lần này được tổ chức tốt, lấy đội trưởng Nakamura làm trung tâm.",
                cloze_jp: "<ruby>今度<rp>(</rp><rt>こんど</rt><rp>)</rp></ruby>の<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby><ruby>代表<rp>(</rp><rt>だいひょう</rt><rp>)</rp></ruby>チームは<ruby>主将<rp>(</rp><rt>しゅしょう</rt><rp>)</rp></ruby>の<ruby>中村<rp>(</rp><rt>なかむら</rt><rp>)</rp></ruby><ruby>選手<rp>(</rp><rt>せんしゅ</rt><rp>)</rp></ruby>＿＿＿＿＿よくまとまっている。",
                cloze_answer: "を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>に"
            },
            {
                jp: "A<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>にしてABC3<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>合併<rp>(</rp><rt>がっぺい</rt><rp>)</rp></ruby><ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>められている。",
                vi: "Kế hoạch sáp nhập ba công ty ABC đang được tiến hành, lấy công ty A làm trung tâm.",
                cloze_jp: "A<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>＿＿＿＿＿ABC3<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>合併<rp>(</rp><rt>がっぺい</rt><rp>)</rp></ruby><ruby>計画<rp>(</rp><rt>けいかく</rt><rp>)</rp></ruby>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>められている。",
                cloze_answer: "を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>にして"
            },
            {
                jp: "この<ruby>地域<rp>(</rp><rt>ちいき</rt><rp>)</rp></ruby>では<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>とする<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>たちが<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まり、ボランティア<ruby>活動<rp>(</rp><rt>かつどう</rt><rp>)</rp></ruby>をしている。",
                vi: "Ở khu vực này, những người trẻ tuổi mà trung tâm là sinh viên đại học tập hợp lại và thực hiện các hoạt động tình nguyện.",
                cloze_jp: "この<ruby>地域<rp>(</rp><rt>ちいき</rt><rp>)</rp></ruby>では<ruby>大学生<rp>(</rp><rt>だいがくせい</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>たちが<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まり、ボランティア<ruby>活動<rp>(</rp><rt>かつどう</rt><rp>)</rp></ruby>をしている。",
                cloze_answer: "を<ruby>中心<rp>(</rp><rt>ちゅうしん</rt><rp>)</rp></ruby>とする"
            }
        ]
    },
    {
        id: "N3G033",
        grammar: "〜をはじめ",
        meaning: "Trước hết là..., đứng đầu là... (nêu một ví dụ tiêu biểu, sau đó ngụ ý còn nhiều thứ khác tương tự).",
        connection: "名詞 + をはじめ / をはじめとして / をはじめとする + 名詞",
        notes: "Dùng để đưa ra một ví dụ nổi bật, đại diện cho một nhóm các sự vật, sự việc.",
        examples: [
            {
                jp: "<ruby>最近<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>の<ruby>携帯<rp>(</rp><rt>けいたい</rt><rp>)</rp></ruby><ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>にはカメラをはじめとして、いろいろな<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>がついている。",
                vi: "Điện thoại di động gần đây có nhiều chức năng, đầu tiên phải kể đến là camera.",
                cloze_jp: "<ruby>最近<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>の<ruby>携帯<rp>(</rp><rt>けいたい</rt><rp>)</rp></ruby><ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>にはカメラ＿＿＿＿＿、いろいろな<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>がついている。",
                cloze_answer: "をはじめとして"
            },
            {
                jp: "<ruby>新宿<rp>(</rp><rt>しんじゅく</rt><rp>)</rp></ruby>には<ruby>都庁<rp>(</rp><rt>とちょう</rt><rp>)</rp></ruby>をはじめ、<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>くの<ruby>高層<rp>(</rp><rt>こうそう</rt><rp>)</rp></ruby>ビルが<ruby>立<rp>(</rp><rt>た</rt><rp>)</rp></ruby>ち<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいる。",
                vi: "Ở Shinjuku có nhiều tòa nhà cao tầng san sát, điển hình là Tòa nhà Chính phủ Tokyo.",
                cloze_jp: "<ruby>新宿<rp>(</rp><rt>しんじゅく</rt><rp>)</rp></ruby>には<ruby>都庁<rp>(</rp><rt>とちょう</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>くの<ruby>高層<rp>(</rp><rt>こうそう</rt><rp>)</rp></ruby>ビルが<ruby>立<rp>(</rp><rt>た</rt><rp>)</rp></ruby>ち<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいる。",
                cloze_answer: "をはじめ"
            },
            {
                jp: "サミットにはアメリカをはじめとする<ruby>各国<rp>(</rp><rt>かっこく</rt><rp>)</rp></ruby>の<ruby>首脳<rp>(</rp><rt>しゅのう</rt><rp>)</rp></ruby>が<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まる。",
                vi: "Tại hội nghị thượng đỉnh, các nhà lãnh đạo của nhiều quốc gia, đứng đầu là Mỹ, sẽ tập trung.",
                cloze_jp: "サミットにはアメリカ＿＿＿＿＿<ruby>各国<rp>(</rp><rt>かっこく</rt><rp>)</rp></ruby>の<ruby>首脳<rp>(</rp><rt>しゅのう</rt><rp>)</rp></ruby>が<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まる。",
                cloze_answer: "をはじめとする"
            },
            {
                jp: "<ruby>校長<rp>(</rp><rt>こうちょう</rt><rp>)</rp></ruby><ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>をはじめ、<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby><ruby>方<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>には<ruby>大変<rp>(</rp><rt>たいへん</rt><rp>)</rp></ruby>お<ruby>世話<rp>(</rp><rt>せわ</rt><rp>)</rp></ruby>になりました。",
                vi: "Tôi vô cùng biết ơn các thầy cô, đặc biệt là thầy hiệu trưởng.",
                cloze_jp: "<ruby>校長<rp>(</rp><rt>こうちょう</rt><rp>)</rp></ruby><ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby><ruby>方<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>には<ruby>大変<rp>(</rp><rt>たいへん</rt><rp>)</rp></ruby>お<ruby>世話<rp>(</rp><rt>せわ</rt><rp>)</rp></ruby>になりました。",
                cloze_answer: "をはじめ"
            }
        ]
    },
    {
        id: "N3G034",
        grammar: "〜に対して",
        meaning: "Đối với..., hướng về... (chỉ đối tượng của hành động, thái độ).",
        connection: "名詞 + に対して / に対する + 名詞",
        notes: "Diễn tả hành động, thái độ, tình cảm, v.v. hướng đến một đối tượng cụ thể. Khác với 〜に対して (N3G025) dùng để so sánh đối lập.",
        examples: [
            {
                jp: "<ruby>目上<rp>(</rp><rt>めうえ</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>しては<ruby>敬語<rp>(</rp><rt>けいご</rt><rp>)</rp></ruby>を<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>わなければならない。",
                vi: "Đối với người trên, phải sử dụng kính ngữ.",
                cloze_jp: "<ruby>目上<rp>(</rp><rt>めうえ</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>＿＿＿＿＿は<ruby>敬語<rp>(</rp><rt>けいご</rt><rp>)</rp></ruby>を<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>わなければならない。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>は<ruby>学生<rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby>のどんな<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>しても、ていねいに<ruby>答<rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えてくれる。",
                vi: "Thầy giáo luôn trả lời cẩn thận đối với bất kỳ câu hỏi nào của học sinh.",
                cloze_jp: "<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>は<ruby>学生<rp>(</rp><rt>がくせい</rt><rp>)</rp></ruby>のどんな<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>＿＿＿＿＿も、ていねいに<ruby>答<rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えてくれる。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            },
            {
                jp: "<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>し、<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>はいつも<ruby>反抗<rp>(</rp><rt>はんこう</rt><rp>)</rp></ruby><ruby>的<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>な<ruby>態度<rp>(</rp><rt>たいど</rt><rp>)</rp></ruby>をとった。",
                vi: "Đối với người cha nghiêm khắc, tôi luôn có thái độ chống đối.",
                cloze_jp: "<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい<ruby>父<rp>(</rp><rt>ちち</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>はいつも<ruby>反抗<rp>(</rp><rt>はんこう</rt><rp>)</rp></ruby><ruby>的<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>な<ruby>態度<rp>(</rp><rt>たいど</rp><rp>)</rp></ruby>をとった。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>し"
            },
            {
                jp: "<ruby>長引<rp>(</rp><rt>ながび</rt><rp>)</rp></ruby>く<ruby>不況<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>で、<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>の<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>する<ruby>不満<rp>(</rp><rt>ふまん</rt><rp>)</rp></ruby>が<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>まっている。",
                vi: "Do suy thoái kéo dài, sự bất mãn của người dân đối với chính phủ đang tăng cao.",
                cloze_jp: "<ruby>長引<rp>(</rp><rt>ながび</rt><rp>)</rp></ruby>く<ruby>不況<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>で、<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>の<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>不満<rp>(</rp><rt>ふまん</rt><rp>)</rp></ruby>が<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>まっている。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>する"
            },
            {
                jp: "<ruby>彼女<rp>(</rp><rt>かのじょ</rt><rp>)</rp></ruby>は<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>だ。",
                vi: "Cô ấy là người rất nghiêm khắc với bản thân.",
                cloze_jp: "<ruby>彼女<rp>(</rp><rt>かのじょ</rt><rp>)</rp></ruby>は<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "に<ruby>対<rp>(</rp><rt>たい</rt><rp>)</rp></ruby>して"
            }
        ]
    },
    {
        id: "N3G035",
        grammar: "〜において",
        meaning: "Tại, ở, trong (địa điểm, thời gian, lĩnh vực).",
        connection: "名詞 + において / における + 名詞 / におかれましては (kính ngữ)",
        notes: "Là cách nói trang trọng hơn của 「で」 (địa điểm, thời gian) hoặc 「に」 (lĩnh vực). 「におきまして」 là dạng lịch sự hơn, thường dùng trong các thông báo, phát biểu trang trọng.",
        examples: [
            {
                jp: "<ruby>近代<rp>(</rp><rt>きんだい</rt><rp>)</rp></ruby><ruby>工業<rp>(</rp><rt>こうぎょう</rt><rp>)</rp></ruby>はヨーロッパにおいて<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>した。",
                vi: "Công nghiệp hiện đại ra đời ở châu Âu.",
                cloze_jp: "<ruby>近代<rp>(</rp><rt>きんだい</rt><rp>)</rp></ruby><ruby>工業<rp>(</rp><rt>こうぎょう</rt><rp>)</rp></ruby>はヨーロッパ＿＿＿＿＿<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>した。",
                cloze_answer: "において"
            },
            {
                jp: "<ruby>災害<rp>(</rp><rt>さいがい</rt><rp>)</rp></ruby><ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>においては、<ruby>冷静<rp>(</rp><rt>れいせい</rt><rp>)</rp></ruby>になることが<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>よりも<ruby>大切<rp>(</rp><rt>たいせつ</rt><rp>)</rp></ruby>だ。",
                vi: "Trong trường hợp xảy ra thiên tai, giữ bình tĩnh là điều quan trọng hơn bất cứ thứ gì.",
                cloze_jp: "<ruby>災害<rp>(</rp><rt>さいがい</rt><rp>)</rp></ruby><ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>＿＿＿＿＿は、<ruby>冷静<rp>(</rp><rt>れいせい</rt><rp>)</rp></ruby>になることが<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>よりも<ruby>大切<rp>(</rp><rt>たいせつ</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "において"
            },
            {
                jp: "<ruby>卒業<rp>(</rp><rt>そつぎょう</rt><rp>)</rp></ruby><ruby>式<rp>(</rp><rt>しき</rt><rp>)</rp></ruby>は○○ホールにおきまして10<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>より<ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>われます。",
                vi: "Lễ tốt nghiệp sẽ được tổ chức tại hội trường XX từ 10 giờ.",
                cloze_jp: "<ruby>卒業<rp>(</rp><rt>そつぎょう</rt><rp>)</rp></ruby><ruby>式<rp>(</rp><rt>しき</rt><rp>)</rp></ruby>は○○ホール＿＿＿＿＿10<ruby>時<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>より<ruby>行<rp>(</rp><rt>おこな</rt><rp>)</rp></ruby>われます。",
                cloze_answer: "におきまして"
            },
            {
                jp: "<ruby>我<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>が<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>車<rp>(</rp><rt>くるま</rt><rp>)</rp></ruby>は、<ruby>安全性<rp>(</rp><rt>あんぜんせい</rt><rp>)</rp></ruby>においてはどこにも<ruby>負<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>けません。",
                vi: "Xe của công ty chúng tôi, về mặt an toàn thì không thua kém bất cứ đâu.",
                cloze_jp: "<ruby>我<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>が<ruby>社<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>車<rp>(</rp><rt>くるま</rt><rp>)</rp></ruby>は、<ruby>安全性<rp>(</rp><rt>あんぜんせい</rt><rp>)</rp></ruby>＿＿＿＿＿どこにも<ruby>負<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>けません。",
                cloze_answer: "においては"
            },
            {
                jp: "<ruby>明治<rp>(</rp><rt>めいじ</rt><rp>)</rp></ruby><ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>における<ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby><ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>について<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>したい。",
                vi: "Tôi muốn nghiên cứu về giáo dục trường học trong thời kỳ Minh Trị.",
                cloze_jp: "<ruby>明治<rp>(</rp><rt>めいじ</rt><rp>)</rp></ruby><ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>学校<rp>(</rp><rt>がっこう</rt><rp>)</rp></ruby><ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>について<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>したい。",
                cloze_answer: "における"
            }
        ]
    },
    {
        id: "N3G036",
        grammar: "〜にわたって / 〜にわたり",
        meaning: "Trong suốt (một khoảng thời gian dài), trên toàn (một phạm vi rộng).",
        connection: "名詞 + にわたって / にわたり / にわたる + 名詞",
        notes: "Diễn tả một sự việc, hành động trải dài trên một phạm vi rộng lớn về thời gian hoặc không gian, thường nhấn mạnh quy mô lớn.",
        examples: [
            {
                jp: "<ruby>国立<rp>(</rp><rt>こくりつ</rt><rp>)</rp></ruby><ruby>競技<rp>(</rp><rt>きょうぎ</rt><rp>)</rp></ruby><ruby>場<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby>では2<ruby>週間<rp>(</rp><rt>しゅうかん</rt><rp>)</rp></ruby>にわたって<ruby>熱戦<rp>(</rp><rt>ねっせん</rt><rp>)</rp></ruby>が<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>げられた。",
                vi: "Tại Sân vận động Quốc gia, các trận đấu quyết liệt đã diễn ra trong suốt 2 tuần.",
                cloze_jp: "<ruby>国立<rp>(</rp><rt>こくりつ</rt><rp>)</rp></ruby><ruby>競技<rp>(</rp><rt>きょうぎ</rt><rp>)</rp></ruby><ruby>場<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby>では2<ruby>週間<rp>(</rp><rt>しゅうかん</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>熱戦<rp>(</rp><rt>ねっせん</rt><rp>)</rp></ruby>が<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>げられた。",
                cloze_answer: "にわたって"
            },
            {
                jp: "<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>が<ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>づき、<ruby>関東<rp>(</rp><rt>かんとう</rt><rp>)</rp></ruby><ruby>地方<rp>(</rp><rt>ちほう</rt><rp>)</rp></ruby><ruby>全域<rp>(</rp><rt>ぜんいき</rt><rp>)</rp></ruby>にわたって<ruby>暴風<rp>(</rp><rt>ぼうふう</rt><rp>)</rp></ruby><ruby>警報<rp>(</rp><rt>けいほう</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>だ</rt><rp>)</rp></ruby>された。",
                vi: "Bão đang đến gần, cảnh báo bão đã được ban hành trên toàn bộ khu vực Kanto.",
                cloze_jp: "<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>が<ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>づき、<ruby>関東<rp>(</rp><rt>かんとう</rt><rp>)</rp></ruby><ruby>地方<rp>(</rp><rt>ちほう</rt><rp>)</rp></ruby><ruby>全域<rp>(</rp><rt>ぜんいき</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>暴風<rp>(</rp><rt>ぼうふう</rt><rp>)</rp></ruby><ruby>警報<rp>(</rp><rt>けいほう</rt><rp>)</rp></ruby>が<ruby>出<rp>(</rp><rt>だ</rt><rp>)</rp></ruby>された。",
                cloze_answer: "にわたって"
            },
            {
                jp: "<ruby>崖崩<rp>(</rp><rt>がけくず</rt><rp>)</rp></ruby>れのため、その<ruby>道路<rp>(</rp><rt>どうろ</rt><rp>)</rp></ruby>は10キロにわたり<ruby>通行止<rp>(</rp><rt>つうこうど</rp><rp>)</rp></ruby>めになった。",
                vi: "Do sạt lở đất, con đường đó đã bị cấm lưu thông trong phạm vi 10km.",
                cloze_jp: "<ruby>崖崩<rp>(</rp><rt>がけくず</rt><rp>)</rp></ruby>れのため、その<ruby>道路<rp>(</rp><rt>どうろ</rt><rp>)</rp></ruby>は10キロ＿＿＿＿＿<ruby>通行止<rp>(</rp><rt>つうこうど</rt><rp>)</rp></ruby>めになった。",
                cloze_answer: "にわたり"
            },
            {
                jp: "<ruby>病院<rp>(</rp><rt>びょういん</rt><rp>)</rp></ruby>で<ruby>食生活<rp>(</rp><rt>しょくせいかつ</rt><rp>)</rp></ruby><ruby>全般<rp>(</rp><rt>ぜんぱん</rt><rp>)</rp></ruby>にわたる<ruby>指導<rp>(</rp><rt>しどう</rp><rp>)</rp></ruby>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>けた。",
                vi: "Tôi đã nhận được hướng dẫn về toàn bộ chế độ ăn uống tại bệnh viện.",
                cloze_jp: "<ruby>病院<rp>(</rp><rt>びょういん</rt><rp>)</rp></ruby>で<ruby>食生活<rp>(</rp><rt>しょくせいかつ</rt><rp>)</rp></ruby><ruby>全般<rp>(</rp><rt>ぜんぱん</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>指導<rp>(</rp><rt>しどう</rp><rp>)</rp></ruby>を<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>けた。",
                cloze_answer: "にわたる"
            },
            {
                jp: "20<ruby>年<rp>(</rp><rt>ねん</rt><rp>)</rp></ruby>にわたった<ruby>内戦<rp>(</rp><rt>ないせん</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わり、<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>の<ruby>顔<rp>(</rp><rt>かお</rt><rp>)</rp></ruby>にもようやく<ruby>笑顔<rp>(</rp><rt>えがお</rt><rp>)</rp></ruby>が<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>られるようになった。",
                vi: "Cuộc nội chiến kéo dài 20 năm đã kết thúc, cuối cùng nụ cười cũng đã xuất hiện trên khuôn mặt người dân.",
                cloze_jp: "20<ruby>年<rp>(</rp><rt>ねん</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>内戦<rp>(</rp><rt>ないせん</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わり、<ruby>国民<rp>(</rp><rt>こくみん</rt><rp>)</rp></ruby>の<ruby>顔<rp>(</rp><rt>かお</rt><rp>)</rp></ruby>にもようやく<ruby>笑顔<rp>(</rp><rt>えがお</rt><rp>)</rp></ruby>が<ruby>見<rp>(</rp><rt>み</rt><rp>)</rp></ruby>られるようになった。",
                cloze_answer: "にわたった"
            },
            {
                jp: "その<ruby>会議<rp>(</rp><rt>かいぎ</rt><rp>)</rp></ruby>では、<ruby>多岐<rp>(</rp><rt>たき</rt><rp>)</rp></ruby>にわたる<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>が<ruby>議論<rp>(</rp><rt>ぎろん</rt><rp>)</rp></ruby>された。",
                vi: "Trong cuộc họp đó, nhiều vấn đề đa dạng đã được thảo luận.",
                cloze_jp: "その<ruby>会議<rp>(</rp><rt>かいぎ</rt><rp>)</rp></ruby>では、<ruby>多岐<rp>(</rp><rt>たき</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>が<ruby>議論<rp>(</rp><rt>ぎろん</rt><rp>)</rp></ruby>された。",
                cloze_answer: "にわたる"
            }
        ]
    },
    {
        id: "N3G037",
        grammar: "〜にとって",
        meaning: "Đối với... (đứng trên lập trường của ai đó để đưa ra nhận xét, đánh giá).",
        connection: "名詞 + にとって",
        notes: "Dùng để thể hiện quan điểm, sự đánh giá từ một lập trường cụ thể.",
        examples: [
            {
                jp: "<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>は<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>にとっては<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>のある<ruby>魅力<rp>(</rp><rt>みりょく</rt><rp>)</rp></ruby><ruby>的<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>な<ruby>街<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>だ。",
                vi: "Đối với giới trẻ, Tokyo là một thành phố đầy kích thích và hấp dẫn.",
                cloze_jp: "<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>は<ruby>若者<rp>(</rp><rt>わかもの</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>のある<ruby>魅力<rp>(</rp><rt>みりょく</rt><rp>)</rp></ruby><ruby>的<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>な<ruby>街<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "にとっては"
            },
            {
                jp: "<ruby>百万<rp>(</rp><rt>ひゃくまん</rt><rp>)</rp></ruby><ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>は<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>にとっては<ruby>大金<rp>(</rp><rt>たいきん</rt><rp>)</rp></ruby>だが、<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>にとってはたいした<ruby>金額<rp>(</rp><rt>きんがく</rt><rp>)</rp></ruby>ではないようだ。",
                vi: "Một triệu yên đối với tôi là một số tiền lớn, nhưng đối với anh ấy dường như không phải là số tiền đáng kể.",
                cloze_jp: "<ruby>百万<rp>(</rp><rt>ひゃくまん</rt><rp>)</rp></ruby><ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>は<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>大金<rp>(</rp><rt>たいきん</rt><rp>)</rp></ruby>だが、<ruby>彼<rp>(</rp><rt>かれ</rt><rp>)</rp></ruby>＿＿＿＿＿たいした<ruby>金額<rp>(</rp><rt>きんがく</rt><rp>)</rp></ruby>ではないようだ。",
                cloze_answer: "にとっては" // Có thể chọn một trong hai, hoặc cả hai với đánh dấu riêng
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>にとって<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>は、<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>の<ruby>夢<rp>(</rp><rt>ゆめ</rt><rp>)</rp></ruby>を<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>するための<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>だ。",
                vi: "Đối với tôi, Nhật Bản là đất nước để thực hiện ước mơ của mình.",
                cloze_jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>は、<ruby>自分<rp>(</rp><rt>じぶん</rt><rp>)</rp></ruby>の<ruby>夢<rp>(</rp><rt>ゆめ</rt><rp>)</rp></ruby>を<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>するための<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "にとって"
            },
            {
                jp: "<ruby>規制<rp>(</rp><rt>きせい</rt><rp>)</rp></ruby><ruby>緩和<rp>(</rp><rt>かんわ</rt><rp>)</rp></ruby>は<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>にとっても<ruby>民間<rp>(</rp><rt>みんかん</rt><rp>)</rp></ruby><ruby>企業<rp>(</rp><rt>きぎょう</rt><rp>)</rp></ruby>にとっても<ruby>切実<rp>(</rp><rt>せつじつ</rt><rp>)</rp></ruby>な<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>だ。",
                vi: "Việc nới lỏng quy định là một vấn đề cấp thiết đối với cả chính phủ và doanh nghiệp tư nhân.",
                cloze_jp: "<ruby>規制<rp>(</rp><rt>きせい</rt><rp>)</rp></ruby><ruby>緩和<rp>(</rp><rt>かんわ</rt><rp>)</rp></ruby>は<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>民間<rp>(</rp><rt>みんかん</rt><rp>)</rp></ruby><ruby>企業<rp>(</rp><rt>きぎょう</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>切実<rp>(</rp><rt>せつじつ</rt><rp>)</rp></ruby>な<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>だ。",
                cloze_answer: "にとっても" // Có thể chọn một trong hai, hoặc cả hai với đánh dấu riêng
            },
            {
                jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>にとっての<ruby>故郷<rp>(</rp><rt>こきょう</rt><rp>)</rp></ruby>とは、<ruby>青春<rp>(</rp><rt>せいしゅん</rt><rp>)</rp></ruby><ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>を<ruby>過<rp>(</rp><rt>す</rt><rp>)</rp></ruby>ごしたあの<ruby>町<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>しかない。",
                vi: "Quê hương đối với tôi chỉ có thể là thị trấn nơi tôi đã trải qua thời thanh xuân.",
                cloze_jp: "<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>＿＿＿＿＿の<ruby>故郷<rp>(</rp><rt>こきょう</rt><rp>)</rp></ruby>とは、<ruby>青春<rp>(</rp><rt>せいしゅん</rt><rp>)</rp></ruby><ruby>時代<rp>(</rp><rt>じだい</rt><rp>)</rp></ruby>を<ruby>過<rp>(</rp><rt>す</rt><rp>)</rp></ruby>ごしたあの<ruby>町<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>しかない。",
                cloze_answer: "にとって"
            }
        ]
    },
    {
        id: "N3G038",
        grammar: "〜による / 〜により / 〜によって / 〜によっては",
        meaning: "① Do, bởi (nguyên nhân, lý do). ② Bằng, qua (phương tiện, cách thức). ③ Dựa vào, căn cứ vào. ④ Tùy theo, tùy vào (sự khác biệt). ⑤ Tùy theo trường hợp... (có thể xảy ra điều gì đó).",
        connection: "名詞 + による/により/によって/によっては",
        notes: "Một mẫu ngữ pháp đa nghĩa. 「〜によって」phổ biến nhất. 「〜によっては」thường dùng ở ý nghĩa ⑤.",
        examples: [
            {
                jp: "<ruby>森林<rp>(</rp><rt>しんりん</rt><rp>)</rp></ruby>の<ruby>伐採<rp>(</rp><rt>ばっさい</rt><rp>)</rp></ruby>により、<ruby>世界<rp>(</rp><rt>せかい</rt><rp>)</rp></ruby><ruby>各地<rp>(</rp><rt>かくち</rt><rp>)</rp></ruby>で<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby><ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こっている。(①)",
                vi: "Do nạn phá rừng, hiện tượng sa mạc hóa đang xảy ra ở nhiều nơi trên thế giới.",
                cloze_jp: "<ruby>森林<rp>(</rp><rt>しんりん</rt><rp>)</rp></ruby>の<ruby>伐採<rp>(</rp><rt>ばっさい</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>世界<rp>(</rp><rt>せかい</rt><rp>)</rp></ruby><ruby>各地<rp>(</rp><rt>かくち</rt><rp>)</rp></ruby>で<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby><ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こっている。",
                cloze_answer: "により"
            },
            {
                jp: "<ruby>今度<rp>(</rp><rt>こんど</rt><rp>)</rp></ruby>の<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>による<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>は1<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby><ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>に<ruby>上<rp>(</rp><rt>のぼ</rt><rp>)</rp></ruby>る。(①)",
                vi: "Thiệt hại do cơn bão lần này lên tới 100 triệu yên.",
                cloze_jp: "<ruby>今度<rp>(</rp><rt>こんど</rt><rp>)</rp></ruby>の<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>は1<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby><ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>に<ruby>上<rp>(</rp><rt>のぼ</rt><rp>)</rp></ruby>る。",
                cloze_answer: "による"
            },
            {
                jp: "<ruby>少子化<rp>(</rp><rt>しょうしか</rt><rp>)</rp></ruby>は<ruby>結婚<rp>(</rp><rt>けっこん</rt><rp>)</rp></ruby><ruby>年齢<rp>(</rp><rt>ねんれい</rt><rp>)</rp></ruby>が<ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>がったことによるといわれている。(①)",
                vi: "Người ta nói rằng tỷ lệ sinh giảm là do tuổi kết hôn tăng lên.",
                cloze_jp: "<ruby>少子化<rp>(</rp><rt>しょうしか</rt><rp>)</rp></ruby>は<ruby>結婚<rp>(</rp><rt>けっこん</rt><rp>)</rp></ruby><ruby>年齢<rp>(</rp><rt>ねんれい</rt><rp>)</rp></ruby>が<ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>がったこと＿＿＿＿＿といわれている。",
                cloze_answer: "によると"
            },
            {
                jp: "インターネットによって<ruby>瞬時<rp>(</rp><rt>しゅんじ</rt><rp>)</rp></ruby>に<ruby>大量<rp>(</rp><rt>たいりょう</rt><rp>)</rp></ruby>の<ruby>情報<rp>(</rp><rt>じょうほう</rt><rp>)</rp></ruby>が<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>られるようになった。(②)",
                vi: "Nhờ có internet, chúng ta có thể có được lượng lớn thông tin trong nháy mắt.",
                cloze_jp: "インターネット＿＿＿＿＿<ruby>瞬時<rp>(</rp><rt>しゅんじ</rt><rp>)</rp></ruby>に<ruby>大量<rp>(</rp><rt>たいりょう</rt><rp>)</rp></ruby>の<ruby>情報<rp>(</rp><rt>じょうほう</rt><rp>)</rp></ruby>が<ruby>得<rp>(</rp><rt>え</rt><rp>)</rp></ruby>られるようになった。",
                cloze_answer: "によって"
            },
            {
                jp: "<ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>によるお<ruby>問<rp>(</rp><rt>と</rt><rp>)</rp></ruby>い<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わせはご<ruby>遠慮<rp>(</rp><rt>えんりょ</rt><rp>)</rp></ruby>ください。(②)",
                vi: "Xin vui lòng không liên hệ qua điện thoại.",
                cloze_jp: "<ruby>電話<rp>(</rp><rt>でんわ</rt><rp>)</rp></ruby>＿＿＿＿＿お<ruby>問<rp>(</rp><rt>と</rp><rp>)</rp></ruby>い<ruby>合<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>わせはご<ruby>遠慮<rp>(</rp><rt>えんりょ</rt><rp>)</rp></ruby>ください。",
                cloze_answer: "による"
            },
            {
                jp: "<ruby>成績<rp>(</rp><rt>せいせき</rt><rp>)</rp></ruby>によってクラスを<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>める。(③)",
                vi: "Lớp học được quyết định dựa trên thành tích.",
                cloze_jp: "<ruby>成績<rp>(</rp><rt>せいせき</rt><rp>)</rp></ruby>＿＿＿＿＿クラスを<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>める。",
                cloze_answer: "によって"
            },
            {
                jp: "<ruby>目撃<rp>(</rp><rt>もくげき</rt><rp>)</rp></ruby><ruby>者<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>証言<rp>(</rp><rt>しょうげん</rt><rp>)</rp></ruby>により、<ruby>犯人<rp>(</rp><rt>はんにん</rt><rp>)</rp></ruby>が<ruby>逮捕<rp>(</rp><rt>たいほ</rt><rp>)</rp></ruby>された。(③)",
                vi: "Dựa vào lời khai của nhân chứng, thủ phạm đã bị bắt.",
                cloze_jp: "<ruby>目撃<rp>(</rp><rt>もくげき</rt><rp>)</rp></ruby><ruby>者<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>の<ruby>証言<rp>(</rp><rt>しょうげん</rt><rp>)</rp></ruby>＿＿＿＿＿、<ruby>犯人<rp>(</rp><rt>はんにん</rt><rp>)</rp></ruby>が<ruby>逮捕<rp>(</rp><rt>たいほ</rt><rp>)</rp></ruby>された。",
                cloze_answer: "により"
            },
            {
                jp: "<ruby>国籍<rp>(</rp><rt>こくせき</rt><rp>)</rp></ruby>や<ruby>性別<rp>(</rp><rt>せいべつ</rt><rp>)</rp></ruby>による<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>は<ruby>許<rp>(</rp><rt>ゆる</rt><rp>)</rp></ruby>せない。(③)",
                vi: "Không thể tha thứ cho sự phân biệt đối xử dựa trên quốc tịch hay giới tính.",
                cloze_jp: "<ruby>国籍<rp>(</rp><rt>こくせき</rt><rp>)</rp></ruby>や<ruby>性別<rp>(</rp><rt>せいべつ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>は<ruby>許<rp>(</rp><rt>ゆる</rt><rp>)</rp></ruby>せない。",
                cloze_answer: "による"
            },
            {
                jp: "<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby>や<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>は<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>によって<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>う。(④)",
                vi: "Văn hóa và luật pháp khác nhau tùy theo mỗi quốc gia.",
                cloze_jp: "<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby>や<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>は<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>う。",
                cloze_answer: "によって"
            },
            {
                jp: "<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>により、この<ruby>商品<rp>(</rp><rt>しょうひん</rt><rp>)</rp></ruby>の<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>は<ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>かれる。(④)",
                vi: "Tùy theo mỗi người, đánh giá về sản phẩm này sẽ khác nhau.",
                cloze_jp: "<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>＿＿＿＿＿、この<ruby>商品<rp>(</rp><rt>しょうひん</rt><rp>)</rp></ruby>の<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>は<ruby>分<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>かれる。",
                cloze_answer: "により"
            },
            {
                jp: "あの<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>の<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>うことは<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>によって<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わる。(④)",
                vi: "Lời nói của người đó thay đổi tùy theo ngày.",
                cloze_jp: "あの<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>の<ruby>言<rp>(</rp><rt>い</rt><rp>)</rp></ruby>うことは<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わる。",
                cloze_answer: "によって"
            },
            {
                jp: "「<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>(/<ruby>体調<rp>(</rp><rt>たいちょう</rt><rp>)</rp></ruby>/<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>の<ruby>状況<rp>(</rp><rt>じょうきょう</rt><rp>)</rp></ruby>)によっては、<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>に<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>できないかもしれません」(⑤)",
                vi: "Tùy theo ngày (tình trạng sức khỏe/ tình hình công việc), có thể tôi không tham gia chuyến du lịch được.",
                cloze_jp: "「<ruby>日<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>(/<ruby>体調<rp>(</rp><rt>たいちょう</rt><rp>)</rp></ruby>/<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>の<ruby>状況<rp>(</rp><rt>じょうきょう</rt><rp>)</rp></ruby>)＿＿＿＿＿は、<ruby>旅行<rp>(</rp><rt>りょこう</rt><rp>)</rp></ruby>に<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>できないかもしれません」",
                cloze_answer: "によっては"
            },
            {
                jp: "この<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べ<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>は<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>が<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>いので、<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>によってはおなかをこわすことがある。(⑤)",
                vi: "Món ăn này có tính kích thích mạnh, nên tùy người mà có thể bị đau bụng.",
                cloze_jp: "この<ruby>食<rp>(</rp><rt>た</rt><rp>)</rp></ruby>べ<ruby>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>は<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>が<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>いので、<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>＿＿＿＿＿はおなかをこわすことがある。",
                cloze_answer: "によっては"
            },
            {
                jp: "<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>によっては<ruby>安楽死<rp>(</rp><rt>あんらくし</rt><rp>)</rp></ruby>が<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められている。(⑤)",
                vi: "Tùy theo quốc gia, việc trợ tử được cho phép.",
                cloze_jp: "<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>＿＿＿＿＿は<ruby>安楽死<rp>(</rp><rt>あんらくし</rt><rp>)</rp></ruby>が<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められている。",
                cloze_answer: "によっては"
            }
        ]
    },
    {
        id: "N3G039",
        grammar: "〜に違いない",
        meaning: "Chắc chắn là..., không thể sai được (suy đoán với độ chắc chắn cao).",
        connection: "名詞 / 【動詞・イ形容詞・ナ形容詞】の普通体 + に違いない (ただし、ナ形容詞現在形に「だ」はつかない)",
        notes: "Diễn tả sự suy đoán mang tính khẳng định mạnh mẽ của người nói, dựa trên một cơ sở nào đó.",
        examples: [
            {
                jp: "<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>になっても<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>がつかない。きっと<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>かけているに<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない。",
                vi: "Trời tối rồi mà đèn vẫn không sáng. Chắc chắn là họ đã ra ngoài rồi.",
                cloze_jp: "<ruby>夜<rp>(</rp><rt>よる</rt><rp>)</rp></ruby>になっても<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>がつかない。きっと<ruby>出<rp>(</rp><rt>で</rt><rp>)</rp></ruby>かけている＿＿＿＿＿。",
                cloze_answer: "に<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない"
            },
            {
                jp: "<ruby>犯人<rp>(</rp><rt>はんにん</rt><rp>)</rp></ruby>はAに<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない。<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>い<ruby>動機<rp>(</rp><rt>どうき</rt><rp>)</rp></ruby>があって、しかもアリバイがないのだから。",
                vi: "Thủ phạm chắc chắn là A. Bởi vì có động cơ mạnh mẽ và hơn nữa không có bằng chứng ngoại phạm.",
                cloze_jp: "<ruby>犯人<rp>(</rp><rt>はんにん</rt><rp>)</rp></ruby>はA＿＿＿＿＿。<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>い<ruby>動機<rp>(</rp><rt>どうき</rt><rp>)</rp></ruby>があって、しかもアリバイがないのだから。",
                cloze_answer: "に<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない"
            },
            {
                jp: "<ruby>成績<rp>(</rp><rt>せいせき</rt><rp>)</rp></ruby>のいい<ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>さんでも<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>しかできなかったということは、その<ruby>試験<rp>(</rp><rt>しけん</rt><rp>)</rp></ruby>は<ruby>相当<rp>(</rp><rt>そうとう</rt><rp>)</rp></ruby><ruby>難<rp>(</rp><rt>むずか</rt><rp>)</rp></ruby>しかったに<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない。",
                vi: "Ngay cả Yamada, người có thành tích tốt, cũng chỉ làm được một nửa, điều đó có nghĩa là kỳ thi đó chắc chắn rất khó.",
                cloze_jp: "<ruby>成績<rp>(</rp><rt>せいせき</rt><rp>)</rp></ruby>のいい<ruby>山田<rp>(</rp><rt>やまだ</rt><rp>)</rp></ruby>さんでも<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>しかできなかったということは、その<ruby>試験<rp>(</rp><rt>しけん</rt><rp>)</rp></ruby>は<ruby>相当<rp>(</rp><rt>そうとう</rt><rp>)</rp></ruby><ruby>難<rp>(</rp><rt>むずか</rt><rp>)</rp></ruby>しかった＿＿＿＿＿。",
                cloze_answer: "に<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いない"
            },
            {
                jp: "「<ruby>鈴木<rp>(</rp><rt>すずき</rt><rp>)</rp></ruby>さんがまだ<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ませんね。<ruby>遅<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>れるような<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>ではないから、きっと<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かあったに<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いありません」",
                vi: "Anh Suzuki vẫn chưa đến nhỉ. Anh ấy không phải là người hay trễ, chắc chắn đã có chuyện gì đó xảy ra.",
                cloze_jp: "「<ruby>鈴木<rp>(</rp><rt>すずき</rt><rp>)</rp></ruby>さんがまだ<ruby>来<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ませんね。<ruby>遅<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>れるような<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>ではないから、きっと<ruby>何<rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かあった＿＿＿＿＿ありません」",
                cloze_answer: "に<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>い"
            }
        ]
    },
    {
        id: "N3G040",
        grammar: "〜とは / 〜というのは",
        meaning: "... có nghĩa là..., ... là (dùng để định nghĩa, giải thích).",
        connection: "名詞 + とは / というのは",
        notes: "「〜というのは」 thường dùng trong văn nói hoặc khi muốn giải thích một cách mềm mỏng hơn. 「〜とは」 mang sắc thái trang trọng hơn, thường dùng trong định nghĩa, văn viết.",
        examples: [
            {
                jp: "<ruby>著者<rp>(</rp><rt>ちょしゃ</rt><rp>)</rp></ruby>というのはその<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いた<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>のことです。",
                vi: "Tác giả có nghĩa là người đã viết cuốn sách đó.",
                cloze_jp: "<ruby>著者<rp>(</rp><rt>ちょしゃ</rt><rp>)</rp></ruby>＿＿＿＿＿はその<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp></ruby>を<ruby>書<rp>(</rp><rt>か</rt><rp>)</rp></ruby>いた<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>のことです。",
                cloze_answer: "というのは"
            },
            {
                jp: "あなたにとって<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>とは<ruby>何<rp>(</rp><rt>なん</rt><rp>)</rp></ruby>でしょうか。",
                vi: "Đối với bạn, công việc là gì?",
                cloze_jp: "あなたにとって<ruby>仕事<rp>(</rp><rt>しごと</rt><rp>)</rp></ruby>＿＿＿＿＿<ruby>何<rp>(</rp><rt>なん</rt><rp>)</rp></ruby>でしょうか。",
                cloze_answer: "とは"
            },
            {
                jp: "「バリアフリーというのは<ruby>何<rp>(</rp><rt>なん</rt><rp>)</rp></ruby>のことですか」",
                vi: "Barrier-free (Không rào cản) có nghĩa là gì vậy?",
                cloze_jp: "「バリアフリー＿＿＿＿＿<ruby>何<rp>(</rp><rt>なん</rt><rp>)</rp></ruby>のことですか」",
                cloze_answer: "というのは"
            },
            {
                jp: "<ruby>省<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>エネとは「<ruby>省<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>エネルギー」の<ruby>略<rp>(</rp><rt>りゃく</rt><rp>)</rp></ruby>で、<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>やガスなどのエネルギーをあまり<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>わないようにすることである。",
                vi: "Tiết kiệm năng lượng (Sho-ene) là viết tắt của 'Sho-energy', có nghĩa là cố gắng không sử dụng nhiều năng lượng như điện, gas.",
                cloze_jp: "<ruby>省<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>エネ＿＿＿＿＿「<ruby>省<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>エネルギー」の<ruby>略<rp>(</rp><rt>りゃく</rt><rp>)</rp></ruby>で、<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>やガスなどのエネルギーをあまり<ruby>使<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>わないようにすることである。",
                cloze_answer: "とは"
            }
        ]
    }
    // ... (Các điểm ngữ pháp tiếp theo sẽ được thêm vào đây)


];