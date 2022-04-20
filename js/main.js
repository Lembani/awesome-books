const { bookForm } = document.forms;
const { title } = bookForm;
const { author } = bookForm;
const addBtn = document.getElementById('addBtn');
const booksContainer = document.querySelector('.booksContainer');

class Book {
  static books = [];

  localStorageBooks;

  static addBook = (e) => {
    e.preventDefault();
    this.books = JSON.parse(localStorage.getItem('books')) !== null ? (this.books = JSON.parse(localStorage.getItem('books'))) : [];

    this.book = {
      id: 0,
      title: '',
      author: '',
    };

    if (title.value === '' || author.value === '') {
      return false;
    }

    this.book.title = title.value;
    this.book.author = author.value;
    this.book.id = this.books.length + 1;
    this.books.push(this.book);
    localStorage.setItem('books', JSON.stringify(this.books));
    title.value = '';
    author.value = '';
    this.showBooks();
    return true;
  }

  static showBooks = () => {
    booksContainer.innerHTML = '';
    this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
    this.localStorageBooks.forEach((book) => {
      const bookTemplate = `
            <div class="book-item">
              <p>"${book.title}" by ${book.author}</p>
              <button type="button" class="remove" id="${book.id}">Remove</button>
            </div>
        `;
      booksContainer.innerHTML += bookTemplate;
    });
    return this.booksContainer;
  }

  static deleteBook = (e) => {
    if (e.target.classList.contains('remove')) {
      const id = e.target.attributes.id.value;
      this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
      const filteredBooks = this.localStorageBooks.filter((book) => book.id !== +id);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
      this.showBooks();
    }
  }
}

addBtn.addEventListener('click', Book.addBook);
booksContainer.addEventListener('click', Book.deleteBook);

document.addEventListener('DOMContentLoaded', Book.showBooks);
