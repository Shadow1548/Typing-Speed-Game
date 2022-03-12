// Array Of Words 

const words = [
    "Hello",
    "Ajax",
    "Amine",
    "Thinking", 
    "Behaviour",
    "No",
    "Great",
    "Apple",
    "Youtube",
    "CSS3",
    "Python",
    "Scala",
    "Interested",
    "Random",
    "Numbers",
    "Jobs",
    "Cyber",
    "DataBase",
    "Coding",
    "Programming",
    "Teacher",
    "Instagram",
    "BreakFast"
];

// Settings Levels

const lvls = {
    "Easy": 6,
    "Normal": 4,
    "Hard": 2
};

// Default Level

let defaultLevelName = "Normal"; // Change Level From Here
let defaultLevelSeconds = lvls[defaultLevelName];

// Catch Selectors 
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable On Paste Event 
input.onpaste = function () {
    return false;
}

// Start Game 
startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function 
    generateWords()
};

function generateWords() {
    // Get Random Words From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove Word From Array
    words.splice(wordIndex, 1);
    // Show The Random Word 
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words 
    upcomingWords.innerHTML = "";
    // Generate Words 
    for (let i = 0; i < words.length; i++){
        // Create Div Elment
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    // Call Start Play Function 
    startPlay();
};

function startPlay () {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            // Stop Timer
            clearInterval(start);
            // Compare Words 
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
            // Empty Input Field 
            input.value = '';
            // Increase Score 
            scoreGot.innerHTML++;
            if (words.length > 0) {
                // Call Function
                generateWords();
            }else {
                let span = document.createElement("span");
                span.className = "Well Done !! ";
                let spanText = document.createTextNode("Game Finished");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
            }else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}