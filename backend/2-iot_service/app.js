const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
require('dotenv').config();

const url = process.env.DATABASE_URL ;

const app = express();
const port = 7020;
const server = http.createServer(app);


// Middlewares
app.use(cors());
app.use(express.json()); // parse JSON bodies


// Routers
const readings_Router = require("./routers/readings_router");
app.use("/api/readings/", readings_Router);


// Connect to MongoDB
mongoose.connect(url)
  .then(() => {
    console.log("✅ Connected to the DB");
    server.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));