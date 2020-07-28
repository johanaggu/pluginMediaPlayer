function MediaPlayer(config) {
    this.media = config.el
    this.plugin = config.plugin || []

    this._initPlugin ()
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

export default MediaPlayer