const homeService = require("../service/home.service");

const createUser = async (req, res) => {
  try {
    const isUserExit = await homeService.getUserByEmail(req.body.email);
    if (isUserExit.length > 0) {
      return res.json({ message: "User already exist.change your email" });
    }
    const result = await homeService.createUser(req.body);
    if (result.affectedRows === 1) {
      res.json({ message: "User created successfully" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await homeService.getUsers();
    res.json({ users: result });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
