//pgm 7
//Concatenate All Usernames from an Array of Objects

function concatString(users)
{
    let result ="";
    for(let i =0; i < users.length; i++)
    {
        result =result.concat(users[i].username);
    }
    return result
}

function concatStringWithSeparator(users)
{
    let arr= [];
    for(let i =0; i < users.length; i++)
    {
        arr[i] =users[i].username;
    }
    return arr.join(",");
}


const users =[
    {id:1, username: "john_doe"},
    {id:2, username:"alice_smith"},
    {id:3, username: "bob_jones"}
]

let ret = concatString(users);
console.log(ret);

let ret1 = concatStringWithSeparator(users);
console.log(ret1);