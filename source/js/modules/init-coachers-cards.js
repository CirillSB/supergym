export const initCoachersCards = () => {
  const image = document.querySelectorAll('.slider__image');
  const gallery = document.querySelector('.slider__inner');
  const canvas = document.querySelector('body');
  const cards = document.querySelectorAll('.slider__item');
  const title = document.querySelectorAll('.slider__item p');
  const cardsDescriptions = document.querySelectorAll('.coaches-card');

  const hideCardsDescriptions = () => {
    if (window.matchMedia('(max-width: 1199px)').matches) {
      cardsDescriptions.forEach((e) => {
        e.style.visibility = 'hidden';
        e.style.opacity = '0';
      });
      title.forEach((e) => {
        e.classList.remove('hidden');
      });
    }
  };

  const showDescription = () => {
    // if (window.matchMedia('(max-width: 1199px)').matches) {
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
    // }
  };

  const hideDescription = () => {
    hideCardsDescriptions();
  };

  // for (let i; i < cardsDescriptions.length; i++) {
  //   cardsDescriptions[i].addEventListener('click', () => {
  //     console.log('obj');
  //   })
  // }
  const hideCard = () => {
    if (event.target === gallery) {
      // cards.forEach((e) => {
      //   e.classList.remove('hover');
      // })
      hideDescription();
    }
  };


  canvas.addEventListener('pointerdown', hideDescription);
  canvas.addEventListener('pointerdown', showDescription);
  // gallery.addEventListener('mouseover', showDescription);
  // canvas.addEventListener('mouseover', hideDescription)
};
