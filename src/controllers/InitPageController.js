const renderTemplate = require('../utils/render');
const InitPage = require('../views/InitPage');
const {Initiative} = require('../../db/models')

const renderInitPage = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(InitPage, {}, res);
};


const addYesVoice = async (req, res) => {
try {
  const {id} = req.body
  const voice = await Initiative.findOne({where: {id}})
  await voice.increment("voites_yes", {by: 1})
  res.json({isAddVoiceSuccessful: true, voice})
} catch (error) {
  res.json({isAddVoiceSuccessful: false, message: 'Can not be incremented'})
}
};

const addNoVoice = async (req, res) => {
  try {
    const {id} = req.body
    const voice = await Initiative.findOne({where: {id}})
    await voice.increment("voites_no", {by: 1})
    res.json({isAddVoiceSuccessful: true, voice})
  } catch (error) {
    console.log(error)
    res.json({isAddVoiceSuccessful: false, message: 'Can not be incremented'})
  }
  };


module.exports = {renderInitPage, addYesVoice, addNoVoice};
