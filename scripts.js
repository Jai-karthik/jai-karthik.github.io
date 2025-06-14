// Initialize Swiper JS with autoplay option and page-like swipe effect
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    autoplay: {
        delay: 3000, // Auto transition every 3 seconds
        disableOnInteraction: false, // Keep autoplay even when user interacts
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Initialize AOS (Scroll Animations)
AOS.init({
    duration: 1000,
});

document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    const isClickInsideNavbar = navbar.contains(event.target) || toggler.contains(event.target);

    if (!isClickInsideNavbar && navbar.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbar);
        bsCollapse.hide(); // Collapse the menu
    }
});