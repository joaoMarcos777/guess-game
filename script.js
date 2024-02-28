const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const inputNumber = document.querySelector("#inputNumber");

let randomNumber = 0;
let attempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keyup", handleResetKey);
inputNumber.addEventListener("keyup", validateInputNumber);

generateRandomNumber();

function generateRandomNumber() {
  randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
}

function handleTryClick(event) {
  event.preventDefault();
  const number = Number(inputNumber.value);

  if (number != "" && number != null && number != undefined) {
    if (number == randomNumber) {
      toggleScreen();
      screen2.querySelector("h2").innerHTML = `Got it in ${attempts} attempts.`;
    }

    clearInputNumber();
    attempts++;
  }
}

function handleResetClick(event) {
  event.preventDefault();

  toggleScreen();

  generateRandomNumber();
  attempts = 1;
}

function handleResetKey(event) {
  const containsHide = screen1.classList.contains("hide");
  if (event.key == "Enter" && containsHide) {
    handleResetClick(event);
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function clearInputNumber() {
  inputNumber.value = "";
}

function validateInputNumber() {
  const number = Number(inputNumber.value);
  if (number < 0 || number > 10) {
    alert("Please enter a valid number.");
    clearInputNumber();
  }
}
