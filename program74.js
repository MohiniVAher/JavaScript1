//Pgm 17
//Find Courses Where All Lessons Are Completed by Alice

const platform =[
    {
        courseName: 'JavaScript Basics',
        modules: [
            {
                moduleName:'Introduction',
                lessons:[
                    {lessonName:'Variables',completedBy:['Alice', 'Bob']},
                    {lessonName:'Functions',completedBy:['Alice']}
                ],
            },
            {
                moduleName:'Advanced',
                lessons:[
                    {lessonName:'Async Programming',completedBy:['Bob']},
                    {lessonName:'Promises',completedBy:[]}
                ],
            },
            
        ]
    },
    {
        courseName: 'Python Basics',
        modules: [
            {
                moduleName:'Introduction',
                lessons:[
                    {lessonName:'Data Types', completedBy:['Charlie']},
                    {lessonName:'Loops',completedBy:['Alice']}
                ],
            },
            {
                moduleName:'Advanced',
                lessons:[
                    {lessonName:'Lambda Functions', completedBy:['Alice','Bob']},
                    {lessonName:'OOP',completedBy:[]}
                ],
            },
        ]
    },
];

const courses = platform.filter(function(courses)
{
    return courses.modules.every(function(module)
    {
        return module.lessons.every(function(lesson)
    {
        return lesson.completedBy.includes("Alice")
    })
    })
})

console.log(courses);