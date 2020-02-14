var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las pagos
 */
router.get('/', function (req, res, next) {
    models.pagos.findAll({}).then(function (pagos) {
        res.send({
            pagos
        });
    });
});

module.exports = router;