
let screetNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
function(){
    const inputNumber = Number(document.querySelector('.guess').value);
    if(!inputNumber){
        displayMessage('No number input yet!');
    }
   else if(screetNumber == inputNumber){
      document.querySelector('.number').textContent = screetNumber;
      displayMessage('Correct Answer!');
      document.querySelector('.score').textContent = score;
      if(score > highScore){
          highScore = score;
          document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('body').style.backgroundColor = 'green';  
    }

    else if(screetNumber != inputNumber){
        if(score > 1){
            displayMessage((screetNumber>inputNumber)? 'Too low!'
        : 'Too high!');
         score--;
        document.querySelector('.score').textContent = score; 
        }
        else{
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

 document.querySelector('.again').addEventListener('click',
 function(){
    score = 20;
    screetNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';



 });

 