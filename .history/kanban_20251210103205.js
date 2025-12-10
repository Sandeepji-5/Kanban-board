const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress')
const done = document.querySelector('#done');
const tasks = document.querySelectorAll('.task');
let draggedElement = null;
const columns = [todo, progress, done];

tasks.forEach(task => {
    task.addEventListener("drag", () => {
        draggedElement = task;
    })
})

// Modal related Logic
const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal .bg');
const addTaskbtn = document.querySelector('.add-task-btn')

// opening the model to add a task

toggleModalButton.addEventListener('click', () => {
    console.log("clicked");
    modal.classList.toggle('active');

});

// closing the modal when clicking outside the modal content
modalBg.addEventListener('click', () => {
    modal.classList.remove('active');
})

// Adding a task to the TODO column
const titleInput = document.querySelector('.center input');
const descInput = document.querySelector('.center textarea');
addTaskbtn.addEventListener('click', () => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("draggable", "true");

    // Title
    const h3 = document.createElement("h3");
    h3.textContent = titleInput.value;

    // Description
    const p = document.createElement("p");
    p.textContent = descInput.value;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Append children
    task.appendChild(h3);
    task.appendChild(p);
    task.appendChild(deleteBtn);

    // Add to TODO column
    todo.appendChild(task);
    task.addEventListener('drag', () => {
        draggedElement = task;
    })
    columns.forEach(col => {
        const tasks = col.querySelectorAll('.task');
        const count = col.querySelector('.right');
        count.textContent = tasks.length;
    })

    // Clear inputs and close modal
    titleInput.value = "";
    descInput.value = "";
})


// Drag and Drop Logic for Columns
function addDragEventsOnColumn(column) {

    // console.log("column", column);
    // Drag enter event
    column.addEventListener('dragenter', (e) => {
        e.preventDefault();
        column.classList.add('hover-over');
    });
// Drag leave event
    column.addEventListener('dragleave', (e) => {
        e.preventDefault();
        column.classList.remove('hover-over');
    })
// Drag over event
    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
 // Drop event
    column.addEventListener('drop', (e) => {
        column.appendChild(draggedElement)
        column.classList.remove('hover-over')
        e.preventDefault();
        columns.forEach(col => {
            const tasks = col.querySelectorAll('.task');
            const count = col.querySelector('.right');
            count.textContent = tasks.length;
        })
    })
}

// Adding drag and drop events on each column function call
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)



// delete the task.........


