module.exports = (app) => {//Exportar una funcion 
    //recibimos el parametro app
    const genre = require('../controller/genre')
    app.post('/genre/create', genre.create)
   
 //creamos una nueva ruta por el metodo put para modificar
   // app.put('/genre/update/:id', genre.update) 
   
}