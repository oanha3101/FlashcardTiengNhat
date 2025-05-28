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

    const modeSwitcher = document.getElementById('modeSwitcher');
    const switchToFlashcardSetupBtn = document.getElementById('switchToFlashcardSetupBtn');
    const switchToWordSetManagerBtn = document.getElementById('switchToWordSetManagerBtn');
    const switchToTestSetupBtn = document.getElementById('switchToTestSetupBtn');

    const wordSetManagerDiv = document.getElementById('wordSetManager');
    const wordSetNameInput = document.getElementById('wordSetName');
    const wordSetStartInput = document.getElementById('wordSetStart');
    const wordSetEndInput = document.getElementById('wordSetEnd');
    const createWordSetButton = document.getElementById('createWordSetButton');
    const wordSetListContainer = document.getElementById('wordSetListContainer');
    const wordSetListDiv = document.getElementById('wordSetList');
    const noWordSetsMessage = document.getElementById('noWordSetsMessage');
    const wordSetTotalMessage = document.getElementById('wordSetTotalMessage');
    const searchWordSetInput = document.getElementById('searchWordSetInput');
    const noSearchResultsMessage = document.getElementById('noSearchResultsMessage');

    const wordSetDetailViewDiv = document.getElementById('wordSetDetailView');
    const detailViewName = document.getElementById('detailViewName');
    const detailViewRange = document.getElementById('detailViewRange');
    const studySetFlashcardButton = document.getElementById('studySetFlashcardButton');
    const testSetButton = document.getElementById('testSetButton');
    const backToSetManagerButton = document.getElementById('backToSetManagerButton');
    const detailWordListDiv = document.getElementById('detailWordList');
    const backToWordSetManagerFromFlashcardBtn = document.getElementById('backToWordSetManagerFromFlashcard');
    const backToWordSetManagerFromTestSetupBtn = document.getElementById('backToWordSetManagerFromTestSetup');

    const testSetupDiv = document.getElementById('testSetup');
    const numTestQuestionsInput = document.getElementById('numTestQuestions');
    const testTypeSelect = document.getElementById('testType');
    const testStartWordInput = document.getElementById('testStartWord');
    const testEndWordInput = document.getElementById('testEndWord');
    const startTestButton = document.getElementById('startTestButton');
    const backToFlashcardModeButton = document.getElementById('backToFlashcardModeButton'); // From TestSetup to WordSetManager/Detail
    const testInterfaceDiv = document.getElementById('testInterface');
    const currentQuestionNumDisplay = document.getElementById('currentQuestionNum');
    const totalTestQuestionsDisplay = document.getElementById('totalTestQuestions');
    const questionTextDisplay = document.getElementById('questionText');
    const optionsArea = document.getElementById('optionsArea');
    // const nextQuestionButton = document.getElementById('nextQuestionButton'); // This was for immediate feedback, now using prev/next test question buttons
    const finishTestButton = document.getElementById('finishTestButton');
    const testResultsDiv = document.getElementById('testResults');
    const scoreCorrectDisplay = document.getElementById('scoreCorrect');
    const scoreTotalDisplay = document.getElementById('scoreTotal');
    const scorePercentageDisplay = document.getElementById('scorePercentage');
    const reviewAnswersArea = document.getElementById('reviewAnswersArea');
    const retakeTestButton = document.getElementById('retakeTestButton');
    const backToTestSetupButton = document.getElementById('backToTestSetupButton'); // From Results to TestSetup
    const backToFlashcardFromResultsButton = document.getElementById('backToFlashcardFromResultsButton'); // From Results to WordSetManager/Detail

    const testQuestionNavigator = document.getElementById('testQuestionNavigator');
    const testQuestionList = document.getElementById('testQuestionList');
    const prevTestQuestionButton = document.getElementById('prevTestQuestionButton');
    const nextTestQuestionButton = document.getElementById('nextTestQuestionButton');
    // ...
const testSpeedModeSelect = document.getElementById('testSpeedMode');
const timeLeftDisplay = document.getElementById('timeLeftDisplay');
// ...

    const themeToggle = document.getElementById('themeToggle');

    // State variables
    let fullVocabulary = [];        // Toàn bộ từ vựng từ file gốc
    let vocabulary = [];            // Tập từ vựng đang được học/làm flashcard (đã chọn theo khoảng hoặc bộ)
    let activeVocabulary = [];      // Tập từ vựng đang hiển thị trong flashcard (sau khi áp dụng review mode)
    let currentCardIndex = -1;      // Index của flashcard hiện tại trong activeVocabulary
    let isFlipped = false;
    let autoNextInterval;
    let autoNextDuration = 5000;
    let wordSets = [];              // Danh sách các bộ từ đã tạo
    let currentStudyingSet = null;  // Bộ từ đang được học/xem chi tiết/kiểm tra
    let testQuestions = [];         // Mảng các câu hỏi cho bài kiểm tra hiện tại
    let currentTestQuestionIndex = 0;// Index của câu hỏi kiểm tra hiện tại
    let userScore = 0;              // Điểm của người dùng trong bài kiểm tra
    let currentTestConfig = {};     // Lưu cấu hình bài kiểm tra để làm lại
    // let answeredQuestions = [];  // Không cần thiết nếu reviewAnswersArea được tạo từ testQuestions khi finishTest
// State variables (thêm vào)
// ...
let testTimerInterval;
let totalTestTimeSeconds = 0; // Tổng thời gian làm bài (giây)
let timeLeftSeconds = 0;      // Thời gian còn lại (giây)
// ...
    let isDarkMode = false;

    // Constants
    const STORAGE_KEY_PREFIX = 'flashcard_mark_';
    const WORD_SETS_STORAGE_KEY = 'flashcard_word_sets';
    const THEME_STORAGE_KEY = 'flashcard_theme';
    // Constants (thêm vào)
