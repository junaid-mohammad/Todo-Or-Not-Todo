// -----------------------------------------------------
// Controller: Todo CRUD Handlers
// -----------------------------------------------------
import db from "../db/db.js";

export async function getTodos(req, res) {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    const items = result.rows;

    const today = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
    });

    res.render("index", {
      listTitle: today,
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function addTodo(req, res) {
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [req.body.newItem]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

export async function editTodo(req, res) {
  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [
      req.body.updatedItemTitle,
      req.body.updatedItemId,
    ]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTodo(req, res) {
  try {
    await db.query("DELETE FROM items WHERE id = $1", [req.body.deleteItemId]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}