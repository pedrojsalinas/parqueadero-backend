'use strict';
module.exports = (sequelize, DataTypes) => {
    var tarjetas = sequelize.define('tarjetas', {
        estado: DataTypes.INTEGER,
        saldo: DataTypes.DOUBLE,
    }, {
        timestamps: false
    });

    tarjetas.associate = function (models) {
        models.tarjetas.hasMany(models.pagos);
        models.tarjetas.belongsTo(models.usuarios, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return tarjetas;
};