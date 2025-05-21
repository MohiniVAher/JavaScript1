//Pgm 10
// Find the First Product That is Available

const products =[
    {name:"Laptop", available: false},
    {name:"Phone", available: false},
    {name:"Refrigerator", available: true},
    {name:"Microwave", available: true}
]

function checkAvail(value)
{
    return value.available == true;
}

console.log("First available product is",products.find(checkAvail))