// Import the Sequelize constructor from sequelize
const { Sequelize } = require("sequelize");
require("dotenv").config();


// Create a new connection instance, using option 3 from the docs
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);


// Export the connection object
module.exports = connection;
