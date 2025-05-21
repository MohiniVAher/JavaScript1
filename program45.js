//pgm 8
//Convert all usernames to Uppercase

function returnArray(users)
{
    let arr =[];
    for(let i =0; i < users.length; i++)
    {
        arr[i] =users[i].username;
        arr[i] =arr[i].toUpperCase();
    }
    return arr;
}

const users =[
    {id:1, username: "john_doe"},
    {id:2, username:"alice_smith"},
    {id:3, username: "bob_jones"}
]

let res = returnArray(users);
console.log(res);

