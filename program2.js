
const prompt = require("prompt-sync")();

function RectArea(iLen,iBth)
{
    let fArea = 0;                       
    fArea = iLen * iBth;
    return fArea;
}

let length=0, breadth =0, fRet= 0.0;

//console.log("Enter two Numbers: ");
length = Number(prompt("Enter Length: "));
breadth = Number(prompt("Enter second Breadth: "));

fRet = RectArea(length,breadth);

console.log("Area of Ractangle is :",fRet);
