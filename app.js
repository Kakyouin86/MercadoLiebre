//npm init
//npm install express
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
//app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, '/public')))
app.listen(3000, () => { console.log("Servidor corriendo en puerto 3000") });
app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, './views/producto.html')) });
//app.get('/', (req, res) => { res.sendFile((__dirname + '/views/home.html')) });