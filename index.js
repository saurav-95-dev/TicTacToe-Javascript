let themeButton = document.getElementsByClassName("theme-btn");
let page = document.getElementsByClassName("page");
let col = document.getElementsByClassName("col");
console.log(page);
console.log(themeButton);

let currentPlayer = "X";

let arr = Array(9).fill(null);
console.log(arr);
let handleClick = (e) => {
    let id = e.id;
    console.log(id);
    arr[id] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "0" : "X"; 
    console.log(arr);
    e.innerText = currentPlayer;

}
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


