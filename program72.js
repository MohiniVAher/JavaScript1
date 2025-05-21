//Pgm 15
//List All Customers Who Bought Multiple Items
//O/P:["John"]
const storePurchase =[
    {   customer:"John",
        purchases:[
            {item:"Laptop",quantity:1},
            {item:"Phone",quantity:2}
        ]
    },
    {   customer:"Jane",
        purchases:[
            {item:"Tablet",quantity:1}
        ]
    }
];
function listCustomers(data)
{
    let customers = data.filter(function(item)
    {
       return item.purchases.length>1; 
    })
    let cust = customers.map(function(item1)
    {
        return item1.customer;
    })

    let customers1 = data.filter(function(item)
    {
        return item.purchases.length>1
    }).map(function(item1)
    {
        return item1.customer;
    })
    console.log("Customers who purchases more than one item",customers1);
}
listCustomers(storePurchase);