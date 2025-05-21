//pgm 8
//Travel Planner
const destinations = [
    {city:'Paris',price:1200},
    {city:'Tokyo',price:1500},
    {city:'New York',price:1000},
];

function expensive(value)
{
    if(value > max)
    {
        max =value
    }
}
let max =0;
for(let i= 0; i < destinations.length; i++)
{
    expensive(destinations[i].price);
    if(destinations[i].price < 1300)
    {
        console.log("Destinations under 1300 is :");
        console.log(destinations[i].city);
    }
    if(destinations[i].price > 1400)
    {
        console.log("Expensive destination is: ",destinations[i].city)
        destinations[i].disc = destinations[i].price - (destinations[i].price/10);
    }
}
console.log(destinations);