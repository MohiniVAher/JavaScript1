//pgm 9
//Count the number of Occurrences of a Specific Character in a UserName

function countChar(users)
{
    let Cnt =[];
    for(let i =0; i < users.length ; i++)
        {
            element = users[i].username
            let count =0;
            for(let j =0; j<element.length; j++)
            {
                if(element[j] == 'O')
                    count++;
            }
            Cnt[i] = count;
        }
    return Cnt;
}

const users =[
    { username: 'JOHN_DOE'},
    { username: 'ALICE_SMITH'},
    { username: 'BOB_JONES' }
]

let ret = countChar(users);
console.log(ret);

