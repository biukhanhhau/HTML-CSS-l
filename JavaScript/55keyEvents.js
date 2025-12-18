//  eventListener = Listen for specific events to create interactive web pages
//                  events: keydown, keyup
//                  .addEventListener("evenName", callback)

document.addEventListener("keydown", event => {
    console.log(`Key down ${event.key}`);
})

document.addEventListener("keyup", event => {
    console.log(`Key up ${event.key}`);
})

// Keyy down thì đếm số lần nó được in ra. Còn key up
// thì bỏ phím ra sẽ tính, để thấy được khác biệt thì
// đè vào phím sẽ có nhiều key down nhưng gỡ ra chỉ có 1 key up