// Файл routes/games.js
const { checkAuth } = require("../middlewares/auth");
const gamesRouter = require("express").Router();
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkAuth,
  createGame,
  sendGameCreated
);
// Файл routes/games.js

// Пока запишем порядок действий псевдокодом
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);


// Файл routes/games.js

gamesRouter.delete("/games/:id", checkAuth,  deleteGame, sendGameDeleted);
module.exports = gamesRouter;
