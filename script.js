let protoverses = 0;
let increaseAmount = 0.1; // Updated to 0.1 Protoverses
let enhancementRate = 0.0001; // 0.01% as a decimal
let speed = 0.1; // Starting speed in Protoverses per millisecond

function updateDisplay() {
    document.getElementById('display').innerText = `Protoverses: ${protoverses.toFixed(2)}`;
}

function earnProtoverses() {
    protoverses += speed;
    updateDisplay();
}

document.getElementById('increase').onclick = function() {
    protoverses += increaseAmount;
    updateDisplay();
};

document.getElementById('enhance').onclick = function() {
    speed += speed * enhancementRate;
};

setInterval(earnProtoverses, 0.01); // Update every millisecond
