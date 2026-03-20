// arrow functions was introduced in ES6, ECMAScript, ES6 => ECMAScript 2015

// anonymous arrowfunction
() => {}

// arrow function
const greetUser = (name) => {
    return `Hello, my name is ${name}!`;
};

greetUser("Alice"); // calling this function will return "Hello Alice!"
console.log(greetUser("Alice")); // this will print "Hello Alice!" to the console


// anonymous function
const getData = () => {};


// arrow functions
const greet = (name, role2) => {
    
    // write function logic here
    const role = "a software developer";
    // set a return value for this function 
    return `Hello, my name is ${name}. I work as ${role}.but I am also ${role2}`;
}

