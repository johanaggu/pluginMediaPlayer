const video = document.getElementById("video")
const button = document.getElementById("playButton")

function MediaPlayer(config) {
    this.media = config.el

}

MediaPlayer.prototype.play = function () {
    this.media.play()
}
MediaPlayer.prototype.pause = function () {
    this.media.pause()
}
MediaPlayer.prototype.pausado = function () {
    return this.media.paused;
}

const player = new MediaPlayer({
    el: video
})

button.onclick = () => {
    (player.pausado()) ?
    player.play(): player.pause()
}