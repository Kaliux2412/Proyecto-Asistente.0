const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const{ pool } = require('./dbConfig')
const bcrypt = require('bcrypt')
const User = require('./user.model')

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField:"password"
    }, async(email, password, done)=>{
        try{
            const user = await User.findOne({email})

            if(!user){
                return done(null, false, {message: 'El nombre/email no estan registrados'})
            }

            const isMatch = await user.isValidPassword(password)

            return isMatch 
                ? done(null, user)
                : done(null, false, {message: "Contraseña Incorrecta"})

        }catch(error){
            done(error)
        }
    })
);

passport.serializeUser(function (user, done){
    done(null, user.id)
});

passport.deserializeUser(function (id, done){
    User.findById(id, function (err, user){
        done(err, user)
    });
});


// function initialize(passport){
// const authenticateUser = (email, password, done) =>{
//     pool.query(
//         `SELECT * FROM  "proyecto_asistente".usuarios  WHERE email = $1`, [email], (err, results) =>{
//             if(err){
//                 throw err;
//             }
//             console.log(results.rows)
//             if(results.rows.length > 0 ){
//                 const user = results.rows[0]

//                 bcrypt.compare(password, user.password, (err, isMatch)=>{
//                     if(err){
//                         throw err;
//                     }
//                     if(isMatch){
//                         return done(null, user);
//                     }else{
//                         return done(null, false, {mensaje: "La constraseña es incorrecta"})
//                     }
//                 });
//             }else{
//                 return done(null, false, {mensaje: "El email no ha sido registrado"})
//             }
//         }
//     )
// }

//     passport.use(
        
//         new LocalStrategy(
//             {
//                 usernameField: 'email',
//                 passwordField: 'password'
//             }, authenticateUser
//         )
//     );
//     passport.serializeUser ((user, done) => done(null, user.id));

//     passport.deserializeUser((id, done) =>{
//         pool.query(
//             `SELECT * FROM "proyecto_asistente".usuarios WHERE id = $1`, [id], (err, results)=>{
//                 if(err){
//                     throw err;
//                 }
//                 return done(null, results.rows[0])
//             });
//     });
// }
// module.exports = initialize;