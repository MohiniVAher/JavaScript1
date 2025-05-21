//pgm 17
//Remmoving special Characters from Nested  data 

const users = [
    {id:1, profile: {name:"Alice",notes: "Hello This is a note#."}},
    {id:2, profile: {name:"Bob",notes: "Important$ Information."}},
    {id:3, profile: {name:"Charlie",notes: "Test note! Check."}}
]

function removSpeChar(data)
{
    for(let i =0; i< data.length; i++)
    {
        data[i].profile.notes =data[i].profile.notes.replace(/[^a-zA-Z0-9 ]/g,'');  
    }
    console.log(data);
}    
removSpeChar(users);