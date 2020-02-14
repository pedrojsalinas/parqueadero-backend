var express = require('express');
var models = require('../models');
var router = express.Router();


router.get('/', function (req, res, next) {
    models.servicios_adicionales.findAll({}).then(function (servicios_adicionales) {
        res.send({
            servicios_adicionales
        });
    });
});

module.exports = router;