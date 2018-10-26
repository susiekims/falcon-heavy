const button = document.querySelector('#nav-icon3');
const scroll = document.getElementsByClassName('scroll');
const rocket = document.getElementById('rockets')

const toggleDropdown = () => {
    button.onclick = function() {
          button.classList.toggle('open');
           if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    }
}

window.onscroll = function() {
    let pageBottom = document.body.scrollTop + window.innerHeight;
    for (let i = 0; i < scroll.length; i++) {
        let elem = scroll[i].getBoundingClientRect();
        if (elem.top < (pageBottom * .9)) {
            scroll[i].style.opacity = 1;
            scroll[i].style.transform = 'translateY(0px)';
        } else {
            scroll[i].style.opacity = 0;
            scroll[i].style.transform = 'translateY(50px)';

        }
    }
}


toggleDropdown();