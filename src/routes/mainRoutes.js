const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers.js');
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/producto', mainController.producto);
router.get('/register', mainController.register);
router.get('/productos', mainController.productos);
module.exports = router;