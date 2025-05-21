//pgm 6
//Extract usernames from an Array Of Objects

function extractProperty(users)
{
    let arr= [];
    for(let i =0; i < users.length; i++)
    {
        arr[i] =users[i].username;
    }
    return arr;
}

const users =[
    {id:1, username: "john_doe"},
    {id:2, username:"alice_smith"},
    {id:3, username: "bob_jones"}
]

let ret = extractProperty(users);
console.log(ret);