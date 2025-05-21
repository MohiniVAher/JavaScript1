//2nd case study Q2
const prompt = require("prompt-sync")();

function OddNumSum(iNo1,iNo2)
{
    let sum=0;
   for(let i=iNo1; i<=iNo2; i++)
   {
    if(i%2 != 0)
    {
        sum= sum + i;
    }
   }
   return sum;
}

let iNum1 =0,iNum2 =0,iRet = 0;
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 =Number( prompt("Enter second Number: "));

iRet = OddNumSum(iNum1,iNum2);
console.log("Sum of odd numbers between given range :",iRet)
