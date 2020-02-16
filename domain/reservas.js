var models = require('../models');

exports.agregarReserva = function (reserva) {
    return new Promise(function (resolve, reject) {
        models.reservas.create({
                empresaId: reserva.empresaId,
                tarjetaId: reserva.tarjetaId,
                horaInicio: reserva.horaInicio,
                horaSalida: reserva.horaSalida,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarReserva = function (id) {
    return new Promise(function (resolve, reject) {
        models.reservas.destroy({
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

exports.obtenerReservas = function () {
    return new Promise(function (resolve, reject) {
        models.reservas.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerReserva = function (id) {
    return new Promise(function (resolve, reject) {
        models.reservas.findAll({
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