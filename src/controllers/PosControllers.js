const { Coord } = require("../../db/models");

async function pos(req, res) {
  try {
    const { a, b } = req.body;
    const geo = await Coord.create({ x: a, y: b });
    console.log(geo);
    const allPos = await Coord.findAll({ raw: true });
    const allGeo = allPos.map((el) => [el.x, el.y]);
    console.log(allGeo);
    res.json(allGeo);
  } catch (error) {
    console.log(error);
  }
}

module.exports = pos