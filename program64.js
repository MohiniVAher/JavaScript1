//Pgm 7 
//Remove the First Destination

const travel = [
    {continent: "Europe", destinations: ["Paris","London"]},
    {continent: "Asia", destinations: ["Tokyo","Bangkok"]}
]

function removeDest(data)
{
    for(let i =0; i< data.length; i++)
    {
        if(data[i].continent == "Europe")
        {
            data[i].destinations.splice(0,1);
        }
    }
    console.log(data);
}

removeDest(travel);