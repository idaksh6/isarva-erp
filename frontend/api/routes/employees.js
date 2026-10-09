import express from "express";
import { store } from "../data/store.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ success: true, count: store.employees.length, data: store.employees });
});
router.post("/", (req, res) => {
  const { name, role, department, email, phone, salary } = req.body;
  if (!name || !email || !role) return res.status(400).json({ success: false, message: "Name, email, and role required" });
  const newEmp = {
    id: "EMP-" + (store.employees.length + 101),
    name,
    role,
    department: department || "Engineering",
    email,
    phone: phone || "+91 98000 00000",
    status: "Active",
    salary: Number(salary) || 80000,
    joinDate: new Date().toISOString().split("T")[0]
  };
  store.employees.unshift(newEmp);
  res.status(201).json({ success: true, data: newEmp });
});
export default router;
