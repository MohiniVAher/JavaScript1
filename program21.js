
const prompt = require("prompt-sync")();

function Multiply(iNo1,iNo2)
{
    let product =0;
    product = iNo1 * iNo2;
    return product;
}

let iNum1 =0, iNum2= 0, iRet =0;
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 =Number( prompt("Enter first  Number: "));

iRet = Multiply(iNum1,iNum2);
console.log("Multiplication of two numbers is:",iRet);

