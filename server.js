const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.render("index", {text: "Hello!"});
});

app.listen(3000);