'use strict';
module.exports = (sequelize, DataTypes) => {
    var pagos = sequelize.define('pagos', {
        valor: DataTypes.DOUBLE,
    }, {
        timestamps: false
    });

    pagos.associate = function (models) {
        models.pagos.belongsTo(models.tarjetas, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'tarjeta'
        });
        models.pagos.belongsTo(models.empresa, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },
            as: 'empresa'
        });
    };

    return pagos;
};