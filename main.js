document.addEventListener("DOMContentLoaded", () => {
    createSquares();

    let guessedWords = [[]];
    let availableSpace = 1;
    let answer = 'cong';

    const keys = document.querySelectorAll('.keyboard-row button')

    for(let i=0;i<keys.length;i++){
        keys[i].onclick = ({target}) => {
            const letter = target.getAttribute("data-key");

            if(letter==='enter'){
                handleSubmitword();
                return;
            }

            updateGuessedwords(letter);
        };
    }

    function getCurrentWordArr(){
        const numberOfGuessedWords = guessedWords.length;
        return guessedWords[numberOfGuessedWords - 1];
    }

    function updateGuessedwords(letter){
        const currentWordArr = getCurrentWordArr();

        if(currentWordArr && currentWordArr.length < 4){
            currentWordArr.push(letter);
            const availableSpaceEl = document.getElementById(String(availableSpace));
            availableSpace++;
            availableSpaceEl.textContent = letter;
        }
    }

    function handleSubmitword(){
        const currentWordArr = getCurrentWordArr();

        if(currentWordArr.length !==4){
            window.alert("Word must be 4 letters!");
        }

        const currentWord = currentWordArr.join('');

        if(currentWord==answer){
            window.alert("Good job!");
        }

        if(guessedWords.length === 6){
            window.alert(`You lost :( The word was ${answer}`);
        }
        guessedWords.push([]);
        availableSpace++;
    }

    function createSquares(){
        const gameBoard = document.getElementById("board")

        for(let index = 0; index < 24; index++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index+1);
            gameBoard.appendChild(square);
        }
    }

});