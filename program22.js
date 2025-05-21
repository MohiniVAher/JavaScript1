
const prompt = require("prompt-sync")();

function Greet(name,greet = "Hello")
{
    
    console.log(greet,name)
}

let str1 ="", str2 = "";
str1 = prompt("Enter your name:");
str2 = prompt("Enter Greeting:");

Greet(str1,str2);