const SPEED_MODES = {
    unlimited: Infinity, // Hoặc một giá trị lớn để không bao giờ hết giờ
    fast: 5,    // giây mỗi câu
    normal: 15,
    slow: 30
};

    // --- Utility Functions ---
    function escapeHTML(str) {
        if (typeof str !== 'string') return String(str); // Chuyển đổi sang string nếu không phải
        return str.replace(/[&<>"']/g, function (match) {
            const escapeChars = {
                '&': '&',
                '<': '<',
                '>': '>',
                '"': '"',
                "'": ''
            };
            return escapeChars[match];
        });
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

    function generateStorageKey(card) {
        if (!card || (!card.kanji && !card.hiragana && !card.nghiatiengviet)) return null;
        const primaryId = (card.kanji || card.hiragana || 'unknown_card').replace(/\s+/g, '_').substring(0, 50);
        const secondaryId = (card.nghiatiengviet || 'no_meaning').replace(/\s+/g, '_').substring(0, 15);
        return `${STORAGE_KEY_PREFIX}${primaryId}_${secondaryId}`;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // --- Theme Management ---
    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-mode');
            isDarkMode = true;
        }
    }

    function toggleTheme() {
        document.documentElement.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    }

    // --- Initialization and Data Loading ---
    async function prepareInitialSetup() {
        showScreen('loading');

        if (typeof N3_VOCAB_DATA !== 'undefined' && Array.isArray(N3_VOCAB_DATA)) {
            fullVocabulary = N3_VOCAB_DATA.map(entry => {
                const storageKey = generateStorageKey(entry);
                const savedMark = storageKey ? localStorage.getItem(storageKey) : null;
                return {
                    ...entry,
                    mark: (savedMark === 'known' || savedMark === 'unknown') ? savedMark : null,
                    id: generateStorageKey(entry) || `card_${Math.random().toString(36).substr(2, 9)}` // Đảm bảo mỗi card có ID duy nhất
                };
            });
        } else {
            console.error("Dữ liệu N3_VOCAB_DATA không được định nghĩa hoặc không phải là mảng.");
            fullVocabulary = [];
        }

        if (fullVocabulary.length > 0) {
            loadWordSets();
            showScreen('wordSetManager');

            if (totalWordsMessage) totalWordsMessage.textContent = `Tổng số từ trong file: ${fullVocabulary.length}`;
            updateWordSetTotalMessage();

            const maxVocabLength = fullVocabulary.length;
            [startWordInput, endWordInput, wordSetStartInput, wordSetEndInput, testStartWordInput, testEndWordInput].forEach(input => {
                if (input) input.max = maxVocabLength;
            });
            [endWordInput, wordSetEndInput, testEndWordInput].forEach(input => {
                if (input && !input.value) input.value = maxVocabLength;
            });
            if (numTestQuestionsInput) numTestQuestionsInput.max = maxVocabLength;

        } else {
            displayError("Không tải được từ vựng. Vui lòng kiểm tra file n3_vocab_data.js.");
        }
    }

    // --- Flashcard Mode Functions ---
    function initializeAppWithRange(sourceVocabArray = null, sourceName = "khoảng đã chọn") {
        currentStudyingSet = null;

        if (sourceVocabArray) {
            vocabulary = sourceVocabArray.map(card => ({ ...card }));
            const foundSet = wordSets.find(ws => ws.name === sourceName);
            if (foundSet) {
                currentStudyingSet = foundSet;
            }
        } else {
            const start = parseInt(startWordInput.value);
            const end = parseInt(endWordInput.value);

            if (isNaN(start) || isNaN(end) || start < 1 || end < start || end > fullVocabulary.length) {
                alert(`Khoảng từ không hợp lệ (1-${fullVocabulary.length}, Từ <= Đến).`);
                showScreen('initialSetup');
                return;
            }
            vocabulary = fullVocabulary.slice(start - 1, end).map(card => ({ ...card }));
        }

        if (vocabulary.length > 0) {
            showScreen('flashcardApp');
            if (errorMessage) errorMessage.classList.add('hidden');

            shuffleArray(vocabulary);
            if (reviewModeSelect) reviewModeSelect.value = 'all';
            applyReviewMode(); // This will call displayCardAtIndex

            if (totalSelectedCountDisplay) totalSelectedCountDisplay.textContent = vocabulary.length;

            const fcAppTitle = flashcardApp.querySelector('h2');
            if (fcAppTitle) {
                fcAppTitle.textContent = currentStudyingSet ? `Flashcard - Bộ: ${escapeHTML(currentStudyingSet.name)}` : `Flashcard N3`;
            }
        } else {
            displayError(`Không có từ vựng trong ${escapeHTML(sourceName)}.`);
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'initialSetup');
        }
    }

    function applyReviewMode() {
        clearTimeout(autoNextInterval);
        const mode = reviewModeSelect.value;

        switch (mode) {
            case 'unknown': activeVocabulary = vocabulary.filter(card => card.mark === 'unknown'); break;
            case 'known': activeVocabulary = vocabulary.filter(card => card.mark === 'known'); break;
            case 'unmarked': activeVocabulary = vocabulary.filter(card => card.mark === null || card.mark === undefined); break;
            default: activeVocabulary = [...vocabulary]; break;
        }

        if (mode !== 'all') {
            shuffleArray(activeVocabulary);
        }

        currentCardIndex = -1; // Reset index
        if (activeVocabulary.length > 0) {
            displayCardAtIndex(0);
        } else {
            showCompletionMessage(`Không có từ nào ở chế độ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}".`);
            updateMarkIndicator(); // Ensure indicator is cleared
        }
        updateCounts();
    }

    function displayCardAtIndex(index) {
        if (activeVocabulary.length === 0 || index < 0 || index >= activeVocabulary.length) {
            // This case is often handled by applyReviewMode or showNextCard's completion message.
            // If called directly with invalid index, show completion or an empty state.
            if (activeVocabulary.length === 0 && kanjiDisplay.textContent !== "Hoàn thành bộ!") { // Avoid double message
                 showCompletionMessage("Không có thẻ để hiển thị trong chế độ này.");
            }
            updateMarkIndicator();
            updateProgressBarState(true); // Stop progress bar
            setFlashcardControlsDisabled(true);
            if (prevButton) prevButton.disabled = (index <= 0 && activeVocabulary.length === 0);
            if (nextButton) nextButton.disabled = true;
            updateCounts();
            return;
        }

        // Reset flip state for new card
        if (isFlipped) {
            flashcard.style.transition = 'none'; // Disable animation for quick reset
            flipCardVisuals(false);
            void flashcard.offsetWidth; // Force reflow
            flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        currentCardIndex = index;
        const cardData = activeVocabulary[currentCardIndex];

        kanjiDisplay.textContent = cardData.kanji || cardData.hiragana || "N/A";
        hiraganaDisplay.textContent = cardData.hiragana || "";
        meaningDisplay.textContent = cardData.nghiatiengviet || "N/A";

        updateMarkIndicator();
        setFlashcardControlsDisabled(false);
        updateFlashcardNavButtons();
        updateProgressBarState(false);
        setupAutoNext();
        updateCounts();
    }
    
    function setFlashcardControlsDisabled(disabled) {
        if (flipButton) flipButton.disabled = disabled;
        if (markKnownButton) markKnownButton.disabled = disabled;
        if (markUnknownButton) markUnknownButton.disabled = disabled;
        if (clearMarkButton) clearMarkButton.disabled = disabled;
        if (intervalSelect) intervalSelect.disabled = disabled;
        // Restart button should always be enabled if flashcardApp is visible
        if (restartButton) restartButton.disabled = false;
    }

    function updateFlashcardNavButtons() {
        if (prevButton) prevButton.disabled = (currentCardIndex <= 0);
        if (nextButton) nextButton.disabled = (currentCardIndex >= activeVocabulary.length - 1);
    }

    function showNextCard() {
        clearTimeout(autoNextInterval);
        if (currentCardIndex + 1 < activeVocabulary.length) {
            displayCardAtIndex(currentCardIndex + 1);
        } else {
            displayCardAtIndex(activeVocabulary.length -1); // Stay on last card visually
            showCompletionMessage(`Bạn đã xem hết từ trong bộ "${reviewModeSelect.options[reviewModeSelect.selectedIndex].text}"!`);
            updateProgressBarState(true); // Stop progress bar at 100%
        }
    }

    function showPreviousCard() {
        clearTimeout(autoNextInterval);
        if (currentCardIndex > 0) {
            displayCardAtIndex(currentCardIndex - 1);
        } else if (activeVocabulary.length > 0 && currentCardIndex === 0) {
            // If on the first card and prev is clicked, resFet auto-next for this card
            updateProgressBarState(false);
            setupAutoNext();
        }
    }

    function showCompletionMessage(message) {
        if (isFlipped) {
            flashcard.style.transition = 'none';
            flipCardVisuals(false);
            void flashcard.offsetWidth;
            flashcard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        kanjiDisplay.textContent = "Hoàn thành bộ!";
        hiraganaDisplay.textContent = "";
        meaningDisplay.textContent = message;

        clearTimeout(autoNextInterval);
        updateProgressBarState(true); // Set to 100%

        setFlashcardControlsDisabled(true);
        if (nextButton) nextButton.disabled = true;
        // Prev button might still be enabled if not on the very first card of an empty set
        if (prevButton) prevButton.disabled = (activeVocabulary.length === 0 || currentCardIndex <= 0);

        updateCounts(); // Ensure counts reflect completion
        updateMarkIndicator(); // Clear mark indicator
    }

    function updateCounts() {
        let studiedInSet = 0;
        if (activeVocabulary.length > 0) {
            if (kanjiDisplay.textContent === "Hoàn thành bộ!") {
                studiedInSet = activeVocabulary.length;
            } else {
                studiedInSet = Math.max(0, currentCardIndex + 1); // currentCardIndex is 0-based
            }
        }
        
        const remainingInSet = activeVocabulary.length - studiedInSet;
        if (remainingCountDisplay) remainingCountDisplay.textContent = Math.max(0, remainingInSet);
        if (currentCardNumberDisplay) currentCardNumberDisplay.textContent = (activeVocabulary.length > 0 && currentCardIndex !== -1 && currentCardIndex < activeVocabulary.length) ? currentCardIndex + 1 : (activeVocabulary.length > 0 ? activeVocabulary.length : 0);
        if (totalInReviewSetDisplay) totalInReviewSetDisplay.textContent = activeVocabulary.length;
        if (totalSelectedCountDisplay) totalSelectedCountDisplay.textContent = vocabulary.length;
    }

    function flipCardVisuals(forceFlipState) {
        isFlipped = (typeof forceFlipState === 'boolean') ? forceFlipState : !isFlipped;
        if (flashcard) flashcard.classList.toggle('is-flipped', isFlipped);
    }

    function handleFlipButtonClick() {
        if (flipButton && !flipButton.disabled) {
            flipCardVisuals();
        }
    }

    function markCurrentCard(status) {
        if (currentCardIndex === -1 || currentCardIndex >= activeVocabulary.length || !activeVocabulary[currentCardIndex]) return;

        const currentCardInActive = activeVocabulary[currentCardIndex];
        const cardId = currentCardInActive.id || generateStorageKey(currentCardInActive); // Use pre-generated ID or fallback

        // Update in activeVocabulary
        currentCardInActive.mark = status;

        // Update in session vocabulary
        const originalCardInSession = vocabulary.find(card => (card.id || generateStorageKey(card)) === cardId);
        if (originalCardInSession) originalCardInSession.mark = status;

        // Update in fullVocabulary (master list)
        const originalCardInFull = fullVocabulary.find(card => (card.id || generateStorageKey(card)) === cardId);
        if (originalCardInFull) originalCardInFull.mark = status;

        // Persist to localStorage using the card's unique ID (or generated key if ID is missing)
        if (cardId) {
            const storageKeyToUse = cardId.startsWith(STORAGE_KEY_PREFIX) ? cardId : generateStorageKey(currentCardInActive);
            if (storageKeyToUse) {
                if (status === null) {
                    localStorage.removeItem(storageKeyToUse);
                } else {
                    localStorage.setItem(storageKeyToUse, status);
                }
            }
        }
        updateMarkIndicator();
    }

    function updateMarkIndicator() {
        if (!markIndicator) return;
        if (currentCardIndex === -1 || currentCardIndex >= activeVocabulary.length || !activeVocabulary[currentCardIndex]) {
            markIndicator.textContent = '';
            markIndicator.className = 'mark-indicator';
            return;
        }
        const mark = activeVocabulary[currentCardIndex].mark;
        markIndicator.textContent = mark === 'known' ? 'O' : (mark === 'unknown' ? 'X' : '');
        markIndicator.className = `mark-indicator ${mark === 'known' ? 'mark-known' : (mark === 'unknown' ? 'mark-unknown' : '')}`;
    }

    function setupAutoNext() {
        clearTimeout(autoNextInterval);
        if (autoNextDuration > 0 && activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length && kanjiDisplay.textContent !== "Hoàn thành bộ!") {
            autoNextInterval = setTimeout(() => {
                if (!isFlipped) flipCardVisuals(true);
                // Wait for flip animation if it happened, then show next
                setTimeout(() => { showNextCard(); }, isFlipped ? 0 : 600);
            }, autoNextDuration);
        }
    }
    
    function updateProgressBarState(isCompleteOrDisabled) {
        if (!progressBar) return;
        clearTimeout(autoNextInterval); // Stop any pending auto-next
        progressBar.style.transition = 'none';
        progressBar.style.width = isCompleteOrDisabled ? '100%' : '100%'; // Start full
        void progressBar.offsetWidth; // Force reflow

        if (!isCompleteOrDisabled && autoNextDuration > 0) {
            progressBar.style.transition = `width ${autoNextDuration / 1000}s linear`;
            setTimeout(() => { progressBar.style.width = '0%'; }, 50); // Start depletion
        } else if (autoNextDuration <= 0) {
             progressBar.style.width = '100%'; // Indefinite, so show full
        }
    }

    function handleRestartFlashcards() {
        clearTimeout(autoNextInterval);
        activeVocabulary = [];
        vocabulary = [];
        currentCardIndex = -1;

        const fcAppTitle = flashcardApp.querySelector('h2');
        if (fcAppTitle) fcAppTitle.textContent = "Flashcard N3"; // Reset title

        if (currentStudyingSet) {
            const setIndex = wordSets.findIndex(s => s.id === currentStudyingSet.id);
            if (setIndex !== -1) {
                viewWordSetDetail(wordSets[setIndex]); // Go back to detail of current set
            } else {
                showScreen('wordSetManager'); // Fallback to manager
            }
        } else {
            showScreen('wordSetManager'); // Default to word set manager
        }
        if (reviewModeSelect) reviewModeSelect.value = 'all';
        if (backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.classList.add('hidden');
    }

    function handleClearAllMarks() {
        if (confirm("Bạn có chắc chắn muốn xóa TẤT CẢ các đánh dấu (O/X) đã lưu không? Hành động này không thể hoàn tác.")) {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).startsWith(STORAGE_KEY_PREFIX)) {
                    keysToRemove.push(localStorage.key(i));
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            
            fullVocabulary.forEach(card => card.mark = null);
            if (vocabulary.length > 0) vocabulary.forEach(card => card.mark = null);
            if (activeVocabulary.length > 0) activeVocabulary.forEach(card => card.mark = null);

            if (flashcardApp && !flashcardApp.classList.contains('hidden')) {
                updateMarkIndicator();
                applyReviewMode(); // Re-filter and display
            }
            // No need for full prepareInitialSetup() unless data source changed.
            alert("Đã xóa tất cả đánh dấu đã lưu.");
        }
    }

    // --- Word Set Management Functions ---
    function saveWordSets() {
        localStorage.setItem(WORD_SETS_STORAGE_KEY, JSON.stringify(wordSets));
    }

    function displayWordSets(setsToDisplay) {
        if (!wordSetListDiv || !noWordSetsMessage) return;
        wordSetListDiv.innerHTML = '';
        noWordSetsMessage.classList.toggle('hidden', setsToDisplay.length > 0 || (searchWordSetInput && searchWordSetInput.value.trim() !== ''));
        if (noSearchResultsMessage) {
            noSearchResultsMessage.classList.toggle('hidden', !(setsToDisplay.length === 0 && searchWordSetInput && searchWordSetInput.value.trim() !== ''));
        }

        if (setsToDisplay.length === 0) return;

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
            item.querySelector('.view-set-btn').addEventListener('click', () => viewWordSetDetail(set));
            item.querySelector('.study-set-btn').addEventListener('click', () => {
                currentStudyingSet = set;
                const words = fullVocabulary.slice(set.start - 1, set.end);
                initializeAppWithRange(words, set.name);
            });
            item.querySelector('.delete-set-btn').addEventListener('click', () => deleteWordSet(set));
            wordSetListDiv.appendChild(item);
        });
    }

    function filterAndDisplayWordSets() {
        const searchTerm = searchWordSetInput ? searchWordSetInput.value.toLowerCase().trim() : "";
        const filteredSets = searchTerm
            ? wordSets.filter(set => set.name && set.name.toLowerCase().includes(searchTerm))
            : wordSets;
        displayWordSets(filteredSets);
    }

    function loadWordSets() {
        const storedSets = localStorage.getItem(WORD_SETS_STORAGE_KEY);
        if (storedSets) {
            wordSets = JSON.parse(storedSets);
        } else {
            // Default sets if nothing is stored
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
        if (isNaN(start) || isNaN(end) || start < 1 || end < start || (fullVocabulary.length > 0 && end > fullVocabulary.length)) {
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
            id: Date.now().toString() + "_" + Math.random().toString(36).substring(2, 7),
            name: name,
            start: start,
            end: end
        };
        wordSets.push(newSet);
        saveWordSets();
        filterAndDisplayWordSets();
        wordSetNameInput.value = '';
        updateWordSetTotalMessage();
    }

    function deleteWordSet(setToDelete) {
        if (!setToDelete || typeof setToDelete.id === 'undefined') {
            console.error("Đối tượng bộ từ không hợp lệ để xóa:", setToDelete);
            return;
        }
        const setToDeleteIndex = wordSets.findIndex(set => set.id === setToDelete.id);
        if (setToDeleteIndex !== -1) {
            if (confirm(`Bạn có chắc chắn muốn xóa bộ từ "${escapeHTML(wordSets[setToDeleteIndex].name)}" không?`)) {
                wordSets.splice(setToDeleteIndex, 1);
                saveWordSets();
                filterAndDisplayWordSets();
                if (currentStudyingSet && currentStudyingSet.id === setToDelete.id) {
                    currentStudyingSet = null; // Clear if the detailed view set is deleted
                    showScreen('wordSetManager'); // Go back to manager
                }
            }
        } else {
            alert("Lỗi: Không tìm thấy bộ từ để xóa.");
        }
    }

    function viewWordSetDetail(setObject) {
        if (!setObject || typeof setObject.id === 'undefined' || !wordSets.some(s => s.id === setObject.id)) {
            console.error("Thông tin bộ từ không hợp lệ hoặc không tồn tại:", setObject);
            alert("Lỗi: Không thể xem chi tiết bộ từ này.");
            showScreen('wordSetManager');
            return;
        }
        currentStudyingSet = setObject;

        if (detailViewName) detailViewName.textContent = escapeHTML(setObject.name);
        if (detailViewRange) detailViewRange.textContent = `Từ ${setObject.start} đến ${setObject.end} (Tổng: ${setObject.end - setObject.start + 1} từ)`;

        if (!fullVocabulary || fullVocabulary.length === 0) {
            if(detailWordListDiv) detailWordListDiv.textContent = "Dữ liệu từ vựng chưa được tải.";
            return;
        }

        const wordsInSet = fullVocabulary.slice(setObject.start - 1, setObject.end);
        if (detailWordListDiv) {
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
                    row.insertCell().textContent = escapeHTML(word.kanji || '-');
                    row.insertCell().textContent = escapeHTML(word.hiragana || '-');
                    row.insertCell().textContent = escapeHTML(word.nghiatiengviet);
                });
                detailWordListDiv.appendChild(table);
            } else {
                detailWordListDiv.textContent = "Không có từ nào trong bộ này.";
            }
        }
        showScreen('wordSetDetail');
    }

    function updateWordSetTotalMessage() {
        if (wordSetTotalMessage) {
            wordSetTotalMessage.textContent = fullVocabulary.length > 0
                ? `Tổng số từ trong file: ${fullVocabulary.length}. Nhập khoảng từ để tạo bộ.`
                : "Đang chờ tải dữ liệu từ vựng...";
        }
    }

 async function startTestFromConfig(sourceVocabArray = null, sourceSetName = null) {
    // ... (Phần đầu của hàm giữ nguyên: lấy numQuestionsInputVal, type, vocabSourceForTest, ...)
    const numQuestionsInputVal = numTestQuestionsInput ? parseInt(numTestQuestionsInput.value) : 10;
    const type = testTypeSelect ? testTypeSelect.value : 'jpToVi'; // Mặc định
    let vocabSourceForTest;
    let effectiveStart = 1, effectiveEnd = fullVocabulary.length;

    // Hiển thị loading UI nếu là AI test
    if (type === 'aiFillInTheBlank') {
        showScreen('loading'); // Hoặc một UI loading riêng cho test
        if (loadingMessage && loadingMessage.querySelector('p')) {
            loadingMessage.querySelector('p').textContent = "Đang chuẩn bị câu hỏi từ AI. Vui lòng đợi...";
        }
    }

    if (sourceVocabArray) { // Testing a specific word set
        vocabSourceForTest = [...sourceVocabArray];
        if (currentStudyingSet) {
            effectiveStart = currentStudyingSet.start;
            effectiveEnd = currentStudyingSet.end;
        } else { // Trường hợp sourceVocabArray được truyền vào nhưng không phải từ một set cụ thể (ít xảy ra)
            effectiveStart = 1; // Hoặc tính toán dựa trên sourceVocabArray nếu có thông tin
            effectiveEnd = vocabSourceForTest.length;
        }
    } else { // Testing a custom range from testSetup
        effectiveStart = testStartWordInput ? parseInt(testStartWordInput.value) : 1;
        effectiveEnd = testEndWordInput ? parseInt(testEndWordInput.value) : fullVocabulary.length;

        if (isNaN(effectiveStart) || isNaN(effectiveEnd) || effectiveStart < 1 || effectiveEnd < effectiveStart || effectiveEnd > fullVocabulary.length) {
            alert(`Vui lòng nhập khoảng từ vựng hợp lệ (1-${fullVocabulary.length}, Từ <= Đến).`);
            showScreen('testSetup');
            if (type === 'aiFillInTheBlank' && loadingMessage) loadingMessage.classList.add('hidden'); // Ẩn loading nếu lỗi sớm
            return;
        }
        vocabSourceForTest = fullVocabulary.slice(effectiveStart - 1, effectiveEnd);
    }

    if (vocabSourceForTest.length < 1) {
        alert("Không đủ từ vựng trong nguồn đã chọn để tạo bài kiểm tra.");
        showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
        if (type === 'aiFillInTheBlank' && loadingMessage) loadingMessage.classList.add('hidden');
        return;
    }

    // Với AI, số câu hỏi không thể lớn hơn số từ nguồn vì mỗi từ tạo 1 câu
    // Với các loại khác, số câu hỏi không thể lớn hơn số từ nguồn
    if (numQuestionsInputVal > vocabSourceForTest.length) {
         alert(`Số câu hỏi (${numQuestionsInputVal}) không thể lớn hơn số từ vựng có sẵn (${vocabSourceForTest.length}). Số câu hỏi sẽ được điều chỉnh.`);
         if (numTestQuestionsInput) numTestQuestionsInput.value = vocabSourceForTest.length; // Cập nhật UI
         // numQuestionsInputVal sẽ được cập nhật bên trong generateTestQuestions nếu cần
    }
    
    // Điều kiện này quan trọng cho các loại test truyền thống để tạo distractors
    if (type !== 'aiFillInTheBlank' && vocabSourceForTest.length < 4 && numQuestionsInputVal > 1 && vocabSourceForTest.length < numQuestionsInputVal) {
         if (numQuestionsInputVal === 1 && vocabSourceForTest.length >=1) {
            // Cho phép tạo 1 câu hỏi nếu có ít nhất 1 từ
         } else {
            alert("Nguồn từ vựng quá ít (< 4 từ) để tạo nhiều câu hỏi với các lựa chọn khác nhau cho loại test này. Vui lòng giảm số câu hỏi hoặc mở rộng nguồn từ.");
            showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
            if (type === 'aiFillInTheBlank' && loadingMessage) loadingMessage.classList.add('hidden');
            return;
         }
    }


    const speedMode = testSpeedModeSelect ? testSpeedModeSelect.value : 'unlimited';
    const secondsPerQuestion = SPEED_MODES[speedMode] || Infinity;

    if (secondsPerQuestion !== Infinity && numQuestionsInputVal > 0) {
        totalTestTimeSeconds = numQuestionsInputVal * secondsPerQuestion;
    } else {
        totalTestTimeSeconds = Infinity;
    }
    timeLeftSeconds = totalTestTimeSeconds;

    currentTestConfig = {
        numQuestions: numQuestionsInputVal, // Sẽ dùng giá trị đã được điều chỉnh nếu cần
        type: type,
        start: effectiveStart,
        end: effectiveEnd,
        sourceSetName: sourceSetName,
        isFromSet: !!sourceVocabArray,
        speedMode: speedMode
    };

    // `await` ở đây vì `generateTestQuestions` là `async`
    testQuestions = await generateTestQuestions(vocabSourceForTest, numQuestionsInputVal, type);

    if (loadingMessage) loadingMessage.classList.add('hidden'); // Ẩn loading sau khi có kết quả

    if (!testQuestions || testQuestions.length === 0) {
        alert("Không thể tạo câu hỏi. Vui lòng kiểm tra lại dữ liệu và cài đặt, hoặc thử lại sau nếu là lỗi mạng khi tạo câu hỏi AI.");
        showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
        return;
    }
     // Nếu tạo câu hỏi AI và số câu hỏi tạo được ít hơn yêu cầu (do lỗi API từng câu)
    if (type === 'aiFillInTheBlank' && testQuestions.length < numQuestionsInputVal) {
        alert(`Đã tạo được ${testQuestions.length}/${numQuestionsInputVal} câu hỏi AI. Một số câu có thể đã gặp lỗi trong quá trình tạo.`);
        if (testQuestions.length === 0) { // Không tạo được câu nào
             showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
             return;
        }
        // Cập nhật lại currentTestConfig.numQuestions để phản ánh đúng số câu thực tế
        currentTestConfig.numQuestions = testQuestions.length;
        if (numTestQuestionsInput) numTestQuestionsInput.value = testQuestions.length; // Cập nhật UI nếu cần
        // Cập nhật lại totalTestTimeSeconds nếu thời gian dựa trên số câu
        if (secondsPerQuestion !== Infinity && testQuestions.length > 0) {
            totalTestTimeSeconds = testQuestions.length * secondsPerQuestion;
        } else if (testQuestions.length === 0) {
            totalTestTimeSeconds = Infinity;
        }
        timeLeftSeconds = totalTestTimeSeconds;
    }


    currentTestQuestionIndex = 0;
    userScore = 0;
    testQuestions.forEach(q => q.userSelectedAnswer = null);

    showScreen('testInterface');
    if (finishTestButton) finishTestButton.classList.remove('hidden');

    const testInterfaceTitle = document.querySelector('#testInterface h2');
    if (testInterfaceTitle) {
        let titleText = sourceSetName ? `Bộ: ${escapeHTML(sourceSetName)}` : `Kiểm Tra`;
        const typeText = testTypeSelect.options[testTypeSelect.selectedIndex].text;
        testInterfaceTitle.textContent = `Bài Kiểm Tra (${escapeHTML(typeText)}) - ${titleText}`;
    }

    populateTestQuestionList();
    displayTestQuestion(currentTestQuestionIndex);
    startTestTimer();
}

