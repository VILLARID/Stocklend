const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const dashboardRoutes = require("./routes/dashboard.routes");
const loansRoutes = require("./routes/loans.routes");
const itemTypesRoutes = require("./routes/itemTypes.routes");

app.use("/dashboard", dashboardRoutes);
app.use("/loans", loansRoutes);
app.use("/item-types", itemTypesRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Stocklend backend running"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Stocklend backend running on port ${PORT}`);
});