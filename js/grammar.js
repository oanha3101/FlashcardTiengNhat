// ../js/grammar.js
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const themeToggle = document.getElementById('themeToggle');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const startFlashcardTestBtn = document.getElementById('startFlashcardTestBtn');

    const modeSwitcher = document.getElementById('modeSwitcher');
    const switchToGrammarListBtn = document.getElementById('switchToGrammarListBtn');
    const switchToFlashcardSetupBtn = document.getElementById('switchToFlashcardSetupBtn');
    const switchToTestSetupBtn = document.getElementById('switchToTestSetupBtn');

    const screens = {
        grammarList: document.getElementById('grammarListScreen'),
        grammarDetail: document.getElementById('grammarDetailScreen'),
        flashcardSetup: document.getElementById('flashcardSetupScreen'),
        flashcardApp: document.getElementById('flashcardApp'),
        testSetup: document.getElementById('testSetupScreen'),
        testInterface: document.getElementById('testInterface'),
        testResults: document.getElementById('testResultsScreen'),
    };

    // Grammar List
    const grammarListContainer = document.getElementById('grammarListContainer');
    const noGrammarMessage = document.getElementById('noGrammarMessage');
    const testSelectedGrammarBtn = document.getElementById('testSelectedGrammarBtn');
    const selectedGrammarCountEl = document.getElementById('selectedGrammarCount');
    
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect'); // Bạn sẽ cần tạo các options cho select này
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const noResultsMessage = document.getElementById('noResultsMessage'); 
    // >>> KẾT THÚC PHẦN THÊM DOM Elements <<<

    // Grammar Detail
    const grammarDetailContent = document.getElementById('grammarDetailContent');
    const backToGrammarListBtn = document.getElementById('backToGrammarListBtn');
    const testThisGrammarBtn = document.getElementById('testThisGrammarBtn');
    let currentViewingGrammarId = null;

    // Flashcard Setup
    const flashcardGrammarSelection = document.getElementById('flashcardGrammarSelection');
    const flashcardFrontTypeSelect = document.getElementById('flashcardFrontType');
    const startFlashcardButton = document.getElementById('startFlashcardButton');
    const backToFlashcardSetupBtn = document.getElementById('backToFlashcardSetupBtn');

    // Flashcard App
    const flashcardContainer = document.getElementById('flashcardContainer');
    const flashcard = document.getElementById('flashcard');
    const grammarDisplay = document.getElementById('grammarDisplay');
    const grammarDetailsDisplay = document.getElementById('grammarDetailsDisplay');
    const markIndicator = document.getElementById('markIndicator');
    const remainingCountEl = document.getElementById('remainingCount');
    const currentCardNumberEl = document.getElementById('currentCardNumber');
    const totalInReviewSetEl = document.getElementById('totalInReviewSet');
    const totalSelectedCountEl = document.getElementById('totalSelectedCount');
    const progressBar = document.getElementById('progressBar');
    const flipButton = document.getElementById('flipButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const markKnownButton = document.getElementById('markKnownButton');
    const markUnknownButton = document.getElementById('markUnknownButton');
    const clearMarkButton = document.getElementById('clearMarkButton');

    // Test Setup
    const testGrammarSelection = document.getElementById('testGrammarSelection');
    const numTestQuestionsInput = document.getElementById('numTestQuestions');
    const questionTypeCheckboxes = document.querySelectorAll('input[name="questionType"]');
    const startTestButton = document.getElementById('startTestButton');

    // Test Interface
    const testProgressEl = document.getElementById('testProgress');
    const currentQuestionNumEl = document.getElementById('currentQuestionNum');
    const totalTestQuestionsEl = document.getElementById('totalTestQuestions');
    
    const questionDisplayArea = document.getElementById('questionDisplayArea');
    const clozeQuestionArea = document.getElementById('clozeQuestionArea');
    const clozeQuestionTextEl = document.getElementById('clozeQuestionText');
    const clozeAnswerInput = document.getElementById('clozeAnswerInput');
    
    const mcqQuestionArea = document.getElementById('mcqQuestionArea');
    const mcqPromptTextEl = document.getElementById('mcqPromptText');
    const mcqSentenceTextEl = document.getElementById('mcqSentenceText');
    const mcqOptionsArea = document.getElementById('mcqOptionsArea');
    
    const testFeedbackEl = document.getElementById('testFeedback');
    const submitAnswerButton = document.getElementById('submitAnswerButton');
    const nextQuestionButton = document.getElementById('nextQuestionButton');
    const finishTestEarlyButton = document.getElementById('finishTestEarlyButton');

    // Test Results
    const scorePercentageEl = document.getElementById('scorePercentage');
    const scoreCorrectEl = document.getElementById('scoreCorrect');
    const scoreTotalEl = document.getElementById('scoreTotal');
    const incorrectAnswersListEl = document.getElementById('incorrectAnswersList');
    const retakeTestButton = document.getElementById('retakeTestButton');
    const backToTestSetupFromResultsBtn = document.getElementById('backToTestSetupFromResultsBtn');
    
    // --- State Variables ---
    let allGrammarPoints = [];
    let currentFlashcardSet = [];
    let currentFlashcardIndex = 0;
    let flashcardMarks = {};
    let flashcardFrontType = 'grammar';

    let generatedTestQuestions = []; 
    let currentTestQuestionIndex = 0;
    let userTestAnswers = []; 
    let currentTestScore = 0;
    let currentSearchTerm = '';
    let currentFilterValue = 'all';

    // --- UTILITY FUNCTIONS ---
    function showScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.add('hidden'));
        if (screens[screenName]) {
            screens[screenName].classList.remove('hidden');
        }
        const buttons = modeSwitcher.querySelectorAll('.mode-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        if (screenName === 'grammarList' || screenName === 'grammarDetail') {
            switchToGrammarListBtn.classList.add('active');
        } else if (screenName === 'flashcardSetup' || screenName === 'flashcardApp') {
            switchToFlashcardSetupBtn.classList.add('active');
        } else if (screenName.startsWith('test')) { 
            switchToTestSetupBtn.classList.add('active');
        }
    }

    function displayErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        loadingMessage.classList.add('hidden');
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- THEME ---
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>';
        }
    }
    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
    applyTheme(localStorage.getItem('theme') || 'light');

    // --- DATA LOADING & INITIALIZATION ---
    function loadGrammarData() {
        loadingMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        try {
            if (typeof n3GrammarData !== 'undefined' && n3GrammarData.length > 0) {
                allGrammarPoints = n3GrammarData;
                populateGrammarList();
                populateGrammarSelectionCheckboxes(); 
                showScreen('grammarList');
            } else {
                displayErrorMessage("Không tìm thấy dữ liệu ngữ pháp (n3GrammarData).");
                return;
            }
        } catch (error) {
            console.error("Lỗi tải dữ liệu ngữ pháp:", error);
            displayErrorMessage("Có lỗi xảy ra khi tải dữ liệu ngữ pháp.");
        } finally {
            loadingMessage.classList.add('hidden');
        }
        loadFlashcardMarks();
    }

    function populateGrammarSelectionCheckboxes() {
        flashcardGrammarSelection.innerHTML = '';
        testGrammarSelection.innerHTML = '';
        allGrammarPoints.forEach(item => {
            const commonCheckboxHTML = `
                <label class="grammar-selection-item">
                    <input type="checkbox" value="${item.id}">
                    ${item.grammar} - ${item.meaning.substring(0,30)}...
                </label>`; // Added meaning for better selection
            const flashcardOption = document.createElement('div'); // Keep as div if styles depend on it
            flashcardOption.innerHTML = commonCheckboxHTML;
            flashcardOption.querySelector('input').name = "flashcardGrammar";
            flashcardGrammarSelection.appendChild(flashcardOption);

            const testOption = document.createElement('div');
            testOption.innerHTML = commonCheckboxHTML;
            testOption.querySelector('input').name = "testGrammar";
            testGrammarSelection.appendChild(testOption);
        });
    }

    // --- GRAMMAR LIST & DETAIL VIEW ---
    function populateGrammarList() {
        grammarListContainer.innerHTML = '';
        if (allGrammarPoints.length === 0) {
            noGrammarMessage.classList.remove('hidden');
            grammarListContainer.classList.add('hidden'); // Hide container if no items
            return;
        }
        noGrammarMessage.classList.add('hidden');
        grammarListContainer.classList.remove('hidden'); // Show container
        
        allGrammarPoints.forEach(item => {
            const grammarItemDiv = document.createElement('div');
            grammarItemDiv.className = 'grammar-item interactive-element'; // Use the new class from HTML
            grammarItemDiv.innerHTML = `
                <div class="grammar-item-header">
                    <div>
                        <div class="grammar-point">${item.grammar}</div>
                        <div class="grammar-meaning">${item.meaning}</div>
                    </div>
                    <div class="grammar-controls">
                        <label class="custom-checkbox">
                            <input type="checkbox" class="grammar-select-checkbox" data-id="${item.id}" aria-label="Chọn ${item.grammar}">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            `;
             // Add click event to the main body of the item (excluding checkbox area)
            grammarItemDiv.querySelector('.grammar-item-header > div:first-child').addEventListener('click', () => {
                 displayGrammarDetail(item.id);
            });
            grammarItemDiv.querySelector('.grammar-select-checkbox').addEventListener('change', updateSelectedGrammarCount);
            grammarListContainer.appendChild(grammarItemDiv);
        });
        updateSelectedGrammarCount(); 
    }
    
    function updateSelectedGrammarCount() {
        const selectedCheckboxes = grammarListContainer.querySelectorAll('.grammar-select-checkbox:checked');
        const count = selectedCheckboxes.length;
        selectedGrammarCountEl.textContent = count;
        testSelectedGrammarBtn.classList.toggle('hidden', count === 0);
    }

    testSelectedGrammarBtn.addEventListener('click', () => {
        const selectedIds = Array.from(grammarListContainer.querySelectorAll('.grammar-select-checkbox:checked'))
                               .map(cb => cb.dataset.id);
        if (selectedIds.length === 0) {
            alert("Vui lòng chọn ít nhất một mục ngữ pháp để kiểm tra.");
            return;
        }
        // Uncheck all in test setup first
        testGrammarSelection.querySelectorAll('input[name="testGrammar"]').forEach(cb => cb.checked = false);
        // Then check the selected ones
        selectedIds.forEach(id => {
            const checkboxInTestSetup = testGrammarSelection.querySelector(`input[name="testGrammar"][value="${id}"]`);
            if (checkboxInTestSetup) checkboxInTestSetup.checked = true;
        });
        showScreen('testSetup');
    });
    
    testThisGrammarBtn.addEventListener('click', () => {
        if (currentViewingGrammarId) {
            // Uncheck all in test setup first
            testGrammarSelection.querySelectorAll('input[name="testGrammar"]').forEach(cb => cb.checked = false);
            // Then check only the current one
            const checkboxInTestSetup = testGrammarSelection.querySelector(`input[name="testGrammar"][value="${currentViewingGrammarId}"]`);
            if (checkboxInTestSetup) checkboxInTestSetup.checked = true;
            
            questionTypeCheckboxes.forEach(cb => cb.checked = true); // Check both cloze and MCQ

            const grammarPoint = allGrammarPoints.find(g => g.id === currentViewingGrammarId);
            let maxQuestions = 0;
            if (grammarPoint) {
                maxQuestions += grammarPoint.examples?.filter(ex => ex.cloze_jp && ex.cloze_answer).length || 0;
                maxQuestions += grammarPoint.multiple_choice_questions?.length || 0;
            }

            numTestQuestionsInput.value = Math.max(1, Math.min(maxQuestions, 5)); // Default to 5 or max available if less
            numTestQuestionsInput.max = maxQuestions; // Set max based on available
            
            showScreen('testSetup');
        }
    });

    function displayGrammarDetail(grammarId) {
        currentViewingGrammarId = grammarId; 
        const item = allGrammarPoints.find(g => g.id === grammarId);
        if (!item) {
            displayErrorMessage("Không tìm thấy điểm ngữ pháp.");
            currentViewingGrammarId = null;
            return;
        }
        // Highlight the grammar point in examples. Escape special characters in grammar for regex.
        const grammarRegex = new RegExp(item.grammar.replace(/〜/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
        let examplesHtml = (item.examples || []).map(ex => `
            <div class="grammar-detail-example">
                <p class="jp-sentence">${ex.jp.replace(grammarRegex, `<span class='grammar-highlight'>$&</span>`)}</p>
                <p class="vi-translation">${ex.vi}</p>
            </div>
        `).join('');

        grammarDetailContent.innerHTML = `
            <h3>${item.grammar}</h3>
            <div class="grammar-detail-section"><strong>Ý nghĩa:</strong><p>${item.meaning}</p></div>
            <div class="grammar-detail-section"><strong>Cách kết nối:</strong><p class="connection-text">${item.connection}</p></div>
            ${item.notes ? `<div class="grammar-detail-section"><strong>Ghi chú:</strong><p>${item.notes}</p></div>` : ''}
            <div class="grammar-detail-section"><strong>Ví dụ:</strong>${examplesHtml || "<p>Chưa có ví dụ.</p>"}</div>
        `;
        showScreen('grammarDetail');
    }
    
    backToGrammarListBtn.addEventListener('click', () => {
        currentViewingGrammarId = null; 
        showScreen('grammarList');
    });

    // --- FLASHCARD MODE ---
    function loadFlashcardMarks() {
        const storedMarks = localStorage.getItem('grammarFlashcardMarksN3');
        if (storedMarks) flashcardMarks = JSON.parse(storedMarks);
    }
    function saveFlashcardMarks() {
        localStorage.setItem('grammarFlashcardMarksN3', JSON.stringify(flashcardMarks));
    }

    startFlashcardButton.addEventListener('click', () => { 
        const selectedIds = Array.from(flashcardGrammarSelection.querySelectorAll('input[name="flashcardGrammar"]:checked'))
                               .map(cb => cb.value);
        if (selectedIds.length === 0) {
            alert("Vui lòng chọn ít nhất một điểm ngữ pháp để học!");
            return;
        }
        currentFlashcardSet = allGrammarPoints.filter(g => selectedIds.includes(g.id));
        shuffleArray(currentFlashcardSet); // Shuffle at the beginning of a new set
        currentFlashcardIndex = 0;
        flashcardFrontType = flashcardFrontTypeSelect.value;
        flashcard.classList.remove('is-flipped');
        updateFlashcardView();
        showScreen('flashcardApp');
    });

    backToFlashcardSetupBtn.addEventListener('click', () => showScreen('flashcardSetup'));

    function updateFlashcardView() { 
        if (!currentFlashcardSet || currentFlashcardSet.length === 0) {
            grammarDisplay.innerHTML = "<div class='grammar-point-display'>Hoàn thành!</div>";
            grammarDetailsDisplay.innerHTML = "<p style='text-align:center'>Chọn lại bộ khác hoặc bắt đầu kiểm tra.</p>";
            remainingCountEl.textContent = 0;
            currentCardNumberEl.textContent = 0;
            totalInReviewSetEl.textContent = 0;
            totalSelectedCountEl.textContent = currentFlashcardSet ? currentFlashcardSet.length : 0;
            progressBar.style.width = '100%'; // Show as completed
            markIndicator.textContent = '';
            [prevButton, nextButton, flipButton, markKnownButton, markUnknownButton, clearMarkButton].forEach(btn => btn.disabled = true);
            startFlashcardTestBtn.disabled = true;
            return;
        }
        
        if (currentFlashcardIndex >= currentFlashcardSet.length) { // Should be handled by the above, but good fallback
            currentFlashcardIndex = currentFlashcardSet.length -1; // Go to last card if out of bounds
        }
        
        [prevButton, nextButton, flipButton, markKnownButton, markUnknownButton, clearMarkButton].forEach(btn => btn.disabled = false);
        startFlashcardTestBtn.disabled = false;


        const item = currentFlashcardSet[currentFlashcardIndex];
        if (!item) { 
            console.error("Invalid item in flashcard set at index:", currentFlashcardIndex);
            // Potentially reset or show error
            return;
        }
        
        const exampleHtml = (item.examples && item.examples.length > 0) ? `
            <div class="example-mini">
                <strong>Ví dụ:</strong>
                <p class="jp-sentence">${item.examples[0].jp}</p>
                <p class="vi-translation">${item.examples[0].vi}</p>
            </div>` : '';

        if (flashcardFrontType === 'grammar') {
            grammarDisplay.innerHTML = `<div class="grammar-point-display">${item.grammar}</div>`;
            grammarDetailsDisplay.innerHTML = `
                <strong>Ý nghĩa:</strong> <p>${item.meaning}</p>
                <strong>Cách nối:</strong> <p class="connection-text">${item.connection}</p>
                ${exampleHtml}
            `;
        } else { 
             grammarDisplay.innerHTML = `<div class="grammar-details-display" style="font-size: 1.5rem; text-align:center; padding: 10px;">${item.meaning}</div>`;
             grammarDetailsDisplay.innerHTML = `
                <div class="grammar-point-display">${item.grammar}</div>
                <strong>Cách nối:</strong> <p class="connection-text">${item.connection}</p>
                ${exampleHtml}
            `;
        }
        updateFlashcardProgress();
        updateMarkIndicator(item.id);
    }

    function updateFlashcardProgress() { 
        if (!currentFlashcardSet || currentFlashcardSet.length === 0) return;
        const total = currentFlashcardSet.length;
        remainingCountEl.textContent = Math.max(0, total - (currentFlashcardIndex + 1)); 
        currentCardNumberEl.textContent = currentFlashcardIndex + 1;
        totalInReviewSetEl.textContent = total;
        totalSelectedCountEl.textContent = total; 
        progressBar.style.width = `${((currentFlashcardIndex + 1) / total) * 100}%`;

        prevButton.disabled = (currentFlashcardIndex === 0);
        nextButton.disabled = (currentFlashcardIndex === total - 1);
    }

    function updateMarkIndicator(grammarId) { 
        markIndicator.className = 'mark-indicator'; 
        markIndicator.textContent = ''; // Clear previous
        if (flashcardMarks[grammarId] === 'known') {
            markIndicator.classList.add('mark-known');
            markIndicator.textContent = 'O';
        } else if (flashcardMarks[grammarId] === 'unknown') {
            markIndicator.classList.add('mark-unknown');
            markIndicator.textContent = 'X';
        }
    }

    flipButton.addEventListener('click', () => flashcard.classList.toggle('is-flipped'));
    prevButton.addEventListener('click', () => { 
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            flashcard.classList.remove('is-flipped');
            updateFlashcardView();
        }
    });
    nextButton.addEventListener('click', () => { 
         if (currentFlashcardIndex < currentFlashcardSet.length - 1) {
            currentFlashcardIndex++;
            flashcard.classList.remove('is-flipped');
            updateFlashcardView();
        } else if (currentFlashcardSet.length > 0){ // Only show alert if there were cards
            alert("Bạn đã xem hết các thẻ!");
        }
    });
    markKnownButton.addEventListener('click', () => { 
        if (!currentFlashcardSet[currentFlashcardIndex]) return;
        const itemId = currentFlashcardSet[currentFlashcardIndex].id;
        flashcardMarks[itemId] = 'known';
        saveFlashcardMarks();
        updateMarkIndicator(itemId);
        if (currentFlashcardIndex < currentFlashcardSet.length - 1) setTimeout(() => nextButton.click(), 300); // Auto-next
    });
    markUnknownButton.addEventListener('click', () => { 
        if (!currentFlashcardSet[currentFlashcardIndex]) return;
        const itemId = currentFlashcardSet[currentFlashcardIndex].id;
        flashcardMarks[itemId] = 'unknown';
        saveFlashcardMarks();
        updateMarkIndicator(itemId);
        if (currentFlashcardIndex < currentFlashcardSet.length - 1) setTimeout(() => nextButton.click(), 300);
    });
    clearMarkButton.addEventListener('click', () => { 
        if (!currentFlashcardSet[currentFlashcardIndex]) return;
        const itemId = currentFlashcardSet[currentFlashcardIndex].id;
        delete flashcardMarks[itemId];
        saveFlashcardMarks();
        updateMarkIndicator(itemId);
    });

    // --- FLASHCARD TEST MODE ---
    if (startFlashcardTestBtn) {
        startFlashcardTestBtn.addEventListener('click', () => {
            if (!currentFlashcardSet || currentFlashcardSet.length === 0) {
                alert("Không có flashcard nào để kiểm tra. Vui lòng chọn và học một bộ flashcard trước.");
                showScreen('flashcardSetup');
                return;
            }
            
            let cardsToTestFrom = [...currentFlashcardSet]; // Test all cards in the current set

            if (cardsToTestFrom.length < 2 && allGrammarPoints.length < 2) {
                alert("Không đủ flashcard (cần ít nhất 2 điểm ngữ pháp tổng thể) để tạo bài kiểm tra trắc nghiệm đa dạng. Hãy học thêm hoặc chọn bộ lớn hơn.");
                return;
            }
             if (cardsToTestFrom.length === 0 ) {
                alert("Không có flashcard nào phù hợp từ bộ hiện tại để tạo bài kiểm tra.");
                return;
            }

            const numFlashcardTestQuestions = Math.min(parseInt(numTestQuestionsInput.value) || 10, cardsToTestFrom.length); 
            generateAndStartFlashcardTest(cardsToTestFrom, numFlashcardTestQuestions);
        });
    }

    function generateAndStartFlashcardTest(flashcardsToUse, numQuestions) {
        generatedTestQuestions = [];
        shuffleArray(flashcardsToUse); 

        const actualNumQuestions = Math.min(numQuestions, flashcardsToUse.length);

        for (let i = 0; i < actualNumQuestions; i++) {
            const targetCard = flashcardsToUse[i];
            let questionTypeMcq;
            let promptText;
            let questionFocusHtml; 
            let correctAnswerText;
            let options = [];
            const isGrammarToMeaning = Math.random() < 0.5;

            if (isGrammarToMeaning) {
                questionTypeMcq = "grammar_to_meaning";
                promptText = `Chọn ý nghĩa đúng cho ngữ pháp sau:`;
                questionFocusHtml = `<div class="grammar-point-display">${targetCard.grammar}</div>`;
                correctAnswerText = targetCard.meaning;
            } else {
                questionTypeMcq = "meaning_to_grammar";
                promptText = `Ngữ pháp nào có ý nghĩa sau:`;
                questionFocusHtml = `<p style="font-size: 1.2rem; text-align:center; padding: 10px; background-color: var(--bg-glass-dark); border-radius: var(--border-radius-sm);">${targetCard.meaning}</p>`;
                correctAnswerText = targetCard.grammar;
            }
            options.push(correctAnswerText);
            
            let distractorsPool = allGrammarPoints.filter(card => card.id !== targetCard.id);
            shuffleArray(distractorsPool);

            for (let dCard of distractorsPool) {
                if (options.length >= 4) break;
                const distractorOption = isGrammarToMeaning ? dCard.meaning : dCard.grammar;
                if (!options.includes(distractorOption)) {
                    options.push(distractorOption);
                }
            }
            
            while (options.length < Math.min(4, allGrammarPoints.length) && options.length < allGrammarPoints.length) {
                 // Attempt to fill with ANY unique option if not enough distinct ones from the pool
                let fallbackCard = allGrammarPoints.find(c => {
                    const optionText = isGrammarToMeaning ? c.meaning : c.grammar;
                    return !options.includes(optionText);
                });
                if(fallbackCard) {
                    const fallbackOption = isGrammarToMeaning ? fallbackCard.meaning : fallbackCard.grammar;
                    options.push(fallbackOption);
                } else break; // No more unique options available
            }
            if(options.length === 1 && allGrammarPoints.length > 1) {
                 let fallbackCard = allGrammarPoints.find(c => c.id !== targetCard.id);
                 if(fallbackCard){
                    const fallbackOption = isGrammarToMeaning ? fallbackCard.meaning : fallbackCard.grammar;
                    if (!options.includes(fallbackOption)) options.push(fallbackOption);
                 }
            }

            shuffleArray(options); 
            const correctOptionIndex = options.indexOf(correctAnswerText);

             if (correctOptionIndex === -1) { 
                console.warn("Correct answer for Flashcard Test not found in options:", correctAnswerText, "Options:", options, "Target Card:", targetCard);
                 // If correct answer isn't there, add it and re-shuffle. This is a safeguard.
                if(!options.includes(correctAnswerText)) options.push(correctAnswerText);
                while (options.length > 4) options.pop(); // Keep it to 4 options max
                shuffleArray(options);
                const newCorrectIndex = options.indexOf(correctAnswerText);
                if (newCorrectIndex === -1) {
                    console.error("CRITICAL: Still cannot find correct answer after trying to fix options for Flashcard Test. Skipping question.");
                    continue;
                }
                 generatedTestQuestions.push({
                    type: 'mcq', 
                    grammar_id: targetCard.id,
                    id: `flashcard_test_q_${i}_${targetCard.id}`, 
                    question_type_mcq: questionTypeMcq,
                    prompt: promptText,
                    sentence_stub_start: questionFocusHtml, 
                    options: options,
                    correct_option_index: newCorrectIndex,
                    explanation: `Ngữ pháp: ${targetCard.grammar} <br> Ý nghĩa: ${targetCard.meaning}`
                });
            } else {
                 generatedTestQuestions.push({
                    type: 'mcq', 
                    grammar_id: targetCard.id,
                    id: `flashcard_test_q_${i}_${targetCard.id}`, 
                    question_type_mcq: questionTypeMcq,
                    prompt: promptText,
                    sentence_stub_start: questionFocusHtml, 
                    options: options,
                    correct_option_index: correctOptionIndex,
                    explanation: `Ngữ pháp: ${targetCard.grammar} <br> Ý nghĩa: ${targetCard.meaning}`
                });
            }
        }
        
        if (generatedTestQuestions.length === 0) {
            alert("Không thể tạo câu hỏi kiểm tra từ bộ flashcard này. Hãy thử lại hoặc học thêm flashcard.");
            showScreen('flashcardApp');
            return;
        }

        currentTestQuestionIndex = 0;
        currentTestScore = 0;
        userTestAnswers = [];
        displayCurrentTestQuestion(); 
        showScreen('testInterface');
        submitAnswerButton.classList.add('hidden'); // MCQ submits on click
        submitAnswerButton.disabled = true; 
        nextQuestionButton.classList.add('hidden');
        finishTestEarlyButton.classList.remove('hidden');
    }


    // --- GENERAL TEST MODE (from grammar list/detail) ---
    startTestButton.addEventListener('click', () => {
        const selectedGrammarIds = Array.from(testGrammarSelection.querySelectorAll('input[name="testGrammar"]:checked'))
                                     .map(cb => cb.value);
        const selectedQuestionTypes = Array.from(questionTypeCheckboxes)
                                         .filter(cb => cb.checked)
                                         .map(cb => cb.value);

        if (selectedGrammarIds.length === 0) {
            alert("Vui lòng chọn ít nhất một điểm ngữ pháp để kiểm tra!");
            return;
        }
        if (selectedQuestionTypes.length === 0) {
            alert("Vui lòng chọn ít nhất một loại câu hỏi!");
            return;
        }
        generateAndStartGeneralTest(selectedGrammarIds, selectedQuestionTypes);
    });

    function generateAndStartGeneralTest(grammarIds, questionTypes) {
        generatedTestQuestions = [];
        const grammarItemsToTest = allGrammarPoints.filter(g => grammarIds.includes(g.id));

        grammarItemsToTest.forEach(item => {
            // Generate Cloze Questions
            if (questionTypes.includes('cloze') && item.examples) {
                item.examples.forEach((ex, exIndex) => {
                    if (ex.cloze_jp && ex.cloze_answer) {
                        generatedTestQuestions.push({
                            type: 'cloze',
                            grammar_id: item.id, 
                            id: `${item.id}_cloze_${exIndex}`,
                            question_text: ex.cloze_jp,
                            correct_answer: ex.cloze_answer,
                            full_sentence_jp: ex.jp,
                            full_sentence_vi: ex.vi
                        });
                    }
                });
            }
            // Generate MCQ Questions from 'multiple_choice_questions' if available
            if (questionTypes.includes('mcq') && item.multiple_choice_questions) {
                 item.multiple_choice_questions.forEach((mcq, mcqIndex) => {
                    generatedTestQuestions.push({
                        type: 'mcq',
                        grammar_id: item.id,
                        id: mcq.id || `${item.id}_mcq_data_${mcqIndex}`, 
                        question_type_mcq: mcq.question_type || 'complete_sentence', // Default if not specified
                        prompt: mcq.prompt,
                        sentence_stub_start: mcq.sentence_stub_start || "", // Use this for the main question sentence
                        sentence_stub_end: mcq.sentence_stub_end || "", // For cloze-like MCQs
                        options: mcq.options,
                        correct_option_index: mcq.correct_option_index,
                        explanation: mcq.explanation
                    });
                });
            } else if (questionTypes.includes('mcq')) {
                // Fallback: Generate simple "grammar to meaning" or "meaning to grammar" MCQs if no specific MCQs are defined
                // This is similar to flashcard test generation but for general test
                const isGrammarToMeaning = Math.random() < 0.5;
                let promptText, questionFocusHtml, correctAnswerText, options = [];

                if (isGrammarToMeaning) {
                    promptText = "Chọn ý nghĩa đúng cho ngữ pháp sau:";
                    questionFocusHtml = `<div class="grammar-point-display">${item.grammar}</div>`;
                    correctAnswerText = item.meaning;
                } else {
                    promptText = "Ngữ pháp nào có ý nghĩa sau:";
                    questionFocusHtml = `<p style="font-size: 1.2rem; text-align:center; padding: 10px;">${item.meaning}</p>`;
                    correctAnswerText = item.grammar;
                }
                options.push(correctAnswerText);

                let distractorsPool = allGrammarPoints.filter(g => g.id !== item.id);
                shuffleArray(distractorsPool);
                for (let dCard of distractorsPool) {
                    if (options.length >= 4) break;
                    const distractorOption = isGrammarToMeaning ? dCard.meaning : dCard.grammar;
                    if (!options.includes(distractorOption)) options.push(distractorOption);
                }
                 while (options.length < Math.min(4, allGrammarPoints.length) && options.length < allGrammarPoints.length) {
                    let fallbackCard = allGrammarPoints.find(c => {
                        const optionText = isGrammarToMeaning ? c.meaning : c.grammar;
                        return !options.includes(optionText);
                    });
                    if(fallbackCard) options.push(isGrammarToMeaning ? fallbackCard.meaning : fallbackCard.grammar); else break;
                }


                shuffleArray(options);
                const correctOptionIndex = options.indexOf(correctAnswerText);
                 if(correctOptionIndex !== -1){
                    generatedTestQuestions.push({
                        type: 'mcq',
                        grammar_id: item.id,
                        id: `${item.id}_mcq_generated_${(isGrammarToMeaning ? 'g2m' : 'm2g')}`,
                        question_type_mcq: (isGrammarToMeaning ? 'grammar_to_meaning' : 'meaning_to_grammar'),
                        prompt: promptText,
                        sentence_stub_start: questionFocusHtml,
                        options: options,
                        correct_option_index: correctOptionIndex,
                        explanation: `Ngữ pháp: ${item.grammar} <br> Ý nghĩa: ${item.meaning}`
                    });
                }
            }
        });
        
        if (generatedTestQuestions.length === 0) {
            alert("Không có câu hỏi nào được tạo cho các lựa chọn của bạn. Hãy thử chọn thêm ngữ pháp hoặc loại câu hỏi khác, hoặc đảm bảo dữ liệu ngữ pháp có đủ ví dụ/câu hỏi trắc nghiệm.");
            return;
        }

        shuffleArray(generatedTestQuestions);
        const numQuestions = Math.min(parseInt(numTestQuestionsInput.value) || 10, generatedTestQuestions.length);
        numTestQuestionsInput.max = generatedTestQuestions.length; // Update max based on generated questions
        if (numQuestions > generatedTestQuestions.length) {
            numTestQuestionsInput.value = generatedTestQuestions.length;
        }
        generatedTestQuestions = generatedTestQuestions.slice(0, numQuestions);


        currentTestQuestionIndex = 0;
        currentTestScore = 0;
        userTestAnswers = [];
        displayCurrentTestQuestion();
        showScreen('testInterface');
        submitAnswerButton.classList.toggle('hidden', generatedTestQuestions[0]?.type === 'mcq');
        submitAnswerButton.disabled = (generatedTestQuestions[0]?.type === 'mcq');
        nextQuestionButton.classList.add('hidden');
        finishTestEarlyButton.classList.remove('hidden'); 
    }

    function displayCurrentTestQuestion() {
        if (currentTestQuestionIndex >= generatedTestQuestions.length) {
            showTestResults();
            return;
        }
        const q = generatedTestQuestions[currentTestQuestionIndex];
        testFeedbackEl.innerHTML = '';
        testFeedbackEl.className = 'test-feedback'; // Reset feedback class
        clozeAnswerInput.disabled = false; 
        clozeAnswerInput.value = '';      
        mcqOptionsArea.innerHTML = '';    

        clozeQuestionArea.classList.add('hidden');
        mcqQuestionArea.classList.add('hidden');

        if (q.type === 'cloze') {
            clozeQuestionArea.classList.remove('hidden');
            clozeQuestionTextEl.innerHTML = q.question_text; 
            submitAnswerButton.disabled = false;
        } else if (q.type === 'mcq') {
            mcqQuestionArea.classList.remove('hidden');
            mcqPromptTextEl.innerHTML = q.prompt || "Chọn đáp án đúng:"; // Default prompt
            
            // sentence_stub_start might already be HTML (like from flashcard test)
            // or it might be part of a sentence to complete
            if (q.question_type_mcq === 'complete_sentence') {
                 mcqSentenceTextEl.innerHTML = `${q.sentence_stub_start || ""} <span class="grammar-highlight">＿＿＿＿＿</span> ${q.sentence_stub_end || ""}`;
            } else { // For grammar_to_meaning, meaning_to_grammar, or other direct question formats
                 mcqSentenceTextEl.innerHTML = q.sentence_stub_start || ""; 
            }


            q.options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.classList.add('option-button', 'interactive-element'); // Added interactive
                 // Check if option is meaning or grammar for font
                if (q.question_type_mcq === "grammar_to_meaning" || (typeof option === 'string' && !option.match(/[〜「」]/))) { // Heuristic for meaning
                    optionButton.classList.add('meaning-option'); // Apply main font for meanings
                }
                optionButton.innerHTML = option; 
                optionButton.dataset.index = index;
                optionButton.addEventListener('click', handleMcqOptionClick);
                mcqOptionsArea.appendChild(optionButton);
            });
            submitAnswerButton.disabled = true;
        }

        currentQuestionNumEl.textContent = currentTestQuestionIndex + 1;
        totalTestQuestionsEl.textContent = generatedTestQuestions.length;
        submitAnswerButton.classList.toggle('hidden', q.type === 'mcq'); 
        nextQuestionButton.classList.add('hidden');
        finishTestEarlyButton.classList.toggle('hidden', currentTestQuestionIndex >= generatedTestQuestions.length -1 && q.type === 'mcq' && nextQuestionButton.classList.contains('hidden')); // Hide if MCQ and last question
    }
    
    function handleMcqOptionClick(event) {
        mcqOptionsArea.querySelectorAll('.option-button').forEach(btn => {
            btn.disabled = true; 
            btn.classList.remove('selected');
        });
        event.target.classList.add('selected');
        submitAnswer(); 
    }

    submitAnswerButton.addEventListener('click', submitAnswer);

    function submitAnswer() {
        if (currentTestQuestionIndex >= generatedTestQuestions.length) return;

        const currentQuestion = generatedTestQuestions[currentTestQuestionIndex];
        let userAnswerText, isCorrect, correctAnswerTextForDisplay;

        if (currentQuestion.type === 'cloze') {
            userAnswerText = clozeAnswerInput.value.trim();
            if (!userAnswerText && !submitAnswerButton.disabled) {
                testFeedbackEl.innerHTML = '<span style="color: var(--warning-color);">Vui lòng nhập câu trả lời.</span>';
                testFeedbackEl.className = 'test-feedback incorrect'; // Use a general warning class
                return;
            }
            correctAnswerTextForDisplay = currentQuestion.correct_answer;
            // More lenient check for cloze, allow minor variations if needed in future.
            // For now, strict comparison.
            isCorrect = userAnswerText.toLowerCase() === correctAnswerTextForDisplay.toLowerCase();
            clozeAnswerInput.disabled = true;
        } else if (currentQuestion.type === 'mcq') {
            const selectedOptionButton = mcqOptionsArea.querySelector('.option-button.selected');
            if (!selectedOptionButton) { 
                testFeedbackEl.innerHTML = '<span style="color: var(--warning-color);">Vui lòng chọn một đáp án.</span>';
                 testFeedbackEl.className = 'test-feedback incorrect';
                return;
            }
            const selectedIndex = parseInt(selectedOptionButton.dataset.index);
            userAnswerText = currentQuestion.options[selectedIndex]; 
            correctAnswerTextForDisplay = currentQuestion.options[currentQuestion.correct_option_index];
            isCorrect = selectedIndex === currentQuestion.correct_option_index;

            mcqOptionsArea.querySelectorAll('.option-button').forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === currentQuestion.correct_option_index) {
                    btn.classList.add('correct');
                } else if (idx === selectedIndex && !isCorrect) {
                    btn.classList.add('incorrect');
                }
            });
        } else { return; } // Should not happen

        if (isCorrect) {
            currentTestScore++;
            testFeedbackEl.innerHTML = 'Chính xác!';
            testFeedbackEl.className = 'test-feedback correct';
        } else {
            testFeedbackEl.innerHTML = `Không đúng. Đáp án đúng: <strong>${correctAnswerTextForDisplay}</strong>`;
            testFeedbackEl.className = 'test-feedback incorrect';
            if (currentQuestion.type === 'mcq' && currentQuestion.explanation) {
                testFeedbackEl.innerHTML += `<br><small><em>${currentQuestion.explanation}</em></small>`;
            }
        }

        userTestAnswers.push({
            question_data: currentQuestion, 
            user_answer_text: userAnswerText,
            is_correct: isCorrect
        });

        submitAnswerButton.classList.add('hidden');
        submitAnswerButton.disabled = true; 
        nextQuestionButton.classList.remove('hidden');
        finishTestEarlyButton.classList.add('hidden'); 
        
        if (currentTestQuestionIndex >= generatedTestQuestions.length - 1) {
            nextQuestionButton.textContent = "Xem Kết Quả";
        } else {
            nextQuestionButton.textContent = "Câu Tiếp Theo";
        }
    }
    
    nextQuestionButton.addEventListener('click', () => {
        if (currentTestQuestionIndex >= generatedTestQuestions.length - 1) {
            showTestResults();
        } else {
            currentTestQuestionIndex++;
            displayCurrentTestQuestion();
        }
    });

    finishTestEarlyButton.addEventListener('click', showTestResults);

    function showTestResults() {
        const totalQuestions = generatedTestQuestions.length;
        const percentage = totalQuestions > 0 ? Math.round((currentTestScore / totalQuestions) * 100) : 0;
        
        scorePercentageEl.textContent = percentage;
        scoreCorrectEl.textContent = currentTestScore;
        scoreTotalEl.textContent = totalQuestions;
        // CSS variable for score circle animation if any
        // document.documentElement.style.setProperty('--score-percent', percentage + '%');

        incorrectAnswersListEl.innerHTML = ''; 
        const incorrectAnswers = userTestAnswers.filter(ans => !ans.is_correct);

        if (incorrectAnswers.length > 0) {
            incorrectAnswers.forEach(ansRecord => {
                const qData = ansRecord.question_data;
                const li = document.createElement('li');
                let reviewHtml = '';
                if (qData.type === 'cloze') {
                    reviewHtml = `
                        <div class="question-line"><strong>Điền từ:</strong> ${qData.question_text.replace('＿＿＿＿＿', `<span class="user-answer-text-wrong">${ansRecord.user_answer_text || "(bỏ trống)"}</span>`)}</div>
                        <div class="correct-answer-line">Đáp án đúng: <span class="correct-answer-text">${qData.correct_answer}</span></div>
                        <div class="full-sentence-line" style="font-size:0.8em; color: var(--text-light); font-family: var(--font-jp);">(${qData.full_sentence_jp})</div>
                    `;
                } else if (qData.type === 'mcq') {
                    let questionDisplayForReview = qData.prompt || "";
                    if (qData.sentence_stub_start) { // sentence_stub_start is the main question part for MCQ
                        questionDisplayForReview += `<br><div class="mcq-sentence">${qData.sentence_stub_start}</div>`;
                    }
                    
                    reviewHtml = `
                        <div class="mcq-review-item">
                            <div class="question-prompt">${questionDisplayForReview}</div>
                            <div class="user-answer">Bạn chọn: <span class="user-answer-text-wrong">${ansRecord.user_answer_text || "(chưa chọn)"}</span></div>
                            <div class="correct-answer-option">Đáp án đúng: <span class="correct-answer-text">${qData.options[qData.correct_option_index]}</span></div>
                            ${qData.explanation ? `<small><em>${qData.explanation}</em></small>` : ''}
                        </div>
                    `;
                }
                li.innerHTML = reviewHtml;
                incorrectAnswersListEl.appendChild(li);
            });
        } else if (totalQuestions > 0) {
             incorrectAnswersListEl.innerHTML = '<li>🎉 Chúc mừng! Bạn đã đúng tất cả các câu đã làm!</li>';
        } else {
            incorrectAnswersListEl.innerHTML = '<li>Không có câu hỏi nào trong bài kiểm tra này.</li>';
        }
        
        showScreen('testResults');
    }   
    
    retakeTestButton.addEventListener('click', () => {
        // Re-use the `generatedTestQuestions` for retake. Shuffle them again.
        if (generatedTestQuestions.length > 0) {
            shuffleArray(generatedTestQuestions);
            currentTestQuestionIndex = 0;
            currentTestScore = 0;
            userTestAnswers = [];
            displayCurrentTestQuestion();
            showScreen('testInterface');
            submitAnswerButton.classList.toggle('hidden', generatedTestQuestions[0]?.type === 'mcq');
            submitAnswerButton.disabled = (generatedTestQuestions[0]?.type === 'mcq');
            nextQuestionButton.classList.add('hidden');
            finishTestEarlyButton.classList.remove('hidden');
        } else {
            alert("Không có câu hỏi để làm lại. Vui lòng cài đặt lại bài kiểm tra.");
            showScreen('testSetup');
        }
    });
    backToTestSetupFromResultsBtn.addEventListener('click', () => {
        testGrammarSelection.querySelectorAll('input[name="testGrammar"]:checked').forEach(cb => cb.checked = false);
        showScreen('testSetup');
    });

    // --- MODE SWITCHING HANDLERS ---
    switchToGrammarListBtn.addEventListener('click', () => showScreen('grammarList'));
    switchToFlashcardSetupBtn.addEventListener('click', () => {
        populateGrammarSelectionCheckboxes(); // Repopulate in case new data was loaded or for consistency
        showScreen('flashcardSetup');
    });
    switchToTestSetupBtn.addEventListener('click', () => {
        populateGrammarSelectionCheckboxes(); // Repopulate
        showScreen('testSetup');
    });

    // --- GLOBAL KEYBOARD SHORTCUTS ---
    document.addEventListener('keydown', (event) => {
        // Check if any modal or input field is active to prevent unwanted shortcuts
        const activeEl = document.activeElement;
        const isInputActive = activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.tagName === 'SELECT';

        if (isInputActive && event.key !== 'Enter') return; // Allow Enter for specific inputs

        if (!screens.flashcardApp.classList.contains('hidden')) {
            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault(); 
                flipButton.click(); 
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                if (!prevButton.disabled) prevButton.click();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                if (!nextButton.disabled) nextButton.click();
            } else if (event.key.toLowerCase() === 'o') { 
                event.preventDefault();
                if (!markKnownButton.disabled) markKnownButton.click();
            } else if (event.key.toLowerCase() === 'x') { 
                event.preventDefault();
                if (!markUnknownButton.disabled) markUnknownButton.click();
            }
        } else if (!screens.testInterface.classList.contains('hidden')) {
            if (event.key === 'Enter') {
                 event.preventDefault();
                 if (!submitAnswerButton.classList.contains('hidden') && !submitAnswerButton.disabled) {
                    submitAnswerButton.click();
                 } else if (!nextQuestionButton.classList.contains('hidden') && !nextQuestionButton.disabled) {
                    nextQuestionButton.click();
                 }
            }
        }
    });
    

    // --- INITIAL LOAD ---
    loadGrammarData();
});