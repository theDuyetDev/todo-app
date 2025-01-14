import express from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  update,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", deleteById);

export default router;
