const previousNumber = document.querySelector(".prevNum");
const currentNumber = document.querySelector(".currNum");
const mathSign = document.querySelector('.mathSign');
const resultNumber = document.querySelector('#result');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');

let result;

function displayNumbers () {
    currentNumber.innerHTML = this.textContent;
}

function operate () {

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult () {

    let a = +(previousNumber.innerHTML);
    let b = +(currentNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = a / b;
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
    previousNumber.innerHTML = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    resultNumber.innerHTML = result;
});