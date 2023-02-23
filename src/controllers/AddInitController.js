const renderTemplate = require('../utils/render');
const AddInitPage = require('../views/AddInit');

const renderAddInitController = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  // console.log('renderAddInitController', req.body);
  renderTemplate(AddInitPage, {}, res);
};

const addInitFormController = (req, res) => {
  console.log('renderAddInitController', req.body);
};

module.exports = { renderAddInitController, addInitFormController };
