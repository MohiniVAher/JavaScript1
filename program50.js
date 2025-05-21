// pgm 13
// Extract domain names from URLs in nested Array

const data =[
    {info: { url: "https://www.google.com"}},
    {info: { url: "https://www.example.com"}}
]
function returnArr(data)
{
    let arr = [];
    for(let i =0; i< data.length; i++)
    {
        arr[i] = data[i].info.url.substring(12);
    }
    return arr;
}
for(let i =0; i< data.length; i++)
{
    let arr = [];
    arr[i] = data[i].info.url;
}
console.log(returnArr(data));
