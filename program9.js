
const prompt = require("prompt-sync")();

function CheckEqual(iNo1,iNo2)
{
    if(iNo1 == iNo2)            
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
iRet = CheckEqual(iNum1,iNum2);

if(iRet == 1 )            
    {
        console.log("Numbers are equal");
    }
else
    {
        console.log("Numbers are not equal");
    }

