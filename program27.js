//pgm 1
//Student Grading System

const students= [
    {name: 'Alice', marks :85},
    {name: 'Bob', marks :65},
    {name: 'Charlie', marks :40}
]

function findGrade()
{
    for(let i=0; i< students.length; i++)
    {
        if(students[i].marks >= 80)
        {
            students[i].grade ="A";
            console.log("Name: ",students[i].name)
            console.log("Grade: ",students[i].grade)
        }
        else if((students[i].marks >= 60) &&  (students[i].marks <= 79))
        {
            students[i].grade ="B";
            console.log("Name: ",students[i].name)
            console.log("Grade: ",students[i].grade = "B")
        }
        else if((students[i].marks >= 40) &&  (students[i].marks <= 59))
        {
            students[i].grade ="C";
            console.log("Name: ",students[i].name)
            console.log("Grade: ",students[i].grade = "C")
        }
        else if(students[i].marks < 40)
        {
            students[i].grade ="F";
            console.log("Name: ",students[i].name)
            console.log("Grade: ",students[i].grade = "D")
        }
    }
}
findGrade()

