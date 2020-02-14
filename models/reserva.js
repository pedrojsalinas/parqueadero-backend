'use strict';
module.exports = (sequelize, DataTypes) => {
    var reservas = sequelize.define('reservas', {
        empresaId: DataTypes.INTEGER,
        tarjetaId: DataTypes.INTEGER,
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
            }
        });
    };

    return reservas;
};