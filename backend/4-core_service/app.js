const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
require('dotenv').config();

const url = process.env.DATABASE_URL ;

const app = express();
const port = 7040;

// Server + Socket.IO
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json()); // parse JSON bodies


// Routers
const patients_Router = require("./routers/patients_router");
const staff_Router = require("./routers/staff_router");
const other_Router = require("./routers/other_router");


app.use("/api/patients/", patients_Router);
app.use("/api/staff/", staff_Router);
app.use("/api/other/", other_Router);

// Connect to MongoDB
mongoose.connect(url)
  .then(() => {
    console.log("✅ Connected to the DB");
    server.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));