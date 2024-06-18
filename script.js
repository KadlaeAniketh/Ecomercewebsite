var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


let now = 0;
let slideInterval;

function controller(x) {
    now += x;
    slideshow(now);
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        now++;
        slideshow(now);
    }, 1500);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}


function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if (num == slides.length) {
        now = 0;
        num = 0;
    }

    if (num < 0) {
        now = slides.length - 1;
        num = slides.length - 1;
    }

    for (let y of slides) {
        y.style.display = "none";
    }
    console.log(now)
    slides[num].style.display = "block";
}
startSlideshow();


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});


