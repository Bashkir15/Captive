function init() {
    const parallax = document.querySelector('.parallax');
    const speed = 0.5;

    function handleScroll() {
        let windowYOffset = window.pageYOffset;
        let position = '50% ' + (windowYOffset * speed) + "px";

        parallax.style.backgroundPosition = position;
    }

    window.addEventListener('scroll', handleScroll);
}

init();