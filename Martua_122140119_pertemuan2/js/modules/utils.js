// Arrow function + template literals
export const createTaskElement = ({ id, text }) => {
  const li = document.createElement('li');
  li.innerHTML = `
    ${text}
    <span class="actions">
      <button onclick="editTask(${id})">Edit</button>
      <button onclick="deleteTask(${id})">Hapus</button>
    </span>
  `;
  return li;
};
