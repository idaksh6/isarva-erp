import express from "express";
import cors from "cors";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboard.js";
import inventoryRoutes from "./routes/inventory.js";
import invoicesRoutes from "./routes/invoices.js";
import employeesRoutes from "./routes/employees.js";
import customersRoutes from "./routes/customers.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/invoices", invoicesRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/customers", customersRoutes);

app.use("/dashboard", dashboardRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/invoices", invoicesRoutes);
app.use("/employees", employeesRoutes);
app.use("/customers", customersRoutes);

app.get(["/api/health", "/health", "/"], (req, res) => {
  res.json({ status: "healthy", platform: "Isarva ERP API v1.0", timestamp: new Date() });
});

export default app;
