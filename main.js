// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
   catcher(0.7, 0.9, 0.95);
  } else if (character === 'alex') {
    catcher(0.1, 0.2, 0.5);
  } else if (character ==='villager'){
    catcher(0.25,0.50,0.75)
  }
}

function catcher(cod,salmon,tropical) {
   let randNum = Math.random();
   if (randNum < cod) {
     numCod++;
   numCodSpan.innerHTML = numCod;
    resultImg.src = 'img/Raw-Cod.png';
  } else if (randNum < salmon) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    resultImg.src = 'img/Raw-Salmon.png';
  } else if (randNum < tropical ) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = 'img/Tropical-Fish.png';
  } else { 
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = 'img/Pufferfish.png';
  }
}