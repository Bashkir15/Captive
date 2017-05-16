import navHandler from './shared/nav';
import mobileMenu from './shared/mobile-menu';
import landing from './pages/landing';

const trigger = document.querySelector('.nav-trigger');

navHandler();

const menu = mobileMenu();


if (window.location.pathname == '/') {
    landing();
}

trigger.addEventListener('click', menu.toggle);
