var express = require('express');
var usuarioDomain = require('../domain/usuarios');
var router = express.Router();

/**
 * Obtener todas las usuarios
 */
router.get('/', function (req, res, next) {
    usuarioDomain.obtenerUsuarios().then(usuarios => {
            res.send(usuarios)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Obtener usuario
 */
router.get('/:usuario_id', function (req, res) {
    var id = req.params.usuario_id;
    usuarioDomain.obtenerUsuario(id).then(usuario => {
            res.send(usuario)
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Agregar usuario
 */
router.post('/crear', function (req, res) {
    var usuario = req.body;
    usuarioDomain.agregarUsuario(usuario).then(() => {
            res.send({
                mensaje: 'Creado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});
/**
 * Eliminar usuario
 */
router.get('/:usuario_id/eliminar', function (req, res) {
    var id = req.params.usuario_id;
    usuarioDomain.eliminarUsuario(id).then(() => {
            res.send({
                mensaje: 'Eliminado correctamente.'
            })
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;