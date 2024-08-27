const db = require("../db/db.config");

// const createUser = async (user) => {
//   const { name, email, password } = user;
//   const sql = `INSERT INTO users (name, email, password) VALUES (?,?,?)`;
//   const [result] = await db.execute(sql, [name, email, password]);
//   return result;
// };

const createUser = async (user) => {
  const { name, email, password } = user;
  const result = await db.admin.create({
    name,
    email,
    password,
  });
  return result;
};

// const getUsers = async () => {
//   const sql = `SELECT * FROM users`;
//   const [result] = await db.query(sql);
//   return result;
// };

const getUsers = async () => {
  const result = await db.admin.findAll();
  return result;
};

const getUserByEmail = async (email) => {
  const result = await db.admin.findOne({
    where: {
      email,
    },
  });
  return result;
};

const deleteUser = async (id) => {
  const result = await db.admin.destroy({
    where: {
      id,
    },
  });
  return result;
};

const updateUser = async (id, user) => {
  const result = await db.admin.update(user, {
    where: {
      id,
    },
  });
  return result;
};

const updateUsers = async (name, user) => {
  const result = await db.admin.update(user, {
    where: {
      name,
    },
  });
  return result;
};
module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  deleteUser,
  updateUser,
  updateUsers,
};
