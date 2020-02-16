'use strict';
module.exports = (sequelize, DataTypes) => {
    var servicios_adicionales = sequelize.define('servicios_adicionales', {
        nombre: DataTypes.STRING,
        cantidad: DataTypes.INTEGER,
        precio: DataTypes.DOUBLE,
        descuento: DataTypes.DOUBLE,
    }, {
        timestamps: false
    });

    servicios_adicionales.associate = function (models) {
        models.servicios_adicionales.belongsTo(models.empresa, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'empresa'
        });
    };

    return servicios_adicionales;
};