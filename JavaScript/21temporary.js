const display = document.getElementById("result");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const num = document.getElementById("number");
function convert(){
    let result;
    if(toC.checked){
        let numb = Number(num.value);
        result = (numb - 32)*5/9;
        display.textContent = result;
    }
    else if(toF.checked){
        let numb = Number(num.value);
        result = numb * 1.8 + 32;
        display.textContent = result;
    }
    else{
        display.textContent = "please select a unit";
    }
}