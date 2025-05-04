from abc import ABC, abstractmethod

# Abstract Class
class LibraryItem(ABC):
    def __init__(self, id, title, year):
        self._id = id                  # Protected attribute
        self._title = title            # Protected attribute
        self._year = year              # Protected attribute

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        """Property decorator untuk mengambil judul item"""
        return self._title

    @property
    def id(self):
        """Property untuk id item (bisa juga dibuat setter jika perlu)"""
        return self._id


# Subclass 1
class Book(LibraryItem):
    def __init__(self, id, title, year, author):
        super().__init__(id, title, year)
        self.__author = author         # Private attribute

    def display_info(self):
        """Implementasi method abstract untuk Book"""
        print(f"[Book] ID: {self._id}, Title: {self._title}, Year: {self._year}, Author: {self.__author}")


# Subclass 2
class Magazine(LibraryItem):
    def __init__(self, id, title, year, issue):
        super().__init__(id, title, year)
        self.__issue = issue           # Private attribute

    def display_info(self):
        """Implementasi method abstract untuk Magazine"""
        print(f"[Magazine] ID: {self._id}, Title: {self._title}, Year: {self._year}, Issue: {self.__issue}")


# Class Library untuk mengelola koleksi item
class Library:
    def __init__(self):
        self.__items = []  # Private list untuk menyimpan item perpustakaan

    def add_item(self, item: LibraryItem):
        """Menambahkan item ke koleksi perpustakaan"""
        self.__items.append(item)

    def display_all_items(self):
        """Menampilkan semua item yang tersedia"""
        if not self.__items:
            print("Tidak ada item di perpustakaan.")
        for item in self.__items:
            item.display_info()

    def search_by_title(self, title):
        """Mencari item berdasarkan judul"""
        results = [item for item in self.__items if title.lower() in item.title.lower()]
        if results:
            for item in results:
                item.display_info()
        else:
            print(f"Tidak ditemukan item dengan judul mengandung '{title}'.")

    def search_by_id(self, id):
        """Mencari item berdasarkan ID"""
        for item in self.__items:
            if item.id == id:
                item.display_info()
                return
        print(f"Tidak ditemukan item dengan ID '{id}'.")


# Inisialisasi perpustakaan
library = Library()

# Tambah item
library.add_item(Book("B001", "Python Programming", 2020, "John Doe"))
library.add_item(Magazine("M001", "Science Weekly", 2021, "Issue 34"))

# Tampilkan semua item
print("== Daftar Item ==")
library.display_all_items()

# Cari berdasarkan judul
print("\n== Cari Judul 'Python' ==")
library.search_by_title("Python")

# Cari berdasarkan ID
print("\n== Cari ID 'M001' ==")
library.search_by_id("M001")
