// Memuat data dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(tambahKeDOM);
});

// Menangkap event klik tombol tambah
document.getElementById("addButton").addEventListener("click", tambahItem);

// Fungsi menambahkan item baru
function tambahItem() {
    const input = document.getElementById("todoInput");
    const teks = input.value.trim();

    if (teks === "") {
        alert("Masukkan item yang valid!");
        return;
    }

    const todo = { teks, selesai: false };
    tambahKeDOM(todo);
    simpanKeLocalStorage(todo);

    // Kosongkan input setelah menambah item
    input.value = "";
}

// Fungsi menambahkan item ke DOM
function tambahKeDOM(todo) {
    const li = document.createElement("li");
    li.textContent = todo.teks;

    // Jika item sudah selesai, beri gaya coret
    if (todo.selesai) {
        li.style.textDecoration = "line-through";
    }

    // Tombol Menandai Selesai
    const selesaiBtn = document.createElement("button");
    selesaiBtn.textContent = "Selesai";
    selesaiBtn.addEventListener("click", () => {
        todo.selesai = !todo.selesai; // Toggle status selesai
        li.style.textDecoration = todo.selesai ? "line-through" : "none";
        perbaruiLocalStorage();
    });

    // Tombol Hapus
    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";
    hapusBtn.addEventListener("click", () => {
        li.remove(); // Hapus dari DOM
        hapusDariLocalStorage(todo);
    });

    li.appendChild(selesaiBtn);
    li.appendChild(hapusBtn);
    document.getElementById("todoList").appendChild(li);
}

// Fungsi menyimpan item baru ke localStorage
function simpanKeLocalStorage(todo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Fungsi memperbarui item di localStorage setelah perubahan
function perbaruiLocalStorage() {
    const items = Array.from(document.querySelectorAll("#todoList li")).map(li => {
        return {
            teks: li.firstChild.textContent,
            selesai: li.style.textDecoration === "line-through"
        };
    });
    localStorage.setItem("todos", JSON.stringify(items));
}

// Fungsi menghapus item dari localStorage
function hapusDariLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(item => item.teks !== todo.teks);
    localStorage.setItem("todos", JSON.stringify(todos));
}
