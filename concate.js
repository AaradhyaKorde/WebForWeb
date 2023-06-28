async function templateOne(){

    let transformer = [];
    let object = "";  
    let transformer1;
    let object1 = [];
  
       
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
    
    function concateForTemplateOne(dataFromUser, arrayOfHTMLCode){
      let superCode = arrayOfHTMLCode[0] + arrayOfHTMLCode[1] + object.a0 + arrayOfHTMLCode[2] + object.a1 + arrayOfHTMLCode[3] + object.a2 + arrayOfHTMLCode[4] + object.a3 + arrayOfHTMLCode[5] + object.a3 + arrayOfHTMLCode[6] + object.a4 + arrayOfHTMLCode[7] + object.a5 + arrayOfHTMLCode[8] + object.a6 + arrayOfHTMLCode[9] + object.a7 + arrayOfHTMLCode[10] + object.a8 + arrayOfHTMLCode[11] + arrayOfHTMLCode[12] + object.a9 + arrayOfHTMLCode[13] + object.a10 + arrayOfHTMLCode[14] + object.a11 + arrayOfHTMLCode[15] + object.a12 + arrayOfHTMLCode[16] + object.a13 + arrayOfHTMLCode[17] + object.a14 + arrayOfHTMLCode[18] + object.a15 + arrayOfHTMLCode[19] + object.a16 + arrayOfHTMLCode[20] + object.a17 + arrayOfHTMLCode[21] + object.a18 + arrayOfHTMLCode[22] + object.a19 + arrayOfHTMLCode[23] + object.a20 + arrayOfHTMLCode[24] + object.a21 + arrayOfHTMLCode[25] ;
      console.log(superCode);
    }
  
    concateForTemplateOne(object, object1);
  
    }
  
    module.exports = {templateOne};
    
    
    