let now = 0;
let slideInterval;

function controller(x) {
 now +=x;
    slideshow(now);
}

function startSlideshow() {
    slideInterval = setInterval(() => {
     now++;
        slideshow (now);
    }, 3000);
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
    console .log(now)
    slides[num].style.display = "block";
}

// Start the slideshow automatically when the page loads
startSlideshow();
