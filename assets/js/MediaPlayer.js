class MediaPlyer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []

        this._initialPlugins()
    }
    play() {
        this.media.play()
    }
    pause() {
        this.media.pause()
    }
    togglePlay() {
        (this.media.paused)
            ? this.play()
            : this.pause()
    }
    _initialPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }

        this.plugins.forEach(plugin => {
            plugin.run(player)
        })
    }
    mute() {
        this.media.muted = true
    }
    unMute() {
        this.media.muted = false
    }
    toggleMute() {
        (this.media.muted)
            ? this.unMute()
            : this.mute()
    }
}

export default MediaPlyer