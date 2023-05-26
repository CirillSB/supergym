export const initHover = () => {
  const canvas = document.querySelector('body');
  const gallery = document.querySelector('.coaches');
  const slider = document.querySelector('.slider__list');
  const image = document.querySelectorAll('.slider__image');
  const cards = document.querySelectorAll('.slider__item');
  const title = document.querySelectorAll('.slider__item p');
  const cardsDescriptions = document.querySelectorAll('.coaches-card');

  const showCard = () => {
    for (let i = 0; i < cards.length; i++) {
      if (event.target === image[i]) {
        cardsDescriptions[i].classList.add('hover');
        // cardsDescriptions[i].style.visibility = 'visible';
        // cardsDescriptions[i].style.opacity = '1';
        if (!title[i].classList.contains('hidden')) {
          title[i].classList.add('hidden');
        }
      }
    }
  }

  // const hideCard = () => {
  //   // console.log(event.currentTarget);
  //   for (let i = 0; i < cards.length; i++) {
  //     if (event.currentTarget === gallery) {
  //       if (cardsDescriptions[i].classList.contains('hover')) {
  //         cardsDescriptions[i].classList.remove('hover');
  //       }
  //       // cardsDescriptions[i].style.visibility = 'hidden';
  //       // cardsDescriptions[i].style.opacity = '0';
  //       if (title[i].classList.contains('hidden')) {
  //         title[i].classList.remove('hidden');
  //       }
  //     }
  //   }
  // }
  const hideCard = () => {
    for (let i = 0; i < cardsDescriptions.length; i++) {
      if (event.target === cardsDescriptions[i] || event.relatedTarget === gallery && event.relatedTarget === cardsDescriptions[i + 1]) {
        cardsDescriptions[i].classList.remove('hover');
        if (title[i].classList.contains('hidden')) {
          title[i].classList.remove('hidden');
        }
      }
    }
}

    gallery.addEventListener('mouseover', showCard);
    gallery.addEventListener('mouseout', hideCard);
  }

