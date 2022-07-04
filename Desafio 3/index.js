const express = require('express')

const app = express()
const PORT = 8085

const Contenedor = require('./contenedor')
const contenedorProducts =  new Contenedor('products.json')

//productos

app.get('/productos', (req, res) => { 
    contenedorProducts. getAll()
    .then(r => res.send(r))
})

//productoRandom

app.get('/productoRandom', (req, res) => {
    contenedorProducts. getByAleatorioEntre(7,1 )
    .then(r => res.send(r))
})

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server.`, e)) 