const renderTemplate = require('../utils/render');
const ProfilePage = require('../views/Profile');

const renderProfilePage = (req, res) => {
  // const user = req.session?.user;
  // console.log(">>><<<<", user);
  renderTemplate(ProfilePage, {}, res);
};

module.exports = renderProfilePage;
