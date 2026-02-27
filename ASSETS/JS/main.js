// Obtener el botón
const btnIrArriba = document.getElementById('boton');

// Escuchar clic
btnIrArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,          // Posición a la que quieres ir (arriba de la página)
    behavior: 'smooth' // Hace que el scroll sea suave
  });
});