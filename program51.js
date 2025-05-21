//pgm 14
// Find the longest string in a nested array of objects

const items =[
    { name: "apple"},
    { name: "banana"},
    { name: "grapefruit"}
]
let fruits ={};
for(let i =0; i< items.length; i++)
{
    fruits["name"] = items[i].name.length;
}

console.log(fruits);