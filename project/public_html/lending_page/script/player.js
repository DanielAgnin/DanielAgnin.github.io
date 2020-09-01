let player;
const playerContainer = $(".player");
 
let eventsInit = () => {

    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec =
            (player.getDuration() / 100) * newButtonPositionPercent;

        $(".player__playback-button").css({
            left: `${newButtonPositionPercent}%`
        });

        player.seekTo(newPlaybackPositionSec);
    });

    $(".player__splash").click(e => {
        player.playVideo();
    });

    $(".player__volume-playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        
        $(".player__volume-playback--button").css({
            left: `${newButtonPositionPercent}%`
        });

        player.setVolume(newButtonPositionPercent);

        $(".player__volume-button").removeClass("muted")
    });

    $(".player__volume-button").click(e => {
        const volumeButton = $(e.currentTarget);

        volumeButton.toggleClass("muted");

        if (volumeButton.hasClass("muted")) {
          $(".player__volume-playback--button").css({
            left: `0`
          });
        } else {
          $(".player__volume-playback--button").css({
            left: `100%`
          });
        }

        let newButtonPositionPercent = $(".player__volume-playback--button").css("left");

        if (newButtonPositionPercent !== 0 && newButtonPositionPercent !== "0px") {
          newButtonPositionPercent = 100;
        }
        else {
          newButtonPositionPercent = 0;
        }

        player.setVolume(newButtonPositionPercent);
    });
};

// const dynamic = document.querySelector(".player__volume-button");
// dynamic.addEventListener('click', mute);
// function mute(e) {
//   dynamic.classList.toggle('muted');
//   player.muted = !player.muted;
// };
 
const formatTime = timeSec => {
 const roundTime = Math.round(timeSec);
 
 const minutes = addZero(Math.floor(roundTime / 60));
 const seconds = addZero(roundTime - minutes * 60);
 
 function addZero(num) {
   return num < 10 ? `0${num}` : num;
 }
 
 return `${minutes} : ${seconds}`;
};
 
const onPlayerReady = () => {
 let interval;
 const durationSec = player.getDuration();
 
 $(".player__duration-estimate").text(formatTime(durationSec));
 
 if (typeof interval !== "undefined") {
   clearInterval(interval);
 }
 
 interval = setInterval(() => {
   const completedSec = player.getCurrentTime();
   const completedPercent = (completedSec / durationSec) * 100;
 
   $(".player__playback-button").css({
     left: `${completedPercent}%`
   });
 
   $(".player__duration-completed").text(formatTime(completedSec));
 }, 1000);
};
 
const onPlayerStateChange = event => {
 /*
   -1 (воспроизведение видео не начато)
   0 (воспроизведение видео завершено)
   1 (воспроизведение)
   2 (пауза)
   3 (буферизация)
   5 (видео подают реплики).
 */
 switch (event.data) {
   case 1:
     playerContainer.addClass("active");
     playerContainer.addClass("paused");
     break;
 
   case 2:
     playerContainer.removeClass("active");
     playerContainer.removeClass("paused");
     break;
 }
};

// function onPlayerReady(event) {
//     event.target.setVolume(100);
//     event.target.playVideo();
// }
 
function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "392",
   width: "662",
   videoId: "LXb3EKWsInQ",
   events: {
     onReady: onPlayerReady,
     onStateChange: onPlayerStateChange
   },
   playerVars: {
     controls: 0,
     disablekb: 0,
     showinfo: 0,
     rel: 0,
     autoplay: 0,
     modestbranding: 0
   }
 });
}
 
eventsInit();
