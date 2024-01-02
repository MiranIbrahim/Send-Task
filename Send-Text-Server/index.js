const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("running ar running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
