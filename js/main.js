

const navTriggerBtn = document.querySelector("#nav-trigger-btn");
const naVmenu = document.querySelector("#nav_menu");
//evento
navTriggerBtn.addEventListener("click", () => {
    naVmenu.classList.toggle("nav-is-open");
});

// Fechar menu ao clicar em qualquer link do menu (mobile) e fazer scroll suave
const navLinks = naVmenu.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
        naVmenu.classList.remove("nav-is-open");
    });
});
//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //breakpoints
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
})

//scroll reveal animation

const sr = ScrollReveal({
    distance: '60px',
    origin: 'bottom',
    duration: 2000,
    delay: 200,
    reset: true,
});

//hero
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step"', { distance: '100px', interval: 100 });

//abot
sr.reveal('.about__text', { origin: 'left' });
sr.reveal('.about__img', { origin: 'rigth', delay: 800 });

//depoimentos
sr.reveal('.testimonial__bg', { delay: 800 });
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', { delay: '1000' });

//brands
sr.reveal('.brands__img', { delay: 600, distance: '100px', interval: 100 });

//work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', { delay: 800 });
sr.reveal('.work__grid', { delay: 1000 });

//status

sr.reveal('.stats');
sr.reveal('.stats__item', {
    distance: '100px',
    interval: 100
});

//news
sr.reveal('.news__title');
sr.reveal('.news__subtitle', { delay: 800 });

sr.reveal('.news__item', {
    distance: '100px',
    interval: 100,
    delay: 1000
});

//contato

sr.reveal('.contact__container');
sr.reveal('.contact__text', { delay: 800 });

// footer

sr.reveal('.footer__item', {
    distance: '100px',
    interval: 100,
});
sr.reveal('.footer__copyright');