var estadosRedesSociales = {
    tiktok: false,
    facebook: false,
    instagram: false,
    youtube: false
};

var conteoIniciado = false;

function mostrarRedesSociales() {

    // Añadir un alert con el mensaje antes de abrir la ventana emergente
    alert("Debes seguirme en todas mis redes sociales para que se habilite el link de descarga.");

    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    // Crear mensaje de espera en dos filas
    var mensajeEspera = document.createElement('p');
    mensajeEspera.innerHTML = '<br>Espera mientras se verifica.<br>Esto puede tomar unos minutos. ';
    mensajeEspera.style.color = 'white';
    mensajeEspera.style.fontFamily = 'Arial, sans-serif';
    mensajeEspera.style.fontSize = '14px';
    mensajeEspera.style.textAlign = 'center';  // Añade esta línea para centrar el texto
    mensajeEspera.style.margin = '0';

    // Insertar el mensaje al principio de la ventana emergente
    var primerHijo = popup.firstChild;
    popup.insertBefore(mensajeEspera, primerHijo);

    // Iniciar el proceso de validación solo si no ha sido iniciado antes
    if (!conteoIniciado) {
        validarRedesSociales();
        conteoIniciado = true;
    }
}

function seguirRedSocial(redSocialId, enlace) {
    var estadoActual = estadosRedesSociales[redSocialId];
    var seguirBtn = document.getElementById(redSocialId).querySelector('.seguir-btn');
    var enlaceDescarga = document.getElementById('enlaceDescarga');

    if (!estadoActual && seguirBtn.innerText === 'Seguir') {
        // Cambiar el texto del botón a 'Esperar...'
        seguirBtn.innerText = 'Esperar...';

        // Iniciar temporizador de 1 minuto antes de cambiar a 'Siguiendo'
        setTimeout(function () {
            seguirBtn.innerText = 'Siguiendo';
            estadosRedesSociales[redSocialId] = true;
            verificarBotonesSiguiendo();
        }, 60000);

        // Abrir el enlace en una nueva ventana o pestaña
        window.open(enlace, '_blank');

        // Ocultar el enlace de descarga
        enlaceDescarga.style.display = 'none';
    } else if (estadoActual && seguirBtn.innerText === 'Siguiendo') {
        // Si está en estado 'Siguiendo', regresa al estado inicial 'Seguir'
        seguirBtn.innerText = 'Seguir';
        estadosRedesSociales[redSocialId] = false;

        // Verificar si todos los botones están en estado inicial y mostrar el enlace de descarga
        verificarBotonesSiguiendo();
    }
}

function verificarBotonesSiguiendo() {
    var todosSiguiendo = Object.values(estadosRedesSociales).every(function (estado) {
        return estado;
    });

    var enlaceDescarga = document.getElementById('enlaceDescarga');

    if (todosSiguiendo) {
        // Activar el botón de descarga al finalizar la validación
        enlaceDescarga.style.display = 'block';
    } else {
        // Ocultar el enlace de descarga si no todos están siguiendo
        enlaceDescarga.style.display = 'none';
    }
}

function validarRedesSociales() {
    // Simulación de proceso de validación
    setTimeout(function () {
        // Una vez completada la validación, verificar los botones siguiendo
        verificarBotonesSiguiendo();
    }, 60000);
}

function cerrarVentana() {
    var popup = document.getElementById('popup');
    var mensajeEspera = document.querySelector('.popup p'); // Selecciona el elemento del mensaje

    // Elimina el mensaje actual
    if (mensajeEspera) {
        popup.removeChild(mensajeEspera);
    }

    // Cierra la ventana emergente
    popup.style.display = 'none';
}

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
