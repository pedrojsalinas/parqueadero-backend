'use strict';
module.exports = (sequelize, DataTypes) => {
    var espacios = sequelize.define('espacios', {
        empresaId: DataTypes.INTEGER,
        estado: DataTypes.INTEGER,
        cubierto: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    espacios.associate = function (models) {
        models.espacios.belongsTo(models.empresa, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return espacios;
};