const renderTemplate = require('../utils/render');
const MainPage = require('../views/MainPage');

const renderMainPage = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(MainPage, {}, res);
};

module.exports = renderMainPage;
