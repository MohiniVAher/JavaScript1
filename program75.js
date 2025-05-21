//Pgm 18
//List All Employees Who Have Completed All Their Lessons

const employeeCourses = [
    {
        employee: "John",
        courses:[
            {
                courseName: "Frontend Development",
                lessons: [
                    { lessonName: "HTML Basics", completed: true},
                    { lessonName: "CSS Layout", completed: true},
                    { lessonName: "JavaScript Basics", completed: false}
                ]
            },
            {
                courseName: "Backend Development",
                lessons: [
                    { lessonName: "Node.js Basics", completed: true},
                    { lessonName: "Express.js", completed: true},
                ]
            }
        ]
    },
    {
        employee: "Jane",
        courses:[
            {
                courseName: "Frontend Development",
                lessons: [
                    { lessonName: "HTML Basics", completed: true},
                    { lessonName: "CSS Layout", completed: true},
                    { lessonName: "JavaScript Basics", completed: true}
                ]
            }
        ]
    }
]

let students = employeeCourses.filter(function(courses)
{
   return courses.lessons.every(function(lesson)
{
    return lesson.completed;
}) 
})

console.log(students);