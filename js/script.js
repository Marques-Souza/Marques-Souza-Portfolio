
// SESSÃO DO MENU RESPONSIVO
const menuHamburgue = document.querySelector('.menu-hamburgue');
menuHamburgue.addEventListener('click', ()=>{
   toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive')
    menuHamburgue.classList.toggle('change')

    if (menuHamburgue.classList.contains('change')) {
        nav.style.display = 'block'; 
    }else{
        nav.style.display = 'none'; 
    }
}

// SESSÃO DOS CARDS 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


