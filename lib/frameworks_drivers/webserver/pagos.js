var express = require('express');
var router = express.Router();
var pagoDomain = require('../../interface_adapters/controllers/pagos');


/**
 * Obtener todas las pagos
 */
router.get('/', function (req, res, next) {
    pagoDomain.obtenerPagos().then(pagos => {
            res.send(pagos)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener pago
 */
router.get('/:pago_id', function (req, res) {
    var id = req.params.pago_id;
    pagoDomain.obtenerPago(id).then(pago => {
            res.send(pago)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar pago
 */
router.post('/crear', function (req, res) {
    var pago = req.body;
    pagoDomain.agregarPago(pago).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar pago
 */
router.get('/:pago_id/eliminar', function (req, res) {
    var id = req.params.pago_id;
    pagoDomain.eliminarPago(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

/**
 * Actualizar pago
 */
router.put('/:pago_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.pago_id;

    pagoDomain.actualizarPago(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});


module.exports = router;

