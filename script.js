//this is all for the song to play, cuz browsers need interaction before playing stuff
const banner = document.createElement('div');
banner.setAttribute('style', `
    position: fixed; bottom: 0; left: 0; right: 0;
    background: #1a1a1a; color: #ccc;
    padding: 18px 24px; z-index: 99999;
    font-family: Arial, sans-serif; font-size: 14px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
`);

banner.innerHTML = `
    <span>
        We use cookies to improve your experience. By continuing, you agree to our
        <a id="terms-link" href="#" style="color:#4a9eff; text-decoration:underline;">Terms of Service</a>.
    </span>
    <button id="agree-btn" style="
        background: #36d438; color: #fff; border: none;
        padding: 10px 22px; border-radius: 6px; cursor: pointer;
        font-size: 14px; white-space: nowrap; font-weight: bold;
    ">I Agree</button>
`;

document.body.appendChild(banner);

document.getElementById('terms-link').addEventListener('click', (e) => {
    e.preventDefault();
    const popup = document.createElement('div');
    popup.setAttribute('style', `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: #1a1a1a; color: #ccc; border: 1px solid #333;
        padding: 32px; z-index: 999999; border-radius: 10px;
        font-family: Arial, sans-serif; font-size: 14px; max-width: 400px;
        text-align: center; box-shadow: 0 4px 30px rgba(0,0,0,0.8);
    `);
    popup.innerHTML = `
        <h2 style="color:#fff; margin-bottom:16px;">Terms of Service</h2>
        <p>You will get rickrolled.</p>
        <button id="close-popup" style="
            margin-top: 20px; background: #4a9eff; color: #fff;
            border: none; padding: 8px 20px; border-radius: 6px;
            cursor: pointer; font-size: 14px;
        ">Close</button>
    `;
    document.body.appendChild(popup);
    document.getElementById('close-popup').addEventListener('click', () => popup.remove());
});

document.getElementById('agree-btn').addEventListener('click', () => {
    banner.remove();

    const rickrollSong = new Audio('/music/rickroll-song.mp3');
    rickrollSong.play();

    setInterval(() => {
        const img = document.createElement('img');
        img.src = 'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif';
        img.setAttribute('style', `position: fixed; width: 200px; left: ${Math.random() * (window.innerWidth - 200)}px; top: ${Math.random() * (window.innerHeight - 150)}px; z-index: 9999;`);
        document.body.appendChild(img);
    }, 250);
});