let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
            img : 'images/apnabanale.jpg',
            name : 'Apna-bana-le',
            artist : 'Arijith singh',
            music : 'music/Apna-Bana-Le(Pagal-World.Com.In).mp3'
        },
        {
        img : 'images/horaata.jpg',
        name : 'Horaata',
        artist : 'Charan Raj, MC Bijju',
        music : 'music/Horaata.mp3'
    },
    {
        img : 'images/aasakooda.jpg',
        name : 'Aasa-kooda',
        artist : 'Sai Abhyankkar, Sai Smriti',
        music : 'music/Aasa-Kooda(Pagal-World.Com.In).mp3'
    },
    {
        img : 'images/raatan.jpg',
        name : 'Raataan Lambiyan',
        artist : 'Jubin Nautiyal, Asees Kaur',
        music : 'music/128-Raataan Lambiyan - Shershaah 128 Kbps.mp3'
    },
    {
        img : 'images/tere.jpg',
        name : 'Tere Vaaste',
        artist : ' Varun Jain, Shadab Faridi, Altamash Faridi',
        music : 'music/128-Tere Vaaste - Zara Hatke Zara Bachke 128 Kbps.mp3'
    },
    {
        img : 'images/shayad.jpg',
        name : 'Shayad',
        artist : 'Arijit Singh, Madhubanti Bagchis',
        music : 'music/192-Shayad - Love Aaj Kal 192 Kbps.mp3'
    },
    {
        img : 'images/aagide.jpg',
        name : 'Aagide-Aagide',
        artist : 'Keerthan Holla',
        music : 'music/Aagide-Aagide-Manasa-Holla-Keerthan-Holla - Copy.mp3'
    },
    {
        img : 'images/aalochane.jpg',
        name : 'Aalochane',
        artist : 'Shreya Ghoshal',
        music : 'music/Aalochane.mp3.mp3'
    },
    {
        img : 'images/aashiqui2.jpg',
        name : 'Aashjiqui-2',
        artist : 'Ankit Tiwari, Mithoon, Jeet Ganguly, Raju',
        music : 'music/Aashiqui 2 Mashup (2013) - DJ Kiran Kamath - Copy.mp3'
    },
    

    {
        img : 'images/demon.jpg',
        name : 'Demon In Me',
        artist : 'Midhun Mukundan',
        music : 'music/Demon-In-Me.mp3'
    },
    {
        img : 'images/sapta.jpg',
        name : 'Sapta Sagaradaache',
        artist : 'Charan Raj',
        music : 'music/Sapta-sagaradaache.mp3'
    },
    {
        img : 'images/Kantara.jpg',
        name : 'Varaha Roopam',
        artist : 'B.Ajaneesh Loknath',
        music : 'music/Varaha-Roopam.mp3'
    },
    
    {
        img : 'images/chaleya.jpg',
        name : 'Chaleya',
        artist : 'Arijit Singh, Shilpa Rao',
        music : 'music/Chaleya-(Hindi)(Pagal-World.Com.In).mp3'
    },
    
    {
        img : 'images/gaaliye.jpg',
        name : 'Gaaliye',
        artist : 'Shreya Ghoshal, Sonu Nigam',
        music : 'music/Gaaliye.mp3.mp3'
    },
    {
        img : 'images/gaganave.jpg',
        name : 'Gaganave',
        artist : 'Shreya Ghoshal',
        music : 'music/Gaganave.mp3.mp3'
    },
    {
        img : 'iimages/heeriye.jpg',
        name : 'Heeriye',
        artist : 'Jasleen Royal, Arijit Singh',
        music : 'music/Heeriye - DjMaza.ME.mp3'
    },
    {
        img : 'images/helilla.jpg',
        name : 'Helilla Yaarallu naanu',
        artist : 'Sonu Nigam, Shreya Ghoshal',
        music : 'music/Helilla Yaarallu Naanu.mp3'
    },
    
    {
        img : 'images/inkem.jpg',
        name : 'Inkem-Inkem',
        artist : 'Sid Sriram',
        music : 'music/Inkem-Inkem.mp3'
    },
    {
        img : 'images/jagave.jpg',
        name : 'Jagave Neenu ',
        artist : 'Sid Sriram',
        music : 'music/Jagave Neenu Gelathiye.mp3'
    },

{
        img : 'images/kesariya.jpg',
        name : 'kesariya',
        artist : 'Arijit Singh',
        music : 'music/Kesariya(PagalNew.Com.Se).mp3'
    },
    {
        img : 'images/lutt-putt.jpg',
        name : 'Lutt-Putt-Gaya',
        artist : 'Arijit Singh',
        music : 'music/Lutt-Putt-Gaya(PagalNew.Com.Se).mp3'
    },
    {
        img : 'images/manwa.jpg',
        name : 'Manwa laage',
        artist : 'Arijit Singh, Shreya Ghoshal',
        music : 'music/Manwa laage.mp3.mp3'
    },
    {
        img : 'images/modala.jpg',
        name : 'Modala Maleyanthe',
        artist : ' Sonu Nigam',
        music : 'music/Modala Maleyanthe (Female Version).mp3.mp3'
    },
    {
        img : 'images/deva deva.jpg',
        name : 'Deva Deva',
        artist : 'Arijit Singh,',
        music : 'music/Om-Deva-Deva-Namah(PagalNew.Com.Se).mp3'
    },
    {
        img : 'images/paravashanadenu.jpg',
        name : 'Paravashanadenu',
        artist : 'Sonu Nigam',
        music : 'music/Paravashanadenu-Sonu-Nigam.mp3'
    },
    {
        img : 'images/satranga.jpg',
        name : 'Satranga',
        artist : 'Arijit Singh',
        music : 'music/Satranga(PagalWorld.com.sb).mp3'
    },
    
    {
        img : 'images/thanmaya.jpg',
        name : 'Thanmayaladenu',
        artist : 'Shreya Ghoshal',
        music : 'music/Thanmayaladenu-Shreya-Ghoshal.mp3'
    },
    {
        img : 'image/yeanagali.jpg',
        name : 'Yenagali',
        artist : 'Sonu Nigam',
        music : 'music/Yenagali.mp3.mp3'
    },

];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);
    curr_track.addEventListener('ended', nextTrack); // Add event listener for song end
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}

function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}

function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}

function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
