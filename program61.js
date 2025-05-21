//Pgm 4
//List All Course Names 

const university = [
    {faculty: "Science", courses: ["Physics", "Chemistry"]},
    {faculty: "Arts", courses: ["History", "Philosophy"]},
]

function namesToString(data)
{
    let arr= [];
    for(let i = 0; i< data.length; i++)
    {
        arr.push(data[i].courses.join(" | "));
    }
    console.log(arr.join(" | "));
}

namesToString(university);