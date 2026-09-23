// Get DOM elements
const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellowe");
const greenlight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

// Get horizontal lights (synced)
const horizontalLights = {
    red: document.querySelector('[data-sync="red"]'),
    yellow: document.querySelector('[data-sync="yellow"]'),
    green: document.querySelector('[data-sync="green"]')
};

// Initial state
let current = "red";

// Initialize lights
function initializeLights() {
    resetLights();
    activateLight("red");
}

// Reset all lights to off state
function resetLights() {
    // Vertical lights
    redlight.style.background = "rgb(55, 65, 81)"; // gray-700
    redlight.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";
    
    yellowlight.style.background = "rgb(55, 65, 81)";
    yellowlight.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";
    
    greenlight.style.background = "rgb(55, 65, 81)";
    greenlight.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";

    // Horizontal lights
    horizontalLights.red.style.background = "rgb(55, 65, 81)";
    horizontalLights.red.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";
    
    horizontalLights.yellow.style.background = "rgb(55, 65, 81)";
    horizontalLights.yellow.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";
    
    horizontalLights.green.style.background = "rgb(55, 65, 81)";
    horizontalLights.green.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.3)";
}

// Activate a specific light with glow effect
function activateLight(color) {
    resetLights();
    
    switch(color) {
        case "red":
            redlight.style.background = "rgb(239, 68, 68)"; // red-500
            redlight.style.boxShadow = "0 0 30px rgba(239, 68, 68, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            
            horizontalLights.red.style.background = "rgb(239, 68, 68)";
            horizontalLights.red.style.boxShadow = "0 0 30px rgba(239, 68, 68, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            break;
            
        case "yellow":
            yellowlight.style.background = "rgb(250, 204, 21)"; // yellow-400
            yellowlight.style.boxShadow = "0 0 30px rgba(250, 204, 21, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            
            horizontalLights.yellow.style.background = "rgb(250, 204, 21)";
            horizontalLights.yellow.style.boxShadow = "0 0 30px rgba(250, 204, 21, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            break;
            
        case "green":
            greenlight.style.background = "rgb(34, 197, 94)"; // green-500
            greenlight.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            
            horizontalLights.green.style.background = "rgb(34, 197, 94)";
            horizontalLights.green.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)";
            break;
    }
}

// Switch light function
function switchlight() {
    // Disable button during transition
    switchBtn.disabled = true;
    
    // Show yellow transition
    activateLight("yellow");
    
    console.log("Current light:", current, "→ Transitioning via yellow");
    
    // After 1 second, switch to the target light
    setTimeout(() => {
        if (current === "red") {
            current = "green";
            activateLight("green");
            console.log("Switched to green");
        } else {
            current = "red";
            activateLight("red");
            console.log("Switched to red");
        }
        
        // Re-enable button
        switchBtn.disabled = false;
    }, 1000);
}

// Event listener for button
switchBtn.addEventListener("click", switchlight);

// Initialize on page load
initializeLights();
