/* const { sequelize } = require("."); */

module.exports = 
    (sequelize, dataTypes) => {
        //nombre de tabla
        const alias = "Model";
        //nombre de columna
        const cols = {
            id: {
                type: dataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name:{
                type:dataTypes.STRING(100),
                allowNull: false,
            },
            ranking:{
                type: dataTypes.INTEGER(10).UNSIGNED,
                allowNull:false,
            },
            active:{
                type: dataTypes.BOOLEAN,
                allowNull:false,
            }
        }

        const config = {
            tableName: "model",
            timestamps: false,
        }

    const Model = sequelize.define( alias ,cols , config)
    return Model;
}