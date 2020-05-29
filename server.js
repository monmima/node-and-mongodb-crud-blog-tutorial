const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
    // res.send("Hello World!");

    const articles = [{
        title: "test article",
        createdAt: new Date(),
        description: "Test description"
    },
    {
        title: "test article 2",
        createdAt: new Date(),
        description: "Test description 2"
    }];

    res.render("index", {articles: articles});
});

app.listen(3000);