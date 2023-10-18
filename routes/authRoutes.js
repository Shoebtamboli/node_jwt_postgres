const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("Hello, World!");
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", verifyToken, getAllUsers);
router.get("/users/:id", verifyToken, getUserById);

module.exports = router;
