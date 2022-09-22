console.log("Welcome to My Game")
let gmover = new Audio("go.mp3")
let turn = new Audio("mw.mp3")
let gamover = false;

let turn1 = "X"

//Function to change the turn
const changeTurn = () => {
    return turn1 === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,1,5,0],
        [3, 4, 5,1,16,0],
        [6, 7, 8,1,24,0],
        [0, 3, 6,-10,15,90],
        [1, 4, 7,1,15,90],
        [2, 5, 8,10,15,90],
        [0, 4, 8,3,18,137],
        [2, 4, 6,-3,18,137],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText === boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +  " WON "
            gamover = true;
            gmover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "287px";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}


//logic for game
let boxes = document.getElementsByClassName("crossbox");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (bpxtext) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn1;
            turn1 = changeTurn();
            turn.play();
            checkWin();
            if(!gamover){
                document.getElementsByClassName("info")[0].innerText = "Turn for  " +   turn1;
            }
        }
    })

})


//reset on click
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText= "";
    })
    turn1 = "X"; 
    gamover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for  " +   turn1;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";


})