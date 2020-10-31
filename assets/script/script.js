const cuteGhost = document.querySelectorAll(".cute__ghost");
anime({
  targets: cuteGhost,
  translateX: ["0%", "-130%"],
  translateY: ["6%", "-6%", "6%", "-6%", "6%"],
  delay: function (el, i, l) {
    return i * 800;
  },
  duration: 5000,
  easing: "linear",
  loop: true,
});

anime
  .timeline({
    loop: true,
  })
  .add({
    targets: ".line__bot",
    width: {
      value: "100%",
      duration: 700,
      easing: "easeInOutExpo",
    },
  })
  .add({
    targets: ".line__top",
    top: "0px",
    width: {
      value: "100%",
      duration: 700,
      easing: "easeInOutExpo",
    },
  })
  .add({
    targets: ".first__word",
    opacity: ["0", "1"],
    translateX: ["-10px", "0px"],
    duration: 1000,
  })
  .add({
    targets: ".last__word",
    opacity: ["0", "1"],
    translateX: ["10px", "0px"],
    duration: 1500,
  });
