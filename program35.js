//pgm 9
//Shopping cart calculator

const cart = [
    {name: 'Shirt', quantity:2, price: 500},
    {name: 'Jeans', quantity:1, price: 1200},
    {name: 'Shoes', quantity:2, price: 2500}
]

function discountApply(totalcost1)
{
    disc= totalcost1/5;
    return disc;
}
let totalcost = 0;
let tax =0;
let disc =0;
for(let i =0; i<cart.length; i++)
{
    cart[i].totalcost= cart[i].price*cart[i].quantity;
    cart[i].tax= cart[i].totalcost/10;
    if(cart[i].totalcost > 4000)
    {
        cart[i].disc =cart[i].totalcost -discountApply(cart[i].totalcost)
    }
}

console.log(cart);


