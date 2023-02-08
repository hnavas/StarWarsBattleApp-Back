const express = require('express');
const router = express.Router();
const axios = require("axios");

const getCharacters = async () => {
  const allCharacters = [];
  const dataApi = await axios.get('https://akabab.github.io/starwars-api/api/all.json');
  const getData = dataApi.data.map(ch => {
    const allData = {
      id: ch.id,
      name: ch.name,
      image: ch.image,
      gender: ch.gender,
      height: ch.height,
      species: ch.species
    }
    allCharacters.push(allData);
  })
  return allCharacters;
}

router.get('/', async (req, res) => {
  let all = await getCharacters();
  res.status(200).json(all);
})

module.exports = router;