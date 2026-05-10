const express = require("express");
const app = express();

const dashboardRoutes = require("./routes/dashboard.routes"); // o donde esté

app.use(express.json());

app.use("/dashboard", dashboardRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});