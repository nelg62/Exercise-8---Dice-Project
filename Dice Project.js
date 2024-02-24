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

const diceobjects = [4, 6, 8, 10, 12, 20]


diceobjects.foreach((diceobjects) => {
    document.getElementById('diceouterbox').innerHTML += `<div class="dicecontainer">
<div class="dice">
      <button
        class="dicebtn"
        id="D${diceobjects}"
        onclick="everydice(this.value)"
        value="${diceobjects}"></button>
    </div>
    
    <div class="diceoutput">
      <h1 class="diceoutputtxt" id="D${diceobjects}output"></h1>
    </div>
  </div>`
})