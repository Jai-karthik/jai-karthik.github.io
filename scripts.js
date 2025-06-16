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

// Initialize Splide for Our Process section
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('process-slider')) {
        new Splide('#process-slider', {
            type: 'loop',
            autoplay: true,
            interval: 3000,
        }).mount();
    }
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

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb-img');
    let slideIndex = 0;
    let slideTimer;

    function showSlide(index) {
        if (!mainImage || !thumbs.length) return;
        thumbs.forEach(t => t.classList.remove('selected'));
        const thumb = thumbs[index];
        mainImage.src = thumb.src;
        thumb.classList.add('selected');
    }

    function startSlideshow() {
        if (!thumbs.length) return;
        slideTimer = setInterval(() => {
            slideIndex = (slideIndex + 1) % thumbs.length;
            showSlide(slideIndex);
        }, 3000);
    }

    if (mainImage && thumbs.length) {
        thumbs.forEach((thumb, idx) => {
            thumb.addEventListener('click', () => {
                clearInterval(slideTimer);
                slideIndex = idx;
                showSlide(slideIndex);
                startSlideshow();
            });
        });
        showSlide(slideIndex);
        startSlideshow();
    }

    const qtyInput = document.getElementById('quantity');
    const plusBtn = document.getElementById('qtyPlus');
    const minusBtn = document.getElementById('qtyMinus');
    if (qtyInput && plusBtn && minusBtn) {
        plusBtn.addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
        });
        minusBtn.addEventListener('click', () => {
            qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
        });
    }

    // ✅ Mobile Accordion Tabs Behavior
    // ✅ Mobile Accordion Tabs Behavior
    if (window.innerWidth <= 767) {
  const tabs = document.querySelectorAll('#product-info .nav-link');
  const tabPanes = document.querySelectorAll('#product-info .tab-pane');

  // Clean up Bootstrap active classes
  document.querySelector('#product-info .nav-link.active')?.classList.remove('active');
  document.querySelector('#product-info .tab-pane.show.active')?.classList.remove('show', 'active');

  // Move panes below tab and collapse all
  tabs.forEach(tab => {
    const pane = document.querySelector(tab.dataset.bsTarget);
    if (pane) {
      tab.closest('li').after(pane);
      pane.style.height = '0px';
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      const targetPane = document.querySelector(this.dataset.bsTarget);
      const isActive = this.classList.contains('active');

      // Collapse all
      tabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.style.height = '0px');

      if (!isActive && targetPane) {
        this.classList.add('active');
        const inner = targetPane.querySelector('.tab-pane-inner');
        const scrollHeight = inner.scrollHeight;
        targetPane.style.height = scrollHeight + 'px';
      }
    });
  });
}


});