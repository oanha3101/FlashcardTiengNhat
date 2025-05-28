const N3_VOCAB_DATA = [
    {
        "kanji": "男性",
        "hiragana": "だんせい",
        "nghiatiengviet": "đàn ông"
    },
    {
        "kanji": "女性",
        "hiragana": "じょせい",
        "nghiatiengviet": "đàn bà"
    },
    {
        "kanji": "男女",
        "hiragana": "だんじょ",
        "nghiatiengviet": "đàn ông và đàn bà"
    },
    {
        "kanji": "性別",
        "hiragana": "せいべつ",
        "nghiatiengviet": "giới tính"
    },
    {
        "kanji": "高齢",
        "hiragana": "こうれい",
        "nghiatiengviet": "cao tuổi"
    },
    {
        "kanji": "元気",
        "hiragana": "げんき",
        "nghiatiengviet": "khỏe mạnh"
    },
    {
        "kanji": "年上",
        "hiragana": "としうえ",
        "nghiatiengviet": "hơn tuổi"
    },
    {
        "kanji": "年下",
        "hiragana": "としした",
        "nghiatiengviet": "ít tuổi hơn"
    },
    {
        "kanji": "年長",
        "hiragana": "ねんちょう",
        "nghiatiengviet": "nhiều tuổi hơn"
    },
    {
        "kanji": "目上",
        "hiragana": "めうえ",
        "nghiatiengviet": "người trên"
    },
    {
        "kanji": "敬語",
        "hiragana": "けいご",
        "nghiatiengviet": "lời kính ngữ"
    },
    {
        "kanji": "先輩",
        "hiragana": "せんぱい",
        "nghiatiengviet": "đàn anh/đàn chị"
    },
    {
        "kanji": "後輩",
        "hiragana": "こうはい",
        "nghiatiengviet": "đàn em"
    },
    {
        "kanji": "上司",
        "hiragana": "じょうし",
        "nghiatiengviet": "cấp trên"
    },
    {
        "kanji": "部下",
        "hiragana": "ぶか",
        "nghiatiengviet": "cấp dưới"
    },
    {
        "kanji": "同僚",
        "hiragana": "どうりょう",
        "nghiatiengviet": "đồng nghiệp"
    },
    {
        "kanji": "相手",
        "hiragana": "あいて",
        "nghiatiengviet": "người hội thoại/đối thủ"
    },
    {
        "kanji": "知り合い",
        "hiragana": "しりあい",
        "nghiatiengviet": "người quen"
    },
    {
        "kanji": "知人",
        "hiragana": "ちじん",
        "nghiatiengviet": "người quen"
    },
    {
        "kanji": "友人",
        "hiragana": "ゆうじん",
        "nghiatiengviet": "bạn"
    },
    {
        "kanji": "親友",
        "hiragana": "しんゆう",
        "nghiatiengviet": "bạn thân"
    },
    {
        "kanji": "仲",
        "hiragana": "なか",
        "nghiatiengviet": "quan hệ"
    },
    {
        "kanji": "生年月日",
        "hiragana": "せいねんがっぴ",
        "nghiatiengviet": "ngày tháng năm sinh"
    },
    {
        "kanji": "誕生日",
        "hiragana": "たんじょうび",
        "nghiatiengviet": "sinh nhật"
    },
    {
        "kanji": "誕生",
        "hiragana": "たんじょう",
        "nghiatiengviet": "sinh ra/ra đời"
    },
    {
        "kanji": "年",
        "hiragana": "とし",
        "nghiatiengviet": "năm/tuổi"
    },
    {
        "kanji": "年齢",
        "hiragana": "ねんれい",
        "nghiatiengviet": "tuổi"
    },
    {
        "kanji": "出身",
        "hiragana": "しゅっしん",
        "nghiatiengviet": "xuất thân"
    },
    {
        "kanji": "故郷",
        "hiragana": "こきょう",
        "nghiatiengviet": "quê hương"
    },
    {
        "kanji": "成長",
        "hiragana": "せいちょう",
        "nghiatiengviet": "trưởng thành/tăng trưởng"
    },
    {
        "kanji": "成人",
        "hiragana": "せいじん",
        "nghiatiengviet": "người trưởng thành"
    },
    {
        "kanji": "合格",
        "hiragana": "ごうかく",
        "nghiatiengviet": "đỗ/đạt"
    },
    {
        "kanji": "進学",
        "hiragana": "しんがく",
        "nghiatiengviet": "học lên"
    },
    {
        "kanji": "退学",
        "hiragana": "たいがく",
        "nghiatiengviet": "thôi học"
    },
    {
        "kanji": "就職",
        "hiragana": "しゅうしょく",
        "nghiatiengviet": "được tuyển dụng/làm việc"
    },
    {
        "kanji": "退職",
        "hiragana": "たいしょく",
        "nghiatiengviet": "thôi việc"
    },
    {
        "kanji": "失業",
        "hiragana": "しつぎょう",
        "nghiatiengviet": "thất nghiệp"
    },
    {
        "kanji": "残業",
        "hiragana": "ざんぎょう",
        "nghiatiengviet": "việc làm thêm giờ"
    },
    {
        "kanji": "生活",
        "hiragana": "せいかつ",
        "nghiatiengviet": "sinh hoạt/cuộc sống"
    },
    {
        "kanji": "通勤",
        "hiragana": "つうきん",
        "nghiatiengviet": "đi làm"
    },
    {
        "kanji": "学歴",
        "hiragana": "がくれき",
        "nghiatiengviet": "trình độ học vấn"
    },
    {
        "kanji": "給料",
        "hiragana": "きゅうりょう",
        "nghiatiengviet": "lương"
    },
    {
        "kanji": "面接",
        "hiragana": "めんせつ",
        "nghiatiengviet": "phỏng vấn"
    },
    {
        "kanji": "休憩",
        "hiragana": "きゅうけい",
        "nghiatiengviet": "nghỉ"
    },
    {
        "kanji": "観光",
        "hiragana": "かんこう",
        "nghiatiengviet": "tham quan/du lịch"
    },
    {
        "kanji": "帰国",
        "hiragana": "きこく",
        "nghiatiengviet": "về nước"
    },
    {
        "kanji": "帰省",
        "hiragana": "きせい",
        "nghiatiengviet": "về quê"
    },
    {
        "kanji": "帰宅",
        "hiragana": "きたく",
        "nghiatiengviet": "về nhà"
    },
    {
        "kanji": "参加",
        "hiragana": "さんか",
        "nghiatiengviet": "tham gia"
    },
    {
        "kanji": "出席",
        "hiragana": "しゅっせき",
        "nghiatiengviet": "tham dự"
    },
    {
        "kanji": "欠席",
        "hiragana": "けっせき",
        "nghiatiengviet": "không tham dự"
    },
    {
        "kanji": "遅刻",
        "hiragana": "ちこく",
        "nghiatiengviet": "đi muộn"
    },
    {
        "kanji": "化粧",
        "hiragana": "けしょう",
        "nghiatiengviet": "trang điểm"
    },
    {
        "kanji": "計算",
        "hiragana": "けいさん",
        "nghiatiengviet": "tính toán"
    },
    {
        "kanji": "計画",
        "hiragana": "けいかく",
        "nghiatiengviet": "kế hoạch"
    },
    {
        "kanji": "成功",
        "hiragana": "せいこう",
        "nghiatiengviet": "thành công"
    },
    {
        "kanji": "失敗",
        "hiragana": "しっぱい",
        "nghiatiengviet": "thất bại"
    },
    {
        "kanji": "準備",
        "hiragana": "じゅんび",
        "nghiatiengviet": "chuẩn bị"
    },
    {
        "kanji": "整理",
        "hiragana": "せいり",
        "nghiatiengviet": "sắp xếp"
    },
    {
        "kanji": "注文",
        "hiragana": "ちゅうもん",
        "nghiatiengviet": "đặt hàng"
    },
    {
        "kanji": "貯金",
        "hiragana": "ちょきん",
        "nghiatiengviet": "để dành tiền"
    },
    {
        "kanji": "徹夜",
        "hiragana": "てつや",
        "nghiatiengviet": "thức thâu đêm"
    },
    {
        "kanji": "引っ越し",
        "hiragana": "ひっこし",
        "nghiatiengviet": "chuyển nhà"
    },
    {
        "kanji": "身長",
        "hiragana": "しんちょう",
        "nghiatiengviet": "chiều cao"
    },
    {
        "kanji": "体重",
        "hiragana": "たいじゅう",
        "nghiatiengviet": "cân nặng"
    },
    {
        "kanji": "けが",
        "hiragana": "",
        "nghiatiengviet": "vết thương"
    },
    {
        "kanji": "会",
        "hiragana": "かい",
        "nghiatiengviet": "buổi tiệc"
    },
    {
        "kanji": "趣味",
        "hiragana": "しゅみ",
        "nghiatiengviet": "sở thích"
    },
    {
        "kanji": "興味",
        "hiragana": "きょうみ",
        "nghiatiengviet": "quan tâm"
    },
    {
        "kanji": "思い出",
        "hiragana": "おもいで",
        "nghiatiengviet": "kỷ niệm"
    },
    {
        "kanji": "冗談",
        "hiragana": "じょうだん",
        "nghiatiengviet": "đùa"
    },
    {
        "kanji": "目的",
        "hiragana": "もくてき",
        "nghiatiengviet": "mục đích"
    },
    {
        "kanji": "約束",
        "hiragana": "やくそく",
        "nghiatiengviet": "hẹn"
    },
    {
        "kanji": "おしゃべり",
        "hiragana": "",
        "nghiatiengviet": "nói chuyện"
    },
    {
        "kanji": "遠慮",
        "hiragana": "えんりょ",
        "nghiatiengviet": "giữ ý"
    },
    {
        "kanji": "我慢",
        "hiragana": "がまん",
        "nghiatiengviet": "chịu đựng"
    },
    {
        "kanji": "迷惑",
        "hiragana": "めいわく",
        "nghiatiengviet": "phiền hà"
    },
    {
        "kanji": "希望",
        "hiragana": "きぼう",
        "nghiatiengviet": "hy vọng"
    },
    // Đoạn lặp lại bắt đầu từ đây, mình sẽ bỏ qua và tiếp tục với phần sau "夢"
    {
        "kanji": "夢",
        "hiragana": "ゆめ",
        "nghiatiengviet": "giấc mơ"
    },
    {
        "kanji": "賛成",
        "hiragana": "さんせい",
        "nghiatiengviet": "tán thành"
    },
    {
        "kanji": "反対",
        "hiragana": "はんたい",
        "nghiatiengviet": "ngược"
    },
    {
        "kanji": "想像",
        "hiragana": "そうぞう",
        "nghiatiengviet": "tưởng tượng"
    },
    {
        "kanji": "努力",
        "hiragana": "どりょく",
        "nghiatiengviet": "nỗ lực"
    },
    {
        "kanji": "太陽",
        "hiragana": "たいよう",
        "nghiatiengviet": "mặt trời"
    },
    {
        "kanji": "地球",
        "hiragana": "ちきゅう",
        "nghiatiengviet": "trái đất địa cầu"
    },
    {
        "kanji": "温度",
        "hiragana": "おんど",
        "nghiatiengviet": "nhiệt độ"
    },
    {
        "kanji": "湿度",
        "hiragana": "しつど",
        "nghiatiengviet": "độ ẩm"
    },
    {
        "kanji": "湿気",
        "hiragana": "しっけ",
        "nghiatiengviet": "hơi ẩm khí ẩm"
    },
    {
        "kanji": "梅雨",
        "hiragana": "つゆ",
        "nghiatiengviet": "mùa mưa"
    },
    {
        "kanji": "かび",
        "hiragana": "カビ", // Hiragana là カビ
        "nghiatiengviet": "nấm mốc"
    },
    {
        "kanji": "暖房",
        "hiragana": "だんぼう",
        "nghiatiengviet": "máy sưởi hệ thống sưởi"
    },
    {
        "kanji": "皮",
        "hiragana": "かわ",
        "nghiatiengviet": "vỏ da"
    },
    {
        "kanji": "缶",
        "hiragana": "かん",
        "nghiatiengviet": "lon hộp (kim loại)"
    },
    {
        "kanji": "画面",
        "hiragana": "がめん",
        "nghiatiengviet": "màn hình"
    },
    {
        "kanji": "番組",
        "hiragana": "ばんぐみ",
        "nghiatiengviet": "chương trình (TV radio)"
    },
    {
        "kanji": "記事",
        "hiragana": "きじ",
        "nghiatiengviet": "bài báo ký sự"
    },
    {
        "kanji": "近所",
        "hiragana": "きんじょ",
        "nghiatiengviet": "hàng xóm vùng lân cận"
    },
    {
        "kanji": "警察",
        "hiragana": "けいさつ",
        "nghiatiengviet": "cảnh sát"
    },
    {
        "kanji": "犯人",
        "hiragana": "はんにん",
        "nghiatiengviet": "thủ phạm tội phạm"
    },
    {
        "kanji": "小銭",
        "hiragana": "こぜに",
        "nghiatiengviet": "tiền lẻ"
    },
    {
        "kanji": "ご馳走",
        "hiragana": "ごちそう",
        "nghiatiengviet": "chiêu đãi bữa ăn thịnh soạn"
    },
    {
        "kanji": "作者",
        "hiragana": "さくしゃ",
        "nghiatiengviet": "tác giả"
    },
    {
        "kanji": "作品",
        "hiragana": "さくひん",
        "nghiatiengviet": "tác phẩm"
    },
    {
        "kanji": "制服",
        "hiragana": "せいふく",
        "nghiatiengviet": "đồng phục"
    },
    {
        "kanji": "洗剤",
        "hiragana": "せんざい",
        "nghiatiengviet": "chất tẩy rửa bột giặt"
    },
    {
        "kanji": "底",
        "hiragana": "そこ",
        "nghiatiengviet": "đáy"
    },
    {
        "kanji": "地下",
        "hiragana": "ちか",
        "nghiatiengviet": "dưới lòng đất ngầm "
    },
    {
        "kanji": "寺",
        "hiragana": "てら",
        "nghiatiengviet": "chùa"
    },
    {
        "kanji": "道路",
        "hiragana": "どうろ",
        "nghiatiengviet": "con đường đường sá"
    },
    {
        "kanji": "坂",
        "hiragana": "さか",
        "nghiatiengviet": "con dốc"
    },
    {
        "kanji": "煙",
        "hiragana": "けむり",
        "nghiatiengviet": "khói"
    },
    {
        "kanji": "灰",
        "hiragana": "はい",
        "nghiatiengviet": "tro tàn"
    },
    {
        "kanji": "判",
        "hiragana": "はん",
        "nghiatiengviet": "con dấu"
    },
    {
        "kanji": "名刺",
        "hiragana": "めいし",
        "nghiatiengviet": "danh thiếp"
    },
    {
        "kanji": "免許",
        "hiragana": "めんきょ",
        "nghiatiengviet": "giấy phép bằng lái"
    },
    {
        "kanji": "多く",
        "hiragana": "おおく",
        "nghiatiengviet": "nhiều"
    },
    {
        "kanji": "前半",
        "hiragana": "ぜんはん",
        "nghiatiengviet": "phần đầu hiệp một"
    },
    {
        "kanji": "後半",
        "hiragana": "こうはん",
        "nghiatiengviet": "phần sau hiệp hai"
    },
    {
        "kanji": "最高",
        "hiragana": "さいこう",
        "nghiatiengviet": "cao nhất tuyệt vời"
    },
    {
        "kanji": "最低",
        "hiragana": "さいてい",
        "nghiatiengviet": "thấp nhất tồi tệ nhất"
    },
    {
        "kanji": "最初",
        "hiragana": "さいしょ",
        "nghiatiengviet": "đầu tiên lúc đầu"
    },
    {
        "kanji": "最後",
        "hiragana": "さいご",
        "nghiatiengviet": "cuối cùng"
    },
    {
        "kanji": "自動",
        "hiragana": "じどう",
        "nghiatiengviet": "tự động"
    },
    {
        "kanji": "種類",
        "hiragana": "しゅるい",
        "nghiatiengviet": "chủng loại loại"
    },
    {
        "kanji": "性格",
        "hiragana": "せいかく",
        "nghiatiengviet": "tính cách"
    },
    {
        "kanji": "性質",
        "hiragana": "せいしつ",
        "nghiatiengviet": "tính chất đặc tính"
    },
    {
        "kanji": "順番",
        "hiragana": "じゅんばん",
        "nghiatiengviet": "thứ tự lần lượt"
    },
    {
        "kanji": "番",
        "hiragana": "ばん",
        "nghiatiengviet": "lượt phiên"
    },
    {
        "kanji": "方法",
        "hiragana": "ほうほう",
        "nghiatiengviet": "phương pháp cách thức"
    },
    {
        "kanji": "製品",
        "hiragana": "せいひん",
        "nghiatiengviet": "sản phẩm"
    },
    {
        "kanji": "値上がり",
        "hiragana": "ねあがり",
        "nghiatiengviet": "tăng giá"
    },
    {
        "kanji": "生",
        "hiragana": "なま",
        "nghiatiengviet": "sống tươi (chưa qua chế biến)"
    },
    {
        "kanji": "渇く",
        "hiragana": "かわく",
        "nghiatiengviet": "khát (nước)"
    },
    {
        "kanji": "嗅ぐ",
        "hiragana": "かぐ",
        "nghiatiengviet": "ngửi"
    },
    {
        "kanji": "叩く",
        "hiragana": "たたく",
        "nghiatiengviet": "đánh đập vỗ"
    },
    {
        "kanji": "殴る",
        "hiragana": "なぐる",
        "nghiatiengviet": "đấm"
    },
    {
        "kanji": "蹴る",
        "hiragana": "ける",
        "nghiatiengviet": "đá"
    },
    {
        "kanji": "抱く",
        "hiragana": "だく",
        "nghiatiengviet": "ôm bế"
    },
    {
        "kanji": "倒れる",
        "hiragana": "たおれる",
        "nghiatiengviet": "đổ ngã gục ngã lâm bệnh"
    },
    {
        "kanji": "倒す",
        "hiragana": "たおす",
        "nghiatiengviet": "làm đổ đánh bại"
    },
    {
        "kanji": "起きる",
        "hiragana": "おきる",
        "nghiatiengviet": "dậy thức dậy"
    },
    {
        "kanji": "起こる",
        "hiragana": "おこる",
        "nghiatiengviet": "xảy ra phát sinh"
    },
    {
        "kanji": "起こす",
        "hiragana": "おこす",
        "nghiatiengviet": "đánh thức dựng dậy gây ra"
    },
    {
        "kanji": "尋ねる",
        "hiragana": "たずねる",
        "nghiatiengviet": "hỏi hỏi thăm"
    },
    {
        "kanji": "呼ぶ",
        "hiragana": "よぶ",
        "nghiatiengviet": "gọi kêu thu hút"
    },
    {
        "kanji": "叫ぶ",
        "hiragana": "さけぶ",
        "nghiatiengviet": "kêu gào la hét"
    },
    {
        "kanji": "黙る",
        "hiragana": "だまる",
        "nghiatiengviet": "im lặng làm thinh"
    },
    {
        "kanji": "飼う",
        "hiragana": "かう",
        "nghiatiengviet": "nuôi (thú cưng)"
    },
    {
        "kanji": "数える",
        "hiragana": "かぞえる",
        "nghiatiengviet": "đếm liệt kê"
    },
    {
        "kanji": "乾く",
        "hiragana": "かわく",
        "nghiatiengviet": "khô"
    },
    {
        "kanji": "乾かす",
        "hiragana": "かわかす",
        "nghiatiengviet": "làm khô sấy khô"
    },
    {
        "kanji": "畳む",
        "hiragana": "たたむ",
        "nghiatiengviet": "gấp xếp"
    },
    {
        "kanji": "誘う",
        "hiragana": "さそう",
        "nghiatiengviet": "rủ mời"
    },
    {
        "kanji": "おごる",
        "hiragana": "おごる",
        "nghiatiengviet": "chiêu đãi khao"
    },
    {
        "kanji": "預かる",
        "hiragana": "あずかる",
        "nghiatiengviet": "giữ trông nom chăm sóc (giùm)"
    },
    {
        "kanji": "預ける",
        "hiragana": "あずける",
        "nghiatiengviet": "gửi giao phó"
    },
    {
        "kanji": "決まる",
        "hiragana": "きまる",
        "nghiatiengviet": "được quyết định được xác định được làm hoàn hảo"
    },
    {
        "kanji": "決める",
        "hiragana": "きめる",
        "nghiatiengviet": "quyết định luôn làm làm hoàn hảo"
    },
    {
        "kanji": "写る",
        "hiragana": "うつる",
        "nghiatiengviet": "chụp được (ảnh) hiện lên (ảnh)"
    },
    {
        "kanji": "写す",
        "hiragana": "うつす",
        "nghiatiengviet": "chụp (ảnh) sao chép"
    },
    {
        "kanji": "思い出す",
        "hiragana": "おもいだす",
        "nghiatiengviet": "nhớ lại hồi tưởng"
    },
    {
        "kanji": "教わる",
        "hiragana": "おそわる",
        "nghiatiengviet": "được dạy học (từ ai đó)"
    },
    {
        "kanji": "申し込む",
        "hiragana": "もうしこむ",
        "nghiatiengviet": "đăng ký đề nghị"
    },
    {
        "kanji": "断る",
        "hiragana": "ことわる",
        "nghiatiengviet": "từ chối. xin phép"
    },
    {
        "kanji": "見つかる",
        "hiragana": "みつかる",
        "nghiatiengviet": "được tìm thấy. bị phát hiện"
    },
    {
        "kanji": "見つける",
        "hiragana": "みつける",
        "nghiatiengviet": "tìm thấy. tìm ra"
    },
    {
        "kanji": "捕まる",
        "hiragana": "つかまる",
        "nghiatiengviet": "bị bắt. nắm chặt"
    },
    {
        "kanji": "捕まえる",
        "hiragana": "つかまえる",
        "nghiatiengviet": "bắt. tóm"
    },
    {
        "kanji": "乗る",
        "hiragana": "のる",
        "nghiatiengviet": "lên (xe). đi (phương tiện)"
    },
    {
        "kanji": "乗せる",
        "hiragana": "のせる",
        "nghiatiengviet": "chở đi. cho lên xe"
    },
    {
        "kanji": "降りる",
        "hiragana": "おりる",
        "nghiatiengviet": "xuống (xe. tàu). đi xuống"
    },
    {
        "kanji": "下りる",
        "hiragana": "おりる",
        "nghiatiengviet": "đi xuống. hạ xuống. được cấp phép"
    },
    {
        "kanji": "降ろす",
        "hiragana": "おろす",
        "nghiatiengviet": "cho xuống (xe). hạ xuống. lấy ra (đồ)"
    },
    {
        "kanji": "下ろす",
        "hiragana": "おろす",
        "nghiatiengviet": "hạ xuống. rút (tiền)"
    },
    {
        "kanji": "直る",
        "hiragana": "なおる",
        "nghiatiengviet": "được sửa chữa. cải thiện (thói quen)"
    },
    {
        "kanji": "直す",
        "hiragana": "なおす",
        "nghiatiengviet": "sửa chữa .chỉnh sửa. dịch"
    },
    {
        "kanji": "治る",
        "hiragana": "なおる",
        "nghiatiengviet": "khỏi bệnh .lành (vết thương)"
    },
    {
        "kanji": "治す",
        "hiragana": "なおす",
        "nghiatiengviet": "chữa bệnh .làm cho khỏi"
    },
    {
        "kanji": "亡くなる",
        "hiragana": "なくなる",
        "nghiatiengviet": "chết. qua đời"
    },
    {
        "kanji": "亡くす",
        "hiragana": "なくす",
        "nghiatiengviet": "mất (người thân)"
    },
    {
        "kanji": "生まれる",
        "hiragana": "うまれる",
        "nghiatiengviet": "được sinh ra. ra đời"
    },
    {
        "kanji": "産む",
        "hiragana": "うむ",
        "nghiatiengviet": "đẻ. sinh (con)"
    },
    {
        "kanji": "生む",
        "hiragana": "うむ",
        "nghiatiengviet": "tạo ra. sản sinh ra"
    },
    {
        "kanji": "出会う",
        "hiragana": "であう",
        "nghiatiengviet": "gặp gỡ (tình cờ). hội ngộ"
    },
    {
        "kanji": "訪ねる",
        "hiragana": "たずねる",
        "nghiatiengviet": "đến thăm. viếng thăm"
    },
    {
        "kanji": "付き合う",
        "hiragana": "つきあう",
        "nghiatiengviet": "kết giao. giao du. hẹn hò"
    },
    {
        "kanji": "効く",
        "hiragana": "きく",
        "nghiatiengviet": "có hiệu quả/có tác dụng"
    },
    {
        "kanji": "はやる",
        "hiragana": "はやる",
        "nghiatiengviet": "thịnh hành/phổ biến/(dịch bệnh) lây lan"
    },
    {
        "kanji": "経つ",
        "hiragana": "たつ",
        "nghiatiengviet": "trôi qua/trải qua (thời gian)"
    },
    {
        "kanji": "間に合う",
        "hiragana": "まにあう",
        "nghiatiengviet": "kịp giờ/vừa đủ"
    },
    {
        "kanji": "間に合わせる",
        "hiragana": "まにあわせる",
        "nghiatiengviet": "làm cho kịp giờ/hoàn thành đúng hạn"
    },
    {
        "kanji": "通う",
        "hiragana": "かよう",
        "nghiatiengviet": "đi lại thường xuyên (học/làm)/hiểu (tâm tư)"
    },
    {
        "kanji": "混む",
        "hiragana": "こむ",
        "nghiatiengviet": "đông đúc"
    },
    {
        "kanji": "擦れ違う",
        "hiragana": "すれちがう",
        "nghiatiengviet": "đi lướt qua nhau/lệch nhau/không gặp được"
    },
    {
        "kanji": "掛かる",
        "hiragana": "かかる",
        "nghiatiengviet": "được phủ/tốn (thời gian/tiền)/mắc (bệnh)/khởi động (động cơ)"
    },
    {
        "kanji": "掛ける",
        "hiragana": "かける",
        "nghiatiengviet": "phủ lên/dành (thời gian)/khởi động/nhân (số)"
    },
    {
        "kanji": "動く",
        "hiragana": "うごく",
        "nghiatiengviet": "di chuyển/hoạt động/làm việc (máy móc)/hành động"
    },
    {
        "kanji": "動かす",
        "hiragana": "うごかす",
        "nghiatiengviet": "di chuyển/làm cho hoạt động/vận hành/lay động"
    },
    {
        "kanji": "離れる",
        "hiragana": "はなれる",
        "nghiatiengviet": "cách xa/rời xa/chênh lệch (tuổi)"
    },
    {
        "kanji": "離す",
        "hiragana": "はなす",
        "nghiatiengviet": "tách ra/buông ra/để xa ra"
    },
    {
        "kanji": "ぶつかる",
        "hiragana": "ぶつかる",
        "nghiatiengviet": "va chạm/xung đột/trùng (lịch)"
    },
    {
        "kanji": "ぶつける",
        "hiragana": "ぶつける",
        "nghiatiengviet": "đâm vào/va vào"
    },
    {
        "kanji": "こぼれる",
        "hiragana": "こぼれる",
        "nghiatiengviet": "bị đổ/bị tràn ra/(nước mắt) rơi"
    },
    {
        "kanji": "こぼす",
        "hiragana": "こぼす",
        "nghiatiengviet": "làm đổ/làm tràn/đánh rơi (nước mắt)"
    },
    {
        "kanji": "拭く",
        "hiragana": "ふく",
        "nghiatiengviet": "lau/chùi"
    },
    {
        "kanji": "片付く",
        "hiragana": "かたづく",
        "nghiatiengviet": "được dọn dẹp ngăn nắp/được giải quyết xong"
    },
    {
        "kanji": "片付ける",
        "hiragana": "かたづける",
        "nghiatiengviet": "dọn dẹp/giải quyết"
    },
    {
        "kanji": "包む",
        "hiragana": "つつむ",
        "nghiatiengviet": "bọc/gói"
    },
    {
        "kanji": "貼る",
        "hiragana": "はる",
        "nghiatiengviet": "dán"
    },
    {
        "kanji": "無くなる",
        "hiragana": "なくなる",
        "nghiatiengviet": "bị mất/hết"
    },
    {
        "kanji": "無くす",
        "hiragana": "なくす",
        "nghiatiengviet": "làm mất"
    },
    {
        "kanji": "足りる",
        "hiragana": "たりる",
        "nghiatiengviet": "đủ"
    },
    {
        "kanji": "残る",
        "hiragana": "のこる",
        "nghiatiengviet": "còn lại/sót lại"
    },
    {
        "kanji": "残す",
        "hiragana": "のこす",
        "nghiatiengviet": "để lại/chừa lại"
    },
    {
        "kanji": "腐る",
        "hiragana": "くさる",
        "nghiatiengviet": "thiu/hỏng/mục nát"
    },
    {
        "kanji": "むける",
        "hiragana": "むける",
        "nghiatiengviet": "bóc ra/lột ra (da)"
    },
    {
        "kanji": "むく",
        "hiragana": "むく",
        "nghiatiengviet": "bóc/lột (vỏ)"
    },
    {
        "kanji": "滑る",
        "hiragana": "すべる",
        "nghiatiengviet": "trượt (patin/tuyết)/trơn trượt"
    },
    {
        "kanji": "積もる",
        "hiragana": "つもる",
        "nghiatiengviet": "tích tụ/chất đống (tuyết/bụi)"
    },
    {
        "kanji": "積む",
        "hiragana": "つむ",
        "nghiatiengviet": "chất lên/xếp lên/tích lũy (kinh nghiệm)"
    },
    {
        "kanji": "空く",
        "hiragana": "あく",
        "nghiatiengviet": "thủng (lỗ)/trống (chỗ)/rảnh (thời gian)"
    },
    {
        "kanji": "空ける",
        "hiragana": "あける",
        "nghiatiengviet": "đục (lỗ)/để trống (chỗ)/dành (thời gian)"
    },
    {
        "kanji": "下がる",
        "hiragana": "さがる",
        "nghiatiengviet": "hạ xuống/giảm xuống/lùi lại"
    },
    {
        "kanji": "下げる",
        "hiragana": "さげる",
        "nghiatiengviet": "hạ xuống/làm giảm/mang đi (đồ ăn)"
    },
    {
        "kanji": "冷える",
        "hiragana": "ひえる",
        "nghiatiengviet": "lạnh đi/cảm thấy lạnh"
    },
    {
        "kanji": "冷やす",
        "hiragana": "ひやす",
        "nghiatiengviet": "làm lạnh/giữ bình tĩnh"
    },
    {
        "kanji": "冷める",
        "hiragana": "さめる",
        "nghiatiengviet": "nguội đi/mất đi (nhiệt huyết/đam mê)"
    },
    {
        "kanji": "冷ます",
        "hiragana": "さます",
        "nghiatiengviet": "làm nguội/để nguội"
    },
    {
        "kanji": "燃える",
        "hiragana": "もえる",
        "nghiatiengviet": "cháy/bừng cháy (đam mê)"
    },
    {
        "kanji": "燃やす",
        "hiragana": "もやす",
        "nghiatiengviet": "đốt cháy/thắp lên (đam mê)"
    },
    {
        "kanji": "沸く",
        "hiragana": "わく",
        "nghiatiengviet": "sôi/nóng lên (nước tắm)/trở nên sôi nổi (không khí)"
    },
    {
        "kanji": "沸かす",
        "hiragana": "わかす",
        "nghiatiengviet": "làm sôi/chuẩn bị (nước tắm)/làm cho sôi nổi"
    },
    {
        "kanji": "鳴る",
        "hiragana": "なる",
        "nghiatiengviet": "kêu/reo (sấm/chuông)"
    },
    {
        "kanji": "鳴らす",
        "hiragana": "ならす",
        "nghiatiengviet": "làm cho kêu/bấm (chuông)"
    },
    {
        "kanji": "役立つ",
        "hiragana": "やくだつ",
        "nghiatiengviet": "có ích/hữu ích"
    },
    {
        "kanji": "役に立つ",
        "hiragana": "やくにたつ",
        "nghiatiengviet": "có ích/hữu ích"
    },
    {
        "kanji": "役立てる",
        "hiragana": "やくだてる",
        "nghiatiengviet": "tận dụng/làm cho có ích"
    },
    {
        "kanji": "役に立てる",
        "hiragana": "やくにたてる",
        "nghiatiengviet": "tận dụng/làm cho có ích"
    },
    {
        "kanji": "飾り",
        "hiragana": "かざり",
        "nghiatiengviet": "đồ trang trí/việc trang trí"
    },
    {
        "kanji": "遊び",
        "hiragana": "あそび",
        "nghiatiengviet": "trò chơi/cuộc chơi/việc chơi"
    },
    {
        "kanji": "集まり",
        "hiragana": "あつまり",
        "nghiatiengviet": "buổi họp/sự tụ tập"
    },
    {
        "kanji": "教え",
        "hiragana": "おしえ",
        "nghiatiengviet": "điều dạy bảo/lời dạy"
    },
    {
        "kanji": "踊り",
        "hiragana": "おどり",
        "nghiatiengviet": "điệu múa/việc múa"
    },
    {
        "kanji": "思い",
        "hiragana": "おもい",
        "nghiatiengviet": "suy nghĩ/tình cảm/cảm xúc"
    },
    {
        "kanji": "考え",
        "hiragana": "かんがえ",
        "nghiatiengviet": "suy nghĩ/ý tưởng/quan điểm"
    },
    {
        "kanji": "片付け",
        "hiragana": "かたづけ",
        "nghiatiengviet": "việc dọn dẹp/sự sắp xếp"
    },
    {
        "kanji": "手伝い",
        "hiragana": "てつだい",
        "nghiatiengviet": "sự giúp đỡ/người giúp việc"
    },
    {
        "kanji": "働き",
        "hiragana": "はたらき",
        "nghiatiengviet": "chức năng/hoạt động/công sức/việc làm"
    },
    {
        "kanji": "決まり",
        "hiragana": "きまり",
        "nghiatiengviet": "quy định/luật lệ"
    },
    {
        "kanji": "騒ぎ",
        "hiragana": "さわぎ",
        "nghiatiengviet": "sự ồn ào/vụ náo động"
    },
    {
        "kanji": "知らせ",
        "hiragana": "しらせ",
        "nghiatiengviet": "tin tức/thông báo"
    },
    {
        "kanji": "頼み",
        "hiragana": "たのみ",
        "nghiatiengviet": "sự nhờ vả/yêu cầu"
    },
    {
        "kanji": "疲れ",
        "hiragana": "つかれ",
        "nghiatiengviet": "sự mệt mỏi/cơn mệt"
    },
    {
        "kanji": "違い",
        "hiragana": "ちがい",
        "nghiatiengviet": "sự khác nhau/điểm khác biệt"
    },
    {
        "kanji": "始め",
        "hiragana": "はじめ",
        "nghiatiengviet": "sự bắt đầu/lúc đầu"
    },
    {
        "kanji": "続き",
        "hiragana": "つづき",
        "nghiatiengviet": "phần tiếp theo/sự tiếp tục"
    },
    {
        "kanji": "暮れ",
        "hiragana": "くれ",
        "nghiatiengviet": "cuối (năm/ngày)/lúc chiều tối"
    },
    {
        "kanji": "行き",
        "hiragana": "いき",
        "nghiatiengviet": "chiều đi/lượt đi"
    },
    {
        "kanji": "帰り",
        "hiragana": "かえり",
        "nghiatiengviet": "chiều về/lượt về"
    },
    {
        "kanji": "急ぎ",
        "hiragana": "いそぎ",
        "nghiatiengviet": "việc gấp/sự khẩn cấp"
    },
    {
        "kanji": "遅れ",
        "hiragana": "おくれ",
        "nghiatiengviet": "sự chậm trễ/sự muộn"
    },
    {
        "kanji": "貸し",
        "hiragana": "かし",
        "nghiatiengviet": "việc cho vay/khoản cho vay/món nợ (mình cho vay)"
    },
    {
        "kanji": "借り",
        "hiragana": "かり",
        "nghiatiengviet": "việc vay/khoản vay/món nợ (mình vay)"
    },
    {
        "kanji": "勝ち",
        "hiragana": "かち",
        "nghiatiengviet": "sự chiến thắng/phần thắng"
    },
    {
        "kanji": "負け",
        "hiragana": "まけ",
        "nghiatiengviet": "sự thua cuộc/phần thua"
    },
    {
        "kanji": "迎え",
        "hiragana": "むかえ",
        "nghiatiengviet": "việc đón/người đi đón"
    },
    {
        "kanji": "始まり",
        "hiragana": "はじまり",
        "nghiatiengviet": "sự bắt đầu/khởi đầu"
    },
    {
        "kanji": "終わり",
        "hiragana": "おわり",
        "nghiatiengviet": "sự kết thúc/phần cuối"
    },
    {
        "kanji": "戻り",
        "hiragana": "もどり",
        "nghiatiengviet": "sự trở về/việc quay lại"
    },
    {
        "kanji": "別れ",
        "hiragana": "わかれ",
        "nghiatiengviet": "sự chia tay/cuộc chia ly"
    },
    {
        "kanji": "喜び",
        "hiragana": "よろこび",
        "nghiatiengviet": "niềm vui/sự vui mừng"
    },
    {
        "kanji": "楽しみ",
        "hiragana": "たのしみ",
        "nghiatiengviet": "niềm vui/sự mong đợi/điều thú vị"
    },
    {
        "kanji": "笑い",
        "hiragana": "わらい",
        "nghiatiengviet": "tiếng cười/nụ cười/sự cười"
    },
    {
        "kanji": "驚き",
        "hiragana": "おどろき",
        "nghiatiengviet": "sự ngạc nhiên/điều bất ngờ"
    },
    {
        "kanji": "怒り",
        "hiragana": "いかり",
        "nghiatiengviet": "sự tức giận/cơn giận"
    },
    {
        "kanji": "悲しみ",
        "hiragana": "かなしみ",
        "nghiatiengviet": "nỗi buồn/sự đau buồn"
    },
    {
        "kanji": "幸せな",
        "hiragana": "しあわせな",
        "nghiatiengviet": "hạnh phúc"
    },
    {
        "kanji": "得意な",
        "hiragana": "とくいな",
        "nghiatiengviet": "giỏi/tự hào/đắc ý"
    },
    {
        "kanji": "苦手な",
        "hiragana": "にがてな",
        "nghiatiengviet": "kém/yếu/không thoải mái với"
    },
    {
        "kanji": "熱心な",
        "hiragana": "ねっしんな",
        "nghiatiengviet": "nhiệt tình/say mê/chăm chỉ"
    },
    {
        "kanji": "夢中な",
        "hiragana": "むちゅうな",
        "nghiatiengviet": "say mê/mải mê/chìm đắm"
    },
    {
        "kanji": "退屈な",
        "hiragana": "たいくつな",
        "nghiatiengviet": "buồn tẻ/chán ngắt"
    },
    {
        "kanji": "健康な",
        "hiragana": "けんこうな",
        "nghiatiengviet": "khỏe mạnh"
    },
    {
        "kanji": "苦しい",
        "hiragana": "くるしい",
        "nghiatiengviet": "khó khăn/vất vả/đau khổ"
    },
    {
        "kanji": "平気な",
        "hiragana": "へいきな",
        "nghiatiengviet": "bình thản/không sao/không hề hấn"
    },
    {
        "kanji": "悔しい",
        "hiragana": "くやしい",
        "nghiatiengviet": "bực bội/cay cú/tiếc nuối"
    },
    {
        "kanji": "羨ましい",
        "hiragana": "うらやましい",
        "nghiatiengviet": "ghen tị/thèm muốn"
    },
    {
        "kanji": "かゆい",
        "hiragana": "かゆい",
        "nghiatiengviet": "ngứa"
    },
    {
        "kanji": "大人しい",
        "hiragana": "おとなしい",
        "nghiatiengviet": "hiền lành/ngoan ngoãn/trầm tính"
    },
    {
        "kanji": "我慢強い",
        "hiragana": "がまんづよい",
        "nghiatiengviet": "giỏi chịu đựng/kiên nhẫn"
    },
    {
        "kanji": "正直な",
        "hiragana": "しょうじきな",
        "nghiatiengviet": "thật thà/trung thực"
    },
    {
        "kanji": "けちな",
        "hiragana": "けちな",
        "nghiatiengviet": "keo kiệt/bủn xỉn"
    },
    {
        "kanji": "我がままな",
        "hiragana": "わがままな",
        "nghiatiengviet": "ích kỷ/tùy tiện/ương bướng"
    },
    {
        "kanji": "積極的な",
        "hiragana": "せっきょくてきな",
        "nghiatiengviet": "tích cực/năng nổ"
    },
    {
        "kanji": "消極的な",
        "hiragana": "しょうきょくてきな",
        "nghiatiengviet": "tiêu cực/thụ động"
    },
    {
        "kanji": "満足な",
        "hiragana": "まんぞくな",
        "nghiatiengviet": "thỏa mãn/hài lòng/đầy đủ"
    },
    {
        "kanji": "不満な",
        "hiragana": "ふまんな",
        "nghiatiengviet": "bất mãn/không hài lòng"
    },
    {
        "kanji": "不安な",
        "hiragana": "ふあんな",
        "nghiatiengviet": "bất an/lo lắng"
    },
    {
        "kanji": "大変な",
        "hiragana": "たいへんな",
        "nghiatiengviet": "vất vả/kinh khủng/ghê gớm"
    },
    {
        "kanji": "無理な",
        "hiragana": "むりな",
        "nghiatiengviet": "vô lý/không thể/quá sức/cưỡng ép"
    },
    {
        "kanji": "不注意な",
        "hiragana": "ふちゅういな",
        "nghiatiengviet": "bất cẩn/không chú ý"
    },
    {
        "kanji": "楽な",
        "hiragana": "らくな",
        "nghiatiengviet": "dễ chịu/thoải mái/dễ dàng/nhàn hạ"
    },
    {
        "kanji": "面倒な",
        "hiragana": "めんどうな",
        "nghiatiengviet": "phiền phức/rắc rối/khó chịu"
    },
    {
        "kanji": "失礼な",
        "hiragana": "しつれいな",
        "nghiatiengviet": "bất lịch sự/vô lễ/(khi hỏi) xin lỗi"
    },
    {
        "kanji": "当然な",
        "hiragana": "とうぜんな",
        "nghiatiengviet": "đương nhiên/tất nhiên"
    },
    {
        "kanji": "意外な",
        "hiragana": "いがいな",
        "nghiatiengviet": "không ngờ/ngạc nhiên/ngoài dự đoán"
    },
    {
        "kanji": "結構な",
        "hiragana": "けっこうな",
        "nghiatiengviet": "tốt/được/đủ rồi/không cần (khách sáo)"
    },
    {
        "kanji": "派手な",
        "hiragana": "はでな",
        "nghiatiengviet": "sặc sỡ/lòe loẹt/phô trương"
    },
    {
        "kanji": "地味な",
        "hiragana": "じみな",
        "nghiatiengviet": "giản dị/đơn sơ/mộc mạc/trầm"
    },
    {
        "kanji": "おしゃれな",
        "hiragana": "おしゃれな",
        "nghiatiengviet": "thời trang/sành điệu/chưng diện"
    },
    {
        "kanji": "変な",
        "hiragana": "へんな",
        "nghiatiengviet": "kỳ lạ/khác thường/kỳ quặc"
    },
    {
        "kanji": "不思議な",
        "hiragana": "ふしぎな",
        "nghiatiengviet": "kỳ diệu/bí ẩn/lạ lùng/khó hiểu"
    },
    {
        "kanji": "ましな",
        "hiragana": "ましな",
        "nghiatiengviet": "tốt hơn/đỡ hơn"
    },
    {
        "kanji": "無駄な",
        "hiragana": "むだな",
        "nghiatiengviet": "vô ích/lãng phí/thừa thãi"
    },
    {
        "kanji": "自由な",
        "hiragana": "じゆうな",
        "nghiatiengviet": "tự do"
    },
    {
        "kanji": "不自由な",
        "hiragana": "ふじゆうな",
        "nghiatiengviet": "tàn tật/bất tiện/thiếu thốn/gò bó"
    },
    {
        "kanji": "暖まる",
        "hiragana": "あたたまる",
        "nghiatiengviet": "ấm lên/nóng lên"
    },
    {
        "kanji": "温まる",
        "hiragana": "あたたまる",
        "nghiatiengviet": "ấm lên/nóng lên (thường dùng cho cơ thể/tâm trạng)"
    },
    {
        "kanji": "暖める",
        "hiragana": "あたためる",
        "nghiatiengviet": "làm ấm/làm nóng"
    },
    {
        "kanji": "温める",
        "hiragana": "あたためる",
        "nghiatiengviet": "làm ấm/làm nóng (thường dùng cho đồ ăn/cơ thể)"
    },
    {
        "kanji": "高まる",
        "hiragana": "たかまる",
        "nghiatiengviet": "cao lên/tăng lên/dâng lên"
    },
    {
        "kanji": "高める",
        "hiragana": "たかめる",
        "nghiatiengviet": "nâng cao/làm tăng lên"
    },
    {
        "kanji": "強まる",
        "hiragana": "つよまる",
        "nghiatiengviet": "mạnh lên"
    },
    {
        "kanji": "強める",
        "hiragana": "つよめる",
        "nghiatiengviet": "làm mạnh lên/tăng cường"
    },
    {
        "kanji": "弱まる",
        "hiragana": "よわまる",
        "nghiatiengviet": "yếu đi/giảm đi"
    },
    {
        "kanji": "弱める",
        "hiragana": "よわめる",
        "nghiatiengviet": "làm yếu đi/giảm bớt"
    },
    {
        "kanji": "広まる",
        "hiragana": "ひろまる",
        "nghiatiengviet": "lan rộng/được truyền bá/phổ biến"
    },
    {
        "kanji": "広める",
        "hiragana": "ひろめる",
        "nghiatiengviet": "truyền bá/phổ biến rộng rãi/mở rộng"
    },
    {
        "kanji": "深まる",
        "hiragana": "ふかまる",
        "nghiatiengviet": "sâu sắc thêm/sâu đậm thêm/trở nên sâu hơn"
    },
    {
        "kanji": "深める",
        "hiragana": "ふかめる",
        "nghiatiengviet": "làm sâu sắc thêm/làm sâu đậm thêm/đào sâu"
    },
    {
        "kanji": "世話",
        "hiragana": "せわ",
        "nghiatiengviet": "chăm sóc/giúp đỡ/quan tâm"
    },
    {
        "kanji": "家庭",
        "hiragana": "かてい",
        "nghiatiengviet": "gia đình/nhà"
    },
    {
        "kanji": "協力",
        "hiragana": "きょうりょく",
        "nghiatiengviet": "hợp tác/chung sức"
    },
    {
        "kanji": "感謝",
        "hiragana": "かんしゃ",
        "nghiatiengviet": "cảm tạ/biết ơn"
    },
    {
        "kanji": "礼",
        "hiragana": "れい",
        "nghiatiengviet": "lời cảm ơn/quà cảm ơn"
    },
    {
        "kanji": "お礼",
        "hiragana": "おれい",
        "nghiatiengviet": "lời cảm ơn/quà cảm ơn"
    },
    {
        "kanji": "詫び",
        "hiragana": "わび",
        "nghiatiengviet": "lời xin lỗi"
    },
    {
        "kanji": "お詫び",
        "hiragana": "おわび",
        "nghiatiengviet": "lời xin lỗi"
    },
    {
        "kanji": "お辞儀",
        "hiragana": "おじぎ",
        "nghiatiengviet": "sự cúi chào"
    },
    {
        "kanji": "握手",
        "hiragana": "あくしゅ",
        "nghiatiengviet": "bắt tay"
    },
    {
        "kanji": "意地悪",
        "hiragana": "いじわる",
        "nghiatiengviet": "trêu trọc/chơi xấu/tâm địa xấu"
    },
    {
        "kanji": "いたずら",
        "hiragana": "いたずら",
        "nghiatiengviet": "nghịch ngợm/trò nghịch"
    },
    {
        "kanji": "節約",
        "hiragana": "せつやく",
        "nghiatiengviet": "tiết kiệm"
    },
    {
        "kanji": "経営",
        "hiragana": "けいえい",
        "nghiatiengviet": "kinh doanh/quản lý"
    },
    {
        "kanji": "反省",
        "hiragana": "はんせい",
        "nghiatiengviet": "tự kiểm điểm/nhìn lại bản thân"
    },
    {
        "kanji": "実行",
        "hiragana": "じっこう",
        "nghiatiengviet": "thực hiện/thi hành"
    },
    {
        "kanji": "進歩",
        "hiragana": "しんぽ",
        "nghiatiengviet": "tiến bộ/phát triển"
    },
    {
        "kanji": "変化",
        "hiragana": "へんか",
        "nghiatiengviet": "thay đổi/biến hóa"
    },
    {
        "kanji": "発達",
        "hiragana": "はったつ",
        "nghiatiengviet": "phát triển/tăng trưởng"
    },
    {
        "kanji": "体力",
        "hiragana": "たいりょく",
        "nghiatiengviet": "thể lực/sức khỏe"
    },
    {
        "kanji": "出場",
        "hiragana": "しゅつじょう",
        "nghiatiengviet": "tham dự/ra sân (thi đấu)"
    },
    {
        "kanji": "活躍",
        "hiragana": "かつやく",
        "nghiatiengviet": "hoạt động nổi bật/thành công"
    },
    {
        "kanji": "競争",
        "hiragana": "きょうそう",
        "nghiatiengviet": "cạnh tranh/ganh đua"
    },
    {
        "kanji": "応援",
        "hiragana": "おうえん",
        "nghiatiengviet": "cổ vũ/ủng hộ"
    },
    {
        "kanji": "拍手",
        "hiragana": "はくしゅ",
        "nghiatiengviet": "vỗ tay"
    },
    {
        "kanji": "人気",
        "hiragana": "にんき",
        "nghiatiengviet": "sự hâm mộ/sự yêu thích/phổ biến"
    },
    {
        "kanji": "うわさ",
        "hiragana": "うわさ",
        "nghiatiengviet": "tin đồn/lời đồn"
    },
    {
        "kanji": "情報",
        "hiragana": "じょうほう",
        "nghiatiengviet": "thông tin"
    },
    {
        "kanji": "交換",
        "hiragana": "こうかん",
        "nghiatiengviet": "trao đổi/thay thế"
    },
    {
        "kanji": "流行",
        "hiragana": "りゅうこう",
        "nghiatiengviet": "thịnh hành/mốt/lây lan (dịch bệnh)"
    },
    {
        "kanji": "宣伝",
        "hiragana": "せんでん",
        "nghiatiengviet": "tuyên truyền/quảng cáo"
    },
    {
        "kanji": "広告",
        "hiragana": "こうこく",
        "nghiatiengviet": "quảng cáo"
    },
    {
        "kanji": "注目",
        "hiragana": "ちゅうもく",
        "nghiatiengviet": "chú ý/quan tâm"
    },
    {
        "kanji": "通訳",
        "hiragana": "つうやく",
        "nghiatiengviet": "thông dịch (nói)/người thông dịch"
    },
    {
        "kanji": "翻訳",
        "hiragana": "ほんやく",
        "nghiatiengviet": "biên dịch (viết)/người biên dịch"
    },
    {
        "kanji": "伝言",
        "hiragana": "でんごん",
        "nghiatiengviet": "lời nhắn/tin nhắn"
    },
    {
        "kanji": "報告",
        "hiragana": "ほうこく",
        "nghiatiengviet": "báo cáo"
    },
    {
        "kanji": "録画",
        "hiragana": "ろくが",
        "nghiatiengviet": "ghi hình/quay video"
    },
    {
        "kanji": "混雑",
        "hiragana": "こんざつ",
        "nghiatiengviet": "hỗn잡/đông đúc/tắc nghẽn" // Giữ nguyên chữ "잡" vì nó có trong dữ liệu gốc
    },
    {
        "kanji": "渋滞",
        "hiragana": "じゅうたい",
        "nghiatiengviet": "tắc đường/kẹt xe"
    },
    {
        "kanji": "衝突",
        "hiragana": "しょうとつ",
        "nghiatiengviet": "va chạm/xung đột/đâm vào"
    },
    {
        "kanji": "被害",
        "hiragana": "ひがい",
        "nghiatiengviet": "thiệt hại"
    },
    {
        "kanji": "事故",
        "hiragana": "じこ",
        "nghiatiengviet": "tai nạn/sự cố"
    },
    {
        "kanji": "事件",
        "hiragana": "じけん",
        "nghiatiengviet": "vụ án/sự việc"
    },
    {
        "kanji": "故障",
        "hiragana": "こしょう",
        "nghiatiengviet": "hỏng hóc/trục trặc"
    },
    {
        "kanji": "修理",
        "hiragana": "しゅうり",
        "nghiatiengviet": "sửa chữa"
    },
    {
        "kanji": "停電",
        "hiragana": "ていでん",
        "nghiatiengviet": "mất điện"
    },
    {
        "kanji": "調子",
        "hiragana": "ちょうし",
        "nghiatiengviet": "tình trạng/phong độ/giọng điệu"
    },
    {
        "kanji": "緊張",
        "hiragana": "きんちょう",
        "nghiatiengviet": "căng thẳng/hồi hộp"
    },
    {
        "kanji": "自信",
        "hiragana": "じしん",
        "nghiatiengviet": "tự tin"
    },
    {
        "kanji": "自慢",
        "hiragana": "じまん",
        "nghiatiengviet": "tự hào/hãnh diện/khoe khoang"
    },
    {
        "kanji": "感心",
        "hiragana": "かんしん",
        "nghiatiengviet": "khâm phục/ngưỡng mộ/đáng khen"
    },
    {
        "kanji": "感動",
        "hiragana": "かんどう",
        "nghiatiengviet": "cảm động/xúc động"
    },
    {
        "kanji": "興奮",
        "hiragana": "こうふん",
        "nghiatiengviet": "phấn khích/hưng phấn"
    },
    {
        "kanji": "感想",
        "hiragana": "かんそう",
        "nghiatiengviet": "cảm tưởng/ấn tượng"
    },
    {
        "kanji": "予想",
        "hiragana": "よそう",
        "nghiatiengviet": "dự đoán/phỏng đoán"
    },
    {
        "kanji": "専門",
        "hiragana": "せんもん",
        "nghiatiengviet": "chuyên môn"
    },
    {
        "kanji": "研究",
        "hiragana": "けんきゅう",
        "nghiatiengviet": "nghiên cứu"
    },
    {
        "kanji": "調査",
        "hiragana": "ちょうさ",
        "nghiatiengviet": "điều tra/khảo sát"
    },
    {
        "kanji": "原因",
        "hiragana": "げんいん",
        "nghiatiengviet": "nguyên nhân"
    },
    {
        "kanji": "結果",
        "hiragana": "けっか",
        "nghiatiengviet": "kết quả"
    },
    {
        "kanji": "解決",
        "hiragana": "かいけつ",
        "nghiatiengviet": "giải quyết"
    },
    {
        "kanji": "確認",
        "hiragana": "かくにん",
        "nghiatiengviet": "xác nhận/kiểm tra"
    },
    {
        "kanji": "利用",
        "hiragana": "りよう",
        "nghiatiengviet": "sử dụng/lợi dụng"
    },
    {
        "kanji": "理解",
        "hiragana": "りかい",
        "nghiatiengviet": "hiểu/lý giải"
    },
    {
        "kanji": "発見",
        "hiragana": "はっけん",
        "nghiatiengviet": "phát hiện/tìm ra"
    },
    {
        "kanji": "発明",
        "hiragana": "はつめい",
        "nghiatiengviet": "phát minh"
    },
    {
        "kanji": "関係",
        "hiragana": "かんけい",
        "nghiatiengviet": "quan hệ/liên quan"
    },
    {
        "kanji": "団体",
        "hiragana": "だんたい",
        "nghiatiengviet": "đoàn thể/nhóm"
    },
    {
        "kanji": "選挙",
        "hiragana": "せんきょ",
        "nghiatiengviet": "bầu cử/cuộc bầu cử"
    },
    {
        "kanji": "税金",
        "hiragana": "ぜいきん",
        "nghiatiengviet": "thuế"
    },
    {
        "kanji": "責任",
        "hiragana": "せきにん",
        "nghiatiengviet": "trách nhiệm"
    },
    {
        "kanji": "書類",
        "hiragana": "しょるい",
        "nghiatiengviet": "tài liệu/giấy tờ/hồ sơ"
    },
    {
        "kanji": "題名",
        "hiragana": "だいめい",
        "nghiatiengviet": "tiêu đề/nhan đề"
    },
    {
        "kanji": "条件",
        "hiragana": "じょうけん",
        "nghiatiengviet": "điều kiện"
    },
    {
        "kanji": "締め切り",
        "hiragana": "しめきり",
        "nghiatiengviet": "hạn chót/hạn cuối"
    },
    {
        "kanji": "期間",
        "hiragana": "きかん",
        "nghiatiengviet": "thời gian/giai đoạn/kỳ"
    },
    {
        "kanji": "倍",
        "hiragana": "ばい",
        "nghiatiengviet": "gấp đôi/lần"
    },
    {
        "kanji": "くじ",
        "hiragana": "くじ",
        "nghiatiengviet": "xổ số/bốc thăm"
    },
    {
        "kanji": "近道",
        "hiragana": "ちかみち",
        "nghiatiengviet": "đường tắt"
    },
    {
        "kanji": "中心",
        "hiragana": "ちゅうしん",
        "nghiatiengviet": "trung tâm/trọng tâm"
    },
    {
        "kanji": "辺り",
        "hiragana": "あたり",
        "nghiatiengviet": "xung quanh/vùng lân cận/khoảng"
    },
    {
        "kanji": "周り",
        "hiragana": "まわり",
        "nghiatiengviet": "xung quanh/chu vi"
    },
    {
        "kanji": "回り",
        "hiragana": "まわり",
        "nghiatiengviet": "xung quanh/vòng quanh"
    },
    {
        "kanji": "穴",
        "hiragana": "あな",
        "nghiatiengviet": "lỗ/hố"
    },
    {
        "kanji": "列",
        "hiragana": "れつ",
        "nghiatiengviet": "hàng/dãy"
    },
    {
        "kanji": "幅",
        "hiragana": "はば",
        "nghiatiengviet": "chiều rộng/phạm vi/khoảng (cách)"
    },
    {
        "kanji": "範囲",
        "hiragana": "はんい",
        "nghiatiengviet": "phạm vi/giới hạn"
    },
    {
        "kanji": "内容",
        "hiragana": "ないよう",
        "nghiatiengviet": "nội dung"
    },
    {
        "kanji": "中身",
        "hiragana": "なかみ",
        "nghiatiengviet": "bên trong/nội dung (cốt lõi)"
    },
    {
        "kanji": "特徴",
        "hiragana": "とくちょう",
        "nghiatiengviet": "đặc trưng/đặc điểm"
    },
    {
        "kanji": "普通",
        "hiragana": "ふつう",
        "nghiatiengviet": "thông thường/bình thường "
    },
    {
        "kanji": "当たり前", // Bỏ "400. "
        "hiragana": "あたりまえ",
        "nghiatiengviet": "đương nhiên/hiển nhiên/tất nhiên"
    },
    {
        "kanji": "偽",
        "hiragana": "にせ",
        "nghiatiengviet": "giả/đồ giả"
    },
    {
        "kanji": "別",
        "hiragana": "べつ",
        "nghiatiengviet": "khác/riêng biệt"
    },
    {
        "kanji": "国籍",
        "hiragana": "こくせき",
        "nghiatiengviet": "quốc tịch"
    },
    {
        "kanji": "東洋",
        "hiragana": "とうよう",
        "nghiatiengviet": "phương Đông/Đông Dương"
    },
    {
        "kanji": "西洋",
        "hiragana": "せいよう",
        "nghiatiengviet": "phương Tây/Tây Dương"
    },
    {
        "kanji": "国際",
        "hiragana": "こくさい",
        "nghiatiengviet": "quốc tế"
    },
    {
        "kanji": "自然",
        "hiragana": "しぜん",
        "nghiatiengviet": "tự nhiên/thiên nhiên"
    },
    {
        "kanji": "景色",
        "hiragana": "けしき",
        "nghiatiengviet": "phong cảnh/cảnh sắc"
    },
    {
        "kanji": "宗教",
        "hiragana": "しゅうきょう",
        "nghiatiengviet": "tôn giáo"
    },
    {
        "kanji": "愛",
        "hiragana": "あい",
        "nghiatiengviet": "tình yêu/yêu"
    },
    {
        "kanji": "届く",
        "hiragana": "とどく",
        "nghiatiengviet": "được gửi đến/đến nơi/với tới"
    },
    {
        "kanji": "届ける",
        "hiragana": "とどける",
        "nghiatiengviet": "gửi đến/đưa đến/thông báo"
    },
    {
        "kanji": "かく",
        "hiragana": "かく",
        "nghiatiengviet": "gãi/đổ (mồ hôi)/ngáy/chịu (xấu hổ)"
    },
    {
        "kanji": "掻く",
        "hiragana": "かく",
        "nghiatiengviet": "gãi/cào"
    },
    {
        "kanji": "掴む",
        "hiragana": "つかむ",
        "nghiatiengviet": "nắm lấy/tóm lấy/giành được/hiểu được"
    },
    {
        "kanji": "握る",
        "hiragana": "にぎる",
        "nghiatiengviet": "nắm chặt/cầm/nắm (quyền)"
    },
    {
        "kanji": "押さえる",
        "hiragana": "おさえる",
        "nghiatiengviet": "giữ/ấn/đè/níu"
    },
    {
        "kanji": "近づく",
        "hiragana": "ちかづく",
        "nghiatiengviet": "đến gần/tiếp cận/sắp đến"
    },
    {
        "kanji": "近づける",
        "hiragana": "ちかづける",
        "nghiatiengviet": "mang đến gần/cho lại gần"
    },
    {
        "kanji": "合う",
        "hiragana": "あう",
        "nghiatiengviet": "gặp (mắt)/hợp/vừa/khớp"
    },
    {
        "kanji": "合わせる",
        "hiragana": "あわせる",
        "nghiatiengviet": "kết hợp/điều chỉnh/so (đáp án)/đặt (đồng hồ)"
    },
    {
        "kanji": "当たる",
        "hiragana": "あたる",
        "nghiatiengviet": "trúng/đúng (dự đoán)/chiếu vào (ánh nắng)/gặp phải"
    },
    {
        "kanji": "当てる",
        "hiragana": "あてる",
        "nghiatiengviet": "đánh trúng/đoán trúng/phơi (nắng)/áp vào"
    },
    {
        "kanji": "比べる",
        "hiragana": "くらべる",
        "nghiatiengviet": "so sánh"
    },
    {
        "kanji": "似合う",
        "hiragana": "にあう",
        "nghiatiengviet": "hợp/vừa (quần áo)"
    },
    {
        "kanji": "似る",
        "hiragana": "にる",
        "nghiatiengviet": "giống"
    },
    {
        "kanji": "似せる",
        "hiragana": "にせる",
        "nghiatiengviet": "bắt chước/làm cho giống"
    },
    {
        "kanji": "分かれる",
        "hiragana": "わかれる",
        "nghiatiengviet": "được chia ra/chia tay/khác biệt"
    },
    {
        "kanji": "分ける",
        "hiragana": "わける",
        "nghiatiengviet": "chia/phân chia/rẽ (đám đông)"
    },
    {
        "kanji": "足す",
        "hiragana": "たす",
        "nghiatiengviet": "thêm vào/cộng vào"
    },
    {
        "kanji": "引く",
        "hiragana": "ひく",
        "nghiatiengviet": "kéo/dắt/kẻ (đường)/trừ/tra (từ điển)/bị (cảm)"
    },
    {
        "kanji": "増える",
        "hiragana": "ふえる",
        "nghiatiengviet": "tăng lên"
    },
    {
        "kanji": "増やす",
        "hiragana": "ふやす",
        "nghiatiengviet": "làm tăng lên"
    },
    {
        "kanji": "減る",
        "hiragana": "へる",
        "nghiatiengviet": "giảm xuống"
    },
    {
        "kanji": "減らす",
        "hiragana": "へらす",
        "nghiatiengviet": "làm giảm xuống"
    },
    {
        "kanji": "変わる",
        "hiragana": "かわる",
        "nghiatiengviet": "thay đổi/biến đổi"
    },
    {
        "kanji": "変える",
        "hiragana": "かえる",
        "nghiatiengviet": "thay đổi/biến đổi (cái gì đó)"
    },
    {
        "kanji": "替わる",
        "hiragana": "かわる",
        "nghiatiengviet": "thay thế/đổi chỗ (vị trí)"
    },
    {
        "kanji": "代わる",
        "hiragana": "かわる",
        "nghiatiengviet": "thay thế/làm thay (ai đó)"
    },
    {
        "kanji": "換わる",
        "hiragana": "かわる",
        "nghiatiengviet": "thay thế/đổi (tiền tệ. đồ vật)"
    },
    {
        "kanji": "替える",
        "hiragana": "かえる",
        "nghiatiengviet": "thay thế/đổi (đồ vật)"
    },
    {
        "kanji": "代える",
        "hiragana": "かえる",
        "nghiatiengviet": "thay thế (người. vai trò)"
    },
    {
        "kanji": "換える",
        "hiragana": "かえる",
        "nghiatiengviet": "đổi (tiền tệ. đồ vật)"
    },
    {
        "kanji": "返る",
        "hiragana": "かえる",
        "nghiatiengviet": "được trả lại"
    },
    {
        "kanji": "返す",
        "hiragana": "かえす",
        "nghiatiengviet": "trả lại"
    },
    {
        "kanji": "譲る",
        "hiragana": "ゆずる",
        "nghiatiengviet": "nhường (ghế)/nhượng lại/để lại (tài sản)"
    },
    {
        "kanji": "助かる",
        "hiragana": "たすかる",
        "nghiatiengviet": "được cứu sống/được giúp đỡ/may quá"
    },
    {
        "kanji": "助ける",
        "hiragana": "たすける",
        "nghiatiengviet": "cứu/giúp đỡ"
    },
    {
        "kanji": "いじめる",
        "hiragana": "いじめる",
        "nghiatiengviet": "bắt nạt/ăn hiếp"
    },
    {
        "kanji": "だます",
        "hiragana": "だます",
        "nghiatiengviet": "lừa gạt/lừa dối"
    },
    {
        "kanji": "盗む",
        "hiragana": "ぬすむ",
        "nghiatiengviet": "ăn trộm/ăn cắp"
    },
    {
        "kanji": "刺さる",
        "hiragana": "ささる",
        "nghiatiengviet": "bị đâm vào/mắc vào"
    },
    {
        "kanji": "刺す",
        "hiragana": "さす",
        "nghiatiengviet": "đâm/chích"
    },
    {
        "kanji": "殺す",
        "hiragana": "ころす",
        "nghiatiengviet": "giết"
    },
    {
        "kanji": "隠れる",
        "hiragana": "かくれる",
        "nghiatiengviet": "ẩn náu/trốn/nấp"
    },
    {
        "kanji": "隠す", // Bỏ "451. "
        "hiragana": "かくす",
        "nghiatiengviet": "giấu/che giấu"
    },
    {
        "kanji": "埋まる",
        "hiragana": "うまる",
        "nghiatiengviet": "bị chôn vùi/lấp đầy"
    },
    {
        "kanji": "埋める",
        "hiragana": "うめる",
        "nghiatiengviet": "chôn/lấp/điền vào"
    },
    {
        "kanji": "囲む",
        "hiragana": "かこむ",
        "nghiatiengviet": "vây quanh/bao quanh/khoanh tròn"
    },
    {
        "kanji": "詰まる",
        "hiragana": "つまる",
        "nghiatiengviet": "đầy ắp/bị tắc/thu hẹp lại (khoảng cách)"
    },
    {
        "kanji": "詰める",
        "hiragana": "つめる",
        "nghiatiengviet": "nhét vào/lấp đầy/thu hẹp (khoảng cách)/rút ngắn (chiều dài)"
    },
    {
        "kanji": "開く",
        "hiragana": "ひらく",
        "nghiatiengviet": "(tự) mở/nở (hoa)/tăng lên (khoảng cách)/(tha) mở (sách)/tổ chức (sự kiện)/mở (cửa hàng)"
    },
    {
        "kanji": "閉じる",
        "hiragana": "とじる",
        "nghiatiengviet": "(tự) đóng/(tha) đóng (cửa/sách/mắt)/đóng cửa (kinh doanh)"
    },
    {
        "kanji": "飛ぶ",
        "hiragana": "とぶ",
        "nghiatiengviet": "bay/bắn ra/chạy nhanh đến/bay đến/(trang) bị thiếu/biến mất (dữ liệu)"
    },
    {
        "kanji": "飛ばす",
        "hiragana": "とばす",
        "nghiatiengviet": "cho bay/thổi bay/phun ra (nước bọt)/bỏ qua/nhảy (thứ tự/dòng)"
    },
    {
        "kanji": "振る",
        "hiragana": "ふる",
        "nghiatiengviet": "vẫy (tay)/rắc (muối)/từ chối (lời tỏ tình)"
    },
    {
        "kanji": "めくる",
        "hiragana": "めくる",
        "nghiatiengviet": "lật (trang sách/lịch)"
    },
    {
        "kanji": "見かける",
        "hiragana": "みかける",
        "nghiatiengviet": "nhìn thấy/bắt gặp (tình cờ)"
    },
    {
        "kanji": "確かめる",
        "hiragana": "たしかめる",
        "nghiatiengviet": "xác nhận/kiểm tra (lại cho chắc)"
    },
    {
        "kanji": "試す",
        "hiragana": "ためす",
        "nghiatiengviet": "thử/kiểm tra (năng lực/chất lượng)"
    },
    {
        "kanji": "繰り返す",
        "hiragana": "くりかえす",
        "nghiatiengviet": "lặp lại/nhắc lại"
    },
    {
        "kanji": "訳す",
        "hiragana": "やくす",
        "nghiatiengviet": "dịch (từ ngôn ngữ này sang ngôn ngữ khác)"
    },
    {
        "kanji": "行う",
        "hiragana": "おこなう",
        "nghiatiengviet": "tổ chức/tiến hành/thực hiện"
    },
    {
        "kanji": "間違う",
        "hiragana": "まちがう",
        "nghiatiengviet": "(tự) sai/nhầm lẫn/(tha) làm sai/nhầm"
    },
    {
        "kanji": "間違える",
        "hiragana": "まちがえる",
        "nghiatiengviet": "làm sai/nhầm lẫn (cái gì đó)"
    },
    {
        "kanji": "許す",
        "hiragana": "ゆるす",
        "nghiatiengviet": "tha thứ/cho phép"
    },
    {
        "kanji": "慣れる",
        "hiragana": "なれる",
        "nghiatiengviet": "quen với/trở nên thuần thục/dạn (với người)"
    },
    {
        "kanji": "慣らす",
        "hiragana": "ならす",
        "nghiatiengviet": "làm cho quen/khởi động (cơ thể)/thuần hóa (động vật)"
    },
    {
        "kanji": "立つ",
        "hiragana": "たつ",
        "nghiatiengviet": "đứng/được dựng lên"
    },
    {
        "kanji": "立てる", // Bỏ "475. "
        "hiragana": "たてる",
        "nghiatiengviet": "dựng lên/đặt đứng"
    },
    {
        "kanji": "建つ",
        "hiragana": "たつ",
        "nghiatiengviet": "được xây dựng"
    },
    {
        "kanji": "建てる",
        "hiragana": "たてる",
        "nghiatiengviet": "xây dựng"
    },
    {
        "kanji": "育つ",
        "hiragana": "そだつ",
        "nghiatiengviet": "lớn lên/trưởng thành/được đào tạo"
    },
    {
        "kanji": "育てる",
        "hiragana": "そだてる",
        "nghiatiengviet": "nuôi dạy/trồng (cây)/đào tạo"
    },
    {
        "kanji": "生える",
        "hiragana": "はえる",
        "nghiatiengviet": "mọc (tóc/răng/cỏ/nấm mốc)"
    },
    {
        "kanji": "生やす",
        "hiragana": "はやす",
        "nghiatiengviet": "nuôi (râu)/để (râu)"
    },
    {
        "kanji": "汚れる",
        "hiragana": "よごれる",
        "nghiatiengviet": "bị bẩn/bị ô nhiễm"
    },
    {
        "kanji": "汚す",
        "hiragana": "よごす",
        "nghiatiengviet": "làm bẩn/gây ô nhiễm"
    },
    {
        "kanji": "壊れる",
        "hiragana": "こわれる",
        "nghiatiengviet": "bị hỏng/bị vỡ"
    },
    {
        "kanji": "壊す",
        "hiragana": "こわす",
        "nghiatiengviet": "làm hỏng/phá hỏng/làm tổn hại (sức khỏe)"
    },
    {
        "kanji": "割れる",
        "hiragana": "われる",
        "nghiatiengviet": "bị vỡ/bị tách ra/chia rẽ (ý kiến)"
    },
    {
        "kanji": "割る",
        "hiragana": "わる",
        "nghiatiengviet": "làm vỡ/chia/chia (số học)"
    },
    {
        "kanji": "折れる",
        "hiragana": "おれる",
        "nghiatiengviet": "bị gãy/bẻ cong"
    },
    {
        "kanji": "折る",
        "hiragana": "おる",
        "nghiatiengviet": "làm gãy/bẻ gãy/gấp (giấy)"
    },
    {
        "kanji": "破れる",
        "hiragana": "やぶれる",
        "nghiatiengviet": "bị rách"
    },
    {
        "kanji": "破る",
        "hiragana": "やぶる",
        "nghiatiengviet": "làm rách/xé rách/không giữ (lời hứa)/phá (kỷ lục)"
    },
    {
        "kanji": "曲がる",
        "hiragana": "まがる",
        "nghiatiengviet": "cong/quẹo/rẽ"
    },
    {
        "kanji": "曲げる",
        "hiragana": "まげる",
        "nghiatiengviet": "uốn cong/bẻ cong"
    },
    {
        "kanji": "外れる",
        "hiragana": "はずれる",
        "nghiatiengviet": "tuột ra/trật/không trúng (xổ số)/bị loại ra"
    },
    {
        "kanji": "外す",
        "hiragana": "はずす",
        "nghiatiengviet": "tháo ra/cởi ra/làm trật/loại ra"
    },
    {
        "kanji": "揺れる",
        "hiragana": "ゆれる",
        "nghiatiengviet": "rung/lắc/dao động (tâm trạng)"
    },
    {
        "kanji": "揺らす",
        "hiragana": "ゆらす",
        "nghiatiengviet": "làm rung/làm lắc/đu đưa"
    },
    {
        "kanji": "流れる",
        "hiragana": "ながれる",
        "nghiatiengviet": "chảy (nước/mồ hôi)/trôi (đồ vật)/phát (nhạc)/lan truyền (tin đồn)"
    },
    {
        "kanji": "流す",
        "hiragana": "ながす",
        "nghiatiengviet": "cho chảy/xả (nước)/đổ (mồ hôi/nước mắt)/cuốn trôi/phát (nhạc)/lan truyền (tin đồn)"
    },
    {
        "kanji": "濡れる", // Bỏ "500. "
        "hiragana": "ぬれる",
        "nghiatiengviet": "bị ướt"
    },
    {
        "kanji": "濡らす", // Bỏ "501. "
        "hiragana": "ぬらす",
        "nghiatiengviet": "làm ướt"
    },
    {
        "kanji": "迷う",
        "hiragana": "まよう",
        "nghiatiengviet": "lạc đường/phân vân/do dự"
    },
    {
        "kanji": "悩む",
        "hiragana": "なやむ",
        "nghiatiengviet": "lo lắng/phiền não/khổ tâm"
    },
    {
        "kanji": "慌てる",
        "hiragana": "あわてる",
        "nghiatiengviet": "vội vàng/cuống quýt/luống cuống"
    },
    {
        "kanji": "覚める",
        "hiragana": "さめる",
        "nghiatiengviet": "tỉnh giấc/tỉnh (rượu/mơ)"
    },
    {
        "kanji": "覚ます",
        "hiragana": "さます",
        "nghiatiengviet": "tỉnh giấc/làm cho tỉnh (rượu)"
    },
    {
        "kanji": "眠る",
        "hiragana": "ねむる",
        "nghiatiengviet": "ngủ/chìm vào giấc ngủ"
    },
    {
        "kanji": "祈る",
        "hiragana": "いのる",
        "nghiatiengviet": "cầu nguyện/mong ước"
    },
    {
        "kanji": "祝う",
        "hiragana": "いわう",
        "nghiatiengviet": "chúc mừng/ăn mừng"
    },
    {
        "kanji": "感じる",
        "hiragana": "かんじる",
        "nghiatiengviet": "cảm thấy/cảm nhận"
    },
    {
        "kanji": "クラスメート",
        "hiragana": "クラスメート",
        "nghiatiengviet": "bạn cùng lớp"
    },
    {
        "kanji": "グループ",
        "hiragana": "グループ",
        "nghiatiengviet": "nhóm/đội"
    },
    {
        "kanji": "チーム",
        "hiragana": "チーム",
        "nghiatiengviet": "đội/nhóm (thể thao/công việc)"
    },
    {
        "kanji": "プロ",
        "hiragana": "プロ",
        "nghiatiengviet": "chuyên nghiệp"
    },
    {
        "kanji": "アマチュア",
        "hiragana": "アマチュア",
        "nghiatiengviet": "nghiệp dư"
    },
    {
        "kanji": "トレーニング",
        "hiragana": "トレーニング",
        "nghiatiengviet": "tập luyện/huấn luyện"
    },
    {
        "kanji": "マッサージ",
        "hiragana": "マッサージ",
        "nghiatiengviet": "mát-xa"
    },
    {
        "kanji": "アドバイス",
        "hiragana": "アドバイス",
        "nghiatiengviet": "lời khuyên/khuyên bảo"
    },
    {
        "kanji": "アイデア",
        "hiragana": "アイデア",
        "nghiatiengviet": "ý tưởng/sáng kiến"
    },
    {
        "kanji": "アイディア",
        "hiragana": "アイディア",
        "nghiatiengviet": "ý tưởng/sáng kiến"
    },
    {
        "kanji": "トップ",
        "hiragana": "トップ",
        "nghiatiengviet": "đầu/hàng đầu/số một"
    },
    {
        "kanji": "スピード",
        "hiragana": "スピード",
        "nghiatiengviet": "tốc độ"
    },
    {
        "kanji": "ラッシュ",
        "hiragana": "ラッシュ",
        "nghiatiengviet": "giờ cao điểm/dịp cao điểm"
    },
    {
        "kanji": "バイク",
        "hiragana": "バイク",
        "nghiatiengviet": "xe máy"
    },
    {
        "kanji": "ヘルメット",
        "hiragana": "ヘルメット",
        "nghiatiengviet": "mũ bảo hiểm"
    },
    {
        "kanji": "コンタクトレンズ",
        "hiragana": "コンタクトレンズ",
        "nghiatiengviet": "kính áp tròng"
    },
    {
        "kanji": "コンタクト",
        "hiragana": "コンタクト",
        "nghiatiengviet": "kính áp tròng (viết tắt)"
    },
    {
        "kanji": "ガラス",
        "hiragana": "ガラス",
        "nghiatiengviet": "kính/thủy tinh"
    },
    {
        "kanji": "プラスチック",
        "hiragana": "プラスチック",
        "nghiatiengviet": "nhựa"
    },
    {
        "kanji": "ベランダ",
        "hiragana": "ベランダ",
        "nghiatiengviet": "ban công"
    },
    {
        "kanji": "ペット",
        "hiragana": "ペット",
        "nghiatiengviet": "thú cưng/vật nuôi"
    },
    {
        "kanji": "ベンチ",
        "hiragana": "ベンチ",
        "nghiatiengviet": "ghế dài (công viên/sân ga)"
    },
    {
        "kanji": "デザイン",
        "hiragana": "デザイン",
        "nghiatiengviet": "thiết kế/kiểu dáng"
    },
    {
        "kanji": "バーゲンセール",
        "hiragana": "バーゲンセール",
        "nghiatiengviet": "giảm giá/khuyến mãi (đợt lớn)"
    },
    {
        "kanji": "バーゲン",
        "hiragana": "バーゲン",
        "nghiatiengviet": "giảm giá (viết tắt)"
    },
    {
        "kanji": "セール",
        "hiragana": "セール",
        "nghiatiengviet": "khuyến mãi/giảm giá (viết tắt)"
    },
    {
        "kanji": "パート",
        "hiragana": "パート",
        "nghiatiengviet": "làm thêm/bán thời gian/phần (trong bản nhạc)"
    },
    {
        "kanji": "コンビニエンスストア",
        "hiragana": "コンビニエンスストア",
        "nghiatiengviet": "cửa hàng tiện lợi"
    },
    {
        "kanji": "コンビニ",
        "hiragana": "コンビニ",
        "nghiatiengviet": "cửa hàng tiện lợi (viết tắt)"
    },
    {
        "kanji": "レジ",
        "hiragana": "レジ",
        "nghiatiengviet": "quầy thanh toán/máy tính tiền"
    },
    {
        "kanji": "レシート",
        "hiragana": "レシート",
        "nghiatiengviet": "hóa đơn/biên lai"
    },
    {
        "kanji": "インスタント",
        "hiragana": "インスタント",
        "nghiatiengviet": "ăn liền/tức thì"
    },
    {
        "kanji": "ファストフード",
        "hiragana": "ファストフード",
        "nghiatiengviet": "đồ ăn nhanh"
    },
    {
        "kanji": "フルーツ",
        "hiragana": "フルーツ",
        "nghiatiengviet": "trái cây"
    },
    {
        "kanji": "デザート",
        "hiragana": "デザート",
        "nghiatiengviet": "món tráng miệng"
    },
    {
        "kanji": "インターネット",
        "hiragana": "インターネット",
        "nghiatiengviet": "Internet/mạng"
    },
    {
        "kanji": "チャイム",
        "hiragana": "チャイム",
        "nghiatiengviet": "chuông (cửa/báo giờ)"
    },
    {
        "kanji": "アナウンス",
        "hiragana": "アナウンス",
        "nghiatiengviet": "thông báo (qua loa)"
    },
    {
        "kanji": "メッセージ",
        "hiragana": "メッセージ",
        "nghiatiengviet": "lời nhắn/tin nhắn/thông điệp"
    },
    {
        "kanji": "パンフレット",
        "hiragana": "パンフレット",
        "nghiatiengviet": "tờ rơi quảng cáo/sách giới thiệu mỏng"
    },
    {
        "kanji": "カード",
        "hiragana": "カード",
        "nghiatiengviet": "thẻ (các loại)"
    },
    {
        "kanji": "インタビュー",
        "hiragana": "インタビュー",
        "nghiatiengviet": "phỏng vấn"
    },
    {
        "kanji": "アンケート",
        "hiragana": "アンケート",
        "nghiatiengviet": "bảng câu hỏi điều tra/khảo sát"
    },
    {
        "kanji": "データ",
        "hiragana": "データ",
        "nghiatiengviet": "dữ liệu/số liệu"
    },
    {
        "kanji": "パーセント",
        "hiragana": "パーセント",
        "nghiatiengviet": "phần trăm"
    },
    {
        "kanji": "濃い",
        "hiragana": "こい",
        "nghiatiengviet": "đậm (màu/vị)/nồng (cà phê)/đậm (trang điểm)/rậm (râu)"
    },
    {
        "kanji": "薄い",
        "hiragana": "うすい",
        "nghiatiengviet": "mỏng (sách)/nhạt (màu/vị)/thưa (râu)"
    },
    {
        "kanji": "酸っぱい",
        "hiragana": "すっぱい",
        "nghiatiengviet": "chua"
    },
    {
        "kanji": "臭い",
        "hiragana": "くさい",
        "nghiatiengviet": "hôi/thối/tanh"
    },
    {
        "kanji": "おかしい",
        "hiragana": "おかしい",
        "nghiatiengviet": "buồn cười/kỳ lạ/lạ thường/phi lý"
    },
    {
        "kanji": "かっこいい",
        "hiragana": "かっこいい",
        "nghiatiengviet": "ngầu/bảnh bao/phong cách/đẹp (trai)"
    },
    {
        "kanji": "うまい",
        "hiragana": "うまい",
        "nghiatiengviet": "ngon/giỏi/khéo léo/thuận lợi"
    },
    {
        "kanji": "親しい",
        "hiragana": "したしい",
        "nghiatiengviet": "thân thiết/gần gũi"
    },
    {
        "kanji": "詳しい",
        "hiragana": "くわしい",
        "nghiatiengviet": "chi tiết/tường tận/am hiểu"
    },
    {
        "kanji": "細かい",
        "hiragana": "こまかい",
        "nghiatiengviet": "nhỏ/bé (chữ)/tỉ mỉ/chi tiết/tiền lẻ"
    },
    {
        "kanji": "浅い",
        "hiragana": "あさい",
        "nghiatiengviet": "nông/cạn/ít (kinh nghiệm/kiến thức)/ngắn (thời gian)"
    },
    {
        "kanji": "固い",
        "hiragana": "かたい",
        "nghiatiengviet": "cứng/chắc chắn/kiên quyết/cứng đầu/kín miệng"
    },
    {
        "kanji": "硬い",
        "hiragana": "かたい",
        "nghiatiengviet": "cứng (vật chất)/cứng nhắc (biểu cảm/văn phong)"
    },
    {
        "kanji": "ぬるい",
        "hiragana": "ぬるい",
        "nghiatiengviet": "nguội/âm ấm (không đủ nóng)"
    },
    {
        "kanji": "まぶしい",
        "hiragana": "まぶしい",
        "nghiatiengviet": "chói mắt/rực rỡ/chói lọi"
    },
    {
        "kanji": "蒸し暑い",
        "hiragana": "むしあつい",
        "nghiatiengviet": "oi bức/nóng ẩm"
    },
    {
        "kanji": "清潔な",
        "hiragana": "せいけつな",
        "nghiatiengviet": "sạch sẽ/vệ sinh"
    },
    {
        "kanji": "新鮮な",
        "hiragana": "しんせんな",
        "nghiatiengviet": "tươi/trong lành/tươi mới"
    },
    {
        "kanji": "豊かな",
        "hiragana": "ゆたかな",
        "nghiatiengviet": "giàu có/phong phú/dồi dào"
    },
    {
        "kanji": "立派な",
        "hiragana": "りっぱな",
        "nghiatiengviet": "xuất sắc/đàng hoàng/trưởng thành/tuyệt vời/(tội) rõ ràng"
    },
    {
        "kanji": "正確な",
        "hiragana": "せいかくな",
        "nghiatiengviet": "chính xác/đúng đắn"
    },
    {
        "kanji": "確かな",
        "hiragana": "たしかな",
        "nghiatiengviet": "chắc chắn/đáng tin cậy/có lẽ"
    },
    {
        "kanji": "重要な",
        "hiragana": "じゅうような",
        "nghiatiengviet": "quan trọng/trọng yếu"
    },
    {
        "kanji": "必要な",
        "hiragana": "ひつような",
        "nghiatiengviet": "cần thiết/quan trọng"
    },
    {
        "kanji": "もったいない",
        "hiragana": "もったいない",
        "nghiatiengviet": "lãng phí/phí phạm (thật đáng tiếc)"
    },
    {
        "kanji": "すごい",
        "hiragana": "すごい",
        "nghiatiengviet": "ghê gớm/tuyệt vời/kinh khủng/siêu"
    },
    {
        "kanji": "ひどい",
        "hiragana": "ひどい",
        "nghiatiengviet": "tồi tệ/khủng khiếp/ độc ác/quá mức"
    },
    {
        "kanji": "激しい",
        "hiragana": "はげしい",
        "nghiatiengviet": "dữ dội/mãnh liệt/gắt/nhiều"
    },
    {
        "kanji": "そっくりな",
        "hiragana": "そっくりな",
        "nghiatiengviet": "giống hệt/giống như đúc"
    },
    {
        "kanji": "急な",
        "hiragana": "きゅうな",
        "nghiatiengviet": "đột ngột/gấp/dốc đứng/nhanh (dòng chảy)"
    },
    {
        "kanji": "適当な",
        "hiragana": "てきとうな",
        "nghiatiengviet": "phù hợp/thích hợp/qua loa/vô trách nhiệm"
    },
    {
        "kanji": "特別な",
        "hiragana": "とくべつな",
        "nghiatiengviet": "đặc biệt"
    },
    {
        "kanji": "完全な",
        "hiragana": "かんぜんな",
        "nghiatiengviet": "hoàn toàn/trọn vẹn/đầy đủ"
    },
    {
        "kanji": "盛んな",
        "hiragana": "さかんな",
        "nghiatiengviet": "thịnh hành/phát triển mạnh/nhiệt tình/nhiều"
    },
    {
        "kanji": "様々な",
        "hiragana": "さまざまな",
        "nghiatiengviet": "đa dạng/nhiều loại/khác nhau"
    },
    {
        "kanji": "可能な",
        "hiragana": "かのうな",
        "nghiatiengviet": "có thể/khả thi"
    },
    {
        "kanji": "不可能な",
        "hiragana": "ふかのうな",
        "nghiatiengviet": "không thể/bất khả thi"
    },
    {
        "kanji": "基本的な",
        "hiragana": "きほんてきな",
        "nghiatiengviet": "cơ bản/nền tảng"
    },
    {
        "kanji": "国際的な",
        "hiragana": "こくさいてきな",
        "nghiatiengviet": "mang tính quốc tế/quốc tế"
    },
    {
        "kanji": "ばらばらな",
        "hiragana": "ばらばらな",
        "nghiatiengviet": "rời rạc/tách biệt/khác nhau"
    },
    {
        "kanji": "ぼろぼろな",
        "hiragana": "ぼろぼろな",
        "nghiatiengviet": "rách nát/tơi tả/tan nát/kiệt sức"
    },
    {
        "kanji": "非常に",
        "hiragana": "ひじょうに",
        "nghiatiengviet": "rất/vô cùng/khẩn cấp (danh từ 非常)"
    },
    {
        "kanji": "大変に",
        "hiragana": "たいへんに",
        "nghiatiengviet": "rất/vô cùng/kinh khủng (trạng từ)"
    },
    {
        "kanji": "大変",
        "hiragana": "たいへん",
        "nghiatiengviet": "rất/vô cùng/kinh khủng (trạng từ có thể dùng như 大変に)"
    },
    {
        "kanji": "ほとんど",
        "hiragana": "ほとんど",
        "nghiatiengviet": "hầu hết/gần như (toàn bộ)/hầu như không (khi đi với phủ định)"
    },
    {
        "kanji": "大体",
        "hiragana": "だいたい",
        "nghiatiengviet": "phần lớn/đại khái/khoảng"
    },
    {
        "kanji": "かなり",
        "hiragana": "かなり",
        "nghiatiengviet": "khá/tương đối"
    },
    {
        "kanji": "随分",
        "hiragana": "ずいぶん",
        "nghiatiengviet": "khá nhiều/đáng kể/quá (so với mong đợi)"
    },
    {
        "kanji": "結構",
        "hiragana": "けっこう",
        "nghiatiengviet": "khá/tương đối (tốt hơn mong đợi)"
    },
    {
        "kanji": "大分",
        "hiragana": "だいぶ",
        "nghiatiengviet": "khá nhiều/phần lớn"
    },
    {
        "kanji": "大分", // Lặp lại, nhưng dữ liệu gốc có, nên giữ nguyên
        "hiragana": "だいぶん",
        "nghiatiengviet": "khá nhiều/phần lớn (cách đọc khác của 大分)"
    },
    {
        "kanji": "もっと", // Bỏ "599 "
        "hiragana": "もっと",
        "nghiatiengviet": "hơn nữa/thêm nữa"
    },
    // từ đây sẽ là kanji 
    {
        "kanji": "起こる",
        "hiragana": "おこる",
        "nghiatiengviet": "xảy ra, xảy ra"
    },
    {
        "kanji": "起きる",
        "hiragana": "おきる",
        "nghiatiengviet": "thức dậy"
    },
    {
        "kanji": "起こす",
        "hiragana": "おこす",
        "nghiatiengviet": "đánh thức"
    },
    {
        "kanji": "起動",
        "hiragana": "きどう",
        "nghiatiengviet": "Khởi động"
    },
    {
        "kanji": "昼寝",
        "hiragana": "ひるね",
        "nghiatiengviet": "ngủ trưa"
    },
    {
        "kanji": "寝坊",
        "hiragana": "ねぼう",
        "nghiatiengviet": "ngủ muộn"
    },
    {
        "kanji": "海水浴",
        "hiragana": "かいすいよく",
        "nghiatiengviet": "tắm biển"
    },
    {
        "kanji": "浴衣",
        "hiragana": "ゆかた",
        "nghiatiengviet": "áo choàng tắm, kimono mùa hè"
    },
    {
        "kanji": "浴びる",
        "hiragana": "あびる",
        "nghiatiengviet": "tắm, phơi nắng, tắm"
    },
    {
        "kanji": "湯気",
        "hiragana": "ゆげ",
        "nghiatiengviet": "hơi nước, hơi nước"
    },
    {
        "kanji": "お湯",
        "hiragana": "おゆ",
        "nghiatiengviet": "nước nóng"
    },
    {
        "kanji": "洗濯",
        "hiragana": "せんたく",
        "nghiatiengviet": "Giặt"
    },
    {
        "kanji": "洗剤",
        "hiragana": "せんざい",
        "nghiatiengviet": "chất tẩy rửa, xà phòng"
    },
    {
        "kanji": "手洗い",
        "hiragana": "てあらい",
        "nghiatiengviet": "nhà vệ sinh, rửa tay"
    },
    {
        "kanji": "若干",
        "hiragana": "じゃっかん",
        "nghiatiengviet": "một số, ít ( số lượng)"
    },
    {
        "kanji": "干物",
        "hiragana": "ひもの",
        "nghiatiengviet": "đồ phơi khô (cá khô, tôm khô…)"
    },
    {
        "kanji": "干す",
        "hiragana": "ほす",
        "nghiatiengviet": "phơi"
    },
    {
        "kanji": "活力",
        "hiragana": "かつりょく",
        "nghiatiengviet": "sức sống, năng lượng"
    },
    {
        "kanji": "活気",
        "hiragana": "かっき",
        "nghiatiengviet": "năng lượng, sự sống động"
    },
    {
        "kanji": "活動",
        "hiragana": "かつどう",
        "nghiatiengviet": "hành động"
    },
    {
        "kanji": "活用",
        "hiragana": "かつよう",
        "nghiatiengviet": "vận dụng, tận dụng"
    },
    {
        "kanji": "拾う",
        "hiragana": "ひろう",
        "nghiatiengviet": "nhặt"
    },
    {
        "kanji": "拾得",
        "hiragana": "しゅうとく",
        "nghiatiengviet": "nhặt lấy, nhặt được"
    },
    {
        "kanji": "捨てる",
        "hiragana": "すてる",
        "nghiatiengviet": "ném đi"
    },
    {
        "kanji": "捨て子",
        "hiragana": "すてご",
        "nghiatiengviet": "đứa trẻ bị bỏ rơi"
    },
    
    {
        "kanji": "燃料",
        "hiragana": "ねんりょう",
        "nghiatiengviet": "nhiên liệu"
    },
    {
        "kanji": "燃やす",
        "hiragana": "もやす",
        "nghiatiengviet": "đốt cháy"
    },
    {
        "kanji": "燃える",
        "hiragana": "もえる",
        "nghiatiengviet": "cháy"
    },
    {
        "kanji": "袋",
        "hiragana": "ふくろ",
        "nghiatiengviet": "túi, bao tải"
    },
    {
        "kanji": "手袋",
        "hiragana": "てぶくろ",
        "nghiatiengviet": "găng tay"
    },
    {
        "kanji": "木曜日",
        "hiragana": "もくようび",
        "nghiatiengviet": "Thứ năm"
    },
    {
        "kanji": "曜日",
        "hiragana": "ようび",
        "nghiatiengviet": "ngày trong tuần"
    },
    {
        "kanji": "月末",
        "hiragana": "げつまつ",
        "nghiatiengviet": "cuối tháng"
    },
    {
        "kanji": "末っ子",
        "hiragana": "すえっこ",
        "nghiatiengviet": "con út"
    },
    {
        "kanji": "一昨日",
        "hiragana": "いっさくじつ",
        "nghiatiengviet": "ngày hôm kia"
    },
    {
        "kanji": "一昨年",
        "hiragana": "いっさくねん",
        "nghiatiengviet": "năm trước"
    },
    {
        "kanji": "昨日",
        "hiragana": "きのう",
        "nghiatiengviet": "Hôm qua"
    },
    {
        "kanji": "昨夜",
        "hiragana": "さくや",
        "nghiatiengviet": "tối hôm qua"
    },
    {
        "kanji": "翌日",
        "hiragana": "よくじつ",
        "nghiatiengviet": "ngày hôm sau"
    },
    {
        "kanji": "予算",
        "hiragana": "よさん",
        "nghiatiengviet": "ước tính, ngân sách"
    },
    {
        "kanji": "予報",
        "hiragana": "よほう",
        "nghiatiengviet": "dự báo, dự đoán"
    },
    {
        "kanji": "予防",
        "hiragana": "よぼう",
        "nghiatiengviet": "phòng ngừa, đề phòng"
    },
    {
        "kanji": "予習",
        "hiragana": "よしゅう",
        "nghiatiengviet": "chuẩn bị bài"
    },
    {
        "kanji": "予約",
        "hiragana": "よやく",
        "nghiatiengviet": "sự đặt chỗ"
    },
    {
        "kanji": "安定",
        "hiragana": "あんてい",
        "nghiatiengviet": "ổn định, cân bằng"
    },
    {
        "kanji": "決定",
        "hiragana": "けってい",
        "nghiatiengviet": "quyết định"
    },
    {
        "kanji": "定期",
        "hiragana": "ていき",
        "nghiatiengviet": "định kì"
    },
    {
        "kanji": "否定",
        "hiragana": "ひてい",
        "nghiatiengviet": "phủ định, từ chối, bác bỏ"
    },
    {
        "kanji": "使用",
        "hiragana": "しよう",
        "nghiatiengviet": "sử dụng, ứng dụng"
    },
    {
        "kanji": "信用",
        "hiragana": "しんよう",
        "nghiatiengviet": "niềm tin"
    },
    {
        "kanji": "適用",
        "hiragana": "てきよう",
        "nghiatiengviet": "ứng dụng, áp dụng"
    },
    {
        "kanji": "費用",
        "hiragana": "ひよう",
        "nghiatiengviet": "chi phí"
    },
    {
        "kanji": "無事",
        "hiragana": "ぶじ",
        "nghiatiengviet": "an toàn, vô sự"
    },
    {
        "kanji": "見事",
        "hiragana": "みごと",
        "nghiatiengviet": "lộng lẫy, đẹp đẽ"
    },
    {
        "kanji": "物事",
        "hiragana": "ものごと",
        "nghiatiengviet": "mọi thứ"
    },
    {
        "kanji": "事件",
        "hiragana": "じけん",
        "nghiatiengviet": "biến cố, vụ việc"
    },
    {
        "kanji": "事実",
        "hiragana": "じじつ",
        "nghiatiengviet": "sự thật, thực tế"
    },
    
    {
        "kanji": "押し入れ",
        "hiragana": "おしいれ",
        "nghiatiengviet": "tủ đựng, tủ âm tường"
    },
    {
        "kanji": "押す",
        "hiragana": "おす",
        "nghiatiengviet": "đẩy, đóng (dấu)"
    },
    {
        "kanji": "引退",
        "hiragana": "いんたい",
        "nghiatiengviet": "về hưu, giải nghệ"
    },
    {
        "kanji": "引用",
        "hiragana": "いんよう",
        "nghiatiengviet": "trích dẫn"
    },
    {
        "kanji": "取り替える",
        "hiragana": "とりかえる",
        "nghiatiengviet": "trao đổi"
    },
    {
        "kanji": "取る",
        "hiragana": "とる",
        "nghiatiengviet": "lấy (một cái gì đó)"
    },
    {
        "kanji": "受け取る",
        "hiragana": "うけとる",
        "nghiatiengviet": "nhận"
    },
    {
        "kanji": "消費",
        "hiragana": "しょうひ",
        "nghiatiengviet": "tiêu dùng, chi tiêu"
    },
    {
        "kanji": "消防",
        "hiragana": "しょうぼう",
        "nghiatiengviet": "phòng cháy chữa cháy, cứu hỏa"
    },
    {
        "kanji": "雨戸",
        "hiragana": "あまど",
        "nghiatiengviet": "cửa trượt"
    },
    {
        "kanji": "戸",
        "hiragana": "と",
        "nghiatiengviet": "cửa kiểu nhật"
    },
    {
        "kanji": "窓口",
        "hiragana": "まどぐち",
        "nghiatiengviet": "cửa bán vé"
    },
    {
        "kanji": "窓",
        "hiragana": "まど",
        "nghiatiengviet": "cửa sổ"
    },
    {
        "kanji": "段階",
        "hiragana": "だんかい",
        "nghiatiengviet": "giai đoạn"
    },
    {
        "kanji": "二階建て",
        "hiragana": "にかいだて",
        "nghiatiengviet": "Nhà hai tầng"
    },
    {
        "kanji": "階段",
        "hiragana": "かいだん",
        "nghiatiengviet": "Cầu thang"
    },
    {
        "kanji": "手段",
        "hiragana": "しゅだん",
        "nghiatiengviet": "phương thức, cách thức"
    },
    {
        "kanji": "値段",
        "hiragana": "ねだん",
        "nghiatiengviet": "gía tiền"
    },
    {
        "kanji": "普段",
        "hiragana": "ふだん",
        "nghiatiengviet": "thông thường, thường xuyên"
    },
    {
        "kanji": "植物",
        "hiragana": "しょくぶつ",
        "nghiatiengviet": "thực vật"
    },
    {
        "kanji": "植える",
        "hiragana": "うえる",
        "nghiatiengviet": "trồng (cây, hoa…)"
    },
    {
        "kanji": "葉",
        "hiragana": "は",
        "nghiatiengviet": "lá cây"
    },
    {
        "kanji": "言葉",
        "hiragana": "ことば",
        "nghiatiengviet": "từ, ngôn ngữ"
    },
    {
        "kanji": "紅葉",
        "hiragana": "こうよう",
        "nghiatiengviet": "cây phong, lá đỏ"
    },

    {
        "kanji": "実現",
        "hiragana": "じつげん",
        "nghiatiengviet": "thực hiện"
    },
    {
        "kanji": "実行",
        "hiragana": "じっこう",
        "nghiatiengviet": "thực hành, thực hiện"
    },
    {
        "kanji": "実際",
        "hiragana": "じっさい",
        "nghiatiengviet": "thực tế, tình trạng thực tế"
    },
    {
        "kanji": "実施",
        "hiragana": "じっし",
        "nghiatiengviet": "thi hành, đưa vào thực hiện"
    },
    {
        "kanji": "実",
        "hiragana": "み",
        "nghiatiengviet": "hạt"
    },
    {
        "kanji": "根",
        "hiragana": "ね",
        "nghiatiengviet": "cội, rễ, nguồn gốc"
    },
    {
        "kanji": "屋根",
        "hiragana": "やね",
        "nghiatiengviet": "mái nhà"
    },
    {
        "kanji": "建設",
        "hiragana": "けんせつ",
        "nghiatiengviet": "xây dựng, thành lập"
    },
    {
        "kanji": "建築",
        "hiragana": "けんちく",
        "nghiatiengviet": "kiến trúc"
    },
    {
        "kanji": "建てる",
        "hiragana": "たてる",
        "nghiatiengviet": "xây, xây dựng"
    },
    {
        "kanji": "築く",
        "hiragana": "きずく",
        "nghiatiengviet": "xây dựng, tích lũy"
    },
    {
        "kanji": "新築",
        "hiragana": "しんちく",
        "nghiatiengviet": "tòa nhà mới, công trình mới"
    },
    {
        "kanji": "構う",
        "hiragana": "かまう",
        "nghiatiengviet": "để tâm đến, chăm sóc"
    },
    {
        "kanji": "構成",
        "hiragana": "こうせい",
        "nghiatiengviet": "tổ chức, thành phần"
    },
    {
        "kanji": "結構",
        "hiragana": "けっこう",
        "nghiatiengviet": "đủ/ khá, tương đối"
    },
    {
        "kanji": "構造",
        "hiragana": "こうぞう",
        "nghiatiengviet": "cấu trúc, xây dựng"
    },
    {
        "kanji": "人造",
        "hiragana": "じんぞう",
        "nghiatiengviet": "nhân tạo"
    },
    {
        "kanji": "造る",
        "hiragana": "つくる",
        "nghiatiengviet": "làm, tạo ra"
    },
    {
        "kanji": "建設",
        "hiragana": "けんせつ",
        "nghiatiengviet": "xây dựng, thành lập"
    },
    {
        "kanji": "設計",
        "hiragana": "せっけい",
        "nghiatiengviet": "kế hoạch, thiết kế"
    },
    {
        "kanji": "設備",
        "hiragana": "せつび",
        "nghiatiengviet": "thiết bị, cơ sở vật chất"
    },
    {
        "kanji": "柱",
        "hiragana": "はしら",
        "nghiatiengviet": "cột điện, trụ, cột"
    },
    {
        "kanji": "車庫",
        "hiragana": "しゃこ",
        "nghiatiengviet": "nhà để xe, nhà để xe"
    },
    {
        "kanji": "倉庫",
        "hiragana": "そうこ",
        "nghiatiengviet": "nhà kho"
    },
    {
        "kanji": "金庫",
        "hiragana": "きんこ",
        "nghiatiengviet": "kho tiền, kho bạc"
    },
    {
        "kanji": "方向",
        "hiragana": "ほうこう",
        "nghiatiengviet": "phương hướng"
    },
    {
        "kanji": "向かい",
        "hiragana": "むかい",
        "nghiatiengviet": "đối diện, bên kia đường"
    },
    {
        "kanji": "向く",
        "hiragana": "むく",
        "nghiatiengviet": "đối mặt"
    },
    {
        "kanji": "向ける",
        "hiragana": "むける",
        "nghiatiengviet": "hướng về phía"
    },
    {
        "kanji": "向こう",
        "hiragana": "むこう",
        "nghiatiengviet": "đằng kia"
    },

    {
        "kanji": "熱心",
        "hiragana": "ねっしん",
        "nghiatiengviet": "nhiệt tình, nhiệt tình"
    },
    {
        "kanji": "熱帯",
        "hiragana": "ねったい",
        "nghiatiengviet": "vùng nhiệt đới"
    },
    {
        "kanji": "熱",
        "hiragana": "ねつ",
        "nghiatiengviet": "sốt"
    },
    {
        "kanji": "熱い",
        "hiragana": "あつい",
        "nghiatiengviet": "nóng khi chạm vào"
    },
    {
        "kanji": "冷ます",
        "hiragana": "さます",
        "nghiatiengviet": "làm nguội, để nguội"
    },
    {
        "kanji": "冷める",
        "hiragana": "さめる",
        "nghiatiengviet": "trở nên nguội, dịu đi, lắng xuống"
    },
    {
        "kanji": "冷やす",
        "hiragana": "ひやす",
        "nghiatiengviet": "để nguội, để tủ lạnh"
    },
    {
        "kanji": "冷凍",
        "hiragana": "れいとう",
        "nghiatiengviet": "cấp đông"
    },
    {
        "kanji": "温暖",
        "hiragana": "おんだん",
        "nghiatiengviet": "sự ấm áp"
    },
    {
        "kanji": "温度",
        "hiragana": "おんど",
        "nghiatiengviet": "nhiệt độ"
    },
    {
        "kanji": "体温",
        "hiragana": "たいおん",
        "nghiatiengviet": "nhiệt độ (cơ thể)"
    },
    {
        "kanji": "制度",
        "hiragana": "せいど",
        "nghiatiengviet": "thể chế, tổ chức"
    },
    {
        "kanji": "速度",
        "hiragana": "そくど",
        "nghiatiengviet": "tốc độ"
    },
    {
        "kanji": "態度",
        "hiragana": "たいど",
        "nghiatiengviet": "thái độ"
    },
    {
        "kanji": "程度",
        "hiragana": "ていど",
        "nghiatiengviet": "mức độ"
    },
    {
        "kanji": "木材",
        "hiragana": "もくざい",
        "nghiatiengviet": "gỗ"
    },
    {
        "kanji": "材料",
        "hiragana": "ざいりょう",
        "nghiatiengviet": "thành phần, nguyên liệu"
    },
    {
        "kanji": "模型",
        "hiragana": "もけい",
        "nghiatiengviet": "mô hình"
    },
    {
        "kanji": "型",
        "hiragana": "かた",
        "nghiatiengviet": "khuôn mẫu, kiểu dáng"
    },
    {
        "kanji": "日焼け",
        "hiragana": "ひやけ",
        "nghiatiengviet": "cháy nắng"
    },
    {
        "kanji": "夕焼け",
        "hiragana": "ゆうやけ",
        "nghiatiengviet": "ánh hoàng hôn"
    },
    {
        "kanji": "焼く",
        "hiragana": "やく",
        "nghiatiengviet": "nướng"
    },
    {
        "kanji": "焼ける",
        "hiragana": "やける",
        "nghiatiengviet": "được nướng"
    },
    {
        "kanji": "楽器",
        "hiragana": "がっき",
        "nghiatiengviet": "nhạc cụ"
    },
    {
        "kanji": "器械",
        "hiragana": "きかい",
        "nghiatiengviet": "dụng cụ, công cụ"
    },
    {
        "kanji": "器具",
        "hiragana": "きぐ",
        "nghiatiengviet": "đồ đạc, dụng cụ"
    },
    {
        "kanji": "食器",
        "hiragana": "しょっき",
        "nghiatiengviet": "bát đũa, đồ dùng ăn uống"
    },
    {
        "kanji": "卵",
        "hiragana": "たまご",
        "nghiatiengviet": "trứng"
    },

    {
        "kanji": "牛乳",
        "hiragana": "ぎゅうにゅう",
        "nghiatiengviet": "Sữa bò"
    },
    {
        "kanji": "母乳",
        "hiragana": "ぼにゅう",
        "nghiatiengviet": "Sữa mẹ"
    },
    {
        "kanji": "花粉",
        "hiragana": "かふん",
        "nghiatiengviet": "phấn hoa"
    },
    {
        "kanji": "粉",
        "hiragana": "こな",
        "nghiatiengviet": "bột"
    },
    {
        "kanji": "小麦粉",
        "hiragana": "こむぎこ",
        "nghiatiengviet": "bột mì"
    },
    {
        "kanji": "塩辛い",
        "hiragana": "しおからい",
        "nghiatiengviet": "cay, mặn (vị)"
    },
    {
        "kanji": "食塩",
        "hiragana": "しょくえん",
        "nghiatiengviet": "muối ăn"
    },
    {
        "kanji": "塩",
        "hiragana": "しお",
        "nghiatiengviet": "Muối"
    },
    {
        "kanji": "結果",
        "hiragana": "けっか",
        "nghiatiengviet": "kết quả, hậu quả"
    },
    {
        "kanji": "効果",
        "hiragana": "こうか",
        "nghiatiengviet": "tác dụng, hiệu lực"
    },
    {
        "kanji": "果たす",
        "hiragana": "はたす",
        "nghiatiengviet": "hoàn thành (mục tiêu)"
    },
    {
        "kanji": "豆",
        "hiragana": "まめ",
        "nghiatiengviet": "Đậu"
    },
    {
        "kanji": "缶詰",
        "hiragana": "かんづめ",
        "nghiatiengviet": "đóng gói (trong lon), đồ hộp"
    },
    {
        "kanji": "缶",
        "hiragana": "かん",
        "nghiatiengviet": "lon"
    },
    {
        "kanji": "乾杯",
        "hiragana": "かんぱい",
        "nghiatiengviet": "cạn chén"
    },
    {
        "kanji": "一杯",
        "hiragana": "いっぱい",
        "nghiatiengviet": "1 ly"
    },
    {
        "kanji": "枚",
        "hiragana": "まい",
        "nghiatiengviet": "đếm cho các vật thể phẳng, mỏng (ví dụ: tờ giấy)"
    },
    {
        "kanji": "枚数",
        "hiragana": "まいすう",
        "nghiatiengviet": "số tờ, tấm"
    },
    {
        "kanji": "匹",
        "hiragana": "ひき",
        "nghiatiengviet": "đếm thú nhỏ"
    },
    {
        "kanji": "匹敵",
        "hiragana": "ひってき",
        "nghiatiengviet": "so sánh với, đối thủ"
    },
    {
        "kanji": "量る",
        "hiragana": "はかる",
        "nghiatiengviet": "đo, cân"
    },
    {
        "kanji": "数量",
        "hiragana": "すうりょう",
        "nghiatiengviet": "số lượng"
    },
    {
        "kanji": "質量",
        "hiragana": "しつりょう",
        "nghiatiengviet": "chất lượng"
    },
    {
        "kanji": "野菜",
        "hiragana": "やさい",
        "nghiatiengviet": "rau củ"
    },
    
    {
        "kanji": "口頭",
        "hiragana": "こうとう",
        "nghiatiengviet": "miệng"
    },
    {
        "kanji": "頭脳",
        "hiragana": "ずのう",
        "nghiatiengviet": "bộ não, trí tuệ"
    },
    {
        "kanji": "先頭",
        "hiragana": "せんとう",
        "nghiatiengviet": "đứng đầu, dẫn đầu, tiên phong"
    },
    {
        "kanji": "頭",
        "hiragana": "あたま",
        "nghiatiengviet": "cái đầu"
    },
    {
        "kanji": "顔付き",
        "hiragana": "かおつき",
        "nghiatiengviet": "nét mặt"
    },
    {
        "kanji": "笑顔",
        "hiragana": "えがお",
        "nghiatiengviet": "khuôn mặt tươi cười"
    },
    {
        "kanji": "首相",
        "hiragana": "しゅしょう",
        "nghiatiengviet": "Thủ tướng"
    },
    {
        "kanji": "首都",
        "hiragana": "しゅと",
        "nghiatiengviet": "thủ đô"
    },
    {
        "kanji": "耳鼻科",
        "hiragana": "じびか",
        "nghiatiengviet": "khoa tai mũi họng"
    },
    {
        "kanji": "鼻",
        "hiragana": "はな",
        "nghiatiengviet": "mũi"
    },
    {
        "kanji": "呼び出す",
        "hiragana": "よびだす",
        "nghiatiengviet": "triệu tập"
    },
    {
        "kanji": "呼吸",
        "hiragana": "こきゅう",
        "nghiatiengviet": "hơi thở, hô hấp"
    },
    {
        "kanji": "呼びかける",
        "hiragana": "よびかける",
        "nghiatiengviet": "kêu gọi"
    },
    {
        "kanji": "吸収",
        "hiragana": "きゅうしゅう",
        "nghiatiengviet": "sự hấp thụ, sức hút"
    },
    {
        "kanji": "呼吸",
        "hiragana": "こきゅう",
        "nghiatiengviet": "hơi thở, hô hấp"
    },
    {
        "kanji": "吸う",
        "hiragana": "すう",
        "nghiatiengviet": "hút"
    },
    {
        "kanji": "溜息",
        "hiragana": "ためいき",
        "nghiatiengviet": "tiếng thở dài"
    },
    {
        "kanji": "息",
        "hiragana": "いき",
        "nghiatiengviet": "hơi thở"
    },
    {
        "kanji": "息子",
        "hiragana": "むすこ",
        "nghiatiengviet": "con trai"
    },
    {
        "kanji": "汗",
        "hiragana": "あせ",
        "nghiatiengviet": "mồ hôi"
    },
    {
        "kanji": "検査",
        "hiragana": "けんさ",
        "nghiatiengviet": "kiểm tra"
    },
    {
        "kanji": "検討",
        "hiragana": "けんとう",
        "nghiatiengviet": "xem xét, cân nhắc"
    },
    {
        "kanji": "調査",
        "hiragana": "ちょうさ",
        "nghiatiengviet": "điều tra, anket"
    },
    {
        "kanji": "捜査",
        "hiragana": "そうさ",
        "nghiatiengviet": "tìm kiếm"
    },
    
    {
        "kanji": "虫歯",
        "hiragana": "むしば",
        "nghiatiengviet": "rang sâu"
    },
    {
        "kanji": "歯医者",
        "hiragana": "はいしゃ",
        "nghiatiengviet": "nha sĩ"
    },
    {
        "kanji": "歯",
        "hiragana": "は",
        "nghiatiengviet": "răng"
    },
    {
        "kanji": "痛み",
        "hiragana": "いたみ",
        "nghiatiengviet": "cơn đau, nhức nhối"
    },
    {
        "kanji": "苦痛",
        "hiragana": "くつう",
        "nghiatiengviet": "đau khổ, thống khổ"
    },
    {
        "kanji": "頭痛",
        "hiragana": "ずつう",
        "nghiatiengviet": "đau đầu"
    },
    {
        "kanji": "痛い",
        "hiragana": "いたい",
        "nghiatiengviet": "đau đớn"
    },
    {
        "kanji": "血圧",
        "hiragana": "けつあつ",
        "nghiatiengviet": "huyết áp"
    },
    {
        "kanji": "血",
        "hiragana": "ち",
        "nghiatiengviet": "máu"
    },
    {
        "kanji": "液",
        "hiragana": "えき",
        "nghiatiengviet": "chất lỏng"
    },
    {
        "kanji": "溶液",
        "hiragana": "ようえき",
        "nghiatiengviet": "dung dịch (chất lỏng)"
    },
    {
        "kanji": "液体",
        "hiragana": "えきたい",
        "nghiatiengviet": "chất lỏng"
    },
    {
        "kanji": "血液",
        "hiragana": "けつえき",
        "nghiatiengviet": "máu"
    },
    {
        "kanji": "小包",
        "hiragana": "こづつみ",
        "nghiatiengviet": "bưu kiện"
    },
    {
        "kanji": "包む",
        "hiragana": "つつむ",
        "nghiatiengviet": "quấn"
    },
    {
        "kanji": "包帯",
        "hiragana": "ほうたい",
        "nghiatiengviet": "băng bó"
    },
    {
        "kanji": "帯",
        "hiragana": "おび",
        "nghiatiengviet": "cái đai"
    },
    {
        "kanji": "熱帯",
        "hiragana": "ねったい",
        "nghiatiengviet": "vùng nhiệt đới"
    },
    {
        "kanji": "救う",
        "hiragana": "すくう",
        "nghiatiengviet": "sự giúp đỡ, viện trợ, cứu trợ"
    },
    {
        "kanji": "救助",
        "hiragana": "きゅうじょ",
        "nghiatiengviet": "cứu trợ, viện trợ, cứu hộ"
    },
    {
        "kanji": "助手",
        "hiragana": "じょしゅ",
        "nghiatiengviet": "người trợ giúp"
    },
    {
        "kanji": "助ける",
        "hiragana": "たすける",
        "nghiatiengviet": "giúp, cứu"
    },
    {
        "kanji": "自助",
        "hiragana": "じじょ",
        "nghiatiengviet": "tự lực"
    },
    {
        "kanji": "死亡",
        "hiragana": "しぼう",
        "nghiatiengviet": "cái chết, tử vong"
    },
    {
        "kanji": "必死",
        "hiragana": "ひっし",
        "nghiatiengviet": "cố hết sức"
    },
    {
        "kanji": "死ぬ",
        "hiragana": "しぬ",
        "nghiatiengviet": "chết"
    },
    {
        "kanji": "亡くす",
        "hiragana": "なくす",
        "nghiatiengviet": "để mất một ai đó"
    },
    {
        "kanji": "亡くなる",
        "hiragana": "なくなる",
        "nghiatiengviet": "chết"
    },
    
    {
        "kanji": "戦う",
        "hiragana": "たたかう",
        "nghiatiengviet": "chiến đấu"
    },
    {
        "kanji": "戦争",
        "hiragana": "せんそう",
        "nghiatiengviet": "chiến tranh"
    },
    {
        "kanji": "解決",
        "hiragana": "かいけつ",
        "nghiatiengviet": "giải quyết, giải pháp"
    },
    {
        "kanji": "決まり",
        "hiragana": "きまり",
        "nghiatiengviet": "quy định, quy tắc"
    },
    {
        "kanji": "決心",
        "hiragana": "けっしん",
        "nghiatiengviet": "quyết tâm"
    },
    {
        "kanji": "決定",
        "hiragana": "けってい",
        "nghiatiengviet": "quyết định"
    },
    {
        "kanji": "決める",
        "hiragana": "きめる",
        "nghiatiengviet": "tự quyết định"
    },
    {
        "kanji": "優勝",
        "hiragana": "ゆうしょう",
        "nghiatiengviet": "chiến thắng chung cuộc, vô địch"
    },
    {
        "kanji": "勝つ",
        "hiragana": "かつ",
        "nghiatiengviet": "thắng"
    },
    {
        "kanji": "負ける",
        "hiragana": "まける",
        "nghiatiengviet": "để thua"
    },
    {
        "kanji": "勝負",
        "hiragana": "しょうぶ",
        "nghiatiengviet": "thắng bại"
    },
    {
        "kanji": "現代",
        "hiragana": "げんだい",
        "nghiatiengviet": "ngày nay, thời hiện đại"
    },
    {
        "kanji": "代金",
        "hiragana": "だいきん",
        "nghiatiengviet": "giá cả, thanh toán, chi phí, phí"
    },
    {
        "kanji": "代表",
        "hiragana": "だいひょう",
        "nghiatiengviet": "đại diện"
    },
    {
        "kanji": "表現",
        "hiragana": "ひょうげん",
        "nghiatiengviet": "biểu thức"
    },
    {
        "kanji": "表情",
        "hiragana": "ひょうじょう",
        "nghiatiengviet": "nét mặt"
    },
    {
        "kanji": "表面",
        "hiragana": "ひょうめん",
        "nghiatiengviet": "bề mặt, bên ngoài"
    },
    {
        "kanji": "表",
        "hiragana": "おもて",
        "nghiatiengviet": "mặt trước"
    },
    {
        "kanji": "第一",
        "hiragana": "だいいち",
        "nghiatiengviet": "đầu tiên, quan trọng nhất"
    },
    {
        "kanji": "第",
        "hiragana": "だい",
        "nghiatiengviet": "thứ tự"
    },
    {
        "kanji": "今回",
        "hiragana": "こんかい",
        "nghiatiengviet": "lần này"
    },
    {
        "kanji": "回す",
        "hiragana": "まわす",
        "nghiatiengviet": "quay"
    },
    {
        "kanji": "回り",
        "hiragana": "まわり",
        "nghiatiengviet": "xung quanh"
    },
    {
        "kanji": "記事",
        "hiragana": "きじ",
        "nghiatiengviet": "bài báo, tin bài"
    },
    {
        "kanji": "記者",
        "hiragana": "きしゃ",
        "nghiatiengviet": "phóng viên"
    },
    {
        "kanji": "記入",
        "hiragana": "きにゅう",
        "nghiatiengviet": "điền vào"
    },
    {
        "kanji": "記念",
        "hiragana": "きねん",
        "nghiatiengviet": "kỷ niệm, ký ức"
    },
    {
        "kanji": "記録",
        "hiragana": "きろく",
        "nghiatiengviet": "ghi chép lại, lưu lại viết"
    },
    
    {
        "kanji": "優れる",
        "hiragana": "すぐれる",
        "nghiatiengviet": "vượt xa, vượt trội,ưu tú"
    },
    {
        "kanji": "俳優",
        "hiragana": "はいゆう",
        "nghiatiengviet": "diễn viên, nữ diễn viên"
    },
    {
        "kanji": "優秀",
        "hiragana": "ゆうしゅう",
        "nghiatiengviet": "ưu việt, xuất sắc"
    },
    {
        "kanji": "優勝",
        "hiragana": "ゆうしょう",
        "nghiatiengviet": "chiến thắng chung cuộc, vô địch"
    },
    {
        "kanji": "優先",
        "hiragana": "ゆうせん",
        "nghiatiengviet": "ưu tiên"
    },
    {
        "kanji": "賞金",
        "hiragana": "しょうきん",
        "nghiatiengviet": "giải thưởng, tiền thưởng"
    },
    {
        "kanji": "賞品",
        "hiragana": "しょうひん",
        "nghiatiengviet": "giải thưởng, danh hiệu"
    },
    {
        "kanji": "賞",
        "hiragana": "しょう",
        "nghiatiengviet": "Giải thưởng"
    },
    {
        "kanji": "賞状",
        "hiragana": "しょうじょう",
        "nghiatiengviet": "Giấy khen"
    },
    {
        "kanji": "秒",
        "hiragana": "びょう",
        "nghiatiengviet": "giây"
    },
    {
        "kanji": "毎秒",
        "hiragana": "まいびょう",
        "nghiatiengviet": "mỗi giây"
    },
    {
        "kanji": "差",
        "hiragana": "さ",
        "nghiatiengviet": "khác biệt, cách biệt"
    },
    {
        "kanji": "差別",
        "hiragana": "さべつ",
        "nghiatiengviet": "sự phân biệt"
    },
    {
        "kanji": "日差し",
        "hiragana": "ひざし",
        "nghiatiengviet": "ánh sáng mặt trời"
    },
    {
        "kanji": "時差",
        "hiragana": "じさ",
        "nghiatiengviet": "chênh lệch thời gian"
    },
    {
        "kanji": "測量",
        "hiragana": "そくりょう",
        "nghiatiengviet": "đo đạc"
    },
    {
        "kanji": "測る",
        "hiragana": "はかる",
        "nghiatiengviet": "đo, cân"
    },
    {
        "kanji": "予測",
        "hiragana": "よそく",
        "nghiatiengviet": "dự đoán, ước tính"
    },
    {
        "kanji": "計測",
        "hiragana": "けいそく",
        "nghiatiengviet": "đo lường, phép đo"
    },
    {
        "kanji": "順調",
        "hiragana": "じゅんちょう",
        "nghiatiengviet": "thuận lợi"
    },
    {
        "kanji": "順番",
        "hiragana": "じゅんばん",
        "nghiatiengviet": "lần lượt (trong hàng), thứ tự"
    },
    {
        "kanji": "不順",
        "hiragana": "ふじゅん",
        "nghiatiengviet": "không thuận lợi"
    },
    {
        "kanji": "順序",
        "hiragana": "じゅんじょ",
        "nghiatiengviet": "thứ tự"
    },
    {
        "kanji": "球",
        "hiragana": "たま",
        "nghiatiengviet": "quả cầu, quả bóng"
    },
    {
        "kanji": "地球",
        "hiragana": "ちきゅう",
        "nghiatiengviet": "trái đất"
    },
    {
        "kanji": "野球",
        "hiragana": "やきゅう",
        "nghiatiengviet": "bóng chày"
    },
    {
        "kanji": "打つ",
        "hiragana": "うつ",
        "nghiatiengviet": "đánh"
    },
    {
        "kanji": "打合せ",
        "hiragana": "うちあわせ",
        "nghiatiengviet": "cuộc họp"
    },
    {
        "kanji": "投票",
        "hiragana": "とうひょう",
        "nghiatiengviet": "bỏ phiếu"
    },
    {
        "kanji": "投げる",
        "hiragana": "なげる",
        "nghiatiengviet": "ném"
    },
    {
        "kanji": "欠点",
        "hiragana": "けってん",
        "nghiatiengviet": "lỗi, khiếm khuyết, điểm yếu"
    },
    {
        "kanji": "要点",
        "hiragana": "ようてん",
        "nghiatiengviet": "ý chính, điểm chính"
    },
    {
        "kanji": "同点",
        "hiragana": "どうてん",
        "nghiatiengviet": "đồng điểm"
    },
    {
        "kanji": "満点",
        "hiragana": "まんてん",
        "nghiatiengviet": "điểm tuyệt đối"
    },
    {
        "kanji": "重点",
        "hiragana": "じゅうてん",
        "nghiatiengviet": "điểm quan trọng"
    },
    
    {
        "kanji": "感じる",
        "hiragana": "かんじる",
        "nghiatiengviet": "cảm nhận, cảm nhận"
    },
    {
        "kanji": "感心",
        "hiragana": "かんしん",
        "nghiatiengviet": "ngưỡng mộ"
    },
    {
        "kanji": "感動",
        "hiragana": "かんどう",
        "nghiatiengviet": "xúc động"
    },
    {
        "kanji": "感情",
        "hiragana": "かんじょう",
        "nghiatiengviet": "cảm tình"
    },
    {
        "kanji": "感想",
        "hiragana": "かんそう",
        "nghiatiengviet": "cảm tưởng"
    },
    {
        "kanji": "事情",
        "hiragana": "じじょう",
        "nghiatiengviet": "hoàn cảnh"
    },
    {
        "kanji": "情報",
        "hiragana": "じょうほう",
        "nghiatiengviet": "thông tin"
    },
    {
        "kanji": "表情",
        "hiragana": "ひょうじょう",
        "nghiatiengviet": "nét mặt"
    },
    {
        "kanji": "情け",
        "hiragana": "なさけ",
        "nghiatiengviet": "cảm thông, lòng trắc ẩn"
    },
    {
        "kanji": "恋",
        "hiragana": "こい",
        "nghiatiengviet": "tình yêu"
    },
    {
        "kanji": "恋人",
        "hiragana": "こいびと",
        "nghiatiengviet": "người yêu"
    },
    {
        "kanji": "愛情",
        "hiragana": "あいじょう",
        "nghiatiengviet": "yêu mến"
    },
    {
        "kanji": "愛する",
        "hiragana": "あいする",
        "nghiatiengviet": "yêu"
    },
    {
        "kanji": "愛用",
        "hiragana": "あいよう",
        "nghiatiengviet": "được ưa thích, ưa dùng"
    },
    {
        "kanji": "信じる",
        "hiragana": "しんじる",
        "nghiatiengviet": "tin tưởng, đặt niềm tin vào"
    },
    {
        "kanji": "信用",
        "hiragana": "しんよう",
        "nghiatiengviet": "sự tự tin, sự phụ thuộc"
    },
    {
        "kanji": "信頼",
        "hiragana": "しんらい",
        "nghiatiengviet": "sự tin cậy, sự tin tưởng"
    },
    {
        "kanji": "通信",
        "hiragana": "つうしん",
        "nghiatiengviet": "thư từ, thông tin liên lạc"
    },
    {
        "kanji": "信号",
        "hiragana": "しんごう",
        "nghiatiengviet": "tín hiệu"
    },
    {
        "kanji": "想像",
        "hiragana": "そうぞう",
        "nghiatiengviet": "trí tưởng tượng, đoán"
    },
    {
        "kanji": "理想",
        "hiragana": "りそう",
        "nghiatiengviet": "lý tưởng"
    },
    {
        "kanji": "連想",
        "hiragana": "れんそう",
        "nghiatiengviet": "sự liên tưởng"
    },
    {
        "kanji": "愛想",
        "hiragana": "あいそう",
        "nghiatiengviet": "dễ gây thiện cảm"
    },
    {
        "kanji": "手伝い",
        "hiragana": "てつだい",
        "nghiatiengviet": "giúp đỡ"
    },
    {
        "kanji": "伝統",
        "hiragana": "でんとう",
        "nghiatiengviet": "truyền thống"
    },
    {
        "kanji": "伝える",
        "hiragana": "つたえる",
        "nghiatiengviet": "truyền đạt"
    },
    {
        "kanji": "伝わる",
        "hiragana": "つたわる",
        "nghiatiengviet": "được truyền, được chuyển giao"
    },
    {
        "kanji": "伝言",
        "hiragana": "でんごん",
        "nghiatiengviet": "lời nhắn"
    },
    {
        "kanji": "食欲",
        "hiragana": "しょくよく",
        "nghiatiengviet": "sự thèm ăn"
    },
    {
        "kanji": "欲しい",
        "hiragana": "ほしい",
        "nghiatiengviet": "muốn"
    },
    {
        "kanji": "意欲",
        "hiragana": "いよく",
        "nghiatiengviet": "ý chí, mong muốn, tham vọng"
    },
    {
        "kanji": "苦しい",
        "hiragana": "くるしい",
        "nghiatiengviet": "đau đớn, khó khăn"
    },
    {
        "kanji": "苦しむ",
        "hiragana": "くるしむ",
        "nghiatiengviet": "đau khổ, lo lắng"
    },
    {
        "kanji": "苦労",
        "hiragana": "くろう",
        "nghiatiengviet": "rắc rối, khó khăn"
    },
    {
        "kanji": "苦手",
        "hiragana": "にがて",
        "nghiatiengviet": "kém (ở), yếu (ở)"
    },
    {
        "kanji": "苦い",
        "hiragana": "にがい",
        "nghiatiengviet": "đắng"
    },
    {
        "kanji": "苦心",
        "hiragana": "くしん",
        "nghiatiengviet": "khổ tâm, hao tâm khổ tứ"
    },
    {
        "kanji": "悩み",
        "hiragana": "なやみ",
        "nghiatiengviet": "rắc rối, lo lắng"
    },
    {
        "kanji": "悩む",
        "hiragana": "なやむ",
        "nghiatiengviet": "trở nên lo lắng"
    },
    
    {
        "kanji": "困難",
        "hiragana": "こんなん",
        "nghiatiengviet": "khó khăn, đau khổ"
    },
    {
        "kanji": "困る",
        "hiragana": "こまる",
        "nghiatiengviet": "trở nên lo lắng"
    },
    {
        "kanji": "困難",
        "hiragana": "こんなん",
        "nghiatiengviet": "khó khăn, đau khổ"
    },
    {
        "kanji": "難しい",
        "hiragana": "むずかしい",
        "nghiatiengviet": "Khó, khó khăn"
    },
    {
        "kanji": "難問",
        "hiragana": "なんもん",
        "nghiatiengviet": "vấn đề nan giải, câu hỏi khó"
    },
    {
        "kanji": "怒る",
        "hiragana": "おこる",
        "nghiatiengviet": "tức giận"
    },
    {
        "kanji": "怒り",
        "hiragana": "いかり",
        "nghiatiengviet": "cơn giận"
    },
    {
        "kanji": "激怒",
        "hiragana": "げきど",
        "nghiatiengviet": "sự tức giận"
    },
    {
        "kanji": "悲しむ",
        "hiragana": "かなしむ",
        "nghiatiengviet": "buồn, để thương tiếc"
    },
    {
        "kanji": "悲劇",
        "hiragana": "ひげき",
        "nghiatiengviet": "bi kịch"
    },
    {
        "kanji": "悲しい",
        "hiragana": "かなしい",
        "nghiatiengviet": "buồn, tiếc"
    },
    {
        "kanji": "笑い",
        "hiragana": "わらい",
        "nghiatiengviet": "nụ cười"
    },
    {
        "kanji": "笑う",
        "hiragana": "わらう",
        "nghiatiengviet": "cười"
    },
    {
        "kanji": "笑顔",
        "hiragana": "えがお",
        "nghiatiengviet": "khuôn mặt cười"
    },
    {
        "kanji": "笑い声",
        "hiragana": "わらいごえ",
        "nghiatiengviet": "tiếng cười"
    },
    {
        "kanji": "喜ぶ",
        "hiragana": "よろこぶ",
        "nghiatiengviet": "vui mừng"
    },
    {
        "kanji": "喜び",
        "hiragana": "よろこび",
        "nghiatiengviet": "niềm vui, hân hoan"
    },
    {
        "kanji": "残す",
        "hiragana": "のこす",
        "nghiatiengviet": "để lại, để dành"
    },
    {
        "kanji": "残り",
        "hiragana": "のこり",
        "nghiatiengviet": "phần còn lại"
    },
    {
        "kanji": "残業",
        "hiragana": "ざんぎょう",
        "nghiatiengviet": "tăng ca"
    },
    {
        "kanji": "記念",
        "hiragana": "きねん",
        "nghiatiengviet": "kỷ niệm, ký ức"
    },
    {
        "kanji": "残念",
        "hiragana": "ざんねん",
        "nghiatiengviet": "thất vọng, đáng tiếc"
    },
    {
        "kanji": "信念",
        "hiragana": "しんねん",
        "nghiatiengviet": "Lòng tin"
    },
    {
        "kanji": "泣く",
        "hiragana": "なく",
        "nghiatiengviet": "rơi nước mắt"
    },
    {
        "kanji": "涙",
        "hiragana": "なみだ",
        "nghiatiengviet": "nước mắt"
    },
    
    {
        "kanji": "結果",
        "hiragana": "けっか",
        "nghiatiengviet": "kết quả, hậu quả"
    },
    {
        "kanji": "結局",
        "hiragana": "けっきょく",
        "nghiatiengviet": "sau tất cả, cuối cùng"
    },
    {
        "kanji": "結論",
        "hiragana": "けつろん",
        "nghiatiengviet": "Phần kết luận"
    },
    {
        "kanji": "結ぶ",
        "hiragana": "むすぶ",
        "nghiatiengviet": "buộc"
    },
    {
        "kanji": "婚約",
        "hiragana": "こんやく",
        "nghiatiengviet": "đính hôn"
    },
    {
        "kanji": "離婚",
        "hiragana": "りこん",
        "nghiatiengviet": "ly hôn"
    },
    {
        "kanji": "紹介",
        "hiragana": "しょうかい",
        "nghiatiengviet": "giới thiệu"
    },
    {
        "kanji": "仲介",
        "hiragana": "ちゅうかい",
        "nghiatiengviet": "Mô giới, trung gian"
    },
    {
        "kanji": "紹介",
        "hiragana": "しょうかい",
        "nghiatiengviet": "giới thiệu"
    },
    {
        "kanji": "独身",
        "hiragana": "どくしん",
        "nghiatiengviet": "độc thân"
    },
    {
        "kanji": "独特",
        "hiragana": "どくとく",
        "nghiatiengviet": "tính đặc thù"
    },
    {
        "kanji": "独立",
        "hiragana": "どくりつ",
        "nghiatiengviet": "độc lập"
    },
    {
        "kanji": "独り",
        "hiragana": "ひとり",
        "nghiatiengviet": "một mình"
    },
    {
        "kanji": "自身",
        "hiragana": "じしん",
        "nghiatiengviet": "tự thân, cá nhân"
    },
    {
        "kanji": "出身",
        "hiragana": "しゅっしん",
        "nghiatiengviet": "xuất thân, đến từ"
    },
    {
        "kanji": "身長",
        "hiragana": "しんちょう",
        "nghiatiengviet": "chiều cao"
    },
    {
        "kanji": "身分",
        "hiragana": "みぶん",
        "nghiatiengviet": "vị trí xã hội, thân phận"
    },
    {
        "kanji": "貯金",
        "hiragana": "ちょきん",
        "nghiatiengviet": "tiền tiết kiệm"
    },
    {
        "kanji": "学期",
        "hiragana": "がっき",
        "nghiatiengviet": "học kì"
    },
    {
        "kanji": "期間",
        "hiragana": "きかん",
        "nghiatiengviet": "giai đoạn, kỳ hạn"
    },
    {
        "kanji": "期待",
        "hiragana": "きたい",
        "nghiatiengviet": "mong đợi, hy vọng"
    },
    {
        "kanji": "時期",
        "hiragana": "じき",
        "nghiatiengviet": "thời gian, mùa, thời kỳ"
    },
    {
        "kanji": "長期",
        "hiragana": "ちょうき",
        "nghiatiengviet": "khoảng thời gian dài"
    },
    {
        "kanji": "期末",
        "hiragana": "きまつ",
        "nghiatiengviet": "cuối kỳ"
    },
    {
        "kanji": "節約",
        "hiragana": "せつやく",
        "nghiatiengviet": "tiết kiệm, tiết kiệm"
    },
    {
        "kanji": "約",
        "hiragana": "やく",
        "nghiatiengviet": "xấp xỉ, khoảng"
    },
    {
        "kanji": "予約",
        "hiragana": "よやく",
        "nghiatiengviet": "sự đặt chỗ"
    },
    {
        "kanji": "束",
        "hiragana": "たば",
        "nghiatiengviet": "bó (rau, hoa)"
    },
    {
        "kanji": "約束",
        "hiragana": "やくそく",
        "nghiatiengviet": "lời hứa"
    },
    {
        "kanji": "束縛",
        "hiragana": "そくばく",
        "nghiatiengviet": "kiềm chế, bó buộc, giam cầm"
    },
    {
    "kanji": "必要",
    "hiragana": "ひつよう",
    "nghiatiengviet": "cần thiết"
},
{
    "kanji": "必須",
    "hiragana": "ひっす",
    "nghiatiengviet": "cần thiết"
},
{
    "kanji": "必死",
    "hiragana": "ひっし",
    "nghiatiengviet": "quyết tâm"
},
{
    "kanji": "守",
    "hiragana": "まもる",
    "nghiatiengviet": "bảo vệ, tuân theo"
},
{
    "kanji": "留守",
    "hiragana": "るす",
    "nghiatiengviet": "vắng nhà"
},
{
    "kanji": "厳守",
    "hiragana": "げんしゅ",
    "nghiatiengviet": "tuân thủ nghiêm ngặt"
},
{
    "kanji": "式",
    "hiragana": "しき",
    "nghiatiengviet": "phương trình, công thức"
},
{
    "kanji": "正式",
    "hiragana": "せいしき",
    "nghiatiengviet": "chính thức, hình thức"
},
{
    "kanji": "結婚式",
    "hiragana": "けっこんしき",
    "nghiatiengviet": "lễ kết hôn"
},
{
    "kanji": "卒業式",
    "hiragana": "そつぎょうしき",
    "nghiatiengviet": "lễ tốt nghiệp"
},
{
    "kanji": "列島",
    "hiragana": "れっとう",
    "nghiatiengviet": "chuỗi đảo"
},
{
    "kanji": "列",
    "hiragana": "れつ",
    "nghiatiengviet": "hàng"
},
{
    "kanji": "行列",
    "hiragana": "ぎょうれつ",
    "nghiatiengviet": "hàng (người)"
},
{
    "kanji": "列車",
    "hiragana": "れっしゃ",
    "nghiatiengviet": "xe lửa, tàu hỏa"
},
{
    "kanji": "祝日",
    "hiragana": "しゅくじつ",
    "nghiatiengviet": "ngày lễ"
},
{
    "kanji": "祝",
    "hiragana": "いわう",
    "nghiatiengviet": "chúc mừng"
},
{
    "kanji": "酔",
    "hiragana": "よう",
    "nghiatiengviet": "say"
},
{
    "kanji": "酔っぱらい",
    "hiragana": "よっぱらい",
    "nghiatiengviet": "say xỉn"
},
{
    "kanji": "永遠",
    "hiragana": "えいえん",
    "nghiatiengviet": "sự vĩnh hằng, sự trường tồn"
},
{
    "kanji": "永久",
    "hiragana": "えいきゅう",
    "nghiatiengviet": "sự vĩnh cửu"
},
{
    "kanji": "願",
    "hiragana": "ねがい",
    "nghiatiengviet": "mong muốn, yêu cầu"
},
{
    "kanji": "願",
    "hiragana": "ねがう",
    "nghiatiengviet": "mong muốn"
},
{
    "kanji": "念願",
    "hiragana": "ねんがん",
    "nghiatiengviet": "tâm nguyện, nguyện vọng"
},
{
    "kanji": "幸",
    "hiragana": "さいわい",
    "nghiatiengviet": "hạnh phúc"
},
{
    "kanji": "幸",
    "hiragana": "しあわせ",
    "nghiatiengviet": "hạnh phúc, may mắn"
},
{
    "kanji": "不幸",
    "hiragana": "ふこう",
    "nghiatiengviet": "bất hạnh, đau khổ"
},
{
    "kanji": "幸運",
    "hiragana": "こううん",
    "nghiatiengviet": "vận may, may mắn"
},
{
    "kanji": "福祉",
    "hiragana": "ふくし",
    "nghiatiengviet": "phúc lợi"
},
{
    "kanji": "幸福",
    "hiragana": "こうふく",
    "nghiatiengviet": "hạnh phúc"
},
{
    "kanji": "感じる",
    "hiragana": "かんじる",
    "nghiatiengviet": "cảm nhận, cảm nhận"
},
{
    "kanji": "関心",
    "hiragana": "かんしん",
    "nghiatiengviet": "quan tâm"
},
{
    "kanji": "関する",
    "hiragana": "かんする",
    "nghiatiengviet": "có liên quan"
},
{
    "kanji": "関連",
    "hiragana": "かんれん",
    "nghiatiengviet": "quan hệ, kết nối"
},
{
    "kanji": "関係",
    "hiragana": "かんけい",
    "nghiatiengviet": "quan hệ"
},
{
    "kanji": "関わる",
    "hiragana": "かかわる",
    "nghiatiengviet": "liên quan"
},
{
    "kanji": "係",
    "hiragana": "かかり",
    "nghiatiengviet": "người phụ trách"
},
{
    "kanji": "関係",
    "hiragana": "かんけい",
    "nghiatiengviet": "mối quan hệ"
},
{
    "kanji": "係員",
    "hiragana": "かかりいん",
    "nghiatiengviet": "người phụ trách, người chịu trách nhiệm"
},
{
    "kanji": "平和",
    "hiragana": "へいわ",
    "nghiatiengviet": "hòa bình"
},
{
    "kanji": "和らげる",
    "hiragana": "やわらげる",
    "nghiatiengviet": "làm dịu"
},
{
    "kanji": "和やか",
    "hiragana": "なごやか",
    "nghiatiengviet": "hòa nhã, dịu dàng"
},
{
    "kanji": "和食",
    "hiragana": "わしょく",
    "nghiatiengviet": "đồ ăn Nhật"
},
{
    "kanji": "付き合い",
    "hiragana": "つきあい",
    "nghiatiengviet": "giao lưu, làm bạn, hẹn hò"
},
{
    "kanji": "付ける",
    "hiragana": "つける",
    "nghiatiengviet": "để đính kèm"
},
{
    "kanji": "娘",
    "hiragana": "むすめ",
    "nghiatiengviet": "(khiêm tốn) con gái"
},
{
    "kanji": "老い",
    "hiragana": "おい",
    "nghiatiengviet": "tuổi già, già"
},
{
    "kanji": "老人",
    "hiragana": "ろうじん",
    "nghiatiengviet": "người già"
},
{
    "kanji": "老後",
    "hiragana": "ろうご",
    "nghiatiengviet": "tuổi già"
},
{
    "kanji": "主婦",
    "hiragana": "しゅふ",
    "nghiatiengviet": "bà nội trợ"
},
{
    "kanji": "夫婦",
    "hiragana": "ふうふ",
    "nghiatiengviet": "vợ chồng"
},
{
    "kanji": "婦人",
    "hiragana": "ふじん",
    "nghiatiengviet": "phụ nữ"
},
{
    "kanji": "姓",
    "hiragana": "せい",
    "nghiatiengviet": "họ"
},
{
    "kanji": "仲良し",
    "hiragana": "なかよし",
    "nghiatiengviet": "bạn thân, bạn tâm giao"
},
{
    "kanji": "仲間",
    "hiragana": "なかま",
    "nghiatiengviet": "đồng nghiệp, cộng sự"
},
{
    "kanji": "君",
    "hiragana": "きみ",
    "nghiatiengviet": "Cậu, bạn, em"
},
{
    "kanji": "君",
    "hiragana": "くん",
    "nghiatiengviet": "hậu tố cho nam"
},

    {
        "kanji": "彼女",
        "hiragana": "かのじょ",
        "nghiatiengviet": "cô ấy, bạn gái"
    },
    {
        "kanji": "彼",
        "hiragana": "かれ",
        "nghiatiengviet": "anh ấy, bạn trai"
    },
    {
        "kanji": "彼ら",
        "hiragana": "かれら",
        "nghiatiengviet": "họ, những người đó"
    },
    {
        "kanji": "他人",
        "hiragana": "たにん",
        "nghiatiengviet": "người khác"
    },
    {
        "kanji": "他",
        "hiragana": "ほか",
        "nghiatiengviet": "khác"
    },
    {
        "kanji": "初めて",
        "hiragana": "はじめて",
        "nghiatiengviet": "lần đầu tiên"
    },
    {
        "kanji": "最初",
        "hiragana": "さいしょ",
        "nghiatiengviet": "bắt đầu, đầu tiên"
    },
    {
        "kanji": "初回",
        "hiragana": "しょかい",
        "nghiatiengviet": "lần đầu"
    },
    {
        "kanji": "再来週",
        "hiragana": "さらいしゅう",
        "nghiatiengviet": "tuần sau nữa"
    },
    {
        "kanji": "再来年",
        "hiragana": "さらいねん",
        "nghiatiengviet": "năm sau tiếp theo"
    },
    {
        "kanji": "再び",
        "hiragana": "ふたたび",
        "nghiatiengviet": "một lần nữa"
    },
    {
        "kanji": "久しぶり",
        "hiragana": "ひさしぶり",
        "nghiatiengviet": "sau một thời gian dài"
    },
    {
        "kanji": "配達",
        "hiragana": "はいたつ",
        "nghiatiengviet": "giao hàng, phân phối"
    },
    {
        "kanji": "発達",
        "hiragana": "はったつ",
        "nghiatiengviet": "phát triển"
    },
    {
        "kanji": "友達",
        "hiragana": "ともだち",
        "nghiatiengviet": "bạn bè"
    },
    {
        "kanji": "個人",
        "hiragana": "こじん",
        "nghiatiengviet": "cá nhân"
    },
    {
        "kanji": "個性",
        "hiragana": "こせい",
        "nghiatiengviet": "cá tính"
    },
    {
        "kanji": "個別",
        "hiragana": "こべつ",
        "nghiatiengviet": "trường hợp đặc biệt"
    },
    {
        "kanji": "性格",
        "hiragana": "せいかく",
        "nghiatiengviet": "nhân vật, cá tính"
    },
    {
        "kanji": "女性",
        "hiragana": "じょせい",
        "nghiatiengviet": "đàn bà"
    },
    {
        "kanji": "男性",
        "hiragana": "だんせい",
        "nghiatiengviet": "nam giới"
    },
    {
        "kanji": "性別",
        "hiragana": "せいべつ",
        "nghiatiengviet": "giới tính"
    },
    {
        "kanji": "各自",
        "hiragana": "かくじ",
        "nghiatiengviet": "cá nhân, từng người"
    },
    {
        "kanji": "各地",
        "hiragana": "かくち",
        "nghiatiengviet": "mọi nơi, nhiều nơi"
    },
    {
        "kanji": "価格",
        "hiragana": "かかく",
        "nghiatiengviet": "giá cả"
    },
    {
        "kanji": "合格",
        "hiragana": "ごうかく",
        "nghiatiengviet": "đỗ, đậu vào"
    },
    {
        "kanji": "性格",
        "hiragana": "せいかく",
        "nghiatiengviet": "tính cách"
    },
    {
    "kanji": "簡単",
    "hiragana": "かんたん",
    "nghiatiengviet": "đơn giản"
},
{
    "kanji": "単位",
    "hiragana": "たんい",
    "nghiatiengviet": "đơn vị, tín chỉ"
},
{
    "kanji": "単純",
    "hiragana": "たんじゅん",
    "nghiatiengviet": "đơn thuần"
},
{
    "kanji": "複数",
    "hiragana": "ふくすう",
    "nghiatiengviet": "số nhiều, nhiều"
},
{
    "kanji": "複雑",
    "hiragana": "ふくざつ",
    "nghiatiengviet": "sự phức tạp"
},
{
    "kanji": "全然",
    "hiragana": "ぜんぜん",
    "nghiatiengviet": "hoàn toàn"
},
{
    "kanji": "全体",
    "hiragana": "ぜんたい",
    "nghiatiengviet": "toàn bộ"
},
{
    "kanji": "安全",
    "hiragana": "あんぜん",
    "nghiatiengviet": "sự an toàn"
},
{
    "kanji": "全部",
    "hiragana": "ぜんぶ",
    "nghiatiengviet": "Tất cả"
},
{
    "kanji": "以来",
    "hiragana": "いらい",
    "nghiatiengviet": "kể từ đó trở đi"
},
{
    "kanji": "以下",
    "hiragana": "いか",
    "nghiatiengviet": "ít hơn, dưới"
},
{
    "kanji": "以外",
    "hiragana": "いがい",
    "nghiatiengviet": "ngoại trừ"
},
{
    "kanji": "以上",
    "hiragana": "いじょう",
    "nghiatiengviet": "trở lên, nhiều hơn"
},
{
    "kanji": "以内",
    "hiragana": "いない",
    "nghiatiengviet": "ở trong"
},
{
    "kanji": "未満",
    "hiragana": "みまん",
    "nghiatiengviet": "ít hơn, không đủ"
},
{
    "kanji": "不満",
    "hiragana": "ふまん",
    "nghiatiengviet": "sự không bằng lòng"
},
{
    "kanji": "満足",
    "hiragana": "まんぞく",
    "nghiatiengviet": "sự hài lòng"
},
{
    "kanji": "満点",
    "hiragana": "まんてん",
    "nghiatiengviet": "điểm tối đa"
},
{
    "kanji": "未来",
    "hiragana": "みらい",
    "nghiatiengviet": "tương lai"
},
{
    "kanji": "未婚",
    "hiragana": "みこん",
    "nghiatiengviet": "chưa lập gia đình"
},
{
    "kanji": "無駄",
    "hiragana": "むだ",
    "nghiatiengviet": "sự vô ích"
},
{
    "kanji": "無料",
    "hiragana": "むりょう",
    "nghiatiengviet": "miễn phí"
},
{
    "kanji": "無事",
    "hiragana": "ぶじ",
    "nghiatiengviet": "vô sự, bình an"
},
{
    "kanji": "非常に",
    "hiragana": "ひじょうに",
    "nghiatiengviet": "vô cùng"
},

    {
        "kanji": "一杯",
        "hiragana": "いっぱい",
        "nghiatiengviet": "rát nhiều, no, (mở) toang"
    },
    {
        "kanji": "ぎりぎり",
        "hiragana": "ぎりぎり",
        "nghiatiengviet": "vừa, sát giờ, vừa đủ"
    },
    {
        "kanji": "ぴったり",
        "hiragana": "ぴったり",
        "nghiatiengviet": "vừa đúng, vừa vặn, (dừng, bỏ) hẳn"
    },
    {
        "kanji": "大抵",
        "hiragana": "たいてい",
        "nghiatiengviet": "thông thường, đại đa số"
    },
    {
        "kanji": "同時に",
        "hiragana": "どうじに",
        "nghiatiengviet": "cùng lúc, đồng thời"
    },
    {
        "kanji": "前もって",
        "hiragana": "まえもって",
        "nghiatiengviet": "trước"
    },
    {
        "kanji": "すぐ",
        "hiragana": "すぐ",
        "nghiatiengviet": "ngay"
    },
    {
        "kanji": "もうすぐ",
        "hiragana": "もうすぐ",
        "nghiatiengviet": "sắp"
    },
    {
        "kanji": "突然",
        "hiragana": "とつぜん",
        "nghiatiengviet": "đột ngột"
    },
    {
        "kanji": "あっと言う間",
        "hiragana": "あっというま",
        "nghiatiengviet": "chẳng mấy chốc"
    },
    {
        "kanji": "いつの間にか",
        "hiragana": "いつのまにか",
        "nghiatiengviet": "từ lúc nào"
    },
    {
        "kanji": "しばらく",
        "hiragana": "しばらく",
        "nghiatiengviet": "một chút, một thời gian"
    },
    {
        "kanji": "ずっと",
        "hiragana": "ずっと",
        "nghiatiengviet": "hơn hẳn, rất, liên tục"
    },
    {
        "kanji": "相変わらず",
        "hiragana": "あいかわらず",
        "nghiatiengviet": "vẫn (như trước)"
    },
    {
        "kanji": "次々に",
        "hiragana": "つぎつぎに",
        "nghiatiengviet": "liên tục"
    },
    {
        "kanji": "どんどん",
        "hiragana": "どんどん",
        "nghiatiengviet": "nhanh, nhiều nữa, ầm ầm"
    },
    {
        "kanji": "ますます",
        "hiragana": "ますます",
        "nghiatiengviet": "càng lúc càng, càng ngày càng"
    },
    {
        "kanji": "やっと",
        "hiragana": "やっと",
        "nghiatiengviet": "cuối cùng, chỉ vừa đủ"
    },
    {
        "kanji": "とうとう",
        "hiragana": "とうとう",
        "nghiatiengviet": "cuối cùng cũng đến lúc, cuối cùng thì"
    },
    {
        "kanji": "ついに",
        "hiragana": "ついに",
        "nghiatiengviet": "cuối cùng thì"
    },
    {
        "kanji": "もちろん",
        "hiragana": "もちろん",
        "nghiatiengviet": "tất nhiên"
    },
    {
        "kanji": "やはり",
        "hiragana": "やはり",
        "nghiatiengviet": "như dự đoán, như định lúc đầu"
    },
    {
        "kanji": "きっと",
        "hiragana": "きっと",
        "nghiatiengviet": "nhất định"
    },
    {
        "kanji": "是非",
        "hiragana": "ぜひ",
        "nghiatiengviet": "rất, nhất định"
    },
    {
        "kanji": "なるべく",
        "hiragana": "なるべく",
        "nghiatiengviet": "cố gắng"
    },
    {
        "kanji": "案外",
        "hiragana": "あんがい",
        "nghiatiengviet": "không ngờ"
    },
    {
        "kanji": "もしかすると",
        "hiragana": "もしかすると",
        "nghiatiengviet": "có thể, hay là"
    },
    {
        "kanji": "まさか",
        "hiragana": "まさか",
        "nghiatiengviet": "khó tin, không thể (nghĩ là)"
    },
    {
        "kanji": "うっかり",
        "hiragana": "うっかり",
        "nghiatiengviet": "quên khuấy"
    },
    {
        "kanji": "つい",
        "hiragana": "つい",
        "nghiatiengviet": "không chủ định, theo thói quen"
    },
    {
        "kanji": "思わず",
        "hiragana": "おもわず",
        "nghiatiengviet": "theo phản xạ tự nhiên"
    },
    {
        "kanji": "ほっと",
        "hiragana": "ほっと",
        "nghiatiengviet": "nhẹ nhõm"
    },
    {
        "kanji": "いらいら",
        "hiragana": "いらいら",
        "nghiatiengviet": "bực tức"
    },
    {
        "kanji": "のんびり",
        "hiragana": "のんびり",
        "nghiatiengviet": "thu thả, thong thả"
    },
    {
        "kanji": "実は",
        "hiragana": "じつは",
        "nghiatiengviet": "thật ra"
    },
    
    {
        "kanji": "読書",
        "hiragana": "どくしょ",
        "nghiatiengviet": "đọc sách"
    },
    {
        "kanji": "演奏",
        "hiragana": "えんそう",
        "nghiatiengviet": "diễn tấu"
    },
    {
        "kanji": "芸術",
        "hiragana": "げいじゅつ",
        "nghiatiengviet": "nghệ thuật"
    },
    {
        "kanji": "検査",
        "hiragana": "けんさ",
        "nghiatiengviet": "xét nghiệm, kiểm tra"
    },
    {
        "kanji": "血液",
        "hiragana": "けつえき",
        "nghiatiengviet": "máu"
    },
    {
        "kanji": "治療",
        "hiragana": "ちりょう",
        "nghiatiengviet": "chữa bệnh"
    },
    {
        "kanji": "症状",
        "hiragana": "しょうじょう",
        "nghiatiengviet": "triệu chứng"
    },
    {
        "kanji": "予防",
        "hiragana": "よぼう",
        "nghiatiengviet": "phòng ngừa"
    },
    {
        "kanji": "栄養",
        "hiragana": "えいよう",
        "nghiatiengviet": "dinh dưỡng"
    },
    {
        "kanji": "手術",
        "hiragana": "しゅじゅつ",
        "nghiatiengviet": "phẫu thuật"
    },
    {
        "kanji": "死亡",
        "hiragana": "しぼう",
        "nghiatiengviet": "tử vong"
    },
    {
        "kanji": "命",
        "hiragana": "いのち",
        "nghiatiengviet": "tính mạng"
    },
    {
        "kanji": "一生",
        "hiragana": "いっしょう",
        "nghiatiengviet": "cuộc đời, cả đời"
    },
    {
        "kanji": "誤解",
        "hiragana": "ごかい",
        "nghiatiengviet": "hiểu lầm"
    },
    {
        "kanji": "後悔",
        "hiragana": "こうかい",
        "nghiatiengviet": "hối tiếc"
    },
    {
        "kanji": "訳",
        "hiragana": "わけ",
        "nghiatiengviet": "lí do, ý nghĩa"
    },
    {
        "kanji": "態度",
        "hiragana": "たいど",
        "nghiatiengviet": "thái độ"
    },
    {
        "kanji": "癖",
        "hiragana": "くせ",
        "nghiatiengviet": "thói quen"
    },
    {
        "kanji": "礼儀",
        "hiragana": "れいぎ",
        "nghiatiengviet": "phép lịch sự"
    },
    {
        "kanji": "文句",
        "hiragana": "もんく",
        "nghiatiengviet": "phàn nàn, lời hát, lời văn"
    },
    {
        "kanji": "表情",
        "hiragana": "ひょうじょう",
        "nghiatiengviet": "vẻ mặt"
    },
    {
        "kanji": "表面",
        "hiragana": "ひょうめん",
        "nghiatiengviet": "bề mặt, bề ngoài"
    },
    {
        "kanji": "禁煙",
        "hiragana": "きんえん",
        "nghiatiengviet": "cấm hút thuốc"
    },
    {
        "kanji": "禁止",
        "hiragana": "きんし",
        "nghiatiengviet": "cấm"
    },
    {
        "kanji": "完成",
        "hiragana": "かんせい",
        "nghiatiengviet": "hoàn thành"
    },
    {
        "kanji": "課題",
        "hiragana": "かだい",
        "nghiatiengviet": "việc phải làm, bài tập"
    },
    {
        "kanji": "例外",
        "hiragana": "れいがい",
        "nghiatiengviet": "ngoại lệ"
    },
    {
        "kanji": "基本",
        "hiragana": "きほん",
        "nghiatiengviet": "cái cơ bản"
    },
    {
        "kanji": "記録",
        "hiragana": "きろく",
        "nghiatiengviet": "biên bản, ký lục"
    },
    {
        "kanji": "状態",
        "hiragana": "じょうたい",
        "nghiatiengviet": "tình trạng, trạng thái"
    },
    {
        "kanji": "出来事",
        "hiragana": "できごと",
        "nghiatiengviet": "sự việc"
    },
    {
        "kanji": "場面",
        "hiragana": "ばめん",
        "nghiatiengviet": "cảnh"
    },
    {
        "kanji": "機会",
        "hiragana": "きかい",
        "nghiatiengviet": "cơ hội"
    },
    {
        "kanji": "距離",
        "hiragana": "きょり",
        "nghiatiengviet": "cự li"
    },
    {
        "kanji": "提案",
        "hiragana": "ていあん",
        "nghiatiengviet": "đề án"
    },
    {
        "kanji": "やり取り",
        "hiragana": "やりとり",
        "nghiatiengviet": "trao đổi"
    },
    {
        "kanji": "知識",
        "hiragana": "ちしき",
        "nghiatiengviet": "tri thức"
    },
    {
        "kanji": "実力",
        "hiragana": "じつりょく",
        "nghiatiengviet": "thực lực"
    },
    {
        "kanji": "手段",
        "hiragana": "しゅだん",
        "nghiatiengviet": "phương tiện, biện pháp"
    },
    {
        "kanji": "代表",
        "hiragana": "だいひょう",
        "nghiatiengviet": "đại diện"
    },
    
    {
        "kanji": "影響",
        "hiragana": "えいきょう",
        "nghiatiengviet": "ảnh hưởng"
    },
    {
        "kanji": "効果",
        "hiragana": "こうか",
        "nghiatiengviet": "hiệu quả"
    },
    {
        "kanji": "印象",
        "hiragana": "いんしょう",
        "nghiatiengviet": "ấn tượng"
    },
    {
        "kanji": "印",
        "hiragana": "しるし",
        "nghiatiengviet": "ký hiệu, con dấu, biểu tượng"
    },
    {
        "kanji": "合図",
        "hiragana": "あいず",
        "nghiatiengviet": "tín hiệu"
    },
    {
        "kanji": "共通",
        "hiragana": "きょうつう",
        "nghiatiengviet": "chung"
    },
    {
        "kanji": "強調",
        "hiragana": "きょうちょう",
        "nghiatiengviet": "nhấn mạnh"
    },
    {
        "kanji": "省略",
        "hiragana": "しょうりゃく",
        "nghiatiengviet": "lược bỏ"
    },
    {
        "kanji": "挑戦",
        "hiragana": "ちょうせん",
        "nghiatiengviet": "thử sức, thử thách"
    },
    {
        "kanji": "やる気",
        "hiragana": "やるき",
        "nghiatiengviet": "lòng ham muốn, động lực"
    },
    {
        "kanji": "勇気",
        "hiragana": "ゆうき",
        "nghiatiengviet": "dũng khí"
    },
    {
        "kanji": "資格",
        "hiragana": "しかく",
        "nghiatiengviet": "chứng chỉ, điều kiện, tư cách"
    },
    {
        "kanji": "申請",
        "hiragana": "しんせい",
        "nghiatiengviet": "nộp đơn xin"
    },
    {
        "kanji": "本人",
        "hiragana": "ほんにん",
        "nghiatiengviet": "bản thân"
    },
    {
        "kanji": "契約",
        "hiragana": "けいやく",
        "nghiatiengviet": "hợp đồng"
    },
    {
        "kanji": "証明",
        "hiragana": "しょうめい",
        "nghiatiengviet": "chứng minh"
    },
    {
        "kanji": "変更",
        "hiragana": "へんこう",
        "nghiatiengviet": "thay đổi"
    },
    {
        "kanji": "保存",
        "hiragana": "ほぞん",
        "nghiatiengviet": "bảo tồn, lưu trữ"
    },
    {
        "kanji": "保護",
        "hiragana": "ほご",
        "nghiatiengviet": "bảo vệ, trông giữ, bảo đảm"
    },
    {
        "kanji": "環境",
        "hiragana": "かんきょう",
        "nghiatiengviet": "môi trường"
    },
    {
        "kanji": "資源",
        "hiragana": "しげん",
        "nghiatiengviet": "tài nguyên, nguồn lực"
    },
    {
        "kanji": "不足",
        "hiragana": "ふそく",
        "nghiatiengviet": "thiếu"
    },
    {
        "kanji": "平均",
        "hiragana": "へいきん",
        "nghiatiengviet": "bình quân, đồng đều"
    },
    {
        "kanji": "割合",
        "hiragana": "わりあい",
        "nghiatiengviet": "tỷ lệ, tương đối"
    },
    {
        "kanji": "商売",
        "hiragana": "しょうばい",
        "nghiatiengviet": "kinh doanh"
    },
    
    {
        "kanji": "商品",
        "hiragana": "しょうひん",
        "nghiatiengviet": "hàng hóa"
    },
    {
        "kanji": "質",
        "hiragana": "しつ",
        "nghiatiengviet": "chất lượng"
    },
    {
        "kanji": "型",
        "hiragana": "かた",
        "nghiatiengviet": "mẫu, đời"
    },
    {
        "kanji": "生産",
        "hiragana": "せいさん",
        "nghiatiengviet": "sản xuất"
    },
    {
        "kanji": "消費",
        "hiragana": "しょうひ",
        "nghiatiengviet": "tiêu dùng, tiêu thụ"
    },
    {
        "kanji": "物価",
        "hiragana": "ぶっか",
        "nghiatiengviet": "vật giá"
    },
    {
        "kanji": "倒産",
        "hiragana": "とうさん",
        "nghiatiengviet": "phá sản"
    },
    {
        "kanji": "携帯",
        "hiragana": "けいたい",
        "nghiatiengviet": "mang theo người"
    },
    {
        "kanji": "現代",
        "hiragana": "げんだい",
        "nghiatiengviet": "thời nay, hiện đại"
    },
    {
        "kanji": "世紀",
        "hiragana": "せいき",
        "nghiatiengviet": "thế kỷ"
    },
    {
        "kanji": "文化",
        "hiragana": "ぶんか",
        "nghiatiengviet": "văn hóa"
    },
    {
        "kanji": "都市",
        "hiragana": "とし",
        "nghiatiengviet": "đô thị"
    },
    {
        "kanji": "地方",
        "hiragana": "ちほう",
        "nghiatiengviet": "địa phương"
    },
    {
        "kanji": "戦争",
        "hiragana": "せんそう",
        "nghiatiengviet": "chiến tranh"
    },
    {
        "kanji": "平和",
        "hiragana": "へいわ",
        "nghiatiengviet": "hòa bình"
    },
    
    {
        "kanji": "上る",
        "hiragana": "のぼる",
        "nghiatiengviet": "lên"
    },
    {
        "kanji": "下る",
        "hiragana": "くだる",
        "nghiatiengviet": "xuống"
    },
    {
        "kanji": "進む",
        "hiragana": "すすむ",
        "nghiatiengviet": "tiến lên, tiến triển, phát triển, nhanh, học lên"
    },
    {
        "kanji": "進める",
        "hiragana": "すすめる",
        "nghiatiengviet": "tiến lên, tiến hành, cho nhanh lên"
    },
    {
        "kanji": "通る",
        "hiragana": "とおる",
        "nghiatiengviet": "đi qua, quá"
    },
    {
        "kanji": "通す",
        "hiragana": "とおす",
        "nghiatiengviet": "đi qua, nấu, qua được, được ủng hộ"
    },
    {
        "kanji": "越える/超える",
        "hiragana": "こえる",
        "nghiatiengviet": "vượt qua"
    },
    {
        "kanji": "過ぎる",
        "hiragana": "すぎる",
        "nghiatiengviet": "đi qua, quá"
    },
    {
        "kanji": "過ごす",
        "hiragana": "すごす",
        "nghiatiengviet": "sống qua, tiêu thời gian"
    },
    {
        "kanji": "移る",
        "hiragana": "うつる",
        "nghiatiengviet": "chuyển, lây"
    },
    {
        "kanji": "移す",
        "hiragana": "うつす",
        "nghiatiengviet": "chuyển, làm lây"
    },
    {
        "kanji": "連れる",
        "hiragana": "つれる",
        "nghiatiengviet": "dẫn đi"
    },
    {
        "kanji": "寄る",
        "hiragana": "よる",
        "nghiatiengviet": "đến gần, lệch, ghé qua"
    },
    {
        "kanji": "寄せる",
        "hiragana": "よせる",
        "nghiatiengviet": "ghé"
    },
    {
        "kanji": "与える",
        "hiragana": "あたえる",
        "nghiatiengviet": "cấp, cho, gây"
    },
    {
        "kanji": "得る",
        "hiragana": "える",
        "nghiatiengviet": "lấy, được"
    },
    {
        "kanji": "向く",
        "hiragana": "むく",
        "nghiatiengviet": "hướng, phù hợp"
    },
    {
        "kanji": "向ける",
        "hiragana": "むける",
        "nghiatiengviet": "nhắm vào, hướng ra/tới"
    },
    {
        "kanji": "勧める",
        "hiragana": "すすめる",
        "nghiatiengviet": "rủ, khuyên nhủ, chào hàng"
    },
    {
        "kanji": "薦める",
        "hiragana": "すすめる",
        "nghiatiengviet": "giới thiệu, tiến cử"
    },
    {
        "kanji": "任せる",
        "hiragana": "まかせる",
        "nghiatiengviet": "giao cho"
    },
    {
        "kanji": "守る",
        "hiragana": "まもる",
        "nghiatiengviet": "tuân thủ, bảo vệ"
    },
    {
        "kanji": "争う",
        "hiragana": "あらそう",
        "nghiatiengviet": "cãi cọ, tranh giành"
    },
    {
        "kanji": "望む",
        "hiragana": "のぞむ",
        "nghiatiengviet": "mong muốn, hy vọng"
    },
    {
        "kanji": "信じる",
        "hiragana": "しんじる",
        "nghiatiengviet": "tin"
    },
    {
        "kanji": "通じる",
        "hiragana": "つうじる",
        "nghiatiengviet": "được hiểu cho, dẫn đến, nối máy"
    },
    {
        "kanji": "飽きる",
        "hiragana": "あきる",
        "nghiatiengviet": "chán"
    },
    {
        "kanji": "思いつく",
        "hiragana": "おもいつく",
        "nghiatiengviet": "nghĩ ra"
    },
    {
        "kanji": "思いやる",
        "hiragana": "おもいやる",
        "nghiatiengviet": "thương, quan tâm"
    },
    {
        "kanji": "熱中する",
        "hiragana": "ねっちゅうする",
        "nghiatiengviet": "mê, hút hồn"
    },
    {
        "kanji": "暮らす",
        "hiragana": "くらす",
        "nghiatiengviet": "sống"
    },
    {
        "kanji": "巻く",
        "hiragana": "まく",
        "nghiatiengviet": "quấn, cuốn"
    },
    {
        "kanji": "結ぶ",
        "hiragana": "むすぶ",
        "nghiatiengviet": "buộc, nối, ký (hợp đồng)"
    },
    {
        "kanji": "済む",
        "hiragana": "すむ",
        "nghiatiengviet": "xong, là đủ"
    },
    {
        "kanji": "済ませる/済ます",
        "hiragana": "すませる/すます",
        "nghiatiengviet": "xong, làm với"
    },
    {
        "kanji": "出来る",
        "hiragana": "できる",
        "nghiatiengviet": "được xây, phát sinh, làm được"
    },
    {
        "kanji": "切れる",
        "hiragana": "きれる",
        "nghiatiengviet": "cắt được, hết"
    },
    {
        "kanji": "切らす",
        "hiragana": "きらす",
        "nghiatiengviet": "(để) hết"
    },
    
    {
        "kanji": "伝わる",
        "hiragana": "つたわる",
        "nghiatiengviet": "được truyền đi, lan truyền"
    },
    {
        "kanji": "伝える",
        "hiragana": "つたえる",
        "nghiatiengviet": "truyền đạt/dạy"
    },
    {
        "kanji": "続く",
        "hiragana": "つづく",
        "nghiatiengviet": "liên tục, nối liền"
    },
    {
        "kanji": "続ける",
        "hiragana": "つづける",
        "nghiatiengviet": "tiếp tục, liền"
    },
    {
        "kanji": "つながる",
        "hiragana": "つながる",
        "nghiatiengviet": "nối liền, dẫn đến"
    },
    {
        "kanji": "つなぐ",
        "hiragana": "つなぐ",
        "nghiatiengviet": "nối liền, nắm (tay)"
    },
    {
        "kanji": "つなげる",
        "hiragana": "つなげる",
        "nghiatiengviet": "nối tiếp"
    },
    {
        "kanji": "伸びる",
        "hiragana": "のびる",
        "nghiatiengviet": "dài ra, cao lên, giãn"
    },
    {
        "kanji": "伸ばす",
        "hiragana": "のばす",
        "nghiatiengviet": "để dài ra/cao lên, làm phẳng, kéo dài"
    },
    {
        "kanji": "延びる",
        "hiragana": "のびる",
        "nghiatiengviet": "(được) kéo dài"
    },
    {
        "kanji": "延ばす",
        "hiragana": "のばす",
        "nghiatiengviet": "kéo dài"
    },
    {
        "kanji": "重なる",
        "hiragana": "かさなる",
        "nghiatiengviet": "chập vào nhau, trùng"
    },
    {
        "kanji": "重ねる",
        "hiragana": "かさねる",
        "nghiatiengviet": "chồng lên, tích lũy"
    },
    {
        "kanji": "広がる",
        "hiragana": "ひろがる",
        "nghiatiengviet": "được mở rộng, lan rộng"
    },
    {
        "kanji": "広げる",
        "hiragana": "ひろげる",
        "nghiatiengviet": "mở rộng"
    },
    {
        "kanji": "載る",
        "hiragana": "のる",
        "nghiatiengviet": "được cho lên, được đăng"
    },
    {
        "kanji": "載せる",
        "hiragana": "のせる",
        "nghiatiengviet": "cho lên, đăng"
    },
    {
        "kanji": "そろう",
        "hiragana": "そろう",
        "nghiatiengviet": "đông đủ, đủ bộ, hòa đồng"
    },
    {
        "kanji": "そろえる",
        "hiragana": "そろえる",
        "nghiatiengviet": "tập hợp đủ, làm cho ngay ngắn"
    },
    {
        "kanji": "まとまる",
        "hiragana": "まとまる",
        "nghiatiengviet": "thống nhất, hợp nhất, có hệ thống"
    },
    {
        "kanji": "まとめる",
        "hiragana": "まとめる",
        "nghiatiengviet": "tập hợp, thu dọn, tóm tắt"
    },
    {
        "kanji": "付く",
        "hiragana": "つく",
        "nghiatiengviet": "dính, có được, kèm theo"
    },
    {
        "kanji": "付ける",
        "hiragana": "つける",
        "nghiatiengviet": "bôi, giành được, bố trí"
    },
    {
        "kanji": "たまる",
        "hiragana": "たまる",
        "nghiatiengviet": "tích tụ"
    },
    {
        "kanji": "ためる",
        "hiragana": "ためる",
        "nghiatiengviet": "tích lũy, để tồn đọng"
    },
    {
        "kanji": "交じる/混じる",
        "hiragana": "まじる",
        "nghiatiengviet": "lẫn vào, xen lẫn"
    },
    {
        "kanji": "交ざる/混ざる",
        "hiragana": "まざる",
        "nghiatiengviet": "trộn lẫn"
    },
    {
        "kanji": "交ぜる/混ぜる",
        "hiragana": "まぜる",
        "nghiatiengviet": "trộn lẫn"
    },
    {
        "kanji": "解ける/溶ける",
        "hiragana": "とける",
        "nghiatiengviet": "được giải (quyết), tan ra"
    },
    {
        "kanji": "解く/溶く/溶かす",
        "hiragana": "とく/とかす",
        "nghiatiengviet": "giải (quyết), làm tan"
    },
    {
        "kanji": "含む",
        "hiragana": "ふくむ",
        "nghiatiengviet": "có, bao gồm"
    },
    {
        "kanji": "含める",
        "hiragana": "ふくめる",
        "nghiatiengviet": "bao gồm"
    },
    {
        "kanji": "抜ける",
        "hiragana": "ぬける",
        "nghiatiengviet": "rụng, hết, thiếu mất"
    },
    {
        "kanji": "抜く",
        "hiragana": "ぬく",
        "nghiatiengviet": "nhổ, tháo, thư giãn, bỏ qua"
    },
    {
        "kanji": "現れる",
        "hiragana": "あらわれる",
        "nghiatiengviet": "xuất hiện, hiện ra"
    },
    {
        "kanji": "現す",
        "hiragana": "あらわす",
        "nghiatiengviet": "lộ, lệ, cho thấy"
    },
    {
        "kanji": "表れる",
        "hiragana": "あらわれる",
        "nghiatiengviet": "biểu hiện"
    },
    {
        "kanji": "表す",
        "hiragana": "あらわす",
        "nghiatiengviet": "biểu thị"
    },
    {
        "kanji": "散る",
        "hiragana": "ちる",
        "nghiatiengviet": "rơi rụng"
    },
    {
        "kanji": "散らす",
        "hiragana": "ちらす",
        "nghiatiengviet": "làm rơi rụng"
    },
    {
        "kanji": "明ける",
        "hiragana": "あける",
        "nghiatiengviet": "hết (đêm, mùa mưa), sang (năm mới)"
    },
    {
        "kanji": "差す",
        "hiragana": "さす",
        "nghiatiengviet": "tỏa, giơ, nhỏ"
    },
    
    {
        "kanji": "パートナー",
        "hiragana": "パートナー",
        "nghiatiengviet": "đối tác"
    },
    {
        "kanji": "リーダー",
        "hiragana": "リーダー",
        "nghiatiengviet": "lãnh đạo"
    },
    {
        "kanji": "ボランティア",
        "hiragana": "ボランティア",
        "nghiatiengviet": "tình nguyện viên"
    },
    {
        "kanji": "コミュニケーション",
        "hiragana": "コミュニケーション",
        "nghiatiengviet": "giao tiếp, giao lưu"
    },
    
    {
        "kanji": "ユーモア",
        "hiragana": "ユーモア",
        "nghiatiengviet": "sự hài hước"
    },
    {
        "kanji": "ショック",
        "hiragana": "ショック",
        "nghiatiengviet": "sốc, xung lực"
    },
    {
        "kanji": "ストレス",
        "hiragana": "ストレス",
        "nghiatiengviet": "căng thẳng tinh thần"
    },
    {
        "kanji": "バランス",
        "hiragana": "バランス",
        "nghiatiengviet": "cân bằng"
    },
    {
        "kanji": "レベル",
        "hiragana": "レベル",
        "nghiatiengviet": "trình độ, mức"
    },
    {
        "kanji": "アップ",
        "hiragana": "アップ",
        "nghiatiengviet": "tăng lên, sát lại"
    },
    {
        "kanji": "ダウン",
        "hiragana": "ダウン",
        "nghiatiengviet": "giảm đi, ốm"
    },
    {
        "kanji": "プラス",
        "hiragana": "プラス",
        "nghiatiengviet": "cộng thêm"
    },
    {
        "kanji": "マイナス",
        "hiragana": "マイナス",
        "nghiatiengviet": "trừ đi, âm, bất lợi"
    },
    {
        "kanji": "イメージ",
        "hiragana": "イメージ",
        "nghiatiengviet": "hình dung, tưởng tượng"
    },
    {
        "kanji": "コンテスト",
        "hiragana": "コンテスト",
        "nghiatiengviet": "cuộc thi"
    },
    {
        "kanji": "マスコミ",
        "hiragana": "マスコミ",
        "nghiatiengviet": "giới truyền thông, báo chí"
    },
    {
        "kanji": "プライバシー",
        "hiragana": "プライバシー",
        "nghiatiengviet": "sự riêng tư"
    },
    {
        "kanji": "オフィス",
        "hiragana": "オフィス",
        "nghiatiengviet": "văn phòng"
    },
    {
        "kanji": "ルール",
        "hiragana": "ルール",
        "nghiatiengviet": "luật lệ"
    },
    {
        "kanji": "マナー",
        "hiragana": "マナー",
        "nghiatiengviet": "lối nghi, phép ứng xử"
    },
    {
        "kanji": "ミス",
        "hiragana": "ミス",
        "nghiatiengviet": "lỗi, sơ suất"
    },
    {
        "kanji": "スケジュール",
        "hiragana": "スケジュール",
        "nghiatiengviet": "lịch làm việc"
    },
    {
        "kanji": "タイトル",
        "hiragana": "タイトル",
        "nghiatiengviet": "chủ đề"
    },
    {
        "kanji": "テーマ",
        "hiragana": "テーマ",
        "nghiatiengviet": "đề tài"
    },
    {
        "kanji": "ストーリー",
        "hiragana": "ストーリー",
        "nghiatiengviet": "câu chuyện, cốt truyện"
    },
    {
        "kanji": "ヒット",
        "hiragana": "ヒット",
        "nghiatiengviet": "bán chạy, trúng thị hiếu"
    },
    {
        "kanji": "ブランド",
        "hiragana": "ブランド",
        "nghiatiengviet": "hàng hiệu, thương hiệu"
    },
    {
        "kanji": "レンタル",
        "hiragana": "レンタル",
        "nghiatiengviet": "thuê, cho thuê"
    },
    {
        "kanji": "リサイクル",
        "hiragana": "リサイクル",
        "nghiatiengviet": "tái sử dụng, tái chế"
    },
    {
        "kanji": "ラベル",
        "hiragana": "ラベル",
        "nghiatiengviet": "nhãn hiệu"
    },
    {
        "kanji": "タイプ",
        "hiragana": "タイプ",
        "nghiatiengviet": "kiểu, hình mẫu"
    },
    {
        "kanji": "スタイル",
        "hiragana": "スタイル",
        "nghiatiengviet": "dáng vẻ"
    },
    {
        "kanji": "セット",
        "hiragana": "セット",
        "nghiatiengviet": "một bộ, cài đặt"
    },
    {
        "kanji": "ウイルス",
        "hiragana": "ウイルス",
        "nghiatiengviet": "vi-rút"
    },
    {
        "kanji": "ロボット",
        "hiragana": "ロボット",
        "nghiatiengviet": "người máy, rô-bốt"
    },
    {
        "kanji": "エネルギー",
        "hiragana": "エネルギー",
        "nghiatiengviet": "năng lượng"
    },
    {
        "kanji": "デジタル",
        "hiragana": "デジタル",
        "nghiatiengviet": "kỹ thuật số"
    },
    {
        "kanji": "マイク",
        "hiragana": "マイク",
        "nghiatiengviet": "mi-crô-rô"
    },
    {
        "kanji": "ブレーキ",
        "hiragana": "ブレーキ",
        "nghiatiengviet": "phanh"
    },
    {
        "kanji": "ペンキ",
        "hiragana": "ペンキ",
        "nghiatiengviet": "sơn"
    },
    
    {
        "kanji": "炊ける",
        "hiragana": "たける",
        "nghiatiengviet": "(cơm) được nấu"
    },
    {
        "kanji": "炊く",
        "hiragana": "たく",
        "nghiatiengviet": "nấu (cơm)"
    },
    {
        "kanji": "煮える",
        "hiragana": "にえる",
        "nghiatiengviet": "được nấu/ninh/hầm"
    },
    {
        "kanji": "煮る",
        "hiragana": "にる",
        "nghiatiengviet": "nấu, ninh, hầm"
    },
    {
        "kanji": "炒める",
        "hiragana": "いためる",
        "nghiatiengviet": "xào"
    },
    {
        "kanji": "焼ける",
        "hiragana": "やける",
        "nghiatiengviet": "được rán/rang"
    },
    {
        "kanji": "焼く",
        "hiragana": "やく",
        "nghiatiengviet": "rán, rang"
    },
    {
        "kanji": "ゆでる",
        "hiragana": "ゆでる",
        "nghiatiengviet": "luộc"
    },
    {
        "kanji": "揚げる",
        "hiragana": "あげる",
        "nghiatiengviet": "chiên"
    },
    {
        "kanji": "蒸す",
        "hiragana": "むす",
        "nghiatiengviet": "hấp"
    },
    [
    {
        "kanji": "ユーモア",
        "hiragana": "ユーモア",
        "nghiatiengviet": "sự hài hước"
    },
    {
        "kanji": "ショック",
        "hiragana": "ショック",
        "nghiatiengviet": "sốc, xung lực"
    },
    {
        "kanji": "ストレス",
        "hiragana": "ストレス",
        "nghiatiengviet": "căng thẳng tinh thần"
    },
    {
        "kanji": "バランス",
        "hiragana": "バランス",
        "nghiatiengviet": "cân bằng"
    },
    {
        "kanji": "レベル",
        "hiragana": "レベル",
        "nghiatiengviet": "trình độ, mức"
    },
    {
        "kanji": "アップ",
        "hiragana": "アップ",
        "nghiatiengviet": "tăng lên, sát lại"
    },
    {
        "kanji": "ダウン",
        "hiragana": "ダウン",
        "nghiatiengviet": "giảm đi, ốm"
    },
    {
        "kanji": "プラス",
        "hiragana": "プラス",
        "nghiatiengviet": "cộng thêm"
    },
    {
        "kanji": "マイナス",
        "hiragana": "マイナス",
        "nghiatiengviet": "trừ đi, âm, bất lợi"
    },
    {
        "kanji": "イメージ",
        "hiragana": "イメージ",
        "nghiatiengviet": "hình dung, tưởng tượng"
    },
    {
        "kanji": "コンテスト",
        "hiragana": "コンテスト",
        "nghiatiengviet": "cuộc thi"
    },
    {
        "kanji": "マスコミ",
        "hiragana": "マスコミ",
        "nghiatiengviet": "giới truyền thông, báo chí"
    },
    {
        "kanji": "プライバシー",
        "hiragana": "プライバシー",
        "nghiatiengviet": "sự riêng tư"
    },
    {
        "kanji": "オフィス",
        "hiragana": "オフィス",
        "nghiatiengviet": "văn phòng"
    },
    {
        "kanji": "ルール",
        "hiragana": "ルール",
        "nghiatiengviet": "luật lệ"
    },
    {
        "kanji": "マナー",
        "hiragana": "マナー",
        "nghiatiengviet": "lối nghi, phép ứng xử"
    },
    {
        "kanji": "ミス",
        "hiragana": "ミス",
        "nghiatiengviet": "lỗi, sơ suất"
    },
    {
        "kanji": "スケジュール",
        "hiragana": "スケジュール",
        "nghiatiengviet": "lịch làm việc"
    },
    {
        "kanji": "タイトル",
        "hiragana": "タイトル",
        "nghiatiengviet": "chủ đề"
    },
    {
        "kanji": "テーマ",
        "hiragana": "テーマ",
        "nghiatiengviet": "đề tài"
    },
    {
        "kanji": "ストーリー",
        "hiragana": "ストーリー",
        "nghiatiengviet": "câu chuyện, cốt truyện"
    },
    {
        "kanji": "ヒット",
        "hiragana": "ヒット",
        "nghiatiengviet": "bán chạy, trúng thị hiếu"
    },
    {
        "kanji": "ブランド",
        "hiragana": "ブランド",
        "nghiatiengviet": "hàng hiệu, thương hiệu"
    },
    {
        "kanji": "レンタル",
        "hiragana": "レンタル",
        "nghiatiengviet": "thuê, cho thuê"
    },
    {
        "kanji": "リサイクル",
        "hiragana": "リサイクル",
        "nghiatiengviet": "tái sử dụng, tái chế"
    },
    {
        "kanji": "ラベル",
        "hiragana": "ラベル",
        "nghiatiengviet": "nhãn hiệu"
    },
    {
        "kanji": "タイプ",
        "hiragana": "タイプ",
        "nghiatiengviet": "kiểu, hình mẫu"
    },
    {
        "kanji": "スタイル",
        "hiragana": "スタイル",
        "nghiatiengviet": "dáng vẻ"
    },
    {
        "kanji": "セット",
        "hiragana": "セット",
        "nghiatiengviet": "một bộ, cài đặt"
    },
    {
        "kanji": "ウイルス",
        "hiragana": "ウイルス",
        "nghiatiengviet": "vi-rút"
    },
    {
        "kanji": "ロボット",
        "hiragana": "ロボット",
        "nghiatiengviet": "người máy, rô-bốt"
    },
    {
        "kanji": "エネルギー",
        "hiragana": "エネルギー",
        "nghiatiengviet": "năng lượng"
    },
    {
        "kanji": "デジタル",
        "hiragana": "デジタル",
        "nghiatiengviet": "kỹ thuật số"
    },
    {
        "kanji": "マイク",
        "hiragana": "マイク",
        "nghiatiengviet": "mi-crô-rô"
    },
    {
        "kanji": "ブレーキ",
        "hiragana": "ブレーキ",
        "nghiatiengviet": "phanh"
    },
    {
        "kanji": "ペンキ",
        "hiragana": "ペンキ",
        "nghiatiengviet": "sơn"
    },
    {
        "kanji": "炊ける",
        "hiragana": "たける",
        "nghiatiengviet": "(cơm) được nấu"
    },
    {
        "kanji": "炊く",
        "hiragana": "たく",
        "nghiatiengviet": "nấu (cơm)"
    },
    {
        "kanji": "煮える",
        "hiragana": "にえる",
        "nghiatiengviet": "được nấu/ninh/hầm"
    },
    {
        "kanji": "煮る",
        "hiragana": "にる",
        "nghiatiengviet": "nấu, ninh, hầm"
    },
    {
        "kanji": "炒める",
        "hiragana": "いためる",
        "nghiatiengviet": "xào"
    },
    {
        "kanji": "焼ける",
        "hiragana": "やける",
        "nghiatiengviet": "được rán/rang"
    },
    {
        "kanji": "焼く",
        "hiragana": "やく",
        "nghiatiengviet": "rán, rang"
    },
    {
        "kanji": "ゆでる",
        "hiragana": "ゆでる",
        "nghiatiengviet": "luộc"
    },
    {
        "kanji": "揚げる",
        "hiragana": "あげる",
        "nghiatiengviet": "chiên"
    },
    {
        "kanji": "蒸す",
        "hiragana": "むす",
        "nghiatiengviet": "hấp"
    },
    {
        "kanji": "ぐっすり",
        "hiragana": "ぐっすり",
        "nghiatiengviet": "(ngủ) say"
    },
    {
        "kanji": "きちんと",
        "hiragana": "きちんと",
        "nghiatiengviet": "nghiêm chỉnh, hẳn hoi"
    },
    {
        "kanji": "しっかり",
        "hiragana": "しっかり",
        "nghiatiengviet": "chắc, chắc chắn"
    },
    {
        "kanji": "はっきり",
        "hiragana": "はっきり",
        "nghiatiengviet": "rõ, rõ ràng"
    },
    {
        "kanji": "じっと",
        "hiragana": "じっと",
        "nghiatiengviet": "chăm chằm, lâu, yên"
    },
    {
        "kanji": "そっと",
        "hiragana": "そっと",
        "nghiatiengviet": "nhẹ nhàng, kín đáo"
    },
    {
        "kanji": "別々に",
        "hiragana": "べつべつに",
        "nghiatiengviet": "riêng rẽ"
    },
    {
        "kanji": "それぞれ",
        "hiragana": "それぞれ",
        "nghiatiengviet": "từng, mỗi"
    },
    {
        "kanji": "互いに",
        "hiragana": "たがいに",
        "nghiatiengviet": "nhau"
    },
    {
        "kanji": "直接",
        "hiragana": "ちょくせつ",
        "nghiatiengviet": "trực tiếp"
    },
    {
        "kanji": "本当に",
        "hiragana": "ほんとうに",
        "nghiatiengviet": "thật sự, thật ra"
    },
    {
        "kanji": "必ず",
        "hiragana": "かならず",
        "nghiatiengviet": "nhất định, phải"
    },
    {
        "kanji": "絶対(に)",
        "hiragana": "ぜったい(に)",
        "nghiatiengviet": "tuyệt đối, phải"
    },
    {
        "kanji": "特に",
        "hiragana": "とくに",
        "nghiatiengviet": "đặc biệt (là)"
    },
    {
        "kanji": "ただ",
        "hiragana": "ただ",
        "nghiatiengviet": "chỉ, duy nhất"
    },
    {
        "kanji": "少なくとも",
        "hiragana": "すくなくとも",
        "nghiatiengviet": "ít nhất là"
    },
    {
        "kanji": "決して",
        "hiragana": "けっして",
        "nghiatiengviet": "quyết (không)"
    },
    {
        "kanji": "少しも",
        "hiragana": "すこしも",
        "nghiatiengviet": "(không) tí nào"
    },
    {
        "kanji": "ちっとも",
        "hiragana": "ちっとも",
        "nghiatiengviet": "(không) tí gì"
    },
    {
        "kanji": "全く",
        "hiragana": "まったく",
        "nghiatiengviet": "hoàn toàn, thật là"
    },
    {
        "kanji": "とても",
        "hiragana": "とても",
        "nghiatiengviet": "rất"
    },
    {
        "kanji": "どんなに",
        "hiragana": "どんなに",
        "nghiatiengviet": "thế nào"
    },
    {
        "kanji": "どうしても",
        "hiragana": "どうしても",
        "nghiatiengviet": "bằng mọi cách, không thể nào"
    },
    {
        "kanji": "まるで",
        "hiragana": "まるで",
        "nghiatiengviet": "như là, (không) tí nào"
    },
    {
        "kanji": "いったい",
        "hiragana": "いったい",
        "nghiatiengviet": "không hiểu, không biết"
    },
    {
        "kanji": "別に",
        "hiragana": "べつに",
        "nghiatiengviet": "(không) ~ đặc biệt"
    },
    {
        "kanji": "たった",
        "hiragana": "たった",
        "nghiatiengviet": "chỉ có"
    },
    {
        "kanji": "ほんの",
        "hiragana": "ほんの",
        "nghiatiengviet": "chỉ (là), mới chỉ (là)"
    },
    {
        "kanji": "それで",
        "hiragana": "それで",
        "nghiatiengviet": "vì thế, thế thì"
    },
    {
        "kanji": "そこで",
        "hiragana": "そこで",
        "nghiatiengviet": "thế là, vì thế"
    },
    {
        "kanji": "そのうえ",
        "hiragana": "そのうえ",
        "nghiatiengviet": "hơn nữa, ngoài ra"
    },
    {
        "kanji": "また",
        "hiragana": "また",
        "nghiatiengviet": "lại, và"
    },
    {
        "kanji": "または",
        "hiragana": "または",
        "nghiatiengviet": "hoặc là"
    },
    {
        "kanji": "それとも",
        "hiragana": "それとも",
        "nghiatiengviet": "hay là"
    },
    {
        "kanji": "つまり",
        "hiragana": "つまり",
        "nghiatiengviet": "tức là"
    }
]

















];
//từ đây sẽ là kanji 

    