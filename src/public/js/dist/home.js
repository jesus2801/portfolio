var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Music = /** @class */ (function () {
    function Music() {
        this.audios = [
            new Audio('/audio/m-1.mp3'),
            new Audio('/audio/m-2.mp3'),
            new Audio('/audio/m-3.mp3'),
            new Audio('/audio/m-4.mp3'),
            new Audio('/audio/m-5.mp3'),
        ];
        this.playState = false;
        this.audiosLength = this.audios.length;
        this.musicPlayer = document.querySelector('.ctn-music-player');
        if (localStorage.getItem('audiosIndex') === null)
            localStorage.setItem('audiosIndex', '0');
        this.audiosIndex = parseInt(localStorage.getItem('audiosIndex'));
    }
    Music.prototype.nextAudio = function () {
        this.audios[this.audiosIndex].pause();
        this.audios[this.audiosIndex].currentTime = 0;
        this.audiosIndex += 1;
        if (this.audiosIndex === this.audiosLength)
            this.audiosIndex = 0;
        localStorage.setItem('audiosIndex', this.audiosIndex.toString());
        this.audios[this.audiosIndex].play();
        this.playState = true;
        var playButton = document.getElementById('play');
        playButton.classList.add('active');
        playButton.querySelector('img').src = '/images/icons/play-pause.png';
        console.log(this.audiosIndex);
    };
    Music.prototype.behindAudio = function () {
        this.audios[this.audiosIndex].pause();
        this.audios[this.audiosIndex].currentTime = 0;
        this.audiosIndex -= 1;
        if (this.audiosIndex === -1)
            this.audiosIndex = this.audiosLength - 1;
        localStorage.setItem('audiosIndex', this.audiosIndex.toString());
        this.audios[this.audiosIndex].play();
        this.playState = true;
        var playButton = document.getElementById('play');
        playButton.classList.add('active');
        playButton.querySelector('img').src = '/images/icons/play-pause.png';
        console.log(this.audiosIndex);
    };
    Music.prototype.togglePlayState = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.playState) return [3 /*break*/, 1];
                        this.audios[this.audiosIndex].pause();
                        this.playState = false;
                        target.classList.remove('active');
                        target.querySelector('img').src = '/images/icons/play-triangle.png';
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.audios[this.audiosIndex].play()];
                    case 2:
                        _a.sent();
                        this.playState = true;
                        target.classList.add('active');
                        target.querySelector('img').src = '/images/icons/play-pause.png';
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Music;
}());
var UserInterface = /** @class */ (function () {
    function UserInterface() {
    }
    UserInterface.prototype.removeLoader = function () {
        document.querySelector('.ctn-loader').classList.add('ocult');
        var cards = document.querySelectorAll('.load-card');
        for (var i = 0; i < cards.length; i++)
            cards[i].classList.add('active');
    };
    UserInterface.prototype.showInterface = function () {
        setTimeout(function () {
            content1.classList.add('active');
            document.querySelector('.ctn-nav').classList.add('active');
        }, 1900);
        music.musicPlayer.classList.add('active');
        music.musicPlayer.addEventListener('ended', function () { return music.nextAudio(); });
    };
    return UserInterface;
}());
//----GLOBAL SCOPE----
var UI = new UserInterface();
var music = new Music();
var content1 = document.querySelector('.ctn-content-1');
var content2 = document.querySelector('.ctn-content-2');
var content3 = document.querySelector('.ctn-content-3');
//----GLOBAL SCOPE----
window.addEventListener('load', function () {
    UI.removeLoader();
    UI.showInterface();
});
document.addEventListener('click', clickEvents);
function clickEvents(e) {
    if (e.target.id == 'play') {
        music.togglePlayState(e.target);
    }
    else if (e.target.parentNode.id == 'play') {
        music.togglePlayState(e.target.parentNode);
    }
    else if (e.target.id == 'play-next' || e.target.parentNode.id == 'play-next') {
        music.nextAudio();
    }
    else if (e.target.id == 'play-behind' || e.target.parentNode.id == 'play-behind') {
        music.behindAudio();
    }
}
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY >= 0 && window.scrollY <= 440) {
        content1.classList.add('active');
        content2.classList.remove('active');
        content3.classList.remove('active');
    }
    else if (window.scrollY >= 610 && window.scrollY <= 816) {
        content1.classList.remove('active');
        content2.classList.add('active');
        content3.classList.remove('active');
    }
});
