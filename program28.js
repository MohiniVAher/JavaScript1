//pgm 2
//Inventory Stock Checker

const inventory= [
    {name: 'pencil', stock :20},
    {name: 'Notebook', stock :0},
    {name: 'Eraser', stock :5}
];

newInventory =[];
function findStockWithZero()
{
    for(i = 0; i < inventory.length; i++ )
    {               
        if(inventory[i].stock == 0)
        {
            inventory[i].stock = "Out of Stock";
        }
        else
        {
            newInventory.push(inventory[i])
        }
    }    
}
findStockWithZero()
console.log(inventory);
// for(i = 0; i < inventory.length; i++ )
//     {
//         console.log(inventory[i]);
//     }
// for(i = 0; i < newInventory.length; i++ )
// {
//     console.log(newInventory[i]);
// }
