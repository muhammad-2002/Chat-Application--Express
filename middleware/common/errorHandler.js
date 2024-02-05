const createError = require("http-errors");
//404 not found handler
function notfound(req, res, next) {
  next(createError(404, "Your request content was not found !"));
}
//default error handler
function errorHandler(err, req, res, nex) {
  res.locals.title = "Error Page";
  res.render("error");
}
module.exports = {
  notfound,
  errorHandler,
};
