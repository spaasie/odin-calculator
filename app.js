const display = document.querySelector(".calc-display");
const btns = document.querySelectorAll(".calc-btns button");

// display.textContent

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
  // console.log(e.textContent)
  return e.textContent;
}

let a = 0;
let b = 0;
let answer = 0;
let operator;
const updateDisplay = function() {
  display.removeAttribute("style");
  switch (txtContent(this)) {
    case "C":
      a = 0;
      b = 0;
      answer = 0;
      operator = null;
      display.textContent = "0";
      break;
    case "÷":
    case "×":
    case "−":
      a = answer;
      b = +display.textContent;
      operator = "subtract";
      answer = operate(operator, a, b);
      display.textContent = answer;
      break;
    case "+":
      a = answer;
      b = +display.textContent;
      operator = "add";
      answer = operate(operator, a, b);
      display.textContent = answer;

      break;
    case "=":
      if (!operator) {
        display.textContent = "ERROR 4";
        display.style.textAlign = "left";
      } else {
        if (!(display.textContent == answer)) {
          b = +display.textContent;
        }
        a = answer;
        console.log("a:", a);
        console.log("b:", b);
        console.log("ans:", answer);
        answer = operate(operator, a, b);
        display.textContent = answer;
      }
      break;
    default:
      // if the display's 1st digit is 0 then empty sting
      if (display.textContent[0] == "0") {
        display.textContent = "";
      } else if (display.textContent == answer) {
        display.textContent = "";
      } 
      display.textContent += txtContent(this);
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", updateDisplay);
});