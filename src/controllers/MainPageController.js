const renderTemplate = require('../utils/render');
const MainPage = require('../views/MainPage');
const InitPage = require('../views/InitPage')
const {Initiative} = require('../../db/models')


const renderMainPage = async (req, res) => {
  const allInit = await Initiative.findAll()
  renderTemplate(MainPage, {allInit}, res);
}

const renderInitPage = async (req, res) => {
  const {id} = req.params
  const init = await Initiative.findOne({where:{id}})
  renderTemplate(InitPage, {init}, res);
};

const showChoosedInits = async (req, res) => {
 try {
   const {level, category} = req.body
   const allInits = await Initiative.findAll({where: {category, level}})
   res.json({isShowInitsSuccessful: true, allInits})
 } catch (error) {
   res.json({isShowInitsSuccessful: false, message: 'Could not show all chiised inits'})
 }
};



module.exports = {renderMainPage, renderInitPage, showChoosedInits};