function formatTime(totalSeconds) {
    if (totalSeconds === Infinity || isNaN(totalSeconds) || totalSeconds < 0) {
        return "Không giới hạn";
    }
    if (totalSeconds === 0) {
        return "00:00";
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
} 
function updateTimerDisplay() {
    if (timeLeftDisplay) {
        timeLeftDisplay.textContent = formatTime(timeLeftSeconds);
    }
}
function stopTestTimer() {
    clearInterval(testTimerInterval);
    testTimerInterval = null; // Đặt lại để biết timer đã dừng
    // Bạn có thể muốn giữ lại hiển thị thời gian cuối cùng hoặc reset nó
    // if (timeLeftDisplay) timeLeftDisplay.textContent = formatTime(0); // Ví dụ: reset về 00:00
}function startTestTimer() {
    stopTestTimer(); // Đảm bảo dừng timer cũ nếu có
    updateTimerDisplay(); // Hiển thị thời gian ban đầu (có thể là "Không giới hạn")

    if (totalTestTimeSeconds === Infinity || totalTestTimeSeconds <= 0) {
        // Đã xử lý hiển thị "Không giới hạn" trong updateTimerDisplay
        return;
    }

    testTimerInterval = setInterval(() => {
        if (timeLeftSeconds > 0) {
            timeLeftSeconds--;
            updateTimerDisplay();
        }

        if (timeLeftSeconds <= 0) { // <= 0 để bắt cả trường hợp bắt đầu bằng 0
            stopTestTimer();
            // Chỉ alert và tự động nộp nếu người dùng chưa nộp
            // Kiểm tra xem màn hình testResults đã hiển thị chưa để tránh gọi finishTest nhiều lần
            if (testInterfaceDiv && !testInterfaceDiv.classList.contains('hidden')) {
                alert("Hết giờ làm bài!");
                finishTest(true); // Gọi finishTest với cờ báo là do hết giờ
            }
        }
    }, 1000);
}
    // function generateTestQuestions(sourceVocab, numQs, type) {
    //     const questions = [];
    //     let availableVocabForSelection = [...sourceVocab]; // Vocab to pick correct answers from

    //     if (availableVocabForSelection.length < numQs) {
    //         console.error("Không đủ từ vựng nguồn để tạo đủ số câu hỏi.");
    //         return [];
    //     }
        
    //     for (let i = 0; i < numQs; i++) {
    //         if (availableVocabForSelection.length === 0) break;

    //         const correctIndex = Math.floor(Math.random() * availableVocabForSelection.length);
    //         const correctAnswerCard = availableVocabForSelection.splice(correctIndex, 1)[0];

    //         let questionText, correctAnswerValue;
    //         const options = [];

    //         if (type === 'viToJp') {
    //             questionText = correctAnswerCard.nghiatiengviet;
    //             correctAnswerValue = correctAnswerCard.kanji || correctAnswerCard.hiragana;
    //         } else { // jpToVi
    //             questionText = correctAnswerCard.kanji || correctAnswerCard.hiragana;
    //             correctAnswerValue = correctAnswerCard.nghiatiengviet;
    //         }
    //         options.push(correctAnswerValue);

    //         // Create distractors
    //         let distractorsNeeded = Math.min(3, sourceVocab.length - 1); // Need up to 3 distractors, or fewer if vocab is small
    //         let tempVocabForDistractors = sourceVocab.filter(word =>
    //             (word.id || generateStorageKey(word)) !== (correctAnswerCard.id || generateStorageKey(correctAnswerCard))
    //         );
    //         shuffleArray(tempVocabForDistractors);

    //         for (let j = 0; j < distractorsNeeded && tempVocabForDistractors.length > 0; j++) {
    //             const distractorCard = tempVocabForDistractors.pop();
    //             const distractorValue = type === 'viToJp'
    //                 ? (distractorCard.kanji || distractorCard.hiragana)
    //                 : distractorCard.nghiatiengviet;
    //             if (!options.includes(distractorValue)) { // Avoid duplicate options
    //                 options.push(distractorValue);
    //             } else {
    //                 j--; // Try again to get a unique distractor
    //             }
    //         }
            
    //         // If not enough unique distractors, fill with placeholders if absolutely necessary
    //         // (Ideally, sourceVocab should be large enough)
    //         while(options.length < Math.min(4, sourceVocab.length) && tempVocabForDistractors.length > 0) {
    //              const distractorCard = tempVocabForDistractors.pop();
    //              const distractorValue = type === 'viToJp'
    //                 ? (distractorCard.kanji || distractorCard.hiragana)
    //                 : distractorCard.nghiatiengviet;
    //             if (!options.includes(distractorValue)) options.push(distractorValue);
    //         }
    //         // If still not enough options (e.g. sourceVocab has < 4 unique items), it's okay.
    //         // The UI will display fewer options.

    //         shuffleArray(options);
    //         questions.push({
    //             id: `q_${i}_${Date.now()}`, // Unique ID for the question
    //             questionText: questionText,
    //             options: options,
    //             correctAnswer: correctAnswerValue,
    //             originalCard: correctAnswerCard,
    //             userSelectedAnswer: null
    //         });
    //     }
    //     return questions;
    // }
    async function generateTestQuestions(sourceVocab, numQs, type) { // Thêm async
    const questions = [];
    let availableVocabForSelection = [...sourceVocab];

    if (availableVocabForSelection.length === 0) {
        console.error("Nguồn từ vựng rỗng.");
        return [];
    }
    if (availableVocabForSelection.length < numQs && type !== 'aiFillInTheBlank') { // Với AI, ta lấy lần lượt
        console.warn(`Không đủ từ vựng nguồn (${availableVocabForSelection.length}) để tạo đủ ${numQs} câu hỏi. Sẽ tạo tối đa có thể.`);
        numQs = availableVocabForSelection.length;
    }


    if (type === 'aiFillInTheBlank') {
        // --- LOGIC TẠO CÂU HỎI BẰNG AI ---
        if (availableVocabForSelection.length < numQs) {
            alert(`Không đủ từ vựng nguồn (${availableVocabForSelection.length}) để tạo ${numQs} câu hỏi AI. Sẽ tạo tối đa có thể.`);
            numQs = availableVocabForSelection.length;
        }
        
        // Chọn ngẫu nhiên numQs từ để tạo câu hỏi
        shuffleArray(availableVocabForSelection);
        const wordsForAI = availableVocabForSelection.slice(0, numQs);

        for (let i = 0; i < wordsForAI.length; i++) {
            const targetWordCard = wordsForAI[i];

            // Tạo danh sách gợi ý (distractor hints) từ phần còn lại của sourceVocab
            // Tránh gửi chính targetWordCard làm hint
            const hintVocab = sourceVocab.filter(v =>
                (v.id || generateStorageKey(v)) !== (targetWordCard.id || generateStorageKey(targetWordCard))
            );
            shuffleArray(hintVocab);
            const vocabListHint = hintVocab.slice(0, 15).map(v => ({ // Gửi tối đa 15 gợi ý
                kanji: v.kanji,
                hiragana: v.hiragana,
                nghiatiengviet: v.nghiatiengviet, // Thêm nghĩa để AI có thể hiểu rõ hơn
                type: v.type
            }));

            try {
                // Hiển thị thông báo đang tạo câu hỏi cho người dùng
                if (questionTextDisplay) questionTextDisplay.textContent = `Đang tạo câu hỏi AI cho từ: "${targetWordCard.kanji || targetWordCard.hiragana}" (${i + 1}/${wordsForAI.length})...`;
                if (optionsArea) optionsArea.innerHTML = '<div class="loading-spinner"></div>';


                const response = await fetch('../api/generate_question.php', { // Đảm bảo đường dẫn đúng
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        targetWord: {
                            kanji: targetWordCard.kanji,
                            hiragana: targetWordCard.hiragana,
                            nghiatiengviet: targetWordCard.nghiatiengviet,
                            type: targetWordCard.type
                        },
                        vocabListHint: vocabListHint
                    })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({ error: "Lỗi không xác định từ server", details: response.statusText }));
                    console.error(`Lỗi API khi tạo câu hỏi cho từ "${targetWordCard.kanji || targetWordCard.hiragana}": ${response.status}`, errorData);
                    // Có thể hiển thị lỗi cho người dùng và bỏ qua câu này hoặc dừng lại
                    // Ví dụ: questions.push({ error: `Không thể tạo câu hỏi cho: ${targetWordCard.kanji || targetWordCard.hiragana}` });
                    alert(`Lỗi khi tạo câu hỏi AI cho từ "${targetWordCard.kanji || targetWordCard.hiragana}": ${errorData.error || response.statusText}. Câu này sẽ bị bỏ qua.`);
                    continue; // Bỏ qua câu hỏi này
                }

                const aiQuestionData = await response.json();

                if (aiQuestionData.error) {
                     console.error(`Lỗi từ API (trong JSON response) cho từ "${targetWordCard.kanji || targetWordCard.hiragana}":`, aiQuestionData.error);
                     alert(`Lỗi khi tạo câu hỏi AI cho từ "${targetWordCard.kanji || targetWordCard.hiragana}": ${aiQuestionData.error}. Câu này sẽ bị bỏ qua.`);
                     continue;
                }

                // Kiểm tra cấu trúc dữ liệu trả về từ API
                if (!aiQuestionData.questionText || !aiQuestionData.options || !aiQuestionData.correctAnswer) {
                    console.error("Dữ liệu câu hỏi AI trả về không hợp lệ:", aiQuestionData);
                    alert(`Dữ liệu câu hỏi AI cho từ "${targetWordCard.kanji || targetWordCard.hiragana}" không hợp lệ. Câu này sẽ bị bỏ qua.`);
                    continue;
                }

                questions.push({
                    id: `q_ai_${i}_${Date.now()}`,
                    questionText: aiQuestionData.questionText, // Từ API
                    options: aiQuestionData.options,           // Từ API (đã được xáo trộn ở backend)
                    correctAnswer: aiQuestionData.correctAnswer, // Từ API
                    originalCard: targetWordCard, // Giữ lại để tham khảo nếu cần
                    userSelectedAnswer: null,
                    type: 'aiFillInTheBlank' // Đánh dấu loại câu hỏi
                });

            } catch (error) {
                console.error(`Lỗi JavaScript khi gọi API cho từ "${targetWordCard.kanji || targetWordCard.hiragana}":`, error);
                alert(`Lỗi kết nối khi tạo câu hỏi AI cho từ "${targetWordCard.kanji || targetWordCard.hiragana}". Câu này sẽ bị bỏ qua.`);
                // questions.push({ error: `Lỗi kết nối khi tạo câu hỏi cho: ${targetWordCard.kanji || targetWordCard.hiragana}` });
                continue; // Bỏ qua câu hỏi này
            }
        }
        if (questionTextDisplay) questionTextDisplay.textContent = ""; // Xóa thông báo "Đang tạo..."
        if (optionsArea) optionsArea.innerHTML = "";

    } else {
        // --- LOGIC TẠO CÂU HỎI TRUYỀN THỐNG (jpToVi, viToJp) ---
        if (availableVocabForSelection.length < numQs) {
            numQs = availableVocabForSelection.length;
        }
         shuffleArray(availableVocabForSelection); // Xáo trộn để lấy ngẫu nhiên từ cho câu hỏi

        for (let i = 0; i < numQs; i++) {
            if (availableVocabForSelection.length === 0) break; // Should not happen if numQs is set correctly

            // Lấy từ đầu tiên sau khi xáo trộn, sau đó loại bỏ để không bị trùng
            const correctAnswerCard = availableVocabForSelection.shift();


            let questionText, correctAnswerValue;
            const options = [];

            if (type === 'viToJp') {
                questionText = correctAnswerCard.nghiatiengviet;
                correctAnswerValue = correctAnswerCard.kanji || correctAnswerCard.hiragana;
            } else { // jpToVi (mặc định)
                questionText = correctAnswerCard.kanji || correctAnswerCard.hiragana;
                correctAnswerValue = correctAnswerCard.nghiatiengviet;
            }
            options.push(correctAnswerValue);

            // Tạo distractors
            // Lấy từ sourceVocab gốc, trừ correctAnswerCard
            let tempVocabForDistractors = sourceVocab.filter(word =>
                (word.id || generateStorageKey(word)) !== (correctAnswerCard.id || generateStorageKey(correctAnswerCard))
            );
            shuffleArray(tempVocabForDistractors);

            let distractorsNeeded = Math.min(3, tempVocabForDistractors.length);

            for (let j = 0; j < distractorsNeeded && tempVocabForDistractors.length > 0; j++) {
                // Lấy từ đầu danh sách đã xáo trộn, sau đó loại bỏ
                const distractorCard = tempVocabForDistractors.shift();
                const distractorValue = type === 'viToJp'
                    ? (distractorCard.kanji || distractorCard.hiragana)
                    : distractorCard.nghiatiengviet;

                if (!options.includes(distractorValue)) {
                    options.push(distractorValue);
                } else {
                     // Nếu bị trùng (rất hiếm với sourceVocab lớn), thử lấy từ tiếp theo
                     // hoặc giảm số lượng distractors cần thiết nếu không còn từ nào
                    if(tempVocabForDistractors.length > 0) j--; // Thử lại với từ khác
                    else break; // Hết từ để chọn
                }
            }

            // Đảm bảo có ít nhất 2 options nếu có thể (1 đúng, 1 sai)
            // và tối đa 4 options.
            while (options.length < Math.min(4, sourceVocab.length) && tempVocabForDistractors.length > 0) {
                const distractorCard = tempVocabForDistractors.shift();
                const distractorValue = type === 'viToJp'
                    ? (distractorCard.kanji || distractorCard.hiragana)
                    : distractorCard.nghiatiengviet;
                if (!options.includes(distractorValue)) {
                    options.push(distractorValue);
                }
            }

            shuffleArray(options);
            questions.push({
                id: `q_${type}_${i}_${Date.now()}`,
                questionText: questionText,
                options: options,
                correctAnswer: correctAnswerValue,
                originalCard: correctAnswerCard,
                userSelectedAnswer: null,
                type: type
            });
        }
    }
    return questions;
}


    function populateTestQuestionList() {
        if (!testQuestionList) return;
        testQuestionList.innerHTML = ''; // Clear previous list
        testQuestions.forEach((_, index) => {
            const listItem = document.createElement('button');
            listItem.classList.add('test-question-list-item');
            listItem.textContent = index + 1;
            listItem.dataset.questionIndex = index;
            listItem.addEventListener('click', () => jumpToTestQuestion(index));
            testQuestionList.appendChild(listItem);
        });
    }

    function updateTestQuestionListVisuals() {
        if (!testQuestionList) return;
        const items = testQuestionList.querySelectorAll('.test-question-list-item');
        items.forEach((item, index) => {
            item.classList.remove('current', 'answered');
            if (index === currentTestQuestionIndex) {
                item.classList.add('current');
            }
            if (testQuestions[index] && testQuestions[index].userSelectedAnswer !== null) {
                item.classList.add('answered');
            }
        });
    }

  function displayTestQuestion(index) {
    if (!testQuestions || testQuestions.length === 0 || index < 0 || index >= testQuestions.length) {
        console.warn("displayTestQuestion: Invalid index or no test questions.");
        if(questionTextDisplay) questionTextDisplay.textContent = "Không có câu hỏi để hiển thị hoặc chỉ số không hợp lệ.";
        if(optionsArea) optionsArea.innerHTML = "";
        // Disable nav buttons or show completion message
        if (prevTestQuestionButton) prevTestQuestionButton.disabled = true;
        if (nextTestQuestionButton) nextTestQuestionButton.disabled = true;
        if (finishTestButton) finishTestButton.disabled = true; // Or show results if appropriate
        return;
    }

    currentTestQuestionIndex = index;
    const question = testQuestions[index];

    // Xử lý trường hợp câu hỏi bị lỗi khi tạo (đã thêm continue trong generateTestQuestions)
    // if (question.error) {
    //     if (questionTextDisplay) questionTextDisplay.textContent = `Lỗi: ${escapeHTML(question.error)}`;
    //     if (optionsArea) optionsArea.innerHTML = '<p>Không thể hiển thị câu hỏi này.</p>';
    //     // Vô hiệu hóa các nút tùy chọn nếu cần
    //     // Xử lý navigation
    //     updateTestNavigationButtons();
    //     updateTestQuestionListVisuals();
    //     return;
    // }

    // `question.questionText` đã được escapeHTML nếu cần từ API (hoặc bạn escape ở đây)
    // Nội dung câu hỏi từ AI (fill in the blank) có thể chứa "___"
    // Chúng ta sẽ thay thế nó bằng một span để dễ style
    let displayableQuestionText = escapeHTML(question.questionText);
    if (question.type === 'aiFillInTheBlank') {
        displayableQuestionText = displayableQuestionText.replace(/＿＿＿|___/g, '<span class="blank-placeholder">＿＿＿</span>');
    }
    if (questionTextDisplay) questionTextDisplay.innerHTML = displayableQuestionText; // Dùng innerHTML vì có span

    if (optionsArea) {
        optionsArea.innerHTML = '';
        question.options.forEach(optionText => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.textContent = escapeHTML(optionText);
            button.addEventListener('click', () => handleAnswerSelection(optionText, button, index));
            if (question.userSelectedAnswer === optionText) {
                button.classList.add('selected');
            }
            optionsArea.appendChild(button);
        });
    }

    if (currentQuestionNumDisplay) currentQuestionNumDisplay.textContent = index + 1;
    if (totalTestQuestionsDisplay) totalTestQuestionsDisplay.textContent = testQuestions.length;

    updateTestNavigationButtons();
    updateTestQuestionListVisuals();
}


    function handleAnswerSelection(selectedOptionText, clickedOptionButton, questionIndex) {
        // Ensure questionIndex is valid and testQuestions[questionIndex] exists
        if (questionIndex < 0 || questionIndex >= testQuestions.length || !testQuestions[questionIndex]) {
            console.error("handleAnswerSelection: Invalid questionIndex or question not found.");
            return;
        }
        const question = testQuestions[questionIndex];
        question.userSelectedAnswer = selectedOptionText; // Store the answer

        // Update UI for options of the current question
        const currentOptionButtons = optionsArea.querySelectorAll('.option-button');
        currentOptionButtons.forEach(btn => btn.classList.remove('selected'));
        clickedOptionButton.classList.add('selected');

        updateTestQuestionListVisuals(); // Mark as answered in navigator
    }

    function updateTestNavigationButtons() {
        if (prevTestQuestionButton) prevTestQuestionButton.disabled = (currentTestQuestionIndex === 0);
        if (nextTestQuestionButton) nextTestQuestionButton.disabled = (currentTestQuestionIndex >= testQuestions.length - 1);
    }

    function showNextTestQuestion() {
        if (currentTestQuestionIndex < testQuestions.length - 1) {
            displayTestQuestion(currentTestQuestionIndex + 1);
        }
    }

    function showPrevTestQuestion() {
        if (currentTestQuestionIndex > 0) {
            displayTestQuestion(currentTestQuestionIndex - 1);
        }
    }

    function jumpToTestQuestion(index) {
        if (index >= 0 && index < testQuestions.length) {
            displayTestQuestion(index);
        }
    }
