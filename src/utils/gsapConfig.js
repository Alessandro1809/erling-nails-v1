import { scale } from "motion";

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
    scale: 1.1,
    opacity: 0,
    duration: 1,
    height: 200,
    lazy: true,
  });

  // Gallery Section
  gsap.fromTo(
    ".gallery-section",
    { opacity: 0.5, y:200 },
    {
      opacity: 1,
      x: 0,
      y: 0,
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
    { opacity: 0, y:200 },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".opinion-section",
        start: "top 200%",
        end: "100% 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    }
  );

  

}

window.addEventListener("load", initScrollAnimations);
