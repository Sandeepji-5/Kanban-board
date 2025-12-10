const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress')
const done = document.querySelector('#done');
const tasks = document.querySelectorAll('.task');
let draggedElement = null;

tasks.forEach(tasks => {
    tasks.addEventListener("drag", () => {
        draggedElement = tasks;
        console.log("dragge ele", draggedElement);
    })
})

// progress.addEventListener('dragenter',(e)=>{
//     progress.classList.add('hover-over');
// })


// progress.addEventListener('dragleave', (e)=>{
//     progress.classList.remove('hover-over');
// })


console.log(todo)

// Modal related Logic
const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal .bg');
const addTaskbtn = document.querySelector('.add-task-btn')

toggleModalButton.addEventListener('click', () => {
    console.log("clicked");
    modal.classList.toggle('active');

});

modalBg.addEventListener('click', () => {
    modal.classList.remove('active');
})


addTaskbtn.addEventListener('click', () => {

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");

    // Title
    const h3 = document.createElement("h3");
    h3.textContent = "Task-2";

    // Description
    const p = document.createElement("p");
    p.textContent = " Mai AAPka das hoo";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Append children
    task.appendChild(h3);
    task.appendChild(p);
    task.appendChild(deleteBtn)

    todo.appendChild(task);
    task.addEventListener('drag',()=>{
        draggedElement = task;
    })

})





function addDragEventsOnColumn(column) {

    console.log("column",column)

    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over');
    });

    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over');
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener('drop', (e) => {

        column.appendChild(draggedElement)
        console.log("draggedElement", draggedElement, column);
        column.classList.remove('hover-over')
        e.preventDefault();
    })

}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)





