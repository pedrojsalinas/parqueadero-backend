var express = require('express');
var router = express.Router();
var espacioDomain = require('../../interface_adapters/controllers/espacios');


/**
 * Obtener todas las espacios
 */
router.get('/', function (req, res, next) {
    espacioDomain.obtenerespacios().then(espacios => {
            res.send(espacios)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener espacio
 */
router.get('/:espacio_id', function (req, res) {
    var id = req.params.espacio_id;
    espacioDomain.obtenerEspacio(id).then(espacio => {
            res.send(espacio)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar espacio
 */
router.post('/crear', function (req, res) {
    var espacio = req.body;
    espacioDomain.agregarEspacio(espacio).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar espacio
 */
router.get('/:espacio_id/eliminar', function (req, res) {
    var id = req.params.espacio_id;
    espacioDomain.eliminarEspacio(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

/**
 * Actualizar espacio
 */
router.put('/:espacio_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.espacio_id;

    espacioDomain.actualizarEspacio(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;
