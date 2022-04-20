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
}

addBtn.addEventListener('click', Book.addBook);
