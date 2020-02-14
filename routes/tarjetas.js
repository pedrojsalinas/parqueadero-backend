var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las tarjetas
 */
router.get('/', function (req, res, next) {
    models.tarjetas.findAll({}).then(function (tarjetas) {
        res.send({
            tarjetas
        });
    });
});

module.exports = router;