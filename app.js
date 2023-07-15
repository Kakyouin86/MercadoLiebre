const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mainRoutes = require('./src/routes/mainRoutes.js');
app.use(express.static(path.join(__dirname, './public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(mainRoutes);
app.listen(port, () => { console.log("Servidor corriendo en puerto 3000") });

//npm install -g nodemon --save-dev
//app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, './views/main/home.ejs')) });
//app.get('/', (req, res) => { res.sendFile((__dirname + '/views/home.html')) });
/*
app.get('/home', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/main/home.ejs'));
});

app.get('/producto', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/main/producto.ejs'));
});

app.get('/register', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/main/register.ejs'));
});

app.get('/login', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, './views/main/login.ejs'));
});
*/