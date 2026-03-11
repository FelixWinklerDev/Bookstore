function getBookTemplate(index) {
  return `
<div id="mother-div>
  <section>
    <h2>${books[index].name}</h2>
  </section>
  <section>
    <img src="./assets/icons/openclipart-vectors-book-2022461_640.png" alt="Buchkarikatur">
  </section>
  <section>
    <p>${books.price[index] + ' €'}</p>
      <section>
        <p>${books.likes[index]}</p>
        <button><img src="" alt=""></button>
      </section>
  </section>
  <section>
  <h4>Author:</h4>
  <h4>Veröffentlichungsjahr:</h4>
  <h4>Genre:</h4>
  </section>
  <section>
  <p>${books.author[index]}</p>
  <p>${books.publishedYear[index]}</p>
  <p>${books.genre[index]}</p>
  </section>
  <section>
      <input type="text">
      <button><img src="./assets/icons/openclipart-vectors-paper-plane-147602_640.png" alt="papierflieger"></button>
  </section>
</div>
    `;
}

function formatToCurrency(amount) {
  let formatted = amount.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}
