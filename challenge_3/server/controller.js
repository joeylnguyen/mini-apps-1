const {addData, getId} = require('./model.js')
// TODO Build post request handler that calls model function
const handlePostData = (req, res) => {
  addData(req.body, res);
}
// TODO Build get request handler that calls model function
const handleGetId = (req, res) => {
  getId(req, res);
}

module.exports = {
  handlePostData: handlePostData,
  handleGetId: handleGetId
}