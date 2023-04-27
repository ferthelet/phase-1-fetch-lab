function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // js
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let counter = 0;
  const fifthBook = 5;

  books.forEach(book => {
    const h2 = document.createElement('h2');
    counter++;

    if (counter === fifthBook) {
      h2.innerHTML = '5th book ==> ';
    } 
    h2.innerHTML += book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // was getting the forEach error since calling it wrongly
  fetchBooks();
});
