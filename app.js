const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

///////////////////////////// Requests Targetting all Articles ////////////////////////////
app.route("/articles")
.get((req, res) => {
  Article.find((err, foundArticles) => {
    if(!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
})
.post((req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content
  });
  article.save( (err) => {
    if(!err){
      res.send("Article is added successfully");
    } else {
      res.send(err);
    }
  });
})
.delete((req, res) => {
  Article.deleteMany((err) => {
    if(!err){
      res.send("All articles are deleted");
    }else {
      res.send(err);
    }
  });
});

///////////////////////////// Requests Targetting Specific Article ////////////////////////////

app.route("/articles/:articleTitle")
.get((req, res) => {
  Article.findOne({title : req.params.articleTitle}, (err, foundArticle) => {
    if(foundArticle){
      res.send(foundArticle);
    } else {
      res.send("Such article is not exist");
    }
  })
})
.put((req, res) => {
  Article.updateOne(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    (err) => {
      if(!err) {
        res.send("Article is updated");
      } else {
        res.send(err);
      }
    }
  );
})
.patch((req, res) => {
  Article.updateOne(
    {title: req.params.articleTitle},
    {$set: req.body},
    (err) => {
      if(!err){
        res.send("Successfully updated an article");
      } else {
        res.send(err);
      }
    }
  );
})
.delete((req, res) => {
  Article.deleteOne(
    {title: req.params.articleTitle},
    (err) => {
      if (!err) {
        res.send("The article is deleted");
      } else {
        res.send(err);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server is run on port 3000");
})
