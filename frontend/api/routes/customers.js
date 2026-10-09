import express from "express";
import { store } from "../data/store.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ success: true, count: store.customers.length, data: store.customers });
});
router.post("/", (req, res) => {
  const { name, contactPerson, email, phone, location } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, message: "Name and email required" });
  const newCust = {
    id: "CUST-" + (store.customers.length + 301),
    name,
    contactPerson: contactPerson || name,
    email,
    phone: phone || "+91 88000 00000",
    location: location || "India",
    totalOrders: 0,
    totalSpent: 0,
    status: "Lead"
  };
  store.customers.unshift(newCust);
  res.status(201).json({ success: true, data: newCust });
});
export default router;
