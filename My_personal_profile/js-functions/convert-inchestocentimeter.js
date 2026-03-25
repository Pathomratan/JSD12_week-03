import readline from "readline";
//import CelsiusToFahrenheit from "./celsiusToFahrenheit.js";

// Pascal case -> CelsiusToFahrenheit -> JS function
// Camel case -> celsiusToFahrenheit -> React function
// Snake case -> celsius_to_fahrenheit -> Python function

function inchesToCentimeters(inches) {
    return (inches * 2.54);
};

function centimetersToInches(centimeters) {
    return (centimeters / 2.54);
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the length in : ", function(numInput){
    const numin  = parseFloat(numInput);
    rl.question("Enter unit to convert (Inches=I/Centimeters=C): ", function(unitInput){
        const unit = unitInput.trim().toUpperCase();
        let result;
        // if statement
        if (unit === "C") {     
            result = inchesToCentimeters(numin);
            console.log(`${numin} inches is equal to ${result.toFixed(2)} centimeters`);
        } else if (unit === "I") {
            result = centimetersToInches(numin);
            console.log(`${numin} centimeters is equal to ${result.toFixed(2)} inches`);
        } else {
            console.log("Invalid unit. Please enter 'Centimeters' for centimeters or 'Inches' for Inches.");
        }
    rl.close();});
});