const displayValue = document.getElementById("numValue");
const prevNumDisplay = document.getElementById("prevNumValue");

const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const add = (a, b) => parseFloat(a) + parseFloat(b);

let firstNum = "";
let secondNum = "";
let operator = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.dataset.value);
  });
});

function handleButtonClick(value) {
  const numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (numList.includes(value)) {
    handleNumber(value);
  } else {
    handleOperator(value);
  }
}

function handleNumber(value) {
  if (operator === "") {
    firstNum += value;
    displayValue.textContent = firstNum;
  } else {
    secondNum += value;
    displayValue.textContent = secondNum;
  }
}

function handleOperator(value) {
  switch (value) {
    case "=":
      handleEqual();
      break;
    case "delete":
      handleDelete();
      break;
    case "clear":
      handleClear();
      break;
    default:
      operator = value;
      prevNumDisplay.textContent = `${firstNum} ${operator}`;
  }
}

function handleEqual() {
  if (secondNum === "") {
    prevNumDisplay.textContent = "Sum not possible yet";
  } else {
    const result = operate(firstNum, secondNum, operator);
    prevNumDisplay.textContent = `${firstNum} ${operator} ${secondNum} = ${result}`;
    displayValue.textContent = result;
    firstNum = "";
    secondNum = "";
    operator = "";
  }
}

function handleDelete() {
  if (operator === "") {
    firstNum = firstNum.slice(0, -1);
    displayValue.textContent = firstNum;
  } else {
    secondNum = secondNum.slice(0, -1);
    displayValue.textContent = secondNum;
  }
}

function handleClear() {
  displayValue.textContent = "";
  prevNumDisplay.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
}

function operate(a, b, op) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}
