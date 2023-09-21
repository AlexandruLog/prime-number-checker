const inputValue = document.getElementById("inputValue");
const checkBtn = document.getElementById("submitBtn");
const textResult = document.querySelector(".final-verdict");

checkBtn.addEventListener("click", check);

addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    check();
  }
});

function check() {
  let number = inputValue.value;
  let isPrime = true;
  if (number > 1) {
    for (let divisor = 2; divisor < number; ++divisor) {
      if (number % divisor == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      textResult.innerHTML = number + " is prime.";
    } else {
      textResult.innerHTML = number + " is NOT prime.";
    }
  } else {
    textResult.innerHTML = number + " is NOT prime.";
  }
  inputValue.value = null;
}
