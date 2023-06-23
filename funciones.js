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
            let sign = document.getElementById("signdiv")
            let a = document.createElement("a")
            let button = document.getElementById("sign")
            a.appendChild(button)
            a.href = "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/info_med.html"
            sign.appendChild(a)
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
function activa(){
    const eleactiva = document.querySelector(".elec1")
    const eletranquila = document.querySelector(".elec2")
    const eleestresante = document.querySelector(".elec3")
    const tablaact = document.getElementById("act")
    const tablatran = document.getElementById("tranqui")
    const tablaestre = document.getElementById("estre")
    eleactiva.onclick = () => {
        let tipovida = "activa"
        console.log("Escogiste la vida activa! Excelente")
        eleactiva.innerHTML = "Seleccionado!"
        eletranquila.innerHTML = "Seleccionar"
        eleestresante.innerHTML = "Seleccionar"
        tablaact.classList.add("activa")
        tablaestre.classList.remove("activa")
        tablatran.classList.remove("activa")
        Swal.fire({
            title: "Dirigete a 'Tu Salud' en el menu de arriba",
            icon: 'info',
            text: 'Si das click en "OK" iras a esa seccion.',
            backdrop: true,
            confirmButtonText: '<a href= "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/salud.html" class= "continuar">OK</a>'
        })
        fetch("http://localhost:3001/tipovida/" + tipovida )
        .then(info => info.json())
        .then(info =>{
            console.log(info)
        })
    }
    eletranquila.onclick = () =>{
        let tipovida = "tranquila"
        console.log("Escogiste una vida tranquila! Vamos a trabajar!")
        tablaact.classList.remove("activa")
        tablaestre.classList.remove("activa")
        tablatran.classList.add("activa")
        eleactiva.innerHTML = "Seleccionar"
        eleestresante.innerHTML - "Seleccionar"
        eletranquila.innerHTML = "Seleccionado!"
        Swal.fire({
            title: "Dirigete a 'Tu Salud' en el menu de arriba",
            icon: 'info',
            text: 'Si das click en "OK" iras a esa seccion.',
            backdrop: true,
            confirmButtonText: '<a href= "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/salud.html" class= "continuar">OK</a>'
        })
        fetch("http://localhost:3001/tipovida/" + tipovida )
        .then(info => info.json())
        .then(info =>{
            console.log(info)
        })
    }
    eleestresante.onclick = () =>{
        let tipovida = "estresante"
        console.log("Tienes una vida estresante, es hora de darte un descanso y cuidar tu salud!")
        eleactiva.innerHTML = "Seleccionar"
        eletranquila.innerHTML = "Seleccionar"
        eleestresante.innerHTML = "Seleccionado!"
        tablaact.classList.remove("activa")
        tablatran.classList.remove("activa")
        tablaestre.classList.add("activa")
        Swal.fire({
            title: "Dirigete a 'Tu Salud' en el menu de arriba",
            icon: 'info',
            text: 'Si das click en "OK" iras a esa seccion.',
            backdrop: true,
            confirmButtonText: '<a href= "file:///C:/Users/Admin/Documents/Alive2023/Proyecto-Asistente.0/salud.html" class= "continuar">OK</a>'
        })
        fetch("http://localhost:3001/tipovida/" + tipovida )
        .then(info => info.json())
        .then(info =>{
            console.log(info)
        })
    }
}
function mantenerTipvida () {
    fetch("http://localhost:3001/tipovida")
    .then(info => info.json())
    .then(info =>{
        console.log(info)
        let cajavida =  document.getElementById("seleccion_vida")
        let titulo = document.createElement("h1")
        titulo.className = "titulorut"
        titulo.innerText = `Al entrar a la pagina principal elegiste el tipo de vida ${info} `
        let parrafo = document.getElementById("exp")
        parrafo.innerText = "En el navegador de abajo se creara contenido especifico de acuerdo al tipo de vida que seleecionaste. Puedes usar el buscador ya sea para encontrar alimentos, rutinas, ejercicios o recoendaciones medicas. Que lo disfrutes!"
        cajavida.appendChild(titulo)
        cajavida.appendChild(parrafo)
    })
}
mantenerTipvida()

