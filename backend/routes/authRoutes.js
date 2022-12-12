import {
  login,
  register,
  verifyEmail,
} from "../controllers/authControllers.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.get("/:partnerId/verify/:token", verifyEmail);
router.post("/login", login);

export default router;
