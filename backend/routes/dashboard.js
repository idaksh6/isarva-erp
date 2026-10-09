import express from "express";
import { store } from "../data/store.js";
const router = express.Router();
router.get("/stats", (req, res) => {
  res.json({ success: true, data: store.stats, activities: store.activityLog });
});
export default router;
