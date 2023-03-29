const db = require("../database/models");

const Op = db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        /* 
        retorna la vista genresLIST con todos los generos de la db
        */ //findAll trae una promesa que busca todos los datos
       db.Movie.findAll(/* {
        order: [["nombre, "ASC]],
        where:{//donde

            ranking:
        },
        offset: 10,
    
        limit: 5 ,
       } */)
       .then((movies) => {
           return res.render("moviesList", {movies})
       })
    },
    detail: (req,res) =>{
        const movieId = req.params.id;

        db.Movie.findByPk(movieId)
        .then((movie) =>{
            res.render("moviesDetail", {movie})
        })   
    },
    new: (req,res) => {
       db.Movie.findAll({
        order: [
           [ "release_date", "DESC"] 
        ]
       })
       .then((movies) => {
           return res.render("newestMovies", {movies})
       })
    },
    recomended: (req,res) => {
       db.Movie.findAll( {
        where:{
            rating: {[Op.gte]: 8 } //mayor o igual a 9
        },
        order: [
            ["rating", "DESC"]
        ],
        limit: 5 ,
       } )
       .then((movies) => {
           return res.render("recommendedMovies", {movies})
       })
    },  
}