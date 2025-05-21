//Pgm 3 
//Get the last Product Name

const store = [
    {category: "Electronics", products: ["Laptop","Smartphone", "Tablet"]},
    {category: "Clothing", products: ["Shirt", "Jeans"]}
]

function getLastProd(data)
{
    let ret = "";
    for(let i =0; i< data.length; i++)
    {
        if(data[i].category == "Electronics")
        {
           // ret = data[i].products.slice(-1);
           ret = data[i].products[data[i].products.length -1];
        }
    }
    console.log(ret);
}

getLastProd(store);