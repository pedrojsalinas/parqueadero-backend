var models = require('../models');

exports.agregarEmpresa = function (emp) {
    return new Promise(function (resolve, reject) {
        models.empresa.create({
                nombre: emp.nombre,
                direccion: emp.direccion,
                latitud: emp.latitud,
                longitud: emp.longitud,
                fraccion: emp.fraccion,
                num_espacios: emp.num_espacios,
                precio: emp.precio,
                descuento: emp.descuento,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarEmpresa = function (id) {
    return new Promise(function (resolve, reject) {
        models.empresa.destroy({
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

exports.obtenerEmpresas = function () {
    return new Promise(function (resolve, reject) {
        models.empresa.findAll({
                include: [models.servicios_adicionales] // esta línea te permite incluir relaciones de la tabla
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerEmpresa = function (id) {
    return new Promise(function (resolve, reject) {
        models.empresa.findAll({
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

exports.actualizarEmpresa = function (id, obj) {
    return new Promise(function (resolve, reject) {
        models.empresa.update({
                nombre: obj.nombre,
                direccion: obj.direccion,
                latitud: obj.latitud,
                longitud: obj.longitud,
                fraccion: obj.fraccion,
                num_espacios: obj.num_espacios,
                precio: obj.precio,
                descuento: obj.descuento,
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