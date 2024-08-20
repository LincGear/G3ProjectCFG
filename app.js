// Add listner to the taroCard div that flips the card when clicked


let cards = document.querySelectorAll('.tarotCard');

[...cards].forEach((tarotCard)=>{
  tarotCard.addEventListener( 'click', function() {
    cards .forEach(a=>{
      a.classList.remove("flipped");
    })
    tarotCard.classList.add("flipped");
    
  });
});

//Using the id from the Onclick - select and show the text for the corresponding card


const cardMatch = {
  theFool: "textFool", theMagician: "textMagician", theLovers: "textLovers", theSun: "textSun", 
  theEmpress: "textEmpress", death: "textDeath", theWorld: "textWorld", theMoon: "textMoon", theDefault: "default"
}

let lastMatch = "default"

function cardPick (clicked_id){
let key = clicked_id;
let match = cardMatch[key];

document.getElementById(match).style.display = "block";
document.getElementById(lastMatch).style.display = "none";
document.querySelector('#nextPage').innerText = "Reset";
document.querySelector('#nextPage').addEventListener('click', refreshPage)
document.querySelector('#nextPage').href = "#"
lastMatch = match
}



// Reload the page with the reset button

const refreshBtn = document.querySelector('#nextPage');

const refreshPage = () => {
  location.reload();
}
