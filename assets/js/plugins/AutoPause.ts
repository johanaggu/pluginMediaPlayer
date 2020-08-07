import MediaPlayer from "../MediaPlayer"

class AutoPause {
    private threshold:number
    player: MediaPlayer; 

    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection=this.handlerIntersection.bind(this);
        this.handlerVisibilityChanges= this.handlerVisibilityChanges.bind(this)
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold //threshold => Es el umbral
        })
        observer.observe(player.media)
        document.addEventListener("visibilitychange", this.handlerVisibilityChanges)
    }
    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        // entry.
        const isVisible = entry.intersectionRatio >this.threshold
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
    private handlerVisibilityChanges(){
        const isVisible = document.visibilityState==="visible"
        if (isVisible){
            this.player.play()
        } else{
            this.player.pause()
        }
    }
}



export default AutoPause