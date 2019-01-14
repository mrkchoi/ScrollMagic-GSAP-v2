// Fade in on DOM load
// SCENE 1
window.addEventListener("DOMContentLoaded", anim1);

function anim1() {
  let t1 = new TimelineMax();
  t1.from(".main__header", 1, { opacity: 0, delay: 0.5 });
}

let t2 = new TimelineMax();
t2.from(".main2__header", 2.5, {
  opacity: 0,
  // rotation: 360,
  // scale: 0,
  ease: Power4.easeOut,
  delay: 0.5
});

// SCENE 2
let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".main2",
  // duration: "70%",
  offset: 100,
  reverse: true
})
  .addIndicators()
  .addTo(controller)
  .setTween(t2);

// SCENE 3
// let controller = ScrollMagic.Controller();
let t3 = new TimelineMax();
t3.from(".main3__header", 2, {
  scale: 1.2,
  opacity: 0,
  ease: Bounce.easeOut,
  delay: 0.5
});

let controller2 = new ScrollMagic.Controller();

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".main3",
  offset: 100,
  reverse: true
})
  .addIndicators()
  .addTo(controller2)
  .setTween(t3);

// SCENE 4

let t4 = new TimelineMax();
t4.from(".main4", 1, { opacity: 0, ease: Power4.easeOut, delay: 0.5 }).from(
  ".main4__header",
  1.5,
  { opacity: 0, scale: 0.5, ease: Power4.easeOut },
  "-=1"
);

let c4 = new ScrollMagic.Controller();
let scene3 = new ScrollMagic.Scene({
  triggerElement: ".main4",
  reverse: true,
  offset: -100
})
  .addIndicators()
  .setTween(t4)
  .addTo(c4);
