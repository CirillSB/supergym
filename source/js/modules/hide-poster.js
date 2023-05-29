export const hidePoster = () => {
  const video = document.querySelector('.gym__video');
  const poster = document.querySelector('.gym__video--poster');
  const content = window.getComputedStyle(document.querySelector('.gym__video'), ':after').getPropertyValue('content');
  if (video.classList.contains('focus-visible')) {
    poster.classList.remove('gym__video--poster');
  }
};
