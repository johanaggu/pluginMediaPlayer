import MediaPlyer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'


const video = document.getElementById("video")
const button = document.getElementById("playButton")
const unmuteButton = document.getElementById("unMuted")
const fullScreen =document.getElementById("fullscreen")

const player = new MediaPlyer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
})

button.onclick = () =>player.togglePlay()
unmuteButton.onclick = () => player.toggleMute()
fullScreen.onclick=()=> player.fullScreen()


// ---------------   Service Workers   -------------------     
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("/sw.js")
        .catch(err => {
            console.error(err);
        })
}
//--------comentarios /*ESto tendria que ser consumido por algun api

let comentarios_container = document.getElementById("comentarios_container")
let comentario = `
<div class="comentario_container" >    
    <span class="material-icons">person</span>
    <li class="commentario" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque debitis eveniet fuga nostrum pariatur
    numquam rerum blanditiis, natus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque debitis eveniet fuga nostrum pariatur
    numquam rerum blanditiis, natus velit. </li>
<div>
<hr>
    `
comentarios_container.innerHTML = comentario.repeat(100)