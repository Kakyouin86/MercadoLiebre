const fs = require('fs');
const path = require('path');
//const data = fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8');
const datos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8'));
const mainController = {
    index: (req, res) =>
    {
        res.render('main/home', { datos: datos });
    },
    login: (req, res) =>
    {
        res.render('main/login');
    },
    producto: (req, res) =>
    {
        res.render('main/producto');
    },
    register: (req, res) =>
    {
        res.render('main/register');
    },
    productos: (req, res) =>
    {
        res.render('main/productos', { datos: datos });
    },
    vender: (req, res) =>
    {
        res.render('main/vender', { datos: datos });
    },
}
module.exports = mainController;