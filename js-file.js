const body = document.querySelector("body");

const container = document.createElement("div");
container.classList("container");
body.appendChild(container);

for (let i = 0; i <= 256; i++) {
  const div = document.createElement(div);
  div.classList("childDiv");
  container.appendChild(div);
}
