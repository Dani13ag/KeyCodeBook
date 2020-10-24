module.exports = (app) => {//Exportar una funcion 
   //recibimos el parametro app
   const genre = require('../controller/genre')
   app.post('/genre/create', genre.create)


}