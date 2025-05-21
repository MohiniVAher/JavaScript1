//Pgm 11
//Remove and Replace a Player

const team =[
    {sport: "Football",players: ["Messi", "Ronaldo","Neymer"]}
]

function replacePlayer(data)
{
    for(let i =0; i< data.length; i++)
    {
        //console.log(data[i].players)
        data[i].players.splice(1,1)                     //deleting anitem on 1 place 
        data[i].players.splice(1,0,"Mbappe")            //now added new item on that place
    }
    console.log(data)
}

replacePlayer(team);