const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");

function makeGrid(number) {
  for (let i = 0; i < number * number; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("childDiv");
    container.appendChild(childDiv);
    const tileSides = Math.round(1000 / (number * number));
    childDiv.style.width = tileSides + "px";
  }
}

sidesPrompt.addEventListener("click", function () {
  const numSides = +prompt("How many squares per side? Max of 100");
  makeGrid(numSides);
});
