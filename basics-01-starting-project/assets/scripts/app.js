// Gets input from input field on page
function getUserNumInput() {
  return parseInt(userInput.value);
}

// Generates and calculates calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // From vendor.js file
}

// Clears user input
function clearUserInput() {
    document.getElementById('input-number').value = "";
}

function addNums() {
  const initalResult = currentResult;
  const enteredValue = getUserNumInput();
  currentResult += enteredValue;
  createAndWriteOutput("+", initalResult, enteredValue);
  clearUserInput();
}

function subtractNums() {
  const initalResult = currentResult;
  const enteredValue = getUserNumInput();
  currentResult -= enteredValue;
  createAndWriteOutput("-", initalResult, enteredValue);
  clearUserInput();
}

function multiplyNums() {
  const initalResult = currentResult;
  const enteredValue = getUserNumInput();
  currentResult *= enteredValue;
  createAndWriteOutput("*", initalResult, enteredValue);
  clearUserInput();
}

function divideNums() {
  const initalResult = currentResult;
  const enteredValue = getUserNumInput();
  currentResult /= enteredValue;
  createAndWriteOutput("/", initalResult, enteredValue);
  clearUserInput();
}

let currentResult = 0;

addBtn.addEventListener("click", addNums);
subtractBtn.addEventListener("click", subtractNums);
multiplyBtn.addEventListener("click", multiplyNums);
divideBtn.addEventListener("click", divideNums);
