let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector("#newGame");

let turnO = true;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
          
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
   
});

resetBtn.addEventListener("click", ()=>{
    enableBoxClick();
})
newGameBtn.addEventListener("click", ()=>{
    enableBoxClick();
})

const enableBoxClick=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    turnO=true;
    msgContainer.classList.add("hide");
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    disabledBoxes();
    msgContainer.classList.remove('hide');
    msg.innerText=`Congratulations! Winner is ${winner}`;
}

const checkWinner = ()=>{
    for(let pattern of winningPattern){
        posVal1=boxes[pattern[0]].innerText;
        posVal2=boxes[pattern[1]].innerText;
        posVal3=boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                console.log("winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
}
