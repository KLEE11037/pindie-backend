const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth");

const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe
} = require("../controllers/users");
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
  "/users",
  checkEmptyNameAndEmailAndPassword,
  findAllUsers,
  checkIsUserExists,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
// Файл routes/users.js

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated

);
usersRouter.delete("/users/:id",  checkAuth, deleteUser, sendUserDeleted);
module.exports = usersRouter;
