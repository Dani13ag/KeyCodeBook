const BookModel = require('../models/book')

/**
 * Metodo para registrar un nuevo libro
*/
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

/**
 * Metodo para modificar un  libro
*/
exports.update=(req, res)=>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos'
        })
    }

    const book={
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,//editorial
        publicationDate: req.body.publicationDate,
        genre: req.body.genre 
    }

    BookModel.findByIdAndUpdate(req.params.id, book,{new:true})
    // findByIdAndUpdate biscar por el id y modificar 
    //new:true me devuelve los nuevos datos del elemento
    .then(
        (bookUpdated)=>{
            res.send(bookUpdated)
        }
    )
    
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * metodo para listar todos los libros que estan en la plataforma
 */

exports.getAll=(req,res)=>{
    BookModel.find()//find criterio de busqueda cuando queremos algo en especifico
    .populate('genre')/*metodo que nos permite traer los datos de la coleccion con la que se tien la relacion*/
    .exec()// se ejeculta la consulta 
   
    .then((books)=>{res.send(books)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}
/**
 * Metodo para obtener un libro por el id 
*/

exports.getOne=(req,res)=>{
    BookModel.findById(req.params.id)//findById Busque por el id
    .populate('genre')
    .exec()// se ejeculta la consulta 
    .then((books)=>{res.send(books)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para eliminar un libro 
*/
exports.deleteOne=(req,res)=>{
    BookModel.findByIdAndRemove(req.params.id)
    .then((book)=>{res.send(book)})
    .catch(
        (error)=>{
        res.status(500).send({
            message:error.message
        })
    }

    )
}

