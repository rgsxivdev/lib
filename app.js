class Book{
  constructor(title, author, pageCount, hasRead){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasRead = hasRead;
  }
}

const MYLIBRARY = {
  books: [],
  libraryContainer: document.querySelector('.card-container'),
  addBook(title, author, pageCount){
  const BOOK = new Book(title, author, pageCount);
  MYLIBRARY.books.push(BOOK);
  },
  displayBook(){
    for (let i = 0; i < this.books.length; i++){
      const CARD = document.createElement('div') 
      CARD.classList.add('card')
      this.libraryContainer.appendChild(CARD)
      const TITLE = document.createElement('div')
      TITLE.classList.add('title')
      TITLE.textContent = this.books[i].title
      CARD.appendChild(TITLE)
      const AUTHOR = document.createElement('div')
      AUTHOR.classList.add('author')
      AUTHOR.textContent = this.books[i].author
      CARD.appendChild(AUTHOR)
      const PAGECOUNT = document.createElement('div')
      PAGECOUNT.classList.add('page-count')
      PAGECOUNT.textContent = this.books[i].pageCount
      CARD.appendChild(PAGECOUNT)
    }
  },
}

const MODAL = {
  openBookButton: document.querySelector('.open-modal').addEventListener('click', ()=>{
  MODAL.addBookForm.classList.toggle('hidden');
  }),
  addBookForm: document.querySelector('.add-book-modal'),
  bookTitleInput:document.querySelector('#book-title'),
  bookAuthorInput:  document.querySelector('#book-author'),
  pageCountInput: document.querySelector('#page-count'),
  addBookBtn: document.querySelector('.add-book-btn').
  addEventListener('click', (e)=>{
    e.preventDefault();
    MYLIBRARY.addBook(MODAL.bookTitleInput.value, MODAL.bookAuthorInput.value, MODAL.pageCountInput.value);
    MYLIBRARY.displayBook();
    MODAL.clear();
    MODAL.addBookForm.classList.toggle('hidden');
  }),

  clear(){
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
    this.pageCountInput.value = '';
  }
}
