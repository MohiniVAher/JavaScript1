//pgm3
//Count occurrences of a character

const prompt = require("prompt-sync")();

function countChar(str1,ch1)
{
    let count =0;
    for(let i= 0; i< str1.length; i++)
        {
            if(str1[i] == ch1)
                count++;
        }
    return count;    
}
//let str = "Hello World!"
let str = prompt("Enter a string: ");
let ch =prompt("Enter a char to count occurence: ");
ret = countChar(str,ch);
console.log("Given char occurs :",ret,"times");

