const express = require('express') //Estamos utilizando Express en nuestro proyecto
const cors = require('cors')
const bodyParse = require('body-parser')
const { conectDB } = require('./db')
const app = express() //Se convierte la constante express en un objeto, por el cual vamos a poder trabajar
app.use(cors())
app.use(bodyParse.json())//todos los elementos que se le envian a la API sean tipo json

conectDB()//estamos ejecutando el modulo de nuestra conexion a la base de datos
require('./routers/user')(app)//para crear rutas necesitamos express
require('./routers/genre')(app)
//metodo app.listen = escuchar
//puerto 3000 es al puerto que nos vamos a conectar
app.listen(3000, () => {// collback= una funcion dentro de otra
    console.log('Se levanto el servidor :)')
}) /* con estas 3 lineas de codigo le estamos diciendo a express que cuando el servidor se levante
si todo salio bien que nos muestre el mensaje*/
