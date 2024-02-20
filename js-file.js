const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");

for (let i = 0; i < 256; i++) {
  let childDiv = document.createElement("div");
  childDiv.classList.add("childDiv");
  container.appendChild(childDiv);
}

function makeGrid(number) {
  const tileSides = 960 / number;
  for (let i = 0; i < number * number; i++) {
    childDiv = document.createElement("div");
    childDiv.classList.add("childDiv");
    childDiv.style.height = `${tileSides}px`;
    childDiv.style.width = `${tileSides}px`;

    container.appendChild(childDiv);
  }
}

sidesPrompt.addEventListener("click", function () {
  let numSides = 0;
  do {
    numSides = +prompt("How many squares per side? Max of 100");
  } while (numSides >= 100);
  container.textContent = "";
  makeGrid(numSides);
});
