// Stegen - Computational Thinking Games
// let play = true;

// while(play) {
//     console.clear();
//     let goal = 1;
//     let nmbrOfThrows = 0;

//     while(goal < 7) {
//         let dice = Math.floor(Math.random() * 6 + 1);
//         nmbrOfThrows++;
//         console.log(dice);
//         if(dice === goal) {
//             goal++;
//             console.log('Snyggt!');
//         }
//     }
//     console.log(`Grattis! Du fick stege på ${nmbrOfThrows} kast!`);
//     play = confirm('Spela igen?');
// }

// Knockout - Computational Thinking Games
// let knockoutNmbr = parseInt(prompt('Vänligen ange ett knockoutnumber (6-9)'));
// let goal = parseInt(prompt('Vänligen ange målpoängen (min 25)'));
// let sum = 0;

// while(sum < goal) {
//     let dice1 = Math.floor(Math.random() * 6 + 1);
//     let dice2 = Math.floor(Math.random() * 6 + 1);
//     let result = dice1 + dice2;

//     if(result === knockoutNmbr) {
//         sum -= result;
//         console.log(`Attans också! Du kastade ${result}. Du har nu ${sum} poäng!`);
//     } else {
//         sum += result;
//         console.log(`Kanonkul! Du kastade ${result}. Du har nu ${sum} poäng!`);
//     }
// }

// console.log('Snyggt! Du vann!');

// Going to Boston - Computational Thinking Games
// let sum = 0;

// let dice1 = Math.floor(Math.random() * 6 + 1);
// let dice2 = Math.floor(Math.random() * 6 + 1);
// let dice3 = Math.floor(Math.random() * 6 + 1);

// let highest = dice1;
// if(dice2 > highest) {
//     highest = dice2;
// } else if(dice3 > highest) {
//     highest = dice3;
// }
// sum = highest;

// dice1 = Math.floor(Math.random() * 6 + 1);
// dice2 = Math.floor(Math.random() * 6 + 1);
// highest = dice1;

// if(dice2 > highest) {
//     highest = dice2;
// }

// sum += highest;
// sum += Math.floor(Math.random() * 6 + 1);

// console.log(`Ditt resultat blev ${sum}`);

// Sten, sax, påse - Computational Thinking Games
// let choices = ['Sten', 'Sax', 'Påse'];
// let playerScore = 0;
// let computerScore = 0;
// let winningScore = 3;

// while(playerScore < winningScore && computerScore < winningScore) {
//     let playerHand = prompt('Ange ditt val (Sten, sax eller påse)');
//     let computerHand = choices[Math.floor(Math.random() * choices.length)];

//     if(playerHand === 'Sten') {
//         if(computerHand === 'Sten') {
//             console.log('Oavgjort!');
//         } else if(computerHand === 'Sax') {
//             console.log('Snyggt! Du fick poängen');
//             playerScore++;
//         } else {
//             console.log('Fan också! Det tog datorn!');
//             computerScore++;
//         }
//     } else if(playerHand === 'Sax') {
//         if(computerHand === 'Sten') {
//             console.log('Fan också! Det tog datorn!');
//             computerScore++;
//         } else if(computerHand === 'Sax') {
//             console.log('Oavgjort!');
//         } else {
//             console.log('Snyggt! Du fick poängen');
//             playerScore++;
//         }
//     } else if(playerHand === 'Påse') {
//         if(computerHand === 'Sten') {
//             console.log('Snyggt! Du fick poängen');
//             playerScore++;
//         } else if(computerHand === 'Sax') {
//             console.log('Fan också! Det tog datorn!');
//             computerScore++;
//         } else {
//             console.log('Oavgjort!');
//         }
//     }
// }

// if(playerScore === 3) {
//     console.log('Grattis du vann!');
// } else {
//     console.log('Bättre lycka nästa gång!');
// }


// FizzBuzz - Computational Thinking Games
// for(let i = 1; i <= 100; i++ ) {
//     console.log(i);
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else {
//         if(i % 3 === 0) {
//             console.log('Fizz');
//         } else if(i % 5 === 0){
//             console.log('Buzz');
//         }
//     }
// }

// Högt eller lågt - Computational Thinking Games
// let secretNmbr = Math.floor(Math.random() * 100 + 1);
// let guess;
// let guesses = 0;

// while(guess !== secretNmbr) {
//     guess = parseInt(prompt('Ange ett nummer (1-100)'));

//     if(guess < secretNmbr) {
//         console.log('För lågt, gissa igen!');
//     } else if (guess > secretNmbr) {
//         console.log('För högt, gissa igen!');
//     }
//     guesses++;
// }
// console.log(`Snyggt! Du gissade rätt på ${guesses} försök! Det hemliga ordet var ${secretNmbr}`);


// Söka efter likheter mellan ord - Computational Thinking Games
let word1 = prompt('Ange ett ord');
let word2 = prompt('Ange ett ord till');
let similarities = 0;

if(word1.length > word2.length) {
    let temp = word1;
    word1 = word2;
    word2 = temp;
}

for(let i = 0; i < word1.length; i++) {
    if(word1[i] === word2[i]) {
        similarities++;
    }
}

console.log(`${word1} och ${word2} har ${similarities} likheter`);