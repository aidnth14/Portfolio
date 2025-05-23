// Fade-in on scroll for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Origin Station Animation Logic
const orgin = document.querySelector('.orgin');
const station = document.querySelector('.station');
const osWrapper = document.querySelector('.os-wrapper');
const osO = osWrapper.querySelector('.os-letter.O');
const osS = osWrapper.querySelector('.os-letter.S');
const illustration = document.querySelector('.illustration');

async function animateOriginStation() {
  if (!orgin || !station || !osWrapper || !osO || !osS || !illustration) return;

  // Step 1: Animate orgin and station inward
  orgin.classList.add('move-orgin');
  station.classList.add('move-station');

  // Wait for 1.5 seconds, then fade them out while the animation still runs
  await new Promise((r) => setTimeout(r, 1500));
  orgin.classList.add('fade-out');
  station.classList.add('fade-out');

  // Wait for fade to complete (0.8s)
  await new Promise((r) => setTimeout(r, 900));
  orgin.remove();
  station.remove();

  // Step 2: Show OS letters and animate them
  osWrapper.classList.add('show');
  osO.classList.add('move');
  osS.classList.add('move');

  // Make illustration visible
  illustration.classList.add('visible');

  // Add a bounce hover effect to OS letters after animation ends
  osO.addEventListener('animationend', () => {
    osO.style.animation = 'hoverUp 2s ease-in-out infinite';
  });
  osS.addEventListener('animationend', () => {
    osS.style.animation = 'hoverUp 2s ease-in-out infinite';
  });
}

animateOriginStation();

document.getElementById('hamburger-icon').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.right === '0px') {
    mobileMenu.style.right = '-100%'; 
  } else {
    mobileMenu.style.right = '0'; 
  }
});

document.getElementById('nav-mobile-close').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.style.right === '0px') {
    mobileMenu.style.right = '-100%'; 
  } else {
    mobileMenu.style.right = '0'; 
  }
});

