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

const diceobjects = [4,6,8,10,12,20]



for (let i = 0; i < diceobjects.length; i++) {
  document.getElementById('diceouterbox').innerHTML += `<div>TESt</div>`
  
  
  
  
  
  
  
  
  
  // let newdice = document.createElement('div');
  // let newdice2 = document.createElement('div');
  // let newdice3 = document.createElement('button');
  // let newdice4 = document.createElement('div')
  // let newdice5 = document.createElement('h1')
  // newdice.className = 'dicecontainer';
  // newdice2.className = 'dice';
  // newdice2.id = `dice${diceobjects[i]}`
  // newdice3.className = 'dicebtn';
  // newdice3.id = `D${diceobjects[i]}`
  // newdice3.value = `${diceobjects[i]}`
  // newdice4.className = 'diceoutput'
  // newdice4.id = `diceoutput${diceobjects[i]}`
  // newdice5.className = 'diceoutputtxt'
  // newdice5.id = `D${diceobjects[i]}output`
  // document.getElementById('diceouterbox').appendChild(newdice);
  // document.getElementById('diceouterbox').appendChild(newdice2);
  // document.getElementById(`dice${diceobjects[i]}`).appendChild(newdice3);
  // document.getElementById('diceouterbox').appendChild(newdice4);
  // document.getElementById(`diceoutput${diceobjects[i]}`).appendChild(newdice5);
}


