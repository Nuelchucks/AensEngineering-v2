    AOS.init({ duration: 700, once: true, offset: 80 });

  // ✅ GSAP Loader Animation
  window.addEventListener("load", () => {
    gsap.to("#loader", { opacity: 0, duration: 1.2, ease: "power2.out", onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }});
  });

  // ✅ GSAP Carousel Animation
  const heroCarousel = document.getElementById('heroCarousel');
  const slides = heroCarousel.querySelectorAll('.carousel-item');

  function animateSlide(slide) {
    const elements = slide.querySelectorAll('.slide-content > *');
    gsap.fromTo(elements, 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, duration: 4, stagger: 0.2, ease: "power3.out" }
    );
  }

  animateSlide(slides[0]);
  heroCarousel.addEventListener('slid.bs.carousel', (e) => {
    animateSlide(e.relatedTarget);
  });
  document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobileBtn");
  const header = document.querySelector("header");
  let mobileNav = document.getElementById("mobileNav");

  // Create mobile nav dynamically if not already added
  if (!mobileNav) {
    mobileNav = document.createElement("nav");
    mobileNav.id = "mobileNav";
    mobileNav.innerHTML = `
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Products</a>
      <a href="#contact">Contact</a>
      <a href="#quote" class="text-white bg-[var(--brand-blue)] hover:bg-[var(--brand-red)] px-4 py-2 rounded inline-block mt-2 text-center">Get Quote</a>
    `;
    header.appendChild(mobileNav);
  }

  // Toggle menu
  mobileBtn.addEventListener("click", () => {
    mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
  });
});

 document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");
    let counted = false;

    const startCounting = () => {
      if (counted) return;
      counted = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // total animation time in ms
        const increment = target / (duration / 16); // ~60fps

        let count = 0;
        const updateCount = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        updateCount();
      });
    };

    // ✅ Trigger on scroll
    const statsSection = document.querySelector("section.relative.py-12");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
  });
