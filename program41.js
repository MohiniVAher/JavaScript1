//pgm 4
//Check if String Starts with a Substring

function checkStartWith(str,substr)
{
    if(str.startsWith(substr)==true)
    {
        return true;
    }
    {
        return false;
    }
}

let str = "Hello world";
substr = "Hello";
ret = checkStartWith(str,substr);
console.log(ret);

