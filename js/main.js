const { bookForm } = document.forms;
const { title } = bookForm;
const { author } = bookForm;
const addBtn = document.getElementById('addBtn');
// const booksContainer = document.querySelector('.booksContainer');

let books = [];
books = JSON.parse(localStorage.getItem('books')) !== null ? (books = JSON.parse(localStorage.getItem('books'))) : [];

const addBook = () => {
  books = JSON.parse(localStorage.getItem('books')) !== null ? (books = JSON.parse(localStorage.getItem('books'))) : [];

  const book = {
    id: 0,
    title: '',
    author: '',
  };
  book.title = title.value;
  book.author = author.value;
  book.id = books.length + 1;
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  title.value = '';
  author.value = '';
  // call showBooks() here..
};

addBtn.addEventListener('click', addBook);
