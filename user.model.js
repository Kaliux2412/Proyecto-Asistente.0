const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const createHttpError = require('http-errors')


const UserSchemas = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        lowecase: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});

UserSchemas.pre('save', async function(next){
    try{
        if(this.isNew){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword
        }
        next()
    } catch (error){
        next(error);
    }
})
UserSchemas.methods.isValidPassword = async function (password){
    try{
       return await bcrypt.compare(password, this.password)
    }catch(error){
        throw createHttpError.InternalServerError(error.menssage)
    }
}

const User = mongoose.model('user', UserSchemas);
module.exports = User