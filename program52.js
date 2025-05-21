//pgm 15
//Extract and Capitalize First Letter of Names from Nested array

const people = [
    { first_name: "john"},
    { first_name: "alice"},
    { first_name: "bob"}
]

function firstLetterCap(data)
{
    let cap = [];
    for(let i =0; i< data.length; i++)
    {
        cap[i] = data[i].first_name.at(0).toUpperCase();
    }
    return cap;       
}

console.log(firstLetterCap(people));