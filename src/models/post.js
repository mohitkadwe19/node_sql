module.exports = function (sequelize, DataTypes) {
  const postModel = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false,
    },
  });
  return postModel;
};
