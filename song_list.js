//song list
let All_song = [
    {
      name: "Claire De Lune",
      path: "songs/1.mp3",
      img: "images/song1.jpg",
      singer: "Debussy"
    },
    {
      name: "Pathetique Sonata 2nd Movement",
      path: "songs/2.mp3",
      img: "images/song2.jpg",
      singer: "Beethoven"
    },
    {
      name: "One Summer Day",
      path: "songs/3.mp3",
      img: "images/song3.jpg",
      singer: "Audio Library"
    },
    {
      name: "Foolish",
      path: "songs/4.mp3",
      img: "images/song4.png",
      singer: "Gangga"
    },
    {
      name: "Nothing",
      path: "songs/5.mp3",
      img: "images/song5.jpg",
      singer: "Bruno Major"
    },
    {
     name: "Location Unknown (Brooklyn Session)",
     path: "songs/6.mp3",
     img: "images/song6.jpg",
     singer: "Honne feat. Beka"
    },
    {
     name: "Alexandra",
     path: "songs/7.mp3",
     img: "images/song7.jpg",
     singer: "Reality Club"
    },
    {
     name: "Sorrowful Reunion",
     path: "songs/8.mp3",
     img: "images/song8.jpg",
     singer: "Reality Club"
    },
    {
     name: "Sounds of Rain",
     path: "songs/9.mp3",
     img: "images/song9.jpg",
     singer: "Tido Kang"
    },
    {
     name: "彩り",
     path: "songs/10.mp3",
     img: "images/song10.jpg",
     singer: "Paniyolo"
    }
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/