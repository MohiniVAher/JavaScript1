//pgm 18
//Reversing Product Names in a Catlog

const catalog = [
    {category: "Electronics", products: [{ name : "Laptop"},{name : "SmartPhone"}]},
    {category: "Home Appliances", products: [{ name : "Washing Machine"},{name : "Refrigerator"}]}
]

function reversingProdNames(data)
{
    for(let i =0; i< data.length; i++)
    {
        ele = data[i].products;
        for(let j =0; j< ele.length; j++)
        {
            let arr = ele[j].name.split("");
            let revarr = arr.reverse();
            let newarr = revarr.join();
            ele[j].name = newarr;

        }

    }
    console.log(data);
}    
reversingProdNames(catalog);