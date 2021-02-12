//----GLOBAL SCOPE----
let playState = false;
const audios = [
  new Audio('/audio/m-1.mp3'),
  new Audio('/audio/m-2.mp3'),
  new Audio('/audio/m-3.mp3'),
  new Audio('/audio/m-4.mp3'),
  new Audio('/audio/m-5.mp3'),
];
const musicPlayer = document.querySelector('.ctn-music-player')!;
if (localStorage.getItem('audiosIndex') === null)
  localStorage.setItem('audiosIndex', '0');

let audiosIndex: number = parseInt(localStorage.getItem('audiosIndex')!);
let audiosLength: number = audios.length;

const content1 = document.querySelector('.ctn-content-1')!;
const content2 = document.querySelector('.ctn-content-2')!;
const content3 = document.querySelector('.ctn-content-3')!;
//----GLOBAL SCOPE----

window.addEventListener('load', () => removeLoader());

document.addEventListener('click', clickEvents);

function clickEvents(e: any) {
  if (e.target.id == 'play') {
    togglePlayState(e.target);
  } else if (e.target.parentNode.id == 'play') {
    togglePlayState(e.target.parentNode);
  } else if (e.target.id == 'play-next' || e.target.parentNode.id == 'play-next') {
    nextAudio();
  } else if (e.target.id == 'play-behind' || e.target.parentNode.id == 'play-behind') {
    behindAudio();
  }
}

function nextAudio() {
  audios[audiosIndex].pause();
  audios[audiosIndex].currentTime = 0;
  audiosIndex += 1;
  if (audiosIndex === audiosLength) audiosIndex = 0;
  localStorage.setItem('audiosIndex', audiosIndex.toString());
  audios[audiosIndex].play();
  playState = true;
  let playButton = document.getElementById('play')!;
  playButton.classList.add('active');
  playButton.querySelector('img')!.src = '/images/icons/play-pause.png';
  console.log(audiosIndex);
}

function behindAudio() {
  audios[audiosIndex].pause();
  audios[audiosIndex].currentTime = 0;
  audiosIndex -= 1;
  if (audiosIndex === -1) audiosIndex = audiosLength - 1;
  localStorage.setItem('audiosIndex', audiosIndex.toString());
  audios[audiosIndex].play();
  playState = true;
  let playButton = document.getElementById('play')!;
  playButton.classList.add('active');
  playButton.querySelector('img')!.src = '/images/icons/play-pause.png';
  console.log(audiosIndex);
}

async function togglePlayState(target: HTMLDivElement) {
  if (playState) {
    audios[audiosIndex].pause();
    playState = false;
    target.classList.remove('active');
    target.querySelector('img')!.src = '/images/icons/play-triangle.png';
  } else {
    try {
      await audios[audiosIndex].play();
      playState = true;
      target.classList.add('active');
      target.querySelector('img')!.src = '/images/icons/play-pause.png';
    } catch (e) {
      //reportar error al usuario
    }
  }
}

//@ts-ignore
function removeLoader() {
  document.querySelector('.ctn-loader')!.classList.add('ocult');
  setTimeout(() => {
    content1.classList.add('active');
    document.querySelector('.ctn-nav')!.classList.add('active');
  }, 1900);
  musicPlayer.classList.add('active');
  musicPlayer.addEventListener('ended', () => nextAudio());
  const cards = document.querySelectorAll('.load-card');
  for (let i = 0; i < cards.length; i++) cards[i].classList.add('active');
}

window.addEventListener('scroll', e => {
  console.log(window.scrollY);
  if (window.scrollY >= 0 && window.scrollY <= 440) {
    content1.classList.add('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
  } else if (window.scrollY >= 610 && window.scrollY <= 816) {
    content1.classList.remove('active');
    content2.classList.add('active');
    content3.classList.remove('active');
  }
});
