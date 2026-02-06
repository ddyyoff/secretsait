const playButton = document.getElementById('playButton');
const videoContainer = document.getElementById('videoContainer');
const rickrolledMessage = document.getElementById('rickrolledMessage');

const videoID = 'dQw4w9WgXcQ';
const messageDelay = 1;

let player; // глобальная переменная для YouTube API

playButton.addEventListener('click', () => {
  playButton.style.display = 'none';

  // Создаем div для YouTube player
  const playerDiv = document.createElement('div');
  playerDiv.id = 'ytPlayer';
  videoContainer.appendChild(playerDiv);

  // Инициализируем YouTube IFrame API player
  player = new YT.Player('ytPlayer', {
    height: '315',
    width: '560',
    videoId: videoID,
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: videoID
    },
    events: {
      'onReady': (event) => {
        event.target.playVideo(); // автозапуск видео
      }
    }
  });

  videoContainer.style.display = 'block';

  // Показываем сообщение снизу через 1 секунду
  setTimeout(() => {
    rickrolledMessage.style.display = 'block';
  }, messageDelay * 1000);
});
