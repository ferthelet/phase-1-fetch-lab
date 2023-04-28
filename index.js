function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // js
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function fetchCharacterName(characters, searchCharacter, bookName) {
  const main = document.querySelector('main');
  const searchForCharacter = characters.find(
    character => character === 'https://anapioficeandfire.com/api/characters/' + searchCharacter
  );

  if (searchForCharacter) {
    fetch(searchForCharacter)
      .then(response => response.json())
      .then(character => {
        const h2 = document.createElement('h2');
        h2.innerHTML = `Book name: ${bookName}, character id ${searchCharacter}, name ${character.name}`;
        main.appendChild(h2);
      });
  };
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let bookCounter = 0;
  let sumPages = 0;
  let fifthBook = '';
  let characterName = '';

  const searchCharacter = 1031;

  books.forEach(book => {
    const h2 = document.createElement('h2');
    bookCounter++;

    fetchCharacterName(book.characters, searchCharacter, book.name);

    // if (tempName) {
    //   characterName = tempName;
    // }

    if (bookCounter === 5) {
      fifthBook = book.name;
    }

    h2.innerHTML = bookCounter + ') ' + book.name;
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
