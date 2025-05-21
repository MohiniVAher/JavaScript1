//pgm 12
// Count occurrences of a word in Nested text data

const posts = [
    {text: "hello world"},
    {text: "hello again"},
    {text: "goodbye"},
]

function countChar(posts)
{
    let cnt=0;
    for(let i =0; i < posts.length ; i++)
        {
            element = posts[i];
            if(element.text.includes("hello")== true)
            {
                cnt++;
            }
        }
    return cnt;
}
console.log(countChar(posts))
