const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");
const btnContainer = document.querySelector(".button");

let childDiv = document.createElement("div");
let interaction = 0;
let colorRange = 255;
let randBtnClicks = 0;

const randColorBtn = document.createElement("button");
randColorBtn.setAttribute("type", "button");
randColorBtn.classList.add("randomColor");
randColorBtn.textContent = "Random Color";
btnContainer.appendChild(randColorBtn);

randColorBtn.addEventListener("click", function () {
  randBtnClicks++;
  console.log(randBtnClicks);
  if (randBtnClicks % 2 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
});

for (let i = 0; i < 256; i++) {
  childDiv = document.createElement("div");
  childDiv.classList.add("childDiv");
  childDiv.classList.add("hover");
  container.appendChild(childDiv);
}

function makeGrid(number) {
  const tileSides = 960 / number;
  for (let i = 0; i < number * number; i++) {
    childDiv = document.createElement("div");
    childDiv.classList.add("childDiv");
    childDiv.classList.add("hover");
    childDiv.style.height = `${tileSides}px`;
    childDiv.style.width = `${tileSides}px`;

    container.appendChild(childDiv);
  }
  let hoverColor = document.querySelectorAll(".hover");
  hoverColor.forEach((tileChild) => {
    tileChild.addEventListener("mouseenter", () => {
      let rColor = Math.floor(Math.random() * 255);
      let gColor = Math.floor(Math.random() * 255);
      let bColor = Math.floor(Math.random() * 255);
      console.log("IN");

      tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
    });

    tileChild.addEventListener("mouseleave", () => {
      console.log("OUT");
      tileChild.style.background = "white";
    });
  });
}

console.log(childDiv.classList.contains("hover"));
sidesPrompt.addEventListener("click", function () {
  let numSides = 0;
  do {
    numSides = +prompt("How many squares per side? Max of 100");
  } while (numSides >= 100);
  container.textContent = "";
  makeGrid(numSides);
});

hoverColor = document.querySelectorAll(".hover");
hoverColor.forEach((tileChild) => {
  tileChild.addEventListener("mouseenter", () => {
    let rColor = Math.floor(Math.random() * 255);
    let gColor = Math.floor(Math.random() * 255);
    let bColor = Math.floor(Math.random() * 255);
    console.log("IN");

    tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
  });

  tileChild.addEventListener("mouseleave", () => {
    console.log("OUT");
    tileChild.style.background = "white";
  });
});

function darkenColor() {
  switch (interaction) {
    case 1:
      colorRange = 229.5;
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
