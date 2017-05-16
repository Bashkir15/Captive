export default function navHandler() {
    const nav = document.querySelector('.nav');
    const container = document.querySelector('.page-header');

    let lastKnownScrollY = 0;
    let scrollTimeout = false;

    function getScrollY() {
        return window.pageYOffset || window.scrollTop;
    }

    function pin() {
        nav.style.willChange = 'transform';

        if (nav.classList.contains('nav-unpinned')) {
            nav.classList.remove('nav-unpinned');
            nav.classList.add('nav-pinned');
        } else {
            nav.classList.add('nav-pinned');
        }

        nav.style.willChange = 'auto';
    }

    function unpin() {
        nav.style.willChange = 'transform';

        if (nav.classList.contains('nav-pinned')) {
            nav.classList.remove('nav-pinned');
            nav.classList.add('nav-unpinned');
        } else {
            nav.classList.add('nav-unpinned');
        }

        nav.style.willChange = 'auto';
    }

    function checkPin() {
        let currentScrollY = getScrollY();

        if (currentScrollY >= container.offsetHeight) {
            if (currentScrollY < lastKnownScrollY) {
                pin();
            }

            if (currentScrollY > lastKnownScrollY) {
                unpin();
            }
        }

        if (currentScrollY < 150 && nav.classList.contains('nav-pinned')) {
            nav.classList.remove('nav-pinned');
        } 

        lastKnownScrollY = getScrollY();
    }

    function scrollThrottle() {
        if (!scrollTimeout) {
            window.requestAnimationFrame(() => {
                checkPin();
                scrollTimeout = false;
            });
        }

        scrollTimeout = true;
    }

    function init() {
        window.addEventListener('scroll', scrollThrottle);
    }

    init();
}
