import { getCharacters, getLikes } from './apiConfig';
import popup from './comments_pop';
import likes from './likesSubmit';

const render = async () => {
  const likesJson = await getLikes();
  const cards = document.querySelector('.cards');
  const characters = await getCharacters();
  characters.forEach(async (character, index) => {
    let likesTotal = 0;
    likesJson.forEach((likees) => {
      if (likees.item_id === index) {
        likesTotal = likees.likes;
      }
    });
    cards.innerHTML += ` <section class="card-section">
    <div class="card">
      <img src="${character.imageUrl}" class="card-img-top" alt="Character Image">
      <div class="card-body">
        <h5 class="card-title">${`${character.firstName} ${character.lastName}`}</h5>
        <p class="card-text">
          <span class="badge text-bg-secondary ms-2">${likesTotal}</span> Likes

          <button type="button" class="btn-like btn btn-outline-info btn-sm">
            🤍
          </button>
        </p>
        <div class="description-buttons justify-content-center">
          <a class="btn btn-primary btn-sm comments">Comments</a><br>
        </div>

      </div>
    </div>
  </section>`;
  });

  popup();
  likes();
};

export default render;