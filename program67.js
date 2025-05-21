//Pgm 10 
//Duplicate the First Task

const tasks = [
    {project: "Website", tasks:["Design UI", "Develop Backend"]}
]

function duplicateTask(data)
{
    for(let i =0 ; i< data.length; i++)
    {
        data[i].tasks.copyWithin(1,0);
    }
    console.log(data);
}

duplicateTask(tasks);