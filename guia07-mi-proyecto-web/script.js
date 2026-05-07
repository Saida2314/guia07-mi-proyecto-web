function saludar() {
    // Obtener el valor del input
    let nombre = document.getElementById("nombre").value.trim();
    // Validar si el usuario escribió algo
    if (nombre === "") {
        document.getElementById("resultado").innerText =
            "Por favor, ingresa tu nombre.";
        document.getElementById("resultado").className = "mensaje-error";
}


    else if (nombre.length < 3) {
    document.getElementById("resultado").innerText =
      "El nombre debe tener al menos 3 caracteres.";
    document.getElementById("resultado").className = "mensaje-error";


    } else {
        document.getElementById("resultado").innerText =
            "Hola " + nombre + ", bienvenido al sistema.";
        document.getElementById("resultado").className = "mensaje-exito";

    }
}

function validarCorreo() {
    let correo = document.getElementById("correo").value;
    if (correo === "") {
        document.getElementById("mensajeCorreo").innerText = "Debe ingresar un correo.";
    } else {
        document.getElementById("mensajeCorreo").innerText = "Correo registrado correctamente.";
    }
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("resultado").className = "mensaje-exito";
  document.getElementById("mensajeCorreo").innerText = "";
  document.getElementById("mensajeCorreo").className = "mensaje-exito";
  intentos = 0;
  document.getElementById("contadorIntentos").innerText =
    "Intentos de validación: 0";
}