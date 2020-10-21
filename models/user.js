const mongoose = require('mongoose')//requeremos mongoose

/**para creara un esquema creamos una constante y usamos en new
 * cuando utilizamos la palabra NEW decimos que vamos a crear una nueva instancia
 * en este caso seria un esquema de un usuario
 */
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },//primer nombre tipo text y campo requerido la key es firstName
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    birthDate: { type: Date },//Fecha de nacimiento tipo fecha no pusimos campo obligatorio
    age: { type: Number }//edad tipo numerico
})

/**debemos exportar nuestro esquema*/
module.exports = mongoose.model('User', userSchema)//para poder usar lo que cree en otro lado
//user es el nombre de la tabla
