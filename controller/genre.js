const GenreModel = require('../models/genre')//esta requiriendo un modelo

/*METODO PARA CREAR UN NUEVO GENERO CON
LOS PARAMETROS REQ Y RES*/
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