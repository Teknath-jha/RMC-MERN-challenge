const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("GET API is working");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server running on ${PORT}`));
