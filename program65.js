//Pgm 8
//Add a New Movie at the Begining

const movies = [
    {genre: "Action", titles: ["Mad Max","Gladiator"]}
]

"John Wick"

function addMovie(data)
{
    for(let i = 0; i<data.length; i++)
    {
        data[i].titles.splice(0,0,"John Wick");
    }
    console.log(data);
}

addMovie(movies);
