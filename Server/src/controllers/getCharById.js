const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then((result) => result.data)
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
        res.writeHead(200, {"Conten-Type": "application/json"})
        res.end(JSON.stringify(character))  
        })
        .catch((error)=>{
            res.writeHead(500, {"Content-Type": "text/plain"})
            res.end(error.message)
        })
}









module.exports = {
    getCharById,
}