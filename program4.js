
const prompt = require("prompt-sync")();

function Average(iNo1,iNo2,iNo3)
{
    //console.log(typeof iNo1);
    let iSum =0, fAvg = 0.0;                       
    iSum = iNo1 + iNo2 + iNo3;
    fAvg = iSum/3;
    return fAvg;
}

let iNum1 =0, iNum2 =0, iNum3 =0, iRet =0;

//console.log("Enter two Numbers: ");
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 = Number(prompt("Enter second  Number: "));
iNum3 = Number(prompt("Enter third  Number: "));

iRet = Average(iNum1,iNum2,iNum3);

console.log("Average of numbers is :",iRet);
