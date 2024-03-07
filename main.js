let dialog = document.querySelector('dialog');
let closeButton = document.querySelector('.closebtn');
let addBooksButton = document.querySelector('.addbooks');
let inputTitle = document.querySelector('.title');
let inputAuthor = document.querySelector('.author');
let inputPages = document.querySelector('.pages');
let readStatus = document.querySelector('.readstatus');
let bookCard = document.querySelector('.bookcard');
let submitButton = document.querySelector('.submit');
let bookContainer = document.querySelector('.bookcontainer')


let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
};

function addBooksToLibrary(){
    
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read = readStatus.checked;


    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
readStatus.checked = false;
    let newBook = new Book(title, author, pages, read);
   
    myLibrary.push(newBook)
    displayBooks();
    

}



submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    displayBooks();
    addBooksToLibrary();
    
});

function displayBooks(){
    
    bookContainer.innerHTML = ''
  myLibrary.forEach(book => {
        console.log(book)
      
        let books = document.createElement('div');
        books.classList.add('bookcard');
        books.innerHTML = `
        <h2 class="booktitle">${book.title} </h2>
        <p class="bookauthor">${book.author} </p>
        <span class="bookpages">${book.pages} </span>
        <button class="readbtn" >${book.read ? "Read" : "Not Read Yet"} </button>
        <button class="removebtn" onclick="removeBookButton(event)">Remove Book</button>
        <label>Have you completed it?
        <input type="checkbox" >
    </label>
        `;
        bookContainer.appendChild(books)
    })
   
}

function removeBookButton(event){
   let removeBtn = event.target;

  removeBtn.parentElement.remove()
  
};
addBooksButton.addEventListener('click', () =>{
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
})
