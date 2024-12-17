let play1 = document.getElementById("play1");
let play2 = document.getElementById("play2");
let play3 = document.getElementById("play3");
let play4 = document.getElementById("play4");

function playStrokes(){
    // play1.style.display = "block";
    let audio = new Audio("./Audio/The Strokes - Why Are Sundays So Depressing (Audio).mp3")
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    }, 11000);
   
}

play1.addEventListener("click" , playStrokes)

play2.addEventListener("click" , ()=>{
    let audio = new Audio("./Audio/Radiohead - Jigsaw Falling into Place [HD].mp3");
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    }, 11000);
})

play3.addEventListener("click" , ()=>{
    let audio = new Audio("./Audio/Daft Punk (feat. Julian Casablancas) - Instant Crush [Random Access Memories].mp3");
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    }, 11000);
})

play4.addEventListener("click" , ()=>{
    let audio = new Audio("./Audio/Travis Scott - SICKO MODE (Lyrics) ft. Drake.mp3");
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning
    }, 11000);
})

