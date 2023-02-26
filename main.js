const previousNumber = document.querySelector(".prevNum");
const currentNumber = document.querySelector(".currNum");
const mathSign = document.querySelector('.mathSign');
const resultNumber = document.querySelector('#result');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');


let result = 0;

function displayNumbers () {

    resultNumber.classList.add("hidden");
    if(mathSign.innerHTML === '') resultNumber.innerHTML = '';
    if(this.textContent === '.' && (currentNumber.innerHTML.includes('.') || resultNumber.innerHTML.includes('.'))) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

    currentNumber.innerHTML += this.textContent;
}

function operate () {

    if(currentNumber.innerHTML === '' && resultNumber.innerHTML === '' && this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return;
    } else if(resultNumber.innerHTML === '' && currentNumber.innerHTML === ''){
        return;
    } else if(resultNumber.innerHTML !== ''){
        resultNumber.classList.add("hidden");
        currentNumber.innerHTML = result;
    }  if(mathSign.innerHTML !== '') {
       showResult();
        currentNumber.innerHTML = result;
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult () {
    if(previousNumber.innerHTML === '' && currentNumber.innerHTML === '') return;

    let a = +(currentNumber.innerHTML);
    let b = +(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
    }
}

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});

operatorsButtons.forEach((button) => {
    button.addEventListener('click', operate)
});

equalsButton.addEventListener('click', () => {
    showResult();
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    resultNumber.classList.remove("hidden");
    resultNumber.innerHTML = result;
});