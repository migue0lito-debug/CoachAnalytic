// Basic navigation
const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');
navItems.forEach(btn => btn.addEventListener('click', ()=>{
    navItems.forEach(n=>n.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    screens.forEach(s=>s.classList.remove('active-screen'));
    document.getElementById(target).classList.add('active-screen');
}));

// Toggle contrast / normal
const toggleContrast = document.getElementById('toggle-contrast');
const bodyEl = document.body;
toggleContrast.addEventListener('click', ()=>{
    const isContrast = bodyEl.classList.toggle('contrast');
    document.querySelector('.single-mode').classList.toggle('hidden', isContrast);
    document.querySelector('.contrast-mode').classList.toggle('hidden', !isContrast);
});

// Videos
const videoPrimary = document.getElementById('videoPrimary');
const videoA = document.getElementById('videoA');
const videoB = document.getElementById('videoB');

// Controls
const speed = document.getElementById('speed');
const speedVal = document.getElementById('speedVal');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const back5 = document.getElementById('back5');
const forward5 = document.getElementById('forward5');
const frameBack = document.getElementById('frameBack');
const frameFwd = document.getElementById('frameFwd');

// Contrast controls
const speed2 = document.getElementById('speed2');
const speedVal2 = document.getElementById('speedVal2');

// Playback controls for primary
if (speed && speedVal && videoPrimary) {
    speed.addEventListener('input', ()=>{
        const v = parseFloat(speed.value);
        speedVal.textContent = v.toFixed(2) + 'x';
        videoPrimary.playbackRate = v;
    });
}
if(playBtn && videoPrimary) playBtn.addEventListener('click', ()=> videoPrimary.play());
if(pauseBtn && videoPrimary) pauseBtn.addEventListener('click', ()=> videoPrimary.pause());
if(back5 && videoPrimary) back5.addEventListener('click', ()=> videoPrimary.currentTime = Math.max(0, videoPrimary.currentTime - 5));
if(forward5 && videoPrimary) forward5.addEventListener('click', ()=> videoPrimary.currentTime = Math.min(videoPrimary.duration, videoPrimary.currentTime + 5));

// Frame controls
if(frameBack && videoPrimary) frameBack.addEventListener('click', ()=>{
    videoPrimary.currentTime = Math.max(0, videoPrimary.currentTime - (1 / 25));
});
if(frameFwd && videoPrimary) frameFwd.addEventListener('click', ()=>{
    videoPrimary.currentTime = Math.min(videoPrimary.duration, videoPrimary.currentTime + (1 / 25));
});

// Contrast mode speed control
if(speed2 && speedVal2 && videoA && videoB){
    speed2.addEventListener('input', ()=>{
        const v = parseFloat(speed2.value);
        speedVal2.textContent = v.toFixed(2) + 'x';
        videoA.playbackRate = v;
        videoB.playbackRate = v;
    });
}

// Language control (basic example, you can expand)
const langBtns = document.querySelectorAll('.lang button');
langBtns.forEach(btn => btn.addEventListener('click', e => {
    if(e.target.dataset.lang === 'en'){
        document.querySelectorAll('.nav-item')[0].textContent = 'Home';
        document.querySelectorAll('.nav-item')[1].textContent = 'My Videos';
        document.querySelectorAll('.nav-item')[2].textContent = 'Settings';
        document.querySelector('.logo').textContent = 'Coach Analytic';
        document.querySelector('.brand').textContent = 'Coach Analytic';
    } else {
        document.querySelectorAll('.nav-item')[0].textContent = 'Inicio';
        document.querySelectorAll('.nav-item')[1].textContent = 'Mis Videos';
        document.querySelectorAll('.nav-item')[2].textContent = 'Configuración';
        document.querySelector('.logo').textContent = 'Coach Analytic';
        document.querySelector('.brand').textContent = 'Coach Analytic';
    }
}));