//Pgm 1
//Sort The Employees by Salary

const employees =[
    {name:"Alice", salary: 7000},
    {name:"Bob", salary: 5000},
    {name:"Charlie", salary: 6000},
]

function sortSal(a,b)
{
    //console.log(a.salary,b.salary);
    return b.salary - a.salary;
}
employees.sort(sortSal);
console.log("Sorted Array is:",employees);