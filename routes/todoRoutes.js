// -----------------------------------------------------
// Routes for Todo CRUD Operations
// -----------------------------------------------------
import express from "express";
import { getTodos, addTodo, editTodo, deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/add", addTodo);
router.post("/edit", editTodo);
router.post("/delete", deleteTodo);

export default router;
