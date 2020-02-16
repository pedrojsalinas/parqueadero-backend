var models = require('../models');

exports.agregarServicio = function (servicio) {
    return new Promise(function (resolve, reject) {
        models.servicios_adicionales.create({
                empresaId: servicio.empresaId,
                nombre: servicio.nombre,
                cantidad: servicio.cantidad,
                precio: servicio.precio,
                descuento: servicio.descuento,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarServicio = function (id) {
    return new Promise(function (resolve, reject) {
        models.servicios_adicionales.destroy({
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

exports.obtenerServicios = function () {
    return new Promise(function (resolve, reject) {
        models.servicios_adicionales.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerServicio = function (id) {
    return new Promise(function (resolve, reject) {
        models.servicios_adicionales.findAll({
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