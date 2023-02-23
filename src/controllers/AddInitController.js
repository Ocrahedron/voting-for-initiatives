const renderTemplate = require('../utils/render');
const AddInitPage = require('../views/AddInit');
const { Initiative } = require('../../db/models');

const renderAddInitController = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  // console.log('renderAddInitController', req.body);
  renderTemplate(AddInitPage, {}, res);
  console.log(req.body);
};

const addInitFormController = async (req, res) => {
  // console.log('renderAddInitController', req.body);
  console.log('status', req.body);

  try {
    await Initiative.create({
      title: req.body.title,
      category: req.body.category,
      body: req.body.body,
      level: req.body.select,
      voites_no: 0,
      voites_yes: 0,
      data_end: 1000 * 60 * 60 * 24 * 30,
      user_id: 1,
      // req.session?.user.id
      status: 'open',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderAddInitController, addInitFormController };
