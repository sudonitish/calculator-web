let screen = document.getElementById('screen');
let screenValue='';
function display(num) {
    screen.style.color="#707070";  
    if(screen.value=="ERR"){
        screen.value='';
    }
    screen.value += num;
}
function calculate() {
    screenValue=screen.value;
    try {
        screen.value = eval(screenValue);
    }
    catch (err) {
        screen.value = "ERR";
        screen.style.color="#ff0000";  
    }
}

function del() {
    if(screen.value=="ERR"){
        screen.value="";
    }
    screen.value=screen.value.slice(0,-1);

}
function clr() {
    screen.value="";

}