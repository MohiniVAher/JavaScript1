
const prompt = require("prompt-sync")();

function CheckEven(iNo1)
{
    if(iNo1%2 ==0)            
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let iNum1 =0,iRet =0;
iNum1 =Number( prompt("Enter Number: "));
iRet = CheckEven(iNum1);

if(iRet == 1 )            
    {
        console.log("Number is Even");
    }
else
    {
        console.log("Number is Odd");
    }

