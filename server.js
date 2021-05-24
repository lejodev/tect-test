const express = require("express");
const players = require("./routes/players.routes");
const team = require("./routes/team.routes");
const app = express();
const path = require("path");

// var cors = require("cors");
// app.use(cors);

app.use(express.json());
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.MONGO_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("Connected to the database");
  }
);

const PORT = process.env.PORT || 5000;

app.use("/api/v1", players);
app.use("/api/v1", team);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
