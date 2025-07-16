import { elemento } from "./funciones.js";

function enviar() {
    const correoIngresado = elemento("correoElectronico").value.trim();
    const contraseñaIngresada = elemento("contraseña").value.trim();
    //const correoIngresadoElemento = elemento("correoElectronico");
    //correoIngresadoElemento.style = "color: red"
    //correoIngresadoElemento.value = "lalalalala"
    //console.log(correoIngresadoElemento)
    // Obtener los datos guardados en localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioLogueado = usuariosGuardados?.find(usuario => correoIngresado === usuario.correo && contraseñaIngresada === usuario.contraseña)

    // Validar credenciales
    if (usuarioLogueado) {
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))
        // Redirigir a página principal
        window.location.href = "home.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }

}
window.enviar = enviar //para que lo tome el navegador
