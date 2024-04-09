const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");
const btnContainer = document.querySelector(".button");

let childDiv = document.createElement("div");
let interaction = 0;
let colorRange = 255;
let darkBtnClicks = 0;
let randColor = false;
let darkClr = false;

const randColorBtn = document.createElement("button");
randColorBtn.setAttribute("type", "button", "class", "randomBtn");
randColorBtn.textContent = "Random Color";
btnContainer.appendChild(randColorBtn);

const darkColorBtn = document.createElement("button");
darkColorBtn.setAttribute("type", "button");
darkColorBtn.classList.add("darkColor");
darkColorBtn.textContent = "Darken Color";
btnContainer.appendChild(darkColorBtn);

darkColorBtn.addEventListener("click", function () {
  darkClr = true;
  randColor = false;
  darkBtnClicks++;
  console.log(darkClr, darkBtnClicks);
});

randColorBtn.addEventListener("click", function () {
  randColor = true;
});

function hoverFunc() {
  let hoverColor = document.querySelectorAll(".hover");
  hoverColor.forEach((tileChild) => {
    tileChild.addEventListener("mouseenter", () => {
      let rColor = Math.floor(Math.random() * 255);
      let gColor = Math.floor(Math.random() * 255);
      let bColor = Math.floor(Math.random() * 255);
      console.log("IN");

      if (randColor) {
        interaction = 0;
        tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
      } else if (darkClr) {
        rColor = Math.floor(Math.random() * darkenColor());
        gColor = Math.floor(Math.random() * darkenColor());
        bColor = Math.floor(Math.random() * darkenColor());
        console.log(interaction, rColor, gColor, bColor);

        interaction++;
        tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
      } else {
        tileChild.style.background = "black";
      }
      /*
      if (darkBtnClicks % 2 === 0) {
        interaction = 0;
        tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
      } else {
        rColor = Math.floor(Math.random() * darkenColor());
        gColor = Math.floor(Math.random() * darkenColor());
        bColor = Math.floor(Math.random() * darkenColor());
        console.log(interaction, rColor, gColor, bColor);

        interaction++;
        tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
      }
    });*/

      tileChild.addEventListener("mouseleave", () => {
        console.log("OUT");
        tileChild.style.background = "white";
      });
    });
  });
}

function makeGrid(number) {
  const tileSides = 700 / number;
  for (let i = 0; i < number * number; i++) {
    childDiv = document.createElement("div");
    childDiv.classList.add("childDiv");
    childDiv.classList.add("hover");
    childDiv.style.height = `${tileSides}px`;
    childDiv.style.width = `${tileSides}px`;

    container.appendChild(childDiv);
  }
  hoverFunc();
}
makeGrid(16);

console.log(childDiv.classList.contains("hover"));
sidesPrompt.addEventListener("click", function () {
  let numSides = 0;
  do {
    numSides = +prompt("How many squares per side? Max of 100");
  } while (numSides >= 100);
  container.textContent = "";
  makeGrid(numSides);
});

function darkenColor() {
  switch (interaction) {
    case 0:
      colorRange = 225;
      break;
    case 1:
      colorRange = 229.4;
      break;
    case 2:
      colorRange = 204;
      break;
    case 3:
      colorRange = 178.5;
      break;
    case 4:
      colorRange = 153;
      break;
    case 5:
      colorRange = 127.5;
      break;
    case 6:
      colorRange = 102;
      break;
    case 7:
      colorRange = 76.5;
      break;
    case 8:
      colorRange = 51;
      break;
    case 9:
      colorRange = 25.5;
      break;
    case 10:
      colorRange = 0;
      break;
  }
  return colorRange;
}
