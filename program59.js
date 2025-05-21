//Pgm 2
//Convert Students Names to String

const school = [
    {class:"Math", students: ["John", "Emma"]},
    {class:"Science", students: ["Oliver", "Sophia"]},
]

function namesToString(data)
{
    let arr= [];
    for(let i = 0; i< data.length; i++)
    {
        arr.push(data[i].students);
    }
    console.log(arr.join(","));
}

namesToString(school);