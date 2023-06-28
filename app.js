const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ejs = require("ejs");
var fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/" || "/home", function(req, res){
    res.render("home");
  
  });

  app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 

  app.get("/manual", function(req, res){
    res.render("manual");
  });  

  app.get("/chatbot", function(req, res){
    res.sendFile(__dirname+"/chatbot.html")
  }); 

  //Database using mongoDB/mongoose

  mongoose.connect("mongodb://localhost:27017/BlackBox", {useNewUrlParser: true});

  const codeSchema = {
  a0: String,
  a1: String,
  a2: String,
  a3: String,
  a4: String,
  a5: String,
  a6: String,
  a7: String,
  a8: String,
  a9: String,
  a10: String,
  a11: String,
  a12: String,
  a13: String,
  a14: String,
  a15: String,
  a16: String,
  a17: String,
  a18: String,
  a19: String,
  a20: String,
  a21: String,
  c0: String

  };

  const htmlFileSchema = {
    snip: String
  };

  const cssFileSchema = {
    snip: String
  };

  const finalCodeSchema = {
    fullCode: String
  }

  const Code = mongoose.model("Code", codeSchema);
  const HtmlFile = mongoose.model("HtmlFile", htmlFileSchema);
  const CssFile = mongoose.model("CssFile", cssFileSchema);
  const FinalCode = mongoose.model("FinalCode", finalCodeSchema);

  app.post("/manual", function(req, res){         
    
      var codeItem = []
        codeItem = req.body
      Code.insertMany(codeItem, function(err){
        if (!err){
          res.redirect("/manual");
      }
      })
   templateOne();
  });
  //End of DataBase

  //Concatination
  async function templateOne(){

    let transformer = [];
    let object = "";  
    let transformer1;
    let object1 = [];
    let transformer2;
    let object2 = []

    try{
      transformer = await Code.find();
    } catch(err){
      console.log(err);
    }
    object = transformer.at(-1);
    for(i=0; i<26; i++){
      try{
        transformer1 = await HtmlFile.find();
      } catch(err){
        console.log(err);
      }
      object1[i] = (transformer1.at(i)).snip;
    }
    for(i=0; i<7; i++){
      try{
        transformer2 = await CssFile.find();
      } catch(err){
        console.log(err);
      }
      object2[i] = (transformer2.at(i)).snip;
    }
    
    function concateForTemplateOne(dataFromUser, arrayOfHTMLCode, arrayOfCSSCode){
      let superCodeHtml = arrayOfHTMLCode[0] + arrayOfHTMLCode[1] + object.a0 + arrayOfHTMLCode[2] + object.a1 + arrayOfHTMLCode[3] + object.a2 + arrayOfHTMLCode[4] + object.a3 + arrayOfHTMLCode[5] + object.a3 + arrayOfHTMLCode[6] + object.a4 + arrayOfHTMLCode[7] + object.a5 + arrayOfHTMLCode[8] + object.a6 + arrayOfHTMLCode[9] + object.a7 + arrayOfHTMLCode[10] + object.a8 + arrayOfHTMLCode[11] + arrayOfHTMLCode[12] + object.a9 + arrayOfHTMLCode[13] + object.a10 + arrayOfHTMLCode[14] + object.a11 + arrayOfHTMLCode[15] + object.a12 + arrayOfHTMLCode[16] + object.a13 + arrayOfHTMLCode[17] + object.a14 + arrayOfHTMLCode[18] + object.a15 + arrayOfHTMLCode[19] + object.a16 + arrayOfHTMLCode[20] + object.a17 + arrayOfHTMLCode[21] + object.a18 + arrayOfHTMLCode[22] + object.a19 + arrayOfHTMLCode[23] + object.a20 + arrayOfHTMLCode[24] + object.a21 + arrayOfHTMLCode[25] ;
      let superCodeCss =  arrayOfCSSCode[0] + object.c0 + arrayOfCSSCode[1] + object.c0 + arrayOfCSSCode[2] + object.c0 + arrayOfCSSCode[3] + object.c0 + arrayOfCSSCode[4] + object.c0 + arrayOfCSSCode[5] + object.c0 + arrayOfCSSCode[6]; 
     
      updateForTemplateOne(superCodeHtml, superCodeCss);
    }
  
    concateForTemplateOne(object, object1, object2);
  
    }
  // End of concatination

  //File Manipulation
  function updateForTemplateOne(superCodeHtml, superCodeCss){
  fs.writeFile('Template1/index.html', superCodeHtml, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
    
    fs.writeFile('Template1/resume.css', superCodeCss, function (err) {
        if (err) throw err;
        console.log('Saved!');
        });
    
        fs.writeFile('Template1/resume.min.css', superCodeCss, function (err) {
            if (err) throw err;
            console.log('Saved!');
            });
          }
  //EndOfFileManipulation
