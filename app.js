const myLibrary = {
  books: [],
  addBook(title, author, pageCount){
  const book = new Book(title, author, pageCount);
  myLibrary.books.push(book);
  }
}

class Book{
  constructor(title, author, pageCount, hasRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
  }
}

const modal = {
  openBookButton: document.querySelector('.open-modal').addEventListener('click', ()=>{
  modal.addBookForm.classList.toggle('hidden');
  }),
  addBookForm: document.querySelector('.add-book-modal'),
  bookTitleInput:document.querySelector('#book-title'),
  bookAuthorInput:  document.querySelector('#book-author'),
  pageCountInput: document.querySelector('#page-count'),
  addBookBtn: document.querySelector('.add-book-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    myLibrary.addBook(modal.bookTitleInput.value, modal.bookAuthorInput.value, modal.pageCountInput.value);
    modal.clear();
    modal.addBookForm.classList.toggle('hidden');
  }),

  clear(){
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
    this.pageCountInput.value = '';
  }
}

