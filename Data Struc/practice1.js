const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
printGoals: function(...playerNames){
    console.log('Total goal:',playerNames.length);
    for(let i=0; i<playerNames.length; i++){
        console.log(playerNames[i]);
    }
},
};

const [player1,player2] = game.players;
//console.log(player1,player2);

const [gk, ...otherPlayer] = player1;
//console.log(gk,otherPlayer);

const allPlayers = [...player1, ...player2];
//console.log(allPlayers);

const {odds:{team1, x: draw, team2}} = game;

const finalPlayers1 = ['fg','fg','fgf', ...player1];
//console.log(finalPlayers1);
//game.printGoals(...game.scored);

game.team1<game.team2 || console.log('win team 1');


//const goal = Object.entries(game.scored);
for(const [goal,playerName] of game.scored.entries()){

    const str = `Goal ${goal + 1}: ${playerName}`;
    console.log(str);
}
let sum = 0;
for(const ava of Object.values(game.odds)){
   
    sum+=ava;
}
    const avarage = sum/Object.values(game.odds).length;
    console.log(avarage);

    const newGame = Object.entries(game);
    //console.log(newGame);

for(const [key, value] of Object.entries(game.odds)){
    const teamStr = key === `x`? `draw`: `${game[key]}`;
    const str = `Odds of victory ${teamStr}: ${value}`;
    console.log(str);
}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

