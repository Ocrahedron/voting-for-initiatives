const renderTemplate = require('../utils/render');
const InitPage = require('../views/InitPage');

const renderInitPage = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(InitPage, {}, res);
};

module.exports = renderInitPage;
