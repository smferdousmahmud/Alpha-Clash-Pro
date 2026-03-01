//First click
// function play(){
//     //Hide The home Screen. 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // Show the Playground.
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }

function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key ;
  //console.log(playerPressed);
  // stop the game if press esc
 if(playerPressed === 'Escape'){
   gameOver();
 }

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase()
    // console.log(playerPressed, expectedAlphabet);

  // check matched or not 
  if(playerPressed === expectedAlphabet){
    console.log('wow Ma Sha Allah ');
    console.log('you have pressed correctly', expectedAlphabet);
   //update score:
   //1 get the current score
      const currentAlphabetElement = document.getElementById('current-score');
      const currentScoreText = currentAlphabetElement.innerText ;
      const currentScore = parseInt(currentScoreText);
      console.log(currentScore);
   //2 increase the score by 1
      const newScore = currentScore + 1;
   //3 show the updated score 
   currentAlphabetElement.innerText = newScore ;
    //start a new round 
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you missed. you lost a life ');
    //1 get the current Life number 
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    //2 reduce life count 
    const newLife = currentLife - 1;
   //3 display the update life count 
     currentLifeElement.innerText = newLife;
   
    if(newLife === 0){
      gameOver() ;
    }
  }

}

//capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent );


function continueGame(){
 // S1 - Generate a random alphabet
  const alphabet = getARandomAlphabet();
    //  console.log('your random alphabet', alphabet);

  // set randomly generated alphabet to the screen (show it )
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;


  // set background color

  setBackgroundColorById(alphabet);
}

function play(){
  //hide everything show only the playground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
  // reset score and life 
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}
function gameOver(){
     hideElementById('play-ground');
     showElementById('final-score');
     // update final score 

     
     //1 get the final score
     const lastScore = getTextElementValueById('current-score');
     console.log(lastScore);
     setElementValueById( 'last-score', lastScore);

     // clear the last selected alphabet highlight 
     const currentAlphabet = getElementTextById('current-alphabet')
     console.log(currentAlphabet);
     removeBackgroundColorById(currentAlphabet);
}
