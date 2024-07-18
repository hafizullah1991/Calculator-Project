const display = document.getElementById("display");

function appendToDisplay(input){
display.value+= input;
//  means like display.value = display.value + input;
}

function clearDisplay(){
display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value)   // eval is function that evaluates a string of code
    }
    catch(error){
        display.value = "Error"
    }
}

document.addEventListener("keydown", function(event) {      // event is an object that contains info about event that just happened
    const key = event.key;          // if 5 pressed event will be 5
    if ((key >= '0' && key <= '9') || key === '.') {
        appendToDisplay(key);   // it will call the function appendToDisplay(); that is mentioned on above.
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});