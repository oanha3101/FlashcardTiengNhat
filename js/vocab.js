document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const flashcardContainer = document.getElementById('flashcardContainer');
    const flashcard = document.getElementById('flashcard');
    const kanjiDisplay = document.getElementById('kanjiDisplay');
    const hiraganaDisplay = document.getElementById('hiraganaDisplay');
    const meaningDisplay = document.getElementById('meaningDisplay');
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
    // --- Thêm cho tìm kiếm bộ từ ---
    const searchWordSetInput = document.getElementById('searchWordSetInput');
    const noSearchResultsMessage = document.getElementById('noSearchResultsMessage');

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
    let wordSets = []; // Sẽ được load từ localStorage
    let currentStudyingSet = null; // Lưu bộ từ đang được xem/học/kiểm tra
    let testQuestions = [];
    let currentTestQuestionIndex = 0;
    let userScore = 0;
    let currentTestConfig = {};
    let answeredQuestions = [];
    let isDarkMode = false;

    // Constants
    const STORAGE_KEY_PREFIX = 'flashcard_mark_';
    const WORD_SETS_STORAGE_KEY = 'flashcard_word_sets';
    const THEME_STORAGE_KEY = 'flashcard_theme';

        function escapeHTML(str) {
        if (typeof str !== 'string') return ''; // Trả về chuỗi rỗng nếu không phải string
        return str.replace(/[&<>"']/g, function (match) {
            // Object map các ký tự cần thay thế với HTML entity của chúng
            const escapeChars = {
                '&': '&',  // Ký tự &
                '<': '<',   // Ký tự <
                '>': '>',   // Ký tự >
                '"': '"', // Ký tự "
                "'": ''  
                              // Hoặc có thể dùng ''' nhưng hỗ trợ trình duyệt cũ không tốt bằng '
            };
            return escapeChars[match]; // Trả về HTML entity tương ứng
        });
    }

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
        if (!card || (!card.kanji && !card.hiragana && !card.nghiatiengviet)) return null; // Thêm nghiatiengviet để đảm bảo có key
        const primaryId = (card.kanji || card.hiragana || 'unknown_card').replace(/\s+/g, '_').substring(0, 50);
        const secondaryId = (card.nghiatiengviet || 'no_meaning').substring(0, 15).replace(/\s+/g, '_');
        return `${STORAGE_KEY_PREFIX}${primaryId}_${secondaryId}`;
    }
    
    function displayError(message) {
        if (errorMessage) {
            errorMessage.textContent = message;
            showScreen('error');
        } else {
            console.error("Error message display element not found. Error:", message);
            alert("Lỗi: " + message);
        }
    }

    async function prepareInitialSetup() {
        showScreen('loading');

        if (typeof N3_VOCAB_DATA !== 'undefined' && Array.isArray(N3_VOCAB_DATA)) {
            fullVocabulary = N3_VOCAB_DATA.map(entry => {
                const storageKey = generateStorageKey(entry);
                const savedMark = storageKey ? localStorage.getItem(storageKey) : null;
                return {
                    ...entry,
                    mark: (savedMark === 'known' || savedMark === 'unknown') ? savedMark : null
                };
            });
        } else {
            console.error("Dữ liệu N3_VOCAB_DATA không được định nghĩa hoặc không phải là mảng.");
            fullVocabulary = [];
        }

        if (fullVocabulary && fullVocabulary.length > 0) {
            loadWordSets(); // Tải bộ từ đã lưu
            showScreen('wordSetManager'); // Hiển thị màn hình quản lý bộ từ sau khi tải

            // Cập nhật các UI elements nếu cần
            if (totalWordsMessage) totalWordsMessage.textContent = `Tổng số từ trong file: ${fullVocabulary.length}`;
            updateWordSetTotalMessage(); 

            // Cập nhật các input.max
            if (endWordInput) endWordInput.max = fullVocabulary.length;
            if (startWordInput) startWordInput.max = fullVocabulary.length;
            if (wordSetStartInput) wordSetStartInput.max = fullVocabulary.length;
            if (wordSetEndInput) wordSetEndInput.max = fullVocabulary.length;
            if (testStartWordInput) testStartWordInput.max = fullVocabulary.length;
            if (testEndWordInput) testEndWordInput.max = fullVocabulary.length;

            // Set default values cho các input nếu cần
            if (endWordInput && !endWordInput.value) endWordInput.value = fullVocabulary.length;
            if (testEndWordInput && !testEndWordInput.value) testEndWordInput.value = fullVocabulary.length;
            if (wordSetEndInput && !wordSetEndInput.value) wordSetEndInput.value = fullVocabulary.length;

        } else if (errorMessage && (errorMessage.classList.contains('hidden') || (typeof N3_VOCAB_DATA === 'undefined'))) {
            displayError("Không tải được từ vựng. Vui lòng kiểm tra file n3_vocab_data.js.");
        }
    }

    function initializeAppWithRange(sourceVocabArray = null, sourceName = "khoảng đã chọn") {
        let start, end;
        currentStudyingSet = null; // Reset current studying set unless set explicitly below

        if (sourceVocabArray) {
            vocabulary = sourceVocabArray.map(card => ({ ...card }));
             // If sourceName is provided and it matches a word set name, set currentStudyingSet
            const foundSet = wordSets.find(ws => ws.name === sourceName);
            if (foundSet) {
                currentStudyingSet = foundSet;
            }
        } else {
            start = parseInt(startWordInput.value);
            end = parseInt(endWordInput.value);

            if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
                alert(`Khoảng từ không hợp lệ (1-${fullVocabulary.length}, Từ <= Đến).`);
                showScreen('initialSetup');
                return;
            }
            vocabulary = fullVocabulary.slice(start - 1, end).map(card => ({ ...card }));
        }

        if (vocabulary.length > 0) {
            showScreen('flashcardApp');
            if(errorMessage) errorMessage.classList.add('hidden');

            shuffleArray(vocabulary);
            if(reviewModeSelect) reviewModeSelect.value = 'all';
            applyReviewMode();

            if(totalSelectedCountDisplay) totalSelectedCountDisplay.textContent = vocabulary.length;
            
            const fcAppTitle = flashcardApp.querySelector('h2');
            if (currentStudyingSet && fcAppTitle) {
                fcAppTitle.textContent = `Flashcard - Bộ: ${escapeHTML(currentStudyingSet.name)}`;
            } else if (fcAppTitle) {
                fcAppTitle.textContent = `Flashcard N3`;
            }
        } else {
            displayError(`Không có từ vựng trong ${escapeHTML(sourceName)}.`);
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
                activeVocabulary = vocabulary.filter(card => card.mark === null || card.mark === undefined);
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
            showCompletionMessage(`Không có từ nào ở chế độ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}".`);
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
            console.warn("displayCardAtIndex: index không hợp lệ hoặc activeVocabulary trống.", index, activeVocabulary.length);
            if (isFlipped) {
                flashcard.style.transition = 'none';
                flipCard(false); // Lật về mặt trước
                void flashcard.offsetWidth;
                flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
            
            kanjiDisplay.textContent = "";
            hiraganaDisplay.textContent = "";
            meaningDisplay.textContent = "Không có thẻ để hiển thị.";
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
            flipCard(false); // Lật về mặt trước
            void flashcard.offsetWidth; // Force reflow
            flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        currentCardIndex = index;
        const cardData = activeVocabulary[currentCardIndex];

        kanjiDisplay.textContent = cardData.kanji || cardData.hiragana || "N/A";
        hiraganaDisplay.textContent = cardData.hiragana || "";
        meaningDisplay.textContent = cardData.nghiatiengviet || "N/A";

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
            showCompletionMessage(`Bạn đã xem hết từ trong bộ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}"!`);
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
        hiraganaDisplay.textContent = "";
        meaningDisplay.textContent = message;

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
        if(remainingCountDisplay) remainingCountDisplay.textContent = Math.max(0, remainingInSet);
        if(currentCardNumberDisplay) currentCardNumberDisplay.textContent = (activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length && currentCardIndex !== -1) ? currentCardIndex + 1 : (activeVocabulary.length > 0 ? activeVocabulary.length : 0);
        if(totalInReviewSetDisplay) totalInReviewSetDisplay.textContent = activeVocabulary.length;
        if(totalSelectedCountDisplay) totalSelectedCountDisplay.textContent = vocabulary.length; 
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

        currentCardInActive.mark = status;

        const originalCardInSession = vocabulary.find(card => 
            generateStorageKey(card) === storageKey
        );
        if (originalCardInSession) {
            originalCardInSession.mark = status;
        }

        const originalCardInFull = fullVocabulary.find(card =>
            generateStorageKey(card) === storageKey
        );
        if(originalCardInFull) {
            originalCardInFull.mark = status;
        }

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
            const setIndex = wordSets.findIndex(s => s.id === currentStudyingSet.id);
            if (setIndex !== -1) {
                viewWordSetDetail(wordSets[setIndex]); // Truyền object set
            } else {
                showScreen('wordSetManager'); // Nếu không tìm thấy, về quản lý chung
            }
        } else {
            showScreen('wordSetManager'); // Nếu không có bộ nào đang học, về màn hình chọn bộ từ (quản lý)
        }
        
        if(reviewModeSelect) reviewModeSelect.value = 'all';
        activeVocabulary = [];
        vocabulary = [];
        currentCardIndex = -1;

        const fcAppTitle = flashcardApp.querySelector('h2');
        if(fcAppTitle) fcAppTitle.textContent = "Flashcard N3";
        if (backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.classList.add('hidden');
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

            // Cập nhật lại trạng thái `mark` trong `fullVocabulary` và `wordSets` nếu cần
             fullVocabulary.forEach(card => card.mark = null);
             if (vocabulary.length > 0) vocabulary.forEach(card => card.mark = null);
             if (activeVocabulary.length > 0) activeVocabulary.forEach(card => card.mark = null);


            if (!flashcardApp.classList.contains('hidden')) {
                // Nếu đang ở màn hình flashcard, cập nhật lại thẻ hiện tại và chế độ xem
                updateMarkIndicator();
                applyReviewMode(); // Để activeVocabulary được cập nhật
            } else {
                // Nếu không, chỉ cần tải lại (không cần prepareInitialSetup đầy đủ nếu chỉ xóa mark)
                // Có thể cần tải lại wordSets nếu mark ảnh hưởng đến hiển thị của chúng (hiện tại không)
            }
            // Không cần prepareInitialSetup() lại hoàn toàn, chỉ cần reset mark
        }
    }

    // --- Word Set Management Functions (ĐÃ SỬA ĐỔI) ---
    function saveWordSets() {
        localStorage.setItem(WORD_SETS_STORAGE_KEY, JSON.stringify(wordSets));
    }

    function displayWordSets(setsToDisplay) {
        wordSetListDiv.innerHTML = '';
        noWordSetsMessage.classList.add('hidden');
        if (noSearchResultsMessage) noSearchResultsMessage.classList.add('hidden');

        if (setsToDisplay.length === 0) {
            if (searchWordSetInput && searchWordSetInput.value.trim() !== '') {
                if (noSearchResultsMessage) noSearchResultsMessage.classList.remove('hidden');
            } else {
                noWordSetsMessage.classList.remove('hidden');
            }
            return;
        }

        setsToDisplay.forEach((set) => {
            const item = document.createElement('div');
            item.classList.add('word-set-item');
            item.innerHTML = `
                <div class="word-set-info">
                    <h4 class="word-set-name">${escapeHTML(set.name)}</h4>
                    <p class="word-set-range">Từ ${set.start} đến ${set.end} (${set.end - set.start + 1} từ)</p>
                </div>
                <div class="word-set-actions">
                    <button class="action-btn view-set-btn" title="Xem chi tiết">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button class="action-btn study-set-btn" title="Học bộ này">
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M3 9h18"></path></svg>
                    </button>
                    <button class="action-btn delete-set-btn" title="Xóa bộ này">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>
            `;
            
            item.querySelector('.view-set-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                viewWordSetDetail(set);
            });
            
            item.querySelector('.study-set-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                currentStudyingSet = set;
                const words = fullVocabulary.slice(set.start - 1, set.end);
                initializeAppWithRange(words, set.name);
            });
            
            item.querySelector('.delete-set-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteWordSet(set);
            });
            
            wordSetListDiv.appendChild(item);
        });
    }

    function filterAndDisplayWordSets() {
        const searchTerm = searchWordSetInput ? searchWordSetInput.value.toLowerCase().trim() : "";
        let filteredSets = wordSets;

        if (searchTerm) {
            filteredSets = wordSets.filter(set => 
                (set.name && set.name.toLowerCase().includes(searchTerm))
            );
        }
        displayWordSets(filteredSets);
    }

    function loadWordSets() {
        const storedSets = localStorage.getItem(WORD_SETS_STORAGE_KEY);
        if (storedSets) {
            wordSets = JSON.parse(storedSets);
        } else {
            wordSets = [
                { name: "N3 Phần 1", start: 1, end: 160, id: Date.now().toString() + "_p1" },
                { name: "N3 Phần 2", start: 161, end: 264, id: Date.now().toString() + "_p2" },
                { name: "N3 Phần 3", start: 265, end: 369, id: Date.now().toString() + "_p3" },
                { name: "N3 Phần 4", start: 370, end: 474, id: Date.now().toString() + "_p4" },
                { name: "N3 Phần 5", start: 475, end: 579, id: Date.now().toString() + "_p5" },
                { name: "N3 Phần 6", start: 580, end: 686, id: Date.now().toString() + "_p6" },
            ];
            saveWordSets();
        }
        filterAndDisplayWordSets();
    }

    function createWordSet() {
        const name = wordSetNameInput.value.trim();
        const start = parseInt(wordSetStartInput.value);
        const end = parseInt(wordSetEndInput.value);

        if (!name) {
            alert("Vui lòng nhập tên cho bộ từ.");
            wordSetNameInput.focus();
            return;
        }
        if (isNaN(start) || isNaN(end) || start < 1 || end < start || (fullVocabulary.length > 0 && end > fullVocabulary.length) ) {
            alert(`Khoảng từ không hợp lệ. Đảm bảo Từ >= 1, Đến >= Từ, và Đến <= ${fullVocabulary.length || 'tổng số từ'}.`);
            wordSetStartInput.focus();
            return;
        }
        if (wordSets.some(set => set.name.toLowerCase() === name.toLowerCase())) {
            if (!confirm(`Bộ từ với tên "${escapeHTML(name)}" đã tồn tại. Bạn vẫn muốn tạo?`)) {
                return;
            }
        }

        const newSet = {
            id: Date.now().toString() + "_" + Math.random().toString(36).substring(2, 5),
            name: name,
            start: start,
            end: end
        };
        wordSets.push(newSet);
        saveWordSets();
        filterAndDisplayWordSets();
        wordSetNameInput.value = '';
        // wordSetStartInput.value = 1; // Optional: reset form
        // wordSetEndInput.value = fullVocabulary.length > 0 ? fullVocabulary.length : ''; // Optional
        updateWordSetTotalMessage();
    }

    function deleteWordSet(setToDelete) {
        if (!setToDelete || typeof setToDelete.id === 'undefined') {
            console.error("Invalid set object passed to deleteWordSet:", setToDelete);
            return;
        }
        const actualIndex = wordSets.findIndex(set => set.id === setToDelete.id);

        if (actualIndex !== -1) {
            if (confirm(`Bạn có chắc chắn muốn xóa bộ từ "${escapeHTML(wordSets[actualIndex].name)}" không?`)) {
                wordSets.splice(actualIndex, 1);
                saveWordSets();
                filterAndDisplayWordSets();
                // Nếu bộ đang xóa là bộ đang xem chi tiết, quay về màn hình quản lý
                if (currentStudyingSet && currentStudyingSet.id === setToDelete.id) {
                    showScreen('wordSetManager');
                }
            }
        } else {
            console.error("Không thể tìm thấy bộ từ để xóa trong danh sách gốc:", setToDelete);
            alert("Lỗi: Không tìm thấy bộ từ để xóa.");
        }
    }

    function viewWordSetDetail(setObject) {
        if (!setObject || typeof setObject.id === 'undefined' || !wordSets.find(s => s.id === setObject.id)) {
            console.error("Thông tin bộ từ không hợp lệ hoặc không tồn tại:", setObject);
            alert("Lỗi: Không thể xem chi tiết bộ từ này.");
            showScreen('wordSetManager');
            return;
        }
        currentStudyingSet = setObject;

        detailViewName.textContent = escapeHTML(setObject.name);
        detailViewRange.textContent = `Từ ${setObject.start} đến ${setObject.end} (Tổng: ${setObject.end - setObject.start + 1} từ)`;

        if (!fullVocabulary || fullVocabulary.length === 0) {
            detailWordListDiv.textContent = "Dữ liệu từ vựng chưa được tải. Vui lòng thử lại.";
            console.error("fullVocabulary is not loaded or empty in viewWordSetDetail");
            showScreen('wordSetManager');
            return;
        }

        const wordsInSet = fullVocabulary.slice(setObject.start - 1, setObject.end);
        detailWordListDiv.innerHTML = '';

        if (wordsInSet.length > 0) {
            const table = document.createElement('table');
            table.classList.add('word-detail-table');
            const thead = table.createTHead();
            const headerRow = thead.insertRow();
            ['STT', 'Kanji', 'Hiragana', 'Nghĩa Tiếng Việt'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });

            const tbody = table.createTBody();
            wordsInSet.forEach((word, i) => {
                const row = tbody.insertRow();
                row.insertCell().textContent = setObject.start + i;
                row.insertCell().textContent = word.kanji || '-';
                row.insertCell().textContent = word.hiragana || '-';
                row.insertCell().textContent = word.nghiatiengviet;
            });
            detailWordListDiv.appendChild(table);
        } else {
            detailWordListDiv.textContent = "Không có từ nào trong bộ này.";
        }
        showScreen('wordSetDetail');
    }

    function updateWordSetTotalMessage() {
        if (fullVocabulary.length > 0) {
            if (wordSetStartInput) wordSetStartInput.max = fullVocabulary.length;
            if (wordSetEndInput) wordSetEndInput.max = fullVocabulary.length;
            if (wordSetTotalMessage) wordSetTotalMessage.textContent = `Tổng số từ trong file: ${fullVocabulary.length}. Nhập khoảng từ để tạo bộ.`;
        } else {
            if (wordSetTotalMessage) wordSetTotalMessage.textContent = "Đang chờ tải dữ liệu từ vựng...";
        }
    }

    // Test Functions
    function startTest(sourceVocabArray = null, sourceSetName = null) {
        const numQuestions = parseInt(numTestQuestionsInput.value);
        const type = testTypeSelect.value;
        let start, end;
        let vocabSource;
        
        // currentStudyingSet được set khi người dùng click "Kiểm tra" từ chi tiết bộ hoặc đã có từ trước
        // Nếu không, sourceSetName là null và currentStudyingSet cũng null hoặc không liên quan

        if (sourceVocabArray) { // Thường dùng khi gọi từ chi tiết bộ từ
            vocabSource = [...sourceVocabArray];
            start = currentStudyingSet ? currentStudyingSet.start : 1; // Lấy start/end từ currentStudyingSet nếu có
            end = currentStudyingSet ? currentStudyingSet.end : vocabSource.length;
        } else { // Khi gọi từ màn hình test setup chung
            start = parseInt(testStartWordInput.value);
            end = parseInt(testEndWordInput.value);

            if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
                alert(`Vui lòng nhập khoảng từ vựng hợp lệ cho bài kiểm tra (Từ 1 đến ${fullVocabulary.length}, Từ số <= Đến số).`);
                showScreen('testSetup');
                return;
            }
            vocabSource = fullVocabulary.slice(start - 1, end);
        }

        if (vocabSource.length < 1) {
            alert("Không đủ từ vựng trong nguồn đã chọn để tạo bài kiểm tra.");
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
            return;
        }
        
        if (vocabSource.length < 4 && numQuestions > 1) {
            alert("Nguồn từ vựng quá ít (< 4 từ) để tạo nhiều câu hỏi với các lựa chọn khác nhau. Vui lòng giảm số câu hỏi hoặc mở rộng nguồn từ.");
            if (!(numQuestions === 1 && vocabSource.length >=1)) {
                showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
                return;
            }
        }
        
        if (numQuestions > vocabSource.length) {
            alert(`Số câu hỏi (${numQuestions}) không thể lớn hơn số từ vựng có sẵn (${vocabSource.length}).`);
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

        const testInterfaceTitle = document.querySelector('#testInterface h2');
        if (sourceSetName && testInterfaceTitle) {
            testInterfaceTitle.textContent = `Bài Kiểm Tra - Bộ: ${escapeHTML(sourceSetName)}`;
        } else if (testInterfaceTitle) {
            testInterfaceTitle.textContent = `Bài Kiểm Tra`;
        }
        displayTestQuestion();
    }

    function generateTestQuestions(sourceVocab, numQuestions, type) {
        const questions = [];
        let availableVocab = [...sourceVocab];

        if (availableVocab.length < numQuestions) {
            console.error("Không đủ từ vựng nguồn để tạo đủ số câu hỏi yêu cầu.");
            return [];
        }

        for (let i = 0; i < numQuestions; i++) {
            if (availableVocab.length === 0) break;

            const correctIndex = Math.floor(Math.random() * availableVocab.length);
            const correctAnswerCard = availableVocab.splice(correctIndex, 1)[0];

            let questionText, correctAnswerText;
            const options = [];

            if (type === 'viToJp') {
                questionText = correctAnswerCard.nghiatiengviet;
                correctAnswerText = correctAnswerCard.kanji || correctAnswerCard.hiragana;
                options.push(correctAnswerText);
            } else { // jpToVi
                questionText = correctAnswerCard.kanji || correctAnswerCard.hiragana;
                correctAnswerText = correctAnswerCard.nghiatiengviet;
                options.push(correctAnswerText);
            }

            let tempVocabForDistractors = sourceVocab.filter(word => 
                (word.kanji !== correctAnswerCard.kanji || word.hiragana !== correctAnswerCard.hiragana) &&
                word.nghiatiengviet !== correctAnswerCard.nghiatiengviet
            );
            
            shuffleArray(tempVocabForDistractors);

            for (let j = 0; j < 3; j++) { // Cố gắng tạo 3 distractors
                if (tempVocabForDistractors.length === 0) break;
                const distractorCard = tempVocabForDistractors.pop();
                if (type === 'viToJp') {
                    options.push(distractorCard.kanji || distractorCard.hiragana);
                } else {
                    options.push(distractorCard.nghiatiengviet);
                }
            }
            
            if (options.length < 2 && sourceVocab.length >= 4) { // Nếu không đủ distractor
                console.warn("Không đủ từ khác biệt để tạo đáp án nhiễu cho câu hỏi:", correctAnswerCard);
                // Thử lại câu hỏi này nếu có thể
                i--; 
                availableVocab.push(correctAnswerCard); // Trả lại từ đã chọn
                continue;
            }
            
            // Nếu vẫn không đủ 4 options, lấy ngẫu nhiên từ sourceVocab (tránh trùng)
            while (options.length < 4 && sourceVocab.length >= options.length + 1) { // options.length + 1 để đảm bảo có từ để lấy
                let fallbackDistractor;
                let attempts = 0;
                do {
                    fallbackDistractor = sourceVocab[Math.floor(Math.random() * sourceVocab.length)];
                    attempts++;
                } while (
                    ( // Điều kiện trùng
                        (fallbackDistractor.kanji === correctAnswerCard.kanji && fallbackDistractor.hiragana === correctAnswerCard.hiragana) ||
                        options.includes(type === 'viToJp' ? (fallbackDistractor.kanji || fallbackDistractor.hiragana) : fallbackDistractor.nghiatiengviet)
                    ) && attempts < sourceVocab.length * 2 // Giới hạn attempts để tránh vòng lặp vô hạn
                );
                
                if (attempts < sourceVocab.length * 2) { // Tìm được
                    options.push(type === 'viToJp' ? (fallbackDistractor.kanji || fallbackDistractor.hiragana) : fallbackDistractor.nghiatiengviet);
                } else { // Không tìm được nữa
                    console.warn("Rất khó tìm đáp án nhiễu cho:", questionText, ". Số lượng lựa chọn hiện tại:", options.length);
                    break; 
                }
            }

            shuffleArray(options);

            questions.push({
                questionText: questionText,
                options: options,
                correctAnswer: correctAnswerText,
                originalCard: correctAnswerCard // Lưu lại thẻ gốc để review
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
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.disabled = true;
            // Xóa class cũ nếu có
            btn.classList.remove('bg-green-500', 'bg-red-500', 'text-white'); 
            if (btn.textContent === correctAnswer) {
                btn.classList.add('bg-green-500', 'text-white'); 
            }
        });

        let isCorrect = false;
        if (selectedAnswer === correctAnswer) {
            userScore++;
            isCorrect = true;
            testFeedbackDisplay.textContent = "Chính xác!";
            testFeedbackDisplay.className = 'test-feedback text-success-color'; // Hoặc dùng class CSS trực tiếp
            selectedButton.classList.remove('bg-green-500'); // Bỏ nếu đã có ở trên
            selectedButton.classList.add('bg-green-500', 'text-white');
        } else {
            testFeedbackDisplay.textContent = `Sai rồi! Đáp án đúng: ${correctAnswer}`;
            testFeedbackDisplay.className = 'test-feedback text-danger-color'; // Hoặc dùng class CSS
            selectedButton.classList.add('bg-red-500', 'text-white');
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
        
        const scoreCircle = document.querySelector('.score-circle');
        if(scoreCircle) scoreCircle.style.setProperty('--score-percent', `${percentage}%`);


        reviewAnswersArea.innerHTML = '<h4>Xem lại câu sai:</h4>';
        const incorrectAnswers = answeredQuestions.filter(aq => !aq.isCorrect);
        if (incorrectAnswers.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('review-answer-list'); // Thêm class để style
            incorrectAnswers.forEach(aq => {
                const li = document.createElement('li');
                li.innerHTML = `<b>Câu hỏi:</b> ${escapeHTML(aq.questionText)}<br/>
                                <b>Bạn chọn:</b> <span class="text-danger-color">${escapeHTML(aq.selectedAnswer)}</span><br/>
                                <b>Đáp án đúng:</b> <span class="text-success-color">${escapeHTML(aq.correctAnswer)}</span>`;
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
            if (currentTestConfig.sourceSetName) { // Nếu test từ một bộ cụ thể
                // currentStudyingSet nên được giữ lại từ lần test trước hoặc tìm lại
                const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
                if (originalSet) {
                    vocabSourceForRetake = fullVocabulary.slice(originalSet.start - 1, originalSet.end);
                    currentStudyingSet = originalSet; // Đảm bảo currentStudyingSet là đúng
                } else {
                    alert("Không tìm thấy bộ từ gốc để làm lại bài kiểm tra. Vui lòng cài đặt lại.");
                    showScreen('wordSetManager');
                    return;
                }
            } else { // Test từ khoảng tùy chọn
                vocabSourceForRetake = fullVocabulary.slice(currentTestConfig.start - 1, currentTestConfig.end);
                currentStudyingSet = null; // Không có bộ cụ thể
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
                testInterfaceTitle.textContent = `Bài Kiểm Tra - Bộ: ${escapeHTML(currentTestConfig.sourceSetName)}`;
            } else if (testInterfaceTitle) {
                testInterfaceTitle.textContent = `Bài Kiểm Tra`;
            }
            displayTestQuestion();
        } else { // Nếu không có config cũ, về màn hình setup
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
        }
    }

    // Screen Management
    function showScreen(screenName) {
        initialSetupDiv.classList.add('hidden');
        flashcardApp.classList.add('hidden');
        testSetupDiv.classList.add('hidden');
        testInterfaceDiv.classList.add('hidden');
        testResultsDiv.classList.add('hidden');
        wordSetManagerDiv.classList.add('hidden');
        wordSetDetailViewDiv.classList.add('hidden');
        loadingMessage.classList.add('hidden');
        if(errorMessage) errorMessage.classList.add('hidden');

        if(backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.classList.add('hidden');
        if(backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.classList.add('hidden');

        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));

        switch (screenName) {
            case 'initialSetup':
                initialSetupDiv.classList.remove('hidden');
                switchToFlashcardSetupBtn.classList.add('active');
                if (fullVocabulary.length > 0 && totalWordsMessage) totalWordsMessage.textContent = `Tổng số từ trong file: ${fullVocabulary.length}`;
                currentStudyingSet = null;
                break;
            case 'flashcardApp':
                flashcardApp.classList.remove('hidden');
                switchToFlashcardSetupBtn.classList.add('active');
                if (currentStudyingSet && backToWordSetManagerFromFlashcardBtn) {
                    backToWordSetManagerFromFlashcardBtn.classList.remove('hidden');
                }
                break;
            case 'testSetup':
                testSetupDiv.classList.remove('hidden');
                switchToTestSetupBtn.classList.add('active');
                if (fullVocabulary.length > 0) {
                    if(testEndWordInput && !testEndWordInput.value) testEndWordInput.value = fullVocabulary.length;
                    if(numTestQuestionsInput) numTestQuestionsInput.max = fullVocabulary.length;
                }
                if (currentStudyingSet) { // Nếu đang từ chi tiết bộ từ
                    testStartWordInput.value = currentStudyingSet.start;
                    testEndWordInput.value = currentStudyingSet.end;
                    numTestQuestionsInput.max = currentStudyingSet.end - currentStudyingSet.start + 1;
                    if(!numTestQuestionsInput.value || parseInt(numTestQuestionsInput.value) > numTestQuestionsInput.max) {
                        numTestQuestionsInput.value = Math.min(10, numTestQuestionsInput.max); // Gợi ý số câu
                    }
                    testStartWordInput.disabled = true;
                    testEndWordInput.disabled = true;
                    if(backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.classList.remove('hidden');
                } else { // Nếu từ menu chính
                    testStartWordInput.disabled = false;
                    testEndWordInput.disabled = false;
                    if(testStartWordInput) testStartWordInput.value = 1; // Reset nếu cần
                    if(testEndWordInput && fullVocabulary.length > 0) testEndWordInput.value = fullVocabulary.length;
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
                if (searchWordSetInput) searchWordSetInput.value = ''; // Xóa tìm kiếm cũ
                filterAndDisplayWordSets(); // Luôn gọi để hiển thị danh sách
                updateWordSetTotalMessage();
                // currentStudyingSet = null; // Không reset ở đây, vì có thể quay lại từ flashcard/test của một bộ
                break;
            case 'wordSetDetail':
                wordSetDetailViewDiv.classList.remove('hidden');
                switchToWordSetManagerBtn.classList.add('active'); // Vẫn là mode quản lý
                // currentStudyingSet đã được set bởi viewWordSetDetail
                break;
            case 'loading':
                loadingMessage.classList.remove('hidden');
                break;
            case 'error':
                if(errorMessage) errorMessage.classList.remove('hidden');
                break;
        }
    }

    // Event Listeners
    if(loadRangeButton) loadRangeButton.addEventListener('click', () => initializeAppWithRange());
    if(restartButton) restartButton.addEventListener('click', handleRestart);
    if(reviewModeSelect) reviewModeSelect.addEventListener('change', applyReviewMode);
    if(clearAllMarksButton) clearAllMarksButton.addEventListener('click', handleClearAllMarks);

    if(flashcardContainer) flashcardContainer.addEventListener('click', (e) => { 
        // Chỉ lật nếu click vào flashcardContainer, không phải nút bên trong nó
        if (e.target === flashcardContainer || e.target.closest('.flashcard') && !e.target.closest('button')) {
            if (!flipButton.disabled) flipCard();
        }
    });
    if(flipButton) flipButton.addEventListener('click', () => flipCard());
    if(prevButton) prevButton.addEventListener('click', () => { if (!prevButton.disabled) showPreviousCard(); });
    if(nextButton) nextButton.addEventListener('click', () => { if (!nextButton.disabled) showNextCard(); });
    
    if(markKnownButton) markKnownButton.addEventListener('click', () => markCurrentCard('known'));
    if(markUnknownButton) markUnknownButton.addEventListener('click', () => markCurrentCard('unknown'));
    if(clearMarkButton) clearMarkButton.addEventListener('click', () => markCurrentCard(null));

    if(intervalSelect) intervalSelect.addEventListener('change', (event) => { 
        autoNextDuration = parseInt(event.target.value);
        if (activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length) { 
            clearTimeout(autoNextInterval); resetProgressBar(); startProgressBar(); setupAutoNext();
        } else if (autoNextDuration > 0) { resetProgressBar(); } 
        else { progressBar.style.width = '100%'; }
    });

    // Mode switcher listeners
    if(switchToFlashcardSetupBtn) switchToFlashcardSetupBtn.addEventListener('click', () => {
        currentStudyingSet = null; // Reset khi chuyển về setup chung
        showScreen('initialSetup');
    });
    if(switchToWordSetManagerBtn) switchToWordSetManagerBtn.addEventListener('click', () => {
        // currentStudyingSet KHÔNG reset ở đây, để có thể quay về từ chi tiết bộ
        showScreen('wordSetManager');
    });
    if(switchToTestSetupBtn) switchToTestSetupBtn.addEventListener('click', () => {
        currentStudyingSet = null; // Reset khi vào test setup chung
        showScreen('testSetup');
    });

    // Word set manager listeners
    if(createWordSetButton) createWordSetButton.addEventListener('click', createWordSet);
    if(searchWordSetInput) searchWordSetInput.addEventListener('input', filterAndDisplayWordSets);

    // Word set detail view listeners
    if(studySetFlashcardButton) studySetFlashcardButton.addEventListener('click', () => {
        if (currentStudyingSet) {
            const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
            initializeAppWithRange(words, currentStudyingSet.name);
        }
    });
    if(testSetButton) testSetButton.addEventListener('click', () => {
        if (currentStudyingSet) {
            showScreen('testSetup'); // currentStudyingSet đã được set, showScreen sẽ dùng nó
        }
    });
    if(backToSetManagerButton) backToSetManagerButton.addEventListener('click', () => {
        // currentStudyingSet = null; // Không reset ở đây, để nút "Quản lý bộ từ" luôn về màn hình list
        showScreen('wordSetManager');
    });

    // "Back to Word Set Manager" or Detail View buttons
    if(backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.addEventListener('click', () => {
        if(currentStudyingSet) {
            const setIndex = wordSets.findIndex(s => s.id === currentStudyingSet.id);
            if (setIndex !== -1) viewWordSetDetail(wordSets[setIndex]);
            else showScreen('wordSetManager');
        } else {
            showScreen('wordSetManager');
        }
    });
    if(backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.addEventListener('click', () => {
         if(currentStudyingSet) {
            const setIndex = wordSets.findIndex(s => s.id === currentStudyingSet.id);
            if (setIndex !== -1) viewWordSetDetail(wordSets[setIndex]);
            else showScreen('wordSetManager');
        } else {
            showScreen('wordSetManager');
        }
    });

    // Test listeners
    if(startTestButton) startTestButton.addEventListener('click', () => {
        if (currentStudyingSet && testStartWordInput.disabled) { // Đang ở test setup cho một bộ cụ thể
            const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
            startTest(words, currentStudyingSet.name);
        } else { // Test setup chung
            startTest();
        }
    });
    if(nextQuestionButton) nextQuestionButton.addEventListener('click', nextTestQuestion);
    if(finishTestButton) finishTestButton.addEventListener('click', () => {
        if(confirm("Bạn có chắc muốn kết thúc bài kiểm tra sớm?")) {
            finishTest();
        }
    });
    if(retakeTestButton) retakeTestButton.addEventListener('click', retakeTestWithSameSettings);
    
    if(backToTestSetupButton) backToTestSetupButton.addEventListener('click', () => {
        // currentStudyingSet sẽ được giữ hoặc reset dựa trên currentTestConfig trong retakeTestWithSameSettings
        // Hoặc nếu không có config, nó sẽ là null. showScreen('testSetup') sẽ xử lý
        if (currentTestConfig && currentTestConfig.sourceSetName) {
             const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
             currentStudyingSet = originalSet || null;
        } else {
            currentStudyingSet = null;
        }
        showScreen('testSetup');
    });

    if(backToFlashcardFromResultsButton) backToFlashcardFromResultsButton.addEventListener('click', () => {
        // Mục đích: quay lại màn hình quản lý hoặc chi tiết bộ từ
        if (currentTestConfig && currentTestConfig.sourceSetName) {
            const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
            if (originalSet) {
                currentStudyingSet = originalSet; // Set lại để viewWordSetDetail dùng
                viewWordSetDetail(originalSet);
            } else {
                currentStudyingSet = null;
                showScreen('wordSetManager');
            }
        } else {
            currentStudyingSet = null;
            showScreen('wordSetManager'); // Mặc định về quản lý bộ từ
        }
    });
    if(backToFlashcardModeButton) backToFlashcardModeButton.addEventListener('click', () => { // Nút "Quay lại Flashcard" từ TestSetup
        if (currentStudyingSet) { // Nếu đang config test cho 1 bộ cụ thể
            const setIndex = wordSets.findIndex(s => s.id === currentStudyingSet.id);
            if (setIndex !== -1) viewWordSetDetail(wordSets[setIndex]); // Quay lại chi tiết bộ đó
            else showScreen('wordSetManager');
        } else { // Nếu đang ở test setup chung
            showScreen('wordSetManager'); // Quay lại màn hình quản lý bộ từ (hoặc initialSetup nếu muốn)
        }
    });


    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        if (flashcardApp.classList.contains('hidden')) return; 

        const activeEl = document.activeElement;
        const inInput = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'SELECT' || activeEl.tagName === 'TEXTAREA');

        if (inInput && ['ArrowLeft', 'ArrowRight', ' ', 'o', 'x', 'O', 'X'].includes(event.key)) {
            if (event.key === ' ' && activeEl.tagName === 'SELECT') return; // Cho phép space mở select
            if (event.key.toLowerCase() === 'o' || event.key.toLowerCase() === 'x') { /* allow */ }
            else if (event.key !== ' ') return; // Chỉ cho phép space nếu không phải o/x
        }
        
        if (event.key === ' ' && (!inInput || (inInput && activeEl.type !== "text" && activeEl.type !== "number" && activeEl.tagName !== 'TEXTAREA'))) {
            event.preventDefault();
        }
        if (['ArrowLeft', 'ArrowRight'].includes(event.key) && !inInput) { // Chỉ preventDefault nếu không ở trong input
            event.preventDefault();
        }

        if (inInput && (event.key.toLowerCase() === 'o' || event.key.toLowerCase() === 'x')) {
            // Cho phép gõ 'o', 'x' trong input
        } else if (inInput) {
            return; // Không xử lý phím tắt khác nếu đang trong input
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