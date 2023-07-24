let word = document.getElementById("input-txt");
const btn = document.getElementById("search");
let displayPara = document.getElementById("display");
const clearBtn = document.getElementById("clear");
let base = "https://dictionary-by-api-ninjas.p.rapidapi.com";

function displayFun() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a215226e50msh74e3e8de67e23fep1238f2jsnd51289db1eb3",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(`${base}/v1/dictionary?word=${word.value}`, options)
    .then((response) => response.json())
    .then((response) => (displayPara.innerHTML = response.definition))
    .catch((err) => console.error(err));
}

function ClearFun() {
  word.value = "";
  displayPara.innerHTML = "";
}
btn.addEventListener("click", displayFun);
