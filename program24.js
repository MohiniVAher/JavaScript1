
const prompt = require("prompt-sync")();

function Display(element)
{
    console.log(element);
}

let Arr =[];

iNo1 = Number(prompt("Enter no of colors you wanrt to insert:"));
console.log("Enter color names:")

for(let i =0; i< iNo1; i++)
{
    Arr[i] =prompt();
}

//for(let i =0; i< Arr.length; i++)
//    {
//        console.log("Colors inside array are :",Arr[i]);
//    }
//console.log("Colors inside array are :",Arr);    

console.log("Displaying an array using forEach:")
Arr.forEach(Display);




