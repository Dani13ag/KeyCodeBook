module.exports = (app) => {//Exportar una funcion 
    //recibimos el parametro app
    const book = require('../controller/book')
    app.post('/book/create', book.create)

}