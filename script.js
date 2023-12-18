const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const sortable = new Sortable(taskList, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    onEnd: updateTaskOrder
});
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newTaskItem = document.createElement('li');
        newTaskItem.innerText = taskText;
        newTaskItem.addEventListener('click', function () {
            newTaskItem.classList.toggle('completed');
        });
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.addEventListener('click', function () {
            taskList.removeChild(newTaskItem);
            updateTaskOrder();
        });
        newTaskItem.appendChild(removeButton);
        taskList.appendChild(newTaskItem);
        updateTaskOrder();
        newTaskInput.value = '';
    }
}

function updateTaskOrder() {
    const tasks = taskList.getElementsByTagName('li');
    Array.from(tasks).forEach((task, index) => {
        task.dataset.order = index + 1;
    });
}
