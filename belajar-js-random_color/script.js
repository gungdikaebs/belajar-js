const btnAcak = document.querySelector("#btn-acak");
const warnaBackground = document.body;

btnAcak.onclick = function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r, g, b);
  warnaBackground.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

const range = document.querySelectorAll("input");
for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    warnaBackground.style.backgroundColor =
      "rgb(" + r + "," + g + "," + b + ")";
  });
}
