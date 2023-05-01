require("./src/db/db.config");
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const morgan = require("morgan");

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", require("./src/routes/home.routes"));

// Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
