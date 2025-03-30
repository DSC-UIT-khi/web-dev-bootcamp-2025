const express = require("express");
const mongoConnection = require("./config/mongoConnection");
const BlogRoute = require("./routes/blog.routes");
require("dotenv").config();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Web Development Bootcamp Session 8 Server");
});

app.use("/api/blogs", BlogRoute);

app.listen(port, () => {
  mongoConnection();
  console.log(`Server is running on port ${port}`);
});
