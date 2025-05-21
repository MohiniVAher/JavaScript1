// Implemnetation og 2 dimensional array and perform other operations on that 

const numberofRows = 5;
const numberofColumn = 4;

const TwoDiArray = Array(numberofRows).fill();

for(let i =0;i<numberofRows; i++)
{
    TwoDiArray[i] =Array(numberofColumn).fill(9);
}
console.log(TwoDiArray);