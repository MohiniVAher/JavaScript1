
const prompt = require("prompt-sync")();

function Addition(iNo1,iNo2)
{
    //console.log(typeof iNo1);
    let iSum =0;                       
    iSum = iNo1 + iNo2 ;
    return iSum;
}

let iNum1 =0, iNum2 =0,iRet =0;

//console.log("Enter two Numbers: ");
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 = Number(prompt("Enter second  Number: "));

iRet = Addition(iNum1,iNum2);

console.log("Addition of numbers is :",iRet);
