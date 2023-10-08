console.log("welcome in spotify");

// initialize variables
let songindex=0;
 audioElement = new Audio('1.mp3');
 masterplay=document.getElementById('masterplay');
 myprogressbar=document.getElementById('myprogressbar');
 mastersongname=document.getElementById('mastersongname');
 gif=document.getElementById('gif');
 songitem=Array.from(document.getElementsByClassName('songitem'));
 itembox=document.getElementsByClassName('itembox');

 
 

 let songs=[
    {songname: "Sanso ki zaroorat hey zeyse ~ Kumar shanu" , filePath:"1.mp3" , coverPath:"cover1.jpg"},
    {songname: "Ashiwquee ~ Arijit Sing" , filePath:"2.mp3" , coverPath:"cover2.jpg"},
    {songname: "Ham Tere Bin Aab Rehe Nehi Sakte~ Arijit Sing" , filePath:"3.mp3" , coverPath:"cover3.jpg"},
    {songname: "Asaan Nehi Yahan ~ Arijit Sing" , filePath:"4.mp3" , coverPath:"cover4.jpg"},
    {songname: "Bas Tera Saath Ho ~ Monali Thakur" , filePath:"5.mp3" , coverPath:"cover5.jpg"},
    {songname: "Aapne To Dil Ka Pataa Dain ~ Arijit Sing" , filePath:"6.mp3" , coverPath:"cover6.jpg"},
    {songname: "Dheere Dheere Se Mera Zindegi Me Aana ~ Kishor Kumar" , filePath:"7.mp3" , coverPath:"cover7.jpg"},
    
];




masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }

})
// listen to event
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate');
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
       

    })
    
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    
    
    

    songindex=parseInt(e.target.id);
    
   
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src=`${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;

    }
    else{
        songindex+=1;

    }
    audioElement.src=`${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;

    }
    else{
        songindex-=1;

    }
    audioElement.src=`${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})



    
    



