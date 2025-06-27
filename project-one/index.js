let toCelsius = document.getElementById("toCelsius");
let toFahrenheit = document.getElementById("toFahrenheit");
let number = document.getElementById("textBox");
let result = document.getElementById("result");
let temp;
function convert() {
    temp = Number (number.value);
    if(toCelsius.checked){
        temp = temp *9 / 5 + 32;
        result.textContent = `${number.value} degree fahrenheit is equal to ${temp} degree celsius`;
    }
    else if(toFahrenheit.checked){
        temp = 5 / 9 * (temp -32);
        result.textContent = `${number.value} degree celcius is equal to ${temp} degree fahrenheit`;
    }
    else{
        result.textContent ="Select a unit first";
    }
}