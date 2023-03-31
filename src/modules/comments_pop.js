import { getSpecificCharacter } from './apiConfig.js';
import { commentShow } from './commentSubmit.js';

const popup = () => {
  const commenstBtn = document.querySelectorAll('.comments');
  const popUp = document.querySelector('.popup');
  const close = document.querySelector('.close');
  const popTitle = document.querySelector('.pop-title');
  const popImage = document.querySelector('.image-top');
  const charTitle = document.querySelector('.character-title');
  const charFamily = document.querySelector('.character-family');
  const charID = document.querySelector('.character-id');

  commenstBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const character = await getSpecificCharacter(index);
      popTitle.innerHTML = `${character.fullName}`;
      popImage.src = character.imageUrl;
      charTitle.innerHTML = `Character Title: ${character.title}`;
      charFamily.innerHTML = `Character Family: ${character.family}`;
      charID.value = index;
      commentShow(index);
      popUp.style.display = 'block';
    });
  });

  close.addEventListener('click', () => {
    popUp.style.display = 'none';
  });

  window.onclick = (event) => {
    if (event.target === popUp) {
      popUp.style.display = 'none';
    }
  };
};

export default popup;