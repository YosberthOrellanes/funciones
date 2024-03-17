/*Cambiar a color negro*/

const boxes = document.querySelectorAll(".box");

boxes.forEach((caja) => {
    caja.addEventListener("click", (evento) => cambiarColor(evento, "black"));
});


function cambiarColor(evento, color) {
const box = evento.currentTarget;
box.style.background = color;
}



/*Presionando las teclas a,s,d cambia a rosado,naranjo y celeste*/

let color;

    function cambiarColorTecla(event) {
        var tecla = event.key;
        if (tecla === 'a') {
            color = 'pink';
        } else if (tecla === 's') {
            color = 'orange';
        } else if (tecla === 'd') {
            color = 'lightblue';
        } else {
            return;
        }
        document.getElementById('key').style.backgroundColor = color;
    }

    document.addEventListener('keydown', cambiarColorTecla);



/*Presionando las teclas q,w,e cambia a morado,gis y café*/


document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        crearNuevoDiv('purple');
    } else if (event.key === 'w') {
        crearNuevoDiv('gray');
    } else if (event.key === 'e') {
        crearNuevoDiv('brown');
    }
});




function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = "1px solid black";

    document.body.appendChild(nuevoDiv);
};