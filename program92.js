//Pgm 15
// Find the First Product With a Specific Feature and Index

const products =[
    {name:"Laptop", details: { price: 1500, available:true, fastcharging: false}},
    {name:"Phone", details: { price: 800, available:true, fastcharging: true}},
    {name:"Refrigerator", details: { price: 1200, available:false, fastcharging: false}},
    {name:"Microwave", details: { price: 700, available:true, fastcharging: false}}
]

// console.log(products.find(check));

// function check(item)
// {
//     return item.details.fastcharging;
// }

console.log(products.findIndex(check));

function check(item)
{
    return item.details.fastcharging;
}