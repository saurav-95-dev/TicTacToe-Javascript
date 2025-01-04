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
