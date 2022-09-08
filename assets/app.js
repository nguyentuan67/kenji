$(document).ready(function(){
    $('.products-slide').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]
    });
});

// nav mobile
const moreBtn = document.getElementById("more-btn")
const closeBtn = document.getElementById("close-btn")
const navMobileMenu = document.getElementById("nav-mb__menu")
const overlay = document.querySelector(".overlay")

moreBtn.onclick = () => {
    navMobileMenu.classList.add('active')
    overlay.style.display = 'block'
}

closeBtn.onclick = () => {
    navMobileMenu.classList.remove('active')
    overlay.style.display = 'none'
}

overlay.onclick = () => {
    navMobileMenu.classList.remove('active')
    overlay.style.display = 'none'
}