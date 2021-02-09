//----GLOBAL SCOPE----
let playState = false;
const audios = [new Audio('/audio/m-1.mp3'), new Audio('/audio/m-2.mp3')];
if (localStorage.getItem('audiosIndex') === null)
  localStorage.setItem('audiosIndex', '0');

let audiosIndex: number = parseInt(localStorage.getItem('audiosIndex')!);
let audiosLength: number = audios.length;
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
    nextAudio();
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
  playButton.querySelector('img')!.src = '/images/icons/play-pause.svg';
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
  playButton.querySelector('img')!.src = '/images/icons/play-pause.svg';
}

async function togglePlayState(target: HTMLDivElement) {
  if (playState) {
    audios[audiosIndex].pause();
    playState = false;
    target.classList.remove('active');
    target.querySelector('img')!.src = '/images/icons/play-triangle.svg';
  } else {
    try {
      await audios[audiosIndex].play();
      playState = true;
      target.classList.add('active');
      target.querySelector('img')!.src = '/images/icons/play-pause.svg';
    } catch (e) {
      //reportar error al usuario
    }
  }
}

function removeLoader() {
  document.querySelector('.ctn-loader')!.classList.add('ocult');
  document.querySelector('.ctn-music-player')!.classList.add('active');
  const cards = document.querySelectorAll('.load-card');
  for (let i = 0; i < cards.length; i++) cards[i].classList.add('active');
}
