//pgm 4
//Online Store Discounts

const products =[
        {name:'Laptop',price: 50000},
        {name:'Phone',price: 30000},
        {name:'Tablet',price: 20000},
]
// function getCategory()
// {
//     for(i =0; i< products.length; i++)
//     {
//         if(products[i].price >= 40000)
//             {
//                 products[i].category = "Moderate";
//                 disc =(products[i].price - (products[i].price/10));
//                 products[i].discount  =disc;
//             }
//             else if((products[i].price >= 20000) && (products[i].price <40000))
//             {
//                 products[i].category = "Moderate";
//                 disc =(products[i].price - (products[i].price/20));
//                 products[i].discount  =disc;
//             }
//             else if((products[i].price < 20000))
//             {
//                 products[i].category = "Affordable";
//                 products[i].discount  =0;
//             } 
//     }
// }    

function getCategory(price)
{
    if(price >= 40000)
    {
        return "Expensive"
    }
    else if((price >= 20000) && (price < 40000))
    {
        return "Moderate"
    }
    else if((price < 20000))
    {
        return "Affordable"
    } 
}  

function getDiscountByCategory(category){
    switch(category)
            {
            case "Expensive":
              return 10
                
            case "Moderate":
                return 5;
                
            case "Affordable":
                return 0;     
            }
}

function updatedArr()
{
    for (let i = 0; i < products.length; i++) 
    {
        //const element = products[i];
        let category = getCategory(products[i].price)
        let discount = getDiscountByCategory(category)
        if(products[i].price >= 40000)
        {
            products[i].category = category;
            disc =(products[i].price - (products[i].price/10));
            products[i].discount  =disc;
        }
        else if((products[i].price >= 20000) && (products[i].price <40000))
        {
            products[i].category = category;
            disc =(products[i].price - (products[i].price/20));
            products[i].discount  =disc;
        }
        else if((products[i].price < 20000))
        {
            products[i].category = category;
            products[i].discount  =0;
        } 
    }   
}
updatedArr();
console.log(products);
// for(i =0; i< products.length; i++)
// {
//     switch(cate)
//     {
//     case "Expensive":
//         products[i].category = "Expensive";
//         disc =(products[i].price - (products[i].price/10));
//         products[i].discount  =disc;
//     case "Moderate":
//         products[i].category = "Moderate";
//         disc =(products[i].price - (products[i].price/20));
//         products[i].discount  =disc; 
//     case "Affordable":
//         products[i].category = "Affordable";
//         products[i].discount  = 0;
//         break;       
//     }
// }
//console.log(products);