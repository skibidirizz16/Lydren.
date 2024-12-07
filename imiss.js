const wordContainer = document.getElementById('current-word');
const wordInput = document.getElementById('word-input');
const timerDisplay = document.getElementById('timer');
const wordsTypedDisplay = document.getElementById('words-typed');
let timeLeft = 60;
let wordsTyped = 0;
let gameInterval;
let timerInterval;

// Word list for typing
const wordList = [
  'banana', 'monkey', 'jungle', 'tiger', 'elephant', 'giraffe', 'puzzle', 
  'keyboard', 'rocket', 'zebra', 'sunshine', 'adventure', 'elephant', 
  'paradise', 'mountain', 'ocean', 'waterfall', 'rainbow', 'forest' , 'vren' , 'pogi' , 'yolla' , 'michelle' , 
  'astros dance company' ,   'astros dance company' ,   'astros dance company' ,   'astros dance company' , 
  'lahat kayo ako mag isa suntukan' , 
];

// Start the game
function startGame() {
  startTimer();
  showNewWord();
  wordInput.addEventListener('input', checkInput);
}

// Start the countdown timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      endGame();
    } else {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
    }
  }, 1000);
}

// Display a new word to type
function showNewWord() {
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  wordContainer.textContent = randomWord;
}

// Check the input from the player
function checkInput() {
  const currentWord = wordContainer.textContent;
  if (wordInput.value === currentWord) {
    wordsTyped++;
    wordsTypedDisplay.textContent = wordsTyped;
    wordInput.value = ''; // Reset input field
    showNewWord(); // Show a new word
  }
}

// End the game
function endGame() {
  clearInterval(timerInterval);
  alert(`Game Over! You typed ${wordsTyped} words in 60 seconds.`);
  resetGame();
}

// Reset the game
function resetGame() {
  timeLeft = 60;
  wordsTyped = 0;
  wordsTypedDisplay.textContent = wordsTyped;
  timerDisplay.textContent = timeLeft;
  wordInput.value = '';
  showNewWord();
  startGame(); // Restart the game after reset
}

// Start the game when the page loads
startGame();
