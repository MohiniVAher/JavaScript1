
const prompt = require("prompt-sync")();

function Multiplication(iNo1,iNo2)
{
    //console.log(typeof iNo1);
    let iProduct =0;                       
    iProduct = iNo1 * iNo2 ;
    return iProduct;
}

let iNum1 =0, iNum2 =0,iRet =0;

//console.log("Enter two Numbers: ");
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 = Number(prompt("Enter second  Number: "));

iRet = Multiplication(iNum1,iNum2);

console.log("Multiplication of numbers is :",iRet);
