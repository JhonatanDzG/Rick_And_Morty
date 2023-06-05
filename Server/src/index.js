const http = require("http");
const {
    getCharById
} = require("./controllers/getCharById.js")

http.createServer(
    (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        const {
            url
        } = req;

        if (req.url.includes("/rickandmorty/character")) {
            const id = req.url.split("/").at(-1);
            getCharById(res, id);
        }

    }).listen(3001, console.log("Port on 3001"));