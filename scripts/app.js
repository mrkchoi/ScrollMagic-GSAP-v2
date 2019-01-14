// MAIN 01
// Wrap every letter in a span
$(document).ready(
  $(".main__header").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(
          /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
          "<span class='letter'>$&</span>"
        )
    );
  })
);
// Add anime.js timeline
let animation1 = () => {
  anime.timeline({ loop: false }).add({
    targets: ".main__header .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 500,
    delay: function(el, i) {
      return 1000 + 40 * i;
    }
  });
};

// MAIN 02
// Wrap every letter in a span
$(document).ready(
  $(".main2__header").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(
          /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
          "<span class='letter'>$&</span>"
        )
    );
  })
);
// Add anime.js timeline
let animation2 = () => {
  anime.timeline({ loop: false }).add(
    {
      targets: ".main2__header .letter",
      scale: [0, 1],
      opacity: [0, 1],
      duration: 2000,
      elasticity: 600,
      delay: function(el, i) {
        return 500 + 45 * i;
      }
    },
    0
  );
};

// MAIN 03
// Wrap every letter in a span
$(document).ready(
  $(".main3__header").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(
          /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
          "<span class='letter'>$&</span>"
        )
    );
  })
);
// Add anime.js timeline
let animation3 = () => {
  anime.timeline({ loop: false }).add({
    targets: ".main3__header .letter",
    rotateY: [-90, 0],
    opacity: [0, 1],
    duration: 1300,
    delay: function(el, i) {
      return 1000 + 45 * i;
    }
  });
};

// MAIN 04
// Wrap every letter in a span
$(document).ready(
  $(".main4__header").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(
          /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
          "<span class='letter'>$&</span>"
        )
    );
  })
);
// Add anime.js timeline
let animation4 = () => {
  anime.timeline({ loop: false }).add({
    targets: ".main4__header .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 1000 + 30 * i;
    }
  });
};

// Intersection Observer API
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

window.addEventListener("DOMContentLoaded", intersectionObserver);

function intersectionObserver() {
  let observer1 = new IntersectionObserver(animation1, options);
  let target1 = document.querySelector(".main");
  observer1.observe(target1);

  let observer2 = new IntersectionObserver(animation2, options);
  let target2 = document.querySelector(".main2__header");
  observer2.observe(target2);

  let observer3 = new IntersectionObserver(animation3, options);
  let target3 = document.querySelector(".main3__header");
  observer3.observe(target3);

  let observer4 = new IntersectionObserver(animation4, options);
  let target4 = document.querySelector(".main4__header");
  observer4.observe(target4);
}
