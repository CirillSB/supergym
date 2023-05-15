export const initCoachersCards = () => {
  const image = document.querySelectorAll('.slider__image');
  const canvas = document.querySelector('.coaches');
  const cards = document.querySelectorAll('.slider__nested-list-item');
  const title = document.querySelectorAll('.slider__nested-list-item p');
  const cardsDescriptions = document.querySelectorAll('.coaches-card');

  const hideCardsDescriptions = () => {
    cardsDescriptions.forEach((e) => {
      e.style.visibility = 'hidden';
      e.style.opacity = '0';
    });
  };

  const showDescription = () => {
    for (let i = 0; i < cards.length; i++) {
      if (event.target === image[i] || event.target === title[i]) {
        hideCardsDescriptions();
        cardsDescriptions[i].style.visibility = 'visible';
        cardsDescriptions[i].style.opacity = '1';
        if (!title[i].classList.contains('hidden')) {
          title[i].classList.add('hidden');
        }
      }
    }
  };

  const hideDescription = () => {
    hideCardsDescriptions();
  };

  canvas.addEventListener('pointerdown', hideDescription);
  canvas.addEventListener('pointerdown', showDescription);
};
