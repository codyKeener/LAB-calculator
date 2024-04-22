//create functions for add, subtract, mutliply, divide
//target all buttons on the DOM and add event listeners
//create variables for number1, operator, and number2
//target screen div and update number on the screen with the buttons
//create switch statements for all possibilities

let number1 = "0"
let operator = ""
let number2 = ""
let lastButtonClicked = ""

const operate = () => {
  let sum
  switch (operator) {
    case "add":
      sum = number1 + number2
    case "subtract":
      sum = number1 - number2
    case "multiply":
      sum = number1 * number2
    case "divide":
      sum = number1 / number2
  }
  return sum
}

const display = document.querySelector("#display")
const calculatorContainer = document.querySelector("#calculator-container")

// const clearButton = document.querySelector("#clear")
// const backspaceButton = document.querySelector("#backspace")
// const divideButton = document.querySelector("#divide")
// const sevenButton = document.querySelector("#seven")
// const eightButton = document.querySelector("#eight")
// const nineButton = document.querySelector("#nine")
// const multiplyButton = document.querySelector("#multiply")
// const fourButton = document.querySelector("#four")
// const fiveButton = document.querySelector("#five")
// const sixButton = document.querySelector("#six")
// const subtractButton = document.querySelector("#subtract")
// const oneButton = document.querySelector("#one")
// const twoButton = document.querySelector("#two")
// const threeButton = document.querySelector("#three")
// const addButton = document.querySelector("#add")
// const zeroButton = document.querySelector("#zero")
// const equalsButton = document.querySelector("#equals")

const clickButton = (button) => {

  switch (button) {
    case "clear":
      number1 = "0"
      operator = ""
      number2 = ""
      break
    case "backspace":
      number1 = number1.slice(0, -1)
      console.log(number1)
      break
    case "seven":
      number1 += "7"
      break
  }

  let displayValue

  if (operator === "") {
    displayValue = number1
  } else {
    displayValue = number2
  }

  display.textContent = displayValue

}

calculatorContainer.addEventListener("click", (e) => {
  let id = e.target.id

  clickButton(id)
})
