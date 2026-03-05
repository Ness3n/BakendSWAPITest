const { SWAPI_BASE_URL } = require("../config/env");

/**
 * @param {number} page
 * @param {string} search
 */
async function getPeople(page = 1, search = "") {
  let url = `${SWAPI_BASE_URL}/people/?page=${page}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error al contactar SWAPI: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * @param {string|number} id
 */
async function getPersonById(id) {
  const response = await fetch(`${SWAPI_BASE_URL}/people/${id}/`);

  if (!response.ok) {
    throw new Error(`Personaje no encontrado: ${response.status}`);
  }

  return response.json();
}

module.exports = { getPeople, getPersonById };