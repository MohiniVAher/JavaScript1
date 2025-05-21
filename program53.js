//pgm 16 
// Extracting city names from Addresses

const users = [
    {id: 1, profile: { name: "Alice", address: {street: "123 Main st", city: "new york", country: "USA"}}},
    {id: 2, profile: { name: "Bob", address: {street: "456 Eim st", city: "los angeles", country: "USA"}}},
    {id: 3, profile: { name: "Charlie", address: {street: "789 Oak st", city: "boston", country: "USA"}}}
];

function extractCityName(data)
{
    let city = [];
    for(let i =0; i< data.length; i++)
    {
        city[i]=data[i].profile.address.city;  
    }
    for(let i =0; i< city.length; i++)
    {
        
    }
    
    console.log(city);
}    
extractCityName(users);