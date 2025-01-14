let themeButton = document.getElementsByClassName("theme-btn");
let page = document.getElementsByClassName("page");
let col = document.getElementsByClassName("col");
let firstTurnX = document.getElementsByClassName("x")[0];
let firstTurnO = document.getElementsByClassName("o")[0];
let currentTurnText = document.getElementsByClassName("current-turn-text");
let pageId = document.getElementById("page-id");
let X = document.getElementById("X");
let XDisplay = document.getElementById("X-display");

console.log(firstTurnO);
console.log(firstTurnX);
console.log(page);
console.log(themeButton);

let currentPlayer = "X";

// Function to set first player
firstTurnO.addEventListener("click", () => {
    currentPlayer = "O";
    console.log("First turn set to O");
    currentTurnText[0].innerText = `${currentPlayer}`;
    XDisplay.innerText = `Hey ${currentPlayer} it's your turn !`;
    
});

firstTurnX.addEventListener("click", () => {
    currentPlayer = "X";
    console.log("First turn set to X");
    currentTurnText[0].innerText = `${currentPlayer}`;
    XDisplay.innerText = `Hey ${currentPlayer} it's your turn !`;

});

let arr = Array(9).fill(null);
console.log(arr);

let handleClick = (e) => {
    let id = e.id; // Get cell id
    console.log(id);

    // Prevent overwriting existing cell values
    if (arr[id] !== null) {
        alert("Cell already filled! Choose another.");
        return;
    }
    console.log(arr[id]);

    XDisplay.innerText = `Hey ${currentPlayer} your turn is over !`;
    // Update cell state and display
    arr[id] = currentPlayer;
    e.innerText = currentPlayer;

    

    // Switch to the next player
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 

    currentTurnText[0].innerText = `${currentPlayer}`;
    console.log(arr);

    //Implementing the winning logic for X:
    
    if ((arr[0] == "X" && arr[1] == "X" && arr[2] == "X") ||
        (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") ||
        (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") ||
        (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") ||
        (arr[2] == "X" && arr[4] == "X" && arr[6] == "X") ||
        (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") ||
        (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") ||
        (arr[2] == "X" && arr[5] == "X" && arr[8] == "X")
        
    ) {
        for (let i = 0; i < page.length; i++){
            page[i].innerHTML = "<h1>Game Over dear : O<h1/>(Better luck next time)<br><br>Congratulation to --> X !";
            page[i].style.marginTop = "60px";
            page[i].style.color = "red";
            //Better DOM Technique , (Implementing Play Again Button via document.createElement):
            let playAgainButton = document.createElement("button");
            playAgainButton.className = "play-again-btn";
            playAgainButton.textContent = "Play Again";
            //Styling Play again button:
            playAgainButton.style.padding = "10px";
            playAgainButton.style.marginTop = "40px";
            playAgainButton.style.background = "#7CFC00";
            playAgainButton.style.border = "none";
            playAgainButton.style.borderRadius = "8px";
            page[i].appendChild(playAgainButton);
            
            //Reload the page on the click of "Play again" button:
            playAgainButton.addEventListener("click", () => {
                window.location.reload();
            });
            
        }
   
    }
    //Implementing the winning logic for O:
    else if ((arr[0] == "O" && arr[1] == "O" && arr[2] == "O") ||
    (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") ||
    (arr[6] == "O" && arr[7] == "O" && arr[8] == "O") ||
    (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") ||
    (arr[2] == "O" && arr[4] == "O" && arr[6] == "O") ||
    (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") ||
    (arr[1] == "O" && arr[4] == "O" && arr[7] == "O") ||
    (arr[2] == "O" && arr[5] == "O" && arr[8] == "O")
    ) {
        for (let i = 0; i < page.length; i++){
            page[i].innerHTML = "<h1>Game Over dear : X<h1/>(Better luck next time)<br><br>Congratulation to --> O !";
            page[i].style.marginTop = "60px";
            page[i].style.color = "red";
            let playAgainButton = document.createElement("button");
            playAgainButton.className = "play-again-btn";
            playAgainButton.textContent = "Play Again";
            playAgainButton.style.padding = "10px";
            playAgainButton.style.marginTop = "40px";
            playAgainButton.style.background = "#7CFC00";
            playAgainButton.style.border = "none";
            playAgainButton.style.borderRadius = "8px";
            page[i].appendChild(playAgainButton);
            playAgainButton.addEventListener("click", () => {
                window.location.reload();
            });
        }
    
    }
    else {
        if (! arr.some((e)=>{return e===null} )) {
            for (let i = 0; i < page.length; i++){
                page[i].innerHTML = "<h1>HAA HAA ..Game draw<h1/>";
                page[i].style.marginTop = "60px";
                page[i].style.color = "blue";
                let playAgainButton = document.createElement("button");
                playAgainButton.className = "play-again-btn";
                playAgainButton.textContent = "Play Again";
                playAgainButton.style.padding = "10px";
                playAgainButton.style.marginTop = "40px";
                playAgainButton.style.background = "#7CFC00";
                playAgainButton.style.border = "none";
                playAgainButton.style.borderRadius = "8px"; 
                page[i].appendChild(playAgainButton);
                playAgainButton.addEventListener("click", () => {
                window.location.reload();
            });
            }
           
       }
    }

};
// Loop through each theme button :
//Implementing theme button UI appearnace:
for (let i = 0; i < themeButton.length; i++) {
    themeButton[i].addEventListener("click", () => {
        // Loop through each page element
        for (let j = 0; j < page.length; j++) {
            if (page[j].style.background === "white" || page[j].style.background === "") {
                page[j].style.background = "#303030";
                page[j].style.color = "white";
                for (let i = 0; i < col.length; i++){
                    col[i].style.color = "black";
                }
                for (let i = 0; themeButton.length; i++){
                    themeButton[i].style.background = "yellow";
                    themeButton[i].style.color = "red";
                }
               
            } else {
                page[j].style.background = "white";
                page[j].style.color = "black";
                for (let i = 0; themeButton.length; i++){
                    themeButton[i].style.background = "#303030";
                    themeButton[i].style.color = "white";
                }
                
            }
        }
    });
}

