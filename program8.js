
const prompt = require("prompt-sync")();

function Check(iNo1)
{
    if(iNo1 > 10)            
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let iNum1 =0,iRet =0;
iNum1 =Number( prompt("Enter first  Number: "));
iRet = Check(iNum1);

if(iRet == 1 )            
    {
        console.log("Number is greater than 10");
    }
else
    {
        console.log("Number is less than 10");
    }

