function MediaPlyer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initialPlugins()
}

MediaPlyer.prototype.play = function () {
    this.media.play()

}
MediaPlyer.prototype.pause = function () {
    this.media.pause()
}
MediaPlyer.prototype.togglePlay = function () {
    (this.media.paused)
    ?this.play()
    :this.pause()
};
MediaPlyer.prototype._initialPlugins= function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
        console.log(this.play);
    });
}
MediaPlyer.prototype.mute= function(){
  this.media.muted= true    
}
export default MediaPlyer