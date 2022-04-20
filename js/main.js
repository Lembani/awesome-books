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

let storageBooks;
const getLocalData = () => {
  storageBooks = JSON.parse(localStorage.getItem('books'));
};

const showBooks = () => {
  booksContainer.innerHTML = '';
  getLocalData();
  storageBooks.forEach((book) => {
    const bookTemplate = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button type="button" class="remove" id="${book.id}">Remove</button>
            <hr>
        `;
    booksContainer.innerHTML += bookTemplate;
  });
};

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const id = e.target.attributes.id.value;
    const filteredBooks = storageBooks.filter((book) => book.id !== +id);
    const localBooks = localStorage.setItem(
      'books',
      JSON.stringify(filteredBooks)
    );
    showBooks();
  }
});

document.addEventListener('DOMContentLoaded', showBooks);