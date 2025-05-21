const prompt = require("prompt-sync")();

function Sum(element)
{
    sum += element;
}

let iNum1 =0, sum = 0;
let Arr =[];
iNum1 =Number( prompt("Enter Number of elements in an array: "));

console.log("Enter numbers of an array:")

for(let i =0; i< iNum1; i++)
{
    Arr[i] =Number(prompt());
}

console.log("Sum of numbers is:",Arr.forEach(Sum));
