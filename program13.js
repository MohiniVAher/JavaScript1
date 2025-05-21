
const prompt = require("prompt-sync")();

let Age =0;
Age =Number( prompt("Enter Persons Age : "));

if(Age >= 18 )            
    {
        console.log("Person is eligible to Vote ");
    }
else
    {
        console.log("Person is not eligible to Vote");
    }
