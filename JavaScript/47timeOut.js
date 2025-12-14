function startTimer(){
    // this variable just like a name for timeout, timeout will automatically run even without it
    timeoutId = setTimeout(() => window.alert(`You are not gay`),3000);
}

function cancleTimer(){
    clearTimeout(timeoutId);
}