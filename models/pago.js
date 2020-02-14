'use strict';
module.exports = (sequelize, DataTypes) => {
    var pagos = sequelize.define('pagos', {
        valor: DataTypes.DOUBLE,
        empresaId: DataTypes.INTEGER,
        tarjetaId: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    return pagos;
};