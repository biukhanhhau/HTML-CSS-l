let number = 0;
document.getElementById("decrease").onclick = function(){
    number -= 1;
    document.getElementById("number").textContent = number; // <--- Cần thêm dòng này để cập nhật màn hình
}

document.getElementById("increase").onclick = function(){
    number += 1;
    document.getElementById("number").textContent = number; // <--- Cần thêm dòng này để cập nhật màn hình
}

document.getElementById("reset").onclick = function(){
    number = 0;
    document.getElementById("number").textContent = number; // <--- Cần thêm dòng này để cập nhật màn hình
}