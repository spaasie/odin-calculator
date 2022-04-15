const display = document.querySelector(".calc-display");
const btns = document.querySelectorAll(".calc-btns button");

const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const multiply = function(a,b) {
  return a * b;
}

const divide = function(a, b) {
  return a / b;
}

const operate = function(operator, a, b) {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
        return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
        return divide(a, b);
    default:
      console.log(`${operator} is not a valid operator`)
  }
}

const txtContent = function(e) {
  return e.textContent;
}

const updateCalculation = function() {
  numArray.push(+display.textContent);
  if (numArray.length == 2) {
    a = numArray[0];
    b = numArray[1];
    answer = operate(operator, a, b);
    numArray = [];
    numArray.push(answer);
    display.textContent = answer;
  }
  clearDisplay = true;
}

let a = 0;
let b = 0;
let numArray = [];
let answer = 0;
let operator;
let clearDisplay = true;
const updateDisplay = function() {
  display.removeAttribute("style");
  switch (txtContent(this)) {
    case ".":
      if (!(display.textContent.includes("."))) {
        display.textContent += txtContent(this);
      }
      break;
    case "C":
      a = 0;
      b = 0;
      answer = 0;
      numArray = [];
      operator = null;
      display.textContent = "0";
      break;

    case "÷":
      updateCalculation();
      operator = "divide";
      break;
    case "×":
      updateCalculation();
      operator = "multiply";
      break;
    case "−":
      updateCalculation();
      operator = "subtract";
      break;
    case "+":
      updateCalculation();
      operator = "add";
      break;
    case "=":
      if (!operator) {
        display.textContent = "ERROR 4";
        display.style.textAlign = "left";
        clearDisplay = true;
      } else {
        if (!(display.textContent == numArray[0])) {
          numArray.push(+display.textContent);
          b = numArray[1];
        }

        a = numArray[0];

        if (numArray.length == 2) {
          answer = operate(operator, a, b);
        }
        display.textContent = answer;
        numArray = [];
        clearDisplay = true;
        operator = null;
      }
      break;
    default:
      // if the display's 1st digit is 0 then empty sting
      if (display.textContent[0] == "0" || clearDisplay) {
        display.textContent = "";
        clearDisplay = false;
      } 
      display.textContent += txtContent(this);
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", updateDisplay);
});