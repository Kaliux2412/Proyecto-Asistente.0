const express = require('express')
let cors = require('cors')
const res = require('express/lib/response')
const {json} = require('express/lib/response')
const { or } = require('sequelize')
const app = express()
app.use(cors())
const port = 3001

let email = ''
let password = ''
let emails_almacenados = []
let usuarios_almacenados = []

app.get('/login/:email/:pass',(req,res)=>{
    email = req.params.email
    console.log(email);
    let password = req.params.pass
    console.log(password)
    let usuario_validado = usuarios_almacenados.filter(correo => correo.email_exist === email)
    console.log(usuario_validado)

        if(usuario_validado){
            if(password.length < 5){
                res.json({mensaje: "Con_inco"})
            }else{
                if(usuario_validado[0].email_exist === email && usuario_validado[0].pass_exist === password){
                    res.json({usuario_validado, mensaje: 'Correcto', user_name})
                }else{
                    res.json({alert: 'El correo o contraseña son incorrectos', mensaje: "Incorrecto"})
                }
            }
        }
        else{
            res.json({mensaje: "Inexistente",alert1:'El usuario no existe'})
        }

})
let user_name = ''
let email_exist = ''
let pass_exist = ''
app.get('/registro/:usuario/:email/:pass',(req,res)=>{
    user_name = req.params.usuario
    email_exist = req.params.email
    pass_exist = req.params.pass 
    if(pass_exist.length < 5){
        res.json({mensaje: "Incorrecto"})
    }else{
        usuarios_almacenados.push({user_name, email_exist, pass_exist})
        console.log({mensaje:"Correcto", usuarios_almacenados, user_name})
        res.json({mensaje:"Correcto", usuarios_almacenados, user_name})
    }
})
app.get('/login', (req, res)=>{
    res.json(user_name)
    console.log(user_name)
})
app.get('/:tipovida', (req,res)=>{
    let tipovida = req.params.tipovida
    if(tipovida == "Vida1"){
        res.json({infovid: "Mi vida es muy activa"})
    }
    if(tipovida == "Vida2"){
        res.json({infovid: "Tengo mucho trabajo y casi no descanso"})
    }
    if(tipovida == "Vida3"){
        res.json({infovid: "Mi vida es muy relajada y no soy muy activ@"})
    }
    console.log(tipovida)
})
app.listen(port, ()=>{
    console.log(`El puerto esta listo ${port}`)
})
