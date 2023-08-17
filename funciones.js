function Login(){
    
    Swal.fire({
        text: "Continua aprendiendo",
        backdrop: true,
        imageUrl: 'http://localhost/Img/ingreso_confirm.png',
        confirmButtonText: '<a href= "http://localhost:3001/usuario/cuenta" class= "continuar">Gracias</a>'
    })
}
function Registro(){
    fetch('http://localhost:3001//usuario/registro')
    .then(info => info.json())
    .then(info =>{
        if(info.err == 'Incorrecto'){
            console.log(info.mensaje)
        }else{
            Swal.fire({
                text: "Bienvenido!! Vamos a continuar con tu registro",
                backdrop: true,
                icon: 'success',
                confirmButtonText: '<a href= "http://localhost/info_med.html" class= "continuar">Vamos</a>'
            })
        }
    })
    
}

function Nombre_Usuario(){
    fetch("http://localhost:3001/usuario/login")
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
            confirmButtonText: '<a href= "/salud.html" class= "continuar">OK</a>'
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
            confirmButtonText: '<a href= "/salud.html" class= "continuar">OK</a>'
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
            confirmButtonText: '<a href= "/salud.html" class= "continuar">OK</a>'
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
    const tablaRutinas = document.getElementById('rutinas')
    const tablaDietas = document.getElementById("dietas")
    tablaRutinas.className = "rutinas"
    tablaDietas.className = "dietas"
    
// Edicion de botones del navegador
    btnrutinas.onclick = () =>{
        console.log('se escogio rutinas')
        tablaMadre.appendChild(tablaRutinas)
        tablaRutinas.style.display = "block"
        tablaDietas.style.display = "none"
        btnrutinas.style.background = "rgba(197, 172, 12, 0.848)"
        btnrutinas.style.height ="40px"
        btnrutinas.style.width = "15%"
        btndietas.style.height = "30px"
        btndietas.style.width = "10%"
        btndietas.style.paddingRight = "15px"
        btndietas.style.backgrounColor = "rgba(183, 109, 217, 0.859)"

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
        fetch('http://localhost:3001/ejercicios')
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
            btnrut.style.backgroundImage = "url('Img/inirut.png')"
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
                tablaRutinas.appendChild(musicab)
                // slides.appendChild(musicab)

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
                    play.onclick = () =>{
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
            let musicab = document.createElement('button')
            musicab.className = 'musica'
            musicab.onclick = () =>{
                fetch('http://localhost:3001/musica')
                .then(musica => musica.json())
                .then(musica => {
                    console.log(musica)
                    let audio = document.createElement('audio')
                    let source = document.createElement('source')
                    source.src = musica[3].url
                    audio.id = 'audio'
                    audio.controls = ''
                    audio.preload = 'auto'
                    audio.tabIndex = '0'
                    let playlist = document.createElement('ul')
                    playlist.id = 'playlist'
                    let li = document.createElement("li")
                    li.className = 'active'
                    let li2 = document.createElement('li')
                    let segunda = document.createElement("a")
                    let tercera = document.createElement("a")
                    segunda.href = musica[5].url
                    tercera.href = musica[10].url
                    musicab.appendChild(audio)
                    audio.appendChild(source)
                    musicab.appendChild(playlist)
                    musicab.appendChild(playlist)
                    playlist.appendChild(li)
                    playlist.appendChild(li2)
                    li.appendChild(segunda)
                    li2.appendChild(tercera)
                    init();
                    function init(){
                        var audio = document.getElementById('audio');
                        var playlist = document.getElementById('playlist');
                        var tracks = playlist.getElementsByTagName('a');
                        audio.volume = 1;
                        audio.play();
                        
                        //Agregamos los eventos a los links que nos permitirán cambiar de canción
                        for(var track in tracks) {
                        var link = tracks[track];
                        if(typeof link === "function" || typeof link === "number") continue;
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            var song = this.getAttribute('href');
                            run(song, audio, this);
                        });
                        }
                        //agregamos evento para reproducir la siguiente canción en la lista
                        //si la canción es la ultima reproducir la primera otra vez
                        audio.addEventListener('ended',function(e) {
                            for(var track in tracks) {
                            var link = tracks[track];
                            var nextTrack = parseInt(track) + 1;
                            if(typeof link === "function" || typeof link === "number") continue;
                            if(!this.src) this.src = tracks[0];
                            if(track == (tracks.length - 1)) nextTrack = 0;
                                onsole.log(nextTrack);
                            if(link.getAttribute('href') === this.src) {
                                var nextLink = tracks[nextTrack];
                                run(nextLink.getAttribute('href'), audio, nextLink);
                                break;
                            }
                            }
                        });
                    }
            
                    function run(song, audio, link){
                            var parent = link.parentElement;
                            //quitar el active de todos los elementos de la lista
                            var items = parent.parentElement.getElementsByTagName('li');
                            for(var item in items) {
                            if(items[item].classList)
                                items[item].classList.remove("active");
                            }
                            
                            //agregar active a este elemento
                            parent.classList.add("active");
                            
                            //tocar la cancion
                            audio.src = song;
                            audio.load();
                            audio.play();
                    }
                })
            }
            general.appendChild(musicab)
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

                            let calorias = datos[n].calorias
                            
                            let eliminar = calorias.replace('kcal', ' ')
                            console.log(eliminar)
                            fetch('http://localhost:3001/valoreseje' + '/' + eliminar )
                            .then(enviar => enviar.json())
                            .then(enviar =>{
                                console.log(enviar)
                            })
                            let porcentaje = (eliminar * 100)/500
                            console.log(porcentaje)
                            fetch('http://localhost:3001/guardar/' + porcentaje)
                            .then(calorias => calorias.json())
                            .then(calorias =>{
                                console.log(calorias)

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
                            let calorias = datos[n].calorias
                            let eliminar = calorias.replace('kcal', ' ')
                            console.log(eliminar)
                            fetch('http://localhost:3001/valoreseje' + '/' + eliminar )
                            .then(enviar => enviar.json())
                            .then(enviar =>{
                                console.log(enviar)
                            })
                            let porcentaje = (eliminar * 100)/500
                            console.log(porcentaje)
                            fetch('http://localhost:3001/guardar/' + porcentaje)
                            .then(calorias => calorias.json())
                            .then(calorias =>{
                                console.log(calorias)

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
                            pa.innerHTML = `Felicidades eliminaste ${datos[n].calorias}`
                            apaeje.appendChild(pa)
                            let calorias = datos[n].calorias
                            let eliminar = calorias.replace('kcal', ' ')
                            console.log(eliminar)
                            fetch('http://localhost:3001/valoreseje' + '/' + eliminar )
                            .then(enviar => enviar.json())
                            .then(enviar =>{
                                console.log(enviar)
                            })
                            let porcentaje = (eliminar * 100)/500
                            console.log(porcentaje)
                            fetch('http://localhost:3001/guardar/' + porcentaje)
                            .then(calorias => calorias.json())
                            .then(calorias =>{
                                console.log(calorias)

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
                }
            })
            

        })

    }


    btndietas.onclick = () =>{ 
        tablaMadre.appendChild(tablaDietas)
        tablaDietas.style.display = "block"
        tablaRutinas.style.display = "none"
        btndietas.style.background = "#9600dc"
        btndietas.style.height ="40px"
        btndietas.style.width = "15%"
        btnrutinas.style.backgrounColor = "rgba(246, 226, 50, 0.756)"
        btnrutinas.style.height = "30px"
        btnrutinas.style.width = "10%"
        btnrutinas.style.paddingRight = "15px"

        let divdieta = document.createElement('div')
        divdieta.className = 'divdieta'
        let divinfo =  document.createElement('div')
        divinfo.className = 'divinfo'
        let btningre = document.createElement('button')
        let tituprin = document.createElement('h1')
        tituprin.className = 'tituprin'
        tituprin.innerHTML = 'DIETAS!'
        let breve = document.createElement('p')
        breve.className = 'breve'
        breve.innerHTML = 'En esta seccion podras obtener recomendaciones para alimentarte saludable y podras tener un registro mas detallado de cada una. Abajo hay un boton "Alimentos", en donde podras ver informacion nutricional de varios ingredientes.'
        let img = document.createElement('img')
        let nombre = document.createElement('h1')
        let tabla1 = document.createElement('table')
        tabla1.className = 'tabladieta'
        let fila0 = document.createElement('tr')
        let des_ti = document.createElement('th')
        des_ti.innerHTML = "DESCRIPCION"
        let ingre_ti = document.createElement('th')
        ingre_ti.innerHTML = 'INGREDIENTES'
        let hora_ti = document.createElement('th')
        hora_ti.innerHTML = 'HORARIO'
        let calo_ti = document.createElement('th')
        calo_ti.innerHTML = 'CALORIAS'
        let fila1 = document.createElement('tr')
        let celda_1 = document.createElement('th')
        let celda_2 = document.createElement('th')
        let celda_3 = document.createElement('th')
        let celda_4 = document.createElement('th')
        let descripcion = document.createElement('p')
        let ingredientes = document.createElement('p')
        let horario = document.createElement('p')
        let calorias = document.createElement('p')
        let btnsele = document.createElement('button')
        btnsele.innerHTML = 'Ya lo comi!'
        btnsele.className = 'btnsele'

        tablaDietas.appendChild(divdieta)
        divdieta.appendChild(divinfo)
        btningre.className = "btningre"
        btningre.innerHTML = 'Alimentos'
        btningre.className = 'btningre'
        divinfo.appendChild(tituprin)
        divinfo.appendChild(breve)
        divinfo.appendChild(img)
        divinfo.appendChild(nombre)
        divinfo.appendChild(tabla1)
        tabla1.appendChild(fila0)
        fila0.appendChild(des_ti)
        fila0.appendChild(ingre_ti)
        fila0.appendChild(hora_ti)
        fila0.appendChild(calo_ti)
        tabla1.appendChild(fila1)
        fila1.appendChild(celda_1)
        fila1.appendChild(celda_2)
        fila1.appendChild(celda_3)
        fila1.appendChild(celda_4)
        celda_1.appendChild(descripcion)
        celda_2.appendChild(ingredientes)
        celda_3.appendChild(horario)
        celda_4.appendChild(calorias)
        divinfo.appendChild(btnsele)
        divinfo.appendChild(btningre)

        fetch('http://localhost:3001/dieta')
        .then(contenido => contenido.json())
        .then(contenido =>{
            img.src = contenido[0].imagen
            img.style.width = '50%'
            img.style.height = '50%'
            img.style.marginLeft = "0%"
            img.style.marginTop = '20px'
            img.style.borderRadius = '60%'

            nombre.innerHTML = contenido[0].nombre
            descripcion.innerHTML = contenido[0].descripcion
            ingredientes.innerHTML = contenido[0].ingredientes
            horario.innerHTML = contenido[0].horario
            calorias.innerHTML = contenido[0].calorias
            let calo = contenido[0].calo
            let alert = document.createElement('p')
            alert.innerHTML = `Felicidades haz tomado una buena decision, hoy consuminste ${calo} kcal`
            divinfo.appendChild(alert)
            let total = (calo*100)/1500
            btnsele.onclick = () =>{
                fetch('http://localhost:3001/consudieta' + '/' + total)
                .then(enviar => enviar.json())
                .then(enviar =>{
                    console.log(enviar)
                })
            }
        })



        btningre.onclick = () => {
            divdieta.removeChild(divinfo)
            fetch('http://localhost:3001/ingredientes')
            .then(ingre => ingre.json())
            .then(ingre =>{
                let titulo = document.createElement('h1')
                titulo.innerHTML = 'Enciclopedia de Alimentos'
                titulo.className = 'tituingre'
                divdieta.appendChild(titulo)
                let btnregre = document.createElement('button')
                btnregre.className = 'btnregre'
                btnregre.innerHTML = 'Volver a ver la Dieta'
                divdieta.appendChild(btnregre)
                btnregre.onclick = () =>{
                    divdieta.appendChild(divinfo)
                    divdieta.removeChild(titulo)
                    divdieta.removeChild(btnregre)
                    divdieta.removeChild(divgene)
                }

                let divgene = document.createElement('div')
                divgene.className = 'seccioningre'
                divdieta.appendChild(divgene)




                for(let i = 0; i < ingre.length; i++){
                    let divingre = document.createElement("div")
                    divingre.className = 'divingre'
                    let imgingre = document.createElement('img')
                    imgingre.className = 'imgingre'
                    let tabla = document.createElement('table')
                    tabla.className = 'tablaingre'
                    let fila0 = document.createElement('tr')
                    let vit = document.createElement('th')
                    vit.innerHTML = "NUTRIENTES"
                    let calo = document.createElement('th')
                    calo.innerHTML = "CALORIAS"
                    let fila = document.createElement('tr')
                    let celda1 = document.createElement('th')
                    let celda2 = document.createElement('th')
                    let nomingre = document.createElement('h1')
                    let vitingre = document.createElement('p')
                    let caloingre = document.createElement('p')
                    let btnlocomi = document.createElement('button')
                    btnlocomi.innerHTML = 'Hoy lo consumi'

                    divgene.appendChild(divingre)
                    divingre.appendChild(nomingre)
                    divingre.appendChild(imgingre)
                    divingre.appendChild(tabla)
                    tabla.appendChild(fila0)
                    fila0.appendChild(vit)
                    fila0.appendChild(calo)
                    tabla.appendChild(fila)
                    fila.appendChild(celda1)
                    fila.appendChild(celda2)
                    celda1.appendChild(vitingre)
                    celda2.appendChild(caloingre)
                    divingre.appendChild(btnlocomi)

                    imgingre.src = ingre[i].imagen
                    nomingre.innerHTML = ingre[i].nombre
                    vitingre.innerHTML = ingre[i].vitaminas
                    caloingre.innerHTML = ingre[i].calorias
                    btnlocomi.onclick = () =>{
                        let pa = document.createElement('p')
                        pa.innerHTML = `Muy bien, hoy consumiste ${ingre[i].calo} kcal`
                        divingre.appendChild(pa)
                        fetch('http://localhost:3001/valoresdieta' + '/' + ingre[i].calo)
                        .then(enviar => enviar.json())
                        .then(enviar =>{
                            console.log(enviar)
                        })
                        let porcentaje = (ingre[i].calo * 100)/2000
                        console.log(porcentaje)
                        fetch('http://localhost:3001/consudieta' + '/' + porcentaje)
                        .then(enviar => enviar.json())
                        .then(enviar =>{
                            console.log(enviar)
                        })
                    }

                }
            })
        } 
    }
}
function traerCalorias (){
    fetch('http://localhost:3001/guardarcalo')
    .then(calorias => calorias.json())
    .then(calorias =>{
        console.log(calorias)
        let caja = document.getElementById('ejeconsumidas')
        let suma = 0;

        for (let index = 0; index < calorias.length; index++) {
            calorias[index] = parseInt(calorias[index])
            suma += calorias[index];
        }
        console.log(suma)
        caja.style.width = `${suma}%`
        caja.style.border = "10px solid cyan"

    }) 
    fetch('http://localhost:3001/elicalo')
    .then(enviar => enviar.json())
    .then(enviar =>{
        console.log(enviar)
        let suma = 0;

        for (let index = 0; index < enviar.length; index++) {
            enviar[index] = parseInt(enviar[index])
            suma += enviar[index];
        }
        let poner = document.getElementById('elical')
        poner.innerHTML = `Haz eliminado ${suma} kcal / de 500 kcal`
    })

    
}
traerCalorias()

