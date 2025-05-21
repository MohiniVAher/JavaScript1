//Pgm 10
//Online Learning Platform

const platform =[
{
    courseName: 'React Development',
    modules: [
        {
            moduleName:'Basics',
            lessons:[
                {lessonName:'JSX',duration:20, completedBy:['Alice', 'Bob']},
                {lessonName:'components',duration:30, completedBy:['Alice']}
            ],
        },
        {
            moduleName:'Advanced',
            lessons:[
                {lessonName:'Hooks',duration:25, completedBy:['Bob']},
                {lessonName:'context API',duration:35, completedBy:[]}
            ],
        },
        
    ]
},
{courseName: 'Python for Data Science',
    modules: [
        {
            moduleName:'Introduction',
            lessons:[
                {lessonName:'Data Types',duration:15, completedBy:['Charlie']},
                {lessonName:'Loops',duration:20, completedBy:['Charlie','Alice']}
            ],
        },
    ]

},
]
for(const course of platform)
{
    for(const module of course.modules)
    {
        for(const lesson of module.lessons)
        {
            
        }
    }
}
console.log(platform)