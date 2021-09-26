const pwEl = document.getElementById("pw")
const copyEl = document.getElementById("copy")
const lenEl = document.getElementById("len")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")

const upperLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerLetters = "qwertyuiopasdfghjklzxcvbnm"
const numbers = "0123456789"
const symbols = "!#%&()=?_*'@£$€^"


function getLowercase() {
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}

function getNumber() {
    return numbers[Math.floor(Math.random()*numbers.length)]
}

function getSymbol() {
    return symbols[Math.floor(Math.random()*symbols.length)]
}

function generatePassword() {
    const len = lenEl.value;
    let password = "";

    if(upperEl.checked){
        password += getUppercase()
    }

    if(lowerEl.checked){
        password += getLowercase()
    }

    if(numberEl.checked){
        password += getNumber()
    }

    if(symbolEl.checked){
        password += getSymbol()
    }

    for(let i = password.length; i<len; i++){
        const x = generateX()
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const listOfAll = []

    if(upperEl.checked){
        listOfAll.push(getUppercase())
    }

    if(lowerEl.checked){
        listOfAll.push(getLowercase())
    }

    if(numberEl.checked){
        listOfAll.push(getNumber())
    }

    if(symbolEl.checked){
        listOfAll.push(getSymbol())
    }

    if(listOfAll.length == 0) return ""

    return listOfAll[Math.floor(Math.random()*listOfAll.length)]
}

generateEl.addEventListener("click", generatePassword)

copyEl.addEventListener("click", ()=>{
    const textarea = document.createElement("textarea")
    const password = pwEl.innerText

    if(!password) {return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()

})