function consudieta (){
    fetch('http://localhost:3001/calodieta')
    .then(enviar => enviar.json())
    .then(enviar =>{
        console.log(enviar)
        let caja = document.getElementById('comiconsumidas')
        
        let suma = 0;

        for (let index = 0; index < enviar.length; index++) {
            enviar[index] = parseInt(enviar[index])
            suma += enviar[index];
        }
        console.log(suma)
        caja.style.width = `${suma}%`
        caja.style.border = "10px solid cyan"
    })
    fetch('http://localhost:3001/totalcalo')
    .then(enviar => enviar.json())
    .then(enviar =>{
        console.log(enviar)
        let suma = 0;

        for (let index = 0; index < enviar.length; index++) {
            enviar[index] = parseInt(enviar[index])
            suma += enviar[index];
        }
        let poner = document.getElementById('totalcal')
        poner.innerHTML = `Consumiste ${suma} kcal / de 2000 kcal`
    })
}
consudieta()
function traerCosas (){
    fetch("http://localhost:3001/tipovida")
    .then(info => info.json())
    .then(info =>{
        let guarvida = document.getElementById('regretipov')
        guarvida.innerHTML = `Seleccionaste una vida ${info}`
    })
    fetch('http://localhost:3001/puntaje')
    .then(puntaje => puntaje.json())
    .then(puntaje =>{
        console.log(puntaje)
        let estre = document.getElementById('estrellas')
        if(puntaje == 0){
            for(let i = 0; i < 6; i++){
                let estrella = document.createElement('img')
                estrella.src = 'http://localhost/Img/estresinre.png'
                estre.appendChild(estrella)
            }
        }
        if(puntaje == 1){
            let colo = document.createElement('img')
            estre.appendChild(colo)      
            colo.src = 'http://localhost/Img/estreconre.png'
            for(let i = 0; i < 5; i++){
                let estrella = document.createElement('img')
                estrella.src = 'http://localhost/Img/estresinre.png'
                estre.appendChild(estrella)
            }
        }
        if(puntaje == 2){
            for(let c = 0 ; c < 2; c++){
                let colo = document.createElement('img')
                colo.src = 'http://localhost/Img/estreconre.png'  
                estre.appendChild(colo)      
            }
        
            for(let i = 0; i < 4; i++){
                let estrella = document.createElement('img')
                estrella.src = 'http://localhost/Img/estresinre.png'
                estre.appendChild(estrella)
            }
        }
        if(puntaje == 3){
            for(let c = 0 ; c < 3; c++){
                let colo = document.createElement('img')
                colo.src = 'http://localhost/Img/estreconre.png'  
                estre.appendChild(colo)      
            }
            for(let i = 0; i < 3; i++){
                let estrella = document.createElement('img')
                estrella.src = 'http://localhost/Img/estresinre.png'
                estre.appendChild(estrella)
            }
        }
        if(puntaje == 4){
            for(let c = 0 ; c < 4; c++){
                let colo = document.createElement('img')
                colo.src = 'http://localhost/Img/estreconre.png'  
                estre.appendChild(colo)      
            }
            for(let i = 0; i < 2; i++){
                let estrella = document.createElement('img')
                estrella.src = 'http://localhost/Img/estresinre.png'
                estre.appendChild(estrella)
            }
        }
        if(puntaje == 5){
            for(let c = 0 ; c < 5; c++){
                let colo = document.createElement('img')
                colo.src = 'http://localhost/Img/estreconre.png'  
                estre.appendChild(colo)      
            }

            let estrella = document.createElement('img')
            estrella.src = 'http://localhost/Img/estresinre.png'
            estre.appendChild(estrella)
        }
        if(puntaje == 6){
            for(let c = 0 ; c < 6; c++){
                let colo = document.createElement('img')
                colo.src = 'http://localhost/Img/estreconre.png'  
                estre.appendChild(colo)      
            }
        }
        let guardar = document.getElementById('resumed')
        guardar.innerHTML = `Obtuviste ${puntaje} / 6 en el Quiz Medico`
    })
}
traerCosas()