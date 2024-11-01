


function rollDice(){
    const numOfDice = parseInt(document.getElementById("numOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    // Clear previous results
    diceResult.textContent = '';
    diceImages.innerHTML = '';

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice showing ${value}" style="width: 150px; height: 150px">`);
    }
    
    // Display dice values as text
    diceResult.textContent = `Dice: ${values.join(', ')}`;

    // Display dice images
    diceImages.innerHTML = images.join('');
}
