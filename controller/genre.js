const GenreModel = require('../models/genre')//esta requiriendo un modelo

/**
 * Metodo para crear un nuevo genero
*/
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos lo campos son obligatorios'

        })
    }

    const genre = new GenreModel({//vamos a crear un nuevo usuario
        name: req.body.name,
        status: req.body.status,

    })
    genre.save()// save metodo de mongoose-guarda
        .then((dataGenre) => { res.send(dataGenre) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500).send({//estado 500 (error de servidor)
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}

/**
 * Metodo para modificar 
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


    const genre = {
        name: req.body.name,
        status: req.body.status
    }

    /**
     * findByIdAndUpdate=Metodo de mongoose que perite buscar por id y actualizar un genero
     * El id del genero= req.params.id es el id que se envia por la URL
     */
    GenreModel.findByIdAndUpdate(req.params.id, genre, {new:true})
        .then(
            (genreUpdate) => {
                res.send(genreUpdate)
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
 * Metodo para listar todos los generos 
 */
exports.getAll=(req,res)=>{
    GenreModel.find()
    .then(
        (genres)=>{
            res.send(genres)
        }
    ).catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para listar solo un genero
 */
exports.getOne=(req,res)=>{
    GenreModel.findById(req.params.id)
    .then(
        (genre)=>{res.send(genre)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}