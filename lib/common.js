//import { Buffer } from "buffer";


 


// Handlebars.registerHelper('saveImageFile',function(fbinaryData,filename)
// {
//   //import {FilesCollection} from 'meteor/ostrio:files';
//   //var fs = require('meteor/ostrio:files');
//   var result = false;
//   var  base64Image = fbinaryData.split(",")[1];
//   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
//   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
//   //productImage = filename;
//   var  imagePath = Meteor.settings.products.imgPath;
//   console.log(imagePath);
//   try
//   {
//   require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
//         if (err)
//         {
//             console.log(err); // writes out file without error, but it's not a valid image
//         }
//         else
//         {
//           result = true;
//         }
//       });
//     }
//     catch(exp)
//     {
//       console.log("Client side File Save to server..." + imagePath + filename);
//       result = false;
//     }
//     return result;
  
// });

Handlebars.registerHelper('UILogger',function(source,obj)
{
  console.log("UI Logger : " + source);
  console.log("Object : "+ obj);
});

function newRandomId(prefixStr)
{
  var rnd = prefixStr + "_" + require("meteor/random").id();
  return rnd;
}

// Handlebars.registerHelper("getReferenceData",function(refname){
//   console.log("reference data load to cache");
//   var result = Meteor.apply('getReferenceData',[refname],{ wait:true,returnStubValue: false });
// });

function jsWriteFile(fbinaryData,filename)
{
  var  result = false;
  try 
  {
    //import {FilesCollection} from 'meteor/ostrio:files';
   //var fs = require('meteor/ostrio:files');
   // global.Buffer = global.Buffer || Npm.require("buffer").Buffer;
   var result = true;
   var fs = Npm.require('fs');
   var  base64Image = fbinaryData.split(",")[1];
   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
   //productImage = filename;
  console.log("Writing file");
     var pathtoFile =  Meteor.rootPath;
    var strPath = pathtoFile.substr(0,pathtoFile.length - 7);

    
     

    
   var  imagePath = strPath + Meteor.settings.products.fileSavePath;
   imagePath = Meteor.settings.products.fileSavePath;
   var writeFileName = imagePath + filename;
  
   console.log(writeFileName);
   try
   {
   // var fileWriter = new writeFile()
   //require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
         if (!fs.exists(writeFileName))
         {   
         fs.writeFile(imagePath + filename ,binaryData, "binary", function(err) {

             if (err)
             {
                 console.log(err); // writes out file without error, but it's not a valid image
                 result = false;
             }
             else
             {
               result = true;
             }
           });
         }
     }
     catch(exp)
     {
       console.log("Server side File Save to server..." + imagePath + filename);
       console.log(exp);
       result = false;
     }
  } 
  catch (error) 
  {
    result = false;
  }
  return result;
}


Meteor.methods({ 
  saveImageFile: function(fbinaryData,filename)
  {
    try {
      return jsWriteFile(fbinaryData,filename);
    } catch (error) {
      throw error;
    }

  //  //import {FilesCollection} from 'meteor/ostrio:files';
  //  //var fs = require('meteor/ostrio:files');
  //  // global.Buffer = global.Buffer || Npm.require("buffer").Buffer;
  //   var result = true;
  //   var fs = Npm.require('fs');
  //   var  base64Image = fbinaryData.split(",")[1];
  //   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
  //   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
  //   //productImage = filename;
  //   var  imagePath = Meteor.settings.products.fileSavePath;
  //   var writeFileName = imagePath + filename;
   
  //   console.log(writeFileName);
  //   try
  //   {
  //   // var fileWriter = new writeFile()
  //   //require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
  //         if (!fs.exists(writeFileName))
  //         {   
  //         fs.writeFile(imagePath + filename ,binaryData, "binary", function(err) {

  //             if (err)
  //             {
  //                 console.log(err); // writes out file without error, but it's not a valid image
  //                 result = false;
  //             }
  //             else
  //             {
  //               result = true;
  //             }
  //           });
  //         }
  //     }
  //     catch(exp)
  //     {
  //       console.log("Server side File Save to server..." + imagePath + filename);
  //       console.log(exp);
  //       result = false;
  //     }
  //     return result;
    
  },
  getReferenceData:function(refName)
  {

    switch(refName) 
      {
        case "businessCat":
            return ReferenceData.find({name:busCat});
            break;
        case "productCat":
        return ReferenceData.find({name:prdCat});
            break;
        case "timeCat":
        return ReferenceData.find({name:addTime});
        break;
        default:
            return {};
      }
   
    
  }
});
// function _saveImageFile()
// {
//   var result = false;
//   var  base64Image = fbinaryData.split(",")[1];
//   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
//   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
//   //productImage = filename;
//   var  imagePath = Meteor.settings.product.filePath;
//   try
//   {
//   require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
//         if (err)
//         {
//             console.log(err); // writes out file without error, but it's not a valid image
//         }
//         else
//         {
//           result = true;
//         }
//       });
//     }
//     catch(exp)
//     {
//       console.log("Client side File Save to server..." + filename);
//       result = false;
//     }
//     return result;
// }