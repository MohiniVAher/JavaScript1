//pgm 11
//Find all emails from an array of objects

const users = [
    {
        user: { name: "John", email: "john.doe@example.com"},
        settings : {active : true}
    },
    {
        user: { name: "Alice", email: "alice.smith@example.com"},
        settings : {active : false}
    }
]
let arr =[];
for(let i =0; i < users.length; i++)
{
    arr[i] = users[i].user.email
}
console.log(arr);

