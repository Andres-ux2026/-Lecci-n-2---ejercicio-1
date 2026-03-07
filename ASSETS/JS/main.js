const botones = document.querySelectorAll(".agregar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const vaciarCarrito = document.getElementById("vaciar-carrito");

let total = 0;

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    const plan = boton.dataset.plan;
    const precio = parseInt(boton.dataset.precio);

    const item = document.createElement("li");
    item.classList.add("list-group-item");

    item.textContent = `${plan} - $${precio}`;

    listaCarrito.appendChild(item);

    total += precio;
    totalElemento.textContent = total;
  });
});

vaciarCarrito.addEventListener("click", () => {
  listaCarrito.innerHTML = "";
  total = 0;
  totalElemento.textContent = total;
});
