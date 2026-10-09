import express from "express";
import { store } from "../data/store.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ success: true, count: store.invoices.length, data: store.invoices });
});
router.post("/", (req, res) => {
  const { client, amount, dueDate, items } = req.body;
  if (!client || !amount) return res.status(400).json({ success: false, message: "Client and amount required" });
  const newInv = {
    id: "INV-2026-" + String(store.invoices.length + 86).padStart(3, "0"),
    client,
    amount: Number(amount),
    date: new Date().toISOString().split("T")[0],
    dueDate: dueDate || new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0],
    status: "Pending",
    items: Number(items) || 1
  };
  store.invoices.unshift(newInv);
  res.status(201).json({ success: true, data: newInv });
});
router.patch("/:id/status", (req, res) => {
  const inv = store.invoices.find(i => i.id === req.params.id);
  if (!inv) return res.status(404).json({ success: false, message: "Invoice not found" });
  inv.status = req.body.status;
  res.json({ success: true, data: inv });
});
export default router;
