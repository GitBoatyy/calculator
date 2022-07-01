//Calculator

let startInput = ''
let currentInput = ''
let currentCal = null
let reset = false

const lastCalDisplay = document.getElementById('lastCalDisplay')
const currentCalDisplay = document.getElementById('currentCalDisplay')
const clearButt = document.getElementById('ac')
const delButt = document.getElementById('c')
const pointButt = document.getElementById('point')
const equalButt = document.getElementById('equals')
const powerButt = document.getElementById('power')
const calculatorShell = document.getElementById('calcShell')
const numButt = document.querySelectorAll('[data-number]')
const operatorButt = document.querySelectorAll('[data-operator]')

//allows keyboard input
window.addEventListener('keydown', keyPress)

//allows button click input
clearButt.addEventListener('click', clear)
delButt.addEventListener('click', delNum)
pointButt.addEventListener('click', addPoint)
equalButt.addEventListener('click', checkInput)


operatorButt.forEach((button) =>
  button.addEventListener('click', () => setCal(button.textContent))
)
numButt.forEach((button) =>
  button.addEventListener('click', () => addNum(button.textContent))
)


//resets calculator
function clear() {
    currentCalDisplay.textContent = '0'
    lastCalDisplay.textContent = ''
    startInput = ''
    currentInput = ''
    currentCal = null
  }
//resets current display
function addNum(number) {
  if (currentCalDisplay.textContent === '0' || reset)
    resetDisplay()
  currentCalDisplay.textContent += number
}
function resetDisplay() {
  currentCalDisplay.textContent = ''
  reset = false
}
function addPoint() {
  if (reset) resetDisplay()
  if (currentCalDisplay.textContent === '')
    currentCalDisplay.textContent = '0'
  if (currentCalDisplay.textContent.includes('.')) return
  currentCalDisplay.textContent += '.'
}
function delNum() {
  currentCalDisplay.textContent = currentCalDisplay.textContent
    .toString()
    .slice(0, -1)
}
function setCal(operator) {
  if (currentCal !== null) checkInput()
  startInput = currentCalDisplay.textContent
  currentCal = operator
  lastCalDisplay.textContent = `${startInput} ${currentCal}`
  reset = true
}
//checks for x/0
function checkInput() {
  if (currentCal === null || reset) return
  if (currentCal === '÷' && currentCalDisplay.textContent === '0') {
    alert("You could have destroyed the Universe!!!")
    return
  }
  currentInput = currentCalDisplay.textContent
  currentCalDisplay.textContent = decimalRound(
    cal(currentCal, startInput, currentInput)
  )
  lastCalDisplay.textContent = `${startInput} ${currentCal} ${currentInput} =`
  currentCal = null
}

//fixes decimal issues
function decimalRound(number) {
  return Math.round(number * 1000) / 1000
}

function keyPress(e) {
  if (e.key >= 0 && e.key <= 9) addNum(e.key)
  if (e.key === '.') addPoint()
  if (e.key === '=' || e.key === 'Enter') checkInput()
  if (e.key === 'Backspace') delNum()
  if (e.key === 'Escape') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setCal(convertCal(e.key))
  console.log(e.key)
}


//changes keyboard input 
function convertCal(keyCal) {
  if (keyCal === '/') return '÷'
  if (keyCal === '*') return 'x'
  if (keyCal === '-') return '-'
  if (keyCal === '+') return '+'
  console.log(keyCal)
}

//operations
function add(a, b) {
  return a + b
}
function substract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function power(a, b){
  return a**b
}


function cal(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case 'x':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    case 'xⁿ':
      return power(a, b)
    default:
      return null
  }
}