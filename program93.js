//Pgm 16
//Find All Products That are Available and Have a Price Over a Threshold

const products =[
    {name:"Laptop", details: { price: 1500, available:true}},
    {name:"Phone", details: { price: 800, available:true}},
    {name:"Refrigerator", details: { price: 1200, available:false}},
    {name:"Microwave", details: { price: 700, available:true}}
]

let prod = products.filter(check);

console.log(prod.reverse());

function check(item)
{
    return item.details.price>1000;
}
