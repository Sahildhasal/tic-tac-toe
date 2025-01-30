let div = document.getElementsByClassName("box")


const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let isX = true;
let isWinnerDeclared = false;
let xCount = 0;
let oCount = 0;

document.querySelectorAll(".box").forEach(child => {
    child.addEventListener("click", function handler(event) {
        if(!isWinnerDeclared){
            if(isX){
                child.innerHTML = "X";
                isX = false;
            }
            else {
                child.innerHTML = "O";
                isX = true;
            }
            event.target.removeEventListener("click", handler)
            checkWinner();
        }
    })
});

function checkWinner() {
    winningPatterns.forEach(individualPattern => {
        const firstValue = div[individualPattern[0]];
        const secondValue = div[individualPattern[1]];
        const thirdValue = div[individualPattern[2]];

        if(firstValue !== "" && secondValue !== "" && thirdValue != ""){
            if((firstValue.innerHTML === 'X' && secondValue.innerHTML === "X" && thirdValue.innerHTML === "X") || (firstValue.innerHTML === 'O' && secondValue.innerHTML === "O" && thirdValue.innerHTML === "O")){
                isWinnerDeclared = true;
                let para = document.getElementById("winner");
                para.classList.remove("hide");
                firstValue.classList.add("background-div");
                secondValue.classList.add("background-div");
                thirdValue.classList.add("background-div");
                para.innerHTML = `Congratulations ${firstValue.innerHTML} for Winning`;

                let score = document.querySelectorAll(".score-value");
                firstValue.innerHTML === 'X' ? xCount++ : oCount++;
                score[2].innerHTML = xCount;
                score[3].innerHTML = oCount;
           }
        }
    });
}

function addWinnerText(){
    let para = document.getElementById("winner");
    para.classList.remove("hide");
}

const button = document.getElementById("reset-button");

button.addEventListener("click", function(){
    isX = true;
    isWinnerDeclared = false;
    document.querySelectorAll(".box").forEach(child => {
        child.innerHTML = "";
        child.classList.remove("background-div")
        
        // Re-add the click event listener after reset
        child.addEventListener("click", function handler(event) {
            if(!isWinnerDeclared){
                if(isX){
                    child.innerHTML = "X";
                    isX = false;
                }
                else {
                    child.innerHTML = "O";
                    isX = true;
                }
                event.target.removeEventListener("click", handler);
                checkWinner();
            }
        });
    });

    let para = document.getElementById("winner");
    para.classList.add("hide");
});