const displayValue = document.getElementById("numValue");
const prevNumDisplay = document.getElementById("prevNumValue");
const btnClear = document.getElementById("clear");
const btnDelete = document.getElementById("delete");
const btnDivide = document.getElementById("btnDivide");
const btnMultiply = document.getElementById("btnDivide");
const btnSubtract = document.getElementById("btnSubtract");
const btnSum = document.getElementById("btnSum");
const btnAdd = document.getElementById("btnAdd");

let displayValues;

let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
let subtract = (a, b) => a - b;
let add = (a, b) => parseFloat(a) + parseFloat(b);

let firstNum = "";
let secondNum = "";
let operator = "";
let calculation = [];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let clickedValue = button.dataset.value;
    let numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    if (numList.includes(clickedValue)) {
      if (operator === "") {
        firstNum += clickedValue;
        displayValue.textContent = firstNum;
      } else {
        console.log("hrlo");
        secondNum += clickedValue;
        displayValue.textContent = secondNum;
      }
    } else if (clickedValue === "=") {
      console.log("firstnum: " + firstNum + "Second: " + secondNum, operator);
      let result = operate(firstNum, secondNum, operator);
      displayValue.textContent = result;
      prevNumDisplay.textContent = `${firstNum} ${operator} ${secondNum} = ${result}`;
      firstNum = result;
      secondNum = "";
      operator = "";
    } else {
      operator = clickedValue;
      prevNumDisplay.textContent = firstNum + operator;
    }
    console.log("First number: " + firstNum + "second Number: " + secondNum);
  });
});

function operate(firstNum, secondNum, operator) {
  if (operator == "+") {
    return add(firstNum, secondNum);
  } else if (operator == "-") {
    return subtract(firstNum, secondNum);
  } else if (operator == "*") {
    return multiply(firstNum, secondNum);
  } else if (operator == "/") {
    return divide(firstNum, secondNum);
  }
}

btnSum.addEventListener("click", () => {
  displayValue.textContent = firstNum;
});

btnClear.addEventListener("click", () => {
  displayValue.textContent = "";
  prevNumDisplay.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
});
