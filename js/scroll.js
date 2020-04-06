let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for ( var i=0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("efecto");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

let animadoUno = document.querySelectorAll(".animado1");

function mostrarScrollUno() {
    let scrollTop = document.documentElement.scrollTop;
    for ( var i=0; i < animadoUno.length; i++){
        let alturaAnimado = animadoUno[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animadoUno[i].style.opacity = 1;
            // animado[i].classList.add("efecto");
            animadoUno[i].classList.add("arriba");
        }
    }
}

window.addEventListener('scroll', mostrarScrollUno);



let animadoDos = document.querySelectorAll(".animado2");

function mostrarScrollDos() {
    let scrollTop = document.documentElement.scrollTop;
    for ( var i=0; i < animadoDos.length; i++){
        let alturaAnimado = animadoDos[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animadoDos[i].style.opacity = 1;
            animadoDos[i].classList.add("fadeInUp");
        }
    }
}

window.addEventListener('scroll', mostrarScrollDos);