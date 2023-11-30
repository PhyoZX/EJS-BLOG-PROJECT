const express = require("express");
const path = require("path");

const router = express.Router();

const postController = require("../controller/post");
const userController = require("../controller/user");

const {isPremium} = require("../middleware/is-premium");

router.get("/",postController.renderHomePage);

router.get("/post/:postId",postController.getPost);

router.get("/save/:id",isPremium,postController.savePostAsPDF);

router.get("/profile/:id",userController.getPublicProfile);

module.exports = router;