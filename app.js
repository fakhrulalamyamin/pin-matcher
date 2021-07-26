// All Selector
const generateInput = document.getElementById('generateInput')
const generateBtn = document.getElementById('generateBtn')
const userInput = document.getElementById('userInput')
const buttons = document.querySelectorAll('.button')
const backspace = document.querySelector('.backspace-button')
const clear = document.querySelector('.clear-button')
const submit = document.getElementById('submitBtn')
const count = document.getElementById('count')
const match = document.getElementById('matched')
const notMatch = document.getElementById('notMatch')

// variables
let pinGenerate = 0
let submitPin = 0
let countNum = 3

// notification display none
match.style.display = 'none'
notMatch.style.display = 'none'

// event listener 
generateBtn.addEventListener('click', generatePin)
buttons.forEach((btn) => {
    btn.addEventListener('click', userPinGenerate)
})
submit.addEventListener('click', submitHandel)
backspace.addEventListener('click', backspaceHandel)
clear.addEventListener('click', clearHandel)

// Pin generation function
function generatePin() {
    pinGenerate = Math.floor(1000 + Math.random() * 9000)
    generateInput.value = pinGenerate
    userInput.focus()
    userInput.value = ''
    countNum = 3
}

// Button Click Function
function userPinGenerate(event) {
    const clickedValue = event.target.innerText

    if (userInput.value.length < 4) {
        userInput.value = userInput.value + clickedValue
    }

    submitPin = parseInt(userInput.value)
}

// Submit Handeler
function submitHandel() {
    if (pinGenerate === submitPin) {
        match.style.display = 'block'
        setTimeout(() => {
            match.style.display = 'none'
        }, 4000)
        generateInput.value = ''
        userInput.value = ''
    } else {
        notMatch.style.display = 'block'
        setTimeout(() => {
            notMatch.style.display = 'none'
        }, 4000)
        userInput.value = ''
        countNum--;
        count.innerText = countNum
    }

    if (countNum === 0) {
        submit.disabled = true
        setTimeout(() => {
            window.location.reload(false);
        }, 4000)
    }
}

function clearHandel() {
    userInput.value = ''
}

function backspaceHandel() {
    userInput.value = userInput.value.substr(0, userInput.value.length - 1)
}