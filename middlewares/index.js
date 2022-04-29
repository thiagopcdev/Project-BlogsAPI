const auth = require('./auth');
const error = require('./error');
const validDisplayName = require('./validDisplayName');
const validEmail = require('./validEmail');
const validPass = require('./validPass');
const checkEmail = require('./login/checkEmail');
const checkPass = require('./login/checkPass');
const checkName = require('./category/checkName');
const checkCategoryId = require('./post/checkCategoryId');
const checkContent = require('./post/checkContent');
const checkTitle = require('./post/checkTitle');
const checkWithoutCat = require('./post/checkWithoutCat');

module.exports = {
  auth,
  error,
  validDisplayName,
  validEmail,
  validPass,
  checkEmail,
  checkPass,
  checkName,
  checkCategoryId,
  checkContent,
  checkTitle,
  checkWithoutCat,

};