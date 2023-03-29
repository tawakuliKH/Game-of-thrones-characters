const popup = () => {
  const commenstBtn = document.querySelector('.comments');
  const popUp = document.querySelector('.popup');
  const close = document.querySelector('.close');
  commenstBtn.addEventListener('click', () => {
    popUp.style.display = 'block';
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