//Cute Ghosts
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

//Text
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

//Touch Generate Spider
let overlay = document.querySelector(".overlay__layer");
overlay.addEventListener("click", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;

  let fireworksContainer = document.createElement("div");
  fireworksContainer.className = "fireworks__container";
  fireworksContainer.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
    <style type="text/css">
      .st0{display:none;fill:none;stroke:#303C42;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st1{fill:none;stroke:#FF7D00;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    </style>
    <g id="XMLID_1321_">
      <path id="XMLID_1322_" class="st0" d="M9.7,11.4c0,0-1-0.7-1.7-0.1"/>
      <path id="XMLID_1323_" class="st1" d="M9.7,12.6c0,0-1,0.7-1.7,0.1"/>
      <polyline id="XMLID_1324_" class="st1" points="0.5,5.5 6.5,5.5 10.6,10.7 	"/>
      <polyline id="XMLID_1325_" class="st1" points="11.6,10.7 10.5,5.5 6.5,2.5 	"/>
      <polyline id="XMLID_1326_" class="st1" points="12,10.8 12.5,5.5 16.5,2.5 	"/>
      <polyline id="XMLID_1327_" class="st1" points="13.5,10.3 16.5,5.5 23.5,5.5 	"/>
      <polyline id="XMLID_1328_" class="st1" points="0.5,18.5 6.5,18.5 10.6,13.4 	"/>
      <polyline id="XMLID_1329_" class="st1" points="11.6,13.3 10.5,18.5 6.5,21.5 	"/>
      <polyline id="XMLID_1330_" class="st1" points="12,13.3 12.5,18.5 16.5,21.5 	"/>
      <polyline id="XMLID_1331_" class="st1" points="13.5,13.7 16.5,18.5 23.5,18.5 	"/>
      <line id="XMLID_1332_" class="st1" x1="15.5" y1="12" x2="18.5" y2="12"/>
      <line id="XMLID_1333_" class="st1" x1="16.5" y1="13" x2="16.5" y2="11"/>
      <path id="XMLID_1334_" class="st1" d="M18,8.5c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5s-5.5-1.6-5.5-3.5S16.1,8.5,18,8.5z"/>
      <path id="XMLID_1335_" class="st1" d="M12.9,10.8L11,10.6c-0.8-0.1-1.5,0.5-1.5,1.4s0.7,1.4,1.5,1.4l1.9-0.2"/>
    </g>
    </svg>
  `;
  document.body.appendChild(fireworksContainer);

  fireworksContainer.style.display = "block";
  fireworksContainer.style.top = `${y}px`;
  fireworksContainer.style.left = `${x}px`;

  anime({
    targets: ".fireworks__container",
    "z-index": ["10000", "20"],
    translateX: ["-150px"],
    duration: 1500,
    easing: "linear",
  });

  setTimeout(() => {
    document.body.removeChild(fireworksContainer);
  }, 1500);
});
