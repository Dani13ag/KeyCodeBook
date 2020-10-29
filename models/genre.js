const mongoose = require('mongoose')//requeremos mongoose

/*creamos una constante en la cual vamos a crear un esquema de mongoose 
y le vamos a indicar que necesitamos de mongoose*/
const genreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true },
    /**
     * Campos Boolean
     * 1=false
     * 0=true
     */
})


module.exports = mongoose.model('Genre', genreSchema)//para poder usar lo que cree en otro lado
