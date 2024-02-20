const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");

let childDiv = document.createElement("div");

for (let i = 0; i < 256; i++) {
  childDiv = document.createElement("div");
  childDiv.classList.add("childDiv");
  childDiv.classList.add("hover");
  container.appendChild(childDiv);
}
const hoverColor = document.querySelectorAll(".hover");
/*function makeGrid(number) {
  const tileSides = 960 / number;
  for (let i = 0; i < number * number; i++) {
    childDiv = document.createElement("div");
    childDiv.classList.add("childDiv");
    childDiv.classList.add("hover");
    childDiv.style.height = `${tileSides}px`;
    childDiv.style.width = `${tileSides}px`;

    container.appendChild(childDiv);
  }
}*/
console.log(childDiv.classList.contains("hover"));
sidesPrompt.addEventListener("click", function () {
  let numSides = 0;
  do {
    numSides = +prompt("How many squares per side? Max of 100");
  } while (numSides >= 100);
  container.textContent = "";
  makeGrid(numSides);
});

hoverColor.forEach((tileChild) => {
  tileChild.addEventListener("mouseenter", () => {
    let rColor = Math.floor(Math.random() * 255);
    let gColor = Math.floor(Math.random() * 255);
    let bColor = Math.floor(Math.random() * 255);
    // let randomColor = Math.floor(Math.random() * 255);
    console.log("Enter");
    tileChild.style.background = `rgb(${rColor}, ${gColor}, ${bColor})`;
  });

  tileChild.addEventListener("mouseleave", () => {
    console.log("Out");
    tileChild.style.background = "white";
  });
});
/*
hoverColor.addEventListener("mouseenter", function () {
  // let randomColor = Math.floor(Math.random() * 255);
  hoverColor.style.background = "black"; //`rgb(${randomColor}, ${randomColor}, ${randomColor})`;
});

hoverColor.addEventListener("mouseleave", function () {
  hoverColor.style.background = "white";
});

for (let i = 0; i <= hoverColor.length; i++) {
  hoverColor[i].addEventListener("mouseenter", function () {
    // let randomColor = Math.floor(Math.random() * 255);
    hoverColor[i].style.background = "black"; //`rgb(${randomColor}, ${randomColor}, ${randomColor})`;
  });

  hoverColor[i].addEventListener("mouseleave", function () {
    hoverColor[i].style.background = "white";
  });
}*/
