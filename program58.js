//Array Methods Case Study
//Pgm 1
//Count Total Departments

const company = [
    {department : "HR", employee : ["ALice", "Bob"]},
    {department : "Engineering", employee : ["Charlie", "David"]},
]

function countDept(data)
{
    let cnt =0;
    for(let i=0; i< data.length; i++)
    {
        //console.log(data[i].department)
        if(data[i].includes(department))
        {
            cnt++;
        }
    }
    console.log("No of departements in :",cnt);
}
countDept(company);