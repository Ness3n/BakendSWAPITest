const { getPeople, getPersonById } = require("../services/peopleService");

async function listPeople(req, res) {
  try {
    const page = req.query.page || 1;
    const search = req.query.search || "";

    const data = await getPeople(page, search);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "No se pudo obtener la lista de personajes.",
      detalle: error.message,
    });
  }
}

async function getPerson(req, res) {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({ error: "El ID debe ser un número válido." });
    }

    const data = await getPersonById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "No se pudo obtener el personaje.",
      detalle: error.message,
    });
  }
}

module.exports = { listPeople, getPerson };