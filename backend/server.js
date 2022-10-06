require("dotenv").config();
const express = require("express");
const DbConnect = require("./databse");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require("./routes");
const app = express();

app.use(cookieParser())

const corsOption = {
  credentials: true,
  origin: ['http://localhost:3000']
}

app.use(cors(corsOption))
app.use('/storage',express.static('storage'))

const PORT = process.env.PORT || 5500;
DbConnect();

app.use(express.json({limit: '8mb'}));
app.use(router);

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(PORT, () => `Listening on Port ${PORT}`);
