// Pgm 4 
// Get First Negative Number in an Array

const numbers = [3,7,-5,2,9];

function checkNegative(numbers)
{
    return numbers < 0;
}

console.log("First Negative number in given array",numbers.find(checkNegative));