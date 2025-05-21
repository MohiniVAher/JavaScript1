// Pgm 12
//Remove a Student without changing original

const college = [
    {department:"Engineering", students:["Alice", "Bob","Charlie"]}
];

function removeStudent(data)
{
    for(let i =0; i<data.length; i++)
    {
        data[i].students.splice(1,1)
    }
    console.log(data);
}

removeStudent(college);