//external thins
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal thins
const { notfound, errorHandler } = require("./middleware/common/errorHandler");

//create app
const app = express();
dotenv.config();

//connection database
mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING, {})
  .then(() => console.log("DB connection was Successful "))
  .catch(() => console.log("Oh ! connection was failed"));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup

//404 not found handler
app.use(notfound);
//error handler
app.use(errorHandler);

//listen app
app.listen(process.env.LISTEN_PORT, () => {
  console.log(`Listening port ${process.env.LISTEN_PORT}`);
});
