var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las empresas
 */
router.get('/', function (req, res, next) {
    models.empresa.findAll({
    }).then(function (empresas) {
        res.send({
            empresas
        });
    });
});

module.exports = router;