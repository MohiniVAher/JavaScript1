//Pgm 14 
// Find the Product with Maximum Price and Sort Others Name

const products =[
    {name:"Laptop", details: { price: 1500, available:true}},
    {name:"Phone", details: { price: 800, available:true}},
    {name:"Refrigerator", details: { price: 1200, available:false}},
    {name:"Microwave", details: { price: 700, available:true}}
]

console.log(products.sort(sortPrice)[0]);

function sortPrice(a,b)
{
    return b.details.price-a.details.price;
}