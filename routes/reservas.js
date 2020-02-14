var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las reservas
 */
router.get('/', function (req, res, next) {
    models.reservas.findAll({
    }).then(function (reservas) {
        res.send({
            reservas
        });
    });
});

module.exports = router;