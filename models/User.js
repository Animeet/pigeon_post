// Import Model and DataTypes from sequelize
const { Model, DataTypes } = require("sequelize");
const db = require('../config/connection');


// Create a User class and extend the Model class
class User extends Model {}


// Call User.init and setup a couple columns/fields - email & password as string
User.init(
  {
    email_address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6,
      },
    },
  }, {
    sequelize: db,
    modelName: "user",
  }
);


// Export the User model
module.exports = User;
