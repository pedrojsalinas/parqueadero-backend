var models = require('../models');

exports.agregarTarjeta = function (tarjeta) {
    return new Promise(function (resolve, reject) {
        models.tarjetas.create({
                estado: tarjeta.estado,
                saldo: tarjeta.saldo,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarTarjeta = function (id) {
    return new Promise(function (resolve, reject) {
        models.tarjetas.destroy({
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

exports.obtenerTarjetas = function () {
    return new Promise(function (resolve, reject) {
        models.tarjetas.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerTarjeta = function (id) {
    return new Promise(function (resolve, reject) {
        models.tarjetas.findAll({
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

exports.actualizarTarjeta = function (id, obj) {
    return new Promise(function (resolve, reject) {
        models.tarjetas.update({
                estado: obj.estado,
                saldo: obj.saldo,
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