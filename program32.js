//pgm 6
//Class Attendance

const attendance =[
    { name:'Alice',present :true},
    { name:'Bob',present :false},
    { name: 'Charlie',present :true}
]

function isPresent()
{
    let iCnt =0;
    console.log("absent Students are: ")
    for(let i =0; i< attendance.length; i++)
    {
    if(attendance[i].present == true)
    {
        iCnt++;
    }
    else
    {
        console.log(attendance[i].name);
    }    
    }
    return iCnt;
}
iCount =isPresent();
console.log("Number of students present are:",iCount);