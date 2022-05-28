const boton = document.getElementById('Boton')
console.log(window.localStorage.getItem('id'))

if (window.localStorage.getItem('id') === null) {
    boton.textContent = "Grabar"
} else {
    boton.textContent = "Modificar"
}