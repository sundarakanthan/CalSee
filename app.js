
let inputDisplay = document.getElementById('displayInput');
let outputDisplay = document.getElementById('resultOutput');

let showInDisplay = (input) =>{
    inputDisplay.value = inputDisplay.value + input;
}

let calculate = () => {
    try {
        resultOutput.value =   eval(inputDisplay.value);
    } catch(e) {
       
        resultOutput.value = 'Math Error :(';
    }
}

let clearDisplay = () =>{
    inputDisplay.value = "";
    outputDisplay.value = "";
} 

let removeChar = () => {
    inputDisplay.value -= inputDisplay.value;
}