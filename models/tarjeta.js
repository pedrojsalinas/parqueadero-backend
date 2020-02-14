'use strict';
module.exports = (sequelize, DataTypes) => {
    var tarjetas = sequelize.define('tarjetas', {
        estado: DataTypes.INTEGER,
        saldo: DataTypes.DOUBLE,
    }, {
        timestamps: false
    });

    return tarjetas;
};