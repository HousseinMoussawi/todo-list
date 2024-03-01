const task = document.getElementById("task")
const add = document.getElementById("add")
const tasks = document.getElementById("tasks")
const logout = document.getElementById("logout")

let deletebuttons = []

let taskstable = []
taskstable=JSON.parse( localStorage.getItem("tasks"));


function taskCardGenerator(task){
    return `<tr>
            <td class="txt-primary">${task.innerHTML}</td>
            <td>
            <input type="checkbox" /></td>
            <td><button class="delete-now delete">delete</button></td>
            </tr>`;
        
}

function taskLoader(){
    tasks.innerHTML= "";
    for(let i = 0; i<taskstable.length; i++){
        const task = taskstable[i];
        const taskcard = taskCardGenerator(task);
        tasks.innerHTML += taskcard;
    }

    deletebuttons = document.querySelectorAll(".delete-now")

for(let i = 0; i<deletebuttons.length; i++){
    deletebuttons[i].addEventListener("click", function(){
        taskstable.splice(i, 1);
        localStorage.setItem("tasks", JSON.stringify(taskstable));
        taskLoader();
    })
}
}

taskLoader();

add.addEventListener("click", function(){
    taskstable.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(taskstable));
    taskLoader();
    task.value = "";
}

)

logout.addEventListener("click", function(){
    window.location = "../index.html";
}
)