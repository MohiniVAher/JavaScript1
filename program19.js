//2nd case study Q3
const prompt = require("prompt-sync")();

function InRevOrd(iNo1,iNo2)
{
   for(let i=iNo2; i>=iNo1; i=i-1)
   {
        console.log(i);
   }
}

let iNum1 =0,iNum2 =0;
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 =Number( prompt("Enter second Number: "));
InRevOrd();
