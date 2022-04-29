require('dotenv').config()
const auth = require('./routes/auth')
const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportSetup = require("./passport")


const app = express();

app.use(cookieSession({ name: "session", keys: ["key"], maxAge: 24 * 60 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: process.env.BASE_URI,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use('/auth',auth)

app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connetion failed", err)
    : console.log("Server is running on port",process.env.PORT);
});
