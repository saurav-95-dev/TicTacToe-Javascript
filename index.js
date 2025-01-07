let themeButton = document.getElementsByClassName("theme-btn");
let page = document.getElementsByClassName("page");
let col = document.getElementsByClassName("col");
let firstTurnX = document.getElementsByClassName("x")[0];
let firstTurnO = document.getElementsByClassName("o")[0];
let currentTurnText = document.getElementsByClassName("current-turn-text");


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
    
});

firstTurnX.addEventListener("click", () => {
    currentPlayer = "X";
    console.log("First turn set to X");
    currentTurnText[0].innerText = `${currentPlayer}`;
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

    // Update cell state and display
    arr[id] = currentPlayer;
    e.innerText = currentPlayer;

    // Switch to the next player
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 

    currentTurnText[0].innerText = `${currentPlayer}`;
    console.log(arr);
};
// Loop through each theme button :
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

//Winning logic :



