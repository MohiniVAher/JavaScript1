
const prompt = require("prompt-sync")();

function Square(iNo)
{
    let iSquare = 0;                       
    iSquare = iNo * iNo;
    return iSquare;
}

let iNum =0, iRet =0;

//console.log("Enter two Numbers: ");
iNum = Number(prompt("Enter Number: "));

iRet = Square(iNum);

console.log("Square of number is :",iRet);
