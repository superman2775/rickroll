//gif spam
setInterval(() => {
    const img = document.createElement('img');
    img.src = 'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif';
    img.style.position = 'absolute';
    img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    img.style.top = Math.random() * (window.innerHeight - 150) + 'px';
    document.body.appendChild(img);
}, 250);

//audio
const rickrollSong = new Audio('/music/rickroll-song.mp3');
const startAudio = () => {
    rickrollSong.play();
    document.removeEventListener('click', startAudio);
    document.removeEventListener('keydown', startAudio);
};

document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);
