const express = require("express");
const mongoose = require("mongoose");
const app = express();
const expressEjsLayout = require("express-ejs-layouts");
const session = require("express-session");
const mongoConfig = require("./mongoConfig");

//Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${mongoConfig.Username}:${mongoConfig.Password}@generator.1yzqq.mongodb.net/Generator?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch((err) => console.log(err));

//Body Parser
app.use(express.urlencoded({ extended: false }));

//Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Set EJS and CSS
app.set("view engine", "ejs");
app.use(expressEjsLayout);
app.use(express.static("public"));

//Routes
app.use("/", require("./routes/generateAddress"));
app.use("/deleteAddress", require("./routes/deleteAddress"));
app.use("/generateSentence", require("./routes/generateSentence"));
app.use("/generateParagraph", require("./routes/generateParagraph"));
app.use("/generateCard", require("./routes/generateCard"));

app.listen(3000, () => console.info("Server started on port 3000"));
