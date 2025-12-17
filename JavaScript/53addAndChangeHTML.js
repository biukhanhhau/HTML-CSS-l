//      STEP 1 Create the element
const newH1 = document.createElement("h1");
//      STEP 2 Add attributes/Properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//      STEP 3 Append element to dom
document.body.append(newH1);
    // add to the top
document.body.prepend(newH1);
    // add the h1 into a box
document.getElementById("box1").append(newH1);
    // add the h1 into the upper part
document.getElementById("box1").prepend(newH1);

const box4 = getElementById("box4");

    // add to in front of ...
document.body.insertBefore(newH1, box4);
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);

//      Remove HTML element
document.getElementById("box1").removeChild("newH1");