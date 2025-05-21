//Pgm 12
//Find the First Product With Price Greater Than a Threshold and Available

const products =[
    {name:"Laptop", details: { price: 1500, available:false}},
    {name:"Phone", details: { price: 800, available:true}},
    {name:"Refrigerator", details: { price: 1200, available:true}},
    {name:"Microwave", details: { price: 200, available:false}}
]

function checkAvail(value)
{
    return value.details.price > 1000 && value.details.available == true;
}

console.log("Last available product is",products.find(checkAvail))