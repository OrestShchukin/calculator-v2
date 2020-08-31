const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    const digit = ev.target.innerText;
    display.value += digit;

}


document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));
function opersPressed(ev) {
    const oper = ev.target.innerText;
    if (display.value[display.value.length - 1] == "+" || display.value[display.value.length - 1] == "-" || display.value[display.value.length - 1] == "*" || display.value[display.value.length - 1] == "/" ) {
        display.value = display.value.slice(0, -1);
        display.value += oper;
        return
    }
    display.value += oper;

}


document.querySelectorAll('.dot button')
    .forEach( button => button.addEventListener('click', dotPressed));
function dotPressed(ev) {
    const dot = ev.target.innerText;
    if (display.value[display.value.length - 1] == "."  ||  display.value[0] == "" ){
        return
    }   
    display.value += dot;

}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed(){
    display.value = eval(display.value);
}

document.querySelector('.cls').addEventListener('click', clsPressed);

function clsPressed(){
    display.value = ""
}


document.querySelector('.del').addEventListener('click', delPressed);

function delPressed(){
    display.value = display.value.slice(0, -1);
}

