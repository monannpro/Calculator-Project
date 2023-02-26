const previousNumber = document.querySelector(".prevNum");
const currentNumber = document.querySelector(".currNum");
const mathSign = document.querySelector('.mathSign');
const resultNumber = document.querySelector('#result');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');

let result = '';

function displayNumbers () {
    //jeśli mamy wynik i kolejno naciśniey cyfrę bez operatora- wyczyści poprzedni wynik i zresetuje liczenie
    if(resultNumber !== '') {
        resultNumber.innerHTML = '';
    }
    //jeśli liczba zawiera juz . przerwij
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    //jeśli nie ma liczby to po wcisnieciu . pokazuje 0.
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.'


    currentNumber.innerHTML += this.textContent;
}

function operate () {
    //jeśli nie ma liczby ani wyniku, po naciśnięciu - zwróć -
    if(currentNumber.innerHTML === '' && resultNumber.innerHTML === '' && this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return;
    }

    //jeśli wynik już istnieje, schowaj wysnik, wyczyść wynik, przypisz wynik do num2
    if(resultNumber.innerHTML !== ''){
        resultNumber.classList.add("hidden");
        resultNumber.innerHTML = '';
        currentNumber.innerHTML = result;

    } //w przeciwnym razie (jeśli wynik nie istnieje) i nie ma liczby przerwij.
    else if (currentNumber.innerHTML === '') {
        return;
    }

    //jeśli operator już użyty, podlicz i jako num2 pokaż wynik
    if(mathSign.innerHTML !== ''){
        showResult();
        resultNumber.innerHTML = '';
        currentNumber.innerHTML = result;
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult () {
    //nie licz jeśli pierwsza lub druga liczba będą puste
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    //zmienne
    let a = +(previousNumber.innerHTML);
    let b = +(currentNumber.innerHTML);
    let operator = mathSign.innerHTML;

    //operacje
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
            if(b === 0){
                result = 'Error';
            } else {
                result = a / b;
                break;
            }
    }
}


//nasłuchiwania
numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});

operatorsButtons.forEach((button) => {
    button.addEventListener('click', operate)
});

equalsButton.addEventListener('click', () => {
    //policz, wyczyść num1, num2 i znak. Pokaż wynik.
    showResult();
    previousNumber.innerHTML = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    resultNumber.classList.remove("hidden");
    resultNumber.innerHTML = result;
});