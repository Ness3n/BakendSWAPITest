const express = require("express");
const cors = require("cors");
const { FRONTEND_URL } = require("./config/env");
const peopleRoutes = require("./routes/peopleRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET"],
  })
);

app.use("/api/people", peopleRoutes);

app.get("/", (_req, res) => {
  res.json({
    mensaje: "SWAPI Proxy Backend corriendo ",
    endpoints: {
      listar: "GET /api/people?page=1&search=luke",
      detalle: "GET /api/people/:id",
    },
  });
});

module.exports = app;