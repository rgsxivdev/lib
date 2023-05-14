/* eslint-disable no-plusplus */
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
  renderBooks(){
    this.libraryContainer.innerHTML = '';
    this.books.forEach((book, index)=>{
      
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-idx', index);
    const idx = Number(card.getAttribute('data-idx'));
    this.libraryContainer.appendChild(card);
      
    const titleHdr = document.createElement('div');
    titleHdr.classList.add('title-hdr');
    titleHdr.textContent = 'Book  Title'
    card.appendChild(titleHdr);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = book.title;
    card.appendChild(title);

    const authorHdr = document.createElement('div');
    authorHdr.classList.add('author-hdr');
    authorHdr.textContent = 'Book Author'
    card.appendChild(authorHdr);

    const author = document.createElement('div'); 
    author.classList.add('author');
    author.textContent = book.author;
    card.appendChild(author);

    const pageCountHdr = document.createElement('div');
    pageCountHdr.classList.add('page-count-hdr');
    pageCountHdr.textContent = 'Page Count'
    card.appendChild(pageCountHdr);
     
    const pageCount = document.createElement('div');
    pageCount.classList.add('pageCount');
    pageCount.textContent = book.pageCount + ' pgs.';
    card.appendChild(pageCount);

    const close = document.createElement('div');
    close.innerText = 'X';
    close.classList.add('close');
    card.appendChild(close);

    close.addEventListener('click', (e)=>{
      e.target.parentElement.remove();
      MYLIBRARY.books.splice(idx,1)
      this.renderBooks();
     })
    })
  },
}

MYLIBRARY.libraryContainer.addEventListener('click', ()=>{
  MODAL.closeModal();
})


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
    if (MODAL.bookTitleInput.value && MODAL.bookAuthorInput.value && MODAL.pageCountInput.value){
      MYLIBRARY.addBook(MODAL.bookTitleInput.value, MODAL.bookAuthorInput.value, MODAL.pageCountInput.value);
      MODAL.clear();
      MODAL.addBookForm.classList.toggle('hidden');
      MYLIBRARY.renderBooks()
    } else {
      alert('Please input your book information.')
    }
  }),
  closeModal(){
    MODAL.addBookForm.classList.add('hidden');
  },
  clear(){
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
    this.pageCountInput.value = '';
  }
}