const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth");

const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
  "/categories",
  checkEmptyName,
  findAllCategories,
  checkIsCategoryExists,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
