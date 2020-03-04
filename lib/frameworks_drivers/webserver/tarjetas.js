var express = require('express');
var tarjetaDomain = require('../../interface_adapters/controllers/tarjetas');

var router = express.Router();

/**
 * Obtener todas las tarjetas
 */
router.get('/', function (req, res, next) {
    tarjetaDomain.obtenerTarjetas().then(tarjetas => {
            res.send(tarjetas)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener tarjeta
 */
router.get('/:tarjeta_id', function (req, res) {
    var id = req.params.tarjeta_id;
    tarjetaDomain.obtenerTarjeta(id).then(tarjeta => {
            res.send(tarjeta)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar tarjeta
 */
router.post('/crear', function (req, res) {
    var tarjeta = req.body;
    tarjetaDomain.agregarTarjeta(tarjeta).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar tarjeta
 */
router.get('/:tarjeta_id/eliminar', function (req, res) {
    var id = req.params.tarjeta_id;
    tarjetaDomain.eliminarTarjeta(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Actualizar tarjeta
 */
router.put('/:tarjeta_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.tarjeta_id;

    tarjetaDomain.actualizarTarjeta(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;