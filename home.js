import { elemento } from "./funciones.js";

const usuario = localStorage.getItem("usuarioLogueado")
if (usuario) {
    elemento("header-bienvenida").innerText = "Bienvenido " + JSON.parse(usuario).nombre
}
else {
    volver()
}

function volver() {
    window.location.href = "logIn.html";
    localStorage.removeItem("usuarioLogueado")
}
window.volver = volver //para que lo tome el navegador

function agregar() {
    const tareaAgregada = elemento("agregarTarea").value.trim();

    // obtener lista de tareas del localStorage
    const tareas = JSON.parse(localStorage.getItem("tarea")) || [];
    tareas.push(tareaAgregada);
    // console.log(tareas)

    localStorage.setItem("tarea", JSON.stringify(tareas));

}
window.agregar = agregar //para que lo tome el navegador

function cargarTareas() {
    const lista = elemento("listaTareas"); 
    lista.innerHTML = ""; 

    const tareas = JSON.parse(localStorage.getItem("tarea")) || [];

    tareas.forEach((tarea) => {
        const li = document.createElement("li");
        li.textContent = tarea;
        lista.appendChild(li);
    });
}
window.cargarTareas = cargarTareas;

cargarTareas();