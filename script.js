const idEl = document.querySelector("#id");
const adviceEl = document.querySelector("#advice");
const btnEl = document.querySelector("#btn");

async function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      idEl.textContent = res.slip.id;
      adviceEl.textContent = res.slip.advice;
    });
}

btnEl.addEventListener("click", fetchAdvice);

fetchAdvice();
