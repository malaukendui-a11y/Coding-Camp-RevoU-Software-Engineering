// Get Variable
const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellowe");
const greenlight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

// initial value
redlight.style.background = "red";
let current = "red";

// switch light
function switchlight () {
    switchBtn.disabled = true;
    resetlight();
    yellowlight.style.background = "yellow";

    console.log(current);
    setTimeout(() => {
        resetlight();
        if (current == "red") {
            current = "greeen";
            greenlight.style.background = "green";
        } else {
            current = "red";
            redlight.style.background = "red";
        }
    }, 1000);

    switchBtn.disabled = "false";

}