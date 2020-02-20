'use strict';
module.exports = (sequelize, DataTypes) => {
    var empresa = sequelize.define('empresa', {
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        latitud: DataTypes.DOUBLE,
        longitud: DataTypes.DOUBLE,
        fraccion: DataTypes.STRING,
        direccion: DataTypes.STRING,
        num_espacios: DataTypes.INTEGER,
        precio: DataTypes.DOUBLE,
        descuento: DataTypes.DOUBLE,
    }, {
        timestamps: false
    });

    empresa.associate = function (models) {
        models.empresa.hasMany(models.servicios_adicionales);
        models.empresa.hasMany(models.espacios);
        models.empresa.hasMany(models.reservas);
        models.empresa.hasMany(models.pagos);
    };

    return empresa;
};