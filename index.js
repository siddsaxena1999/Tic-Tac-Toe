let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let winnerMsg = document.querySelector("#winner-msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        if (turnO == true) {
            box.style.color = "#D7263D";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "#02182B";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            winnerMsg.innerText = "The game was a draw";
            msg.style.display = "flex";
        }
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return true;
            }
        }
    }
};

const showWinner = (winner) => {
    winnerMsg.innerText = `Winner is ${winner}`;
    msg.style.display = "flex";
}

resetBtn.addEventListener("click", () => {
    turnO = true;
    count = 0;
    boxes.forEach((val) => {
        val.innerText = "";
        val.disabled = false;
    })
});

newGameBtn.addEventListener("click", ()=> {
    turnO = true;
    count = 0;
    boxes.forEach((val) => {
        val.innerText = "";
        val.disabled = false;
    })
    msg.style.display = "none";
});