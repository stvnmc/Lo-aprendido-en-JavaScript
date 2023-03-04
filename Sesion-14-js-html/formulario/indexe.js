const hola = document.getElementById("#f")

console.log(hola)

hola.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
})


