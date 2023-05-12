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
  // displayBook(){
    
  //   // const i = this.books.length - 1;
  //     const TITLE = document.createElement('div')
  //     TITLE.classList.add('title')
  //     TITLE.textContent = this.books[i].title
  //     CARD.appendChild(TITLE)
  //     const AUTHOR = document.createElement('div')
  //     AUTHOR.classList.add('author')
  //     AUTHOR.textContent = this.books[i].author
  //     CARD.appendChild(AUTHOR)
  //     const PAGECOUNT = document.createElement('div')
  //     PAGECOUNT.classList.add('page-count')
  //     PAGECOUNT.textContent = this.books[i].pageCount
  //     CARD.appendChild(PAGECOUNT)
  //     const CLOSE = document.createElement('div')
  //     CLOSE.addEventListener('click', ()=>{
  //       const EL = document.querySelector(`#c${i}`);
  //       EL.remove();
  //       this.books[CARD.getAttribute('data-idx')] = null;
  //     });
  //     CLOSE.innerText = 'X'
  //     CLOSE.classList.add('close');
  //     CARD.appendChild(CLOSE);
  // },
  renderBooks(){
    MYLIBRARY.libraryContainer.innerHTML = '';
    this.books.forEach((book, index)=>{
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-idx', index);
      this.libraryContainer.appendChild(card);
      
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = book.title;
      card.appendChild(title);

     const author = document.createElement('div'); 
     author.classList.add('author');
     author.textContent = book.author;
     card.appendChild(author);

     const pageCount = document.createElement('div');
     pageCount.classList.add('pageCount');
     pageCount.textContent = book.pageCount;
     card.appendChild(pageCount);

     const close = document.createElement('div');
     close.innerText = 'X';
     close.classList.add('close');
     card.appendChild(close);

     close.addEventListener('click', (e)=>{
      console.log(e.target.parentElement)
      e.target.parentElement.remove();
      MYLIBRARY.splice(Number(`e.target.parentElement`))
     })
    })
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
    MODAL.clear();
    MODAL.addBookForm.classList.toggle('hidden');
    MYLIBRARY.renderBooks()
  }),

  clear(){
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
    this.pageCountInput.value = '';
  }
}