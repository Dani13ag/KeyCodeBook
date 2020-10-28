const { send } = require('process')
const { create } = require('../models/user')
const userModel = require('../models/user')//esta requiriendo un modelo

/**se exportaran cada uno de los metodos 
 * METODOS PARA ALMACENAR UN NUEVO USUARIO
 * con una funcion flecha y esta recibira 2 parametros
 * req=todo lo que enviamos desde el body (form)
 * res=todo la respuesta que se devolvera 
*/
exports.create = (req, res) => {
    // if(!req.body){ estamos negando la condicion si no hay datos 

    //validamos que todos los datos del formulario esten llenos 
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }




    const user = new userModel({//vamos a crear un nuevo usuario
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    })


    /**save =Se le dice a mongoose que se creo una nueva instancia de un modelo 
     * que porfavor lo almacene en la base de datos 
     * save es una promesa y como es una promesa usaremos 
     * THEN=Cuando la promesa se cumple
     * CATH=
     * CALLBACK=recibe una varianle llamada dataUSER
     */
    user.save()// save metodo de mongoose
        .then((dataUser) => { res.send(dataUser) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500) - send({//estado 500 (error de servidor)
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}
/**
 *Modificar Datos 
 * @param {*} req =>todo lo que enviamos desde el body
 * @param {*} res =>la respuesta que se devolvera
 */
exports.update = (req, res) => {
    /**
     * Validamos que todos los campos del formulario esten llenos 
     */
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }


    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    }

    /**
     * findByIdAndUpdate=Metodo de mongoose que perite buscar por id y actualizar un usuario
     * El id del usuario = req.params.id es el id que se envia por la URL
     */
    userModel.findByIdAndUpdate(req.params.id, user, {new:true})
        .then(
            (userUpdate) => {
                res.send(userUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

/**
 * Metodo para obtener todos los usuarios
 */
exports.getAll=(req,res)=>{
    userModel.find()
    .then((users)=>{res.send(users)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para obtener un usuario
 */
exports.getOne=(req,res)=>{
    userModel.findById(req.params.id)//findById Busque por el id
 
    .then((user)=>{res.send(user)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para eliminar un usuario
*/
exports.deleteOne=(req,res)=>{
    userModel.findByIdAndRemove(req.params.id)
    .then((user)=>{res.send(user)})
    .catch(
        (error)=>{
        res.status(500).send({
            message:error.message
        })
    }

    )
}