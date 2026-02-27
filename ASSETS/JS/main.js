const button = document.getElementById('alertButton');
const container = document.getElementById('alertContainer');

button.addEventListener('click', () => {
  // Limpia cualquier alerta anterior
  container.innerHTML = '';

  // Crea la alerta
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-info alert-dismissible fade show';
  alertDiv.role = 'alert';
  alertDiv.innerHTML = `
    ¡Bienvenido a AKELA GYM! Tu estado actual es: listo para entrenar.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  container.appendChild(alertDiv);
});