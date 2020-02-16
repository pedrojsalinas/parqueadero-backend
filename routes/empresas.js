var express = require('express');
var empresaDomain = require('../domain/empresas');

var router = express.Router();

/**
 * Obtener todas las empresas
 */
router.get('/', function (req, res, next) {
    empresaDomain.obtenerEmpresas().then(empresas => {
            res.send(empresas)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener empresa
 */
router.get('/:empresa_id', function (req, res) {
    var id = req.params.empresa_id;
    empresaDomain.obtenerEmpresa(id).then(empresa => {
            res.send(empresa)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar empresa
 */
router.post('/crear', function (req, res) {
    var empresa = req.body;
    empresaDomain.agregarEmpresa(empresa).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar empresa
 */
router.get('/:empresa_id/eliminar', function (req, res) {
    var id = req.params.empresa_id;
    empresaDomain.eliminarEmpresa(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

/**
 * Actualizar empresa
 */
router.put('/:empresa_id/actualizar', function (req, res) {
    var obj = req.body;
    var id = req.params.empresa_id;

    empresaDomain.actualizarEmpresa(id, obj).then(() => {
            res.send({
                mensaje: 'Actualizado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;