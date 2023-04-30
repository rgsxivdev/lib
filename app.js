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
  displayBook(){
    
    // const i = this.books.length - 1;
    //   const CARD = document.createElement('div') 
    //   CARD.classList.add('card')
    //   CARD.setAttribute('id', `c${i}`)
    //    CARD.setAttribute('data-idx', i)
    //   this.libraryContainer.appendChild(CARD)
    //   const TITLE = document.createElement('div')
    //   TITLE.classList.add('title')
    //   TITLE.textContent = this.books[i].title
    //   CARD.appendChild(TITLE)
    //   const AUTHOR = document.createElement('div')
    //   AUTHOR.classList.add('author')
    //   AUTHOR.textContent = this.books[i].author
    //   CARD.appendChild(AUTHOR)
    //   const PAGECOUNT = document.createElement('div')
    //   PAGECOUNT.classList.add('page-count')
    //   PAGECOUNT.textContent = this.books[i].pageCount
    //   CARD.appendChild(PAGECOUNT)
    //   const CLOSE = document.createElement('div')
    //   CLOSE.addEventListener('click', ()=>{
    //     const EL = document.querySelector(`#c${i}`);
    //     EL.remove();
    //     this.books[CARD.getAttribute('data-idx')] = null;
    //   });
    //   CLOSE.innerText = 'X'
    //   CLOSE.classList.add('close');
    //   CARD.appendChild(CLOSE);
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
    addBook();
    renderBooks();
    MODAL.clear();
    MODAL.addBookForm.classList.toggle('hidden');
  }),

  clear(){
    this.bookTitleInput.value = '';
    this.bookAuthorInput.value = '';
    this.pageCountInput.value = '';
  }
}

function addBook() {
  MYLIBRARY.addBook(MODAL.bookTitleInput.value, MODAL.bookAuthorInput.value, MODAL.pageCountInput.value);
  
}

function renderBooks(){
  MYLIBRARY.libraryContainer.innerHTML = '';
  MYLIBRARY.books.forEach((book, index)=>{
      const CARD = document.createElement('div') 
      CARD.classList.add('card')
      CARD.setAttribute('id', `i-${index}`)
      MYLIBRARY.libraryContainer.appendChild(CARD)
      const TITLE = document.createElement('div')
      TITLE.classList.add('title')
      TITLE.textContent = book.title
      CARD.appendChild(TITLE)
      const AUTHOR = document.createElement('div')
      AUTHOR.classList.add('MYLIBRARY')
      AUTHOR.textContent = book.author
      CARD.appendChild(AUTHOR)
      const PAGECOUNT = document.createElement('div')
      PAGECOUNT.classList.add('page-count')
      PAGECOUNT.textContent = `${book.pageCount  } pg.`;
      CARD.appendChild(PAGECOUNT)
      const CLOSE = document.createElement('div')
      CLOSE.addEventListener('click', ()=>{
        const EL = document.querySelector(`#i-${index}`);
        EL.remove();
        MYLIBRARY.books.splice(index, 1);
        renderBooks();
        console.log(MYLIBRARY.books)
      });
      CLOSE.innerText = 'X'
      CLOSE.classList.add('close');
      CARD.appendChild(CLOSE);
})
  }

// Add Book Button
// Push form info into array
// add index to dom element
// Render the books

// Delete book
// Remove info from array using index
// Render books

