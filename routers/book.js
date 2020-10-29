module.exports = (app) => {//Exportar una funcion 
    //recibimos el parametro app
    const book = require('../controller/book')
    app.post('/book/create', book.create)
    app.put('/book/update/:id', book.update)
    app.get('/book/getAll', book.getAll)
    app.get('/book/getOne/:id', book.getOne)
    app.delete('/book/deleteOne/:id',book.deleteOne)
}