const renderTemplate = require('../utils/render');
const MainPage = require('../views/MainPage');
const InitPage = require('../views/InitPage')
const {Initiative} = require('../../db/models')

const renderMainPage = async (req, res) => {
  const allInit = await Initiative.findAll()
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(MainPage, {allInit}, res);
};



const renderInitPage = async (req, res) => {
  const {id} = req.params
  const init = await Initiative.findOne({where:{id}})
  // const initAuth = await Initiative.findAll({where: {user_id: init.user_id}})


  renderTemplate(InitPage, {init}, res);
};




module.exports = {renderMainPage, renderInitPage};
