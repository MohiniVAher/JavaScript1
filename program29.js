//pgm 3
//Weather Data Logger

const temp = [25,28,22,30,27,24,29];

function avgTemp()
{
    sum= 0;
    for(i =0; i < temp.length; i++)
    {
        sum = sum + temp[i];
    }
    return avg = sum/temp.length;
}

function maxTemp()
{
    
    max=0;
    var maxDayIndex = 0
    for(i =0; i < temp.length; i++)
    {
        if(temp[i] > max)
        {
            max =temp[i];
            maxDayIndex= i;   
        }
    }
    return [max,maxDayIndex];
}   
const [max1,maxDayIndex1] = maxTemp();  
function findDay(maxDayIndex1)
{
    let day = ""
    switch(maxDayIndex1)
    {
        case 0 :
            day = "Sunday";
            break ;
        case 1 :
            day = "Monday";
            break;
        case 2 :
            day = "Tuesday";
            break;
        case 3 :
            day = "Wednesday";
            break; 
        case 4 :
            day = "Thursday";
            break;
        case 5 :
            day = "Friday";
            break;
        case 6 :
            day = "Satday";
            break; 
    } 
    return day;
}    
day1 = findDay(maxDayIndex1);   
for(i =0; i < temp.length; i++)
    {
        if(temp[i] == max1)
        {
            console.log("Maximum temp is on", day1)
        }
    } 
console.log("The average temp of the week is: ",avgTemp())
