class Music {
  private audios: HTMLAudioElement[] = [
    new Audio('/audio/m-1.mp3'),
    new Audio('/audio/m-2.mp3'),
    new Audio('/audio/m-3.mp3'),
    new Audio('/audio/m-4.mp3'),
    new Audio('/audio/m-5.mp3'),
  ];
  private playState: boolean = false;
  private audiosIndex: number;
  private audiosLength: number = this.audios.length;
  public musicPlayer = document.querySelector('.ctn-music-player')!;

  constructor() {
    if (localStorage.getItem('audiosIndex') === null)
      localStorage.setItem('audiosIndex', '0');
    this.audiosIndex = parseInt(localStorage.getItem('audiosIndex')!);
  }

  public nextAudio() {
    this.audios[this.audiosIndex].pause();
    this.audios[this.audiosIndex].currentTime = 0;
    this.audiosIndex += 1;
    if (this.audiosIndex === this.audiosLength) this.audiosIndex = 0;
    localStorage.setItem('audiosIndex', this.audiosIndex.toString());
    this.audios[this.audiosIndex].play();
    this.playState = true;
    let playButton = document.getElementById('play')!;
    playButton.classList.add('active');
    playButton.querySelector('img')!.src = '/images/icons/play-pause.png';
    console.log(this.audiosIndex);
  }

  public behindAudio() {
    this.audios[this.audiosIndex].pause();
    this.audios[this.audiosIndex].currentTime = 0;
    this.audiosIndex -= 1;
    if (this.audiosIndex === -1) this.audiosIndex = this.audiosLength - 1;
    localStorage.setItem('audiosIndex', this.audiosIndex.toString());
    this.audios[this.audiosIndex].play();
    this.playState = true;
    let playButton = document.getElementById('play')!;
    playButton.classList.add('active');
    playButton.querySelector('img')!.src = '/images/icons/play-pause.png';
    console.log(this.audiosIndex);
  }

  public async togglePlayState(target: HTMLDivElement) {
    if (this.playState) {
      this.audios[this.audiosIndex].pause();
      this.playState = false;
      target.classList.remove('active');
      target.querySelector('img')!.src = '/images/icons/play-triangle.png';
    } else {
      try {
        await this.audios[this.audiosIndex].play();
        this.playState = true;
        target.classList.add('active');
        target.querySelector('img')!.src = '/images/icons/play-pause.png';
      } catch (e) {
        //reportar error al usuario
      }
    }
  }
}

class UserInterface {
  public removeLoader() {
    document.querySelector('.ctn-loader')!.classList.add('ocult');
    const cards = document.querySelectorAll('.load-card');
    for (let i = 0; i < cards.length; i++) cards[i].classList.add('active');
  }

  public showInterface() {
    setTimeout(() => {
      content1.classList.add('active');
      document.querySelector('.ctn-nav')!.classList.add('active');
    }, 1900);
    music.musicPlayer.classList.add('active');
    music.musicPlayer.addEventListener('ended', () => music.nextAudio());
  }
}

//----GLOBAL SCOPE----
const UI = new UserInterface();
const music = new Music();
const content1 = document.querySelector('.ctn-content-1')!;
const content2 = document.querySelector('.ctn-content-2')!;
const content3 = document.querySelector('.ctn-content-3')!;
//----GLOBAL SCOPE----

window.addEventListener('load', () => {
  UI.removeLoader();
  UI.showInterface();
});

document.addEventListener('click', clickEvents);

function clickEvents(e: any) {
  if (e.target.id == 'play') {
    music.togglePlayState(e.target);
  } else if (e.target.parentNode.id == 'play') {
    music.togglePlayState(e.target.parentNode);
  } else if (e.target.id == 'play-next' || e.target.parentNode.id == 'play-next') {
    music.nextAudio();
  } else if (e.target.id == 'play-behind' || e.target.parentNode.id == 'play-behind') {
    music.behindAudio();
  }
}

window.addEventListener('scroll', () => {
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
