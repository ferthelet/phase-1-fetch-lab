function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // js
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function fetchCharacterName(characters, searchCharacter) {
  const searchForCharacter = characters.find(
    character => character === 'https://anapioficeandfire.com/api/characters/' + searchCharacter
  );

  if (searchForCharacter) {
    return fetch(searchForCharacter)
      .then(response => response.json())
      .then(character => {
        console.log("in -> " + character.name);
        debugger;
        return character.name;
      });
  };
}

function renderBooks(books) {
  const main = document.querySelector('main');
  let bookCounter = 0;
  let sumPages = 0;
  let fifthBook = '';
  let characterName = '';
  let tempName = '';

  const searchCharacter = 1031;

  books.forEach(book => {
    const h2 = document.createElement('h2');
    bookCounter++;

    tempName = fetchCharacterName(book.characters, searchCharacter);

    if (tempName) {
      characterName = tempName;
    }

    // const searchForCharacter = book.characters.find(
    //   character => character === 'https://anapioficeandfire.com/api/characters/' + searchCharacter
    // );

    // if (searchForCharacter) {
    //   fetch(searchForCharacter)
    //     .then(response => response.json())
    //     .then(character => {
    //       characterName = character.name;
    //       console.log(characterName);
    //     });
    // };

    if (bookCounter === 5) {
      fifthBook = book.name;
    }

    h2.innerHTML = book.name + ' - ' + characterName;
    main.appendChild(h2);
    sumPages += book.numberOfPages;
  });

  console.log("hey - > " + characterName);
  debugger;

  const summary = document.createElement('h2');
  summary.innerHTML = `Total books: ${bookCounter} <br> Total pages: ${sumPages} <br> 5th book: ${fifthBook} <br> Character: ${characterName}`;
  main.appendChild(summary);
}

document.addEventListener('DOMContentLoaded', function () {
  // was getting the forEach error since calling it wrongly
  fetchBooks();
});
