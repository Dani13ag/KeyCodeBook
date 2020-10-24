const mongoose = require('mongoose');

/*creamos una constante en la cual vamos a crear un esquema de mongoose 
y le vamos a indicar que necesitamos de mongoose*/
const bookSchema = new mongoose.Schema({
    name: { type: String, require: true },
    author: { type: String, require: true },
    pageNumber: { type: Number },
    publisher: { type: String, require: true },//editorial
    publicationDate: { type: Date },

    //para hacer relaciones con otras colecciones
    //genre:{type:mongoose.Schema.Types.ObjectId,ref:'Genre'}//un libro solo tiene un genero
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }]
    //enserllamos en un arreglo[]para que un linro pueda dener varios generos

})

module.exports = mongoose.model('Book', bookSchema)
//lo exportamos para poder utilizar de forma facil

