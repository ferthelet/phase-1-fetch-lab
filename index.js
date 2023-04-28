function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // js
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let bookCounter = 0;
  let sumPages = 0;
  let fifthBook = '';

  books.forEach(book => {
    const h2 = document.createElement('h2');
    bookCounter++;

    if (bookCounter === 5) {
      fifthBook = book.name;
    } 
    h2.innerHTML = book.name;
    main.appendChild(h2);
    sumPages += book.numberOfPages;
  });

  const summary = document.createElement('h2');
  summary.innerHTML = `Total books: ${bookCounter} <br> Total pages: ${sumPages} <br> 5th book: ${fifthBook}`;
  main.appendChild(summary);
}

document.addEventListener('DOMContentLoaded', function () {
  // was getting the forEach error since calling it wrongly
  fetchBooks();
});
