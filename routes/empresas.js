var express = require('express');
var models = require('../models');
var router = express.Router();

/**
 * Obtener todas las empresas
 */
router.get('/', function (req, res, next) {
    models.empresa.findAll({
        include: [models.servicios_adicionales] // esta línea te permite incluir relaciones de la tabla
    }).then(function (empresas) {
        res.send({
            empresas
        });
    });
});
/**
 * Agregar empresa
 */
router.post('/crear', function (req, res) {
    models.empresa.create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        fraccion: req.body.fraccion,
        direccion: req.body.direccion,
        num_espacios: req.body.num_espacios,
        precio: req.body.precio,
        descuento: req.body.descuento,
    }).then(function () {
        res.send({
            mensaje: 'Creado correctamente.'
        }).catch((err) => {
            res.send({
                error: err
            });
        });
    });
});
/**
 * Eliminar empresa
 */
router.get('/:empresa_id/eliminar', function (req, res) {
    models.empresa.destroy({
        where: {
            id: req.params.empresa_id
        }
    }).then(function () {
        res.send({
            mensaje: 'Eliminado correctamente.'
        });
    }).catch((err) => {
        res.send({
            error: err
        });
    });
});

module.exports = router;