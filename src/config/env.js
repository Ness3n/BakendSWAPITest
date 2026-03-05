require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3001,
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  SWAPI_BASE_URL: process.env.SWAPI_BASE_URL || "https://swapi.dev/api",
};