let adviceId = document.querySelector("#advice-id");
let adviceText = document.querySelector("#advice-text");
let generateButton = document.querySelector("#generateButton");

let baseUrl = "https://api.adviceslip.com/advice";

let generateAdvice = async () => {
  try {
    const response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    adviceId.innerText = `#${data.slip.id}`;
    adviceText.innerText = `"${data.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
};

generateButton.addEventListener("click", generateAdvice);
