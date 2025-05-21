//String case study pgm 1
//check if string contains a given word or not

function checkString(str)
{
    if(str.includes("apple") == true)
        return true;
    else 
        return false;
}

let str ="I love apple pie";
let ret = checkString(str);
if(ret == true)
{
    console.log("The string contains an apple");
}
else
{
    console.log("The string contains an apple");
}