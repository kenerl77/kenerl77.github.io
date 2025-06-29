function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const resultValues = document.getElementById("resultValues");
    const imageValues = document.getElementById("imageValues");
    const values = [];
    const images = [];
    if(numOfDice == 0){
        resultValues.textContent = "no dice rolled";
        return;
    }
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src = Dice-images/${value}.jpg>`)
    }
    resultValues.textContent = `dice: ${values.join(`, `)}`;
    imageValues.innerHTML = images.join(" ");
}