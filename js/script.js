let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .mechanism, .title-mechanism, .main-title, .main-p, .about-xcyr, .sec-foot', { origin: 'top' });
ScrollReveal().reveal('.about, .place__card, .container, .contact-sec', { origin: 'bottom' });


const open_nav = document.querySelectorAll('.open-menu i');

function show_nav (){
    document.querySelector(".mobile-nav").classList.add("show-nav")
}
function disply_nav (){
    document.querySelector(".mobile-nav").classList.remove("show-nav")
}
function show_con(e){
    e.classList.toggle('show_arow');
    e.nextElementSibling.classList.toggle('ditelis_ser_show');
    e.parentElement.classList.toggle('boxs-se-show');
}