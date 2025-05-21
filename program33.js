//Monthly Sales Tracker
//pgm 7

const sale = [1500,2000,2500,1800,2200,3000,2800,2100,2700,2300,2600,3100];

function totalSale1(value)
{
    totalSale = totalSale + value; 
}
function findMonth(i,value)
{
    if(value > max)
    {
        max=value;
    }
    switch(i)
    {
        case 0 :
            month = "january";
            break ;
        case 1 :
            month = "February";
            break;
        case 2 :
            month = "March";
            break;
        case 3 :
            month = "April";
            break; 
        case 4 :
            month = "May";
            break;
        case 5 :
            month = "June";
            break;
        case 6 :
            month = "July";
            break; 
        case 7 :
            month = "August";
            break;
        case 8 :
            month = "September";
            break;
        case 9 :
            month = "October";
            break; 
        case 10 :
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    } 
}
let max =0;
let totalSale =0;
let month ="";
for(let i =0;i < sale.length; i++)
{
    totalSale1(sale[i]);
    findMonth(i,sale[i]);
}
console.log(totalSale);
console.log("Month with high sale is",month,max)



















// function findDayTotalSale(sales)
// {
//     let totalSale =0;  
//     let month = "";
//     for(let i=0; i<sales.length;i++)
//     {     
//     totalSale = totalSale + sales[i];       
//     switch(i)
//     {
//         case 0 :
//             month = "january";
//             break ;
//         case 1 :
//             month = "February";
//             break;
//         case 2 :
//             month = "March";
//             break;
//         case 3 :
//             month = "April";
//             break; 
//         case 4 :
//             month = "May";
//             break;
//         case 5 :
//             month = "June";
//             break;
//         case 6 :
//             month = "July";
//             break; 
//         case 7 :
//             month = "August";
//             break;
//         case 8 :
//             month = "September";
//             break;
//         case 9 :
//             month = "October";
//             break; 
//         case 10 :
//             month = "November";
//             break;
//         case 11:
//             month = "December";
//             break;
//     } 
//     }
//     return [month,totalSale];
// }    
// const [month1,totalSale1] = findDayTotalSale(sale);
// console.log("The average temp of the week is: ",avgTemp())
