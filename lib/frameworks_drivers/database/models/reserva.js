'use strict';
module.exports = (sequelize, DataTypes) => {
    var reservas = sequelize.define('reservas', {
        horaInicio: DataTypes.DATE,
        horaSalida: DataTypes.DATE,
    }, {
        timestamps: false
    });

    reservas.associate = function (models) {
        models.reservas.belongsTo(models.empresa, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'empresa'
        });
        models.reservas.belongsTo(models.tarjetas, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'tarjeta'
        });
    };

    return reservas;
};