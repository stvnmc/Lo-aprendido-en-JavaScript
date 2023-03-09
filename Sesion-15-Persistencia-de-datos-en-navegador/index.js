//localStorage.setItem("nombre","Steven")
//localStorage.setItem("nombre","Steven")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({ nombre: "Steven", edad: 32 }))

// console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> Convierte un objeto/array en string
//JSON.parse -> Convierte un objeto/array convertido atraves de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Steven")

/* Cookies */

document.cookie = "nombreCookie=GorkaCookie"

document.cookie = "nombreCeducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)

