
var canvasEl = document.getElementById("canv");
var canvasContext = canvasEl.getContext("2d");

const gradientYColors = [
  "#E07187",
  "#FF8B03",
  "#ED6D6D",
  "#FFFBC9",
  "#21D4FD",
  "#0F7093",
  "#060090",
  "#06004D"
];

const gradientXColors = [
  { left: "#D9A8AF", right: "#E88AAF" },
  { left: "#E07192", right: "#F4B16A" },
  { left: "#E8718A", right: "#F5B96F" },
  { left: "#7876DF", right: "#B721FF" },
  { left: "#D9A8AF", right: "#907DCE" }
];

const gradientXValues = {
  start: "#FCE9AB",
  end: "#E88AAF"
};

const gradientYValues = {
  start: "#D37F7F"
};

const run = function () {
  const gradientX = canvasContext.createLinearGradient(0, 0, 32, 32);
  gradientX.addColorStop(0, gradientXValues.start);
  gradientX.addColorStop(1, gradientXValues.end);

  const gradientY = canvasContext.createLinearGradient(0, 32, 0, 0);
  gradientY.addColorStop(0, gradientYValues.start);
  gradientY.addColorStop(1, "rgba(255, 255, 255, 0)");

  canvasContext.fillStyle = gradientX;
  canvasContext.fillRect(0, 0, 32, 32);

  canvasContext.fillStyle = gradientY;
  canvasContext.fillRect(0, 0, 32, 32);
};

const tlGradientX = gsap.timeline({
  repeat: -1,
  yoyo: true,
  onUpdate: () => {
    run();
  }
});

const tlGradientY = gsap.timeline({
  repeat: -1,
  yoyo: true
});

gradientXColors.forEach((colors) => {
  tlGradientX.to(gradientXValues, {
    start: colors.left,
    end: colors.right,
    duration: 3,
    ease: "none"
  });
});

gradientYColors.forEach((color) => {
  tlGradientY.to(gradientYValues, {
    start: color,
    duration: 2,
    ease: "none"
  });
});

tlGradientY.totalDuration(10);
tlGradientY.totalDuration(10);

//Smoothscroll script
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800
});

