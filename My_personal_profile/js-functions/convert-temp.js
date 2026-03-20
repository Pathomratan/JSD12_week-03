import readline from "readline";
//import CelsiusToFahrenheit from "./celsiusToFahrenheit.js";

// Pascal case -> CelsiusToFahrenheit -> JS function
// Camel case -> celsiusToFahrenheit -> React function
// Snake case -> celsius_to_fahrenheit -> Python function

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
};

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the temperature in Celsius: ", function(tempInput){
    const temp  = parseFloat(tempInput);
    rl.question("Enter unit (C/F): ", function(unitInput){
        const unit = unitInput.trim().toUpperCase();
        let result;
        // if statement
        if (unit === "C") {     
            result = celsiusToFahrenheit(temp);
            console.log(`${temp}°C is equal to ${result.toFixed(2)}°F`);
        } else if (unit === "F") {
            result = fahrenheitToCelsius(temp);
            console.log(`${temp}°F is equal to ${result.toFixed(2)}°C`);
        } else {
            console.log("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
        }
    rl.close();});
});