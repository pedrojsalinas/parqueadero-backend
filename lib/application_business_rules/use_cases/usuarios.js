var models = require('../models');

exports.agregarUsuario = function (usuario) {
    return new Promise(function (resolve, reject) {
        models.usuarios.create({
                ip: usuario.ip,
                tarjetaId: usuario.tarjetaId,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarUsuario = function (id) {
    return new Promise(function (resolve, reject) {
        models.usuarios.destroy({
                where: {
                    id
                }
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerUsuarios = function () {
    return new Promise(function (resolve, reject) {
        models.usuarios.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerUsuario = function (id) {
    return new Promise(function (resolve, reject) {
        models.usuarios.findAll({
                where: {
                    id
                }
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.actualizarUsuario = function (id, obj) {
    return new Promise(function (resolve, reject) {
        models.usuarios.update({
                ip: obj.ip,
                tarjetaId: obj.tarjetaId,
            }, {
                where: {
                    id
                }
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};