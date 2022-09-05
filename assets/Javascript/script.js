//Variable declarations
const startButton = document.getElementById("startGame");
const introductionCard = document.getElementById("intro-container");
const questionCardDisplay = document.getElementById("card-container");
const questionCards = questions;
var timeEl = document.getElementById("timer");
var secondsLeft = 180;

//Question array

var questions = [
  {
    q: "What is a method?",
    a: "2. a method is a function that is specifically associated with an object.",
    choices: [
      { choice: "1. a member of the Wu-Tang Clan" },
      {
        choice:
          "2. a method is a function that is specifically associated with an object.",
      },
      { choice: "3. a collection of items" },
      { choice: "4. a way in which we can traverse the DOM" },
    ],
  },
  {
    q: "Which Javascript method can return the first element that matches a specified selector?",
    a: "2. .querySelector()",
    choices: [
      { choice: "1. .removeAttribyte()" },
      { choice: "2. .querySelector()" },
      { choice: "3. .removeChild()" },
      { choice: "4. .getElementById" },
    ],
  },
  {
    q: "Which of the given statements is true regarding the JavaScript document object?",
    a: "3. the document object provides a JavaScript interface to access the DOM.",
    choices: [
      {
        choice:
          "1. the document object provides a shell interface to access the DOM.",
      },
      {
        choice:
          "2. the document object provides an SQL interface to access the DOM.",
      },
      {
        choice:
          "3. the document object provides a JavaScript interface to access the DOM.",
      },
      {
        choice:
          "4. the document object provides an interface to browse the webpage.",
      },
    ],
  },
  {
    q: "Which of the following is true about the Document Object Model?",
    a: "1. DOM is a tree-like logical structure.",
    choices: [
      { choice: "1. DOM is a tree-like logical structure." },
      { choice: "2. DOM is a cyclical logical structure" },
      { choice: "3. DOM is a linear logical structure" },
      {
        choice:
          "4. DOM is a logical structure where every node is disconnected",
      },
    ],
  },
  {
    q: "Which of the following statements is true about DOM nodes?",
    a: "3. The DOM nodes of type Element allow access to the same attributes available to HTML elements",
    choices: [
      {
        choice:
          "1. If an HTML anchor element (<a>) has an href attribute, that will not be accessible through the DOM.",
      },
      {
        choice:
          "2. The DOM nodes of type Text allow access to the same attributes available to HTML elements.",
      },
      {
        choice:
          "3. The DOM nodes of type Element allow access to the same attributes available to HTML elements",
      },
      {
        choice:
          "4. If an HTML element has a class attribute, that will not be accessible through the DOM",
      },
    ],
  },
  {
    q: "Which of the following is NOT correct about DOM nodes?",
    a: "1. All the nodes of a DOM tree must be of the same type.",
    choices: [
      { choice: "1. All the nodes of a DOM tree must be of the same type." },
      { choice: "2. The root node is the top-most node of the DOM tree" },
      { choice: "3. An HTML element can be represented by a DOM node." },
      {
        choice:
          "4. The text of an HTML element can be represented by a DOM node.",
      },
    ],
  },
  {
    q: 'Given "const elem = document.body" what does the elem variable contain?',
    a: "2. it contains the reference to the contents of the <body> element.",
    choices: [
      { choice: '1. it contains the text "document body"' },
      {
        choice:
          "2. it contains the reference to the contents of the <body> element.",
      },
      { choice: "3. it contains the location of the HTML document." },
      { choice: "4. it contains no value." },
    ],
  },
  {
    q: "Which property can be used to set an anonymous function to run when the element is clicked?",
    a: "1. element.onclick",
    choices: [
      { choice: "1. element.onclick" },
      { choice: "2. element.innerHTML" },
      { choice: "3. element.removeChild" },
      { choice: "4. element.style" },
    ],
  },
  {
    q: 'How would you set the inner HTML of the following <p> element using JavaScript? <p id="paragraph"></p>',
    a: '3. document.getElementById("paragraph").innerHTML = "Hello World!"',
    choices: [
      { choice: '1. ("paragraph").innerHTML = "Hello World!";' },
      {
        choice:
          '2. document.getElementById("paragraph").style.display = "Hello World!";',
      },
      {
        choice:
          '3. document.getElementById("paragraph").innerHTML = "Hello World!"',
      },
      { choice: '4. document.getElementById("paragraph")= "Hello World!";' },
    ],
  },
  {
    q: "How do you set the value of the CSS property background-color using JavaScript?",
    a: 'element.style.backgroundColor = "red"',
    choices: [
      { choice: '1. element.style.background-Color = "red";' },
      {
        choice:
          "2. There is no way to set the background-color CSS property of an element using Javascript.",
      },
      { choice: '3. element.style.backgroundColor = "red";' },
      { choice: '4. element.style.color = "red";' },
    ],
  },
  {
    q: "What can NOT be done with the help of the DOM?",
    a: "1. Permanently change the content of the source HTML file.",
    choices: [
      { choice: "1. Permanently change the content of the source HTML file." },
      { choice: "2. Delete a specific HTML element from a websites view." },
      { choice: "3. Add a specific HTML element to a websites view." },
      { choice: "4. Modify the content of a specific HTML element." },
    ],
  },
];

//Random question selection

//Initiate game

//event listener for start button
startButton.addEventListener("click", initGame);

//timer element
function setTime() {
  //assign the interval to a variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.innerText = secondsLeft + " seconds left!";
    //when time = 0, we display a game over message
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//when start button gets clicked...
function initGame() {
  //clear introduction car and show question cards
  introductionCard.classList.remove("show");
  introductionCard.classList.add("hide");
  questionCardDisplay.classList.add("show");
  questionCardDisplay.classList.remove("hide");
  //question presentation
  const randomQuestionIndex = Math.floor(Math.random() * questions.length);
  const initialQuestion = questions[randomQuestionIndex];
  console.log("initialQuestion", initialQuestion);
  //
  const qTitleElm = document.createElement("h1");
  qTitleElm.innerText = initialQuestion.q;
  document.getElementById("card-container").append(qTitleElm);

  //set timer function (t = 3 minutes)
  setTime();

  //display randomized question cards
}

// //Selects the timer element in the DOM

// setTime();
