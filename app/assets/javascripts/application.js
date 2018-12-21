//= require rails-ujs
//= require_tree .


// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}


// for AOS

AOS.init();


// transparent to coloured navbar: https://codepen.io/sonorangirl/pen/XmRBjq

$(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 20px, adds/removes solid class
          if($(this).scrollTop() > 20) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});



