const express = require('express')
let cors = require('cors')
const app = express()
app.use(cors())
const path = require('path')
const {pool} = require('./dbConfig')
const bcrypt = require('bcrypt')
const session = require('express-session')
const flash = require("express-flash")

const port = process.env.PORT || 3001;


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(
    session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
})
);

app.use(flash());
app.get('/usuario/registro', (req,res)=>{
    res.render('registro')
})
app.get("/usuario/login", (req,res) =>{
    res.render('login')
})
app.post("/usuario/registro", async (req,res) =>{
    let { nombre, email, password} =req.body;
    console.log({
        nombre, email, password
    })
    let errors = [];
    if(!nombre || !email || !password){
        errors.push({mensaje: "Por favor llena todos los campos", err: "Incorrecto"})
    }
    if(password.length < 5){
        errors.push({mensaje: "La contraseña debe de ser mayor a 5 digitos", err: "Incorrecto"})
    }
    if(errors.length > 0){
        res.render('registro', {errors})
    }else{
        let hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)

        pool.query(`SELECT * FROM "proyecto_asistente".usuarios WHERE email = $1 `, [email], (err, results)=>{
            if(err){
                throw err;
            }
            console.log(results.rows) 

            if(results.rows.length > 0){
                errors.push({mensaje: "El usuario ya ha sido registrado"})
                res.render('registro', {errors})
            }else{
                let id_tipovida = 0;
                pool.query(
                    `INSERT INTO "proyecto_asistente".usuarios (nombre, email, password, id_tipovida)
                    VALUES ($1, $2, $3, $4)
                    RETURNING id_usuario, nombre, password`, [nombre, email, hashedPassword, id_tipovida], (err, results) => {
                        if(err){
                            throw err;
                        }
                        console.log(results.rows)
                        req.flash("success_msg", "Ya estas registrado ahora podras acceder desde el Login")
                        res.redirect('/usuario/login')
                        app.get("/usuario/cuenta", (req,res) =>{
                            res.render('cuenta',{user: results.rows[0].nombre, useremail: email})
                            console.log(email)
                        })

                    }
                )
            }
        });


    }
})
app.post('/usuario/login', async (req, res)=>{
    let {email, password} =req.body;
    console.log({
        email, password
    })
    let errors = [];
    if( !email || !password){
        errors.push({mensaje: "Por favor llena todos los campos", err: "Incorrecto"})
    }
    if(password.length < 5){
        errors.push({mensaje: "La contraseña debe de ser mayor a 5 digitos", err: "Incorrecto"})
    }
    if(errors.length > 0){

        app.get("/usuario/login", (req,res) =>{
            res.render('login', {errors})
        })
    }else{


        pool.query(`SELECT * FROM "proyecto_asistente".usuarios WHERE email = $1 `, [email], (err, results)=>{
            if(err){
                throw err;
            }
            console.log(results.rows) 


            if(results.rows.length > 0){
                let revision = results.rows[0]


                bcrypt.compare(password, revision.password, (err, isMatch)=>{
                    if(err){
                        throw err;
                    }
                    if(isMatch){
                        res.redirect('http://localhost/info_med.html');
                        app.get("/usuario/cuenta", (req,res) =>{
                            res.render('cuenta',{user: results.rows[0].nombre, useremail: email})
                        })
                    }else{
                        errors.push({mensaje: "La constraseña es incorrecta"})
                        res.render('login', {errors})
                    }
                })
            }else{
                errors.push({mensaje: "El usuario no ha sido registrado, registrate!!"})
                res.render('login', {errors})
            }
            
        });


    }
})
let score = 0
app.get('/puntos/:score', (req, res) =>{
    score = req.params.score
    res.json(score) 
})

app.get('/puntaje', (req, res) =>{
    res.json(score)
})

app.get('/dieta',(req,res) => {
    pool.query('SELECT * FROM "proyecto_asistente".dieta_desa',(err, result)=>{
        if(err){
            throw err
        }
        const dato = result.rows
        console.log(dato)
        res.json(dato)

    })
})
app.get('/ingredientes',(req,res) => {
    pool.query('SELECT * FROM "proyecto_asistente".ingredientes',(err, result)=>{
        if(err){
            throw err
        }
        const dato = result.rows
        console.log(dato)
        res.json(dato)

    })
})




