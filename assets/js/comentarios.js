//--------comentarios /*ESto tendria que ser consumido por algun api
export default function Comentarios() {
    let comentarios_container = document.getElementById("comentarios_container")
    let comentario = `
    <div class="comentario_container" >    
        <span class="material-icons">person</span>
        <li class="commentario" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque debitis eveniet fuga nostrum pariatur
            numquam rerum blanditiis, natus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque debitis eveniet fuga nostrum pariatur
            numquam rerum blanditiis, natus velit.
         </li>
    </div>
    <hr>
    `
    comentarios_container.innerHTML = comentario.repeat(20)
}