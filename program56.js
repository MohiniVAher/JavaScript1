//pgm 19
//Checking if All Emails in Nested Array are Valid

const users = [
    {id: 1, contacts: [{email: "alice@example.com"},{email: "bob@domain.com"}]},
    {id: 2, contacts: [{email: "charlie@site.com"},{email: "david@company.com"}]},
    {id: 3, contacts: [{email: "eve@domain"},{email: "frank@domain.com"}]},
]

function checkEmail(data)
{
    let Ret =[];
    for(let i = 0; i< data.length; i++)
    {
        for(let j =0; j<data[i].contacts.length ; j++)
        {
            ele = data[i].contacts[j].email;
            //let arr =ele.split("");
            if(ele.endsWith(".com") && ele.includes("@"))
            {
                Ret[j] = true;
            }
            else 
            {
                Ret[j]= false;
            }
        }
    }
    console.log(Ret);;
}
checkEmail(users)
