const db = require("../database/models");

module.exports = {
    list: (req,res) => {
        /* 
        retorna la vista genresLIST con todos los generos de la db
        */ //findAll trae una promesa que busca todos los datos
       db.Genre.findAll()
       .then((genres) => {
           return res.render("genresList", {genres})
       })
    },
    detail: (req,res) =>{
        const genreId = req.params.id;

        db.Genre.findByPk(genreId)
        .then((genre) =>{
            res.render("genresDetail", {genre})
        })   
    },
}