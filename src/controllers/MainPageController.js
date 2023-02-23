const renderTemplate = require('../utils/render');
const MainPage = require('../views/MainPage');

const renderMainPage = (req, res) => {
  const user = req.session?.user;
  console.log(">>><<<<", user);
  renderTemplate(MainPage, { user }, res);
};

module.exports = renderMainPage;
