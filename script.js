//your code here
const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const result = document.getElementById("para");

const classes = ["img1", "img2", "img3", "img4", "img5"];

let selected = [];
let tiles = [];

// shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function init() {
  container.innerHTML = "";
  selected = [];
  result.textContent = "";

  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";

  // pick duplicate
  const duplicate = classes[Math.floor(Math.random() * classes.length)];
  tiles = [...classes, duplicate];

  shuffle(tiles);

  tiles.forEach((cls, index) => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.dataset.class = cls;

    img.addEventListener("click", handleClick);

    container.appendChild(img);
  });
}

function handleClick(e) {
  const img = e.target;

  if (selected.length >= 2) return;
  if (selected.includes(img)) return;

  img.classList.add("selected");
  selected.push(img);

  resetBtn.style.display = "inline";

  if (selected.length === 2) {
    verifyBtn.style.display = "inline";
  }
}

resetBtn.addEventListener("click", init);

verifyBtn.addEventListener("click", () => {
  const val1 = selected[0].dataset.class;
  const val2 = selected[1].dataset.class;

  if (val1 === val2) {
    result.textContent = "You are a human. Congratulations!";
  } else {
    result.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verifyBtn.style.display = "none";
});

init();