// scrollAnimations.js
gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Bento Section
  gsap.timeline({
    scrollTrigger: {
      trigger: ".bento-section",
      start: "60% 60%",
      ease: "power2.inOut",
      end: "+= 20%",
      scrub: 1,
      pin: true,
      refreshPriority: 1,
      toggleActions: "play none none reverse",
    },
  }).to(".bento-section", {
    scale: 1.5,
    opacity: 0,
    height: 900,
    lazy: true,
  });

  // Gallery Section
  gsap.fromTo(
    ".gallery-section",
    { opacity: 0, y:200, scale: 0.5 },
    {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top 200%",
        end: "50% 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    }
  );

  // Opinion Section
  gsap.fromTo(
    ".opinion-section",
    { opacity: 0, x: -1200, rotate: 55, scale: 0.5 },
    {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".opinion-section",
        start: "top 50%",
        end: "100% 100%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    }
  );

  // Contact Section
  gsap.fromTo(
    ".contact-section",
    { opacity: 0, y: 200, scale: 0.5 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 100%",
        end: "10% 80%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
    }
  );

}

window.addEventListener("load", initScrollAnimations);
