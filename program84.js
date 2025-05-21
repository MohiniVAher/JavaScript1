//Pgm 7
// Find the Product with the Highest Price

const product = [
    {name: "Laptop", price: 1500},
    {name: "Phone", price: 800},
    {name: "Refrigerator", price: 1200}
]

function highestPrice(x,y)
{
    return y.price -x.price;
}

console.log(product.sort(highestPrice)[0]);