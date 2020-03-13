function menuToggle() {
    const nav = document.getElementsByTagName('nav');
    const menuBtnCont = document.querySelector('.nav__menu--toggle');

    menuBtnCont.addEventListener('click', ev => nav[0].classList.toggle("open"));
    
}

menuToggle();
