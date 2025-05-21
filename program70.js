//Pgm 13
//Get First Two Products

const supermarket = [
    {section:"Diary", products:["Milk","Cheese","Butter"]}
]
function getProduct(data)
{
    new1 = []
    for(let i =0; i< data.length; i++)
    {
         new1 =data[i].products.slice(0,2);
    }
    console.log(new1);
}

getProduct(supermarket);