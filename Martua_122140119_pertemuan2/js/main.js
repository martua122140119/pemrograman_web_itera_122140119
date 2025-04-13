import { renderTasks, taskManager } from './app.js';

// expose global untuk tombol edit dan delete
window.deleteTask = (id) => {
  const task = taskManager.getAll().find(t => t.id === id);
  if (task) {
    const konfirmasi = confirm(`Apakah ente yakin ingin menghapus tugas : "${task.text}"?`);
    if (konfirmasi) {
      taskManager.deleteTask(id);
      renderTasks();
      alert(`Yahhhh Tugas "${task.text}" dihapus!`);
    }
  }
};

window.editTask = (id) => {
  const task = taskManager.getAll().find(t => t.id === id);
  if (task) {
    const newText = prompt('Ente mau ganti jadi apa??', task.text);
    if (newText && newText.trim() !== '') {
      taskManager.editTask(id, newText.trim());
      renderTasks();
    }
  }
};

// Async init (Promise simulation)
const loadInitialTasks = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      renderTasks();
      resolve();
    }, 300);
  });
};

loadInitialTasks();
