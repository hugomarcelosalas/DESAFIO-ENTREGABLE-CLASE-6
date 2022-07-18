const express = require("express");
const app = express();

const fs = require('fs');


const data = fs.readFileSync('./productos.txt', 'utf-8' );
const productos = JSON.parse(data);






class Contenedor {
    constructor (title, price, thumbnail, id){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id
    }
     

}

app.get('/productos', (req, res)=> {
   
    res.send(productos)
})

app.get('/productoRandom', (req, res)=> {
    let rand = Math.floor(Math.random()*productos.length);
let randomValue = productos[rand];
res.send(randomValue)

    
   
})

const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error=>console.log(`Error: ${error}`))