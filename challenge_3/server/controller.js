
// TODO Build post request handler that calls model function
const handlePostData = (req, res) => {
  console.log(req.body);
  res.send('hi');
}
// TODO Build get request handler that calls model function
const handleGetId = (req, res) => {
  // Do stuff
}

module.exports = {
  handlePostData: handlePostData,
  handleGetId: handleGetId
}