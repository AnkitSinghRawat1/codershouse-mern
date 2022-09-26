require("dotenv").config();
const express = require("express");
const DbConnect = require("./databse");
const cors = require('cors')
const router = require("./routes");
const app = express();

const corsOption = {
  origin: ['http://localhost:3000']
}

app.use(cors(corsOption))

const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(PORT, () => `Listening on Port ${PORT}`);
