'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.Product, {
                foreignKey: "userId",
                as: "user"
            })
            // defaultValue
            // type
            // unique
            // primaryKey
            // allowNull

        }
    }
    // 
    User.init(
        {
            id: {
                type: DataTypes.INTEGER
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            timestamps: true,
        }
    )
}