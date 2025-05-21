//Pgm 13
// Find All Products Below a Price and Reverse  the Order

const products =[
    {name:"Laptop", details: { price: 1500, available:false}},
    {name:"Phone", details: { price: 800, available:true}},
    {name:"Refrigerator", details: { price: 1200, available:true}},
    {name:"Microwave", details: { price: 700, available:false}}
]

function checkAvail(value)
{
    return value.details.price < 1000;
}

let prod = products.filter(checkAvail)
console.log("Last available product is",prod.reverse());