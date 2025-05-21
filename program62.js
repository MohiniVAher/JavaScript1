//Pgm 5
//Remove the Last Recipe

const recipes = [
    {category: "Desserts", items: ["Cake","Brownie"]},
    {category: "Drinks", items: ["Coffee","Tea"]},
]

function removeLastitem(data)
{
    for(let i =0; i< data.length; i++)
    {
        if(data[i].category == "Desserts")
        {
           data[i].items.splice(data[i].items.length-1,1);
        }
    }
    console.log(data);
}

removeLastitem(recipes);

