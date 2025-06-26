// Smooth scroll for all anchor links that start with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Fade-in on scroll using Intersection Observer
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // unobserve after reveal for performance
    }
  });
}, {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px" // triggers a little earlier
});

faders.forEach(fader => appearOnScroll.observe(fader));
