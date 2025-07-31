document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    });

    const fadeInSections = document.querySelectorAll('.fade-in');

    const sectionObserverOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, sectionObserverOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    const originWord = document.querySelector('.orgin');
    const stationWord = document.querySelector('.station');
    const osWrapper = document.querySelector('.os-wrapper');
    const illustration = document.querySelector('.illustration');
    const osLetterO = document.querySelector('.os-letter.O');
    const osLetterS = document.querySelector('.os-letter.S');

    if (osWrapper) osWrapper.style.opacity = '0';
    if (illustration) illustration.style.opacity = '0';

    if (originWord) originWord.classList.add('move-orgin');
    if (stationWord) stationWord.classList.add('move-station');

    setTimeout(() => {
        if (originWord) originWord.classList.add('fade-out');
        if (stationWord) stationWord.classList.add('fade-out');

        setTimeout(() => {
            if (osWrapper) {
                osWrapper.classList.add('show');
                if (osLetterO) osLetterO.classList.add('move');
                if (osLetterS) osLetterS.classList.add('move');
            }

            setTimeout(() => {
                if (illustration) illustration.classList.add('visible');
            }, 1500);
        }, 500);
    }, 2500);


    const mobileMenuOpenBtn = document.getElementById('mobile-menu-button');
    const mobileMenuCloseBtn = document.getElementById('nav-mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (mobileMenuOpenBtn) {
        mobileMenuOpenBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            body.classList.add('blurred-background');
        });
    }

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('blurred-background');
        });
    }

    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('blurred-background');
        });
    });

    const learnMoreBtn = document.getElementById('about-us-btn');
    const learnMorePopupOverlay = document.getElementById('about-us-popup-overlay');
    const popupCloseBtn = document.querySelector('#about-us-popup-overlay .popup-close-btn');

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            learnMorePopupOverlay.classList.add('active');
            body.classList.add('blurred-background');
        });
    }

    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', () => {
            learnMorePopupOverlay.classList.remove('active');
            body.classList.remove('blurred-background');
        });
    }

    if (learnMorePopupOverlay) {
        learnMorePopupOverlay.addEventListener('click', (event) => {
            if (event.target === learnMorePopupOverlay) {
                learnMorePopupOverlay.classList.remove('active');
                body.classList.remove('blurred-background');
            }
        });
    }

    const faqPopupTrigger = document.querySelector('a[href="#faq-popup-trigger"]');
    const faqPopupTriggerMobile = document.querySelector('a[href="#faq-popup-trigger-mobile"]');
    const faqSidePopup = document.getElementById('faq-side-popup');
    const faqCloseBtn = document.querySelector('#faq-side-popup .popup-close-btn-side');

    const projectsPopupTrigger = document.querySelector('a[href="#projects-popup-trigger"]');
    const projectsPopupTriggerMobile = document.querySelector('a[href="#projects-popup-trigger-mobile"]');
    const projectsSidePopup = document.getElementById('projects-side-popup');
    const projectsCloseBtn = document.querySelector('#projects-side-popup .popup-close-btn-side');

    function openSidePopup(popupElement) {
        popupElement.classList.add('active');
        body.classList.add('blurred-background');
    }

    function closeSidePopup(popupElement) {
        popupElement.classList.remove('active');
        body.classList.remove('blurred-background');
    }

    if (faqPopupTrigger) {
        faqPopupTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openSidePopup(faqSidePopup);
        });
    }
    if (faqPopupTriggerMobile) {
        faqPopupTriggerMobile.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidePopup(mobileMenu);
            openSidePopup(faqSidePopup);
        });
    }
    if (faqCloseBtn) {
        faqCloseBtn.addEventListener('click', () => closeSidePopup(faqSidePopup));
    }

    if (projectsPopupTrigger) {
        projectsPopupTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openSidePopup(projectsSidePopup);
        });
    }
    if (projectsPopupTriggerMobile) {
        projectsPopupTriggerMobile.addEventListener('click', (e) => {
            e.preventDefault();
            closeSidePopup(mobileMenu);
            openSidePopup(projectsSidePopup);
        });
    }
    if (projectsCloseBtn) {
        projectsCloseBtn.addEventListener('click', () => closeSidePopup(projectsSidePopup));
    }
});
