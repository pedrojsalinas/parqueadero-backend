'use strict';
module.exports = (sequelize, DataTypes) => {
    var pagos = sequelize.define('pagos', {
        valor: DataTypes.DOUBLE,
        empresaId: DataTypes.INTEGER,
        tarjetaId: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    pagos.associate = function (models) {
        models.pagos.belongsTo(models.empresa, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    pagos.associate = function (models) {
        models.pagos.belongsTo(models.tarjetas, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return pagos;
};