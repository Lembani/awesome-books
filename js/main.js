const { bookForm } = document.forms;
const { titleInput } = bookForm;
const { authorInput } = bookForm;
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

    if (titleInput.value === '' || authorInput.value === '') {
      return false;
    }

    this.book.title = titleInput.value;
    this.book.author = authorInput.value;
    this.book.id = this.books.length + 1;
    this.books.push(this.book);
    localStorage.setItem('books', JSON.stringify(this.books));
    titleInput.value = '';
    authorInput.value = '';
    this.showBooks();
    return true;
  }

  static showBooks = () => {
    booksContainer.innerHTML = '';
    this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
    this.localStorageBooks.forEach((book) => {
      const bookTemplate = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button type="button" class="remove" id="${book.id}">Remove</button>
            <hr>
        `;
      booksContainer.innerHTML += bookTemplate;
    });
    return this.booksContainer;
  }
}

addBtn.addEventListener('click', Book.addBook);

document.addEventListener('DOMContentLoaded', Book.showBooks);
