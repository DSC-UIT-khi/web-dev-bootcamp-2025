const {
  CreateBlogController,
  GetBlogController,
  GetBlogByIdController,
} = require("../controllers/blog.controller");

const router = require("express").Router();

router.post("/", CreateBlogController);

router.get("/", GetBlogController);

router.get("/:id", GetBlogByIdController);

module.exports = router;
