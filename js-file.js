const container = document.querySelector(".container");
const sidesPrompt = document.querySelector(".numPrompt");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("childDiv");
  container.appendChild(div);
}
