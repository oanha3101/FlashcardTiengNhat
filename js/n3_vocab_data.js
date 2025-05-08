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
    }
];