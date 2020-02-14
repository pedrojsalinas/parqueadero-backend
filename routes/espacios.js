var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las espacios
 */
router.get('/', function (req, res, next) {
    models.espacios.findAll({
    }).then(function (espacios) {
        res.send({
            espacios
        });
    });
});

module.exports = router;