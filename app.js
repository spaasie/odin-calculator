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

const updateDisplay = function() {
  switch (txtContent(this)) {
    case "C":
      display.textContent = "";
      break;
    case "÷":
    case "×":
    case "−":
    case "+":
      console.log("ignore")
      break;
    case "=":
      console.log("give answers plz:");
      break;
    default:
      display.textContent += txtContent(this);
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", updateDisplay);
});