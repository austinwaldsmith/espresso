const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.to("h1", { y: 0, opacity: 1 })
  .to("h2", { y: 0, opacity: 1 })
  .to(".submit", { duration: 0.75, y: 0, opacity: 1 });
