const express = require("express");
const UserController = require("../controllers/user");
const middleware_user_authenticated = require("../middleware/authenticated_user");

const api = express.Router();

api.post("/signup", UserController.signUp);
api.post("/signin", UserController.signIn);
api.get("/getavatar/:avatarName", UserController.getAvatar);
api.get(
  "/users",
  [middleware_user_authenticated.ensureAuth],
  UserController.getUsers
);
api.get(
  "/activeusers",
  [middleware_user_authenticated.ensureAuth],
  UserController.getActiveUsers
);
api.put(
  "/updateuser/:id",
  [middleware_user_authenticated.ensureAuth],
  UserController.updateUser
);
api.put(
  "/activateuser/:id",
  [middleware_user_authenticated.ensureAuth],
  UserController.activateUser
);
api.delete(
  "/deleteuser/:id",
  [middleware_user_authenticated.ensureAuth],
  UserController.deleteUser
);
api.post(
  "/signupadmin",
  [middleware_user_authenticated.ensureAuth],
  UserController.signUpAdmin
);

module.exports = api;
