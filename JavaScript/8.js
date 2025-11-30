const min = 50;
const max = 100;

// console.log(randomNum);

document.getElementById("random").onclick = function(){
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("num").textContent = randomNum;    
}