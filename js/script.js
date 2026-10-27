
gsap.registerPlugin(ScrollTrigger);

const loader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
  const finishLoader = () => {
    loader?.remove();

    // Intro animation
    const intro = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    intro
      .from(".site-header", {
        y: -20,
        opacity: 0,
        duration: 0.7
      })
      .from(".hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.5
      }, "-=0.25")
      .from(".hero-title", {
        y: 65,
        opacity: 0,
        duration: 1
      }, "-=0.15")
      .from(".hero-bottom > *", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15
      }, "-=0.45")
      .from(".hero-meta, .hero-footer", {
        opacity: 0,
        duration: 0.5
      }, "-=0.5");

    // Reveal project section headings
    gsap.from(".section-heading", {
      y: 45,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section-heading",
        start: "top 85%",
        once: true
      }
    });

    // Reveal project cards one by one
    gsap.from(".project-card", {
      y: 55,
      opacity: 0,
      duration: 0.85,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 82%",
        once: true
      }
    });

    // Reveal About content
    gsap.from(".about-content > *", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 82%",
        once: true
      }
    });

    // Reveal skill tags
    gsap.from(".skills-list span", {
      y: 15,
      opacity: 0,
      duration: 0.45,
      stagger: 0.07,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-list",
        start: "top 90%",
        once: true
      }
    });

    // Reveal contact section
    gsap.from(".contact > *", {
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        once: true
      }
    });

    // Subtle image parallax on larger screens
    if (window.matchMedia("(min-width: 768px)").matches) {
      gsap.utils.toArray(".project-image").forEach((image) => {
        gsap.fromTo(
          image,
          { backgroundPosition: "center 42%" },
          {
            backgroundPosition: "center 58%",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      });
    }
  };

  if (loader && window.gsap) {
    gsap.to(loader, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.inOut",
      onComplete: finishLoader
    });
  } else {
    finishLoader();
  }
});
