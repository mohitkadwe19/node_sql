const db = require("../db/db.config");

const createUser = async (user) => {
  const { name, email, password } = user;
  const sql = `INSERT INTO users (name, email, password) VALUES (?,?,?)`;
  const [result] = await db.execute(sql, [name, email, password]);
  return result;
};

const getUsers = async () => {
  const sql = `SELECT * FROM users`;
  const [result] = await db.query(sql);
  return result;
};

const getUserByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [result] = await db.execute(sql, [email]);
  return result;
};

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
};
