const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");

function makeGrid(number) {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.classList.add("childDiv");
    container.appendChild(div);
    const tileSides = 1000 / number;
    childDiv.style.width = tileSides;
    childDiv.style.height = tileSides;
  }
}

sidesPrompt.addEventListener("click", function () {
  const numSides = +prompt("How many squares per side? Max of 100");
  makeGrid(numSides);
});
