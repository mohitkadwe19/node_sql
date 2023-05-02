const homeService = require("../service/home.service");

const createUser = async (req, res) => {
  try {
    const isUserExit = await homeService.getUserByEmail(req.body.email);

    if (!!isUserExit) {
      return res.json({ message: "User already exist.change your email" });
    }
    const result = await homeService.createUser(req.body);
    if (result.admin.options.isNewRecord === true) {
      return res.json({ message: "User created successfully" });
    } else {
      return res.json({ message: "User not created" });
    }
  } catch (error) {
    return res.json({ error: error.message });
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

const deleteUser = async (req, res) => {
  try {
    const result = await homeService.deleteUser(req.params.id);
    if (result === 1) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await homeService.updateUser(req.params.id, req.body);
    if (result.length === 1) {
      res.json({ message: "User updated successfully" });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateUsers = async (req, res) => {
  try {
    const result = await homeService.updateUsers(req.params.name, req.body);
    console.log(result);
    if (result.length === 1) {
      res.json({ message: "User updated successfully" });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  updateUsers,
};
