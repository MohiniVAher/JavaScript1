//pgm 20
//Handling Phone Numbers in Nested Contact Details

const users = [
    {id:1, contact: { phone: "(123) 456-7890"}},
    {id:2, contact: { phone: "123 456-7890"}},
    {id:3, contact: { phone: "123-456-7890"}},
]

function removSpeChar(data)
{
    for(let i =0; i< data.length; i++)
    {
        data[i].contact.phone =data[i].contact.phone.replace(/[^0-9]/g,'');  
    }
    console.log(data);
}    
removSpeChar(users);