console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
var turn = "X"
let isgameover = false;

// Function to change the turn
function changeTurn(){
    if(turn==='X')
    {
        turn='0';
    }
    else{
        turn='X';
    }
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            changeTurn();
           // audioTurn.play();
            checkWin();
            if (!isgameover){
                document.querySelector('.info').innerText  =`your ${turn}`;
            } 
        }
    })
})

function checkWin(){
    var count=0;
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6 ],
        [1, 4, 7 ],
        [2, 5, 8 ],
        [0, 4, 8 ],
        [2, 4, 6 ],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
        {
            count++;
            if(count===1)
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            isgameover = true
           
        }
    })
}

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
   
    document.querySelector('.info').innerText  =`your ${turn}`;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})