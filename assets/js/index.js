import MediaPlyer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
const video = document.getElementById("video")
const button = document.getElementById("playButton")

const player = new MediaPlyer({
    el: video,
    plugins: [new AutoPlay( )]
})

button.onclick = () => player.togglePlay()