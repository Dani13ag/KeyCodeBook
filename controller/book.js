const BookModel = require('../models/book')

//metodo para registrar un nuevo libro
exports.create = (req, res) => {
    //validar que los campos esten llenos
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos'
        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,//editorial
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    })

    book.save()// save metodo de mongoose-guarda
        .then(dataBook => { res.send(dataBook) }
        )//si hace esto bien
        .catch(error => {//si no ejecute el cath
            return res.status(500).send({//estado 500 (error de servidor)
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        }
        )
}


