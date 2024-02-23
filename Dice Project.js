
// rolling dice runction massed on value from HTML
function everydice(D) {
  document.getElementById(`D${D}output`).innerHTML =
    Math.floor(Math.random() * D) + 1;
}

// function for choice button with error checking min number 1 and max number 100
function choice() {
  let choicenumber = document.getElementById("choicenumber").value;
  if (choicenumber < 1 || choicenumber > 100) {
    document.getElementById("choiceoutput").innerHTML =
      "please Choose a number between 1 and 100";
  } else {
    document.getElementById("choiceoutput").innerHTML =
      Math.floor(
        Math.random() * document.getElementById("choicenumber").value
      ) + 1;
  }
}
