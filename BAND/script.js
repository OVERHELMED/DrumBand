// Mapping of keys to sounds
const keySoundMap = {
    Q: 'sounds/clap.mp3',
    W: 'sounds/hihat.mp3',
    E: 'sounds/kick.mp3',
    A: 'sounds/openhat.mp3',
    S: 'sounds/boom.mp3',
    D: 'sounds/ride.mp3',
    Z: 'sounds/snare.mp3',
    X: 'sounds/tom.mp3',
    C: 'sounds/loop.mp3'
};

// Play sound when a drum icon is clicked
function playSound(key) {
    const sound = new Audio(keySoundMap[key]);
    sound.play();
    highlightKey(key);
}

// Highlight the drum icon when pressed
function highlightKey(key) {
    const drum = document.getElementById(key);
    drum.classList.add('glow');
    setTimeout(() => {
        drum.classList.remove('glow');
    }, 200);
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    if (keySoundMap[event.key.toUpperCase()]) {
        playSound(event.key.toUpperCase());
    }
});
