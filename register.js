import { elemento } from "./funciones.js";

function enviar() {
    const nombre = elemento("nombre").value.trim();
    const apellido = elemento("apellido").value.trim();
    const correo = elemento("correoElectronico").value.trim();
    const repetirCorreo = elemento("repetirCorreoElectronico").value.trim();
    const contraseña = elemento("contraseña").value.trim();
    const repetirContraseña = elemento("repetirContraseña").value.trim();

    // Validaciones
    if (!nombre || !apellido || !correo || !repetirCorreo || !contraseña || !repetirContraseña) {
        alert("Por favor completá todos los campos.");
        return;
    }
    if (contraseña.length < 8 || contraseña.length > 20){
        alert("La contraseña debe tener entre 8 y 20 caracteres.");
        contraseña = elemento("contraseña").style = "border-color: red"
        return;
    }

    if (correo !== repetirCorreo) {
        alert("Los correos no coinciden.");
        return;
    }

    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Obtener lista de usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya está registrado
    const existe = usuarios.find(usuario => usuario.correo === correo);
    //const existe = usuarios.find(encontrarUsuario);
    if (existe) {
        alert("Este correo ya está registrado.");
        return;
    }
    // const faras = [{
    // "nombre":"Faras",
    // "apellido":"Schmidt",
    // "correo":"faras.a.schmidt@gmail.com"
    // ,"contraseña":"123"}]
    // Crear y guardar nuevo usuario
    const nuevoUsuario = { nombre, apellido, correo, contraseña };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado exitosamente.");
    window.location.href = "logIn.html";
}
window.enviar = enviar //para que lo tome el navegador
// function encontrarUsuario(usuario, correo){
//     return usuario.correo === correo
// }
// //funcion flecha
// const encontrarUsuario2=(usuario, correo)=>{
//     return usuario.correo === correo
// }