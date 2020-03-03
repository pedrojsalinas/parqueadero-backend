var express = require('express');
var router = express.Router();
var servicioDomain = require('../domain/servicios_adicionales');

/**
 * Obtener todas las servicios
 */
router.get('/', function (req, res, next) {
    servicioDomain.obtenerServicios().then(servicios => {
            res.send(servicios)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener servicio
 */
router.get('/:servicio_id', function (req, res) {
    var id = req.params.servicio_id;
    servicioDomain.obtenerServicio(id).then(servicio => {
            res.send(servicio)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar servicio
 */
router.post('/crear', function (req, res) {
    var servicio = req.body;
    servicioDomain.agregarServicio(servicio).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar servicio
 */
router.get('/:servicio_id/eliminar', function (req, res) {
    var id = req.params.servicio_id;
    servicioDomain.eliminarServicio(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Actualizar servicio
 */
router.put('/:servicio_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.servicio_id;

    servicioDomain.actualizarServicio(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;
