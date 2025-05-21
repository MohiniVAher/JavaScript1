//Implementation of an Array in JavaScript with all inbuilt  functions and traversal




//const array =[1,2,3,4,5];

//const dynamicarray = Array(5).fill(5);
//console.log(dynamicarray);

const dynarray = Array(8);

for(let i =0; i<dynarray.length; i++)
{
   dynarray[i] =  dynarray.fill(i);
}
console.log(dynarray);

