'user strict';


const { Model } = require("sequelize");


module.exports(sequelize, DataTypes => {
    class Product extends Model {
        static associate(models) {
            // Dasturni yozishda databasedan malumotlarni olish yoki qushishda kerak bo'ladi
            // Join functionlarda ham kerak boladi
            // Sql levelda emas app levelda ishlatilinadi
            Product.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
            });
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: "product",
            modelName: "Product",
        }
    )
})