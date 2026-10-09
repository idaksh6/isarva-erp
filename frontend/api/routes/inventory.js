import express from "express";
import { store } from "../data/store.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ success: true, count: store.inventory.length, data: store.inventory });
});
router.post("/", (req, res) => {
  const { name, category, sku, stock, minStock, price } = req.body;
  if (!name || !sku) return res.status(400).json({ success: false, message: "Name and SKU required" });
  const newItem = {
    id: "INV-" + String(store.inventory.length + 1).padStart(3, "0"),
    name,
    category: category || "General",
    sku,
    stock: Number(stock) || 0,
    minStock: Number(minStock) || 5,
    price: Number(price) || 0,
    status: Number(stock) === 0 ? "Out of Stock" : (Number(stock) < (Number(minStock) || 5) ? "Low Stock" : "In Stock")
  };
  store.inventory.unshift(newItem);
  res.status(201).json({ success: true, data: newItem });
});
router.delete("/:id", (req, res) => {
  const idx = store.inventory.findIndex(i => i.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: "Item not found" });
  const del = store.inventory.splice(idx, 1)[0];
  res.json({ success: true, data: del });
});
export default router;
