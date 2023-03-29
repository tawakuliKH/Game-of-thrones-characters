import getCharacters from './apiConfig';

const render = async () => {
  const cards = document.querySelector('.cards');
  const characters = await getCharacters();
  characters.forEach((character) => {
    cards.innerHTML += ` <section class="card-section">
    <div class="card">
      <img src="${character.imageUrl}" class="card-img-top" alt="Character Image">
      <div class="card-body">
        <h5 class="card-title">${`${character.firstName} ${character.lastName}`}</h5>
        <p class="card-text">
          <span class="badge text-bg-secondary ms-2">4</span> Likes

          <button type="button" class="btn btn-outline-info btn-sm">
            🤍
          </button>
        </p>
        <div class="description-buttons justify-content-center">
          <a href="#" class="btn btn-primary btn-sm comments">comments</a><br>
          <a href="#" class="btn btn-primary btn-sm">Reservations</a>
        </div>

      </div>
    </div>
  </section>`;
  });
};

export default render;