const renderTemplate = require('../utils/render');
const AddInitPage = require('../views/AddInit');

const renderAddInitPage = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(AddInitPage, {}, res);
  console.log(req.body);
};

module.exports = renderAddInitPage;
