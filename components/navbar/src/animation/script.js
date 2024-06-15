import gsap from "gsap";

export const animateBox = (element) => {
  gsap.to(element, {
    x: 1000,
    duration: 2,
    delay: 1
  });
};