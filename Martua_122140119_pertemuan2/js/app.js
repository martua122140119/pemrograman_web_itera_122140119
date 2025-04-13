import { TaskManager } from './modules/data.js';
import { createTaskElement } from './modules/utils.js';

export const taskManager = new TaskManager();
const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

export const renderTasks = () => {
  taskList.innerHTML = '';
  taskManager.getAll().forEach(task => {
    taskList.appendChild(createTaskElement(task));
  });
};

// Event submit tambah task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text) {
    taskManager.addTask(text);
    taskInput.value = '';
    renderTasks();
    alert(`GOOD DERRR Tugas "${text}" berhasil ditambahkan!`);
  
  }
});
