$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:[$('.owl-nav .owl-prev'), $('.owl-nav .owl-next')],
    rewind:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        700:{
            items:6,
            nav:true,
            loop:false
        }
    }
})



const hamburger = document.querySelector('header .menu .hamburger');
const menu = document.querySelector('header .menu .nav');


hamburger.addEventListener("click", () => {
    menu.classList.toggle("active")
});

jQuery(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
            if(top>=60) {
                $("header").addClass('secondary');
            }
            else if($("header").hasClass('secondary')) {
                $("header").removeClass('secondary');
            }
    });
});

window.onscroll = function() {
    scroll();
};

