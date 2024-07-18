document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">X</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.tagName === 'SPAN') {
            const li = event.target.parentElement;
            li.classList.toggle('completed');
        }
    }
});
