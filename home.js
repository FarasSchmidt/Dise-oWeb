import { elemento } from "./funciones.js";

const usuario = localStorage.getItem("usuarioLogueado")
if (usuario){
    elemento("header-bienvenida").innerText = "Bienvenido "+JSON.parse(usuario).nombre+"😂"
}
else{
    volver()
}

function volver(){
    window.location.href = "logIn.html";
    localStorage.removeItem("usuarioLogueado")
}
window.volver = volver //para que lo tome el navegador