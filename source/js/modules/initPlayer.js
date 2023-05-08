const tag = document.createElement('script');

tag.src = "https://www.youtube.com/player_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '9TZXsZItgdw',
    events: {
      'onReady': initPoster,
      'onStateChange': changePosterVision,
    }
  });
}

const poster = document.querySelector('.gym__video');

const startVideo = () => {
  player.playVideo();
}

const initPoster = () => {
  poster.classList.add('gym__video--poster');
}

const changePosterVision = () => {
  if (poster.classList.contains('gym__video--poster')) {
    poster.classList.remove('gym__video--poster');
  } else {
    initPoster();
  }
}

export const initPlayer = () => {
  onYouTubePlayerAPIReady();
  poster.addEventListener('click', startVideo);
}
