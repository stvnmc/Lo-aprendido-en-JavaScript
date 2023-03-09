const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hTexto.innerHTML = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}



cambiarTexto("este es un bueno texto", "blue"(setTimeout ,1000));