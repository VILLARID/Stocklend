require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const healthRoutes = require("./routes/health.routes");
const itemTypesRoutes = require("./routes/itemTypes.routes");
const borrowersRoutes = require("./routes/borrowers.routes");
const loansRoutes = require("./routes/loans.routes");

app.use("/api/health", healthRoutes);
app.use("/api/item-types", itemTypesRoutes);
app.use("/api/borrowers", borrowersRoutes);
app.use("/api/loans", loansRoutes);

module.exports = app;