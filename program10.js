
const prompt = require("prompt-sync")();

function CheckGreater(iNo1,iNo2)
{
    if(iNo1 >= iNo2)            
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let iNum1 =0,iNum2 =0, iRet =0;
iNum1 =Number( prompt("Enter first  Number: "));
iNum2 =Number( prompt("Enter second Number: "));
iRet = CheckGreater(iNum1,iNum2);

if(iRet == 1 )            
    {
        console.log("first number is grater than second");
    }
else
    {
        console.log("Second number is greater than First");
    }