const { Client } = require('pg')
const { error } = require('console')
const { render } = require('ejs')

const obtenerDatos = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'Prueba12',
        port: 5432,
    })
    
    await client.connect()
 
    const res = await client.query('SELECT * FROM "proyecto_asistente".tablaejercicios')
    const result = res.rows
    await client.end()
    return result
};

obtenerDatos().then((result) => {
    console.log(result)
    app.get('/ejercicios',(req,res) => {
        res.json(result)
    })
})


let tipovida = ''
app.get('/tipovida/:seleccion', (req,res)=>{
    tipovida = req.params.seleccion
    if(tipovida == "activa"){
        res.json({infovid: "Mi vida es muy activa", tipovida})
        console.log("Escogiste una vida activa")
    }
    if(tipovida == "estresante"){
        res.json({infovid: "Tengo mucho trabajo y casi no descanso", tipovida})
        console.log("Tu vida es estresante")
    }
    if(tipovida == "tranquila"){
        res.json({infovid: "Mi vida es muy relajada y no soy muy activ@", tipovida})
        console.log("Hay tranquilidad en tu vida y flojera")
    }
})

app.get('/tipovida',(req, res) =>{
    res.json(tipovida)
    console.log(tipovida)
})
// Apartado de ejercicios y guardar sus registros
let musica=[
    {
        artista:"Billie Eilish",
        nombre:"Lovely",
        url: "audios/Billie_Eilish_-_Lovely_Ft_Khalid.mp3",
    },
    {

        artista:"Post Malone, Swae Lee",
        nombre:"Sunflower",
        url: "audios/Sunflower.mp3",
    },
    {
        artista:"Daft Punk, Pharell Williams",
        nombre:"Get Lucky",
        url: "audios/Daft Punk Get Lucky.mp3",
    },
    {

        artista:"Pharell Williams",
        nombre:"Happy",
        url: "audios/Pharrell Williams-Happy.mp3",
    },
    {
        artista:"Florida",
        nombre:"Good Feeling",
        url: "audios/Good Feeling.mp3",
    },
    {
        artista: 'Ed Sheran',
        nombre:"Shape of You",
        url: "audios/Shape of You.mp3",
    },
    {
        artista: 'OneRepublic',
        nombre:"Counting Stars",
        url: "audios/Counting Stars.mp3",
    },
    {
        artista: 'LMFAO',
        nombre: "Party Rock Athem",
        url: "audios/Party Rock Anthem.mp3",
    },
    {
        artista: 'Twenty One Pilots',
        nombre: "Stressed Out",
        url: "audios/twenty one pilots_ Stressed Out [OFFICIAL VIDEO].mp3",
    },
    {
        artista: 'Imagine Dragons',
        nombre: "Believer",
        url: "audios/believer.mp3",
    },
    {
        artista: 'Imagine Dragons',
        nombre: "Enemy",
        url: "audios/Enemy.mp3",
    },
    {
        artista: 'Fun',
        nombre: "We Are Young",
        url: "audios/We Are Young.mp3",
    },
]
app.get('/musica',(req,res) =>{
    res.json(musica)
})
let eliminadas = []
let caloriaspordia = []
app.get('/valoreseje/:calo', (req, res)=>{
    let calo = req.params.calo
    console.log(eliminadas.push(calo))
})
app.get('/elicalo', (req, res)=>{
    console.log(eliminadas)
    res.json(eliminadas)
})
app.get('/guardar/:caloriaseje', (req,res) =>{
    let calorias = req.params.caloriaseje
    // res.json(caloriaspordia.push(calorias))
    console.log(caloriaspordia.push(calorias))
    
})
app.get('/guardarcalo',(req,res)=>{
    console.log(caloriaspordia)
    res.json(caloriaspordia)

})
let comipordia = []
let valores = []

app.get('/valoresdieta/:calo', (req, res)=>{
    let calo = req.params.calo
    console.log(valores.push(calo))
})
app.get('/totalcalo', (req, res)=>{
    console.log(valores)
    res.json(valores)
})
app.get('/consudieta/:calo', (req, res)=>{
    let calo = req.params.calo
    console.log(comipordia.push(calo))
})

app.get('/calodieta', (req, res)=>{
    console.log(comipordia)
    res.json(comipordia)
})
app.listen(port, ()=>{
    console.log(`El puerto esta listo ${port}`)
})

