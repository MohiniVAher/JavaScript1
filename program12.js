
const prompt = require("prompt-sync")();

let iNum1 =0;
iNum1 =Number( prompt("Enter first  Number: "));

if(iNum1 == 0 )            
    {
        console.log("Given number is equal to zero ");
    }
else if(iNum1 > 0)
    {
        console.log("Given number is Positive");
    }
else
    {
        console.log("Given number is Negative"); 
    }    

