//Pgm 14
//Find Emplpyees Who Completed Lessons in Multiple Courses

const employee =[
    {
        course:"React Development",
        employees: [
            {name:"Alice", completedLessons:["JSX","Component"]},
            {name:"Bob", completedLessons:["JSX"]},
        ]
    },
    {
        course:"JavaScript for Beginners",
        employees: [
            {name:"Alice", completedLessons:["Loops"]},
            {name:"Charlie", completedLessons:["Functions"]},
        ]
    }
]

// function findCompleteLess(data)
// {
//     record =[];
//     finalRecord={};
//     for(let i=0; i< data.length; i++)
//     {
//         //console.log(data[i].employees)
//         let employee1 = data[i].employees;
//         for(let j=0; j< employee1.length; j++)
//         {
//             //console.log(employee1[j].name);
//             //console.log(employee1[j].completedLessons)
//             if(!record.includes(employee1[j].name))
//             {
//                 record.push(employee1[j].name);
//             }
//         }
//     }
//     console.log(record);
// }

function findCompleteLess(data)
{
    record =[];
    finalRecord={};
    for(let i=0; i< data.length; i++)
    {
        //console.log(data[i].employees)
        let employee1 = data[i].employees;
        for(let j=0; j< employee1.length; j++)
        {
            //console.log(employee1[j].name);
            //console.log(employee1[j].completedLessons)
            //record.push(employee1[j].name);
        }
    }
    console.log(record);
    for(let k=0; k<record.length; k++)
    {

    }
}

findCompleteLess(employee)