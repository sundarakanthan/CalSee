const inputDisplay = document.getElementById('displayInput');
const outputDisplay = document.getElementById('resultOutput');

function showInDisplay(value) {
    inputDisplay.value += value;
}

function clearDisplay() {
    inputDisplay.value = '';
    outputDisplay.value = '';
}

function removeLastChar() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        outputDisplay.value = eval(inputDisplay.value);
    } catch (error) {
        if (error instanceof SyntaxError) {
            outputDisplay.value = 'Syntax Error :(';
        } else {
            outputDisplay.value = 'Error :(';
        }
    }
}


    const calculatorContainer = document.getElementById('calculator');

    calculatorContainer.addEventListener('click', event => {
        const target = event.target;
        if (target.matches('.key')) {
            const value = target.textContent.trim();
            showInDisplay(value);
        } else if (target.matches('c')) {
            clearDisplay();
        } else if (target.matches('Backspace')) {
            removeLastChar();
        } else if (target.matches('#calculate')) {
            calculate();
        }
    });

    document.addEventListener('keydown', event => {
        const key = event.key;

        
        switch(key){

            case '1':
                showInDisplay('1');
                break;
        
            case '2':
                showInDisplay('2');
                break;
        
            case '3':
                showInDisplay('3');
                break;
        
            case '4':
                showInDisplay('4');
                break;
        
            case '5':
                showInDisplay('5');
                break;
        
            case '6':
                showInDisplay('6');
                break;
        
            case '7':
                showInDisplay('7');
                break;
        
            case '8':
                showInDisplay('8');
                break;
        
            case '9':
                showInDisplay('9');
                break;
        
            case '0':
                showInDisplay('0');
                break;
        
            case '+':
                showInDisplay('+');
                break;
        
            case '-':
                showInDisplay('-');
                break;
        
            case '*':
                showInDisplay('*');
                break;
        
            case '/':
                showInDisplay('/');
                break;
        
            case 'Enter':
                calculate();
                break;
        
            case '.':
                showInDisplay('.');
                break;
        
            case 'Backspace':
                removeLastChar();
                break;

            case 'c':
                clearDisplay();
        }
        


    });


