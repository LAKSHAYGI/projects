let sb=document.querySelector('#search-btn');
let sb1=document.querySelector('.container');
let fb=document.querySelector('#login-btn');
let lf=document.querySelector('.login-form');
let fc=document.querySelector('#f-close');
let menu=document.querySelector('#menu-bar');
let nav=document.querySelector('.navbar');
let vb=document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    sb.classList.remove('fa-times');
    sb1.classList.remove('active');
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
    lf.classList.remove('active');
}
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
});
sb.addEventListener('click',() =>{
    sb.classList.toggle('fa-times');
    sb1.classList.toggle('active');
});
fb.addEventListener('click',() =>{
    lf.classList.add('active');
});
fc.addEventListener('click',() =>{
    lf.classList.remove('active');
});
vb.forEach(btn => {
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#vid-slider').src=src;
    })
});

var swiper = new swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});