// Pgm 3
// Sort the Students by Age in Acsending Order

const students = [
    { name: "John", age : 18},
    { name: "Sarah", age : 25},
    { name: "Mike", age : 22}
]


function sortAge(a,b)
{
    return a.age - b.age;
}

console.log("Sorted Array is ",students.sort(sortAge));