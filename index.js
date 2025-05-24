// -----------------------------------------------------
// Server Entry Point - Todo Or Not Todo 📝
// -----------------------------------------------------
// Bootstraps the Express server, sets middleware,
// connects to PostgreSQL, and mounts the todo routes.
// -----------------------------------------------------

// -----------------------------------------------------
// Imports & Config Setup
// -----------------------------------------------------
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import todoRoutes from "./routes/todoRoutes.js";
import "./db/db.js";

dotenv.config();

// -----------------------------------------------------
// Express App Initialization
// -----------------------------------------------------
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------------------
// View + Middleware
// -----------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------------
// Delegate route handling to router
// -----------------------------------------------------
app.use("/", todoRoutes);

// -----------------------------------------------------
// Server Start
// -----------------------------------------------------
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});