// Para obtener el elemento select por su ID
var select = document.querySelector("#miSelect");

// Para obtener el formulario por su ID
var formulario = document.querySelector("#miFormulario");

// Constante para el valor del ticket
const valorTicket = 200;

// Variable para almacenar el valor total
var valorTotal;

// Para obtener todos los elementos con la clase "opcion"
var opciones = document.querySelectorAll(".opcion");

// Agregar un manejador de eventos a cada elemento
opciones.forEach(function (opcion) {
  opcion.addEventListener("click", function () {
    // Obtener el valor de la opcion desde el atributo data
    var valorOpcion = opcion.dataset.opcion;
    // Llamar a la funcion para cambiar la opcion con descuento
    cambiarOpcionDescuento(valorOpcion);
  });
});

// Funcion para cambiar la opcion con descuento
function cambiarOpcionDescuento(valor) {
  // Cambia la opcion seleccionada al valor deseado
  select.value = valor;
  // Para disparar evento "change" en el select
  select.dispatchEvent(new Event("change"));
}

// Agregar un manejador de eventos al boton de resumen
const resumenBtn = document.querySelector("#resumen");
resumenBtn.addEventListener("click", calcularResumen);

// Funcion para calcular el resumen de la compra
function calcularResumen(event) {
  event.preventDefault();
  // Para obtener la cantidad desde el input
  var inputCantidad = document.querySelector("#input-cantidad");
  var cantidad = inputCantidad.value;
  // Obtener la opcion seleccionada
  var opcion = select.value;
  var descuento;
  // Aplicar el descuento segun la opcion seleccionada
  switch (opcion) {
    case "1":
      descuento = 0.2;
      break;
    case "2":
      descuento = 0.5;
      break;
    case "3":
      descuento = 0.85;
      break;
    default:
      descuento = 1;
      break;
  }
  // Para calcular el valor total
  valorTotalTickets = valorTicket * descuento * cantidad;
  // Para actualizar el valor a pagar en la pagina
  document.querySelector("#total").innerHTML =
    "Total a Pagar: $" + valorTotalTickets;
}
