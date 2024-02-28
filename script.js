let randomNumber = 0;
let attempts = 1;

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

function generateRandomNumber() {
  randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
}

generateRandomNumber();

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  console.log(randomNumber);

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    screen2.querySelector("h2").innerHTML = `Got it in ${attempts} attempts.`;
  }

  inputNumber.value = "";
  attempts++;
}

function handleResetClick(event) {
  event.preventDefault();

  screen1.classList.remove("hide");
  screen2.classList.add("hide");

  generateRandomNumber();
  attempts = 1;
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
