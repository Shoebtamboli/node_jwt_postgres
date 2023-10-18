const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/authRoutes");

const dotenv = require("dotenv");

dotenv.config();

app.use(express.json()); // for parsing application/json
// Use the routes
app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
