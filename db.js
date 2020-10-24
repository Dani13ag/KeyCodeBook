const mongoose = require('mongoose') //paquete que permite la comunicacion con nuestra base de datos

const conectDB = () => {
    mongoose.connect('mongodb+srv://Dsniela13ag:3127447986Anto@dani.eou6v.mongodb.net/KeyCodeBook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {//nos queremos conectar a una base de datos
        /**useNewUrlParser: analizar la info que se le quiere emviar a mongo
         * useUnifiedTopology: Escuchar los llamados que hacemos a mongoDB y monitorea
         * loque pasa
         */
        if (error) {
            console.log('error:', error)
        } else {
            console.log('Nos conectamos a la DB')
        }

    })
}

module.exports = { conectDB }/*Nos permite exportar una funcion para
 que pueda ser utilizada en otra parte de nuestro proyecto*/
