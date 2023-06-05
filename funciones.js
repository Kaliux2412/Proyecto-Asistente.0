function Login(){
    let password = document.getElementById('pass').value
    let email = document.getElementById("email").value
    console.log(email + password)
    if(password==="" && email === ""){
        alert('Porfavor introduce los datos')
    }
    fetch('http://localhost:3001/login/'+ email + '/' + password)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        if(data.mensaje === "Con_inco"){
            alert("La contraseña debe ser mayor a 5 digitos")
        }
        if(data.mensaje === "Inexistente"){
            alert(data.alert1)
        }
        if(data.mensaje === "Incorrecto"){
            alert(data.alert)
        }
        if(data.mensaje === "Correcto"){
            Swal.fire({
                text: "Continua aprendiendo",
                backdrop: true,
                imageUrl: 'Img/ingreso_confirm.png',
                confirmButtonText: '<a href= "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/m_principal.html" class= "continuar">Gracias</a>'
            })
            console.log(data.user_name)
            let img = document.querySelector(".swal2-image")
            img.style.margin = "0"
        }
    })
}
function Registro(){
    let password = document.getElementById("pass2").value
    let email = document.getElementById("email2").value
    let nombre = document.getElementById("nombre2").value
    let condiciones = document.getElementById("ter")
    if(condiciones.click=== false){
        let caja = document.getElementById("remember-forgot1")
        caja.style.backgroundColor = "rgb(173, 91, 244)"
        let p = document.createElement("p")
        p.innerText = "Acepta los terminos y condiciones"
        caja.appendChild(p)
    }
    if(password === "" && email === ""){
        alert("Introduce los datos")
    }
    if(password === "" && nombre === ""){
        alert("Introduce los datos")
    }
    if(email === "" && nombre === ""){
        alert("Introduce los datos")
    }
    fetch('http://localhost:3001/registro/'+ nombre + "/" + email + "/" + password)
    .then(info => info.json())
    .then(info =>{
        console.log(info)
        if(password.length < 5){
            alert("La contraseña debe ser mayor a 5 digitos")
            password = ""
        }
        if(info.mensaje === "Correcto"){
            Swal.fire({
                text: "Ya estas registrado! Vamos al siguiente paso.",
                icon: 'success',
                backdrop: true,
                confirmButtonText: '<a href= "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/info_med.html" class= "continuar" ">Gracias</a>'
            })

        }
    })
}
function Nombre_Usuario(){
    fetch("http://localhost:3001/login")
    .then(nombre => nombre.json())
    .then(nombre =>{
        console.log(nombre)
        let caja_nombre = document.getElementById("caja_nombreu")
        let nombreu = document.createElement("h1")
        nombreu.innerHTML = `Bienvenid@  ${nombre}`
        caja_nombre.appendChild(nombreu)
        
    })
}
Nombre_Usuario()