function crearContenido (){
    const tablaMadre = document.getElementById("contenido_salud")
    const btnrutinas = document.getElementById("btnrut")
    const btndietas = document.getElementById("btndietas")
    const btnrecomenda = document.getElementById("btnreco")
    const tablaRutinas = document.createElement("div")
    const tablaDietas = document.createElement("div")
    const tablaReco = document.createElement('div')
    tablaRutinas.id = "rutinas"
    tablaDietas.id = "dietas"
    tablaReco.id = "reco"
    tablaRutinas.className = "rutinas"
    tablaDietas.className = "dietas"
    tablaReco.className = "recomendaciones"
    
// Edicion de botones del navegador
    btnrutinas.onclick = () =>{
        tablaMadre.appendChild(tablaRutinas)
        tablaRutinas.style.display = "block"
        tablaDietas.style.display = "none"
        tablaReco.style.display = "none"
        btnrutinas.style.background = "rgba(197, 172, 12, 0.848)"
        btnrutinas.style.height ="40px"
        btnrutinas.style.width = "15%"
        btndietas.style.height = "30px"
        btndietas.style.width = "10%"
        btndietas.style.paddingRight = "15px"
        btndietas.style.backgrounColor = "rgba(183, 109, 217, 0.859)"
        btnrecomenda.style.height = "30px"
        btnrecomenda.style.paddingRight = "15px"
        btnrecomenda.style.backgroundColor = "rgba(38, 226, 223, 0.714)"

//Creacion de tabla de rutinas y ejercicios

        const vidrut = document.createElement("div")
        const espa = document.createElement("div")
        const tipo = document.createElement("h1")
        tipo.id = "tipo"
        tipo.innerText = "EJERCICIOS"
        espa.className = "esto"
        const ex = document.createElement("p")
        ex.style.marginLeft = "10%"
        ex.style.marginRight = "10%"
        ex.style.fontFamily = "Arial"
        ex.style.fontSize = "15px"
        ex.style.color = "white"
        ex.style.textShadow = "0 0 10px black"
        ex.innerText = "Hemos creado rutinas para ti y tu tipo de vida, además podrás crear tus propias rutinas y conocer más a fondo para que sirve cada ejercicio."
        let general = document.createElement('div')
        general.className = 'seccioneje'
        tablaRutinas.appendChild(espa)
        tablaRutinas.appendChild(vidrut)
        tablaRutinas.appendChild(tipo)
        tablaRutinas.appendChild(ex)



        fetch('http:/localhost:3001/ejercicios')
        .then(datos => datos.json())
        .then(datos => {
            console.log(datos)
            console.log(datos.length)
            let body = document.getElementById("ejercicios")
            let divrut = document.createElement('div')
            divrut.className = "divrut"
            let titurutina = document.createElement('div')
            titurutina.className = 'titurutina'
            let rut = document.createElement('img')
            rut.src = "Img/rutinas.png"
            let areaRutina = document.createElement('div')
            areaRutina.className = 'areaRutina'
            let inirut = document.createElement("p")
            inirut.innerHTML = "Aqui tienes tu primer rutina!!"
            let link = document.createElement("a")
            link.href = "#modalrut"
            let btnrut = document.createElement('button')
            btnrut.title = "Haz click para iniciar la rutina"
            btnrut.style.backgroundImage = "url('Img/iniciar.png')"
            btnrut.className='inirut'
            btnrut.onclick = () =>{
                console.log('hola')
                let modalRutina = document.createElement('section')
                modalRutina.id= 'modalrut'
                let div = document.createElement("div")
                div.className = 'cajarutina'
                let prote = document.createElement('div')
                prote.className = 'prote'
                let slides = document.createElement('div')
                slides.className = 'slidesrut'

                body.appendChild(modalRutina)
                modalRutina.appendChild(div)
                div.appendChild(prote)
                prote.appendChild(slides)

                for(let i = 0; i < datos.length; i++){
                    let slide = document.createElement('div')
                    slide.className = 'sliderut'
                    slide.id = `slide${i}`
                    let ejercicios = document.createElement('img')
                    ejercicios.src = datos[i].imagen
                    ejercicios.className = 'ejerciciosrut'
                    let divbotones = document.createElement('div')
                    divbotones.className = 'divbotones'
                    let play = document.createElement('button')
                    play.className = 'playrut'
                    play.innerHTML = "Iniciar"
                    play.style.backgroundImage = "url('Img/play.png')"
                    let primera = false
                    play.onclick = () =>{
                        primera = true
                        play.style.backgroundImage = 'url("Img/pausa.png")'
                        
                    }
                    let direante = document.createElement('a')
                    direante.href = `#slide${i-1}`
                    let anterior = document.createElement('button')
                    anterior.innerHTML = 'Anterior'
                    anterior.className = 'playrut'
                    anterior.onclick = () =>{
                        
                    }
                    let diresig = document.createElement('a')
                    diresig.href = `#slide${i+1}`
                    let siguiente = document.createElement('button')
                    siguiente.innerHTML = 'Siguiente'
                    siguiente.className = 'playrut'
                    let divsal = document.createElement('div')
                    let salir = document.createElement('a')
                    let buttonsal = document.createElement('button')
                    buttonsal.onclick = () =>{
                        console.log('modal')
                        modalRutina.style.opacity = "0"
                        modalRutina.style.zIndex = '-1'
                        modalRutina.style.pointerEvents = "none"
                        body.lastChild.remove()
                    }
                    salir.href = '#areaRutina'
                    salir.innerHTML = "SALIR"

                    slides.appendChild(slide)
                    slide.appendChild(ejercicios)
                    slide.appendChild(divbotones)
                    divbotones.appendChild(direante)
                    direante.appendChild(anterior)
                    divbotones.appendChild(play)
                    divbotones.appendChild(diresig)
                    diresig.appendChild(siguiente)
                    slide.appendChild(divsal)
                    divsal.appendChild(buttonsal)
                    buttonsal.appendChild(salir)


                }


            

            }
            tablaRutinas.appendChild(divrut)
            divrut.appendChild(titurutina)
            titurutina.appendChild(rut)
            divrut.appendChild(areaRutina)
            areaRutina.appendChild(inirut)
            areaRutina.appendChild(link)
            link.appendChild(btnrut)
            tablaRutinas.appendChild(general)
            let modaleje = document.createElement('section')
            modaleje.className = 'modaleje'
            modaleje.id = 'modaleje'
            let diveje = document.createElement('div')
            diveje.style.width = '700px'
            diveje.style.height = '700px'
            diveje.style.fontFamily = 'Arial'
            diveje.style.color = 'white'
            let imgeje = document.createElement('img')
            imgeje.id = 'img'
            let p = document.createElement('p')
            let cerrar = document.createElement('a')
            fetch("http://localhost:3001/tipovida")
            .then(info => info.json())
            .then(info =>{
                const video = document.createElement("video")
                video.id = "videofondo"
                let source = document.createElement('source')
                if(info == "activa"){
                    source.src = "videos/videoactivo.mp4"
                    source.type = "video/mp4"
                    video.appendChild(source)
                    video.play()
                    video.muted = true
                    tablaRutinas.appendChild(video)
                }
                if(info == 'tranquila'){
                    source.src = "videos/videotranqui.mp4"
                    source.type = "video/mp4"
                    video.appendChild(source)
                    video.play()
                    video.muted = true
                    tablaRutinas.appendChild(video)
                }
                if(info == 'estresante'){
                    source.src = "videos/videoestre.mp4"
                    source.type = "video/mp4"
                    video.appendChild(source)
                    video.play()
                    video.muted = true
                    tablaRutinas.appendChild(video)
                }

                for(let n = 0; n < datos.length; n ++){   
                    if(datos[n].id_tipo == 1 && info == 'activa'){
                        let apaeje = document.createElement('div')
                        apaeje.className = 'infoejer'
                        apaeje.id = 'infoejer'
                        let img = document.createElement('img')
                        img.src = datos[n].imagen
                        img.className = 'img_ejercicios'
                        let a = document.createElement('a')
                        a.href = '#modaleje'
                        a.title = "Haz click para ver como se hace el ejercicio"
                        let agrandar = document.createElement('button')
                        agrandar.style.backgroundImage = 'url("Img/agrandar.png")'
                        agrandar.style.width = '15px'
                        agrandar.style.height = '15px'
                        agrandar.style.border = 'none'
                        agrandar.style.marginLeft = '190px'
                        agrandar.style.display = 'flex'
                        agrandar.style.marginTop = '-30px'
                        agrandar.style.backgroundSize = 'cover'
                        agrandar.onclick = () => {
                            let imgeje = document.getElementById('img')
                            imgeje.src = datos[n].imagen
                            imgeje.style.width = '80%'
                            imgeje.style.height = '60%'
                            imgeje.style.borderRadius = '10px'             
                            p.innerHTML = ` ${datos[n].cantidad}`
                            cerrar.href = '#infoejer'
                            cerrar.className = 'cerrar'
                            cerrar.innerHTML = 'SALIR'
                        }
                        let nombreeje = document.createElement('h1')
                        nombreeje.innerHTML = datos[n].nombre
                        nombreeje.style.color = '#c58f1b'
                        nombreeje.style.fontSize = '18px'
                        let utilidad = document.createElement('p')
                        let espe = document.createElement('p')
                        espe.innerHTML = 'Que vas a trabajar?'
                        espe.style.color = '#e4be36'
                        utilidad.innerHTML = datos[n].utilidad
                        utilidad.style.fontSize = '14px'
                        let select = document.createElement('button')
                        select.className = 'real-eje'
                        select.innerHTML = 'Lo hize!'
                        select.onclick = () =>{
                            select.style.transform = 'scale(0.95)';
                            let pa = document.createElement('p')
                            pa.innerHTML = `Felicidades eliminaste ${datos[n].calorias}`
                            apaeje.appendChild(pa)
                            fetch('http://localhost:3001/guardar/' + datos[n].calorias)
                            .then(calorias => calorias.json())
                            .then(calorias =>{
                                console.log(calorias)
                                let eliminar = calorias.replace('kcal', ' ')
                                console.log(eliminar)
                                let caja = document.getElementById('ejeconsumidas')
                                let porcentaje = (eliminar * 500)/100
                                console.log(porcentaje)
                                caja.style.width = `${porcentaje}%`
                            })
                        }
                        let calo = document.createElement('p')
                        calo.innerHTML = `Cuanta cantidad de grasa eliminas?`
                        let calorias = document.createElement('p')
                        calorias.innerHTML = ` ${datos[n].calorias}`
                        calorias.style.color = 'rgb(227, 139, 8)'
                        let cantidad = document.createElement('p')
                        cantidad.innerHTML = `Eliminas esas calorias al hacer el ejercicio ${datos[n].cantidad}. ¡De ti depende si quieres lograr más!`
                       
                        general.appendChild(apaeje)
                        apaeje.appendChild(img) 
                        apaeje.appendChild(a)
                        a.appendChild(agrandar)               
                        apaeje.appendChild(nombreeje)
                        apaeje.appendChild(espe)
                        apaeje.appendChild(utilidad)
                        apaeje.appendChild(calo)
                        apaeje.appendChild(calorias)
                        apaeje.appendChild(cantidad)
                        apaeje.appendChild(select)
                        body.appendChild(modaleje)
                        modaleje.appendChild(diveje)
                        diveje.appendChild(imgeje)
                        diveje.appendChild(p)
                        diveje.appendChild(cerrar)
                    } 
                    if(datos[n].id_tipo == 2 && info == 'tranquila'){
                        let apaeje = document.createElement('div')
                        apaeje.className = 'infoejer'
                        apaeje.id = 'infoejer'
                        let img = document.createElement('img')
                        img.src = datos[n].imagen
                        img.className = 'img_ejercicios'
                        let a = document.createElement('a')
                        a.href = '#modaleje'
                        a.title = "Haz click para ver como se hace el ejercicio"
                        let agrandar = document.createElement('button')
                        agrandar.style.backgroundImage = 'url("Img/agrandar.png")'
                        agrandar.style.width = '15px'
                        agrandar.style.height = '15px'
                        agrandar.style.border = 'none'
                        agrandar.style.marginLeft = '190px'
                        agrandar.style.display = 'flex'
                        agrandar.style.marginTop = '-30px'
                        agrandar.style.backgroundSize = 'cover'
                        agrandar.onclick = () => {
                            let imgeje = document.getElementById('img')
                            imgeje.src = datos[n].imagen
                            imgeje.style.width = '80%'
                            imgeje.style.height = '60%'
                            imgeje.style.borderRadius = '10px'             
                            p.innerHTML = ` ${datos[n].cantidad}`
                            cerrar.href = '#infoejer'
                            cerrar.className = 'cerrar'
                            cerrar.innerHTML = 'SALIR'
                        }
                        let nombreeje = document.createElement('h1')
                        nombreeje.innerHTML = datos[n].nombre
                        nombreeje.style.color = '#c58f1b'
                        nombreeje.style.fontSize = '18px'
                        let utilidad = document.createElement('p')
                        let espe = document.createElement('p')
                        espe.innerHTML = 'Que vas a trabajar?'
                        espe.style.color = '#e4be36'
                        utilidad.innerHTML = datos[n].utilidad
                        utilidad.style.fontSize = '14px'
                        let select = document.createElement('button')
                        select.className = 'real-eje'
                        select.innerHTML = 'Lo hize!'
                        select.onclick = () =>{
                            select.style.transform = 'scale(0.95)';
                            let pa = document.createElement('p')
                            pa.innerHTML = `Felicidades eliminaste ${datos[n].calorias}`
                            apaeje.appendChild(pa)
                        }
                        let calo = document.createElement('p')
                        calo.innerHTML = `Cuanta cantidad de grasa eliminas?`
                        let calorias = document.createElement('p')
                        calorias.innerHTML = ` ${datos[n].calorias}`
                        calorias.style.color = 'rgb(227, 139, 8)'
                        let cantidad = document.createElement('p')
                        cantidad.innerHTML = `Eliminas esas calorias al hacer el ejercicio ${datos[n].cantidad}. ¡De ti depende si quieres lograr más!`
                        general.appendChild(apaeje)
                        apaeje.appendChild(img) 
                        apaeje.appendChild(a)
                        a.appendChild(agrandar)               
                        apaeje.appendChild(nombreeje)
                        apaeje.appendChild(espe)
                        apaeje.appendChild(utilidad)
                        apaeje.appendChild(calo)
                        apaeje.appendChild(calorias)
                        apaeje.appendChild(cantidad)
                        apaeje.appendChild(select)
                        body.appendChild(modaleje)
                        modaleje.appendChild(diveje)
                        diveje.appendChild(imgeje)
                        diveje.appendChild(p)
                        diveje.appendChild(cerrar)
                    } 
                    if(datos[n].id_tipo == 3 && info == 'estresante'){
                        let apaeje = document.createElement('div')
                        apaeje.className = 'infoejer'
                        apaeje.id = 'infoejer'
                        let img = document.createElement('img')
                        img.src = datos[n].imagen
                        img.className = 'img_ejercicios'
                        let a = document.createElement('a')
                        a.href = '#modaleje'
                        a.title = "Haz click para ver como se hace el ejercicio"
                        let agrandar = document.createElement('button')
                        agrandar.style.backgroundImage = 'url("Img/agrandar.png")'
                        agrandar.style.width = '15px'
                        agrandar.style.height = '15px'
                        agrandar.style.border = 'none'
                        agrandar.style.marginLeft = '190px'
                        agrandar.style.display = 'flex'
                        agrandar.style.marginTop = '-30px'
                        agrandar.style.backgroundSize = 'cover'
                        agrandar.onclick = () => {
                            let imgeje = document.getElementById('img')
                            imgeje.src = datos[n].imagen
                            imgeje.style.width = '80%'
                            imgeje.style.height = '60%'
                            imgeje.style.borderRadius = '10px'             
                            p.innerHTML = ` ${datos[n].cantidad}`
                            cerrar.href = '#infoejer'
                            cerrar.className = 'cerrar'
                            cerrar.innerHTML = 'SALIR'
                        }
                        let nombreeje = document.createElement('h1')
                        nombreeje.innerHTML = datos[n].nombre
                        nombreeje.style.color = '#c58f1b'
                        nombreeje.style.fontSize = '18px'
                        let utilidad = document.createElement('p')
                        let espe = document.createElement('p')
                        espe.innerHTML = 'Que vas a trabajar?'
                        espe.style.color = '#e4be36'
                        utilidad.innerHTML = datos[n].utilidad
                        utilidad.style.fontSize = '14px'
                        let select = document.createElement('button')
                        select.className = 'real-eje'
                        select.innerHTML = 'Lo hize!'
                        select.onclick = () =>{
                            select.style.transform = 'scale(0.95)';
                            let pa = document.createElement('p')
                            pa.innerHTML = `Eliminaste ${datos[n].calorias}, ya quedo registrado!`
                            apaeje.appendChild(pa)
                        }
                        let calo = document.createElement('p')
                        calo.innerHTML = `Cuanta cantidad de grasa eliminas?`
                        let calorias = document.createElement('p')
                        calorias.innerHTML = ` ${datos[n].calorias}`
                        calorias.style.color = 'rgb(227, 139, 8)'
                        let cantidad = document.createElement('p')
                        cantidad.innerHTML = `Eliminas esas calorias al hacer el ejercicio ${datos[n].cantidad}. ¡De ti depende si quieres lograr más!`
                        general.appendChild(apaeje)
                        apaeje.appendChild(img) 
                        apaeje.appendChild(a)
                        a.appendChild(agrandar)               
                        apaeje.appendChild(nombreeje)
                        apaeje.appendChild(espe)
                        apaeje.appendChild(utilidad)
                        apaeje.appendChild(calo)
                        apaeje.appendChild(calorias)
                        apaeje.appendChild(cantidad)
                        apaeje.appendChild(select)
                        body.appendChild(modaleje)
                        modaleje.appendChild(diveje)
                        diveje.appendChild(imgeje)
                        diveje.appendChild(p)
                        diveje.appendChild(cerrar)
                    } 
                }
            })
            

        })

    }


    btndietas.onclick = () =>{ 
        tablaMadre.appendChild(tablaDietas)
        tablaDietas.style.display = "block"
        tablaRutinas.style.display = "none"
        tablaReco.style.display = "none"
        btndietas.style.background = "#9600dc"
        btndietas.style.height ="40px"
        btndietas.style.width = "15%"
        btnrutinas.style.backgrounColor = "rgba(246, 226, 50, 0.756)"
        btnrutinas.style.height = "30px"
        btnrutinas.style.width = "10%"
        btnrutinas.style.paddingRight = "15px"
        btnrecomenda.style.height = "30px"
        btnrecomenda.style.backgroundColor = "rgba(38, 226, 223, 0.714)"
        btnrecomenda.style.paddingRight = "15px"
    }
    btnrecomenda.onclick = () =>{
        tablaMadre.appendChild(tablaReco)
        tablaReco.style.display = "block"
        tablaDietas.style.display = "none"
        tablaRutinas.style.display = "none"
        btnrecomenda.style.background = "rgb(31, 125, 117)"
        btnrecomenda.style.height ="40px"
        btnrecomenda.style.width = "22%"
        btnrutinas.style.height = "30px"
        btnrutinas.style.width = "10%"
        btnrutinas.style.paddingRight = "15px"
        btndietas.style.height = "30px"
        btndietas.style.width = "10%"
        btndietas.style.paddingRight = "15px"
        btndietas.style.backgrounColor = "rgba(183, 109, 217, 0.859)"
    }
}
