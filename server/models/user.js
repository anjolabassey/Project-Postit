
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
  }, {
    classMethods: {
      associate: (models) => {
        user.hasMany(models.messages, {
          foreignKey: 'user_id',
          as: 'messages',
        });
        user.hasMany(models.groupuser, {
          foreignKey: 'user_id',
          as: 'groupuser',
        });
      }
    }
  });
  return user;
};