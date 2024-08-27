// const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const { Sequelize, DataTypes } = require("sequelize");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const db = pool.promise();

// db.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       console.log("Database connection was closed.");
//     }
//     if (err.code === "ER_CON_COUNT_ERROR") {
//       console.log("Database has too many connections.");
//     }
//     if (err.code === "ECONNREFUSED") {
//       console.log("Database connection was refused.");
//     }
//   }
//   if (connection) connection.release();
//   return;
// });

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("connected...🟢");
  })
  .catch((err) => {
    console.log("Error" + err);
    throw err;
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = connection;

db.admin = require("../models/admin")(connection, DataTypes);
db.post = require("../models/post")(connection, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});

module.exports = db;
