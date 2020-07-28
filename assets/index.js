import MediaPlayer from "./MediPlayer.js"
import AutoPlay from "./plugin/Autoplay.js"

const vide = document.getElementById("video")
const button = document.getElementById("playButton")


const player = new MediaPlayer({
    el: vide,
    plugin: [new AutoPlay()]
})

button.onclick = () => {
    (player.pausado()) ?
    player.play(): player.pause()
}