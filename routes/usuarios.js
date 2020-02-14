var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las usuarios
 */
router.get('/', function (req, res, next) {
    models.usuarios.findAll({
    }).then(function (usuarios) {
        res.send({
            usuarios
        });
    });
});

module.exports = router;