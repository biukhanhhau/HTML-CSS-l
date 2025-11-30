document.getElementById("myBtn").onclick = function(){
    let isChecked = document.getElementById("myCheckbox").checked;
    let isLove = document.getElementById("myCheckbox1").checked;
    h1 = document.getElementById("h1");
    if (isChecked && isLove){
        h1.textContent = "You agreed and come with love!!";
    }
    else if(isChecked){
        h1.textContent =`I want your loveee`;
    }
    else if(isLove){
        h1.textContent =`You only have the truth love :<`;
    }
    else{
        h1.textContent =`You don't have anything brooo`;
    }
}