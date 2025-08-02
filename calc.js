var screen = document.getElementById('screen');

function btnclk(value){
    screen.value += value;
}
function sc(){
    screen.value = "";
}
function findresult(){
    var result = eval(screen.value)
    screen.value = result;
}