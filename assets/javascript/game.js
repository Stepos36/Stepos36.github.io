//Random word gets picked from an existing array 
var words = [   {   wordSign: 'LOST(2004-2010)',
                    wordName: 'LOST',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Dexter(2006-2013',
                    wordName: 'Dexter',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Breaking Bad(2008-2013)',
                    wordName: 'Breaking_bad',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Big bang theory(2007-present)',
                    wordName: 'Big_bang_theory',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Scrubs(2001-2010',
                    wordName: 'Scrubs',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Westworld(2016-present)',
                    wordName: 'Westworld',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Game of thrones(2011-present)',
                    wordName: 'Game_of_thrones',
                    wordPicture: 'assets/images/got.jpg',
                    wordMusic: '',
                },
                {   wordSign: 'Sons of anarchy(2008-2014',
                    wordName: 'Sons_of_anarchy',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'Friends(1994-2004)',
                    wordName: 'Friends',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
                {   wordSign: 'American Horror Story(2011-present)',
                    wordName: 'American_Horror_Story',
                    wordPicture: 'assets/images/',
                    wordMusic: '',
                },
            ]
var randNum;
var unknownWord;
var chosenWord;
var underScore = [];
var rightWord = [];
var wrongWord = [];
var remainingLetters;
var remainingGuesses;
var objUnderScore = document.getElementsByClassName("underscore");
var objWrongWord = document.getElementsByClassName("wrongletters");
var objGuessesLeft = document.getElementsByClassName("guessesleft");
var objWins = document.getElementsByClassName("wins");
var objImage = document.getElementsByClassName("show")
var objNext = document.getElementsByClassName("nextword")

var wins = 0;

newGame();
document.getElementsByClassName('show').src = "assets/images/got.jpg"
console.log(objImage.src)

//Pick up the key user pressed
document.addEventListener('keypress', function(event) {
    var keyWord = event.key;
    console.log(keyWord)
 //Compare the key user pressed with the word we have
    for (var j=0; j<chosenWord.length;j++) {
        if (chosenWord[j] === keyWord) {
            if (keyWord !== underScore[j]) {
                rightWord.push(keyWord);
                remainingLetters--;
            }
            //Replace the underscore with the right key
            underScore[j] = keyWord
            objUnderScore[0].innerHTML = underScore.join(' ').toUpperCase();
        }
    }
    //If the same letter is guessed
    if (wrongWord.includes(keyWord)) {
        alert('You already guessed that!')
    }
    else if (underScore.includes(keyWord)) {
    }
    //If entered letter is wrong - it goes to the wrongWord array and we lose an attempt
    else {
       wrongWord.push(keyWord);
       remainingGuesses--;
       objWrongWord[0].innerHTML = wrongWord.join(' ').toUpperCase();
       objGuessesLeft[0].innerHTML = remainingGuesses;
       if (remainingGuesses === 0) {
            alert("You Lost! Try again! The word was: " + chosenWord.toUpperCase());
            objNext[0].innerHTML = ('Restart') 
            objNext[0].addEventListener("click", function nextLevel() {
            newGame()
            objUnderScore[0].innerHTML = underScore.join(' ');
            objGuessesLeft[0].innerHTML = remainingGuesses;
            objWrongWord[0].innerHTML = ('none');
            objWins[0].innerHTML = ('---');
            wins = 0
            }) ;
       }
    }
    if (underScore.join('') === chosenWord) {
       alert("You won!");
       wins++;
       console.log(objImage.src)
       image(unknownWord.wordPicture)
       console.log(objImage.src)
       objWins[0].innerHTML = wins; 
       objNext[0].innerHTML = ('Next word!'); 
       objNext[0].addEventListener("click", function nextLevel() {
            newGame();
            objUnderScore[0].innerHTML = underScore.join(' ');
            objGuessesLeft[0].innerHTML = remainingGuesses;
            objWrongWord[0].innerHTML = ('none');
            objNext[0].innerHTML = ('');
    })
    }
 }) 


//Add the wrong letter to the wrong letter section

function newGame() {
    randNum = Math.floor(Math.random() * words.length);
    unknownWord = words[randNum];
    chosenWord = unknownWord.wordName.toLowerCase();
    console.log(chosenWord)
    remainingGuesses = 8;
    remainingLetters = chosenWord.length;
    underScore = [];
    rightWord = [];
    wrongWord = [];
    function generateUnderscores() {
        for (var i=0; i<chosenWord.length;i++) {
            underScore[i] = "_"
        }
        return underScore;
    }
    generateUnderscores()
}
function image(picPath) {
    objImage.src = picPath;
}



