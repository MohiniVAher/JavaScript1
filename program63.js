//Pgm 6
//Add a New Book To Library


const library =[
    {genre: "Fiction", books:["1994","To a Mockingbird"]}
];

function addBook(data)
{
    for(let i = 0; i < data.length; i++)
    {
        data[i].books.splice(data[i].books.length,0,"Brave New World");
    }
    console.log(data);
}

addBook(library)
