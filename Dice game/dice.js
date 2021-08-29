'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const totalScoreP1 = document.querySelector('#score--0');
const totalScoreP2 = document.querySelector('#score--1');
const currentScoreP1 = document.querySelector('#current--0');
const currentScoreP2 = document.querySelector('#current--1');
const diceImage = document.querySelector('.dice');

const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');



let score = [0,0];
let currentScore;
let activePlayer;
let playing;
 //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
const init = function(){
   
    score[0] = 0;
    score[1] = 0;
    currentScore = 0;
    activePlayer =0;
    playing = true;

    diceImage.classList.add('hidden');  
    totalScoreP1.textContent = 0;
    totalScoreP2.textContent =0;
    currentScoreP1.textContent = 0;
    currentScoreP2.textContent = 0;
    diceImage.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    
};

 init();

const switchPlayer = function(){
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

};

btnRollDice.addEventListener('click',function(){
    if(playing){
    const diceNumber = Math.trunc(Math.random()*6) + 1;

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceNumber}.png`;
    
    if(diceNumber !== 1 ){
    currentScore+=diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
    else{
       switchPlayer();
    }
}
});

 btnHold.addEventListener('click',function(){
     if(playing){
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer] ;
    if(score[activePlayer] >= 100){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceImage.classList.add('hidden');
    }
    else{
    switchPlayer();
    }
}
});

 btnNewGame.addEventListener('click',init);
