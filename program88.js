//Pgm 12
//Find the First Poduct With Price Greater Than a Threshold and Available
//Pgm 11 
// Find the Index of Last Available Product 

const products =[
    {name:"Laptop", available: false},
    {name:"Phone", available: true},
    {name:"Refrigerator", available: true},
    {name:"Microwave", available: false}
]

function checkAvail(value)
{
    return value.available == true;
}

console.log("Last available product is",products.findLastIndex(checkAvail))