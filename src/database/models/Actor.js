module.exports = (sequelize, dataTypes) => {
    let alias = "Actor";
    let cols = {
          id: {
                type: dataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
          },
          first_name: {
                type: dataTypes.STRING(100),
                allowNull: false,
          },
          last_name: {
                type: dataTypes.STRING(100),
                allowNull: false,
          },
          rating: {
                type: dataTypes.DECIMAL(3.1),
          },
    };
    let config = {
          tableName: "actors",
          createdAt: "created_at",
          updatedAt: "updated_at",
    };

    const Actor = sequelize.define(alias, cols, config);

    return Actor;
};