function finishTest(isTimeUp = false) {
    stopTestTimer(); // Quan trọng: Dừng bộ đếm khi kết thúc

    userScore = 0;
    // Không cần mảng answeredItemsForReview riêng nữa,
    // chúng ta sẽ lặp trực tiếp qua testQuestions để tạo HTML.

    testQuestions.forEach(q => {
        if (q.userSelectedAnswer === q.correctAnswer) {
            userScore++;
        }
    });

    showScreen('testResults'); // Chuyển màn hình trước
    if (finishTestButton) finishTestButton.classList.add('hidden');

    if (scoreCorrectDisplay) scoreCorrectDisplay.textContent = userScore;
    if (scoreTotalDisplay) scoreTotalDisplay.textContent = testQuestions.length;
    const percentage = testQuestions.length > 0 ? Math.round((userScore / testQuestions.length) * 100) : 0;
    if (scorePercentageDisplay) scorePercentageDisplay.textContent = percentage;

    const scoreCircle = document.querySelector('.score-circle');
    if (scoreCircle) scoreCircle.style.setProperty('--score-percent', `${percentage}%`);

    // --- PHẦN CẬP NHẬT CHÍNH CHO REVIEW ANSWERS ---
    const allAnswersListDiv = document.getElementById('allAnswersList'); // Lấy div mới từ HTML
    if (allAnswersListDiv) { // Kiểm tra xem div này có tồn tại không
        allAnswersListDiv.innerHTML = ''; // Xóa nội dung cũ

        if (isTimeUp) {
            const timeUpMessageP = document.createElement('p');
            timeUpMessageP.innerHTML = '<strong>Bài kiểm tra kết thúc do hết thời gian.</strong>';
            timeUpMessageP.style.color = 'var(--danger-color, red)'; // Sử dụng biến CSS nếu có
            timeUpMessageP.style.fontWeight = 'bold';
            timeUpMessageP.style.textAlign = 'center';
            timeUpMessageP.style.marginBottom = '15px';
            // Chèn thông báo này vào đầu của reviewAnswersArea hoặc trước allAnswersListDiv
            if (reviewAnswersArea && reviewAnswersArea.firstChild.nodeName === 'H4') {
                 reviewAnswersArea.insertBefore(timeUpMessageP, reviewAnswersArea.children[1]);
            } else if (reviewAnswersArea) {
                 reviewAnswersArea.prepend(timeUpMessageP);
            }
        }

        if (testQuestions.length > 0) {
            testQuestions.forEach((question, index) => {
                const listItem = document.createElement('div');
                listItem.classList.add('review-answer-item');

                // 1. Hiển thị câu hỏi
                const questionP = document.createElement('p');
                questionP.classList.add('question-review-text');
                questionP.textContent = `Câu ${index + 1}: ${escapeHTML(question.questionText)}`;
                listItem.appendChild(questionP);

                // 2. Hiển thị câu trả lời của người dùng với màu tương ứng
                const userAnswerP = document.createElement('p');
                userAnswerP.classList.add('user-answer-text');
                userAnswerP.innerHTML = "Bạn chọn: "; // Thêm prefix

                const userAnswerSpan = document.createElement('span');
                if (question.userSelectedAnswer !== null && question.userSelectedAnswer !== undefined) {
                    userAnswerSpan.textContent = escapeHTML(question.userSelectedAnswer);
                    if (question.userSelectedAnswer === question.correctAnswer) {
                        userAnswerSpan.classList.add('user-choice-correct');
                    } else {
                        userAnswerSpan.classList.add('user-choice-incorrect');
                    }
                } else {
                    userAnswerSpan.textContent = "Chưa trả lời";
                    userAnswerSpan.classList.add('user-choice-unanswered');
                }
                userAnswerP.appendChild(userAnswerSpan);
                listItem.appendChild(userAnswerP);

                // 3. Hiển thị đáp án đúng (nếu người dùng trả lời sai hoặc chưa trả lời)
                if (question.userSelectedAnswer !== question.correctAnswer || question.userSelectedAnswer === null) {
                    const correctAnswerP = document.createElement('p');
                    correctAnswerP.classList.add('correct-answer-text');
                    correctAnswerP.textContent = escapeHTML(question.correctAnswer); // CSS đã có ::before
                    listItem.appendChild(correctAnswerP);
                }
                allAnswersListDiv.appendChild(listItem);
            });
        } else {
            allAnswersListDiv.innerHTML = '<p class="empty-message">Không có câu trả lời nào để xem lại.</p>';
        }
    } else {
        // Nếu reviewAnswersArea vẫn là cấu trúc cũ (ul) thì bạn có thể giữ lại logic cũ hoặc báo lỗi
        // Ví dụ: giữ lại logic cũ nếu allAnswersListDiv không tìm thấy
        console.warn("DIV '#allAnswersList' không tìm thấy. Sử dụng cấu trúc review cũ (nếu có).");
        if (reviewAnswersArea) { // Fallback cho cấu trúc cũ nếu bạn chưa xóa hết
            reviewAnswersArea.innerHTML = '<h4>Xem lại câu trả lời:</h4>';
             if (isTimeUp) {
                const timeUpMessage = document.createElement('p');
                timeUpMessage.innerHTML = '<strong>Bài kiểm tra kết thúc do hết thời gian.</strong>';
                timeUpMessage.style.color = 'red';
                timeUpMessage.style.fontWeight = 'bold';
                reviewAnswersArea.prepend(timeUpMessage);
            }
            if (testQuestions.length > 0) {
                const ul = document.createElement('ul');
                ul.classList.add('review-answer-list'); // class cũ của bạn
                testQuestions.forEach(q => {
                    const li = document.createElement('li');
                    const isCorrect = (q.userSelectedAnswer === q.correctAnswer);
                    const selectedDisplay = q.userSelectedAnswer ? escapeHTML(q.userSelectedAnswer) : "<i>Chưa trả lời</i>";
                    const correctClass = isCorrect ? 'text-success-color' : (q.userSelectedAnswer ? 'text-danger-color' : '');

                    li.innerHTML = `
                        <b>Câu hỏi:</b> ${escapeHTML(q.questionText)}<br/>
                        <b>Bạn chọn:</b> <span class="${correctClass}">${selectedDisplay}</span><br/>
                        <b>Đáp án đúng:</b> <span class="text-success-color">${escapeHTML(q.correctAnswer)}</span>
                    `;
                    ul.appendChild(li);
                });
                reviewAnswersArea.appendChild(ul);
            } else {
                reviewAnswersArea.innerHTML += '<p>Không có câu trả lời nào để xem lại.</p>';
            }
        }
    }
    // --- KẾT THÚC PHẦN CẬP NHẬT ---
}

  function retakeTestWithSameSettings() {
    if (currentTestConfig && typeof currentTestConfig.numQuestions !== 'undefined') {
        let vocabSourceForRetake;
        if (currentTestConfig.isFromSet && currentTestConfig.sourceSetName) {
            const originalSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
            if (originalSet) {
                vocabSourceForRetake = fullVocabulary.slice(originalSet.start - 1, originalSet.end);
                currentStudyingSet = originalSet;
            } else {
                alert("Không tìm thấy bộ từ gốc để làm lại. Vui lòng cài đặt lại.");
                showScreen('wordSetManager');
                return;
            }
        } else {
            vocabSourceForRetake = fullVocabulary.slice(currentTestConfig.start - 1, currentTestConfig.end);
            currentStudyingSet = null;
        }

        // Khôi phục cài đặt từ currentTestConfig vào UI của testSetup
        if (numTestQuestionsInput) numTestQuestionsInput.value = currentTestConfig.numQuestions;
        if (testTypeSelect) testTypeSelect.value = currentTestConfig.type;
        if (testSpeedModeSelect && currentTestConfig.speedMode) { // KHÔI PHỤC CHẾ ĐỘ TỐC ĐỘ
            testSpeedModeSelect.value = currentTestConfig.speedMode;
        } else if (testSpeedModeSelect) {
            testSpeedModeSelect.value = 'unlimited'; // Mặc định nếu không có trong config cũ
        }

        if (!currentTestConfig.isFromSet) {
            if (testStartWordInput) testStartWordInput.value = currentTestConfig.start;
            if (testEndWordInput) testEndWordInput.value = currentTestConfig.end;
        }

        // Sau khi khôi phục UI, gọi startTestFromConfig (nó sẽ đọc từ UI)
        startTestFromConfig(
            currentTestConfig.isFromSet ? vocabSourceForRetake : null,
            currentTestConfig.sourceSetName
        );
    } else {
        alert("Không có cấu hình bài kiểm tra trước đó để làm lại.");
        showScreen(currentStudyingSet ? 'wordSetDetail' : 'testSetup');
    }
}

   function showScreen(screenName) {
    // Dừng timer nếu không còn ở màn hình test hoặc chuyển sang màn hình kết quả
    if (screenName !== 'testInterface' && testTimerInterval) {
        // Kiểm tra kỹ hơn: nếu đang từ testInterface sang testResults thì không cần stop ở đây
        // vì finishTest đã stop rồi. Chỉ stop nếu thoát hẳn khỏi luồng test.
        const currentScreenVisible = testInterfaceDiv && !testInterfaceDiv.classList.contains('hidden');
        if (currentScreenVisible && screenName !== 'testResults') {
            stopTestTimer();
        }
    }

    // Hide all screens first
    [initialSetupDiv, flashcardApp, testSetupDiv, testInterfaceDiv, testResultsDiv,
     wordSetManagerDiv, wordSetDetailViewDiv, loadingMessage, errorMessage]
    .forEach(el => el && el.classList.add('hidden'));

    // Hide specific back buttons
    if(backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.classList.add('hidden');
    if(backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.classList.add('hidden');

    // Deactivate all mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));

    // Show the target screen and update active button
    switch (screenName) {
        case 'initialSetup':
            if (initialSetupDiv) initialSetupDiv.classList.remove('hidden');
            if (switchToFlashcardSetupBtn) switchToFlashcardSetupBtn.classList.add('active');
            if (fullVocabulary.length > 0 && totalWordsMessage) totalWordsMessage.textContent = `Tổng số từ trong file: ${fullVocabulary.length}`;
            currentStudyingSet = null;
            break;
        case 'flashcardApp':
            if (flashcardApp) flashcardApp.classList.remove('hidden');
            if (switchToFlashcardSetupBtn) switchToFlashcardSetupBtn.classList.add('active');
            if (currentStudyingSet && backToWordSetManagerFromFlashcardBtn) {
                backToWordSetManagerFromFlashcardBtn.classList.remove('hidden');
            }
            break;
        case 'testSetup':
            if (testSetupDiv) testSetupDiv.classList.remove('hidden');
            if (switchToTestSetupBtn) switchToTestSetupBtn.classList.add('active');
            if (fullVocabulary.length > 0) {
                if (testEndWordInput && !testEndWordInput.value) testEndWordInput.value = fullVocabulary.length;
                if (numTestQuestionsInput) numTestQuestionsInput.max = fullVocabulary.length;
            }
            if (currentStudyingSet) {
                if(testStartWordInput) testStartWordInput.value = currentStudyingSet.start;
                if(testEndWordInput) testEndWordInput.value = currentStudyingSet.end;
                const setSize = currentStudyingSet.end - currentStudyingSet.start + 1;
                if(numTestQuestionsInput) {
                    numTestQuestionsInput.max = setSize;
                    if (!numTestQuestionsInput.value || parseInt(numTestQuestionsInput.value) > setSize) {
                        numTestQuestionsInput.value = Math.min(10, setSize);
                    }
                }
                if(testStartWordInput) testStartWordInput.disabled = true;
                if(testEndWordInput) testEndWordInput.disabled = true;
                if (backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.classList.remove('hidden');
            } else {
                if(testStartWordInput) testStartWordInput.disabled = false;
                if(testEndWordInput) testEndWordInput.disabled = false;
                if (testStartWordInput && !testStartWordInput.value) testStartWordInput.value = 1;
                if (numTestQuestionsInput && !numTestQuestionsInput.value && numTestQuestionsInput.max > 0) {
                     numTestQuestionsInput.value = Math.min(10, parseInt(numTestQuestionsInput.max));
                } else if (numTestQuestionsInput && !numTestQuestionsInput.value) {
                     numTestQuestionsInput.value = 10;
                }

            }
            break;
        case 'testInterface':
            if (testInterfaceDiv) testInterfaceDiv.classList.remove('hidden');
            if (switchToTestSetupBtn) switchToTestSetupBtn.classList.add('active');
            if (testQuestionNavigator) testQuestionNavigator.classList.remove('hidden');
            if (finishTestButton) finishTestButton.classList.remove('hidden');
            updateTimerDisplay(); // Đảm bảo timer được hiển thị đúng khi quay lại màn hình này (nếu có logic tạm dừng)
            break;
        case 'testResults':
            if (testResultsDiv) testResultsDiv.classList.remove('hidden');
            if (switchToTestSetupBtn) switchToTestSetupBtn.classList.add('active');
            if (testQuestionNavigator) testQuestionNavigator.classList.add('hidden');
            break;
        case 'wordSetManager':
            if (wordSetManagerDiv) wordSetManagerDiv.classList.remove('hidden');
            if (switchToWordSetManagerBtn) switchToWordSetManagerBtn.classList.add('active');
            if (searchWordSetInput) searchWordSetInput.value = '';
            filterAndDisplayWordSets();
            updateWordSetTotalMessage();
            break;
        case 'wordSetDetail':
            if (wordSetDetailViewDiv) wordSetDetailViewDiv.classList.remove('hidden');
            if (switchToWordSetManagerBtn) switchToWordSetManagerBtn.classList.add('active');
            break;
        case 'loading':
            if (loadingMessage) loadingMessage.classList.remove('hidden');
            break;
        case 'error':
            if (errorMessage) errorMessage.classList.remove('hidden');
            break;
    }
}


    // --- Event Listeners Setup ---
    function setupEventListeners() {
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

        // Initial Setup & Flashcard Mode
        if (loadRangeButton) loadRangeButton.addEventListener('click', () => initializeAppWithRange());
        if (restartButton) restartButton.addEventListener('click', handleRestartFlashcards);
        if (reviewModeSelect) reviewModeSelect.addEventListener('change', applyReviewMode);
        if (clearAllMarksButton) clearAllMarksButton.addEventListener('click', handleClearAllMarks);

        if (flashcardContainer) flashcardContainer.addEventListener('click', (e) => {
            if ((e.target === flashcardContainer || e.target.closest('.flashcard')) && !e.target.closest('button')) {
                handleFlipButtonClick();
            }
        });
        if (flipButton) flipButton.addEventListener('click', handleFlipButtonClick);
        if (prevButton) prevButton.addEventListener('click', () => { if (!prevButton.disabled) showPreviousCard(); });
        if (nextButton) nextButton.addEventListener('click', () => { if (!nextButton.disabled) showNextCard(); });
        
        if (markKnownButton) markKnownButton.addEventListener('click', () => markCurrentCard('known'));
        if (markUnknownButton) markUnknownButton.addEventListener('click', () => markCurrentCard('unknown'));
        if (clearMarkButton) clearMarkButton.addEventListener('click', () => markCurrentCard(null));

        if (intervalSelect) intervalSelect.addEventListener('change', (event) => {
            autoNextDuration = parseInt(event.target.value);
            // If cards are active, reset progress bar and auto-next timer
            if (activeVocabulary.length > 0 && currentCardIndex < activeVocabulary.length && kanjiDisplay.textContent !== "Hoàn thành bộ!") {
                updateProgressBarState(false); // This also clears timeout
                setupAutoNext();
            } else {
                updateProgressBarState(true); // Ensure bar is full if no auto-next
            }
        });

        // Mode Switcher
        if (switchToFlashcardSetupBtn) switchToFlashcardSetupBtn.addEventListener('click', () => {
            currentStudyingSet = null; showScreen('initialSetup');
        });
        if (switchToWordSetManagerBtn) switchToWordSetManagerBtn.addEventListener('click', () => showScreen('wordSetManager'));
        if (switchToTestSetupBtn) switchToTestSetupBtn.addEventListener('click', () => {
            currentStudyingSet = null; showScreen('testSetup');
        });

        // Word Set Manager
        if (createWordSetButton) createWordSetButton.addEventListener('click', createWordSet);
        if (searchWordSetInput) searchWordSetInput.addEventListener('input', filterAndDisplayWordSets);

        // Word Set Detail View
        if (studySetFlashcardButton) studySetFlashcardButton.addEventListener('click', () => {
            if (currentStudyingSet) {
                const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
                initializeAppWithRange(words, currentStudyingSet.name);
            }
        });
        if (testSetButton) testSetButton.addEventListener('click', () => {
            if (currentStudyingSet) showScreen('testSetup'); // currentStudyingSet is used by showScreen
        });
        if (backToSetManagerButton) backToSetManagerButton.addEventListener('click', () => showScreen('wordSetManager'));

        // "Back to Word Set Manager/Detail" buttons
        const goBackToSetContext = () => {
            if (currentStudyingSet) {
                const set = wordSets.find(s => s.id === currentStudyingSet.id);
                if (set) viewWordSetDetail(set);
                else showScreen('wordSetManager'); // Fallback
            } else {
                showScreen('wordSetManager');
            }
        };
        if (backToWordSetManagerFromFlashcardBtn) backToWordSetManagerFromFlashcardBtn.addEventListener('click', goBackToSetContext);
        if (backToWordSetManagerFromTestSetupBtn) backToWordSetManagerFromTestSetupBtn.addEventListener('click', goBackToSetContext);

        // Test Mode
        if (startTestButton) startTestButton.addEventListener('click', () => {
            if (currentStudyingSet && testStartWordInput.disabled) { // Testing a specific set
                const words = fullVocabulary.slice(currentStudyingSet.start - 1, currentStudyingSet.end);
                startTestFromConfig(words, currentStudyingSet.name);
            } else { // Testing a custom range
                startTestFromConfig();
            }
        });
        
        if (prevTestQuestionButton) prevTestQuestionButton.addEventListener('click', showPrevTestQuestion);
        if (nextTestQuestionButton) nextTestQuestionButton.addEventListener('click', showNextTestQuestion);
        
        if (finishTestButton) finishTestButton.addEventListener('click', () => {
            const unansweredCount = testQuestions.filter(q => q.userSelectedAnswer === null).length;
            let confirmMessage = "Bạn có chắc muốn nộp bài không?";
            if (unansweredCount > 0) {
                confirmMessage = `Còn ${unansweredCount} câu chưa trả lời. Bạn vẫn muốn nộp bài?`;
            }
            if (confirm(confirmMessage)) {
                finishTest();
            }
        });

        if (retakeTestButton) retakeTestButton.addEventListener('click', retakeTestWithSameSettings);
        
        if (backToTestSetupButton) backToTestSetupButton.addEventListener('click', () => {
            // Restore context for test setup screen if coming from a specific set test
            if (currentTestConfig && currentTestConfig.isFromSet && currentTestConfig.sourceSetName) {
                 currentStudyingSet = wordSets.find(s => s.name === currentTestConfig.sourceSetName) || null;
            } else {
                currentStudyingSet = null;
            }
            showScreen('testSetup');
        });

        if (backToFlashcardFromResultsButton) backToFlashcardFromResultsButton.addEventListener('click', () => {
            if (currentTestConfig && currentTestConfig.isFromSet && currentTestConfig.sourceSetName) {
                const set = wordSets.find(s => s.name === currentTestConfig.sourceSetName);
                if (set) {
                    currentStudyingSet = set;
                    viewWordSetDetail(set);
                } else {
                    currentStudyingSet = null; showScreen('wordSetManager');
                }
            } else {
                currentStudyingSet = null; showScreen('wordSetManager');
            }
        });
        
        if (backToFlashcardModeButton) backToFlashcardModeButton.addEventListener('click', () => { // From TestSetup
            if (currentStudyingSet) { // If was configuring test for a set
                const set = wordSets.find(s => s.id === currentStudyingSet.id);
                if (set) viewWordSetDetail(set);
                else showScreen('wordSetManager');
            } else { // General test setup
                showScreen('wordSetManager'); // Or 'initialSetup' if preferred
            }
        });
        

        // Trong hàm setupEventListeners()

// ... các event listener khác ...

// Keyboard shortcuts (Mở rộng cho cả Flashcard và Test Interface)
document.addEventListener('keydown', (event) => {
    const activeEl = document.activeElement;
    const inInput = activeEl && (
        activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'SELECT' ||
        activeEl.tagName === 'TEXTAREA'
    );

    // 1. Xử lý cho màn hình Flashcard
    if (flashcardApp && !flashcardApp.classList.contains('hidden')) {
        // Allow space for select dropdown, and o/x in inputs (nếu có input trong flashcard)
        if (inInput) {
            if (event.key === ' ' && activeEl.tagName === 'SELECT') return;
            if (['o', 'x', 'O', 'X'].includes(event.key)) { /* allow typing o/x */ }
            else if (event.key !== ' ') return;
        }

        // Prevent default for space and arrows if not in a text-like input
        if (event.key === ' ' && (!inInput || (activeEl.type !== "text" && activeEl.type !== "number" && activeEl.tagName !== 'TEXTAREA'))) {
            event.preventDefault();
        }
        if (['ArrowLeft', 'ArrowRight'].includes(event.key) && !inInput) {
            event.preventDefault();
        }

        // Shortcut actions for Flashcard
        switch (event.key.toLowerCase()) {
            case ' ':
                if (flipButton && !flipButton.disabled) handleFlipButtonClick();
                break;
            case 'arrowright':
                if (nextButton && !nextButton.disabled) showNextCard();
                break;
            case 'arrowleft':
                if (prevButton && !prevButton.disabled) showPreviousCard();
                break;
            case 'o':
                if (markKnownButton && !markKnownButton.disabled) markCurrentCard('known');
                break;
            case 'x':
                if (markUnknownButton && !markUnknownButton.disabled) markCurrentCard('unknown');
                break;
        }
        return; // Xử lý xong cho flashcard, không cần đi tiếp
    }

    // 2. Xử lý cho màn hình Làm Bài Kiểm Tra (Test Interface)
    if (testInterfaceDiv && !testInterfaceDiv.classList.contains('hidden')) {
        // Nếu đang focus vào một input/select/textarea trong màn hình test, không dùng phím tắt mũi tên
        if (inInput && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            return;
        }

        switch (event.key.toLowerCase()) {
            case 'arrowright':
                event.preventDefault(); // Ngăn cuộn trang
                if (nextTestQuestionButton && !nextTestQuestionButton.disabled) {
                    showNextTestQuestion();
                }
                break;
            case 'arrowleft':
                event.preventDefault(); // Ngăn cuộn trang
                if (prevTestQuestionButton && !prevTestQuestionButton.disabled) {
                    showPrevTestQuestion();
                }
                break;
            // Bạn có thể thêm các phím tắt khác cho màn hình test ở đây nếu muốn
            // Ví dụ: phím số 1-4 để chọn đáp án, Enter để qua câu,...
        }
        return; // Xử lý xong cho test interface
    }

    // Thêm xử lý cho các màn hình khác nếu cần phím tắt
});
    }

    // --- Initialize Application ---
    initTheme();
    prepareInitialSetup(); // Load data and setup initial screen
    setupEventListeners(); // Setup all event listeners
});