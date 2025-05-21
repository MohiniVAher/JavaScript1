const prompt = require("prompt-sync")();
function sayHello(name)
{
    console.log("Hello ",name);
}

let str = " ";
str = prompt("Enter first  Name: ");
sayHello(str);
