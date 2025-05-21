//2nd case study Q1
const prompt = require("prompt-sync")();

function EvenNoBet(iNo1,iNo2)
{
   for(let i=iNo1; i<=iNo2; i++)
   {
    if(i%2 == 0)
    {
        console.log(i);
    }
   }
}

let iNum1 =0,iNum2 =0;
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 =Number( prompt("Enter second Number: "));
EvenNoBet(iNum1,iNum2);
