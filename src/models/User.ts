const { Sequelize, DataTypes, Model } = require('sequelize');
const seq = require('../database/db.js');

class User extends Model {}

//FIXME: apply the real model from the database...

User.init({
  nickName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  seq,
  modelName: 'User'
});
