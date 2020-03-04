var models = require('../../frameworks_drivers/database/models');

exports.agregarPago = function (pago) {
    return new Promise(function (resolve, reject) {
        models.pagos.create({
                valor: pago.valor,
                empresaId: pago.empresaId,
                tarjetaId: pago.tarjetaId,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarPago = function (id) {
    return new Promise(function (resolve, reject) {
        models.pagos.destroy({
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

exports.obtenerPagos = function () {
    return new Promise(function (resolve, reject) {
        models.pagos.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerPago = function (id) {
    return new Promise(function (resolve, reject) {
        models.pagos.findAll({
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

exports.actualizarPago = function (id, obj) {
    return new Promise(function (resolve, reject) {
        models.pagos.update({
                valor: obj.valor,
                empresaId: obj.empresaId,
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