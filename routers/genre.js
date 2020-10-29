const { get } = require('http')

module.exports = (app) => {//Exportar una funcion 
   //recibimos el parametro app
   const genre = require('../controller/genre')
   app.post('/genre/create', genre.create)
   app.put('/genre/update/:id', genre.update)
   app.get('/genre/getAll',genre.getAll)
   app.get('/genre/getOne/:id',genre.getOne)
}