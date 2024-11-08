// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset");
// let msgContainer = document.querySelector('.msg-container');
// let msg = document.querySelector('#msg');
// let newGameBtn = document.querySelector("#newGame");

// let turnO = true;

// const winningPattern = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];



// boxes.forEach(box =>{
//     box.addEventListener("click", ()=>{
//         if(turnO){
//             box.innerText="O";
//             turnO=false;
          
//         }
//         else{
//             box.innerText="X";
//             turnO=true;
//         }
//         box.disabled=true;
//         checkWinner();
//     })
   
// });

// resetBtn.addEventListener("click", ()=>{
//     enableBoxClick();
// })
// newGameBtn.addEventListener("click", ()=>{
//     enableBoxClick();
// })

// const enableBoxClick=()=>{
//     for(let box of boxes){
//         box.innerText="";
//         box.disabled=false;
//     }
//     turnO=true;
//     msgContainer.classList.add("hide");
// }
// const disabledBoxes=()=>{
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }

// const showWinner=(winner)=>{
//     disabledBoxes();
//     msgContainer.classList.remove('hide');
//     msg.innerText=`Congratulations! Winner is ${winner}`;
// }

// const checkWinner = ()=>{
//     for(let pattern of winningPattern){
//         posVal1=boxes[pattern[0]].innerText;
//         posVal2=boxes[pattern[1]].innerText;
//         posVal3=boxes[pattern[2]].innerText;

//         if(posVal1!="" && posVal2!="" && posVal3!=""){
//             if(posVal1==posVal2 && posVal2==posVal3){
//                 console.log("winner",posVal1);
//                 showWinner(posVal1);
//             }
//         }
//     }
// }


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector("#newGame");

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        box.disabled = true;
        turnO = !turnO; // Switch turns
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    startNewGame();
});
newGameBtn.addEventListener("click", () => {
    startNewGame();
});

const startNewGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};

const disableAllBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    disableAllBoxes();
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations! Winner is ${winner}`;
};

const checkWinner = () => {
    let winnerFound = false;
    
    for (let pattern of winningPattern) {
        const [a, b, c] = pattern;
        const posVal1 = boxes[a].innerText;
        const posVal2 = boxes[b].innerText;
        const posVal3 = boxes[c].innerText;

        // Check if all positions in the pattern are non-empty and have the same value
        if (posVal1 && posVal1 === posVal2 && posVal2 === posVal3) {
            showWinner(posVal1); // Show the winner
            winnerFound = true;
            break; // Exit loop as we have a winner
        }
    }

    // If no winner is found and all boxes are filled, declare a draw
    if (!winnerFound && checkDraw()) {
        msgContainer.classList.remove("hide");
        msg.innerText = "It's a Draw!";
    }
};

// Function to check if all boxes are filled (for draw condition)
const checkDraw = () => {
    return Array.from(boxes).every(box => box.innerText !== "");
};
