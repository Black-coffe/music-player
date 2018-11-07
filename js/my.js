var songs = ["Haterade.mp3","Pound-The-Alarm.mp3","within-temptation.mp3"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var playPause = document.querySelector("#play i");

var song = new Audio();
var currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load


function playSong(){
    
    song.src = songs[currentSong];  //set the source of 0th song 
    
    songTitle.textContent = songs[currentSong]; // set the title of song
    
    song.play();    // play the song
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        playPause.removeAttribute('class');
        playPause.setAttribute('class', 'fas fa-pause');
    }
    else{
        song.pause();
        playPause.removeAttribute('class');
        playPause.setAttribute('class', 'fas fa-play');
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
    
    var timeStart = document.getElementById("timeStart");
    var sec = Math.floor(song.currentTime / 60) + ': ' + Math.floor(song.currentTime % 60);
    timeStart.innerHTML = sec;

    var timeEnd = document.getElementById("timeEnd");
    var sec2 = Math.floor(song.duration / 60) + ': ' + Math.floor(song.duration % 60);
    timeEnd.innerHTML = sec2;
});



function next(){
    
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    /*$("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);*/
}

function pre(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    /*$("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);*/
}