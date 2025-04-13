export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(task) {
    this.tasks.push({ id: Date.now(), text: task });
    this.save();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.save();
  }

  editTask(id, newText) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.text = newText;
    this.save();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getAll() {
    return this.tasks;
  }
}
