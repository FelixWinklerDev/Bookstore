function getBookTemplate(index) {
  return `
    <div id="mother-div">
      <section>
        <h2>${books[index].name}</h2>
      </section>
      <div class="seperator"></div>
      <section>
        <img class="showcase-pic" src="./assets/icons/openclipart-vectors-book-2022461_640.png" alt="Buchkarikatur">
      </section>
      <div class="seperator"></div>
      <section class="price-like-flex">
        <p>${books[index].price + ' €'}</p>
        <section class="like-flex">
          <p>${books[index].likes}</p>
          <button id="like-btn" onclick="liked"><img class="like" src="./assets/icons/favorite.png" alt=""></button>
        </section>
      </section>
      <div class="seperator"></div>
      <section>
        <table>
          <tr class="table-flex">
            <th>Author:</th>
            <td>${books[index].author}</td>
          </tr>
          <tr class="table-flex">
            <th>Veröffentluchungsjahr:</td>
            <td>${books[index].publishedYear}</td>
          </tr>
          <tr class="table-flex">
            <th>Genre:</td>
            <td>${books[index].genre}</td>
          </tr>
        </table>
      </section>
      <div class="seperator"></div>
      <section class="comment-flex">
        <input id="comment" type="text">
        <button id="submit-comment"><img class="paper-plane"
            src="./assets/icons/openclipart-vectors-paper-plane-147602_640.png" alt="papierflieger"></button>
      </section>
    </div>
    `;
}

function formatToCurrency(amount) {
  let formatted = amount.toFixed(2);
  let dotReplace = formatted.replace('.', ',');
  return dotReplace + '€';
}
