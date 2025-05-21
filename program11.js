
const prompt = require("prompt-sync")();

function CheckInBet100(iNo1)
{
    if(iNo1 <= 100)            
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let iNum1 =0, iRet =0;
iNum1 =Number( prompt("Enter first  Number: "));

iRet = CheckInBet100(iNum1);

if(iRet == 1 )            
    {
        console.log("Number is below 100");
    }
else
    {
        console.log("Number is above 100");
    }

