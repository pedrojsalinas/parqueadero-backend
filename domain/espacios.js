var models = require('../models');

exports.agregarEspacio = function (espacio) {
    return new Promise(function (resolve, reject) {
        models.espacios.create({
                estado: espacio.estado,
                empresaId: espacio.empresaId,
                cubierto: espacio.cubierto,
            }).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.eliminarEspacio = function (id) {
    return new Promise(function (resolve, reject) {
        models.espacios.destroy({
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

exports.obtenerespacios = function () {
    return new Promise(function (resolve, reject) {
        models.espacios.findAll({}).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.obtenerEspacio = function (id) {
    return new Promise(function (resolve, reject) {
        models.espacios.findAll({
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

exports.actualizarEspacio = function (id, obj) {
    console.log("TCL: exports.actualizarEspacio -> obj", obj)
    return new Promise(function (resolve, reject) {
        models.espacios.update({
                estado: obj.estado,
                empresaId: obj.empresaId,
                cubierto: obj.cubierto,
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