const prompt = require("prompt-sync")();

function Remainder(iNum1,iNum2)
{
    let iRem = 0;                       
    iRem = iNum1 % iNum2;
    console.log(iRem);
    return iRem;
}

let iNo1=0, iNo2 =0, iRet= 0;

//console.log("Enter two Numbers: ");
iNo1 = Number(prompt("Enter First number: "));
iNo2 = Number(prompt("Enter second number: "));

iRet = Remainder(iNo1,iNo2);

console.log("Remainder is :",iRet);
