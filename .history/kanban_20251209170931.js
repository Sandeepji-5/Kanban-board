const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress')
const done = document.querySelector('#done');
const tasks = document.querySelectorAll('.task');
let draggedElement = null;

tasks.forEach(task => {
    task.addEventListener("drag", () => {
        
        draggedElement = task;
    })
})

// progress.addEventListener('dragenter',(e)=>{
//     progress.classList.add('hover-over');
// })


// progress.addEventListener('dragleave', (e)=>{
//     progress.classList.remove('hover-over');
// })


function addDragEventsOnColumn(column)
{
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





// Modal related Logic
const toggleModalButton = document.querySelector('#toggle-modal');
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal .bg');
const addTaskbtn = document.querySelector('.add-task-btn')



toggleModalButton.addEventListener('click', () => {
    console.log("clicked");
    modal.style.display = 'flex';
  
});

modalBg.addEventListener('click',()=>{
    modal.style.display = 'none';
}   )   


addTaskbtn.addEventListener('click', () => {

  const task  = document.createElement('div');
  task.classList.add('task');
   


})