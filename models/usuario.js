'use strict';
module.exports = (sequelize, DataTypes) => {
    var usuarios = sequelize.define('usuarios', {
        ip: DataTypes.STRING,
        tarjetaId: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    return usuarios;
};