var express = require('express');
var router = express.Router();
var reservaDomain = require('../../interface_adapters/controllers/reservas');

/**
 * Obtener todas las reservas
 */
router.get('/', function (req, res, next) {
    reservaDomain.obtenerReservas().then(reservas => {
            res.send(reservas)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener reserva
 */
router.get('/:reserva_id', function (req, res) {
    var id = req.params.reserva_id;
    reservaDomain.obtenerReserva(id).then(reserva => {
            res.send(reserva)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar reserva
 */
router.post('/crear', function (req, res) {
    var reserva = req.body;
    reservaDomain.agregarReserva(reserva).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar reserva
 */
router.get('/:reserva_id/eliminar', function (req, res) {
    var id = req.params.reserva_id;
    reservaDomain.eliminarReserva(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

/**
 * Actualizar reserva
 */
router.put('/:reserva_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.reserva_id;

    reservaDomain.actualizarReserva(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;
