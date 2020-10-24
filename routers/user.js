module.exports = (app) => {//Exportar una funcion //recibimos el parametro app
    const user = require('../controller/user')
    app.post('/user/create', user.create)
    //app=expres vamos a crear una nueva ruta por el metodo post
    //se indica cual sera la ruta
    //cuando se reconosca la ruta ira al metodo de controlador user/create

    app.put('/user/update/:id', user.update)
    //creamos una nueva ruta por el metodo put para modificar
}