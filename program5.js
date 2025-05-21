
const prompt = require("prompt-sync")();

function SimpleInterst(Pr,Rt,Ti)
{
    //console.log(typeof iNo1);
    let iSum=0, SI = 0.0;                       
    iSum = Pr*Rt*Ti;
    SI = iSum/100;
    return SI;
}

let Princ=0, Rate =0,Duration =0, iRet =0;

//console.log("Enter two Numbers: ");
Princ =Number( prompt("Enter Principle: "));
Rate = Number(prompt("Enter Rate: "));
Duration = Number(prompt("Enter Duration: "));

iRet = SimpleInterst(Princ,Rate,Duration);

console.log("Simple Interest is :",iRet);
