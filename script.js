let correctDoorIndex = Math.floor(1 + Math.random() * 3);
const door1 = document.querySelector(".door1");
const door2 = document.querySelector(".door2");
const door3 = document.querySelector(".door3");
const doors = document.querySelectorAll(".door");
const label = document.querySelector(".label");
let restartButton;
let guessedFirst = false;
function firstGuess(i) {
  if (guessedFirst) {
    return;
  }
  guessedFirst = true;
  label.innerText = "you may switch your answer or stick with it";
  let index = i;
  while (index == correctDoorIndex || index == i) {
    index = Math.floor(1 + Math.random() * 3);
  }
  openDoor(index);
}

function secondGuess(i) {
  if (!guessedFirst) {
    return;
  }
  if (i === correctDoorIndex) {
    label.innerText = "Winner!";
  } else {
    label.innerText = "L bozo";
  }
  for (let i = 0; i < doors.length; i++) {
    const b = doors[i];
    b.disabled = true;
    b.classList.add("open");
    b.classList.remove("closed");
    if (i + 1 === correctDoorIndex) {
      b.innerHTML = `<img src="images/Car.png" alt="car" />`;
    } else {
      b.innerHTML = `<img src="images/goat.jpg" alt="goat" />`;
    }
  }
  restartButton = document.createElement("button");
  restartButton.innerText = "Play again?";
  restartButton.classList.add("restart-button");
  restartButton.addEventListener("click", restart);
  document.body.appendChild(restartButton);
  correctDoorIndex = Math.floor(1 + Math.random() * 3);
}

function openDoor(index) {
  doors[index - 1].disabled = true;
  doors[index - 1].classList.add("open");
  doors[index - 1].classList.remove("closed");
  doors[index - 1].innerHTML = `<img src="images/goat.jpg" alt="goat" />`;
}

function restart() {
  for (let i = 0; i < doors.length; i++) {
    const d = doors[i];
    d.classList.remove("open");
    d.classList.add("closed");
    d.innerHTML = i + 1;
    d.disabled = false;
  }
  guessedFirst = false;
  document.body.removeChild(restartButton);
  label.innerText = "Pick a door";
}

door1.addEventListener("click", () => {
  secondGuess(1);
  firstGuess(1);
});
door2.addEventListener("click", () => {
  secondGuess(2);
  firstGuess(2);
});
door3.addEventListener("click", () => {
  secondGuess(3);
  firstGuess(3);
});
