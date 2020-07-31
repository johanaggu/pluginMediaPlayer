import MediaPlyer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.getElementById("video")
const button = document.getElementById("playButton")
const unmuteButton = document.getElementById("unMuted")

const player = new MediaPlyer({
    el: video,
    // plugins: [new AutoPlay( )]
})

button.onclick = () => player.togglePlay()

unmuteButton.onclick=()=>player.toggleMute()