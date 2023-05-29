gsap.registerPlugin(ScrollTrigger);
gsap.to(".container1", {
  x:-800,
  duration: 4,
})
gsap.to(".container2", {
  x:800,
  duration: 4,
})
gsap.fromTo("nav", {
  opacity: 0,
}, {
  opacity: 1,
  duration: 2,
  delay: 2,
});
gsap.fromTo("#video-container", {
  opacity: 0,
}, {
  opacity: 1,
  duration: 2,
});
gsap.to('#my-text', {
  y: 0,
  duration: .3,
  delay: 2.3,
})
gsap.to('#my-text2', {
  y: 0,
  duration: .3,
  delay: 2.3,
})
gsap.fromTo(".img-r2", {
  opacity: 0,
  y: 100,
}, {
  y: 0,
  opacity: 1,
  duration: 2,
  delay: 3.5,
})
gsap.fromTo(".img-r3", {
  opacity: 0,
  x:-300,
}, {
  x:0,
  opacity: 1,
  duration: 2,
  delay: 3,
})
gsap.fromTo(".img-r4", {
  opacity: 0,
  y:-100
}, {
  y:0,
  opacity: 1,
  duration: 3,
  delay: 2.5,
})

gsap.to("#move", {
  scrollTrigger: {
    trigger: ".content-page",
    start: "top 99.9%",
    end: "top 0%",
    scrub: true,
    snap: 1 
  },
  opacity: 0,
  duration: 0.2,
});
gsap.fromTo("#h-effect",{
  
  opacity: 0,
  x:-500,
}, {
  scrollTrigger: {
    trigger: ".content-page",
    start: "top 80%",
    end: "top 0%",
    scrub: true,

  },
  x: 0,
  opacity: 1,
  scale: 1,
  duration: 3,
  delay: 1,
});

gsap.fromTo("#img-scale",{
  scale: 0.1,
  x:1000,

}, {
  scrollTrigger: {
    trigger: ".content-page",
    start: "top 80%",
    end: "top 0%",
    scrub: true,
  },
 x:0,
  delay: 3,
  scale: 1,
  duration: 3,
});

gsap.fromTo("#p-effect",{
  x:-500,
  y:500,
  opacity: 0,


}, {
  scrollTrigger: {
    trigger: ".content-page",
    start: "top 80%",
    end: "top 0%",
    scrub: true,
  },
  
  opacity: 1,
x: 0,
y: 0,
  delay: 4,
  duration: 3,
});

let sections = gsap.utils.toArray(".panel");
let pb=document.getElementById("panel2");
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container1x",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});
gsap.fromTo("#txt-sc1",{
  scale: 0.1,
  opacity: 0,
 },{
   scrollTrigger: {
     trigger: "#txt-sc1",
     scrub: true,
   },
   opacity: 1,
   scale: 5,
   duration: 3,
 })
