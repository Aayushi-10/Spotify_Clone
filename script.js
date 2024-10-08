console.log("Welcome to Spotify");

// Initialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let songs= [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>
{if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update seekbar
    progress=parseInt(audioElement.currentTime()/audioElement.duration())*100;
    console.log('progress');
    myProgressbar=progress;
})