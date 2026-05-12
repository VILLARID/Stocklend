import express from "express";
import cors from "cors";

import dashboardRoutes from "./routes/dashboard.routes.js";
import inventoryRoutes from "./routes/inventory.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import loansRoutes from "./routes/loans.routes.js";
import loansDashboardRoutes from "./routes/loansDashboard.routes.js";
import itemTypesRoutes from "./routes/itemTypes.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

// routes
app.use("/dashboard", dashboardRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/categories", categoryRoutes);
app.use("/loans", loansRoutes);
app.use("/loans/dashboard", loansDashboardRoutes);
app.use("/item-types", itemTypesRoutes);

export default app;