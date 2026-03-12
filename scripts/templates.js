function getBookTemplate(index, likeImage) {
  return `
    <div id="mother-div">
      <section>
        <h2>${books[index].name}</h2>
      </section>
      <div class="seperator"></div>
      <section class="showcase-flex">
        <img class="showcase-pic" src="./assets/icons/openclipart-vectors-book-2022461_640.png" alt="Buchkarikatur">
      </section>
      <div class="seperator"></div>
      <section class="price-like-flex">
        <p>${formatToCurrency(books[index].price)}</p>
        <section class="like-flex">
          <p>${books[index].likes}</p>
          <button class="like-btn" onclick="toggleLike(${index})">
        <img id="check-like${index}" class="like" src="${likeImage}" alt="">
    </button>
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
            <th>Veröffentlichungsjahr:</th>
            <td>${books[index].publishedYear}</td>
          </tr>
          <tr class="table-flex">
            <th>Genre:</th>
            <td>${books[index].genre}</td>
          </tr>
        </table>
      </section>
      <div class="seperator"></div>
      <section class="commentarys">
      <h3>Kommentare:</h3>
        <section class="comments-section">
        ${renderComments(index)}
        </section>
      </section>
      <section class="comment-flex">
        <input id="comment-input${index}" placeholder="Hier kommentieren..." type="text">
        <button id="submit-comment"  onclick="addComment(${index})"><img class="paper-plane"
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

function renderComments(bookIndex) {
  let allComments = books[bookIndex].comments;
  if (allComments.length == 0) {
    return '<p>Hier ist totenstille... Willst du es ändern?</p>';
  }
  commentRef = '';
  for (let i = 0; i < allComments.length; i++) {
    commentRef += `
        <div class="single-comment">
        <h3>${allComments[i].name}:</h3> 
        <p>${allComments[i].comment}</p>
      </div>
  `;
  }
  return commentRef;
}
