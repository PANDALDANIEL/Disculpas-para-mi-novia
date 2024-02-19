const siBtn = document.getElementById('si-btn');
const noBtn = document.getElementById('no-btn');
const pregunta = document.getElementById('pregunta');
const imagen = document.getElementById('imagen');
const container = document.querySelector('.container');
let conteoSi = 0;

noBtn.addEventListener('click', () => {
    mostrarError();
});

siBtn.addEventListener('click', () => {
    conteoSi++;
    if (conteoSi < 5) {
        pregunta.textContent = cambiarTexto(conteoSi);
    } else {
        mostrarMensajeFinal();
    }
});

function cambiarTexto(conteo) {
    switch (conteo) {
        case 1:
            return '¿Estás segura mi amor?';
        case 2:
            return '¿Segurísima?';
        case 3:
            return '¿De verdad?';
        case 4:
            return 'Presiona de nuevo';
        default:
            return '¿Realmente segura?';
    }
}

function mostrarError() {
    alert('Error, presiona "Sí"');
}

function mostrarMensajeFinal() {
    pregunta.textContent = 'Te amo mi vida, gracias por existir.';
    imagen.src = 'https://i.pinimg.com/originals/b0/55/6c/b0556ccf594f7008f34d5397db77dbd4.jpg';
    siBtn.style.display = 'none';
    noBtn.style.display = 'none';
}

