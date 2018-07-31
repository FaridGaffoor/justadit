var require = meteorInstall({"lib":{"startup":{"apiSetup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/startup/apiSetup.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
console.log("Creating Db Collections");
ReferenceData = new Mongo.Collection('ReferenceData'); //Products = new Mongo.Collection('Products');

Sellers = new Mongo.Collection('Sellers'); //const featuredProducts = new Mongo.Collection('featuredProducts');
// this.autorun(function() {
//       meteor.subscribe('featuerd')
//   });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fixtures.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/startup/fixtures.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(() => {
  if (Meteor.isServer) {
    console.log("Server Fixture Startup"); // if the Links collection is empty

    /*
    console.log(Links.find().count());
    if (Links.find().count() === 0) {
      const data = [
        {
          title: 'Do the Tutorial',
          url: 'https://www.meteor.com/try',
          createdAt: new Date(),
        },
        {
          title: 'Follow the Guide',
          url: 'http://guide.meteor.com',
          createdAt: new Date(),
        },
        {
          title: 'Read the Docs',
          url: 'https://docs.meteor.com',
          createdAt: new Date(),
        },
        {
          title: 'Discussions',
          url: 'https://forums.meteor.com',
          createdAt: new Date(),
        },
      ];
           data.forEach(link => Links.insert(link));
    }*/

    console.log("Reference Data Check : " + ReferenceData.find().count());

    if (ReferenceData.find().count() === 0) {
      console.log("Adding Reference Data");
      const refDatas = [{
        name: "busCat",
        id: "0",
        value: "Electronic"
      }, {
        name: "busCat",
        id: "1",
        value: "Fashion"
      }, {
        name: "busCat",
        id: "2",
        value: "Convience"
      }, {
        name: "busCat",
        id: "3",
        value: "Food"
      }, {
        name: "busCat",
        id: "4",
        value: "Once Off"
      }, {
        name: "addTime",
        id: "1",
        value: "Free",
        timetoadd: 1
      }, {
        name: "addTime",
        id: "2",
        value: "3 Days",
        timetoadd: 3
      }, {
        name: "addTime",
        id: "3",
        value: "1 Week",
        timetoadd: 7
      }, {
        name: "addTime",
        id: "4",
        value: "2 Weeks",
        timetoadd: 14
      }, {
        name: "addTime",
        id: "5",
        value: "1 Month",
        timetoadd: 30
      }, {
        name: "prdCat",
        id: "0",
        value: "Deals"
      }, {
        name: "prdCat",
        id: "1",
        value: "Home"
      }, {
        name: "prdCat",
        id: "2",
        value: "Food"
      }, {
        name: "prdCat",
        id: "3",
        value: "Security"
      }, {
        name: "prdCat",
        id: "4",
        value: "Education"
      }, {
        name: "prdCat",
        id: "5",
        value: "Cosmetic"
      }, {
        name: "prdCat",
        id: "6",
        value: "Kitchen"
      }, {
        name: "prdCat",
        id: "7",
        value: "Services"
      }, {
        name: "prdCat",
        id: "8",
        value: "Tools"
      }, {
        name: "prdCat",
        id: "9",
        value: "Fashion"
      }, {
        name: "prdCat",
        id: "10",
        value: "Motor Sales"
      }, {
        name: "prdCat",
        id: "11",
        value: "Computer"
      }, {
        name: "prdCat",
        id: "12",
        value: "Health"
      }, {
        name: "prdCat",
        id: "13",
        value: "Pop Ups"
      }, {
        name: "prdCat",
        id: "13",
        value: "Community Events"
      }, {
        name: "prdCat",
        id: "14",
        value: "Other"
      }];
      refDatas.forEach(refData => ReferenceData.insert(refData));
      console.log("Reference Data Post Insert Check : " + ReferenceData.find().count());
    }

    console.log("Product Data Check : " + Products.find().count());

    if (Products.find().count() === 0) {
      prodData = [{
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some Product description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["1"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }, {
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some Other description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["2"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }, {
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some New description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["3"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }];
      prodData.forEach(prod => Products.insert(prod));
      console.log("Products Data Post Insert Check : " + Products.find().count());
    }

    console.log("Selleres Data Check : " + Sellers.find().count());

    if (Sellers.find().count() === 0) {
      Sellers.insert({
        _id: "1",
        busCat: "Electronic",
        businessname: "Test Business",
        businessag: "tag line",
        add1: "Address 1",
        add2: "Address 2",
        add3: "Address 3",
        add4: "Address 4",
        office: "0118574563",
        cell: "0118574563",
        email: "0118574563",
        contact1: "bob",
        contact2: "rick",
        url: "www.somesite.com",
        logoImg: "http://cooldigital.photography/wp-content/uploads/2014/02/Details-of-a-Marigold-Blossom-620x404.jpg",
        createdAt: new Date()
      });
      console.log("Sellers Data Post Insert Check : " + Sellers.find().count());
    }

    if (Images.find().count === 0) {
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "1",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "2",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "3",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
    }

    console.log("Fixtures Done");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"activities.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/activities.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Activities = new Mongo.Collection('activities');
Activities.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  }
});

Activities.latest = function () {
  return Activities.find({}, {
    sort: {
      date: -1
    },
    limit: 1
  });
};

Meteor.methods({
  createActivity: function (activity, tweet, loc) {
    check(Meteor.userId(), String);
    check(activity, {
      recipeName: String,
      text: String,
      image: String
    });
    check(tweet, Boolean);
    check(loc, Match.OneOf(Object, null));
    activity.userId = Meteor.userId();
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date();
    if (!this.isSimulation && loc) activity.place = getLocationPlace(loc);
    var id = Activities.insert(activity);
    if (!this.isSimulation && tweet) tweetActivity(activity);
    return id;
  }
});

if (Meteor.isServer) {
  var twitterOauth = function (options) {
    var config = Meteor.settings.twitter;
    var userConfig = Meteor.user().services.twitter;
    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  };

  var tweetActivity = function (activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached

      if ((text + append).length > MAX) return text.substring(0, MAX - append.length - 3) + '...' + append;else return text + append;
    } // we need to strip the "data:image/jpeg;base64," bit off the data url


    var image = activity.image.replace(/^data.*base64,/, '');
    var response = HTTP.post('https://upload.twitter.com/1.1/media/upload.json', {
      params: {
        media: image
      },
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });
    if (response.statusCode !== 200) throw new Meteor.Error(500, 'Unable to post image to twitter');
    if (!response.data) throw new Meteor.Error(500, 'Did not receive attachment from twitter');
    var attachment = response.data;
    response = HTTP.post('https://api.twitter.com/1.1/statuses/update.json', {
      params: {
        status: appendTweet(activity.text, ' #localmarket'),
        media_ids: attachment.media_id_string
      },
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });
    if (response.statusCode !== 200) throw new Meteor.Error(500, 'Unable to create tweet');
  };

  var getLocationPlace = function (loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json' + '?granularity=neighborhood' + '&max_results=1' + '&accuracy=' + loc.coords.accuracy + '&lat=' + loc.coords.latitude + '&long=' + loc.coords.longitude;
    var response = HTTP.get(url, {
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function (place) {
        return place.place_type === 'neighborhood';
      });

      return place && place.full_name;
    }
  };
} // Initialize a seed activity


Meteor.startup(function () {
  if (Meteor.isServer && Activities.find().count() === 0) {
    Activities.insert({
      recipeName: 'summer-apricots-honey-panna-cotta',
      text: 'I substituted strawberries for apricots - incredible!',
      image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis',
      place: 'SoMA, San Francisco',
      date: new Date()
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bookmarks.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/bookmarks.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
BookmarkCounts = new Mongo.Collection('bookmarkCounts');
Meteor.methods({
  'bookmarkRecipe': function (recipeName) {
    check(this.userId, String);
    check(recipeName, String);
    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedRecipeNames: {
        $ne: recipeName
      }
    }, {
      $addToSet: {
        bookmarkedRecipeNames: recipeName
      }
    });
    if (affected) BookmarkCounts.update({
      recipeName: recipeName
    }, {
      $inc: {
        count: 1
      }
    });
  },
  'unbookmarkRecipe': function (recipeName) {
    check(this.userId, String);
    check(recipeName, String);
    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedRecipeNames: recipeName
    }, {
      $pull: {
        bookmarkedRecipeNames: recipeName
      }
    });
    if (affected) BookmarkCounts.update({
      recipeName: recipeName
    }, {
      $inc: {
        count: -1
      }
    });
  }
}); // Initialize bookmark counts. We could use upsert instead.

if (Meteor.isServer && BookmarkCounts.find().count() === 0) {
  Meteor.startup(function () {
    _.each(RecipesData, function (recipe, recipeName) {
      BookmarkCounts.insert({
        recipeName: recipeName,
        count: 0
      });
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"common.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/common.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
Handlebars.registerHelper('UILogger', function (source, obj) {
  console.log("UI Logger : " + source);
  console.log("Object : " + obj);
});

function newRandomId(prefixStr) {
  var rnd = prefixStr + "_" + require("meteor/random").id();

  return rnd;
} // Handlebars.registerHelper("getReferenceData",function(refname){
//   console.log("reference data load to cache");
//   var result = Meteor.apply('getReferenceData',[refname],{ wait:true,returnStubValue: false });
// });


function jsWriteFile(fbinaryData, filename) {
  var result = false;

  try {
    //import {FilesCollection} from 'meteor/ostrio:files';
    //var fs = require('meteor/ostrio:files');
    // global.Buffer = global.Buffer || Npm.require("buffer").Buffer;
    var result = true;

    var fs = Npm.require('fs');

    var base64Image = fbinaryData.split(",")[1];
    var binaryData = new Buffer(base64Image, 'base64').toString('binary'); //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
    //productImage = filename;

    console.log("Writing file");
    var pathtoFile = Meteor.rootPath;
    var strPath = pathtoFile.substr(0, pathtoFile.length - 7);
    var imagePath = strPath + Meteor.settings.products.fileSavePath;
    imagePath = Meteor.settings.products.fileSavePath;
    var writeFileName = imagePath + filename;
    console.log(writeFileName);

    try {
      // var fileWriter = new writeFile()
      //require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
      if (!fs.exists(writeFileName)) {
        fs.writeFile(imagePath + filename, binaryData, "binary", function (err) {
          if (err) {
            console.log(err); // writes out file without error, but it's not a valid image

            result = false;
          } else {
            result = true;
          }
        });
      }
    } catch (exp) {
      console.log("Server side File Save to server..." + imagePath + filename);
      console.log(exp);
      result = false;
    }
  } catch (error) {
    result = false;
  }

  return result;
}

Meteor.methods({
  saveImageFile: function (fbinaryData, filename) {
    try {
      return jsWriteFile(fbinaryData, filename);
    } catch (error) {
      throw error;
    } //  //import {FilesCollection} from 'meteor/ostrio:files';
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
  getReferenceData: function (refName) {
    switch (refName) {
      case "businessCat":
        return ReferenceData.find({
          name: busCat
        });
        break;

      case "productCat":
        return ReferenceData.find({
          name: prdCat
        });
        break;

      case "timeCat":
        return ReferenceData.find({
          name: addTime
        });
        break;

      default:
        return {};
    }
  }
}); // function _saveImageFile()
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"media.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/media.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
console.log("Server create FS Media Collection"); //var imageStore = new FS.Store.GridFS("images", {
//mongoUrl: 'mongodb://127.0.0.1:3001/justadit/', // optional, defaults to Meteor's local MongoDB
//mongoOptions: {...},  // optional, see note below
//transformWrite: myTransformWriteFunction, //optional
//transformRead: myTransformReadFunction, //optional
//maxTries: 1, // optional, default 5
//chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
// Default: 2MB. Reasonable range: 512KB - 4MB
//  });

var imageStore = new FS.Store.FileSystem("images", {
  path: "/var/www/justaditimages/",
  //optional, default is "/cfs/files" path within app container
  //transformWrite: function(fileObj, readStream, writeStream) {
  //console.log("Resize Image");
  //console.log(fileObj.name() + " : "  + fileObj.size());
  // if (fileObj.size() > 500)
  // {
  //     if (gm.isAvailable)
  //     {
  //         gm(readStream, fileObj.name()).resize('500').stream().pipe(writeStream);
  //     }
  //     else
  //     {
  //         console.log("No GraphicsMagick Installed.")
  //     }
  // }
  //},
  chunkSize: 2 * 1024 * 1024 - 1024,
  // optional, default GridFS chunk size in bytes (can be overridden per file).
  //Default: 2MB,//. Reasonable range: 512KB - 4MB
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  maxTries: 2 //optional, default 5

}); //   var videoStore = new FS.Store.GridFS("videos", {
//     //mongoUrl: 'mongodb://127.0.0.1:3001/justaditmedia/', // optional, defaults to Meteor's local MongoDB
//     //mongoOptions: {...},  // optional, see note below
//     //transformWrite: myTransformWriteFunction, //optional
//     //transformRead: myTransformReadFunction, //optional
//     //maxTries: 1, // optional, default 5
//     //chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
//                           // Default: 2MB. Reasonable range: 512KB - 4MB
//   });

Images = new FS.Collection("images", {
  stores: [imageStore]
}); // Videos = new FS.Collection("videos", {
//   stores: [videoStore]
// // });

Images.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
}); // Videos.allow({ 
//     insert: function() { 
//         return true; 
//     }, 
//     update: function() { 
//         return true; 
//     }, 
//     remove: function() { 
//         return true; 
//     } 
// });

Meteor.methods({
  getProductImages: function (ImgId) {
    // var result = Products.find({_id:prodid});
    var prodImages = Images.find({
      ImageId: ImgId
    });
    var returnImages = [];
    prodImages.forEach(element => {
      returnImages.push(element);
    }); //var sell = Meteor.apply('getProductSeller', [prod.sellerId], { returnStubValue: true });
    //prod.seller = sell;

    return returnImages; //return Meteor.Mongo.Products.findOne({_id:prodid});
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"news.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/news.js                                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
News = new Mongo.Collection('news');
News.allow({
  insert: function (userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  }
});

News.latest = function () {
  //http://feeds.news24.com/articles/news24/SouthAfrica/rss
  return News.findOne({}, {
    sort: {
      date: -1
    },
    limit: 1
  });
};

if (Meteor.isServer && News.find().count() === 0) {
  Meteor.startup(function () {
    News.insert({
      text: 'First of the season citrus has just arrived. Get succulent oranges and tangerines in our produce aisle!',
      date: new Date()
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/product.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Product = new Mongo.Collection('Product');
Product.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  }
});
Meteor.methods({
  'latestProduct': function (id) {
    return Product.find({}, {
      order: {
        createdAt: -1
      }
    }); //return result[0];
  },
  'QSearchProduct': function (id) {
    console.log("Searching");
    Meteor.subscribe('QSearch', id);
    var results = Products.find({});
    console.log(results);
    return results;
  },
  'products.insert': function (productObj) {
    //var fs = Npm.require('fs');
    var newProd = false;

    if (productObj._id == "") {
      newProd = true;
    }

    var ProdImgs = [];

    try {
      // console.log(productObj.prodImg);
      // for (pImg in productObj.prodImg)
      // {
      //   if (newProd)
      //   {
      //     var randId = Random.id();// require('random');     
      //     var FileName = productObj.userId + "_" + randId  + ".jpg";            
      //     ProdImgs.push(FileName);                
      //     var busLogCall = Meteor.apply('saveImageFile',[pImg,FileName],{wait:true});                   
      //   }
      //   else
      //   {
      //     if (!fs.exists(pImg))
      //     {
      //       var randId = Random.id();// require('random');     
      //       var FileName = productObj.userId + "_" + randId  + ".jpg";            
      //       ProdImgs.push(FileName);                
      //       var busLogCall = Meteor.apply('saveImageFile',[pImg,FileName],{wait:true}); 
      //     }
      //   }
      // }
      //   productObj.prodImg = ProdImgs;
      var productResult = Products.upsert({
        // Selector
        _id: productObj._id
      }, {
        // Modifier
        $set: {
          sellerId: productObj.sellerId,
          producttitle: productObj.producttitle,
          productDescription: productObj.productDescription,
          price: productObj.price,
          prdCat: productObj.prdCat,
          prodImg: productObj.prodImg,
          createdAt: productObj.createdAt,
          expireAt: productObj.expireAt
        }
      });
    } catch (exp) {
      throw exp;
    }
  }
});
/*


Meteor.methods(
    
    {
  'products.insert'(sellerId,producttitle, productDescription , price,prodCat,createdAt,expireAt, url,prodImg) {

    var ProdInsert = Products.insert({
      sellerId, 
      producttitle,
      productDescription , 
      price,
      prodCat,
      createdAt,
      expireAt,
      url,
      prodImg
      
  });
  return ProdInsert;

  
}




  Product.getProduct = function(prodId)
  {
    var returnProduct ;
    console.log("Single product Meteor Call method");
    try
    {
        Meteor.call('getProduct',[ prodId],(error,result)=>{
            if (error)
            {
                console.log(error);
            }
            else
            {
                console.log("Meteor Call to get product : " + result);
          
                returnProduct = result;
            }
        });
      
      console.log("Post Meteor Call after assign " + returnProduct);
    }
    catch(exp)
    {
      throw exp;
    }
    return returnProduct;
  }

   */

Product.MyProducts = function (sellerId) {
  return Product.find({
    SellerID: sellerId
  });
};

Product.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  //Product.find({},{order:{createdAt:-1}});
  return Product.find({}, {
    order: {
      createdAt: -1
    }
  });
};
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"products.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/products.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Products = new Mongo.Collection('Products');
Products.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  },
  update: function (userId, doc) {
    return false;
  }
});
Meteor.methods({
  'featuredProducts': function () {
    console.log("Getting Latest featured products data " + Meteor.settings.featuredProductsLimit);
    var prodresult = [];

    try {
      var prod = Products.find({}, {
        order: {
          createdAt: -1
        }
      }, {
        limit: Meteor.settings.featuredProductsLimit
      });
      prod.forEach(element => {
        prodresult.push(element);
      });
    } catch (exp) {
      console.log("Error getting featured Products : " + exp);
      throw exp;
    }

    return {
      Results: prodresult
    };
  },
  'getProduct': function (prodid) {
    // var result = Products.find({_id:prodid});
    try {
      //Meteor.subscribe('product',prodid);
      //Meteor.subscribe('getSellers');
      var prod = Products.findOne({
        _id: prodid
      });

      if (prod) {
        var sell = Sellers.findOne({
          userId: prod.sellerId
        });
        var prodImages = Meteor.apply('getProductImages', [prod.prodImg], {
          returnStubValue: true
        });
        prod.seller = sell;
        prod.prodImgs = prodImages;
      } //loading.stop();


      return prod;
    } catch (exp) {
      //loading.halt();
      console.log(exp);
    } //return Meteor.Mongo.Products.findOne({_id:prodid});

  },
  'getProductSeller': function (sellerId) {
    Meteor.subscribe('getSeller', sellerId);
    return Sellers.findOne({
      userId: Meteor.userId()
    });
  },
  'QSearchProducts': function (searchItem) {
    //debugger;
    var searchTerms = "'/^.*" + searchItem[0] + ".*$/i'";
    console.log(searchTerms); //$text: {$search: searchValue} },

    var prods = Products.find({
      $or: [{
        "producttitle": {
          $regex: searchTerms
        }
      }, {
        "productDescrption": {
          $regex: searchTerms
        }
      }]
    });
    var result = [];
    prods.forEach(element => {
      result.push(element);
    }); //var result = Products.find({$text: {$search: searchTerms}}).fetch();
    //({$text:{$search:"tutorialspoint"}})

    console.log(result);
    return result;
  },
  'getSellerProducts': function () {
    console.log("Getting Seller Server Side Products");
    var prodresult = []; //Product.find({},{order:{createdAt:-1}});

    var prod = Products.find({
      sellerId: Meteor.userId()
    }, {
      order: {
        createdAt: -1
      }
    });
    prod.forEach(element => {
      //console.log(element);
      prodresult.push(element);
    });
    return prodresult;
  }
});

Products.allProducts = function () {
  console.log("Getting latest products" + Products.count());
  Meteor.subscribe('allProducts');
  return Products.find({}, {
    order: {
      createdAt: -1
    }
  }); // return Products.find({});
};

Products.getProduct = function (prodId) {
  var result;
  console.log("Single product api method");

  try {
    result = Products.findOne({
      _id: prodId
    }, {
      limit: 1
    }); //console.log(result.producttitle);
  } catch (exp) {
    throw exp;
  }

  return result;
};

Products.bookedMarked = function () {// here get all my userid Booked marked products and then get each prod and push to array and return the array.
};

Products.latestProducts = function () {
  var result;
  console.log("Api method");

  try {
    //Product.find({},{order:{createdAt:-1}});
    result = Products.find({}, {
      order: {
        createdAt: -1
      }
    });
  } catch (exp) {
    throw exp;
  }

  return result; //Products.find({}, {sort: {createdAt: -1}, limit: 1});
};

Products.MyProducts = function (SellerId) {
  //Product.find({},{order:{createdAt:-1}});
  return Products.find({
    sellerId: SellerId
  }, {
    order: {
      createdAt: -1
    }
  });
  ;
}; // Products.featuredProducts = function () {
//   var result = [];
//   console.log("Api method featuredProducts ");
//   //Meteor.settings.featuredProductsLimit 
//   try {
//     //result = Products.find({},{sort: {createdAt:1}, limit: 4});
//     //console.log(result);
//   }
//   catch (exp) {
//     throw exp;
//   }
//   return result;//Products.find({}, {sort: {createdAt: -1}, limit: 1});
//   // var ctr = Meteor.settings.featuredProductsLimit;
//   // console.log("Api Method featured : " +  ctr);
//   // var result = Products.find({},{sort:{createdAt:1},limit: 2});//Meteor.settings.featuredProductsLimit}); 
//   // return result;// Products.find({},{sort:{createdAt:1},limit: 2});//Meteor.settings.featuredProductsLimit});
// }


Products.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  return Products.find().sort({
    createdAt: -1
  }).limit(12).skip(continuationValue);
};

Meteor.methods({
  createProduct: function (product, loc) {
    check(product, {
      sellerId: String,
      producttitle: String,
      productDescription: String,
      price: Number,
      prodCat: String,
      url: String
    }, loc, Match.OneOf(Object, null));
    product.sellerId = Meteor.userId;
    product.createDate = new Date();
    product.expireDate = require("moment");
    var ProdInsert = Products.insert({
      sellerId,
      producttitle,
      productDescription,
      price,
      prodCat,
      createdAt,
      expireAt,
      url,
      prodImg
    });
    return ProdInsert;
  }
});
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes-data.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/recipes-data.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RecipesData = {
  "spring-fromage-fort": {
    "title": "Fromage Fort",
    "highlighted": true,
    "excerpt": "When I’ve got too many cheese bits on hand, it's now fromage fort to the rescue",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2014/04/fromage-forte-cheese-dip-spread-recipe/"
    },
    "cookTime": "15 min",
    "ingredients": ["8 ounces (225g) cheese pieces, hard rinds removed", "1 to 2 ounces (30 to 60g) cream cheese", "1/4 cup (60ml) dry white wine", "1 garlic clove, peeled and minced", "a few turns of freshly ground black pepper", "pinch of cayenne or red pepper powder", "1 tablespoon minced chives or flat-leaf parsley", "chives or parsley, for garnish"],
    "directions": ["Cut the cheese into bite-sized cubes and put them in the bowl of a food processor with 1 ounce (30g) of the cream cheese, wine, garlic, and the black and red peppers.", "Process the mixture until completely smooth. If it is not completely smooth (which may happen if you are starting with an assortment of harder cheeses), add the additional cream cheese, and continue to process."],
    "name": "spring-fromage-fort"
  },
  "spring-ragu-bolognese": {
    "title": "Classic Ragu Bolognese",
    "excerpt": "A certain magic happens as the beef and aromatic vegetables slowly cook down with wine, tomato paste, and broth",
    "source": {
      "name": "Bon Appétit",
      "url": "http://www.bonappetit.com/recipe/classic-rag-bolognese"
    },
    "cookTime": "1 hr 10 min",
    "ingredients": ["2 Tbsp. extra-virgin olive oil", "2 medium onions, finely chopped (about 1 1/2 cups)", "2 celery stalks, finely chopped (about 1 cup)", "2 carrots, peeled, finely chopped (about 3/4 cup)", "6 oz. ground beef (85% lean)", "6 oz. ground veal", "3 oz. thinly sliced pancetta, finely chopped", "1/2 cup dry red wine", "3 cups (about) beef stock or chicken stock, divided", "3 Tbsp. tomato paste", "Kosher salt and freshly ground black pepper", "1 cup whole milk", "1 lb. tagliatelle or fettuccine (preferably fresh egg)", "Finely grated Parmesan (for serving)"],
    "directions": ["Heat oil in a large heavy pot over medium-high heat.", "Add onions, celery, and carrots."],
    "name": "spring-ragu-bolognese"
  },
  "spring-animal-cracker-cookies": {
    "title": "Animal-Cracker Cookies",
    "excerpt": "Create and decorate magical cookies that are as much fun as a day at the circus!",
    "source": {
      "name": "Williams-Sonoma",
      "url": "http://www.williams-sonoma.com/recipe/animal-cracker-cookies.html"
    },
    "cookTime": "1 hr",
    "ingredients": ["2 1/2 cups all-purpose flour", "1 tsp. baking powder", "1/2 tsp. salt", "1/8 tsp. freshly grated nutmeg", "1/8 tsp. mace", "12 Tbs. (1 1/2 sticks) unsalted butter, at room temperature", "1 cup sugar", "1 egg", "1 tsp. vanilla extract"],
    "directions": ["Over a small bowl, sift together the flour, baking powder, salt, nutmeg and mace. Set aside.", "In the bowl of an electric mixer fitted with the flat beater, beat the butter on high speed for 2 minutes. Reduce the speed to medium, slowly add the sugar and beat for 2 minutes, stopping the mixer occasionally to scrape down the sides of the bowl. Add the egg and vanilla and beat for 1 minute, stopping the mixer once to scrape down the sides of the bowl."],
    "name": "spring-animal-cracker-cookies"
  },
  "spring-chicken-in-mole": {
    "title": "Chicken in Molé",
    "excerpt": "If there is one dish that could be considered Mexican haute cuisine, then Mole Poblano is surely it",
    "source": {
      "name": "Epicurious",
      "url": "http://www.epicurious.com/recipes/food/views/Chicken-in-Mole-Puebla-Style-238185"
    },
    "cookTime": "2 hr",
    "ingredients": ["4 pounds chicken pieces, skin on", "Sea salt and ground black pepper to taste", "2 tablespoons sesame seeds, toasted, for garnish", "white rice", "9 mulato chiles", "7 pasilla chiles", "6 ancho chiles", "1 cup plus 9 tablespoons vegetable oil or lard plus additional as needed", "4 or 5 tomatillos, husked and cooked until soft", "5 whole cloves", "20 whole black peppercorns", "1-inch piece of a Mexican cinnamon stick", "1 tablespoon seeds from the chiles, toasted", "1/2 teaspoon anise seeds, toasted", "1/4 teaspoon coriander seeds, toasted", "8 tablespoons sesame seeds, toasted", "4 garlic cloves, roasted", "3 tablespoons raisins", "20 whole almonds, blanched", "1/4 cup pumpkin seeds", "2 corn tortillas, torn into pieces", "3 stale French rolls, cut into 1-inch slices", "6 to 7 cups reserved chicken broth as needed", "1 1/2 ounces Mexican chocolate, chopped"],
    "directions": ["In a large stock pot, parboil the chicken in water seasoned with salt and pepper to taste. Drain, reserving cooking broth, and refrigerate until ready to assemble the dish.", "Prepare the Mole Poblano. Clean the chiles by removing stems, veins, and seeds; reserve 1 tablespoon of the seeds."],
    "name": "spring-chicken-in-mole"
  },
  "spring-spanish-asparagus-revuelto": {
    "title": "Spanish Asparagus Revuelto",
    "excerpt": "In Spain, wild asparagus is very popular, and it’s a sure sign of spring",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016240/spanish-asparagus-revuelto.html"
    },
    "cookTime": "30 min",
    "ingredients": ["Olive oil", "2 peeled garlic cloves, plus 1/2 teaspoon minced garlic", "2 cups bread cubes, made with day-old bread, cut in 1/2-inch cubes", "Salt and pepper", "2 ounces diced Spanish chorizo", "1 bunch thin asparagus, about 1 1/2 pounds, cut in 1- to 2-inch lengths", "1 bunch green onions, chopped", "8 large eggs, beaten", "1/2 teaspoon pimentón", "2 tablespoons roughly chopped Italian parsley"],
    "directions": ["Put 3 tablespoons olive oil in a cast-iron skillet over medium-high heat. Add peeled garlic cloves and let them sizzle until lightly browned, then remove.", "Add bread cubes, season with salt and pepper, lower heat to medium and gently fry until lightly browned and crisp, about 2 minutes. Remove bread and set aside to cool."],
    "name": "spring-spanish-asparagus-revuelto"
  },
  "spring-meatloaf": {
    "title": "Fatted Calf's Meatloaf",
    "highlighted": true,
    "excerpt": "It is a thing of beauty, shaped into a large oval loaf and glazed with tangy cocktail sauce",
    "source": {
      "name": "Food52",
      "url": "http://food52.com/recipes/24302-fatted-calf-s-meatloaf"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["3/4 teaspoons black peppercorns", "2 allspice berries", "2 teaspoons fennel seed", "1 teaspoon chile flakes", "1 whole clove", "1 1/4 pound boneless lean beef from eye of round or sirloin, cut into 1-inch cubes", "1 pound boneless pork picnic, cut into 1-inch cubes", "4 ounces pork back fat, cut into 1-inch cubes", "Sea salt", "2 teaspoons chopped garlic", "4 ounces chopped bacon", "2 cups diced yellow onion", "2 tablespoons unsalted butter", "6 tablespoons fresh breadcrumbs", "1 egg lightly beaten", "1/2 cup ketchup", "1 1/2 teaspoon Tabasco sauce", "1 1/4 teaspoon Worcestershire sauce", "1 teaspoon grated fresh horseradish", "1/4 cup chopped parsley", "2 tablespoons chopped oregano", "1 tablespoon chopped thyme", "1 tablespoon chopped sage", "1/4 cup ketchup", "1/4 teaspoon sea salt", "1/4 teaspoon freshly ground black pepper", "1 1/2 teaspoon grated fresh horseradish", "1/2 teaspoon Worcestershire sauce", "1/2 teaspoon Tabasco sauce"],
    "directions": ["Preheat the oven to 325° F (165° C). To make the forcemeat, spread the peppercorns and allspice on a baking sheet and toast for 3 to 5 minutes, until fragrant. Let cool completely.", "Toast the fennel seeds the same way, then let cool completely."],
    "name": "spring-meatloaf"
  },
  "spring-lahmacun-turkish-pizza": {
    "title": "Lahmacun - Turkish Pizza",
    "excerpt": "",
    "source": {
      "name": "Ottolenghi",
      "url": "http://www.ottolenghi.co.uk/lahmacun-turkish-pizza-with-spicy-minced-beef-and-salad-topping-shop"
    },
    "cookTime": "40 min",
    "ingredients": ["250g minced beef", "1 medium onion, finely chopped (180g net)", "3 3/4 tsp salt", "1 1/2 tsp ground cinnamon", "1 1/2 tsp ground allspice", "1/2 tsp red chilli flakes", "25g flat-leaf parsley, chopped", "2 tbsp pomegranate molasses", "1 1/2 tbsp sumac", "3 tbsp tahini", "25g pine nuts", "2 tbsp lemon juice", "250g white flour, plus extra to dust", "1 1/2 tbsp milk powder", "1/2 tbsp salt", "2 tsp fast-action dried yeast", "1/2 tbsp caster sugar", "60ml sunflower oil", "1 medium egg", "100ml lukewarm water", "Olive oil for brushing"],
    "directions": ["Start with the dough. Put the flour, milk powder, salt, yeast and sugar in a large mixing bowl and stir well to combine.", "Make a well in the centre. Add the sunflower oil and egg and stir as you add the water."],
    "name": "spring-lahmacun-turkish-pizza"
  },
  "spring-easiest-spaghetti-and-meatballs": {
    "title": "Easiest Spaghetti & Meatballs",
    "excerpt": "No pasta's more iconic than spaghetti and meatballs",
    "source": {
      "name": "Martha Stewart",
      "url": "http://www.marthastewart.com/336523/easiest-spaghetti-and-meatballs?czone=food%2Fdinner-tonight-center%2Fdinner-tonight-main-courses&gallery=274538&slide=336523&center=276948"
    },
    "cookTime": "30 min",
    "ingredients": ["Coarse salt and ground pepper", "1/4 cup finely grated Parmesan, plus more for serving", "1/4 cup chopped fresh parsley", "2 garlic cloves, minced", "1 large egg", "1 pound ground beef chuck", "1/4 cup plain dried breadcrumbs", "1 tablespoon olive oil", "1 can (28 ounces) crushed tomatoes in puree", "3/4 pound spaghetti"],
    "directions": ["Set a large pot of salted water to boil. In a bowl, combine Parmesan, parsley, garlic, egg, 1 teaspoon salt, and 1 teaspoon pepper. Add beef and breadcrumbs; mix gently. Form into 16 balls.", "In a 5-quart Dutch oven or heavy pot, heat oil over medium. Add meatballs, and cook, turning occasionally, until browned, 8 to 10 minutes."],
    "name": "spring-easiest-spaghetti-and-meatballs"
  },
  "summer-shaking-beef": {
    "title": "Slanted Door's Shaking Beef",
    "excerpt": "Cubes of tender filet mignon are sautéed with red onions and a vinaigrette",
    "source": {
      "name": "7x7 magazine",
      "url": "http://www.7x7.com/recipes/secret-recipe-slanted-doors-shaking-beef"
    },
    "cookTime": "25 min",
    "ingredients": ["1 1/2 - 2 pounds filet mignon, fat trimmed and cut into 1 1/4-inch cubes", "1 teaspoons ground black pepper", "1/2 cup plus 1 tablespoon canola oil", "1 cup thinly sliced red onion, preferably spring onions", "3 stalks green onion, trimmed and cut to 1-inch lengths", "1 tablespoon chopped garlic", "2 tablespoons unsalted butter", "2 tablespoons white vinegar", "1/4 cup white granulated sugar", "1/4 cup light soy sauce", "1/4 cup fish sauce", "1 teaspoon cooking rice wine"],
    "directions": ["Marinate meat 1/2 teaspoon black pepper and 1 tablespoon oil for about 2 hours.", "Meanwhile, make the stir-fry sauce by combining the white vinegar, sugar, soy, fish sauce, and rice wine. Mix until sugar is dissolved. Set aside."],
    "name": "summer-shaking-beef"
  },
  "summer-bavarian-pretzel": {
    "title": "Bavarian-style Soft Pretzel",
    "excerpt": "",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/2010/05/26/dining/26pretzelrex1.html"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["1 tablespoon barley malt syrup or dark brown sugar", "2 tablespoons lard or softened unsalted butter", "2 tablespoons instant yeast", "6 cups (about 30 ounces) bread flour", "1 tablespoon plus 1/2 teaspoon kosher salt", "Food-grade lye, for dipping", "Coarse sea salt or pretzel salt, for sprinkling (do not substitute kosher salt)"],
    "directions": ["In a mixing bowl (or bowl of a mixer), stir together syrup, lard or butter, yeast, 2 cups warm water and half the flour. Add kosher salt and remaining flour and stir just until mixture comes together in a shaggy mass.", "Turn out onto counter (or attach dough hook to mixer) and knead for 8 to 10 minutes, until smooth and supple. Cut into 12 pieces and let rest 5 minutes."],
    "name": "summer-bavarian-pretzel"
  },
  "summer-apricots-honey-panna-cotta": {
    "title": "Apricots Honey Panna Cotta",
    "highlighted": true,
    "excerpt": "Juicy, fragrant, perfectly textured for a little fire action",
    "source": {
      "name": "Tartelette",
      "url": "http://www.tarteletteblog.com/2011/07/recipe-gluten-free-apricots-honey-panna.html"
    },
    "cookTime": "35 min",
    "ingredients": ["6 apricots", "olive oil", "1/4 cup water", "1 tablespoon powdered gelatin (2 sheets gelatin)", "2 cups heavy cream", "1/4 cup honey", "1 cup full fat buttermilk"],
    "directions": ["Cut the apricots in half and remove the pit. Brush lightly with olive oil and grill over hot coals until tender (about 3-4 minutes on each side).", "Let cool and puree until smooth in a food processor. Divide the mixture between 6 glasses."],
    "name": "summer-apricots-honey-panna-cotta"
  },
  "summer-elderberry-syrup": {
    "title": "Elderberry Syrup",
    "excerpt": "The gorgeous syrup is great in a glass of sparkling water over ice, dripped some over plain yogurt",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2007/08/respect-your-el/"
    },
    "cookTime": "35 min",
    "ingredients": ["2 pounds (1kg) elderberries, stems removed and rinsed", "4 cups (1l) water", "2 1/2 (500g) cups sugar", "squirt of freshly-squeezed lemon juice"],
    "directions": ["Put the elderberries in a large, non-reactive pot with the water. Bring to a boil, then reduce heat to a low boil and cook for 15-20 minutes, until tender and soft.", "Pass through a food mill, then discard the skins."],
    "name": "summer-elderberry-syrup"
  },
  "summer-spaghetti-lemon-olive": {
    "title": "Spaghetti with Lemon & Olive Oil",
    "excerpt": "This is one of those recipes that are almost better off without one",
    "source": {
      "name": "Smitten Kitchen",
      "url": "http://smittenkitchen.com/blog/2011/02/spaghetti-with-lemon-and-olive-oil-al-limone/"
    },
    "cookTime": "20 min",
    "ingredients": ["1 pound spaghetti or linguine", "Salt", "3 lemons", "1/4 cup extra virgin olive oil , plus additional for serving", "1/4 cup heavy cream", "1 ounce finely grated Parmesan cheese (about 1/2 cup), plus additional for serving", "Ground black pepper", "Small handful fresh basil or arugula leaves, shredded"],
    "directions": ["Cook linguine or spaghetti in well-salted water to your al dente tastes in a large, wide-bottomed pot.", "While pasta is cooking, zest lemons until you have a little shy of a tablespoon of zest. Juice lemons — you’ll have anywhere from 1/3 to 1/2 cup lemon juice."],
    "name": "summer-spaghetti-lemon-olive"
  },
  "summer-homemade-pasta-dough": {
    "title": "Homemade Pasta Dough",
    "excerpt": "",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/basic-pasta-dough/"
    },
    "cookTime": "25 min",
    "ingredients": ["2 Cups All-Purpose Flour", "2 Cups 00 Flour or 4 cups All-Purpose Flour", "4 large Eggs"],
    "directions": ["Mound the flour in the center of a large wooden board. Make a well in the center of the flour and add the eggs. Using a fork, beat the eggs together and then begin to incorporate the flour; starting with the inner rim of the well. As you expand the well, keep pushing the flour up to retain the well shape (do not worry if it looks messy).", "When half of the flour is incorporated, the dough will begin to come together. Start kneading the dough, using primarily the palms of your hands. Once the dough is a cohesive mass, set the dough aside and scrape up and discard any dried bits of dough."],
    "name": "summer-homemade-pasta-dough"
  },
  "summer-hamburger": {
    "title": "Diner Style Hamburgers",
    "excerpt": "This is the traditional, griddled hamburger of diners and takeaway spots, smashed thin and cooked crisp on its edges",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016595/hamburgers-diner-style.html"
    },
    "cookTime": "20 min",
    "ingredients": ["1/2 teaspoon neutral oil, like canola, or a pat of unsalted butter", "2 pounds ground chuck, at least 20 percent fat", "Kosher salt and black pepper to taste", "8 slices cheese (optional)", "8 soft hamburger buns, lightly toasted", "Lettuce leaves, sliced tomatoes and condiments"],
    "directions": ["Add oil or butter to a large cast-iron or stainless-steel skillet and place over medium heat. Gently divide ground beef into 8 small piles of around 4 ounces each, and even more gently gather them together into orbs that are about 2 inches in height. Do not form patties.", "Increase heat under skillet to high. Put half the orbs into the skillet with plenty of distance between them and, using a stiff metal spatula, press down on each one to form a burger that is around 4 inches in diameter and about 1/2 inch thick. Season with salt and pepper."],
    "name": "summer-hamburger"
  },
  "fall-roasted-butternut-squash-lasagna": {
    "title": "Roasted Butternut Squash Lasagna",
    "highlighted": true,
    "excerpt": "Making homemade pasta may seem arduous, but this dish is worth the extra work",
    "source": {
      "name": "Martha Stewart",
      "url": "http://www.marthastewart.com/857657/roasted-butternut-squash-lasagna"
    },
    "cookTime": "1 hr 35 min",
    "ingredients": ["2 large butternut squashes (about 2 pounds each), halved lengthwise and seeded", "3 tablespoons extra-virgin olive oil", "Coarse salt and freshly ground pepper", "1 stick unsalted butter, cut into pieces", "2 1/4 cups finely grated Parmesan cheese (about 8 ounces)", "1/2 cup finely crushed amaretti cookies", "1/4 cup finely chopped fresh sage", "1/4 teaspoon freshly grated nutmeg", "6 tablespoons unsalted butter, cut into pieces", "1/4 cup plus 2 tablespoons all-purpose flour", "6 cups whole milk", "Coarse salt", "1/4 teaspoon freshly grated nutmeg", "Homemade Pasta"],
    "directions": ["Make the filling: Preheat oven to 400 degrees. Drizzle squash halves with oil, and season with salt and pepper. Roast squashes, cut sides down, on a rimmed baking sheet until tender and browned, about 1 hour. Let cool. Scoop flesh from skins, and puree in a food processor until smooth.", "Melt butter in a small saucepan over medium heat. Continue to cook until browned and fragrant, about 3 minutes. Transfer to a bowl."],
    "name": "fall-roasted-butternut-squash-lasagna"
  },
  "summer-grits-icecream": {
    "title": "Grits Praline & Brown Butter Ice Cream",
    "excerpt": "\"Decadent\" isn’t a word we throw around lightly",
    "source": {
      "name": "Anson Mills",
      "url": "http://www.ansonmills.com/recipes/480?recipes_by=grain"
    },
    "cookTime": "2 hr 20 min",
    "ingredients": ["2 ounces (4 tablespoons) European-style unsalted butter", "1 cup heavy cream", "1 cup whole milk", "6 large egg yolks", "1/3 cup sugar", "1 1/2 teaspoons vanilla extract", "1/8 teaspoon fine sea salt", "2 ounces Anson Mills Antebellum Coarse Yellow Grits or Antebellum Coarse White Grits", "2 1/2 cups spring or filtered water", "1 teaspoon fine sea salt", "3.5 ounces sugar"],
    "directions": ["Make the ice cream base: Set a large bowl in a sink or basin filled with lots (at least 3 quarts) of ice cubes and cold water. Have a fine-mesh strainer nearby. Melt the butter in a small heavy-bottomed saucepan over low heat, stirring with a wooden spoon to scrape the browning milk solids back into the butter, until the butter is the color of a hazelnut in the shell and the kitchen smells miraculous, 3 to 5 minutes. Pull the pan off the heat and set it aside.", "Pour the cream and milk into a medium heavy-bottomed saucepan set over medium-high heat. Whisk the egg yolks and sugar in a medium bowl. Drizzle the hot butter cautiously into the yolk-sugar mixture a little at a time, whisking well as you do."],
    "name": "summer-grits-icecream"
  },
  "fall-peanut-butter-cookie": {
    "title": "Peanut Butter Cookie with Salted Peanut Caramel",
    "excerpt": "This recipe takes Peanut Butter Cookies to the next level",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2008/12/peanut-butter-cookies-with-salte-1/"
    },
    "cookTime": "45 min",
    "ingredients": ["8 tablespoons (115g) unsalted butter, at room temperature", "1/2 cup (120g) packed light brown sugar", "1/2 cup (100g) granulated sugar", "1 large egg, at room temperature", "1 teaspoon vanilla extract", "3/4 cup (200g) creamy salted peanut butter", "1 3/4 cups (250g) flour", "1/2 teaspoon baking soda", "1/4 teaspoon salt", "1 cup (250ml) heavy cream", "1/2 cup (125ml) water", "1 cup (200g) granulated sugar", "1 tablespoon light corn syrup or glucose", "1/8 teaspoon coarse salt", "3/4 cup (100g) finely chopped roasted salted peanuts"],
    "directions": ["Preheat the oven to 350F and line two baking sheets with parchment paper or silicone baking mats.", "With an electric mixer, or by hand, make the cookie dough by beating the butter, brown and granulated sugar until smooth. Beat in the egg and vanilla until well blended. If using an electric mixer, scrape down the sides of the bowl."],
    "name": "fall-peanut-butter-cookie"
  },
  "fall-amatriciana": {
    "title": "Bucatini all' Amatriciana",
    "excerpt": "This dish is named for the town of Amatrice...considered by many Italians to be birthplace of the best cooks on the peninsula",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/bucatini-allamatriciana/"
    },
    "cookTime": "30 min",
    "ingredients": ["1/4 cup extra-virgin olive oil", "12 ounces thinly sliced guanciale pancetta, or good bacon", "1 red onion, cut lengthwise in half and then into 1/4-inch-thick half-moons", "3 cloves garlic, sliced", "1 1/2 teaspoons hot red pepper flakes", "2 cups Basic Tomato Sauce", "1 pound Bucatini", "Freshly grated Pecorino Romano"],
    "directions": ["Bring 6 quarts of water to a boil in a large pot, and add 2 tablespoons salt.", "Meanwhile, in a 10- to 12-inch saute pan, combine the olive oil, ganciale, onion, garlic, and re pepper flakes; set over low heat and cook until the onion is softened and the guanciale has rendered much of its fat, about 12 minutes."],
    "name": "fall-amatriciana"
  },
  "fall-orecchiette-sausage-ragu": {
    "title": "Orecchiette with red lamb sausage & carrots",
    "excerpt": "Chef di Cucina Matt Abdoo expounded on the virtues of the fundamental building block of Italian cooking: fresh pasta",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/orecchiette-with-red-lamb-sausage-carrots/"
    },
    "cookTime": "45 min",
    "ingredients": ["1 pound ground lamb", "1 1/2 teaspoons salt", "1 tablespoon red wine", "1 teaspoon cayenne pepper", "2 teaspoons garlic purée", "2 tablespoons roasted red pepper purée", "1 teaspoon freshly ground black pepper", "2 tablespoons sweet paprika", "1 teaspoon smoked paprika", "1 pint carrot juice", "2 cups diced carrots", "2 cups chopped carrots", "1 teaspoon sugar", "Orange zest, to taste", "Salt and pepper, to taste", "1/4 cup chicken stock", "2 tablespoons of unsalted butter", "1 pound orecchiette pasta", "1/4 cup pecorino cheese", "Extra virgin olive oil", "Breadcrumbs, for garnish"],
    "directions": ["To make the spice mixture for the sausage: In a bowl, combine spices, lamb, salt, and water. Incorporate thoroughly using your hands. Set aside.", "To make the carrot puree: Cook carrots in carrot juice until tender. Strain, and reserve the diced carrots. Puree the remaining chopped carrots. Season with orange zest, salt and pepper to taste.  Fold the diced carrots into the seasoned carrot puree. Set aside."],
    "name": "fall-orecchiette-sausage-ragu"
  },
  "winter-braised-duck": {
    "title": "Italian Red-Wine Braised Duck w/ Olive Gremolata",
    "highlighted": true,
    "excerpt": "A good braise always trumps a steak or a roast, both in terms of complex flavors and satisfaction",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1014424/italian-red-wine-braised-duck-with-olive-gremolata.html"
    },
    "cookTime": "2 hr 30 min",
    "ingredients": ["4 Muscovy duck legs (about 4 pounds), untrimmed", "Salt and pepper", "1/2 teaspoon coriander seed, toasted and coarsely ground", "1/2 teaspoon fennel seed, toasted and coarsely ground", "2 tablespoons olive oil", "2 cups finely diced onion", "3/4 cup finely diced carrot", "3/4 cup finely diced celery", "1 large thyme sprig", "1 bay leaf", "1 4-inch strip of orange peel, pith removed", "4 garlic cloves, minced", "2 tablespoons tomato paste", "1 cup chopped canned or fresh tomatoes", "1 cup dry red wine", "3 cups chicken broth", "Pinch cayenne or red pepper, optional", "Olive gremolata for garnish"],
    "directions": ["Trim duck legs of extraneous fat with a sharp knife, leaving a thin layer on top. (It is best to do this straight from the fridge, while fat is still firm.) Save duck fat for rendering.", "Season each leg generously with salt and pepper, then sprinkle with ground coriander and fennel. Massage seasoning into meat and leave at room temperature for 30 minutes, or wrap and refrigerate overnight."],
    "name": "winter-braised-duck"
  },
  "fall-chocolate-chai-cupcake": {
    "title": "Chocolate Chai Spice Cupcake",
    "excerpt": "The moist chocolatey goodness of the cake can live on its own",
    "source": {
      "name": "Cupcake Bakeshop",
      "url": "http://cupcakeblog.com/?p=50"
    },
    "cookTime": "55 min",
    "ingredients": ["200 gram bar of Valrhona 61% cacao", "3 sticks butter", "2-1/4 cups sugar", "8 eggs", "1-1/4 cup flour", "1/4 cup cocoa powder, unsweetened", "1-1/2 teaspoons baking powder", "3 teaspoons chai spice mix", "pinch of salt", "1 cup (2 sticks) butter", "4-5 cups powdered sugar, sifted", "1/4 cup milk", "2 teaspoons chai spice mix", "2 teaspoons minced fresh ginger"],
    "directions": ["With a small food processor, grind up the whole fennel and cloves.", "Transfer to a small bowl and add remaining spices. Mix to combine."],
    "name": "fall-chocolate-chai-cupcake"
  },
  "fall-mexican-rice": {
    "title": "Mexican Rice",
    "excerpt": "",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016674/mexican-rice.html"
    },
    "cookTime": "40 min",
    "ingredients": ["1 large clove garlic, roughly chopped", "2 cups canned tomatoes (fresh tomatoes can be used)", "1/2 cup green bell pepper, roughly chopped", "1 medium onion, roughly chopped", "1/2 medium jalapeño, seeds and veins removed", "1 teaspoon salt", "1/2 cup chicken stock or water", "2 tablespoons vegetable oil", "1 heaping cup long-grain white rice, rinsed"],
    "directions": ["Blend vegetables, salt and stock or water together into a mostly smooth purée (a few small pieces of onion and pepper are fine).", "In a large skillet with a tightfitting lid, heat oil. Add rice and toast until it absorbs most of the oil and begins to smell nutty."],
    "name": "fall-mexican-rice"
  },
  "fall-whole-wheat-goldfish-crackers": {
    "title": "Whole Wheat Goldfish Crackers",
    "excerpt": "",
    "source": {
      "name": "Smitten Kitchen",
      "url": "http://smittenkitchen.com/blog/2011/03/whole-wheat-goldfish-crackers/"
    },
    "cookTime": "1 hr 5 min",
    "ingredients": ["6 ounces (1 1/2 cups coarsely grated) sharp cheddar", "4 tablespoons (2 ounces or 57 grams) butter", "1/2 cup (2 1/2 ounces or 62 grams) whole wheat flour", "1/4 cup (1 1/8 ounces or 31 grams) all-purpose flour", "1/8 teaspoon onion powder", "1/8 to 1/4 teaspoon table salt"],
    "directions": ["Preheat oven to 350°F. Combine all ingredients in a food processor, running the machine until the dough forms a ball, about two minutes.", "If the dough feels warm or worrisome-ly soft, wrap it in waxed paper or plastic wrap and chill it in the fridge for 30 to 45 minutes. This also makes it easier to transfer shapes once they are rolled out."],
    "name": "fall-whole-wheat-goldfish-crackers"
  },
  "winter-world-peace-cookie": {
    "title": "P.Hermé & D.Greenspan's World Peace Cookies",
    "excerpt": "Shortbread cookie meets salted chocolate chip, and world peace feels within reach",
    "source": {
      "name": "Food52",
      "url": "http://food52.com/recipes/25372-pierre-herme-dorie-greenspan-s-world-peace-cookies"
    },
    "cookTime": "35 min",
    "ingredients": ["1 1/4 cups all-purpose flour", "1/3 cup unsweetened cocoa powder", "1/2 teaspoon baking soda", "1 stick plus 3 tablespoons (11 tablespoons) unsalted butter, room temperature", "2/3 cups (packed) light brown sugar", "1/4 cup granulated sugar", "1/2 teaspoon fleur del sel or 1/4 teaspoon fine sea salt", "1 teaspoon pure vanilla extract", "5 ounces bittersweet chocolate, chopped into chips, or a generous 3/4 cup store-bought mini chocolate chips"],
    "directions": ["Sift the flour, cocoa and baking soda together.", "Working with a stand mixer, preferably fitted with a paddle attachment, or with a hand mixer in a large bowl, beat the butter on medium speed until soft and creamy. Add both sugars, the salt and vanilla extract and beat for 2 minutes more."],
    "name": "winter-world-peace-cookie"
  },
  "winter-chocolate-tart": {
    "title": "Chocolate Tart",
    "highlighted": true,
    "excerpt": "A good chocolate tart doesn’t need to be fancy, but it needs to be deep, dark, and yes, somewhat decadent.",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2011/10/chocolate-tart-recipe/"
    },
    "cookTime": "1 hr",
    "ingredients": ["1 1/4 cup (250 g) sugar", "6 tablespoons (90 ml) warm coffee", "4 ounces (115 g) unsalted butter, cubed, room temperature", "pinch of sea salt", "4 ounces (115 g) bittersweet or semisweet chocolate, chopped", "2 ounces (55 g) unsweetened chocolate, chopped", "2 large eggs", "1/4 cup (35 g) flour", "1 tablespoon dark rum or 1 teaspoon vanilla extract", "One 9–10 inch prebaked tart shell"],
    "directions": ["Preheat oven to 350ºF (180ºC.)", "Spread the sugar in an even layer in the bottom of a large, heavy-duty saucepan or Dutch oven. Cook the sugar over moderate heat until the edges liquefy and being to caramelize. Use a heatproof utensil to gently drag the liquefied sugar toward the center of the pan, encouraging the sugar to melt evenly."],
    "name": "winter-chocolate-tart"
  },
  "winter-braised-eggs-with-beef": {
    "title": "Braised eggs w/ beef, smoked aubergine & tomato",
    "excerpt": "",
    "source": {
      "name": "Ottolenghi",
      "url": "http://www.ottolenghi.co.uk/recipes/meat/braised-eggs-with-beef-smoked-aubergine-and-tomato-shop"
    },
    "cookTime": "1 hr 5 min",
    "ingredients": ["4 aubergines (1.1kg gross)", "1 tbsp olive oil, plus extra for drizzling", "1 large onion, finely chopped (200g net)", "6 garlic cloves, roughly chopped (20g net)", "1/2 tsp chilli flakes", "1/2 tsp ground cinnamon", "1/2 tsp ground cumin", "2 tsp tomato paste", "300g minced beef", "2 medium tomatoes, chopped (100g net)", "2 tsp finely chopped preserved lemon (15g)", "4 eggs", "3/4 tsp sumac", "1 tbsp chopped parsley", "Salt and black pepper", "40g tahini", "2 tbsp lemon juice", "1 garlic clove, crushed"],
    "directions": ["Pierce the aubergines with a sharp knife in a few places and place each directly over a naked flame on your stovetop. Cook on medium heat for 20 minutes, turning occasionally with metal tongs until the outside is totally burnt and the aubergine starts to collapse on itself. Alternatively, place the pierced aubergines on a tin foil lined tray under a hot grill in the oven for an hour, turning every 20 minutes. Remove from and place in a colander.", "Cut a single slit in each aubergine, from top to bottom and allow the juices to strain. Once cool enough to handle, scoop out all the flesh, avoiding all black skin, and set aside. You should have about 370g aubergine flesh."],
    "name": "winter-braised-eggs-with-beef"
  },
  "winter-cashew-gateau": {
    "title": "Cashew Gateau with Coffee Cardamom Mousse",
    "excerpt": "The inspiration for the caramel stained \"glass\" panel comes from my grandmother",
    "source": {
      "name": "Tartelette",
      "url": "http://www.tarteletteblog.com/2008/08/cashew-gateau-with-coffee-cardamom.html"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["3/4 cups cashew, toasted/skinned", "1/3 cup cake flour, unsifted", "1 Tbsp. cornstarch", "3 large egg yolks", "1/2 cup sugar, divided (2Tb & 6 Tb)", "1/2 tsp. vanilla extract", "1/2 tsp. grated lemon rind", "2 lg. egg whites", "2 Tb melted butter, cooled", "1/2 teaspoon ground cardamom", "1/2 cup espresso or strong coffee", "1/4 cup sugar", "1 tsp powdered unflavored gelatin, softened in 1 tablespoon cold water", "1 cup heavy cream, cold", "1/2 cup heavy cream", "3/4 cup chopped chocolate or chocolate chips (about 6 oz or 180 gr)"],
    "directions": ["Position rack in the lower 3rd of the oven and preheat to 350 degrees.", "Grease and flour a 8” X 4” inch round springform pan."],
    "name": "winter-cashew-gateau"
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/router.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var feedSubscription;
var thisCurrentProduct; // Handle for launch screen possibly dismissed from app-body.js

dataReadyHold = null; // Global subscriptions

if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  Meteor.subscribe('images');
  Meteor.subscribe('getSellers'); // var resultsq = Meteor.subscribe('featuredProducts');
  // Session.set('featuredProducts',resultsq);

  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

ProductsController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('latestProducts', function () {
      dataReadyHold.release();
    });
    Meteor.subscribe('getSellerProducts', function () {
      dataReadyHold.release();
    });
  }
});
FeedController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
  }
});
RecipesController = RouteController.extend({
  data: function () {
    return _.values(RecipesData);
  }
});
BookmarksController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.user()) Meteor.subscribe('bookmarks');else Overlay.open('authOverlay');
  },
  data: function () {
    if (Meteor.user()) return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});
RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
}); // addSellerController = RouteController.extend({
//   onBeforeAction:function()
//   {
//     console.log('Seller Controller loaded');
//     if (Meteor.userId())
//     {
//       var currentSeller = Meteor.wrapAsync(getThisSeller(Meteor.userId()));     
//     }
//   }
// });
// function getThisSeller(id)
// {
//   console.log("Get Seller  : " + id);
//   var retProd = {};
//   var returnProd=[];
//   var repro =   Meteor.apply('getProductSeller', [id],{wait: true}, function(err,data){
//     if (!err)
//     {
//       Session.set("currentSeller",data);
//       console.log(data);
//     }
//     else
//     {
//       console.log(err);
//     }
//   });
// }

ProductController = RouteController.extend({
  onBeforeAction: function () {
    if (this.params._id) {
      console.log("Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product', Router.current().params._id);
      var currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id)); //var productImages = Meteor.wrapAsync(getProductImages(currentProduct.prodImg));
      //currentProduct.prodImg = productImages;

      dataReadyHold.release();
    }
  } // ,
  // data : function()
  // {
  //   currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
  // }

});

function getThisProdData(id) {
  console.log("Get Single product publish Router Method : " + id);
  var retProd = {};
  var returnProd = [];
  var repro = Meteor.apply('getProduct', [id], {
    wait: false
  }, function (err, data) {
    if (!err) {
      sessionStorage.removeItem("currentProduct");
      Session.set("currentProduct", data);
    } else {
      console.log(err);
      sessionStorage.removeItem("currentProduct");
    }
  });
}

SellerController = RouteController.extend({
  onBeforeAction: function () {
    console.log('Seller Controller loaded');

    if (Meteor.userId()) {
      //loading.start();
      //Meteor.subscribe('SellerDetailsImages',Meteor.userId());
      Meteor.subscribe('getSeller', Meteor.userId());
      Sellers.findOne({
        userId: Meteor.userId()
      }); // Meteor.call('getSeller', [Meteor.userId()], function(error, success) { 
      //   if (error) { 
      //     console.log('error getting seller', error); 
      //     sessionStorage.removeItem("currentSeller");
      //   } 
      //   if (success) { 
      //     console.log("Client Router Seller : " + success);
      //     sessionStorage.removeItem("currentSeller");
      //     Session.set("currentSeller",success);
      //   } 
      // });

      console.log('Seller Controller reference data');
      Meteor.subscribe('referenceData', function () {
        console.log(ReferenceData.find({}).count()); //loading.stop();

        dataReadyHold.release();
      });
    }
  }
});
EditProductController = RouteController.extend({
  onBeforeAction: function () {
    console.log("Edit Product");

    if (this.params._id) {
      console.log("Edit Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product', Router.current().params._id);
      var currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
      dataReadyHold.release();
    }
  }
});
AdminController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('news');
  }
});
HomeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('featuredProducts');
    console.log("Home from router products ");
    dataReadyHold.release();
  }
});
Router.route('home', {
  path: '/'
}); // Router.route('products', {
//   path : '/products/:_searchTerm',
//   // name: 'products',
//   // template: 'products',
//   });

Router.route('products');
Router.route('seller');
Router.route('feed');
Router.route('recipes');
Router.route('bookmarks');
Router.route('about');
Router.route('recipe', {
  path: '/recipes/:name'
});
Router.route('product', {
  path: '/product/:_id',
  name: 'productPage',
  template: 'product'
});
Router.route('editproduct', {
  path: '/editproduct/:_id',
  name: 'productEditPage',
  template: 'tmp_product_maintain',
  layoutTemplate: null,
  controller: EditProductController
});
Router.route('login', {
  path: '/login',
  template: 'authOverlay',
  layoutTemplate: 'appBody'
});
Router.route('signup', {
  path: '/signup',
  template: 'authOverlaySignup',
  layoutTemplate: 'appBody'
});
Router.route('admin', {
  layoutTemplate: null
});
Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seller.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/seller.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Sellers.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  },
  update: function (userId, doc) {
    return doc.userId === userId;
  },
  remove: function (userId, doc) {
    return doc.userId === userId;
  }
});
Meteor.methods({
  'getSeller': function (id) {
    var result = {};

    try {
      //console.log(" server find one : " + id);
      //loading.start();
      var SellerResult = Meteor.apply('getProductSeller', [id], {
        returnStubValue: true
      }); //console.log("Server seller " );

      if (SellerResult) {
        //console.log("has seller");
        result = SellerResult;
      } else {
        // console.log("has no seller");
        result = {
          _id: "",
          userId: Meteor.userId(),
          businessname: "",
          busTagLine: "",
          busLogo: "",
          busAvatar: "",
          bustel: "",
          buscel: "",
          busemail: "",
          cont1: "",
          cont2: "",
          add1: "",
          add2: "",
          add3: "",
          add4: "",
          add5: "",
          website: ""
        };
      } //loading.stop();

    } catch (exp) {
      //loading.halt();
      throw exp;
    } //console.log(result);


    return result;
  },
  'newSeller': function (sellerObj) {
    // var result = Products.find({_id:prodid});
    try {
      var sellerResult = Sellers.upsert({
        // Selector
        userId: sellerObj.userId
      }, {
        // Modifier
        $set: {
          businessname: sellerObj.businessname,
          busTagLine: sellerObj.busTagLine,
          busLogo: sellerObj.busLogo,
          busAvatar: sellerObj.busAvatar,
          bustel: sellerObj.bustel,
          buscel: sellerObj.buscel,
          busemail: sellerObj.busemail,
          cont1: sellerObj.cont1,
          cont2: sellerObj.cont2,
          add1: sellerObj.add1,
          add2: sellerObj.add2,
          add3: sellerObj.add3,
          add4: sellerObj.add4,
          add5: sellerObj.add5,
          website: sellerObj.website
        }
      }); //console.log(sellerResult);
      //return Sellers.insert(sellerObj);
    } catch (error) {
      console.log("Server - Seller - " + error);
      throw error;
    }
  },
  'updateSeller': function (sellerObj) {
    // var result = Products.find({_id:prodid});
    return Sellers.findOne({
      userId: prodid
    });
  },
  'deleteSeller': function (id) {
    // var result = Products.find({_id:prodid});
    return Sellers.remove({
      userId: id
    });
  }
});

Sellers.allSellers = function () {
  return Sellers.find({});
};

Sellers.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  return Sellers.find({}, {
    sort: {
      date: -1
    }
  });
};
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"_settings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/_settings.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/localmarket#configuring-twitter
if (typeof Meteor.settings === 'undefined') Meteor.settings = {};

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "PLfrg2bUh0oL0asi3R2fumRjm",
    secret: "sRI8rnwO3sx7xUAxNWTX0WEDWph3WEBHu6tTdJYQ5wVrJeVCCt"
  },
  ///Users/farid/Documents/Projects/Meteor/untitled folder/localmarket-master/.meteor/local/build/programs/web.browser/app/img/prods
  products: {
    fileSavePath: "/Users/farid/Documents/Projects/Meteor/justadit/public/img/prods/",
    imgPath: "/img/prods/",
    maxfileUploadSize: 2000000,
    maxfileUploadSource: ""
  },
  featuredProductsLimit: 4
});

ServiceConfiguration.configurations.upsert({
  service: "twitter"
}, {
  $set: {
    consumerKey: Meteor.settings.twitter.consumerKey,
    secret: Meteor.settings.twitter.secret
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/publications.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.publish('bookmarkCounts', function () {
  return BookmarkCounts.find();
});
Meteor.publish('news', function () {
  return News.find({}, {
    sort: {
      date: -1
    },
    limit: 1
  });
});
Meteor.publish('images', function () {
  return Images.find({});
});
Meteor.publish('latestProducts', function () {
  console.log("Publishing home view products :" + Meteor.settings.featuredProductsLimit);
  var returnProds;

  try {
    returnProds = Products.find({}, {
      sort: {
        createdAt: -1
      }
    });
  } catch (exp) {
    console.log("Server : latest Products - " + exp);
  }

  console.log("Publishing Latest Product : ");
  return returnProds;
});
Meteor.publish('latestActivity', function () {
  console.log("Publishing Activities : " + Activities.count);
  return Activities.latest();
});
Meteor.publish('feed', function () {
  return Activities.find({}, {
    sort: {
      date: -1
    },
    limit: 10
  });
});
Meteor.publish('recipe', function (name) {
  check(name, String);
  return [BookmarkCounts.find({
    recipeName: name
  }), Activities.find({
    recipeName: name
  })];
});
Meteor.publish('referenceData', function () {
  console.log("Publishing Activities : " + ReferenceData.count);
  return ReferenceData.find({});
});
Meteor.publish('allProducts', function () {//return Products.find({},{order:{createdAt:-1}});
});
Meteor.publish('featuredProducts', function () {
  console.log("Publishing home view products :" + Meteor.settings.featuredProductsLimit);
  var returnProds;

  try {
    returnProds = Products.find({}, {
      sort: {
        createdAt: -1
      }
    }, {
      limit: Meteor.settings.featuredProductsLimit
    });
  } catch (exp) {
    console.log("Server : featuredProduct - " + exp);
  }

  return returnProds;
});
Meteor.publish('product', function (id) {
  check(id, String);
  console.log("Get Single product publish : " + id);
  var returnProd = [];

  try {
    this.ready();
    var Prods = Products.findOne({
      _id: id
    }); //console.log(Prods);

    return Products.find({
      _id: id
    });
  } catch (exp) {
    this.ready();
    console.log("Server : Product - " + exp);
  }
});
Meteor.publish('getSeller', function (id) {
  check(id, String);
  console.log("Getting Seller : " + id);
  var result = [];

  try {
    var sellers = Sellers.find({
      userId: id
    });
    return sellers;
  } catch (exp) {
    console.log("Server Side : Error getting sellers - " + exp);
  }

  return result;
});
Meteor.publish('getSellers', function () {
  console.log("Getting Seller  Images");
  return Sellers.find({});
});
Meteor.publish('SellerDetailsImages', function (id) {
  check(id, String);
  console.log("Getting Seller Details Images");
  return Images.find({
    ImageCat: 'SellerDetails',
    SellerId: id
  });
});
Meteor.publish('SellerProductImages', function (id) {
  //check(id,String);
  console.log("Getting Seller Product Images");
  return Images.find({
    ImageCat: 'ProductDetails',
    ImageId: id
  });
});
Meteor.publish('SingleProductImage', function (id) {
  //check(id, String);
  //console.log("Get product single image publish : " + id);
  var returnImage = [];

  try {
    var img = Images.findOne({
      ImageId: id
    });
    returnImage.push(img);
  } catch (exp) {
    console.log("Server - Product Image - " + exp);
  }

  return Images.find({
    ImageId: id
  }, {
    limit: 1
  });
});
Meteor.publish('ProductImages', function (id) {
  //check(id, String);
  console.log("Get Seller products images publish : " + id);
  var returnImages = Images.find({
    ImageId: id
  });
  console.log(returnImages.count());

  try {
    Images.find({
      ImageId: id
    }).forEach(element => {//console.log(element);
    });
  } catch (exp) {
    console.log("Server - Product Images - " + exp);
  }

  return returnImages;
});
Meteor.publish('SellerProducts', function (id) {
  check(id, String);
  console.log("Get Seller products publish : " + id);

  try {
    var SellerProds = Products.find({
      sellerId: id
    });
    return SellerProds;
  } catch (error) {
    throw error;
  }
});
Meteor.publish('QSearch', function (options) {
  console.log("Quick Search");
  var searchTerms = "'/^.*" + options + ".*$/i'";
  console.log(searchTerms); //$text: {$search: searchValue} },

  var prods = Products.find({
    "producttitle": {
      $regex: searchTerms
    }
  });
  console.log(prods.count());
  var result = [];
  prods.forEach(element => {
    result.push(element);
  }); //var result = Products.find({$text: {$search: searchTerms}}).fetch();
  //({$text:{$search:"tutorialspoint"}})

  console.log(result);
  return result;
}); // autopublish the user's bookmarks and admin status

Meteor.publish(null, function () {
  return Meteor.users.find(this.userId, {
    fields: {
      admin: 1,
      bookmarkedRecipeNames: 1,
      'services.twitter.profile_image_url_https': 1
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/users.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Accounts.onCreateUser(function (options, user) {
  if (options.profile) user.profile = options.profile; // If this is the first user going into the database, make them an admin

  if (Meteor.users.find().count() === 0) user.admin = true;
  return user;
});
Accounts.onLogin(function () {
  console.log("Login in");

  if (Meteor.userId) {
    return true;
  }
});
Accounts.onLogout(function () {
  if (!Meteor.userId) {
    this.Router.go("/");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/lib/startup/apiSetup.js");
require("/lib/startup/fixtures.js");
require("/lib/activities.js");
require("/lib/bookmarks.js");
require("/lib/common.js");
require("/lib/media.js");
require("/lib/news.js");
require("/lib/product.js");
require("/lib/products.js");
require("/lib/recipes-data.js");
require("/lib/router.js");
require("/lib/seller.js");
require("/server/_settings.js");
require("/server/publications.js");
require("/server/users.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL3N0YXJ0dXAvYXBpU2V0dXAuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9zdGFydHVwL2ZpeHR1cmVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvYWN0aXZpdGllcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2Jvb2ttYXJrcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbW1vbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL21lZGlhLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvbmV3cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL3Byb2R1Y3QuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi9wcm9kdWN0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL3JlY2lwZXMtZGF0YS5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL3JvdXRlci5qcyIsIm1ldGVvcjovL/CfkrthcHAvbGliL3NlbGxlci5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL19zZXR0aW5ncy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3VzZXJzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJSZWZlcmVuY2VEYXRhIiwiTW9uZ28iLCJDb2xsZWN0aW9uIiwiU2VsbGVycyIsIk1ldGVvciIsInN0YXJ0dXAiLCJpc1NlcnZlciIsImZpbmQiLCJjb3VudCIsInJlZkRhdGFzIiwibmFtZSIsImlkIiwidmFsdWUiLCJ0aW1ldG9hZGQiLCJmb3JFYWNoIiwicmVmRGF0YSIsImluc2VydCIsIlByb2R1Y3RzIiwicHJvZERhdGEiLCJzZWxsZXJJZCIsInByb2R1Y3R0aXRsZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInByaWNlIiwicHJkQ2F0IiwicHJvZEltZyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJleHBpcmVBdCIsIm5vdyIsInByb2QiLCJfaWQiLCJidXNDYXQiLCJidXNpbmVzc25hbWUiLCJidXNpbmVzc2FnIiwiYWRkMSIsImFkZDIiLCJhZGQzIiwiYWRkNCIsIm9mZmljZSIsImNlbGwiLCJlbWFpbCIsImNvbnRhY3QxIiwiY29udGFjdDIiLCJ1cmwiLCJsb2dvSW1nIiwiSW1hZ2VzIiwiSVNPRGF0ZSIsIkFjdGl2aXRpZXMiLCJhbGxvdyIsInVzZXJJZCIsImRvYyIsImxhdGVzdCIsInNvcnQiLCJkYXRlIiwibGltaXQiLCJtZXRob2RzIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eSIsInR3ZWV0IiwibG9jIiwiY2hlY2siLCJTdHJpbmciLCJyZWNpcGVOYW1lIiwidGV4dCIsImltYWdlIiwiQm9vbGVhbiIsIk1hdGNoIiwiT25lT2YiLCJPYmplY3QiLCJ1c2VyQXZhdGFyIiwidXNlciIsInNlcnZpY2VzIiwidHdpdHRlciIsInByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzIiwidXNlck5hbWUiLCJwcm9maWxlIiwiaXNTaW11bGF0aW9uIiwicGxhY2UiLCJnZXRMb2NhdGlvblBsYWNlIiwidHdlZXRBY3Rpdml0eSIsInR3aXR0ZXJPYXV0aCIsIm9wdGlvbnMiLCJjb25maWciLCJzZXR0aW5ncyIsInVzZXJDb25maWciLCJjb25zdW1lcl9rZXkiLCJjb25zdW1lcktleSIsImNvbnN1bWVyX3NlY3JldCIsInNlY3JldCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ0b2tlbl9zZWNyZXQiLCJhY2Nlc3NUb2tlblNlY3JldCIsImFwcGVuZFR3ZWV0IiwiYXBwZW5kIiwiTUFYIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwicmVwbGFjZSIsInJlc3BvbnNlIiwiSFRUUCIsInBvc3QiLCJwYXJhbXMiLCJtZWRpYSIsIm5wbVJlcXVlc3RPcHRpb25zIiwib2F1dGgiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJkYXRhIiwiYXR0YWNobWVudCIsInN0YXR1cyIsIm1lZGlhX2lkcyIsIm1lZGlhX2lkX3N0cmluZyIsImNvb3JkcyIsImFjY3VyYWN5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZXQiLCJfIiwicmVzdWx0IiwicGxhY2VzIiwicGxhY2VfdHlwZSIsImZ1bGxfbmFtZSIsIkJvb2ttYXJrQ291bnRzIiwiYWZmZWN0ZWQiLCJ1c2VycyIsInVwZGF0ZSIsImJvb2ttYXJrZWRSZWNpcGVOYW1lcyIsIiRuZSIsIiRhZGRUb1NldCIsIiRpbmMiLCIkcHVsbCIsImVhY2giLCJSZWNpcGVzRGF0YSIsInJlY2lwZSIsIkhhbmRsZWJhcnMiLCJyZWdpc3RlckhlbHBlciIsInNvdXJjZSIsIm9iaiIsIm5ld1JhbmRvbUlkIiwicHJlZml4U3RyIiwicm5kIiwicmVxdWlyZSIsImpzV3JpdGVGaWxlIiwiZmJpbmFyeURhdGEiLCJmaWxlbmFtZSIsImZzIiwiTnBtIiwiYmFzZTY0SW1hZ2UiLCJzcGxpdCIsImJpbmFyeURhdGEiLCJCdWZmZXIiLCJ0b1N0cmluZyIsInBhdGh0b0ZpbGUiLCJyb290UGF0aCIsInN0clBhdGgiLCJzdWJzdHIiLCJpbWFnZVBhdGgiLCJwcm9kdWN0cyIsImZpbGVTYXZlUGF0aCIsIndyaXRlRmlsZU5hbWUiLCJleGlzdHMiLCJ3cml0ZUZpbGUiLCJlcnIiLCJleHAiLCJlcnJvciIsInNhdmVJbWFnZUZpbGUiLCJnZXRSZWZlcmVuY2VEYXRhIiwicmVmTmFtZSIsImFkZFRpbWUiLCJpbWFnZVN0b3JlIiwiRlMiLCJTdG9yZSIsIkZpbGVTeXN0ZW0iLCJwYXRoIiwiY2h1bmtTaXplIiwibWF4VHJpZXMiLCJzdG9yZXMiLCJyZW1vdmUiLCJkb3dubG9hZCIsImdldFByb2R1Y3RJbWFnZXMiLCJJbWdJZCIsInByb2RJbWFnZXMiLCJJbWFnZUlkIiwicmV0dXJuSW1hZ2VzIiwiZWxlbWVudCIsInB1c2giLCJOZXdzIiwiZmluZE9uZSIsImFkbWluIiwiUHJvZHVjdCIsIm9yZGVyIiwic3Vic2NyaWJlIiwicmVzdWx0cyIsInByb2R1Y3RPYmoiLCJuZXdQcm9kIiwiUHJvZEltZ3MiLCJwcm9kdWN0UmVzdWx0IiwidXBzZXJ0IiwiJHNldCIsIk15UHJvZHVjdHMiLCJTZWxsZXJJRCIsIm1vcmUiLCJjb250aW51YXRpb25WYWx1ZSIsImZlYXR1cmVkUHJvZHVjdHNMaW1pdCIsInByb2RyZXN1bHQiLCJSZXN1bHRzIiwicHJvZGlkIiwic2VsbCIsImFwcGx5IiwicmV0dXJuU3R1YlZhbHVlIiwic2VsbGVyIiwicHJvZEltZ3MiLCJzZWFyY2hJdGVtIiwic2VhcmNoVGVybXMiLCJwcm9kcyIsIiRvciIsIiRyZWdleCIsImFsbFByb2R1Y3RzIiwiZ2V0UHJvZHVjdCIsInByb2RJZCIsImJvb2tlZE1hcmtlZCIsImxhdGVzdFByb2R1Y3RzIiwiU2VsbGVySWQiLCJza2lwIiwiY3JlYXRlUHJvZHVjdCIsInByb2R1Y3QiLCJOdW1iZXIiLCJwcm9kQ2F0IiwiY3JlYXRlRGF0ZSIsImV4cGlyZURhdGUiLCJQcm9kSW5zZXJ0IiwiZmVlZFN1YnNjcmlwdGlvbiIsInRoaXNDdXJyZW50UHJvZHVjdCIsImRhdGFSZWFkeUhvbGQiLCJpc0NsaWVudCIsIlJvdXRlciIsImNvbmZpZ3VyZSIsImxheW91dFRlbXBsYXRlIiwibm90Rm91bmRUZW1wbGF0ZSIsIkxhdW5jaFNjcmVlbiIsImhvbGQiLCJQcm9kdWN0c0NvbnRyb2xsZXIiLCJSb3V0ZUNvbnRyb2xsZXIiLCJleHRlbmQiLCJvbkJlZm9yZUFjdGlvbiIsInJlbGVhc2UiLCJGZWVkQ29udHJvbGxlciIsIlJlY2lwZXNDb250cm9sbGVyIiwidmFsdWVzIiwiQm9va21hcmtzQ29udHJvbGxlciIsIk92ZXJsYXkiLCJvcGVuIiwicGljayIsIlJlY2lwZUNvbnRyb2xsZXIiLCJQcm9kdWN0Q29udHJvbGxlciIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnQiLCJjdXJyZW50UHJvZHVjdCIsIndyYXBBc3luYyIsImdldFRoaXNQcm9kRGF0YSIsInJldFByb2QiLCJyZXR1cm5Qcm9kIiwicmVwcm8iLCJ3YWl0IiwiU2Vzc2lvbiIsInNldCIsIlNlbGxlckNvbnRyb2xsZXIiLCJFZGl0UHJvZHVjdENvbnRyb2xsZXIiLCJBZG1pbkNvbnRyb2xsZXIiLCJIb21lQ29udHJvbGxlciIsInJvdXRlIiwidGVtcGxhdGUiLCJjb250cm9sbGVyIiwib25seSIsIlNlbGxlclJlc3VsdCIsImJ1c1RhZ0xpbmUiLCJidXNMb2dvIiwiYnVzQXZhdGFyIiwiYnVzdGVsIiwiYnVzY2VsIiwiYnVzZW1haWwiLCJjb250MSIsImNvbnQyIiwiYWRkNSIsIndlYnNpdGUiLCJzZWxsZXJPYmoiLCJzZWxsZXJSZXN1bHQiLCJhbGxTZWxsZXJzIiwiZGVmYXVsdHMiLCJpbWdQYXRoIiwibWF4ZmlsZVVwbG9hZFNpemUiLCJtYXhmaWxlVXBsb2FkU291cmNlIiwiU2VydmljZUNvbmZpZ3VyYXRpb24iLCJjb25maWd1cmF0aW9ucyIsInNlcnZpY2UiLCJwdWJsaXNoIiwicmV0dXJuUHJvZHMiLCJyZWFkeSIsIlByb2RzIiwic2VsbGVycyIsIkltYWdlQ2F0IiwicmV0dXJuSW1hZ2UiLCJpbWciLCJTZWxsZXJQcm9kcyIsImZpZWxkcyIsIkFjY291bnRzIiwib25DcmVhdGVVc2VyIiwib25Mb2dpbiIsIm9uTG9nb3V0IiwiZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0FBLFFBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBQyxnQkFBZ0IsSUFBSUMsTUFBTUMsVUFBVixDQUFxQixlQUFyQixDQUFoQixDLENBQ0E7O0FBQ0FDLFVBQVUsSUFBSUYsTUFBTUMsVUFBVixDQUFxQixTQUFyQixDQUFWLEMsQ0FDQztBQUdEO0FBRUE7QUFFQSxROzs7Ozs7Ozs7OztBQ1pBRSxPQUFPQyxPQUFQLENBQWUsTUFBTTtBQUNqQixNQUFJRCxPQUFPRSxRQUFYLEVBQXFCO0FBS3JCUixZQUFRQyxHQUFSLENBQVksd0JBQVosRUFMcUIsQ0FNbkI7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkFELFlBQVFDLEdBQVIsQ0FBWSw0QkFBNEJDLGNBQWNPLElBQWQsR0FBcUJDLEtBQXJCLEVBQXhDOztBQUVBLFFBQUlSLGNB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QUFSLENBQVksVUFBWjs7QUFDQSxNQUFJSyxPQUFPNkMsTUFBWCxFQUNBO0FBQ0UsV0FBTyxJQUFQO0FBRUQ7QUFFRixDQVJEO0FBV0FrUSxTQUFTRyxRQUFULENBQWtCLFlBQVU7QUFDMUIsTUFBSSxDQUFDbFQsT0FBTzZDLE1BQVosRUFDQTtBQUNFLFNBQUsyTCxNQUFMLENBQVkyRSxFQUFaLENBQWUsR0FBZjtBQUNEO0FBRUYsQ0FORCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5jb25zb2xlLmxvZyhcIkNyZWF0aW5nIERiIENvbGxlY3Rpb25zXCIpO1xuUmVmZXJlbmNlRGF0YSA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdSZWZlcmVuY2VEYXRhJyk7XG4vL1Byb2R1Y3RzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1Byb2R1Y3RzJyk7XG5TZWxsZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1NlbGxlcnMnKTtcbiAvL2NvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignZmVhdHVyZWRQcm9kdWN0cycpO1xuIFxuXG4vLyB0aGlzLmF1dG9ydW4oZnVuY3Rpb24oKSB7XG4gICAgIFxuLy8gICAgICAgbWV0ZW9yLnN1YnNjcmliZSgnZmVhdHVlcmQnKVxuICAgICBcbi8vICAgfSk7IiwiTWV0ZW9yLnN0YXJ0dXAoKCkgPT4geyBcbiAgICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cbiAgICAgXG4gICAgICAgIFxuXG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgRml4dHVyZSBTdGFydHVwXCIpOyAgXG4gICAgICAvLyBpZiB0aGUgTGlua3MgY29sbGVjdGlvbiBpcyBlbXB0eVxuICAgICAgLypcbiAgICAgIGNvbnNvbGUubG9nKExpbmtzLmZpbmQoKS5jb3VudCgpKTtcbiAgICAgIGlmIChMaW5rcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRG8gdGhlIFR1dG9yaWFsJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1ldGVvci5jb20vdHJ5JyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnRm9sbG93IHRoZSBHdWlkZScsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vZ3VpZGUubWV0ZW9yLmNvbScsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1JlYWQgdGhlIERvY3MnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9kb2NzLm1ldGVvci5jb20nLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdEaXNjdXNzaW9ucycsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2ZvcnVtcy5tZXRlb3IuY29tJyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIFxuICAgICAgICBkYXRhLmZvckVhY2gobGluayA9PiBMaW5rcy5pbnNlcnQobGluaykpO1xuICAgICAgfSovXG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhcIlJlZmVyZW5jZSBEYXRhIENoZWNrIDogXCIgKyBSZWZlcmVuY2VEYXRhLmZpbmQoKS5jb3VudCgpICkgO1xuICAgICAgXG4gICAgICBpZiAoUmVmZXJlbmNlRGF0YS5maW5kKCkuY291bnQoKSA9PT0gMCApXG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBSZWZlcmVuY2UgRGF0YVwiKTtcbiAgICAgICAgICBjb25zdCByZWZEYXRhcyA9IFtcblxuICAgICAgICAgIFxuICAgICAgICAgICAge25hbWU6XCJidXNDYXRcIixpZDpcIjBcIix2YWx1ZTpcIkVsZWN0cm9uaWNcIn0sXG4gICAgICAgICAgICB7bmFtZTpcImJ1c0NhdFwiLGlkOlwiMVwiLHZhbHVlOlwiRmFzaGlvblwifSxcbiAgICAgICAgICAgIHtuYW1lOlwiYnVzQ2F0XCIsaWQ6XCIyXCIsdmFsdWU6XCJDb252aWVuY2VcIn0sXG4gICAgICAgICAgICB7bmFtZTpcImJ1c0NhdFwiLGlkOlwiM1wiLHZhbHVlOlwiRm9vZFwifSwgICAgIFxuICAgICAgICAgICAge25hbWU6XCJidXNDYXRcIixpZDpcIjRcIix2YWx1ZTpcIk9uY2UgT2ZmXCJ9LFxuICAgICAgICAgICAge25hbWU6XCJhZGRUaW1lXCIsaWQ6XCIxXCIsdmFsdWU6XCJGcmVlXCIsdGltZXRvYWRkOjF9LFxuICAgICAgICAgICAge25hbWU6XCJhZGRUaW1lXCIsaWQ6XCIyXCIsdmFsdWU6XCIzIERheXNcIix0aW1ldG9hZGQ6M30sXG4gICAgICAgICAgICB7bmFtZTpcImFkZFRpbWVcIixpZDpcIjNcIix2YWx1ZTpcIjEgV2Vla1wiLHRpbWV0b2FkZDo3fSxcbiAgICAgICAgICAgIHtuYW1lOlwiYWRkVGltZVwiLGlkOlwiNFwiLHZhbHVlOlwiMiBXZWVrc1wiLHRpbWV0b2FkZDoxNH0sXG4gICAgICAgICAgICB7bmFtZTpcImFkZFRpbWVcIixpZDpcIjVcIix2YWx1ZTpcIjEgTW9udGhcIix0aW1ldG9hZGQ6MzB9LFxuICAgICAgICAgICAge25hbWU6XCJwcmRDYXRcIixpZDpcIjBcIix2YWx1ZTpcIkRlYWxzXCJ9LFxuICAgICAgICAgICAge25hbWU6XCJwcmRDYXRcIixpZDpcIjFcIix2YWx1ZTpcIkhvbWVcIn0sXG4gICAgICAgICAgICB7bmFtZTpcInByZENhdFwiLGlkOlwiMlwiLHZhbHVlOlwiRm9vZFwifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCIzXCIsdmFsdWU6XCJTZWN1cml0eVwifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCI0XCIsdmFsdWU6XCJFZHVjYXRpb25cIn0sXG4gICAgICAgICAgICB7bmFtZTpcInByZENhdFwiLGlkOlwiNVwiLHZhbHVlOlwiQ29zbWV0aWNcIn0sXG4gICAgICAgICAgICB7bmFtZTpcInByZENhdFwiLGlkOlwiNlwiLHZhbHVlOlwiS2l0Y2hlblwifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCI3XCIsdmFsdWU6XCJTZXJ2aWNlc1wifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCI4XCIsdmFsdWU6XCJUb29sc1wifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCI5XCIsdmFsdWU6XCJGYXNoaW9uXCJ9LFxuICAgICAgICAgICAge25hbWU6XCJwcmRDYXRcIixpZDpcIjEwXCIsdmFsdWU6XCJNb3RvciBTYWxlc1wifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCIxMVwiLHZhbHVlOlwiQ29tcHV0ZXJcIn0sXG4gICAgICAgICAgICB7bmFtZTpcInByZENhdFwiLGlkOlwiMTJcIix2YWx1ZTpcIkhlYWx0aFwifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCIxM1wiLHZhbHVlOlwiUG9wIFVwc1wifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCIxM1wiLHZhbHVlOlwiQ29tbXVuaXR5IEV2ZW50c1wifSxcbiAgICAgICAgICAgIHtuYW1lOlwicHJkQ2F0XCIsaWQ6XCIxNFwiLHZhbHVlOlwiT3RoZXJcIn1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgXG4gICAgICAgICAgICAgICAgcmVmRGF0YXMuZm9yRWFjaChyZWZEYXRhID0+IFJlZmVyZW5jZURhdGEuaW5zZXJ0KHJlZkRhdGEpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlZmVyZW5jZSBEYXRhIFBvc3QgSW5zZXJ0IENoZWNrIDogXCIgKyBSZWZlcmVuY2VEYXRhLmZpbmQoKS5jb3VudCgpICkgO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IERhdGEgQ2hlY2sgOiBcIiArIFByb2R1Y3RzLmZpbmQoKS5jb3VudCgpICkgO1xuICAgICAgXG4gICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIGlmIChQcm9kdWN0cy5maW5kKCkuY291bnQoKSA9PT0gMClcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHByb2REYXRhID0gWyAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgc2VsbGVySWQ6XCIxXCIsXG4gICAgICAgICAgICBwcm9kdWN0dGl0bGU6XCJzb21lIGl0ZW1cIixcbiAgICAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjpcIlNvbWUgUHJvZHVjdCBkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgcHJpY2U6XCIxMDAuMDBcIixcbiAgICAgICAgICAgIHByZENhdDowLCAgICBcbiAgICAgICAgICAgIHByb2RJbWcgOiBbXCIxXCJdLFxuICAgICAgICAgICAgY3JlYXRlZEF0Om5ldyBEYXRlKCksXG4gICAgICAgICAgICBleHBpcmVBdCA6IERhdGUubm93KCkgKyAoMTUwMDAwICogNjApIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxsZXJJZDpcIjFcIixcbiAgICAgICAgICAgIHByb2R1Y3R0aXRsZTpcInNvbWUgaXRlbVwiLCAgICBcbiAgICAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbjpcIlNvbWUgT3RoZXIgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHByaWNlOlwiMTAwLjAwXCIsXG4gICAgICAgICAgICBwcmRDYXQ6MCxcbiAgICAgICAgICAgIHByb2RJbWcgOiBbXCIyXCJdLFxuICAgICAgICAgICAgY3JlYXRlZEF0Om5ldyBEYXRlKCksXG4gICAgICAgICAgICBleHBpcmVBdCA6IERhdGUubm93KCkgKyAoMTUwMDAwICogNjApIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxsZXJJZDpcIjFcIixcbiAgICAgICAgICAgIHByb2R1Y3R0aXRsZTpcInNvbWUgaXRlbVwiLFxuICAgICAgICAgICAgcHJvZHVjdERlc2NyaXB0aW9uOlwiU29tZSBOZXcgZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHByaWNlOlwiMTAwLjAwXCIsXG4gICAgICAgICAgICBwcmRDYXQ6MCxcbiAgICAgICAgICAgIHByb2RJbWcgOiBbIFwiM1wiXSxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDpuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgZXhwaXJlQXQgOiBEYXRlLm5vdygpICsgKDE1MDAwMCAqIDYwKSBcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgcHJvZERhdGEuZm9yRWFjaChwcm9kID0+IFByb2R1Y3RzLmluc2VydChwcm9kKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3RzIERhdGEgUG9zdCBJbnNlcnQgQ2hlY2sgOiBcIiArIFByb2R1Y3RzLmZpbmQoKS5jb3VudCgpICkgO1xuXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxsZXJlcyBEYXRhIENoZWNrIDogXCIgKyBTZWxsZXJzLmZpbmQoKS5jb3VudCgpICkgOyAgIFxuICAgIFxuICAgICAgICBpZiAoU2VsbGVycy5maW5kKCkuY291bnQoKSA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgU2VsbGVycy5pbnNlcnQoe19pZDpcIjFcIixcbiAgICAgICAgICAgICAgYnVzQ2F0OlwiRWxlY3Ryb25pY1wiLFxuICAgICAgICAgICAgYnVzaW5lc3NuYW1lOlwiVGVzdCBCdXNpbmVzc1wiLCAgICAgICAgIFxuICAgICAgICAgICAgYnVzaW5lc3NhZzpcInRhZyBsaW5lXCIsXG4gICAgICAgICAgICBhZGQxOlwiQWRkcmVzcyAxXCIsXG4gICAgICAgICAgICBhZGQyOlwiQWRkcmVzcyAyXCIsXG4gICAgICAgICAgICBhZGQzOlwiQWRkcmVzcyAzXCIsXG4gICAgICAgICAgICBhZGQ0OlwiQWRkcmVzcyA0XCIsXG4gICAgICAgICAgICBvZmZpY2U6XCIwMTE4NTc0NTYzXCIsXG4gICAgICAgICAgICBjZWxsOlwiMDExODU3NDU2M1wiLFxuICAgICAgICAgICAgZW1haWw6XCIwMTE4NTc0NTYzXCIsXG4gICAgICAgICAgICBjb250YWN0MTpcImJvYlwiLFxuICAgICAgICAgICAgY29udGFjdDI6XCJyaWNrXCIsIFxuICAgICAgICAgICAgdXJsOlwid3d3LnNvbWVzaXRlLmNvbVwiLFxuICAgICAgICAgICAgbG9nb0ltZzpcImh0dHA6Ly9jb29sZGlnaXRhbC5waG90b2dyYXBoeS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMi9EZXRhaWxzLW9mLWEtTWFyaWdvbGQtQmxvc3NvbS02MjB4NDA0LmpwZ1wiLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGxlcnMgRGF0YSBQb3N0IEluc2VydCBDaGVjayA6IFwiICsgU2VsbGVycy5maW5kKCkuY291bnQoKSApIDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKEltYWdlcy5maW5kKCkuY291bnQgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICBJbWFnZXMuaW5zZXJ0KHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXCJvcmlnaW5hbFwiIDoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCIyNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICAgIFwidXBkYXRlZEF0XCIgOiBJU09EYXRlKFwiMjAxNC0wNy0xOFQxMTo1MTo1OC4wMDBaXCIpLFxuICAgICAgICAgICAgICAgIFwic2l6ZVwiIDogMTg3NDU4MixcbiAgICAgICAgICAgICAgICBcInR5cGVcIiA6IFwiaW1hZ2UvanBlZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZWxsZXJJZFwiIDogXCIxXCIsXG4gICAgICAgICAgICBcIkltYWdlQ2F0XCIgOiBcIlByb2R1Y3RJbWFnZVwiLFxuICAgICAgICAgICAgXCJJbWFnZVR5cGVcIiA6IFwiUHJvZHVjdERpc3BsYXlcIixcbiAgICAgICAgICAgIFwiSW1hZ2VJZFwiIDogXCIxXCIsXG4gICAgICAgICAgICBcInVwbG9hZGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1LjkzN1pcIiksXG4gICAgICAgICAgICBcImNvcGllc1wiIDoge1xuICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCIyNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIiA6IFwiaW1hZ2UvanBlZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIiA6IDE4NzQ1ODIsXG4gICAgICAgICAgICAgICAgICAgIFwia2V5XCIgOiBcImltYWdlcy1hYUV2cWpuNDhFcVdEVHU1Yy0yNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZWRBdFwiIDogSVNPRGF0ZShcIjIwMTctMTItMjVUMTU6MTc6MjUuOTY4WlwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1Ljk2OFpcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBJbWFnZXMuaW5zZXJ0KHtcbiAgICAgICAgICBcbiAgICAgICAgICBcIm9yaWdpbmFsXCIgOiB7XG4gICAgICAgICAgICAgIFwibmFtZVwiIDogXCIyNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICBcInVwZGF0ZWRBdFwiIDogSVNPRGF0ZShcIjIwMTQtMDctMThUMTE6NTE6NTguMDAwWlwiKSxcbiAgICAgICAgICAgICAgXCJzaXplXCIgOiAxODc0NTgyLFxuICAgICAgICAgICAgICBcInR5cGVcIiA6IFwiaW1hZ2UvanBlZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbGxlcklkXCIgOiBcIjFcIixcbiAgICAgICAgICBcIkltYWdlQ2F0XCIgOiBcIlByb2R1Y3RJbWFnZVwiLFxuICAgICAgICAgIFwiSW1hZ2VUeXBlXCIgOiBcIlByb2R1Y3REaXNwbGF5XCIsXG4gICAgICAgICAgXCJJbWFnZUlkXCIgOiBcIjJcIixcbiAgICAgICAgICBcInVwbG9hZGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1LjkzN1pcIiksXG4gICAgICAgICAgXCJjb3BpZXNcIiA6IHtcbiAgICAgICAgICAgICAgXCJpbWFnZXNcIiA6IHtcbiAgICAgICAgICAgICAgICAgIFwibmFtZVwiIDogXCIyNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImltYWdlL2pwZWdcIixcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiIDogMTg3NDU4MixcbiAgICAgICAgICAgICAgICAgIFwia2V5XCIgOiBcImltYWdlcy1hYUV2cWpuNDhFcVdEVHU1Yy0yNDk0NDItMzYwMHgyMzk1LmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1Ljk2OFpcIiksXG4gICAgICAgICAgICAgICAgICBcImNyZWF0ZWRBdFwiIDogSVNPRGF0ZShcIjIwMTctMTItMjVUMTU6MTc6MjUuOTY4WlwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBJbWFnZXMuaW5zZXJ0KHtcbiAgICAgICBcbiAgICAgICAgXCJvcmlnaW5hbFwiIDoge1xuICAgICAgICAgICAgXCJuYW1lXCIgOiBcIjI0OTQ0Mi0zNjAweDIzOTUuanBnXCIsXG4gICAgICAgICAgICBcInVwZGF0ZWRBdFwiIDogSVNPRGF0ZShcIjIwMTQtMDctMThUMTE6NTE6NTguMDAwWlwiKSxcbiAgICAgICAgICAgIFwic2l6ZVwiIDogMTg3NDU4MixcbiAgICAgICAgICAgIFwidHlwZVwiIDogXCJpbWFnZS9qcGVnXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWxsZXJJZFwiIDogXCIxXCIsXG4gICAgICAgIFwiSW1hZ2VDYXRcIiA6IFwiUHJvZHVjdEltYWdlXCIsXG4gICAgICAgIFwiSW1hZ2VUeXBlXCIgOiBcIlByb2R1Y3REaXNwbGF5XCIsXG4gICAgICAgIFwiSW1hZ2VJZFwiIDogXCIzXCIsXG4gICAgICAgIFwidXBsb2FkZWRBdFwiIDogSVNPRGF0ZShcIjIwMTctMTItMjVUMTU6MTc6MjUuOTM3WlwiKSxcbiAgICAgICAgXCJjb3BpZXNcIiA6IHtcbiAgICAgICAgICAgIFwiaW1hZ2VzXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCIgOiBcIjI0OTQ0Mi0zNjAweDIzOTUuanBnXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBcImltYWdlL2pwZWdcIixcbiAgICAgICAgICAgICAgICBcInNpemVcIiA6IDE4NzQ1ODIsXG4gICAgICAgICAgICAgICAgXCJrZXlcIiA6IFwiaW1hZ2VzLWFhRXZxam40OEVxV0RUdTVjLTI0OTQ0Mi0zNjAweDIzOTUuanBnXCIsXG4gICAgICAgICAgICAgICAgXCJ1cGRhdGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1Ljk2OFpcIiksXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkQXRcIiA6IElTT0RhdGUoXCIyMDE3LTEyLTI1VDE1OjE3OjI1Ljk2OFpcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIkZpeHR1cmVzIERvbmVcIik7XG4gICAgIFxuICAgICAgXG4gICAgfVxufSkiLCJBY3Rpdml0aWVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FjdGl2aXRpZXMnKTtcblxuQWN0aXZpdGllcy5hbGxvdyh7XG4gIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBkb2MpIHtcbiAgICByZXR1cm4gZG9jLnVzZXJJZCA9PT0gdXNlcklkO1xuICB9XG59KTtcblxuQWN0aXZpdGllcy5sYXRlc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7fSwge3NvcnQ6IHtkYXRlOiAtMX0sIGxpbWl0OiAxfSk7XG59XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgY3JlYXRlQWN0aXZpdHk6IGZ1bmN0aW9uKGFjdGl2aXR5LCB0d2VldCwgbG9jKSB7XG4gICAgY2hlY2soTWV0ZW9yLnVzZXJJZCgpLCBTdHJpbmcpO1xuICAgIGNoZWNrKGFjdGl2aXR5LCB7XG4gICAgICByZWNpcGVOYW1lOiBTdHJpbmcsXG4gICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICBpbWFnZTogU3RyaW5nXG4gICAgfSk7XG4gICAgY2hlY2sodHdlZXQsIEJvb2xlYW4pO1xuICAgIGNoZWNrKGxvYywgTWF0Y2guT25lT2YoT2JqZWN0LCBudWxsKSk7XG4gICAgXG4gICAgYWN0aXZpdHkudXNlcklkID0gTWV0ZW9yLnVzZXJJZCgpO1xuICAgIGFjdGl2aXR5LnVzZXJBdmF0YXIgPSBNZXRlb3IudXNlcigpLnNlcnZpY2VzLnR3aXR0ZXIucHJvZmlsZV9pbWFnZV91cmxfaHR0cHM7XG4gICAgYWN0aXZpdHkudXNlck5hbWUgPSBNZXRlb3IudXNlcigpLnByb2ZpbGUubmFtZTtcbiAgICBhY3Rpdml0eS5kYXRlID0gbmV3IERhdGU7XG4gICAgXG4gICAgaWYgKCEgdGhpcy5pc1NpbXVsYXRpb24gJiYgbG9jKVxuICAgICAgYWN0aXZpdHkucGxhY2UgPSBnZXRMb2NhdGlvblBsYWNlKGxvYyk7XG4gICAgXG4gICAgdmFyIGlkID0gQWN0aXZpdGllcy5pbnNlcnQoYWN0aXZpdHkpO1xuICAgIFxuICAgIGlmICghIHRoaXMuaXNTaW11bGF0aW9uICYmIHR3ZWV0KVxuICAgICAgdHdlZXRBY3Rpdml0eShhY3Rpdml0eSk7XG4gICAgXG4gICAgcmV0dXJuIGlkO1xuICB9XG59KTtcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICB2YXIgdHdpdHRlck9hdXRoID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSBNZXRlb3Iuc2V0dGluZ3MudHdpdHRlclxuICAgIHZhciB1c2VyQ29uZmlnID0gTWV0ZW9yLnVzZXIoKS5zZXJ2aWNlcy50d2l0dGVyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnN1bWVyX2tleTogY29uZmlnLmNvbnN1bWVyS2V5LFxuICAgICAgY29uc3VtZXJfc2VjcmV0OiBjb25maWcuc2VjcmV0LFxuICAgICAgdG9rZW46IHVzZXJDb25maWcuYWNjZXNzVG9rZW4sXG4gICAgICB0b2tlbl9zZWNyZXQ6IHVzZXJDb25maWcuYWNjZXNzVG9rZW5TZWNyZXRcbiAgICB9O1xuICB9XG4gIFxuICB2YXIgdHdlZXRBY3Rpdml0eSA9IGZ1bmN0aW9uKGFjdGl2aXR5KSB7XG4gICAgLy8gY3JlYXRlcyB0aGUgdHdlZXQgdGV4dCwgb3B0aW9uYWxseSB0cnVuY2F0aW5nIHRvIGZpdCB0aGUgYXBwZW5kZWQgdGV4dFxuICAgIGZ1bmN0aW9uIGFwcGVuZFR3ZWV0KHRleHQsIGFwcGVuZCkge1xuICAgICAgdmFyIE1BWCA9IDExNzsgLy8gTWF4IHNpemUgb2YgdHdlZXQgd2l0aCBpbWFnZSBhdHRhY2hlZFxuICAgICAgXG4gICAgICBpZiAoKHRleHQgKyBhcHBlbmQpLmxlbmd0aCA+IE1BWClcbiAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIChNQVggLSBhcHBlbmQubGVuZ3RoIC0gMykpICsgJy4uLicgKyBhcHBlbmQ7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiB0ZXh0ICsgYXBwZW5kO1xuICAgIH1cbiAgICBcbiAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIHRoZSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgYml0IG9mZiB0aGUgZGF0YSB1cmxcbiAgICB2YXIgaW1hZ2UgPSBhY3Rpdml0eS5pbWFnZS5yZXBsYWNlKC9eZGF0YS4qYmFzZTY0LC8sICcnKTtcblxuICAgIHZhciByZXNwb25zZSA9IEhUVFAucG9zdChcbiAgICAgICdodHRwczovL3VwbG9hZC50d2l0dGVyLmNvbS8xLjEvbWVkaWEvdXBsb2FkLmpzb24nLCB7XG4gICAgICAgIHBhcmFtczogeyBtZWRpYTogaW1hZ2UgfSxcbiAgICAgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHsgb2F1dGg6IHR3aXR0ZXJPYXV0aCgpIH1cbiAgICAgIH1cbiAgICApO1xuICAgIFxuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApXG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgJ1VuYWJsZSB0byBwb3N0IGltYWdlIHRvIHR3aXR0ZXInKTtcblxuICAgIGlmICghIHJlc3BvbnNlLmRhdGEpXG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgJ0RpZCBub3QgcmVjZWl2ZSBhdHRhY2htZW50IGZyb20gdHdpdHRlcicpO1xuXG4gICAgdmFyIGF0dGFjaG1lbnQgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgcmVzcG9uc2UgPSBIVFRQLnBvc3QoXG4gICAgICAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VwZGF0ZS5qc29uJywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzdGF0dXM6IGFwcGVuZFR3ZWV0KGFjdGl2aXR5LnRleHQsICcgI2xvY2FsbWFya2V0JyksXG4gICAgICAgICAgbWVkaWFfaWRzOiBhdHRhY2htZW50Lm1lZGlhX2lkX3N0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBucG1SZXF1ZXN0T3B0aW9uczogeyBvYXV0aDogdHdpdHRlck9hdXRoKCkgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKVxuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsICdVbmFibGUgdG8gY3JlYXRlIHR3ZWV0Jyk7XG4gIH1cbiAgXG4gIHZhciBnZXRMb2NhdGlvblBsYWNlID0gZnVuY3Rpb24obG9jKSB7XG4gICAgdmFyIHVybCA9ICdodHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvZ2VvL3JldmVyc2VfZ2VvY29kZS5qc29uJ1xuICAgICAgKyAnP2dyYW51bGFyaXR5PW5laWdoYm9yaG9vZCdcbiAgICAgICsgJyZtYXhfcmVzdWx0cz0xJ1xuICAgICAgKyAnJmFjY3VyYWN5PScgKyBsb2MuY29vcmRzLmFjY3VyYWN5XG4gICAgICArICcmbGF0PScgKyBsb2MuY29vcmRzLmxhdGl0dWRlXG4gICAgICArICcmbG9uZz0nICsgbG9jLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgXG4gICAgdmFyIHJlc3BvbnNlID0gSFRUUC5nZXQodXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtucG1SZXF1ZXN0T3B0aW9uczogeyBvYXV0aDogdHdpdHRlck9hdXRoKCkgfSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgdmFyIHBsYWNlID0gXy5maW5kKHJlc3BvbnNlLmRhdGEucmVzdWx0LnBsYWNlcywgZnVuY3Rpb24ocGxhY2UpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlLnBsYWNlX3R5cGUgPT09ICduZWlnaGJvcmhvb2QnO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiBwbGFjZSAmJiBwbGFjZS5mdWxsX25hbWU7XG4gICAgfVxuICB9XG59XG5cbi8vIEluaXRpYWxpemUgYSBzZWVkIGFjdGl2aXR5XG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcbiAgaWYgKE1ldGVvci5pc1NlcnZlciAmJiBBY3Rpdml0aWVzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gICAgQWN0aXZpdGllcy5pbnNlcnQoe1xuICAgICAgcmVjaXBlTmFtZTogJ3N1bW1lci1hcHJpY290cy1ob25leS1wYW5uYS1jb3R0YScsXG4gICAgICB0ZXh0OiAnSSBzdWJzdGl0dXRlZCBzdHJhd2JlcnJpZXMgZm9yIGFwcmljb3RzIC0gaW5jcmVkaWJsZSEnLFxuICAgICAgaW1hZ2U6ICcvaW1nL2FjdGl2aXR5L2FjdGl2aXR5LXBsYWNlaG9sZGVyLXN0cmF3YmVycnktNjQweDY0MC5qcGcnLFxuICAgICAgdXNlckF2YXRhcjogJ2h0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjA0NzY4P3Y9MiZzPTQwMCcsXG4gICAgICB1c2VyTmFtZTogJ01hdHQgRGViZXJnYWxpcycsXG4gICAgICBwbGFjZTogJ1NvTUEsIFNhbiBGcmFuY2lzY28nLFxuICAgICAgZGF0ZTogbmV3IERhdGVcbiAgICB9KTtcbiAgfVxufSk7XG5cbiIsIkJvb2ttYXJrQ291bnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2Jvb2ttYXJrQ291bnRzJyk7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ2Jvb2ttYXJrUmVjaXBlJzogZnVuY3Rpb24ocmVjaXBlTmFtZSkge1xuICAgIGNoZWNrKHRoaXMudXNlcklkLCBTdHJpbmcpO1xuICAgIGNoZWNrKHJlY2lwZU5hbWUsIFN0cmluZyk7XG5cbiAgICB2YXIgYWZmZWN0ZWQgPSBNZXRlb3IudXNlcnMudXBkYXRlKHtcbiAgICAgIF9pZDogdGhpcy51c2VySWQsXG4gICAgICBib29rbWFya2VkUmVjaXBlTmFtZXM6IHskbmU6IHJlY2lwZU5hbWV9XG4gICAgfSwge1xuICAgICAgJGFkZFRvU2V0OiB7Ym9va21hcmtlZFJlY2lwZU5hbWVzOiByZWNpcGVOYW1lfVxuICAgIH0pO1xuXG4gICAgaWYgKGFmZmVjdGVkKVxuICAgICAgQm9va21hcmtDb3VudHMudXBkYXRlKHtyZWNpcGVOYW1lOiByZWNpcGVOYW1lfSwgeyRpbmM6IHtjb3VudDogMX19KTtcbiAgfSxcblxuICAndW5ib29rbWFya1JlY2lwZSc6IGZ1bmN0aW9uKHJlY2lwZU5hbWUpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhyZWNpcGVOYW1lLCBTdHJpbmcpO1xuXG4gICAgdmFyIGFmZmVjdGVkID0gTWV0ZW9yLnVzZXJzLnVwZGF0ZSh7XG4gICAgICBfaWQ6IHRoaXMudXNlcklkLFxuICAgICAgYm9va21hcmtlZFJlY2lwZU5hbWVzOiByZWNpcGVOYW1lXG4gICAgfSwge1xuICAgICAgJHB1bGw6IHtib29rbWFya2VkUmVjaXBlTmFtZXM6IHJlY2lwZU5hbWV9XG4gICAgfSk7XG5cbiAgICBpZiAoYWZmZWN0ZWQpXG4gICAgICBCb29rbWFya0NvdW50cy51cGRhdGUoe3JlY2lwZU5hbWU6IHJlY2lwZU5hbWV9LCB7JGluYzoge2NvdW50OiAtMX19KTtcbiAgfVxufSk7XG5cbi8vIEluaXRpYWxpemUgYm9va21hcmsgY291bnRzLiBXZSBjb3VsZCB1c2UgdXBzZXJ0IGluc3RlYWQuXG5pZiAoTWV0ZW9yLmlzU2VydmVyICYmIEJvb2ttYXJrQ291bnRzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG4gIE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuICAgIF8uZWFjaChSZWNpcGVzRGF0YSwgZnVuY3Rpb24ocmVjaXBlLCByZWNpcGVOYW1lKSB7XG4gICAgICBCb29rbWFya0NvdW50cy5pbnNlcnQoe3JlY2lwZU5hbWU6IHJlY2lwZU5hbWUsIGNvdW50OiAwfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsIi8vaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuXG5cbiBcblxuXG4vLyBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdzYXZlSW1hZ2VGaWxlJyxmdW5jdGlvbihmYmluYXJ5RGF0YSxmaWxlbmFtZSlcbi8vIHtcbi8vICAgLy9pbXBvcnQge0ZpbGVzQ29sbGVjdGlvbn0gZnJvbSAnbWV0ZW9yL29zdHJpbzpmaWxlcyc7XG4vLyAgIC8vdmFyIGZzID0gcmVxdWlyZSgnbWV0ZW9yL29zdHJpbzpmaWxlcycpO1xuLy8gICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4vLyAgIHZhciAgYmFzZTY0SW1hZ2UgPSBmYmluYXJ5RGF0YS5zcGxpdChcIixcIilbMV07XG4vLyAgIHZhciBiaW5hcnlEYXRhID0gbmV3ICBCdWZmZXIoYmFzZTY0SW1hZ2UsJ2Jhc2U2NCcpLnRvU3RyaW5nKCdiaW5hcnknKSA7XG4vLyAgIC8vdmFyIGZpbGVuYW1lID0gXCIvaW1nL1wiICsgc2VsbGVySWQrXCJfXCIgKyBSYW5kb20uaWQoKSArXCIuanBnXCI7XG4vLyAgIC8vcHJvZHVjdEltYWdlID0gZmlsZW5hbWU7XG4vLyAgIHZhciAgaW1hZ2VQYXRoID0gTWV0ZW9yLnNldHRpbmdzLnByb2R1Y3RzLmltZ1BhdGg7XG4vLyAgIGNvbnNvbGUubG9nKGltYWdlUGF0aCk7XG4vLyAgIHRyeVxuLy8gICB7XG4vLyAgIHJlcXVpcmUoXCJmc1wiKS53cml0ZUZpbGUoaW1hZ2VQYXRoICsgZmlsZW5hbWUgLGJpbmFyeURhdGEsIFwiYmluYXJ5XCIsIGZ1bmN0aW9uKGVycikge1xuLy8gICAgICAgICBpZiAoZXJyKVxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpOyAvLyB3cml0ZXMgb3V0IGZpbGUgd2l0aG91dCBlcnJvciwgYnV0IGl0J3Mgbm90IGEgdmFsaWQgaW1hZ2Vcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9KTtcbi8vICAgICB9XG4vLyAgICAgY2F0Y2goZXhwKVxuLy8gICAgIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpZW50IHNpZGUgRmlsZSBTYXZlIHRvIHNlcnZlci4uLlwiICsgaW1hZ2VQYXRoICsgZmlsZW5hbWUpO1xuLy8gICAgICAgcmVzdWx0ID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4gIFxuLy8gfSk7XG5cbkhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ1VJTG9nZ2VyJyxmdW5jdGlvbihzb3VyY2Usb2JqKVxue1xuICBjb25zb2xlLmxvZyhcIlVJIExvZ2dlciA6IFwiICsgc291cmNlKTtcbiAgY29uc29sZS5sb2coXCJPYmplY3QgOiBcIisgb2JqKTtcbn0pO1xuXG5mdW5jdGlvbiBuZXdSYW5kb21JZChwcmVmaXhTdHIpXG57XG4gIHZhciBybmQgPSBwcmVmaXhTdHIgKyBcIl9cIiArIHJlcXVpcmUoXCJtZXRlb3IvcmFuZG9tXCIpLmlkKCk7XG4gIHJldHVybiBybmQ7XG59XG5cbi8vIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJnZXRSZWZlcmVuY2VEYXRhXCIsZnVuY3Rpb24ocmVmbmFtZSl7XG4vLyAgIGNvbnNvbGUubG9nKFwicmVmZXJlbmNlIGRhdGEgbG9hZCB0byBjYWNoZVwiKTtcbi8vICAgdmFyIHJlc3VsdCA9IE1ldGVvci5hcHBseSgnZ2V0UmVmZXJlbmNlRGF0YScsW3JlZm5hbWVdLHsgd2FpdDp0cnVlLHJldHVyblN0dWJWYWx1ZTogZmFsc2UgfSk7XG4vLyB9KTtcblxuZnVuY3Rpb24ganNXcml0ZUZpbGUoZmJpbmFyeURhdGEsZmlsZW5hbWUpXG57XG4gIHZhciAgcmVzdWx0ID0gZmFsc2U7XG4gIHRyeSBcbiAge1xuICAgIC8vaW1wb3J0IHtGaWxlc0NvbGxlY3Rpb259IGZyb20gJ21ldGVvci9vc3RyaW86ZmlsZXMnO1xuICAgLy92YXIgZnMgPSByZXF1aXJlKCdtZXRlb3Ivb3N0cmlvOmZpbGVzJyk7XG4gICAvLyBnbG9iYWwuQnVmZmVyID0gZ2xvYmFsLkJ1ZmZlciB8fCBOcG0ucmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXI7XG4gICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgIHZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuICAgdmFyICBiYXNlNjRJbWFnZSA9IGZiaW5hcnlEYXRhLnNwbGl0KFwiLFwiKVsxXTtcbiAgIHZhciBiaW5hcnlEYXRhID0gbmV3ICBCdWZmZXIoYmFzZTY0SW1hZ2UsJ2Jhc2U2NCcpLnRvU3RyaW5nKCdiaW5hcnknKSA7XG4gICAvL3ZhciBmaWxlbmFtZSA9IFwiL2ltZy9cIiArIHNlbGxlcklkK1wiX1wiICsgUmFuZG9tLmlkKCkgK1wiLmpwZ1wiO1xuICAgLy9wcm9kdWN0SW1hZ2UgPSBmaWxlbmFtZTtcbiAgY29uc29sZS5sb2coXCJXcml0aW5nIGZpbGVcIik7XG4gICAgIHZhciBwYXRodG9GaWxlID0gIE1ldGVvci5yb290UGF0aDtcbiAgICB2YXIgc3RyUGF0aCA9IHBhdGh0b0ZpbGUuc3Vic3RyKDAscGF0aHRvRmlsZS5sZW5ndGggLSA3KTtcblxuICAgIFxuICAgICBcblxuICAgIFxuICAgdmFyICBpbWFnZVBhdGggPSBzdHJQYXRoICsgTWV0ZW9yLnNldHRpbmdzLnByb2R1Y3RzLmZpbGVTYXZlUGF0aDtcbiAgIGltYWdlUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5wcm9kdWN0cy5maWxlU2F2ZVBhdGg7XG4gICB2YXIgd3JpdGVGaWxlTmFtZSA9IGltYWdlUGF0aCArIGZpbGVuYW1lO1xuICBcbiAgIGNvbnNvbGUubG9nKHdyaXRlRmlsZU5hbWUpO1xuICAgdHJ5XG4gICB7XG4gICAvLyB2YXIgZmlsZVdyaXRlciA9IG5ldyB3cml0ZUZpbGUoKVxuICAgLy9yZXF1aXJlKFwiZnNcIikud3JpdGVGaWxlKGltYWdlUGF0aCArIGZpbGVuYW1lICxiaW5hcnlEYXRhLCBcImJpbmFyeVwiLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgIGlmICghZnMuZXhpc3RzKHdyaXRlRmlsZU5hbWUpKVxuICAgICAgICAgeyAgIFxuICAgICAgICAgZnMud3JpdGVGaWxlKGltYWdlUGF0aCArIGZpbGVuYW1lICxiaW5hcnlEYXRhLCBcImJpbmFyeVwiLCBmdW5jdGlvbihlcnIpIHtcblxuICAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpOyAvLyB3cml0ZXMgb3V0IGZpbGUgd2l0aG91dCBlcnJvciwgYnV0IGl0J3Mgbm90IGEgdmFsaWQgaW1hZ2VcbiAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgIH1cbiAgICAgY2F0Y2goZXhwKVxuICAgICB7XG4gICAgICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgc2lkZSBGaWxlIFNhdmUgdG8gc2VydmVyLi4uXCIgKyBpbWFnZVBhdGggKyBmaWxlbmFtZSk7XG4gICAgICAgY29uc29sZS5sb2coZXhwKTtcbiAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgfVxuICB9IFxuICBjYXRjaCAoZXJyb3IpIFxuICB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5NZXRlb3IubWV0aG9kcyh7IFxuICBzYXZlSW1hZ2VGaWxlOiBmdW5jdGlvbihmYmluYXJ5RGF0YSxmaWxlbmFtZSlcbiAge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ganNXcml0ZUZpbGUoZmJpbmFyeURhdGEsZmlsZW5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgLy8gIC8vaW1wb3J0IHtGaWxlc0NvbGxlY3Rpb259IGZyb20gJ21ldGVvci9vc3RyaW86ZmlsZXMnO1xuICAvLyAgLy92YXIgZnMgPSByZXF1aXJlKCdtZXRlb3Ivb3N0cmlvOmZpbGVzJyk7XG4gIC8vICAvLyBnbG9iYWwuQnVmZmVyID0gZ2xvYmFsLkJ1ZmZlciB8fCBOcG0ucmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXI7XG4gIC8vICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIC8vICAgdmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG4gIC8vICAgdmFyICBiYXNlNjRJbWFnZSA9IGZiaW5hcnlEYXRhLnNwbGl0KFwiLFwiKVsxXTtcbiAgLy8gICB2YXIgYmluYXJ5RGF0YSA9IG5ldyAgQnVmZmVyKGJhc2U2NEltYWdlLCdiYXNlNjQnKS50b1N0cmluZygnYmluYXJ5JykgO1xuICAvLyAgIC8vdmFyIGZpbGVuYW1lID0gXCIvaW1nL1wiICsgc2VsbGVySWQrXCJfXCIgKyBSYW5kb20uaWQoKSArXCIuanBnXCI7XG4gIC8vICAgLy9wcm9kdWN0SW1hZ2UgPSBmaWxlbmFtZTtcbiAgLy8gICB2YXIgIGltYWdlUGF0aCA9IE1ldGVvci5zZXR0aW5ncy5wcm9kdWN0cy5maWxlU2F2ZVBhdGg7XG4gIC8vICAgdmFyIHdyaXRlRmlsZU5hbWUgPSBpbWFnZVBhdGggKyBmaWxlbmFtZTtcbiAgIFxuICAvLyAgIGNvbnNvbGUubG9nKHdyaXRlRmlsZU5hbWUpO1xuICAvLyAgIHRyeVxuICAvLyAgIHtcbiAgLy8gICAvLyB2YXIgZmlsZVdyaXRlciA9IG5ldyB3cml0ZUZpbGUoKVxuICAvLyAgIC8vcmVxdWlyZShcImZzXCIpLndyaXRlRmlsZShpbWFnZVBhdGggKyBmaWxlbmFtZSAsYmluYXJ5RGF0YSwgXCJiaW5hcnlcIiwgZnVuY3Rpb24oZXJyKSB7XG4gIC8vICAgICAgICAgaWYgKCFmcy5leGlzdHMod3JpdGVGaWxlTmFtZSkpXG4gIC8vICAgICAgICAgeyAgIFxuICAvLyAgICAgICAgIGZzLndyaXRlRmlsZShpbWFnZVBhdGggKyBmaWxlbmFtZSAsYmluYXJ5RGF0YSwgXCJiaW5hcnlcIiwgZnVuY3Rpb24oZXJyKSB7XG5cbiAgLy8gICAgICAgICAgICAgaWYgKGVycilcbiAgLy8gICAgICAgICAgICAge1xuICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTsgLy8gd3JpdGVzIG91dCBmaWxlIHdpdGhvdXQgZXJyb3IsIGJ1dCBpdCdzIG5vdCBhIHZhbGlkIGltYWdlXG4gIC8vICAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgLy8gICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICBlbHNlXG4gIC8vICAgICAgICAgICAgIHtcbiAgLy8gICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICB9KTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgICBjYXRjaChleHApXG4gIC8vICAgICB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHNpZGUgRmlsZSBTYXZlIHRvIHNlcnZlci4uLlwiICsgaW1hZ2VQYXRoICsgZmlsZW5hbWUpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhleHApO1xuICAvLyAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gICAgXG4gIH0sXG4gIGdldFJlZmVyZW5jZURhdGE6ZnVuY3Rpb24ocmVmTmFtZSlcbiAge1xuXG4gICAgc3dpdGNoKHJlZk5hbWUpIFxuICAgICAge1xuICAgICAgICBjYXNlIFwiYnVzaW5lc3NDYXRcIjpcbiAgICAgICAgICAgIHJldHVybiBSZWZlcmVuY2VEYXRhLmZpbmQoe25hbWU6YnVzQ2F0fSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInByb2R1Y3RDYXRcIjpcbiAgICAgICAgcmV0dXJuIFJlZmVyZW5jZURhdGEuZmluZCh7bmFtZTpwcmRDYXR9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidGltZUNhdFwiOlxuICAgICAgICByZXR1cm4gUmVmZXJlbmNlRGF0YS5maW5kKHtuYW1lOmFkZFRpbWV9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICBcbiAgICBcbiAgfVxufSk7XG4vLyBmdW5jdGlvbiBfc2F2ZUltYWdlRmlsZSgpXG4vLyB7XG4vLyAgIHZhciByZXN1bHQgPSBmYWxzZTtcbi8vICAgdmFyICBiYXNlNjRJbWFnZSA9IGZiaW5hcnlEYXRhLnNwbGl0KFwiLFwiKVsxXTtcbi8vICAgdmFyIGJpbmFyeURhdGEgPSBuZXcgIEJ1ZmZlcihiYXNlNjRJbWFnZSwnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpIDtcbi8vICAgLy92YXIgZmlsZW5hbWUgPSBcIi9pbWcvXCIgKyBzZWxsZXJJZCtcIl9cIiArIFJhbmRvbS5pZCgpICtcIi5qcGdcIjtcbi8vICAgLy9wcm9kdWN0SW1hZ2UgPSBmaWxlbmFtZTtcbi8vICAgdmFyICBpbWFnZVBhdGggPSBNZXRlb3Iuc2V0dGluZ3MucHJvZHVjdC5maWxlUGF0aDtcbi8vICAgdHJ5XG4vLyAgIHtcbi8vICAgcmVxdWlyZShcImZzXCIpLndyaXRlRmlsZShpbWFnZVBhdGggKyBmaWxlbmFtZSAsYmluYXJ5RGF0YSwgXCJiaW5hcnlcIiwgZnVuY3Rpb24oZXJyKSB7XG4vLyAgICAgICAgIGlmIChlcnIpXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7IC8vIHdyaXRlcyBvdXQgZmlsZSB3aXRob3V0IGVycm9yLCBidXQgaXQncyBub3QgYSB2YWxpZCBpbWFnZVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Vcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgIH1cbi8vICAgICBjYXRjaChleHApXG4vLyAgICAge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJDbGllbnQgc2lkZSBGaWxlIFNhdmUgdG8gc2VydmVyLi4uXCIgKyBmaWxlbmFtZSk7XG4vLyAgICAgICByZXN1bHQgPSBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vIH0iLCJjb25zb2xlLmxvZyhcIlNlcnZlciBjcmVhdGUgRlMgTWVkaWEgQ29sbGVjdGlvblwiKTtcblxuLy92YXIgaW1hZ2VTdG9yZSA9IG5ldyBGUy5TdG9yZS5HcmlkRlMoXCJpbWFnZXNcIiwge1xuLy9tb25nb1VybDogJ21vbmdvZGI6Ly8xMjcuMC4wLjE6MzAwMS9qdXN0YWRpdC8nLCAvLyBvcHRpb25hbCwgZGVmYXVsdHMgdG8gTWV0ZW9yJ3MgbG9jYWwgTW9uZ29EQlxuLy9tb25nb09wdGlvbnM6IHsuLi59LCAgLy8gb3B0aW9uYWwsIHNlZSBub3RlIGJlbG93XG4vL3RyYW5zZm9ybVdyaXRlOiBteVRyYW5zZm9ybVdyaXRlRnVuY3Rpb24sIC8vb3B0aW9uYWxcbi8vdHJhbnNmb3JtUmVhZDogbXlUcmFuc2Zvcm1SZWFkRnVuY3Rpb24sIC8vb3B0aW9uYWxcbi8vbWF4VHJpZXM6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IDVcbi8vY2h1bmtTaXplOiAxMDI0KjEwMjQgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IEdyaWRGUyBjaHVuayBzaXplIGluIGJ5dGVzIChjYW4gYmUgb3ZlcnJpZGRlbiBwZXIgZmlsZSkuXG4vLyBEZWZhdWx0OiAyTUIuIFJlYXNvbmFibGUgcmFuZ2U6IDUxMktCIC0gNE1CXG4vLyAgfSk7XG52YXIgaW1hZ2VTdG9yZSA9IG5ldyBGUy5TdG9yZS5GaWxlU3lzdGVtKFwiaW1hZ2VzXCIsIHtcbiAgICBwYXRoOiBcIi92YXIvd3d3L2p1c3RhZGl0aW1hZ2VzL1wiLCAvL29wdGlvbmFsLCBkZWZhdWx0IGlzIFwiL2Nmcy9maWxlc1wiIHBhdGggd2l0aGluIGFwcCBjb250YWluZXJcbiAgICAvL3RyYW5zZm9ybVdyaXRlOiBmdW5jdGlvbihmaWxlT2JqLCByZWFkU3RyZWFtLCB3cml0ZVN0cmVhbSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiUmVzaXplIEltYWdlXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZpbGVPYmoubmFtZSgpICsgXCIgOiBcIiAgKyBmaWxlT2JqLnNpemUoKSk7XG4gICAgICAgIC8vIGlmIChmaWxlT2JqLnNpemUoKSA+IDUwMClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYgKGdtLmlzQXZhaWxhYmxlKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGdtKHJlYWRTdHJlYW0sIGZpbGVPYmoubmFtZSgpKS5yZXNpemUoJzUwMCcpLnN0cmVhbSgpLnBpcGUod3JpdGVTdHJlYW0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gR3JhcGhpY3NNYWdpY2sgSW5zdGFsbGVkLlwiKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgLy99LFxuICAgIGNodW5rU2l6ZTogMioxMDI0KjEwMjQgLSAxMDI0LCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgR3JpZEZTIGNodW5rIHNpemUgaW4gYnl0ZXMgKGNhbiBiZSBvdmVycmlkZGVuIHBlciBmaWxlKS5cbiAgICAvL0RlZmF1bHQ6IDJNQiwvLy4gUmVhc29uYWJsZSByYW5nZTogNTEyS0IgLSA0TUJcbiAgICAvL3RyYW5zZm9ybVdyaXRlOiBteVRyYW5zZm9ybVdyaXRlRnVuY3Rpb24sIC8vb3B0aW9uYWxcbiAgICAvL3RyYW5zZm9ybVJlYWQ6IG15VHJhbnNmb3JtUmVhZEZ1bmN0aW9uLCAvL29wdGlvbmFsXG4gICAgbWF4VHJpZXM6IDIgLy9vcHRpb25hbCwgZGVmYXVsdCA1XG59KTtcbi8vICAgdmFyIHZpZGVvU3RvcmUgPSBuZXcgRlMuU3RvcmUuR3JpZEZTKFwidmlkZW9zXCIsIHtcbi8vICAgICAvL21vbmdvVXJsOiAnbW9uZ29kYjovLzEyNy4wLjAuMTozMDAxL2p1c3RhZGl0bWVkaWEvJywgLy8gb3B0aW9uYWwsIGRlZmF1bHRzIHRvIE1ldGVvcidzIGxvY2FsIE1vbmdvREJcbi8vICAgICAvL21vbmdvT3B0aW9uczogey4uLn0sICAvLyBvcHRpb25hbCwgc2VlIG5vdGUgYmVsb3dcbi8vICAgICAvL3RyYW5zZm9ybVdyaXRlOiBteVRyYW5zZm9ybVdyaXRlRnVuY3Rpb24sIC8vb3B0aW9uYWxcbi8vICAgICAvL3RyYW5zZm9ybVJlYWQ6IG15VHJhbnNmb3JtUmVhZEZ1bmN0aW9uLCAvL29wdGlvbmFsXG4vLyAgICAgLy9tYXhUcmllczogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgNVxuLy8gICAgIC8vY2h1bmtTaXplOiAxMDI0KjEwMjQgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IEdyaWRGUyBjaHVuayBzaXplIGluIGJ5dGVzIChjYW4gYmUgb3ZlcnJpZGRlbiBwZXIgZmlsZSkuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmF1bHQ6IDJNQi4gUmVhc29uYWJsZSByYW5nZTogNTEyS0IgLSA0TUJcbi8vICAgfSk7XG5cbkltYWdlcyA9IG5ldyBGUy5Db2xsZWN0aW9uKFwiaW1hZ2VzXCIsIHtcbiAgICBzdG9yZXM6IFtpbWFnZVN0b3JlXVxufSk7XG5cblxuLy8gVmlkZW9zID0gbmV3IEZTLkNvbGxlY3Rpb24oXCJ2aWRlb3NcIiwge1xuLy8gICBzdG9yZXM6IFt2aWRlb1N0b3JlXVxuLy8gLy8gfSk7XG5cblxuSW1hZ2VzLmFsbG93KHtcbiAgICBpbnNlcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBkb3dubG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59KTtcblxuLy8gVmlkZW9zLmFsbG93KHsgXG4vLyAgICAgaW5zZXJ0OiBmdW5jdGlvbigpIHsgXG4vLyAgICAgICAgIHJldHVybiB0cnVlOyBcbi8vICAgICB9LCBcbi8vICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkgeyBcbi8vICAgICAgICAgcmV0dXJuIHRydWU7IFxuLy8gICAgIH0sIFxuLy8gICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7IFxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTsgXG4vLyAgICAgfSBcbi8vIH0pO1xuXG5cbk1ldGVvci5tZXRob2RzKHtcbiAgICBnZXRQcm9kdWN0SW1hZ2VzOiBmdW5jdGlvbiAoSW1nSWQpIHtcbiBcbiAgICAgICAgLy8gdmFyIHJlc3VsdCA9IFByb2R1Y3RzLmZpbmQoe19pZDpwcm9kaWR9KTtcbiAgICAgICAgdmFyIHByb2RJbWFnZXMgPSBJbWFnZXMuZmluZCh7IEltYWdlSWQ6IEltZ0lkIH0pO1xuICAgICAgICB2YXIgcmV0dXJuSW1hZ2VzID0gW107XG4gICAgICAgIHByb2RJbWFnZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybkltYWdlcy5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAvL3ZhciBzZWxsID0gTWV0ZW9yLmFwcGx5KCdnZXRQcm9kdWN0U2VsbGVyJywgW3Byb2Quc2VsbGVySWRdLCB7IHJldHVyblN0dWJWYWx1ZTogdHJ1ZSB9KTtcbiAgICAgICAgLy9wcm9kLnNlbGxlciA9IHNlbGw7XG4gICAgICAgIHJldHVybiByZXR1cm5JbWFnZXM7XG5cbiAgICAgICAgLy9yZXR1cm4gTWV0ZW9yLk1vbmdvLlByb2R1Y3RzLmZpbmRPbmUoe19pZDpwcm9kaWR9KTtcbiAgICB9LFxufSk7IiwiTmV3cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCduZXdzJyk7XG5cbk5ld3MuYWxsb3coe1xuICBpbnNlcnQ6IGZ1bmN0aW9uKHVzZXJJZCkge1xuICAgIHZhciB1c2VyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUodXNlcklkKTtcbiAgICByZXR1cm4gdXNlciAmJiB1c2VyLmFkbWluO1xuICB9XG59KTtcblxuTmV3cy5sYXRlc3QgPSBmdW5jdGlvbigpIHtcblxuICAvL2h0dHA6Ly9mZWVkcy5uZXdzMjQuY29tL2FydGljbGVzL25ld3MyNC9Tb3V0aEFmcmljYS9yc3NcbiAgcmV0dXJuIE5ld3MuZmluZE9uZSh7fSwge3NvcnQ6IHtkYXRlOiAtMX0sIGxpbWl0OiAxfSk7XG59XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIgJiYgTmV3cy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICBNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcbiAgICBOZXdzLmluc2VydCh7XG4gICAgICB0ZXh0OiAnRmlyc3Qgb2YgdGhlIHNlYXNvbiBjaXRydXMgaGFzIGp1c3QgYXJyaXZlZC4gR2V0IHN1Y2N1bGVudCBvcmFuZ2VzIGFuZCB0YW5nZXJpbmVzIGluIG91ciBwcm9kdWNlIGFpc2xlIScsXG4gICAgICBkYXRlOiBuZXcgRGF0ZVxuICAgIH0pO1xuICB9KTtcbn0iLCJQcm9kdWN0ID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1Byb2R1Y3QnKTtcblxuUHJvZHVjdC5hbGxvdyh7XG4gICAgaW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIGRvYykge1xuICAgICAgcmV0dXJuIGRvYy51c2VySWQgPT09IHVzZXJJZDtcbiAgICB9XG4gIH0pO1xuICBcbiBcbiAgTWV0ZW9yLm1ldGhvZHMoe1xuICAgICdsYXRlc3RQcm9kdWN0JzpmdW5jdGlvbihpZCl7XG4gICAgIFxuICAgICAgcmV0dXJuIFByb2R1Y3QuZmluZCh7fSx7b3JkZXI6e2NyZWF0ZWRBdDotMX19KTtcbiAgICAgIC8vcmV0dXJuIHJlc3VsdFswXTtcbiAgICB9LFxuICAgICdRU2VhcmNoUHJvZHVjdCc6ZnVuY3Rpb24oaWQpe1xuICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hpbmdcIik7XG4gICAgICBNZXRlb3Iuc3Vic2NyaWJlKCdRU2VhcmNoJywgaWQpO1xuICAgICAgdmFyIHJlc3VsdHMgPSAgUHJvZHVjdHMuZmluZCh7fSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTsgXG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIFxuICAgIH0sXG4gICAgJ3Byb2R1Y3RzLmluc2VydCc6ZnVuY3Rpb24gKHByb2R1Y3RPYmopXG4gICAge1xuICAgICAgICAvL3ZhciBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuICAgICAgICB2YXIgbmV3UHJvZCA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvZHVjdE9iai5faWQgPT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3UHJvZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFByb2RJbWdzID0gW107XG4gICAgICB0cnkgXG4gICAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RPYmoucHJvZEltZyk7XG4gICAgICAgIC8vIGZvciAocEltZyBpbiBwcm9kdWN0T2JqLnByb2RJbWcpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBpZiAobmV3UHJvZClcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB2YXIgcmFuZElkID0gUmFuZG9tLmlkKCk7Ly8gcmVxdWlyZSgncmFuZG9tJyk7ICAgICBcbiAgICAgICAgLy8gICAgIHZhciBGaWxlTmFtZSA9IHByb2R1Y3RPYmoudXNlcklkICsgXCJfXCIgKyByYW5kSWQgICsgXCIuanBnXCI7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBQcm9kSW1ncy5wdXNoKEZpbGVOYW1lKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB2YXIgYnVzTG9nQ2FsbCA9IE1ldGVvci5hcHBseSgnc2F2ZUltYWdlRmlsZScsW3BJbWcsRmlsZU5hbWVdLHt3YWl0OnRydWV9KTsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGVsc2VcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICBpZiAoIWZzLmV4aXN0cyhwSW1nKSlcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgdmFyIHJhbmRJZCA9IFJhbmRvbS5pZCgpOy8vIHJlcXVpcmUoJ3JhbmRvbScpOyAgICAgXG4gICAgICAgIC8vICAgICAgIHZhciBGaWxlTmFtZSA9IHByb2R1Y3RPYmoudXNlcklkICsgXCJfXCIgKyByYW5kSWQgICsgXCIuanBnXCI7ICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAgIFByb2RJbWdzLnB1c2goRmlsZU5hbWUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgLy8gICAgICAgdmFyIGJ1c0xvZ0NhbGwgPSBNZXRlb3IuYXBwbHkoJ3NhdmVJbWFnZUZpbGUnLFtwSW1nLEZpbGVOYW1lXSx7d2FpdDp0cnVlfSk7IFxuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vICAgcHJvZHVjdE9iai5wcm9kSW1nID0gUHJvZEltZ3M7XG4gICAgICAgICAgdmFyIHByb2R1Y3RSZXN1bHQgPSBcbiAgICAgICAgICBQcm9kdWN0cy51cHNlcnQoe1xuICAgICAgICAgIC8vIFNlbGVjdG9yXG4gICAgICAgICAgX2lkOiBwcm9kdWN0T2JqLl9pZCBcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgLy8gTW9kaWZpZXJcbiAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICBzZWxsZXJJZCA6IHByb2R1Y3RPYmouc2VsbGVySWQsXG4gICAgICAgICAgICBwcm9kdWN0dGl0bGUgOiBwcm9kdWN0T2JqLnByb2R1Y3R0aXRsZSxcbiAgICAgICAgICAgIHByb2R1Y3REZXNjcmlwdGlvbiA6IHByb2R1Y3RPYmoucHJvZHVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpY2UgOiBwcm9kdWN0T2JqLnByaWNlLFxuICAgICAgICAgICAgcHJkQ2F0IDogcHJvZHVjdE9iai5wcmRDYXQsXG4gICAgICAgICAgICBwcm9kSW1nIDogcHJvZHVjdE9iai5wcm9kSW1nLFxuICAgICAgICAgICAgY3JlYXRlZEF0IDogcHJvZHVjdE9iai5jcmVhdGVkQXQsXG4gICAgICAgICAgICBleHBpcmVBdCA6IHByb2R1Y3RPYmouZXhwaXJlQXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIGNhdGNoIChleHApXG4gICAgICB7XG4gICAgICAgIHRocm93IGV4cDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4vKlxuXG5cbk1ldGVvci5tZXRob2RzKFxuICAgIFxuICAgIHtcbiAgJ3Byb2R1Y3RzLmluc2VydCcoc2VsbGVySWQscHJvZHVjdHRpdGxlLCBwcm9kdWN0RGVzY3JpcHRpb24gLCBwcmljZSxwcm9kQ2F0LGNyZWF0ZWRBdCxleHBpcmVBdCwgdXJsLHByb2RJbWcpIHtcblxuICAgIHZhciBQcm9kSW5zZXJ0ID0gUHJvZHVjdHMuaW5zZXJ0KHtcbiAgICAgIHNlbGxlcklkLCBcbiAgICAgIHByb2R1Y3R0aXRsZSxcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbiAsIFxuICAgICAgcHJpY2UsXG4gICAgICBwcm9kQ2F0LFxuICAgICAgY3JlYXRlZEF0LFxuICAgICAgZXhwaXJlQXQsXG4gICAgICB1cmwsXG4gICAgICBwcm9kSW1nXG4gICAgICBcbiAgfSk7XG4gIHJldHVybiBQcm9kSW5zZXJ0O1xuXG4gIFxufVxuXG5cblxuXG4gIFByb2R1Y3QuZ2V0UHJvZHVjdCA9IGZ1bmN0aW9uKHByb2RJZClcbiAge1xuICAgIHZhciByZXR1cm5Qcm9kdWN0IDtcbiAgICBjb25zb2xlLmxvZyhcIlNpbmdsZSBwcm9kdWN0IE1ldGVvciBDYWxsIG1ldGhvZFwiKTtcbiAgICB0cnlcbiAgICB7XG4gICAgICAgIE1ldGVvci5jYWxsKCdnZXRQcm9kdWN0JyxbIHByb2RJZF0sKGVycm9yLHJlc3VsdCk9PntcbiAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZXRlb3IgQ2FsbCB0byBnZXQgcHJvZHVjdCA6IFwiICsgcmVzdWx0KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm5Qcm9kdWN0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXCJQb3N0IE1ldGVvciBDYWxsIGFmdGVyIGFzc2lnbiBcIiArIHJldHVyblByb2R1Y3QpO1xuICAgIH1cbiAgICBjYXRjaChleHApXG4gICAge1xuICAgICAgdGhyb3cgZXhwO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuUHJvZHVjdDtcbiAgfVxuXG4gICAqL1xuXG4gIFByb2R1Y3QuTXlQcm9kdWN0cz0gZnVuY3Rpb24oc2VsbGVySWQpe1xuICAgICAgcmV0dXJuIFByb2R1Y3QuZmluZCh7U2VsbGVySUQ6c2VsbGVySWR9KTtcbiAgfVxuXG4gIFByb2R1Y3QubW9yZSA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvblZhbHVlKXtcbiAgICAgIC8vaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbW9uZ28tY3Vyc29yLXBhZ2luYXRpb25cbiAgICAgIC8vUHJvZHVjdC5maW5kKHt9LHtvcmRlcjp7Y3JlYXRlZEF0Oi0xfX0pO1xuICAgICAgcmV0dXJuIFByb2R1Y3QuZmluZCh7fSwge29yZGVyOiB7Y3JlYXRlZEF0OiAtMX19KTtcbiAgICBcbiAgfSBcblxuICAgXG4gIC8qXG4gIE1ldGVvci5tZXRob2RzKHtcbiAgICBjcmVhdGVBY3Rpdml0eTogZnVuY3Rpb24oYWN0aXZpdHksIHR3ZWV0LCBsb2MpIHtcbiAgICAgIE1ldGVvci51c2VySWQoKSwgU3RyaW5nLFxuICAgICAgYWN0aXZpdHksIHtcbiAgICAgICAgcmVjaXBlTmFtZTogU3RyaW5nLFxuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIGltYWdlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICB0d2VldCwgQm9vbGVhbixcbiAgICAgIGxvYywgTWF0Y2guT25lT2YoT2JqZWN0LCBudWxsKSxcbiAgICAgIFxuICAgICAgYWN0aXZpdHkudXNlcklkID0gTWV0ZW9yLnVzZXJJZCgsXG4gICAgICBhY3Rpdml0eS51c2VyQXZhdGFyID0gTWV0ZW9yLnVzZXIoKS5zZXJ2aWNlcy50d2l0dGVyLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgYWN0aXZpdHkudXNlck5hbWUgPSBNZXRlb3IudXNlcigpLnByb2ZpbGUubmFtZTtcbiAgICAgIGFjdGl2aXR5LmRhdGUgPSBuZXcgRGF0ZTtcbiAgICAgIFxuICAgICAgaWYgKCEgdGhpcy5pc1NpbXVsYXRpb24gJiYgbG9jKVxuICAgICAgICBhY3Rpdml0eS5wbGFjZSA9IGdldExvY2F0aW9uUGxhY2UobG9jLFxuICAgICAgXG4gICAgICB2YXIgaWQgPSBBY3Rpdml0aWVzLmluc2VydChhY3Rpdml0eSxcbiAgICAgIFxuICAgICAgaWYgKCEgdGhpcy5pc1NpbXVsYXRpb24gJiYgdHdlZXQpXG4gICAgICAgIHR3ZWV0QWN0aXZpdHkoYWN0aXZpdHksXG4gICAgICBcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH0sXG4gIFxuICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgdmFyIHR3aXR0ZXJPYXV0aCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBjb25maWcgPSBNZXRlb3Iuc2V0dGluZ3MudHdpdHRlclxuICAgICAgdmFyIHVzZXJDb25maWcgPSBNZXRlb3IudXNlcigpLnNlcnZpY2VzLnR3aXR0ZXI7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uc3VtZXJfa2V5OiBjb25maWcuY29uc3VtZXJLZXksXG4gICAgICAgIGNvbnN1bWVyX3NlY3JldDogY29uZmlnLnNlY3JldCxcbiAgICAgICAgdG9rZW46IHVzZXJDb25maWcuYWNjZXNzVG9rZW4sXG4gICAgICAgIHRva2VuX3NlY3JldDogdXNlckNvbmZpZy5hY2Nlc3NUb2tlblNlY3JldFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHR3ZWV0QWN0aXZpdHkgPSBmdW5jdGlvbihhY3Rpdml0eSkge1xuICAgICAgLy8gY3JlYXRlcyB0aGUgdHdlZXQgdGV4dCwgb3B0aW9uYWxseSB0cnVuY2F0aW5nIHRvIGZpdCB0aGUgYXBwZW5kZWQgdGV4dFxuICAgICAgZnVuY3Rpb24gYXBwZW5kVHdlZXQodGV4dCwgYXBwZW5kKSB7XG4gICAgICAgIHZhciBNQVggPSAxMTc7IC8vIE1heCBzaXplIG9mIHR3ZWV0IHdpdGggaW1hZ2UgYXR0YWNoZWRcbiAgICAgICAgXG4gICAgICAgIGlmICgodGV4dCArIGFwcGVuZCkubGVuZ3RoID4gTUFYKVxuICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAoTUFYIC0gYXBwZW5kLmxlbmd0aCAtIDMpKSArICcuLi4nICsgYXBwZW5kO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRleHQgKyBhcHBlbmQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIHdlIG5lZWQgdG8gc3RyaXAgdGhlIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiBiaXQgb2ZmIHRoZSBkYXRhIHVybFxuICAgICAgdmFyIGltYWdlID0gYWN0aXZpdHkuaW1hZ2UucmVwbGFjZSgvXmRhdGEuKmJhc2U2NCwvLCAnJyxcbiAgXG4gICAgICB2YXIgcmVzcG9uc2UgPSBIVFRQLnBvc3QoXG4gICAgICAgICdodHRwczovL3VwbG9hZC50d2l0dGVyLmNvbS8xLjEvbWVkaWEvdXBsb2FkLmpzb24nLCB7XG4gICAgICAgICAgcGFyYW1zOiB7IG1lZGlhOiBpbWFnZSB9LFxuICAgICAgICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7IG9hdXRoOiB0d2l0dGVyT2F1dGgoKSB9XG4gICAgICAgIH1cbiAgICAgICxcbiAgICAgIFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMClcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsICdVbmFibGUgdG8gcG9zdCBpbWFnZSB0byB0d2l0dGVyJyxcbiAgXG4gICAgICBpZiAoISByZXNwb25zZS5kYXRhKVxuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgJ0RpZCBub3QgcmVjZWl2ZSBhdHRhY2htZW50IGZyb20gdHdpdHRlcicsXG4gIFxuICAgICAgdmFyIGF0dGFjaG1lbnQgPSByZXNwb25zZS5kYXRhO1xuICBcbiAgICAgIHJlc3BvbnNlID0gSFRUUC5wb3N0KFxuICAgICAgICAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VwZGF0ZS5qc29uJywge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc3RhdHVzOiBhcHBlbmRUd2VldChhY3Rpdml0eS50ZXh0LCAnICNsb2NhbG1hcmtldCcpLFxuICAgICAgICAgICAgbWVkaWFfaWRzOiBhdHRhY2htZW50Lm1lZGlhX2lkX3N0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHsgb2F1dGg6IHR3aXR0ZXJPYXV0aCgpIH1cbiAgICAgICAgfVxuICAgICAgLFxuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCAnVW5hYmxlIHRvIGNyZWF0ZSB0d2VldCcsXG4gICAgfVxuICAgIFxuICAgIHZhciBnZXRMb2NhdGlvblBsYWNlID0gZnVuY3Rpb24obG9jKSB7XG4gICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9nZW8vcmV2ZXJzZV9nZW9jb2RlLmpzb24nXG4gICAgICAgICsgJz9ncmFudWxhcml0eT1uZWlnaGJvcmhvb2QnXG4gICAgICAgICsgJyZtYXhfcmVzdWx0cz0xJ1xuICAgICAgICArICcmYWNjdXJhY3k9JyArIGxvYy5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgKyAnJmxhdD0nICsgbG9jLmNvb3Jkcy5sYXRpdHVkZVxuICAgICAgICArICcmbG9uZz0nICsgbG9jLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICBcbiAgICAgIHZhciByZXNwb25zZSA9IEhUVFAuZ2V0KHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtucG1SZXF1ZXN0T3B0aW9uczogeyBvYXV0aDogdHdpdHRlck9hdXRoKCkgfSB9LFxuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICB2YXIgcGxhY2UgPSBfLmZpbmQocmVzcG9uc2UuZGF0YS5yZXN1bHQucGxhY2VzLCBmdW5jdGlvbihwbGFjZSkge1xuICAgICAgICAgIHJldHVybiBwbGFjZS5wbGFjZV90eXBlID09PSAnbmVpZ2hib3Job29kJztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwbGFjZSAmJiBwbGFjZS5mdWxsX25hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICBcbiAgKi8iLCJQcm9kdWN0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdQcm9kdWN0cycpO1xuXG5cblxuUHJvZHVjdHMuYWxsb3coe1xuICBpbnNlcnQ6IGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuICAgIHJldHVybiBkb2MudXNlcklkID09PSB1c2VySWQ7XG4gIH0sXG4gIHVwZGF0ZTpmdW5jdGlvbih1c2VySWQsZG9jKVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KTtcblxuXG5NZXRlb3IubWV0aG9kcyh7XG4gICdmZWF0dXJlZFByb2R1Y3RzJzogZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBMYXRlc3QgZmVhdHVyZWQgcHJvZHVjdHMgZGF0YSBcIiArIE1ldGVvci5zZXR0aW5ncy5mZWF0dXJlZFByb2R1Y3RzTGltaXQpO1xuIFxuIFxuICAgIHZhciBwcm9kcmVzdWx0ID0gW107XG4gICAgdHJ5XG4gICAge1xuICAgIFxuICAgIHZhciBwcm9kID0gUHJvZHVjdHMuZmluZCh7fSx7b3JkZXI6e2NyZWF0ZWRBdDogLTF9fSx7bGltaXQ6IE1ldGVvci5zZXR0aW5ncy5mZWF0dXJlZFByb2R1Y3RzTGltaXR9KTtcbiAgIFxuICAgIHByb2QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiBcbiAgICAgIHByb2RyZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaChleHApXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGdldHRpbmcgZmVhdHVyZWQgUHJvZHVjdHMgOiBcIiArIGV4cCk7XG4gICAgdGhyb3cgZXhwO1xuICB9XG4gICAgICBcbiBcbiAgICByZXR1cm4ge1Jlc3VsdHM6cHJvZHJlc3VsdH07XG4gIH0sXG4gICdnZXRQcm9kdWN0JzogZnVuY3Rpb24gKHByb2RpZCkge1xuICAgIC8vIHZhciByZXN1bHQgPSBQcm9kdWN0cy5maW5kKHtfaWQ6cHJvZGlkfSk7XG4gICAgdHJ5XG4gICAge1xuICAgICBcbiAgICAgIC8vTWV0ZW9yLnN1YnNjcmliZSgncHJvZHVjdCcscHJvZGlkKTtcbiAgICAgIC8vTWV0ZW9yLnN1YnNjcmliZSgnZ2V0U2VsbGVycycpO1xuICAgICBcbiAgICB2YXIgcHJvZCA9IFByb2R1Y3RzLmZpbmRPbmUoeyBfaWQ6IHByb2RpZCB9KTtcbiAgICBpZiAocHJvZClcbiAgICB7XG4gICAgICB2YXIgc2VsbCA9IFNlbGxlcnMuZmluZE9uZSh7dXNlcklkOnByb2Quc2VsbGVySWR9KTtcbiAgICAgIHZhciBwcm9kSW1hZ2VzID0gTWV0ZW9yLmFwcGx5KCdnZXRQcm9kdWN0SW1hZ2VzJywgW3Byb2QucHJvZEltZ10sIHsgcmV0dXJuU3R1YlZhbHVlOiB0cnVlIH0pO1xuICAgICAgcHJvZC5zZWxsZXIgPSBzZWxsO1xuICAgICAgcHJvZC5wcm9kSW1ncyA9IHByb2RJbWFnZXM7XG4gICAgfVxuICAgIC8vbG9hZGluZy5zdG9wKCk7XG4gICAgcmV0dXJuIHByb2Q7XG4gICAgfVxuICAgIGNhdGNoIChleHApXG4gICAge1xuICAgICAgLy9sb2FkaW5nLmhhbHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGV4cCk7XG4gICAgfVxuXG4gICAgLy9yZXR1cm4gTWV0ZW9yLk1vbmdvLlByb2R1Y3RzLmZpbmRPbmUoe19pZDpwcm9kaWR9KTtcbiAgfSxcbiAgXG4gICdnZXRQcm9kdWN0U2VsbGVyJzogZnVuY3Rpb24gKHNlbGxlcklkKSB7XG4gICAgTWV0ZW9yLnN1YnNjcmliZSgnZ2V0U2VsbGVyJyxzZWxsZXJJZCk7XG4gICAgcmV0dXJuIFNlbGxlcnMuZmluZE9uZSh7IHVzZXJJZDogTWV0ZW9yLnVzZXJJZCgpIH0pO1xuICB9LFxuICAnUVNlYXJjaFByb2R1Y3RzJyA6IGZ1bmN0aW9uIChzZWFyY2hJdGVtKVxuICB7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB2YXIgc2VhcmNoVGVybXMgPSBcIicvXi4qXCIgKyBzZWFyY2hJdGVtWzBdICsgXCIuKiQvaSdcIjtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hUZXJtcyk7XG4gICAgLy8kdGV4dDogeyRzZWFyY2g6IHNlYXJjaFZhbHVlfSB9LFxuICAgIHZhciBwcm9kcyA9IFByb2R1Y3RzLmZpbmQoeyRvcjpbe1wicHJvZHVjdHRpdGxlXCI6eyRyZWdleDpzZWFyY2hUZXJtc319ICwge1wicHJvZHVjdERlc2NycHRpb25cIjp7JHJlZ2V4OnNlYXJjaFRlcm1zfX1dfSk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHByb2RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgICAvL3ZhciByZXN1bHQgPSBQcm9kdWN0cy5maW5kKHskdGV4dDogeyRzZWFyY2g6IHNlYXJjaFRlcm1zfX0pLmZldGNoKCk7XG4gICAgLy8oeyR0ZXh0Onskc2VhcmNoOlwidHV0b3JpYWxzcG9pbnRcIn19KVxuICAgIFxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbiAgJ2dldFNlbGxlclByb2R1Y3RzJzogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBTZWxsZXIgU2VydmVyIFNpZGUgUHJvZHVjdHNcIik7XG5cbiAgICB2YXIgcHJvZHJlc3VsdCA9IFtdO1xuXG4gICAgLy9Qcm9kdWN0LmZpbmQoe30se29yZGVyOntjcmVhdGVkQXQ6LTF9fSk7XG4gICAgdmFyIHByb2QgPSBQcm9kdWN0cy5maW5kKHtzZWxsZXJJZDpNZXRlb3IudXNlcklkKCl9LHtvcmRlcjp7Y3JlYXRlZEF0OiAtMX19KTtcbiAgICBwcm9kLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgcHJvZHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2RyZXN1bHQ7XG4gIH1cblxufSk7XG5cblByb2R1Y3RzLmFsbFByb2R1Y3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIkdldHRpbmcgbGF0ZXN0IHByb2R1Y3RzXCIgKyBQcm9kdWN0cy5jb3VudCgpKTtcbiAgTWV0ZW9yLnN1YnNjcmliZSgnYWxsUHJvZHVjdHMnKTtcbiAgcmV0dXJuIFByb2R1Y3RzLmZpbmQoe30se29yZGVyOntjcmVhdGVkQXQ6IC0xfX0pO1xuICAvLyByZXR1cm4gUHJvZHVjdHMuZmluZCh7fSk7XG59XG5Qcm9kdWN0cy5nZXRQcm9kdWN0ID0gZnVuY3Rpb24gKHByb2RJZCkge1xuICB2YXIgcmVzdWx0O1xuICBjb25zb2xlLmxvZyhcIlNpbmdsZSBwcm9kdWN0IGFwaSBtZXRob2RcIik7XG4gIHRyeSB7XG4gICAgcmVzdWx0ID0gUHJvZHVjdHMuZmluZE9uZSh7IF9pZDogcHJvZElkIH0sIHsgbGltaXQ6IDEgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucHJvZHVjdHRpdGxlKTtcbiAgfVxuICBjYXRjaCAoZXhwKSB7XG4gICAgdGhyb3cgZXhwO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblByb2R1Y3RzLmJvb2tlZE1hcmtlZCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaGVyZSBnZXQgYWxsIG15IHVzZXJpZCBCb29rZWQgbWFya2VkIHByb2R1Y3RzIGFuZCB0aGVuIGdldCBlYWNoIHByb2QgYW5kIHB1c2ggdG8gYXJyYXkgYW5kIHJldHVybiB0aGUgYXJyYXkuXG59XG5cblByb2R1Y3RzLmxhdGVzdFByb2R1Y3RzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVzdWx0O1xuICBjb25zb2xlLmxvZyhcIkFwaSBtZXRob2RcIik7XG4gIHRyeSB7XG4gICAgLy9Qcm9kdWN0LmZpbmQoe30se29yZGVyOntjcmVhdGVkQXQ6LTF9fSk7XG4gICAgcmVzdWx0ID0gUHJvZHVjdHMuZmluZCh7fSx7b3JkZXI6e2NyZWF0ZWRBdDogLTF9fSk7XG5cbiAgfVxuICBjYXRjaCAoZXhwKSB7XG4gICAgdGhyb3cgZXhwO1xuICB9XG5cblxuICByZXR1cm4gcmVzdWx0Oy8vUHJvZHVjdHMuZmluZCh7fSwge3NvcnQ6IHtjcmVhdGVkQXQ6IC0xfSwgbGltaXQ6IDF9KTtcblxuXG59XG5cblByb2R1Y3RzLk15UHJvZHVjdHMgPSBmdW5jdGlvbiAoU2VsbGVySWQpIHtcbiAgLy9Qcm9kdWN0LmZpbmQoe30se29yZGVyOntjcmVhdGVkQXQ6LTF9fSk7XG4gIHJldHVybiBQcm9kdWN0cy5maW5kKHsgc2VsbGVySWQ6IFNlbGxlcklkIH0se29yZGVyOntjcmVhdGVkQXQ6IC0xfX0pOztcbn1cblxuLy8gUHJvZHVjdHMuZmVhdHVyZWRQcm9kdWN0cyA9IGZ1bmN0aW9uICgpIHtcblxuIFxuLy8gICB2YXIgcmVzdWx0ID0gW107XG4vLyAgIGNvbnNvbGUubG9nKFwiQXBpIG1ldGhvZCBmZWF0dXJlZFByb2R1Y3RzIFwiKTtcbi8vICAgLy9NZXRlb3Iuc2V0dGluZ3MuZmVhdHVyZWRQcm9kdWN0c0xpbWl0IFxuLy8gICB0cnkge1xuLy8gICAgIC8vcmVzdWx0ID0gUHJvZHVjdHMuZmluZCh7fSx7c29ydDoge2NyZWF0ZWRBdDoxfSwgbGltaXQ6IDR9KTtcbi8vICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XG5cbi8vICAgfVxuLy8gICBjYXRjaCAoZXhwKSB7XG4vLyAgICAgdGhyb3cgZXhwO1xuLy8gICB9XG5cblxuLy8gICByZXR1cm4gcmVzdWx0Oy8vUHJvZHVjdHMuZmluZCh7fSwge3NvcnQ6IHtjcmVhdGVkQXQ6IC0xfSwgbGltaXQ6IDF9KTtcblxuXG4vLyAgIC8vIHZhciBjdHIgPSBNZXRlb3Iuc2V0dGluZ3MuZmVhdHVyZWRQcm9kdWN0c0xpbWl0O1xuLy8gICAvLyBjb25zb2xlLmxvZyhcIkFwaSBNZXRob2QgZmVhdHVyZWQgOiBcIiArICBjdHIpO1xuLy8gICAvLyB2YXIgcmVzdWx0ID0gUHJvZHVjdHMuZmluZCh7fSx7c29ydDp7Y3JlYXRlZEF0OjF9LGxpbWl0OiAyfSk7Ly9NZXRlb3Iuc2V0dGluZ3MuZmVhdHVyZWRQcm9kdWN0c0xpbWl0fSk7IFxuLy8gICAvLyByZXR1cm4gcmVzdWx0Oy8vIFByb2R1Y3RzLmZpbmQoe30se3NvcnQ6e2NyZWF0ZWRBdDoxfSxsaW1pdDogMn0pOy8vTWV0ZW9yLnNldHRpbmdzLmZlYXR1cmVkUHJvZHVjdHNMaW1pdH0pO1xuLy8gfVxuXG5Qcm9kdWN0cy5tb3JlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvblZhbHVlKSB7XG4gIC8vaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbW9uZ28tY3Vyc29yLXBhZ2luYXRpb25cbiAgcmV0dXJuIFByb2R1Y3RzLmZpbmQoKS5zb3J0KHtjcmVhdGVkQXQ6LTF9KS5saW1pdCgxMikuc2tpcChjb250aW51YXRpb25WYWx1ZSk7XG5cbn1cblxuTWV0ZW9yLm1ldGhvZHMoe1xuICBjcmVhdGVQcm9kdWN0OiBmdW5jdGlvbiAocHJvZHVjdCwgbG9jKSB7XG4gICAgY2hlY2socHJvZHVjdCwge1xuICAgICAgc2VsbGVySWQ6IFN0cmluZyxcbiAgICAgIHByb2R1Y3R0aXRsZTogU3RyaW5nLFxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uOiBTdHJpbmcsXG4gICAgICBwcmljZTogTnVtYmVyLFxuICAgICAgcHJvZENhdDogU3RyaW5nLFxuICAgICAgdXJsOiBTdHJpbmdcbiAgICB9LFxuICAgICAgbG9jLCBNYXRjaC5PbmVPZihPYmplY3QsIG51bGwpKTtcblxuICAgIHByb2R1Y3Quc2VsbGVySWQgPSBNZXRlb3IudXNlcklkO1xuICAgIHByb2R1Y3QuY3JlYXRlRGF0ZSA9IG5ldyBEYXRlO1xuICAgIHByb2R1Y3QuZXhwaXJlRGF0ZSA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG4gICAgdmFyIFByb2RJbnNlcnQgPSBQcm9kdWN0cy5pbnNlcnQoe1xuICAgICAgc2VsbGVySWQsXG4gICAgICBwcm9kdWN0dGl0bGUsXG4gICAgICBwcm9kdWN0RGVzY3JpcHRpb24sXG4gICAgICBwcmljZSxcbiAgICAgIHByb2RDYXQsXG4gICAgICBjcmVhdGVkQXQsXG4gICAgICBleHBpcmVBdCxcbiAgICAgIHVybCxcbiAgICAgIHByb2RJbWdcblxuICAgIH0pO1xuICAgIHJldHVybiBQcm9kSW5zZXJ0O1xuXG4gIH0sXG5cbn0pO1xuICAvKlxuICBNZXRlb3IubWV0aG9kcyh7XG4gICAgY3JlYXRlQWN0aXZpdHk6IGZ1bmN0aW9uKGFjdGl2aXR5LCB0d2VldCwgbG9jKSB7XG4gICAgICBNZXRlb3IudXNlcklkKCksIFN0cmluZyxcbiAgICAgIGFjdGl2aXR5LCB7XG4gICAgICAgIHJlY2lwZU5hbWU6IFN0cmluZyxcbiAgICAgICAgdGV4dDogU3RyaW5nLFxuICAgICAgICBpbWFnZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgdHdlZXQsIEJvb2xlYW4sXG4gICAgICBsb2MsIE1hdGNoLk9uZU9mKE9iamVjdCwgbnVsbCksXG4gICAgICBcbiAgICAgIGFjdGl2aXR5LnVzZXJJZCA9IE1ldGVvci51c2VySWQoLFxuICAgICAgYWN0aXZpdHkudXNlckF2YXRhciA9IE1ldGVvci51c2VyKCkuc2VydmljZXMudHdpdHRlci5wcm9maWxlX2ltYWdlX3VybF9odHRwcztcbiAgICAgIGFjdGl2aXR5LnVzZXJOYW1lID0gTWV0ZW9yLnVzZXIoKS5wcm9maWxlLm5hbWU7XG4gICAgICBhY3Rpdml0eS5kYXRlID0gbmV3IERhdGU7XG4gICAgICBcbiAgICAgIGlmICghIHRoaXMuaXNTaW11bGF0aW9uICYmIGxvYylcbiAgICAgICAgYWN0aXZpdHkucGxhY2UgPSBnZXRMb2NhdGlvblBsYWNlKGxvYyxcbiAgICAgIFxuICAgICAgdmFyIGlkID0gQWN0aXZpdGllcy5pbnNlcnQoYWN0aXZpdHksXG4gICAgICBcbiAgICAgIGlmICghIHRoaXMuaXNTaW11bGF0aW9uICYmIHR3ZWV0KVxuICAgICAgICB0d2VldEFjdGl2aXR5KGFjdGl2aXR5LFxuICAgICAgXG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9LFxuICBcbiAgaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICAgIHZhciB0d2l0dGVyT2F1dGggPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgY29uZmlnID0gTWV0ZW9yLnNldHRpbmdzLnR3aXR0ZXJcbiAgICAgIHZhciB1c2VyQ29uZmlnID0gTWV0ZW9yLnVzZXIoKS5zZXJ2aWNlcy50d2l0dGVyO1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnN1bWVyX2tleTogY29uZmlnLmNvbnN1bWVyS2V5LFxuICAgICAgICBjb25zdW1lcl9zZWNyZXQ6IGNvbmZpZy5zZWNyZXQsXG4gICAgICAgIHRva2VuOiB1c2VyQ29uZmlnLmFjY2Vzc1Rva2VuLFxuICAgICAgICB0b2tlbl9zZWNyZXQ6IHVzZXJDb25maWcuYWNjZXNzVG9rZW5TZWNyZXRcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHZhciB0d2VldEFjdGl2aXR5ID0gZnVuY3Rpb24oYWN0aXZpdHkpIHtcbiAgICAgIC8vIGNyZWF0ZXMgdGhlIHR3ZWV0IHRleHQsIG9wdGlvbmFsbHkgdHJ1bmNhdGluZyB0byBmaXQgdGhlIGFwcGVuZGVkIHRleHRcbiAgICAgIGZ1bmN0aW9uIGFwcGVuZFR3ZWV0KHRleHQsIGFwcGVuZCkge1xuICAgICAgICB2YXIgTUFYID0gMTE3OyAvLyBNYXggc2l6ZSBvZiB0d2VldCB3aXRoIGltYWdlIGF0dGFjaGVkXG4gICAgICAgIFxuICAgICAgICBpZiAoKHRleHQgKyBhcHBlbmQpLmxlbmd0aCA+IE1BWClcbiAgICAgICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoMCwgKE1BWCAtIGFwcGVuZC5sZW5ndGggLSAzKSkgKyAnLi4uJyArIGFwcGVuZDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB0ZXh0ICsgYXBwZW5kO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyB3ZSBuZWVkIHRvIHN0cmlwIHRoZSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgYml0IG9mZiB0aGUgZGF0YSB1cmxcbiAgICAgIHZhciBpbWFnZSA9IGFjdGl2aXR5LmltYWdlLnJlcGxhY2UoL15kYXRhLipiYXNlNjQsLywgJycsXG4gIFxuICAgICAgdmFyIHJlc3BvbnNlID0gSFRUUC5wb3N0KFxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQudHdpdHRlci5jb20vMS4xL21lZGlhL3VwbG9hZC5qc29uJywge1xuICAgICAgICAgIHBhcmFtczogeyBtZWRpYTogaW1hZ2UgfSxcbiAgICAgICAgICBucG1SZXF1ZXN0T3B0aW9uczogeyBvYXV0aDogdHdpdHRlck9hdXRoKCkgfVxuICAgICAgICB9XG4gICAgICAsXG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCAnVW5hYmxlIHRvIHBvc3QgaW1hZ2UgdG8gdHdpdHRlcicsXG4gIFxuICAgICAgaWYgKCEgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsICdEaWQgbm90IHJlY2VpdmUgYXR0YWNobWVudCBmcm9tIHR3aXR0ZXInLFxuICBcbiAgICAgIHZhciBhdHRhY2htZW50ID0gcmVzcG9uc2UuZGF0YTtcbiAgXG4gICAgICByZXNwb25zZSA9IEhUVFAucG9zdChcbiAgICAgICAgJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9zdGF0dXNlcy91cGRhdGUuanNvbicsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHN0YXR1czogYXBwZW5kVHdlZXQoYWN0aXZpdHkudGV4dCwgJyAjbG9jYWxtYXJrZXQnKSxcbiAgICAgICAgICAgIG1lZGlhX2lkczogYXR0YWNobWVudC5tZWRpYV9pZF9zdHJpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7IG9hdXRoOiB0d2l0dGVyT2F1dGgoKSB9XG4gICAgICAgIH1cbiAgICAgICxcbiAgXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKVxuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgJ1VuYWJsZSB0byBjcmVhdGUgdHdlZXQnLFxuICAgIH1cbiAgICBcbiAgICB2YXIgZ2V0TG9jYXRpb25QbGFjZSA9IGZ1bmN0aW9uKGxvYykge1xuICAgICAgdmFyIHVybCA9ICdodHRwczovL2FwaS50d2l0dGVyLmNvbS8xLjEvZ2VvL3JldmVyc2VfZ2VvY29kZS5qc29uJ1xuICAgICAgICArICc/Z3JhbnVsYXJpdHk9bmVpZ2hib3Job29kJ1xuICAgICAgICArICcmbWF4X3Jlc3VsdHM9MSdcbiAgICAgICAgKyAnJmFjY3VyYWN5PScgKyBsb2MuY29vcmRzLmFjY3VyYWN5XG4gICAgICAgICsgJyZsYXQ9JyArIGxvYy5jb29yZHMubGF0aXR1ZGVcbiAgICAgICAgKyAnJmxvbmc9JyArIGxvYy5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgXG4gICAgICB2YXIgcmVzcG9uc2UgPSBIVFRQLmdldCh1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bnBtUmVxdWVzdE9wdGlvbnM6IHsgb2F1dGg6IHR3aXR0ZXJPYXV0aCgpIH0gfSxcbiAgXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgdmFyIHBsYWNlID0gXy5maW5kKHJlc3BvbnNlLmRhdGEucmVzdWx0LnBsYWNlcywgZnVuY3Rpb24ocGxhY2UpIHtcbiAgICAgICAgICByZXR1cm4gcGxhY2UucGxhY2VfdHlwZSA9PT0gJ25laWdoYm9yaG9vZCc7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcGxhY2UgJiYgcGxhY2UuZnVsbF9uYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAgXG4gICovIiwiUmVjaXBlc0RhdGEgPSB7XG5cInNwcmluZy1mcm9tYWdlLWZvcnRcIjoge1xuICBcInRpdGxlXCI6IFwiRnJvbWFnZSBGb3J0XCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiV2hlbiBJ4oCZdmUgZ290IHRvbyBtYW55IGNoZWVzZSBiaXRzIG9uIGhhbmQsIGl0J3Mgbm93IGZyb21hZ2UgZm9ydCB0byB0aGUgcmVzY3VlXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJEYXZpZCBMZWJvdml0elwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5kYXZpZGxlYm92aXR6LmNvbS8yMDE0LzA0L2Zyb21hZ2UtZm9ydGUtY2hlZXNlLWRpcC1zcHJlYWQtcmVjaXBlL1wiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxNSBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCI4IG91bmNlcyAoMjI1ZykgY2hlZXNlIHBpZWNlcywgaGFyZCByaW5kcyByZW1vdmVkXCIsXG4gICAgXCIxIHRvIDIgb3VuY2VzICgzMCB0byA2MGcpIGNyZWFtIGNoZWVzZVwiLFxuICAgIFwiMS80IGN1cCAoNjBtbCkgZHJ5IHdoaXRlIHdpbmVcIixcbiAgICBcIjEgZ2FybGljIGNsb3ZlLCBwZWVsZWQgYW5kIG1pbmNlZFwiLFxuICAgIFwiYSBmZXcgdHVybnMgb2YgZnJlc2hseSBncm91bmQgYmxhY2sgcGVwcGVyXCIsXG4gICAgXCJwaW5jaCBvZiBjYXllbm5lIG9yIHJlZCBwZXBwZXIgcG93ZGVyXCIsXG4gICAgXCIxIHRhYmxlc3Bvb24gbWluY2VkIGNoaXZlcyBvciBmbGF0LWxlYWYgcGFyc2xleVwiLFxuICAgIFwiY2hpdmVzIG9yIHBhcnNsZXksIGZvciBnYXJuaXNoXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIkN1dCB0aGUgY2hlZXNlIGludG8gYml0ZS1zaXplZCBjdWJlcyBhbmQgcHV0IHRoZW0gaW4gdGhlIGJvd2wgb2YgYSBmb29kIHByb2Nlc3NvciB3aXRoIDEgb3VuY2UgKDMwZykgb2YgdGhlIGNyZWFtIGNoZWVzZSwgd2luZSwgZ2FybGljLCBhbmQgdGhlIGJsYWNrIGFuZCByZWQgcGVwcGVycy5cIixcbiAgICBcIlByb2Nlc3MgdGhlIG1peHR1cmUgdW50aWwgY29tcGxldGVseSBzbW9vdGguIElmIGl0IGlzIG5vdCBjb21wbGV0ZWx5IHNtb290aCAod2hpY2ggbWF5IGhhcHBlbiBpZiB5b3UgYXJlIHN0YXJ0aW5nIHdpdGggYW4gYXNzb3J0bWVudCBvZiBoYXJkZXIgY2hlZXNlcyksIGFkZCB0aGUgYWRkaXRpb25hbCBjcmVhbSBjaGVlc2UsIGFuZCBjb250aW51ZSB0byBwcm9jZXNzLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcInNwcmluZy1mcm9tYWdlLWZvcnRcIlxufSxcblwic3ByaW5nLXJhZ3UtYm9sb2duZXNlXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkNsYXNzaWMgUmFndSBCb2xvZ25lc2VcIixcbiAgXCJleGNlcnB0XCI6IFwiQSBjZXJ0YWluIG1hZ2ljIGhhcHBlbnMgYXMgdGhlIGJlZWYgYW5kIGFyb21hdGljIHZlZ2V0YWJsZXMgc2xvd2x5IGNvb2sgZG93biB3aXRoIHdpbmUsIHRvbWF0byBwYXN0ZSwgYW5kIGJyb3RoXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJCb24gQXBww6l0aXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYm9uYXBwZXRpdC5jb20vcmVjaXBlL2NsYXNzaWMtcmFnLWJvbG9nbmVzZVwiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxIGhyIDEwIG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjIgVGJzcC4gZXh0cmEtdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgIFwiMiBtZWRpdW0gb25pb25zLCBmaW5lbHkgY2hvcHBlZCAoYWJvdXQgMSAxLzIgY3VwcylcIixcbiAgICBcIjIgY2VsZXJ5IHN0YWxrcywgZmluZWx5IGNob3BwZWQgKGFib3V0IDEgY3VwKVwiLFxuICAgIFwiMiBjYXJyb3RzLCBwZWVsZWQsIGZpbmVseSBjaG9wcGVkIChhYm91dCAzLzQgY3VwKVwiLFxuICAgIFwiNiBvei4gZ3JvdW5kIGJlZWYgKDg1JSBsZWFuKVwiLFxuICAgIFwiNiBvei4gZ3JvdW5kIHZlYWxcIixcbiAgICBcIjMgb3ouIHRoaW5seSBzbGljZWQgcGFuY2V0dGEsIGZpbmVseSBjaG9wcGVkXCIsXG4gICAgXCIxLzIgY3VwIGRyeSByZWQgd2luZVwiLFxuICAgIFwiMyBjdXBzIChhYm91dCkgYmVlZiBzdG9jayBvciBjaGlja2VuIHN0b2NrLCBkaXZpZGVkXCIsXG4gICAgXCIzIFRic3AuIHRvbWF0byBwYXN0ZVwiLFxuICAgIFwiS29zaGVyIHNhbHQgYW5kIGZyZXNobHkgZ3JvdW5kIGJsYWNrIHBlcHBlclwiLFxuICAgIFwiMSBjdXAgd2hvbGUgbWlsa1wiLFxuICAgIFwiMSBsYi4gdGFnbGlhdGVsbGUgb3IgZmV0dHVjY2luZSAocHJlZmVyYWJseSBmcmVzaCBlZ2cpXCIsXG4gICAgXCJGaW5lbHkgZ3JhdGVkIFBhcm1lc2FuIChmb3Igc2VydmluZylcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiSGVhdCBvaWwgaW4gYSBsYXJnZSBoZWF2eSBwb3Qgb3ZlciBtZWRpdW0taGlnaCBoZWF0LlwiLFxuICAgIFwiQWRkIG9uaW9ucywgY2VsZXJ5LCBhbmQgY2Fycm90cy5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJzcHJpbmctcmFndS1ib2xvZ25lc2VcIlxufSxcblwic3ByaW5nLWFuaW1hbC1jcmFja2VyLWNvb2tpZXNcIjoge1xuICBcInRpdGxlXCI6IFwiQW5pbWFsLUNyYWNrZXIgQ29va2llc1wiLFxuICBcImV4Y2VycHRcIjogXCJDcmVhdGUgYW5kIGRlY29yYXRlIG1hZ2ljYWwgY29va2llcyB0aGF0IGFyZSBhcyBtdWNoIGZ1biBhcyBhIGRheSBhdCB0aGUgY2lyY3VzIVwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiV2lsbGlhbXMtU29ub21hXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LndpbGxpYW1zLXNvbm9tYS5jb20vcmVjaXBlL2FuaW1hbC1jcmFja2VyLWNvb2tpZXMuaHRtbFwiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxIGhyXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMiAxLzIgY3VwcyBhbGwtcHVycG9zZSBmbG91clwiLFxuICAgIFwiMSB0c3AuIGJha2luZyBwb3dkZXJcIixcbiAgICBcIjEvMiB0c3AuIHNhbHRcIixcbiAgICBcIjEvOCB0c3AuIGZyZXNobHkgZ3JhdGVkIG51dG1lZ1wiLFxuICAgIFwiMS84IHRzcC4gbWFjZVwiLFxuICAgIFwiMTIgVGJzLiAoMSAxLzIgc3RpY2tzKSB1bnNhbHRlZCBidXR0ZXIsIGF0IHJvb20gdGVtcGVyYXR1cmVcIixcbiAgICBcIjEgY3VwIHN1Z2FyXCIsXG4gICAgXCIxIGVnZ1wiLFxuICAgIFwiMSB0c3AuIHZhbmlsbGEgZXh0cmFjdFwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJPdmVyIGEgc21hbGwgYm93bCwgc2lmdCB0b2dldGhlciB0aGUgZmxvdXIsIGJha2luZyBwb3dkZXIsIHNhbHQsIG51dG1lZyBhbmQgbWFjZS4gU2V0IGFzaWRlLlwiLFxuICAgIFwiSW4gdGhlIGJvd2wgb2YgYW4gZWxlY3RyaWMgbWl4ZXIgZml0dGVkIHdpdGggdGhlIGZsYXQgYmVhdGVyLCBiZWF0IHRoZSBidXR0ZXIgb24gaGlnaCBzcGVlZCBmb3IgMiBtaW51dGVzLiBSZWR1Y2UgdGhlIHNwZWVkIHRvIG1lZGl1bSwgc2xvd2x5IGFkZCB0aGUgc3VnYXIgYW5kIGJlYXQgZm9yIDIgbWludXRlcywgc3RvcHBpbmcgdGhlIG1peGVyIG9jY2FzaW9uYWxseSB0byBzY3JhcGUgZG93biB0aGUgc2lkZXMgb2YgdGhlIGJvd2wuIEFkZCB0aGUgZWdnIGFuZCB2YW5pbGxhIGFuZCBiZWF0IGZvciAxIG1pbnV0ZSwgc3RvcHBpbmcgdGhlIG1peGVyIG9uY2UgdG8gc2NyYXBlIGRvd24gdGhlIHNpZGVzIG9mIHRoZSBib3dsLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcInNwcmluZy1hbmltYWwtY3JhY2tlci1jb29raWVzXCJcbn0sXG5cInNwcmluZy1jaGlja2VuLWluLW1vbGVcIjoge1xuICBcInRpdGxlXCI6IFwiQ2hpY2tlbiBpbiBNb2zDqVwiLFxuICBcImV4Y2VycHRcIjogXCJJZiB0aGVyZSBpcyBvbmUgZGlzaCB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgTWV4aWNhbiBoYXV0ZSBjdWlzaW5lLCB0aGVuIE1vbGUgUG9ibGFubyBpcyBzdXJlbHkgaXRcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIkVwaWN1cmlvdXNcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZXBpY3VyaW91cy5jb20vcmVjaXBlcy9mb29kL3ZpZXdzL0NoaWNrZW4taW4tTW9sZS1QdWVibGEtU3R5bGUtMjM4MTg1XCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjIgaHJcIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCI0IHBvdW5kcyBjaGlja2VuIHBpZWNlcywgc2tpbiBvblwiLFxuICAgIFwiU2VhIHNhbHQgYW5kIGdyb3VuZCBibGFjayBwZXBwZXIgdG8gdGFzdGVcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgc2VzYW1lIHNlZWRzLCB0b2FzdGVkLCBmb3IgZ2FybmlzaFwiLFxuICAgIFwid2hpdGUgcmljZVwiLFxuICAgIFwiOSBtdWxhdG8gY2hpbGVzXCIsXG4gICAgXCI3IHBhc2lsbGEgY2hpbGVzXCIsXG4gICAgXCI2IGFuY2hvIGNoaWxlc1wiLFxuICAgIFwiMSBjdXAgcGx1cyA5IHRhYmxlc3Bvb25zIHZlZ2V0YWJsZSBvaWwgb3IgbGFyZCBwbHVzIGFkZGl0aW9uYWwgYXMgbmVlZGVkXCIsXG4gICAgXCI0IG9yIDUgdG9tYXRpbGxvcywgaHVza2VkIGFuZCBjb29rZWQgdW50aWwgc29mdFwiLFxuICAgIFwiNSB3aG9sZSBjbG92ZXNcIixcbiAgICBcIjIwIHdob2xlIGJsYWNrIHBlcHBlcmNvcm5zXCIsXG4gICAgXCIxLWluY2ggcGllY2Ugb2YgYSBNZXhpY2FuIGNpbm5hbW9uIHN0aWNrXCIsXG4gICAgXCIxIHRhYmxlc3Bvb24gc2VlZHMgZnJvbSB0aGUgY2hpbGVzLCB0b2FzdGVkXCIsXG4gICAgXCIxLzIgdGVhc3Bvb24gYW5pc2Ugc2VlZHMsIHRvYXN0ZWRcIixcbiAgICBcIjEvNCB0ZWFzcG9vbiBjb3JpYW5kZXIgc2VlZHMsIHRvYXN0ZWRcIixcbiAgICBcIjggdGFibGVzcG9vbnMgc2VzYW1lIHNlZWRzLCB0b2FzdGVkXCIsXG4gICAgXCI0IGdhcmxpYyBjbG92ZXMsIHJvYXN0ZWRcIixcbiAgICBcIjMgdGFibGVzcG9vbnMgcmFpc2luc1wiLFxuICAgIFwiMjAgd2hvbGUgYWxtb25kcywgYmxhbmNoZWRcIixcbiAgICBcIjEvNCBjdXAgcHVtcGtpbiBzZWVkc1wiLFxuICAgIFwiMiBjb3JuIHRvcnRpbGxhcywgdG9ybiBpbnRvIHBpZWNlc1wiLFxuICAgIFwiMyBzdGFsZSBGcmVuY2ggcm9sbHMsIGN1dCBpbnRvIDEtaW5jaCBzbGljZXNcIixcbiAgICBcIjYgdG8gNyBjdXBzIHJlc2VydmVkIGNoaWNrZW4gYnJvdGggYXMgbmVlZGVkXCIsXG4gICAgXCIxIDEvMiBvdW5jZXMgTWV4aWNhbiBjaG9jb2xhdGUsIGNob3BwZWRcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiSW4gYSBsYXJnZSBzdG9jayBwb3QsIHBhcmJvaWwgdGhlIGNoaWNrZW4gaW4gd2F0ZXIgc2Vhc29uZWQgd2l0aCBzYWx0IGFuZCBwZXBwZXIgdG8gdGFzdGUuIERyYWluLCByZXNlcnZpbmcgY29va2luZyBicm90aCwgYW5kIHJlZnJpZ2VyYXRlIHVudGlsIHJlYWR5IHRvIGFzc2VtYmxlIHRoZSBkaXNoLlwiLFxuICAgIFwiUHJlcGFyZSB0aGUgTW9sZSBQb2JsYW5vLiBDbGVhbiB0aGUgY2hpbGVzIGJ5IHJlbW92aW5nIHN0ZW1zLCB2ZWlucywgYW5kIHNlZWRzOyByZXNlcnZlIDEgdGFibGVzcG9vbiBvZiB0aGUgc2VlZHMuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3ByaW5nLWNoaWNrZW4taW4tbW9sZVwiXG59LFxuXCJzcHJpbmctc3BhbmlzaC1hc3BhcmFndXMtcmV2dWVsdG9cIjoge1xuICBcInRpdGxlXCI6IFwiU3BhbmlzaCBBc3BhcmFndXMgUmV2dWVsdG9cIixcbiAgXCJleGNlcnB0XCI6IFwiSW4gU3BhaW4sIHdpbGQgYXNwYXJhZ3VzIGlzIHZlcnkgcG9wdWxhciwgYW5kIGl04oCZcyBhIHN1cmUgc2lnbiBvZiBzcHJpbmdcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk5ZIFRpbWVzXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lm55dGltZXMuY29tL3JlY2lwZXMvMTAxNjI0MC9zcGFuaXNoLWFzcGFyYWd1cy1yZXZ1ZWx0by5odG1sXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjMwIG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIk9saXZlIG9pbFwiLFxuICAgIFwiMiBwZWVsZWQgZ2FybGljIGNsb3ZlcywgcGx1cyAxLzIgdGVhc3Bvb24gbWluY2VkIGdhcmxpY1wiLFxuICAgIFwiMiBjdXBzIGJyZWFkIGN1YmVzLCBtYWRlIHdpdGggZGF5LW9sZCBicmVhZCwgY3V0IGluIDEvMi1pbmNoIGN1YmVzXCIsXG4gICAgXCJTYWx0IGFuZCBwZXBwZXJcIixcbiAgICBcIjIgb3VuY2VzIGRpY2VkIFNwYW5pc2ggY2hvcml6b1wiLFxuICAgIFwiMSBidW5jaCB0aGluIGFzcGFyYWd1cywgYWJvdXQgMSAxLzIgcG91bmRzLCBjdXQgaW4gMS0gdG8gMi1pbmNoIGxlbmd0aHNcIixcbiAgICBcIjEgYnVuY2ggZ3JlZW4gb25pb25zLCBjaG9wcGVkXCIsXG4gICAgXCI4IGxhcmdlIGVnZ3MsIGJlYXRlblwiLFxuICAgIFwiMS8yIHRlYXNwb29uIHBpbWVudMOzblwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyByb3VnaGx5IGNob3BwZWQgSXRhbGlhbiBwYXJzbGV5XCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlB1dCAzIHRhYmxlc3Bvb25zIG9saXZlIG9pbCBpbiBhIGNhc3QtaXJvbiBza2lsbGV0IG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC4gQWRkIHBlZWxlZCBnYXJsaWMgY2xvdmVzIGFuZCBsZXQgdGhlbSBzaXp6bGUgdW50aWwgbGlnaHRseSBicm93bmVkLCB0aGVuIHJlbW92ZS5cIixcbiAgICBcIkFkZCBicmVhZCBjdWJlcywgc2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyLCBsb3dlciBoZWF0IHRvIG1lZGl1bSBhbmQgZ2VudGx5IGZyeSB1bnRpbCBsaWdodGx5IGJyb3duZWQgYW5kIGNyaXNwLCBhYm91dCAyIG1pbnV0ZXMuIFJlbW92ZSBicmVhZCBhbmQgc2V0IGFzaWRlIHRvIGNvb2wuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3ByaW5nLXNwYW5pc2gtYXNwYXJhZ3VzLXJldnVlbHRvXCJcbn0sXG5cInNwcmluZy1tZWF0bG9hZlwiOiB7XG4gIFwidGl0bGVcIjogXCJGYXR0ZWQgQ2FsZidzIE1lYXRsb2FmXCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiSXQgaXMgYSB0aGluZyBvZiBiZWF1dHksIHNoYXBlZCBpbnRvIGEgbGFyZ2Ugb3ZhbCBsb2FmIGFuZCBnbGF6ZWQgd2l0aCB0YW5neSBjb2NrdGFpbCBzYXVjZVwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiRm9vZDUyXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vZm9vZDUyLmNvbS9yZWNpcGVzLzI0MzAyLWZhdHRlZC1jYWxmLXMtbWVhdGxvYWZcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMSBociAzMCBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCIzLzQgdGVhc3Bvb25zIGJsYWNrIHBlcHBlcmNvcm5zXCIsXG4gICAgXCIyIGFsbHNwaWNlIGJlcnJpZXNcIixcbiAgICBcIjIgdGVhc3Bvb25zIGZlbm5lbCBzZWVkXCIsXG4gICAgXCIxIHRlYXNwb29uIGNoaWxlIGZsYWtlc1wiLFxuICAgIFwiMSB3aG9sZSBjbG92ZVwiLFxuICAgIFwiMSAxLzQgcG91bmQgYm9uZWxlc3MgbGVhbiBiZWVmIGZyb20gZXllIG9mIHJvdW5kIG9yIHNpcmxvaW4sIGN1dCBpbnRvIDEtaW5jaCBjdWJlc1wiLFxuICAgIFwiMSBwb3VuZCBib25lbGVzcyBwb3JrIHBpY25pYywgY3V0IGludG8gMS1pbmNoIGN1YmVzXCIsXG4gICAgXCI0IG91bmNlcyBwb3JrIGJhY2sgZmF0LCBjdXQgaW50byAxLWluY2ggY3ViZXNcIixcbiAgICBcIlNlYSBzYWx0XCIsXG4gICAgXCIyIHRlYXNwb29ucyBjaG9wcGVkIGdhcmxpY1wiLFxuICAgIFwiNCBvdW5jZXMgY2hvcHBlZCBiYWNvblwiLFxuICAgIFwiMiBjdXBzIGRpY2VkIHllbGxvdyBvbmlvblwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyB1bnNhbHRlZCBidXR0ZXJcIixcbiAgICBcIjYgdGFibGVzcG9vbnMgZnJlc2ggYnJlYWRjcnVtYnNcIixcbiAgICBcIjEgZWdnIGxpZ2h0bHkgYmVhdGVuXCIsXG4gICAgXCIxLzIgY3VwIGtldGNodXBcIixcbiAgICBcIjEgMS8yIHRlYXNwb29uIFRhYmFzY28gc2F1Y2VcIixcbiAgICBcIjEgMS80IHRlYXNwb29uIFdvcmNlc3RlcnNoaXJlIHNhdWNlXCIsXG4gICAgXCIxIHRlYXNwb29uIGdyYXRlZCBmcmVzaCBob3JzZXJhZGlzaFwiLFxuICAgIFwiMS80IGN1cCBjaG9wcGVkIHBhcnNsZXlcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgY2hvcHBlZCBvcmVnYW5vXCIsXG4gICAgXCIxIHRhYmxlc3Bvb24gY2hvcHBlZCB0aHltZVwiLFxuICAgIFwiMSB0YWJsZXNwb29uIGNob3BwZWQgc2FnZVwiLFxuICAgIFwiMS80IGN1cCBrZXRjaHVwXCIsXG4gICAgXCIxLzQgdGVhc3Bvb24gc2VhIHNhbHRcIixcbiAgICBcIjEvNCB0ZWFzcG9vbiBmcmVzaGx5IGdyb3VuZCBibGFjayBwZXBwZXJcIixcbiAgICBcIjEgMS8yIHRlYXNwb29uIGdyYXRlZCBmcmVzaCBob3JzZXJhZGlzaFwiLFxuICAgIFwiMS8yIHRlYXNwb29uIFdvcmNlc3RlcnNoaXJlIHNhdWNlXCIsXG4gICAgXCIxLzIgdGVhc3Bvb24gVGFiYXNjbyBzYXVjZVwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDMyNcKwIEYgKDE2NcKwIEMpLiBUbyBtYWtlIHRoZSBmb3JjZW1lYXQsIHNwcmVhZCB0aGUgcGVwcGVyY29ybnMgYW5kIGFsbHNwaWNlIG9uIGEgYmFraW5nIHNoZWV0IGFuZCB0b2FzdCBmb3IgMyB0byA1IG1pbnV0ZXMsIHVudGlsIGZyYWdyYW50LiBMZXQgY29vbCBjb21wbGV0ZWx5LlwiLFxuICAgIFwiVG9hc3QgdGhlIGZlbm5lbCBzZWVkcyB0aGUgc2FtZSB3YXksIHRoZW4gbGV0IGNvb2wgY29tcGxldGVseS5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJzcHJpbmctbWVhdGxvYWZcIlxufSxcblwic3ByaW5nLWxhaG1hY3VuLXR1cmtpc2gtcGl6emFcIjoge1xuICBcInRpdGxlXCI6IFwiTGFobWFjdW4gLSBUdXJraXNoIFBpenphXCIsXG4gIFwiZXhjZXJwdFwiOiBcIlwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiT3R0b2xlbmdoaVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5vdHRvbGVuZ2hpLmNvLnVrL2xhaG1hY3VuLXR1cmtpc2gtcGl6emEtd2l0aC1zcGljeS1taW5jZWQtYmVlZi1hbmQtc2FsYWQtdG9wcGluZy1zaG9wXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjQwIG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjI1MGcgbWluY2VkIGJlZWZcIixcbiAgICBcIjEgbWVkaXVtIG9uaW9uLCBmaW5lbHkgY2hvcHBlZCAoMTgwZyBuZXQpXCIsXG4gICAgXCIzIDMvNCB0c3Agc2FsdFwiLFxuICAgIFwiMSAxLzIgdHNwIGdyb3VuZCBjaW5uYW1vblwiLFxuICAgIFwiMSAxLzIgdHNwIGdyb3VuZCBhbGxzcGljZVwiLFxuICAgIFwiMS8yIHRzcCByZWQgY2hpbGxpIGZsYWtlc1wiLFxuICAgIFwiMjVnIGZsYXQtbGVhZiBwYXJzbGV5LCBjaG9wcGVkXCIsXG4gICAgXCIyIHRic3AgcG9tZWdyYW5hdGUgbW9sYXNzZXNcIixcbiAgICBcIjEgMS8yIHRic3Agc3VtYWNcIixcbiAgICBcIjMgdGJzcCB0YWhpbmlcIixcbiAgICBcIjI1ZyBwaW5lIG51dHNcIixcbiAgICBcIjIgdGJzcCBsZW1vbiBqdWljZVwiLFxuICAgIFwiMjUwZyB3aGl0ZSBmbG91ciwgcGx1cyBleHRyYSB0byBkdXN0XCIsXG4gICAgXCIxIDEvMiB0YnNwIG1pbGsgcG93ZGVyXCIsXG4gICAgXCIxLzIgdGJzcCBzYWx0XCIsXG4gICAgXCIyIHRzcCBmYXN0LWFjdGlvbiBkcmllZCB5ZWFzdFwiLFxuICAgIFwiMS8yIHRic3AgY2FzdGVyIHN1Z2FyXCIsXG4gICAgXCI2MG1sIHN1bmZsb3dlciBvaWxcIixcbiAgICBcIjEgbWVkaXVtIGVnZ1wiLFxuICAgIFwiMTAwbWwgbHVrZXdhcm0gd2F0ZXJcIixcbiAgICBcIk9saXZlIG9pbCBmb3IgYnJ1c2hpbmdcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiU3RhcnQgd2l0aCB0aGUgZG91Z2guIFB1dCB0aGUgZmxvdXIsIG1pbGsgcG93ZGVyLCBzYWx0LCB5ZWFzdCBhbmQgc3VnYXIgaW4gYSBsYXJnZSBtaXhpbmcgYm93bCBhbmQgc3RpciB3ZWxsIHRvIGNvbWJpbmUuXCIsXG4gICAgXCJNYWtlIGEgd2VsbCBpbiB0aGUgY2VudHJlLiBBZGQgdGhlIHN1bmZsb3dlciBvaWwgYW5kIGVnZyBhbmQgc3RpciBhcyB5b3UgYWRkIHRoZSB3YXRlci5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJzcHJpbmctbGFobWFjdW4tdHVya2lzaC1waXp6YVwiXG59LFxuXCJzcHJpbmctZWFzaWVzdC1zcGFnaGV0dGktYW5kLW1lYXRiYWxsc1wiOiB7XG4gIFwidGl0bGVcIjogXCJFYXNpZXN0IFNwYWdoZXR0aSAmIE1lYXRiYWxsc1wiLFxuICBcImV4Y2VycHRcIjogXCJObyBwYXN0YSdzIG1vcmUgaWNvbmljIHRoYW4gc3BhZ2hldHRpIGFuZCBtZWF0YmFsbHNcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk1hcnRoYSBTdGV3YXJ0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lm1hcnRoYXN0ZXdhcnQuY29tLzMzNjUyMy9lYXNpZXN0LXNwYWdoZXR0aS1hbmQtbWVhdGJhbGxzP2N6b25lPWZvb2QlMkZkaW5uZXItdG9uaWdodC1jZW50ZXIlMkZkaW5uZXItdG9uaWdodC1tYWluLWNvdXJzZXMmZ2FsbGVyeT0yNzQ1Mzgmc2xpZGU9MzM2NTIzJmNlbnRlcj0yNzY5NDhcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMzAgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiQ29hcnNlIHNhbHQgYW5kIGdyb3VuZCBwZXBwZXJcIixcbiAgICBcIjEvNCBjdXAgZmluZWx5IGdyYXRlZCBQYXJtZXNhbiwgcGx1cyBtb3JlIGZvciBzZXJ2aW5nXCIsXG4gICAgXCIxLzQgY3VwIGNob3BwZWQgZnJlc2ggcGFyc2xleVwiLFxuICAgIFwiMiBnYXJsaWMgY2xvdmVzLCBtaW5jZWRcIixcbiAgICBcIjEgbGFyZ2UgZWdnXCIsXG4gICAgXCIxIHBvdW5kIGdyb3VuZCBiZWVmIGNodWNrXCIsXG4gICAgXCIxLzQgY3VwIHBsYWluIGRyaWVkIGJyZWFkY3J1bWJzXCIsXG4gICAgXCIxIHRhYmxlc3Bvb24gb2xpdmUgb2lsXCIsXG4gICAgXCIxIGNhbiAoMjggb3VuY2VzKSBjcnVzaGVkIHRvbWF0b2VzIGluIHB1cmVlXCIsXG4gICAgXCIzLzQgcG91bmQgc3BhZ2hldHRpXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlNldCBhIGxhcmdlIHBvdCBvZiBzYWx0ZWQgd2F0ZXIgdG8gYm9pbC4gSW4gYSBib3dsLCBjb21iaW5lIFBhcm1lc2FuLCBwYXJzbGV5LCBnYXJsaWMsIGVnZywgMSB0ZWFzcG9vbiBzYWx0LCBhbmQgMSB0ZWFzcG9vbiBwZXBwZXIuIEFkZCBiZWVmIGFuZCBicmVhZGNydW1iczsgbWl4IGdlbnRseS4gRm9ybSBpbnRvIDE2IGJhbGxzLlwiLFxuICAgIFwiSW4gYSA1LXF1YXJ0IER1dGNoIG92ZW4gb3IgaGVhdnkgcG90LCBoZWF0IG9pbCBvdmVyIG1lZGl1bS4gQWRkIG1lYXRiYWxscywgYW5kIGNvb2ssIHR1cm5pbmcgb2NjYXNpb25hbGx5LCB1bnRpbCBicm93bmVkLCA4IHRvIDEwIG1pbnV0ZXMuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3ByaW5nLWVhc2llc3Qtc3BhZ2hldHRpLWFuZC1tZWF0YmFsbHNcIlxufSxcblwic3VtbWVyLXNoYWtpbmctYmVlZlwiOiB7XG4gIFwidGl0bGVcIjogXCJTbGFudGVkIERvb3IncyBTaGFraW5nIEJlZWZcIixcbiAgXCJleGNlcnB0XCI6IFwiQ3ViZXMgb2YgdGVuZGVyIGZpbGV0IG1pZ25vbiBhcmUgc2F1dMOpZWQgd2l0aCByZWQgb25pb25zIGFuZCBhIHZpbmFpZ3JldHRlXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCI3eDcgbWFnYXppbmVcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuN3g3LmNvbS9yZWNpcGVzL3NlY3JldC1yZWNpcGUtc2xhbnRlZC1kb29ycy1zaGFraW5nLWJlZWZcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMjUgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMSAxLzIgLSAyIHBvdW5kcyBmaWxldCBtaWdub24sIGZhdCB0cmltbWVkIGFuZCBjdXQgaW50byAxIDEvNC1pbmNoIGN1YmVzXCIsXG4gICAgXCIxIHRlYXNwb29ucyBncm91bmQgYmxhY2sgcGVwcGVyXCIsXG4gICAgXCIxLzIgY3VwIHBsdXMgMSB0YWJsZXNwb29uIGNhbm9sYSBvaWxcIixcbiAgICBcIjEgY3VwIHRoaW5seSBzbGljZWQgcmVkIG9uaW9uLCBwcmVmZXJhYmx5IHNwcmluZyBvbmlvbnNcIixcbiAgICBcIjMgc3RhbGtzIGdyZWVuIG9uaW9uLCB0cmltbWVkIGFuZCBjdXQgdG8gMS1pbmNoIGxlbmd0aHNcIixcbiAgICBcIjEgdGFibGVzcG9vbiBjaG9wcGVkIGdhcmxpY1wiLFxuICAgIFwiMiB0YWJsZXNwb29ucyB1bnNhbHRlZCBidXR0ZXJcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgd2hpdGUgdmluZWdhclwiLFxuICAgIFwiMS80IGN1cCB3aGl0ZSBncmFudWxhdGVkIHN1Z2FyXCIsXG4gICAgXCIxLzQgY3VwIGxpZ2h0IHNveSBzYXVjZVwiLFxuICAgIFwiMS80IGN1cCBmaXNoIHNhdWNlXCIsXG4gICAgXCIxIHRlYXNwb29uIGNvb2tpbmcgcmljZSB3aW5lXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIk1hcmluYXRlIG1lYXQgMS8yIHRlYXNwb29uIGJsYWNrIHBlcHBlciBhbmQgMSB0YWJsZXNwb29uIG9pbCBmb3IgYWJvdXQgMiBob3Vycy5cIixcbiAgICBcIk1lYW53aGlsZSwgbWFrZSB0aGUgc3Rpci1mcnkgc2F1Y2UgYnkgY29tYmluaW5nIHRoZSB3aGl0ZSB2aW5lZ2FyLCBzdWdhciwgc295LCBmaXNoIHNhdWNlLCBhbmQgcmljZSB3aW5lLiBNaXggdW50aWwgc3VnYXIgaXMgZGlzc29sdmVkLiBTZXQgYXNpZGUuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3VtbWVyLXNoYWtpbmctYmVlZlwiXG59LFxuXCJzdW1tZXItYmF2YXJpYW4tcHJldHplbFwiOiB7XG4gIFwidGl0bGVcIjogXCJCYXZhcmlhbi1zdHlsZSBTb2Z0IFByZXR6ZWxcIixcbiAgXCJleGNlcnB0XCI6IFwiXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJOWSBUaW1lc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5ueXRpbWVzLmNvbS8yMDEwLzA1LzI2L2RpbmluZy8yNnByZXR6ZWxyZXgxLmh0bWxcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMSBociAzMCBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCIxIHRhYmxlc3Bvb24gYmFybGV5IG1hbHQgc3lydXAgb3IgZGFyayBicm93biBzdWdhclwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyBsYXJkIG9yIHNvZnRlbmVkIHVuc2FsdGVkIGJ1dHRlclwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyBpbnN0YW50IHllYXN0XCIsXG4gICAgXCI2IGN1cHMgKGFib3V0IDMwIG91bmNlcykgYnJlYWQgZmxvdXJcIixcbiAgICBcIjEgdGFibGVzcG9vbiBwbHVzIDEvMiB0ZWFzcG9vbiBrb3NoZXIgc2FsdFwiLFxuICAgIFwiRm9vZC1ncmFkZSBseWUsIGZvciBkaXBwaW5nXCIsXG4gICAgXCJDb2Fyc2Ugc2VhIHNhbHQgb3IgcHJldHplbCBzYWx0LCBmb3Igc3ByaW5rbGluZyAoZG8gbm90IHN1YnN0aXR1dGUga29zaGVyIHNhbHQpXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIkluIGEgbWl4aW5nIGJvd2wgKG9yIGJvd2wgb2YgYSBtaXhlciksIHN0aXIgdG9nZXRoZXIgc3lydXAsIGxhcmQgb3IgYnV0dGVyLCB5ZWFzdCwgMiBjdXBzIHdhcm0gd2F0ZXIgYW5kIGhhbGYgdGhlIGZsb3VyLiBBZGQga29zaGVyIHNhbHQgYW5kIHJlbWFpbmluZyBmbG91ciBhbmQgc3RpciBqdXN0IHVudGlsIG1peHR1cmUgY29tZXMgdG9nZXRoZXIgaW4gYSBzaGFnZ3kgbWFzcy5cIixcbiAgICBcIlR1cm4gb3V0IG9udG8gY291bnRlciAob3IgYXR0YWNoIGRvdWdoIGhvb2sgdG8gbWl4ZXIpIGFuZCBrbmVhZCBmb3IgOCB0byAxMCBtaW51dGVzLCB1bnRpbCBzbW9vdGggYW5kIHN1cHBsZS4gQ3V0IGludG8gMTIgcGllY2VzIGFuZCBsZXQgcmVzdCA1IG1pbnV0ZXMuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3VtbWVyLWJhdmFyaWFuLXByZXR6ZWxcIlxufSxcblwic3VtbWVyLWFwcmljb3RzLWhvbmV5LXBhbm5hLWNvdHRhXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkFwcmljb3RzIEhvbmV5IFBhbm5hIENvdHRhXCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiSnVpY3ksIGZyYWdyYW50LCBwZXJmZWN0bHkgdGV4dHVyZWQgZm9yIGEgbGl0dGxlIGZpcmUgYWN0aW9uXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJUYXJ0ZWxldHRlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRhcnRlbGV0dGVibG9nLmNvbS8yMDExLzA3L3JlY2lwZS1nbHV0ZW4tZnJlZS1hcHJpY290cy1ob25leS1wYW5uYS5odG1sXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjM1IG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjYgYXByaWNvdHNcIixcbiAgICBcIm9saXZlIG9pbFwiLFxuICAgIFwiMS80IGN1cCB3YXRlclwiLFxuICAgIFwiMSB0YWJsZXNwb29uIHBvd2RlcmVkIGdlbGF0aW4gKDIgc2hlZXRzIGdlbGF0aW4pXCIsXG4gICAgXCIyIGN1cHMgaGVhdnkgY3JlYW1cIixcbiAgICBcIjEvNCBjdXAgaG9uZXlcIixcbiAgICBcIjEgY3VwIGZ1bGwgZmF0IGJ1dHRlcm1pbGtcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiQ3V0IHRoZSBhcHJpY290cyBpbiBoYWxmIGFuZCByZW1vdmUgdGhlIHBpdC4gQnJ1c2ggbGlnaHRseSB3aXRoIG9saXZlIG9pbCBhbmQgZ3JpbGwgb3ZlciBob3QgY29hbHMgdW50aWwgdGVuZGVyIChhYm91dCAzLTQgbWludXRlcyBvbiBlYWNoIHNpZGUpLlwiLFxuICAgIFwiTGV0IGNvb2wgYW5kIHB1cmVlIHVudGlsIHNtb290aCBpbiBhIGZvb2QgcHJvY2Vzc29yLiBEaXZpZGUgdGhlIG1peHR1cmUgYmV0d2VlbiA2IGdsYXNzZXMuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3VtbWVyLWFwcmljb3RzLWhvbmV5LXBhbm5hLWNvdHRhXCJcbn0sXG5cInN1bW1lci1lbGRlcmJlcnJ5LXN5cnVwXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkVsZGVyYmVycnkgU3lydXBcIixcbiAgXCJleGNlcnB0XCI6IFwiVGhlIGdvcmdlb3VzIHN5cnVwIGlzIGdyZWF0IGluIGEgZ2xhc3Mgb2Ygc3BhcmtsaW5nIHdhdGVyIG92ZXIgaWNlLCBkcmlwcGVkIHNvbWUgb3ZlciBwbGFpbiB5b2d1cnRcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIkRhdmlkIExlYm92aXR6XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmRhdmlkbGVib3ZpdHouY29tLzIwMDcvMDgvcmVzcGVjdC15b3VyLWVsL1wiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIzNSBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCIyIHBvdW5kcyAoMWtnKSBlbGRlcmJlcnJpZXMsIHN0ZW1zIHJlbW92ZWQgYW5kIHJpbnNlZFwiLFxuICAgIFwiNCBjdXBzICgxbCkgd2F0ZXJcIixcbiAgICBcIjIgMS8yICg1MDBnKSBjdXBzIHN1Z2FyXCIsXG4gICAgXCJzcXVpcnQgb2YgZnJlc2hseS1zcXVlZXplZCBsZW1vbiBqdWljZVwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJQdXQgdGhlIGVsZGVyYmVycmllcyBpbiBhIGxhcmdlLCBub24tcmVhY3RpdmUgcG90IHdpdGggdGhlIHdhdGVyLiBCcmluZyB0byBhIGJvaWwsIHRoZW4gcmVkdWNlIGhlYXQgdG8gYSBsb3cgYm9pbCBhbmQgY29vayBmb3IgMTUtMjAgbWludXRlcywgdW50aWwgdGVuZGVyIGFuZCBzb2Z0LlwiLFxuICAgIFwiUGFzcyB0aHJvdWdoIGEgZm9vZCBtaWxsLCB0aGVuIGRpc2NhcmQgdGhlIHNraW5zLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcInN1bW1lci1lbGRlcmJlcnJ5LXN5cnVwXCJcbn0sXG5cInN1bW1lci1zcGFnaGV0dGktbGVtb24tb2xpdmVcIjoge1xuICBcInRpdGxlXCI6IFwiU3BhZ2hldHRpIHdpdGggTGVtb24gJiBPbGl2ZSBPaWxcIixcbiAgXCJleGNlcnB0XCI6IFwiVGhpcyBpcyBvbmUgb2YgdGhvc2UgcmVjaXBlcyB0aGF0IGFyZSBhbG1vc3QgYmV0dGVyIG9mZiB3aXRob3V0IG9uZVwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiU21pdHRlbiBLaXRjaGVuXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vc21pdHRlbmtpdGNoZW4uY29tL2Jsb2cvMjAxMS8wMi9zcGFnaGV0dGktd2l0aC1sZW1vbi1hbmQtb2xpdmUtb2lsLWFsLWxpbW9uZS9cIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMjAgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMSBwb3VuZCBzcGFnaGV0dGkgb3IgbGluZ3VpbmVcIixcbiAgICBcIlNhbHRcIixcbiAgICBcIjMgbGVtb25zXCIsXG4gICAgXCIxLzQgY3VwIGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWwgLCBwbHVzIGFkZGl0aW9uYWwgZm9yIHNlcnZpbmdcIixcbiAgICBcIjEvNCBjdXAgaGVhdnkgY3JlYW1cIixcbiAgICBcIjEgb3VuY2UgZmluZWx5IGdyYXRlZCBQYXJtZXNhbiBjaGVlc2UgKGFib3V0IDEvMiBjdXApLCBwbHVzIGFkZGl0aW9uYWwgZm9yIHNlcnZpbmdcIixcbiAgICBcIkdyb3VuZCBibGFjayBwZXBwZXJcIixcbiAgICBcIlNtYWxsIGhhbmRmdWwgZnJlc2ggYmFzaWwgb3IgYXJ1Z3VsYSBsZWF2ZXMsIHNocmVkZGVkXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIkNvb2sgbGluZ3VpbmUgb3Igc3BhZ2hldHRpIGluIHdlbGwtc2FsdGVkIHdhdGVyIHRvIHlvdXIgYWwgZGVudGUgdGFzdGVzIGluIGEgbGFyZ2UsIHdpZGUtYm90dG9tZWQgcG90LlwiLFxuICAgIFwiV2hpbGUgcGFzdGEgaXMgY29va2luZywgemVzdCBsZW1vbnMgdW50aWwgeW91IGhhdmUgYSBsaXR0bGUgc2h5IG9mIGEgdGFibGVzcG9vbiBvZiB6ZXN0LiBKdWljZSBsZW1vbnMg4oCUIHlvdeKAmWxsIGhhdmUgYW55d2hlcmUgZnJvbSAxLzMgdG8gMS8yIGN1cCBsZW1vbiBqdWljZS5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJzdW1tZXItc3BhZ2hldHRpLWxlbW9uLW9saXZlXCJcbn0sXG5cInN1bW1lci1ob21lbWFkZS1wYXN0YS1kb3VnaFwiOiB7XG4gIFwidGl0bGVcIjogXCJIb21lbWFkZSBQYXN0YSBEb3VnaFwiLFxuICBcImV4Y2VycHRcIjogXCJcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk1hcmlvIEJhdGFsaVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5tYXJpb2JhdGFsaS5jb20vcmVjaXBlcy9iYXNpYy1wYXN0YS1kb3VnaC9cIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMjUgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMiBDdXBzIEFsbC1QdXJwb3NlIEZsb3VyXCIsXG4gICAgXCIyIEN1cHMgMDAgRmxvdXIgb3IgNCBjdXBzIEFsbC1QdXJwb3NlIEZsb3VyXCIsXG4gICAgXCI0IGxhcmdlIEVnZ3NcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiTW91bmQgdGhlIGZsb3VyIGluIHRoZSBjZW50ZXIgb2YgYSBsYXJnZSB3b29kZW4gYm9hcmQuIE1ha2UgYSB3ZWxsIGluIHRoZSBjZW50ZXIgb2YgdGhlIGZsb3VyIGFuZCBhZGQgdGhlIGVnZ3MuIFVzaW5nIGEgZm9yaywgYmVhdCB0aGUgZWdncyB0b2dldGhlciBhbmQgdGhlbiBiZWdpbiB0byBpbmNvcnBvcmF0ZSB0aGUgZmxvdXI7IHN0YXJ0aW5nIHdpdGggdGhlIGlubmVyIHJpbSBvZiB0aGUgd2VsbC4gQXMgeW91IGV4cGFuZCB0aGUgd2VsbCwga2VlcCBwdXNoaW5nIHRoZSBmbG91ciB1cCB0byByZXRhaW4gdGhlIHdlbGwgc2hhcGUgKGRvIG5vdCB3b3JyeSBpZiBpdCBsb29rcyBtZXNzeSkuXCIsXG4gICAgXCJXaGVuIGhhbGYgb2YgdGhlIGZsb3VyIGlzIGluY29ycG9yYXRlZCwgdGhlIGRvdWdoIHdpbGwgYmVnaW4gdG8gY29tZSB0b2dldGhlci4gU3RhcnQga25lYWRpbmcgdGhlIGRvdWdoLCB1c2luZyBwcmltYXJpbHkgdGhlIHBhbG1zIG9mIHlvdXIgaGFuZHMuIE9uY2UgdGhlIGRvdWdoIGlzIGEgY29oZXNpdmUgbWFzcywgc2V0IHRoZSBkb3VnaCBhc2lkZSBhbmQgc2NyYXBlIHVwIGFuZCBkaXNjYXJkIGFueSBkcmllZCBiaXRzIG9mIGRvdWdoLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcInN1bW1lci1ob21lbWFkZS1wYXN0YS1kb3VnaFwiXG59LFxuXCJzdW1tZXItaGFtYnVyZ2VyXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkRpbmVyIFN0eWxlIEhhbWJ1cmdlcnNcIixcbiAgXCJleGNlcnB0XCI6IFwiVGhpcyBpcyB0aGUgdHJhZGl0aW9uYWwsIGdyaWRkbGVkIGhhbWJ1cmdlciBvZiBkaW5lcnMgYW5kIHRha2Vhd2F5IHNwb3RzLCBzbWFzaGVkIHRoaW4gYW5kIGNvb2tlZCBjcmlzcCBvbiBpdHMgZWRnZXNcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk5ZIFRpbWVzXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lm55dGltZXMuY29tL3JlY2lwZXMvMTAxNjU5NS9oYW1idXJnZXJzLWRpbmVyLXN0eWxlLmh0bWxcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMjAgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMS8yIHRlYXNwb29uIG5ldXRyYWwgb2lsLCBsaWtlIGNhbm9sYSwgb3IgYSBwYXQgb2YgdW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgXCIyIHBvdW5kcyBncm91bmQgY2h1Y2ssIGF0IGxlYXN0IDIwIHBlcmNlbnQgZmF0XCIsXG4gICAgXCJLb3NoZXIgc2FsdCBhbmQgYmxhY2sgcGVwcGVyIHRvIHRhc3RlXCIsXG4gICAgXCI4IHNsaWNlcyBjaGVlc2UgKG9wdGlvbmFsKVwiLFxuICAgIFwiOCBzb2Z0IGhhbWJ1cmdlciBidW5zLCBsaWdodGx5IHRvYXN0ZWRcIixcbiAgICBcIkxldHR1Y2UgbGVhdmVzLCBzbGljZWQgdG9tYXRvZXMgYW5kIGNvbmRpbWVudHNcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiQWRkIG9pbCBvciBidXR0ZXIgdG8gYSBsYXJnZSBjYXN0LWlyb24gb3Igc3RhaW5sZXNzLXN0ZWVsIHNraWxsZXQgYW5kIHBsYWNlIG92ZXIgbWVkaXVtIGhlYXQuIEdlbnRseSBkaXZpZGUgZ3JvdW5kIGJlZWYgaW50byA4IHNtYWxsIHBpbGVzIG9mIGFyb3VuZCA0IG91bmNlcyBlYWNoLCBhbmQgZXZlbiBtb3JlIGdlbnRseSBnYXRoZXIgdGhlbSB0b2dldGhlciBpbnRvIG9yYnMgdGhhdCBhcmUgYWJvdXQgMiBpbmNoZXMgaW4gaGVpZ2h0LiBEbyBub3QgZm9ybSBwYXR0aWVzLlwiLFxuICAgIFwiSW5jcmVhc2UgaGVhdCB1bmRlciBza2lsbGV0IHRvIGhpZ2guIFB1dCBoYWxmIHRoZSBvcmJzIGludG8gdGhlIHNraWxsZXQgd2l0aCBwbGVudHkgb2YgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGFuZCwgdXNpbmcgYSBzdGlmZiBtZXRhbCBzcGF0dWxhLCBwcmVzcyBkb3duIG9uIGVhY2ggb25lIHRvIGZvcm0gYSBidXJnZXIgdGhhdCBpcyBhcm91bmQgNCBpbmNoZXMgaW4gZGlhbWV0ZXIgYW5kIGFib3V0IDEvMiBpbmNoIHRoaWNrLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwic3VtbWVyLWhhbWJ1cmdlclwiXG59LFxuXCJmYWxsLXJvYXN0ZWQtYnV0dGVybnV0LXNxdWFzaC1sYXNhZ25hXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIlJvYXN0ZWQgQnV0dGVybnV0IFNxdWFzaCBMYXNhZ25hXCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiTWFraW5nIGhvbWVtYWRlIHBhc3RhIG1heSBzZWVtIGFyZHVvdXMsIGJ1dCB0aGlzIGRpc2ggaXMgd29ydGggdGhlIGV4dHJhIHdvcmtcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk1hcnRoYSBTdGV3YXJ0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lm1hcnRoYXN0ZXdhcnQuY29tLzg1NzY1Ny9yb2FzdGVkLWJ1dHRlcm51dC1zcXVhc2gtbGFzYWduYVwiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxIGhyIDM1IG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjIgbGFyZ2UgYnV0dGVybnV0IHNxdWFzaGVzIChhYm91dCAyIHBvdW5kcyBlYWNoKSwgaGFsdmVkIGxlbmd0aHdpc2UgYW5kIHNlZWRlZFwiLFxuICAgIFwiMyB0YWJsZXNwb29ucyBleHRyYS12aXJnaW4gb2xpdmUgb2lsXCIsXG4gICAgXCJDb2Fyc2Ugc2FsdCBhbmQgZnJlc2hseSBncm91bmQgcGVwcGVyXCIsXG4gICAgXCIxIHN0aWNrIHVuc2FsdGVkIGJ1dHRlciwgY3V0IGludG8gcGllY2VzXCIsXG4gICAgXCIyIDEvNCBjdXBzIGZpbmVseSBncmF0ZWQgUGFybWVzYW4gY2hlZXNlIChhYm91dCA4IG91bmNlcylcIixcbiAgICBcIjEvMiBjdXAgZmluZWx5IGNydXNoZWQgYW1hcmV0dGkgY29va2llc1wiLFxuICAgIFwiMS80IGN1cCBmaW5lbHkgY2hvcHBlZCBmcmVzaCBzYWdlXCIsXG4gICAgXCIxLzQgdGVhc3Bvb24gZnJlc2hseSBncmF0ZWQgbnV0bWVnXCIsXG4gICAgXCI2IHRhYmxlc3Bvb25zIHVuc2FsdGVkIGJ1dHRlciwgY3V0IGludG8gcGllY2VzXCIsXG4gICAgXCIxLzQgY3VwIHBsdXMgMiB0YWJsZXNwb29ucyBhbGwtcHVycG9zZSBmbG91clwiLFxuICAgIFwiNiBjdXBzIHdob2xlIG1pbGtcIixcbiAgICBcIkNvYXJzZSBzYWx0XCIsXG4gICAgXCIxLzQgdGVhc3Bvb24gZnJlc2hseSBncmF0ZWQgbnV0bWVnXCIsXG4gICAgXCJIb21lbWFkZSBQYXN0YVwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJNYWtlIHRoZSBmaWxsaW5nOiBQcmVoZWF0IG92ZW4gdG8gNDAwIGRlZ3JlZXMuIERyaXp6bGUgc3F1YXNoIGhhbHZlcyB3aXRoIG9pbCwgYW5kIHNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlci4gUm9hc3Qgc3F1YXNoZXMsIGN1dCBzaWRlcyBkb3duLCBvbiBhIHJpbW1lZCBiYWtpbmcgc2hlZXQgdW50aWwgdGVuZGVyIGFuZCBicm93bmVkLCBhYm91dCAxIGhvdXIuIExldCBjb29sLiBTY29vcCBmbGVzaCBmcm9tIHNraW5zLCBhbmQgcHVyZWUgaW4gYSBmb29kIHByb2Nlc3NvciB1bnRpbCBzbW9vdGguXCIsXG4gICAgXCJNZWx0IGJ1dHRlciBpbiBhIHNtYWxsIHNhdWNlcGFuIG92ZXIgbWVkaXVtIGhlYXQuIENvbnRpbnVlIHRvIGNvb2sgdW50aWwgYnJvd25lZCBhbmQgZnJhZ3JhbnQsIGFib3V0IDMgbWludXRlcy4gVHJhbnNmZXIgdG8gYSBib3dsLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtcm9hc3RlZC1idXR0ZXJudXQtc3F1YXNoLWxhc2FnbmFcIlxufSxcblwic3VtbWVyLWdyaXRzLWljZWNyZWFtXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkdyaXRzIFByYWxpbmUgJiBCcm93biBCdXR0ZXIgSWNlIENyZWFtXCIsXG4gIFwiZXhjZXJwdFwiOiBcIlxcXCJEZWNhZGVudFxcXCIgaXNu4oCZdCBhIHdvcmQgd2UgdGhyb3cgYXJvdW5kIGxpZ2h0bHlcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIkFuc29uIE1pbGxzXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmFuc29ubWlsbHMuY29tL3JlY2lwZXMvNDgwP3JlY2lwZXNfYnk9Z3JhaW5cIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMiBociAyMCBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCIyIG91bmNlcyAoNCB0YWJsZXNwb29ucykgRXVyb3BlYW4tc3R5bGUgdW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgXCIxIGN1cCBoZWF2eSBjcmVhbVwiLFxuICAgIFwiMSBjdXAgd2hvbGUgbWlsa1wiLFxuICAgIFwiNiBsYXJnZSBlZ2cgeW9sa3NcIixcbiAgICBcIjEvMyBjdXAgc3VnYXJcIixcbiAgICBcIjEgMS8yIHRlYXNwb29ucyB2YW5pbGxhIGV4dHJhY3RcIixcbiAgICBcIjEvOCB0ZWFzcG9vbiBmaW5lIHNlYSBzYWx0XCIsXG4gICAgXCIyIG91bmNlcyBBbnNvbiBNaWxscyBBbnRlYmVsbHVtIENvYXJzZSBZZWxsb3cgR3JpdHMgb3IgQW50ZWJlbGx1bSBDb2Fyc2UgV2hpdGUgR3JpdHNcIixcbiAgICBcIjIgMS8yIGN1cHMgc3ByaW5nIG9yIGZpbHRlcmVkIHdhdGVyXCIsXG4gICAgXCIxIHRlYXNwb29uIGZpbmUgc2VhIHNhbHRcIixcbiAgICBcIjMuNSBvdW5jZXMgc3VnYXJcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiTWFrZSB0aGUgaWNlIGNyZWFtIGJhc2U6IFNldCBhIGxhcmdlIGJvd2wgaW4gYSBzaW5rIG9yIGJhc2luIGZpbGxlZCB3aXRoIGxvdHMgKGF0IGxlYXN0IDMgcXVhcnRzKSBvZiBpY2UgY3ViZXMgYW5kIGNvbGQgd2F0ZXIuIEhhdmUgYSBmaW5lLW1lc2ggc3RyYWluZXIgbmVhcmJ5LiBNZWx0IHRoZSBidXR0ZXIgaW4gYSBzbWFsbCBoZWF2eS1ib3R0b21lZCBzYXVjZXBhbiBvdmVyIGxvdyBoZWF0LCBzdGlycmluZyB3aXRoIGEgd29vZGVuIHNwb29uIHRvIHNjcmFwZSB0aGUgYnJvd25pbmcgbWlsayBzb2xpZHMgYmFjayBpbnRvIHRoZSBidXR0ZXIsIHVudGlsIHRoZSBidXR0ZXIgaXMgdGhlIGNvbG9yIG9mIGEgaGF6ZWxudXQgaW4gdGhlIHNoZWxsIGFuZCB0aGUga2l0Y2hlbiBzbWVsbHMgbWlyYWN1bG91cywgMyB0byA1IG1pbnV0ZXMuIFB1bGwgdGhlIHBhbiBvZmYgdGhlIGhlYXQgYW5kIHNldCBpdCBhc2lkZS5cIixcbiAgICBcIlBvdXIgdGhlIGNyZWFtIGFuZCBtaWxrIGludG8gYSBtZWRpdW0gaGVhdnktYm90dG9tZWQgc2F1Y2VwYW4gc2V0IG92ZXIgbWVkaXVtLWhpZ2ggaGVhdC4gV2hpc2sgdGhlIGVnZyB5b2xrcyBhbmQgc3VnYXIgaW4gYSBtZWRpdW0gYm93bC4gRHJpenpsZSB0aGUgaG90IGJ1dHRlciBjYXV0aW91c2x5IGludG8gdGhlIHlvbGstc3VnYXIgbWl4dHVyZSBhIGxpdHRsZSBhdCBhIHRpbWUsIHdoaXNraW5nIHdlbGwgYXMgeW91IGRvLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcInN1bW1lci1ncml0cy1pY2VjcmVhbVwiXG59LFxuXCJmYWxsLXBlYW51dC1idXR0ZXItY29va2llXCI6IHtcbiAgXCJ0aXRsZVwiOiBcIlBlYW51dCBCdXR0ZXIgQ29va2llIHdpdGggU2FsdGVkIFBlYW51dCBDYXJhbWVsXCIsXG4gIFwiZXhjZXJwdFwiOiBcIlRoaXMgcmVjaXBlIHRha2VzIFBlYW51dCBCdXR0ZXIgQ29va2llcyB0byB0aGUgbmV4dCBsZXZlbFwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiRGF2aWQgTGVib3ZpdHpcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZGF2aWRsZWJvdml0ei5jb20vMjAwOC8xMi9wZWFudXQtYnV0dGVyLWNvb2tpZXMtd2l0aC1zYWx0ZS0xL1wiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCI0NSBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCI4IHRhYmxlc3Bvb25zICgxMTVnKSB1bnNhbHRlZCBidXR0ZXIsIGF0IHJvb20gdGVtcGVyYXR1cmVcIixcbiAgICBcIjEvMiBjdXAgKDEyMGcpIHBhY2tlZCBsaWdodCBicm93biBzdWdhclwiLFxuICAgIFwiMS8yIGN1cCAoMTAwZykgZ3JhbnVsYXRlZCBzdWdhclwiLFxuICAgIFwiMSBsYXJnZSBlZ2csIGF0IHJvb20gdGVtcGVyYXR1cmVcIixcbiAgICBcIjEgdGVhc3Bvb24gdmFuaWxsYSBleHRyYWN0XCIsXG4gICAgXCIzLzQgY3VwICgyMDBnKSBjcmVhbXkgc2FsdGVkIHBlYW51dCBidXR0ZXJcIixcbiAgICBcIjEgMy80IGN1cHMgKDI1MGcpIGZsb3VyXCIsXG4gICAgXCIxLzIgdGVhc3Bvb24gYmFraW5nIHNvZGFcIixcbiAgICBcIjEvNCB0ZWFzcG9vbiBzYWx0XCIsXG4gICAgXCIxIGN1cCAoMjUwbWwpIGhlYXZ5IGNyZWFtXCIsXG4gICAgXCIxLzIgY3VwICgxMjVtbCkgd2F0ZXJcIixcbiAgICBcIjEgY3VwICgyMDBnKSBncmFudWxhdGVkIHN1Z2FyXCIsXG4gICAgXCIxIHRhYmxlc3Bvb24gbGlnaHQgY29ybiBzeXJ1cCBvciBnbHVjb3NlXCIsXG4gICAgXCIxLzggdGVhc3Bvb24gY29hcnNlIHNhbHRcIixcbiAgICBcIjMvNCBjdXAgKDEwMGcpIGZpbmVseSBjaG9wcGVkIHJvYXN0ZWQgc2FsdGVkIHBlYW51dHNcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTBGIGFuZCBsaW5lIHR3byBiYWtpbmcgc2hlZXRzIHdpdGggcGFyY2htZW50IHBhcGVyIG9yIHNpbGljb25lIGJha2luZyBtYXRzLlwiLFxuICAgIFwiV2l0aCBhbiBlbGVjdHJpYyBtaXhlciwgb3IgYnkgaGFuZCwgbWFrZSB0aGUgY29va2llIGRvdWdoIGJ5IGJlYXRpbmcgdGhlIGJ1dHRlciwgYnJvd24gYW5kIGdyYW51bGF0ZWQgc3VnYXIgdW50aWwgc21vb3RoLiBCZWF0IGluIHRoZSBlZ2cgYW5kIHZhbmlsbGEgdW50aWwgd2VsbCBibGVuZGVkLiBJZiB1c2luZyBhbiBlbGVjdHJpYyBtaXhlciwgc2NyYXBlIGRvd24gdGhlIHNpZGVzIG9mIHRoZSBib3dsLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtcGVhbnV0LWJ1dHRlci1jb29raWVcIlxufSxcblwiZmFsbC1hbWF0cmljaWFuYVwiOiB7XG4gIFwidGl0bGVcIjogXCJCdWNhdGluaSBhbGwnIEFtYXRyaWNpYW5hXCIsXG4gIFwiZXhjZXJwdFwiOiBcIlRoaXMgZGlzaCBpcyBuYW1lZCBmb3IgdGhlIHRvd24gb2YgQW1hdHJpY2UuLi5jb25zaWRlcmVkIGJ5IG1hbnkgSXRhbGlhbnMgdG8gYmUgYmlydGhwbGFjZSBvZiB0aGUgYmVzdCBjb29rcyBvbiB0aGUgcGVuaW5zdWxhXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJNYXJpbyBCYXRhbGlcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cubWFyaW9iYXRhbGkuY29tL3JlY2lwZXMvYnVjYXRpbmktYWxsYW1hdHJpY2lhbmEvXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjMwIG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjEvNCBjdXAgZXh0cmEtdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgIFwiMTIgb3VuY2VzIHRoaW5seSBzbGljZWQgZ3VhbmNpYWxlIHBhbmNldHRhLCBvciBnb29kIGJhY29uXCIsXG4gICAgXCIxIHJlZCBvbmlvbiwgY3V0IGxlbmd0aHdpc2UgaW4gaGFsZiBhbmQgdGhlbiBpbnRvIDEvNC1pbmNoLXRoaWNrIGhhbGYtbW9vbnNcIixcbiAgICBcIjMgY2xvdmVzIGdhcmxpYywgc2xpY2VkXCIsXG4gICAgXCIxIDEvMiB0ZWFzcG9vbnMgaG90IHJlZCBwZXBwZXIgZmxha2VzXCIsXG4gICAgXCIyIGN1cHMgQmFzaWMgVG9tYXRvIFNhdWNlXCIsXG4gICAgXCIxIHBvdW5kIEJ1Y2F0aW5pXCIsXG4gICAgXCJGcmVzaGx5IGdyYXRlZCBQZWNvcmlubyBSb21hbm9cIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiQnJpbmcgNiBxdWFydHMgb2Ygd2F0ZXIgdG8gYSBib2lsIGluIGEgbGFyZ2UgcG90LCBhbmQgYWRkIDIgdGFibGVzcG9vbnMgc2FsdC5cIixcbiAgICBcIk1lYW53aGlsZSwgaW4gYSAxMC0gdG8gMTItaW5jaCBzYXV0ZSBwYW4sIGNvbWJpbmUgdGhlIG9saXZlIG9pbCwgZ2FuY2lhbGUsIG9uaW9uLCBnYXJsaWMsIGFuZCByZSBwZXBwZXIgZmxha2VzOyBzZXQgb3ZlciBsb3cgaGVhdCBhbmQgY29vayB1bnRpbCB0aGUgb25pb24gaXMgc29mdGVuZWQgYW5kIHRoZSBndWFuY2lhbGUgaGFzIHJlbmRlcmVkIG11Y2ggb2YgaXRzIGZhdCwgYWJvdXQgMTIgbWludXRlcy5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJmYWxsLWFtYXRyaWNpYW5hXCJcbn0sXG5cImZhbGwtb3JlY2NoaWV0dGUtc2F1c2FnZS1yYWd1XCI6IHtcbiAgXCJ0aXRsZVwiOiBcIk9yZWNjaGlldHRlIHdpdGggcmVkIGxhbWIgc2F1c2FnZSAmIGNhcnJvdHNcIixcbiAgXCJleGNlcnB0XCI6IFwiQ2hlZiBkaSBDdWNpbmEgTWF0dCBBYmRvbyBleHBvdW5kZWQgb24gdGhlIHZpcnR1ZXMgb2YgdGhlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrIG9mIEl0YWxpYW4gY29va2luZzogZnJlc2ggcGFzdGFcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk1hcmlvIEJhdGFsaVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5tYXJpb2JhdGFsaS5jb20vcmVjaXBlcy9vcmVjY2hpZXR0ZS13aXRoLXJlZC1sYW1iLXNhdXNhZ2UtY2Fycm90cy9cIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiNDUgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMSBwb3VuZCBncm91bmQgbGFtYlwiLFxuICAgIFwiMSAxLzIgdGVhc3Bvb25zIHNhbHRcIixcbiAgICBcIjEgdGFibGVzcG9vbiByZWQgd2luZVwiLFxuICAgIFwiMSB0ZWFzcG9vbiBjYXllbm5lIHBlcHBlclwiLFxuICAgIFwiMiB0ZWFzcG9vbnMgZ2FybGljIHB1csOpZVwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyByb2FzdGVkIHJlZCBwZXBwZXIgcHVyw6llXCIsXG4gICAgXCIxIHRlYXNwb29uIGZyZXNobHkgZ3JvdW5kIGJsYWNrIHBlcHBlclwiLFxuICAgIFwiMiB0YWJsZXNwb29ucyBzd2VldCBwYXByaWthXCIsXG4gICAgXCIxIHRlYXNwb29uIHNtb2tlZCBwYXByaWthXCIsXG4gICAgXCIxIHBpbnQgY2Fycm90IGp1aWNlXCIsXG4gICAgXCIyIGN1cHMgZGljZWQgY2Fycm90c1wiLFxuICAgIFwiMiBjdXBzIGNob3BwZWQgY2Fycm90c1wiLFxuICAgIFwiMSB0ZWFzcG9vbiBzdWdhclwiLFxuICAgIFwiT3JhbmdlIHplc3QsIHRvIHRhc3RlXCIsXG4gICAgXCJTYWx0IGFuZCBwZXBwZXIsIHRvIHRhc3RlXCIsXG4gICAgXCIxLzQgY3VwIGNoaWNrZW4gc3RvY2tcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgb2YgdW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgXCIxIHBvdW5kIG9yZWNjaGlldHRlIHBhc3RhXCIsXG4gICAgXCIxLzQgY3VwIHBlY29yaW5vIGNoZWVzZVwiLFxuICAgIFwiRXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgIFwiQnJlYWRjcnVtYnMsIGZvciBnYXJuaXNoXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlRvIG1ha2UgdGhlIHNwaWNlIG1peHR1cmUgZm9yIHRoZSBzYXVzYWdlOiBJbiBhIGJvd2wsIGNvbWJpbmUgc3BpY2VzLCBsYW1iLCBzYWx0LCBhbmQgd2F0ZXIuIEluY29ycG9yYXRlIHRob3JvdWdobHkgdXNpbmcgeW91ciBoYW5kcy4gU2V0IGFzaWRlLlwiLFxuICAgIFwiVG8gbWFrZSB0aGUgY2Fycm90IHB1cmVlOiBDb29rIGNhcnJvdHMgaW4gY2Fycm90IGp1aWNlIHVudGlsIHRlbmRlci4gU3RyYWluLCBhbmQgcmVzZXJ2ZSB0aGUgZGljZWQgY2Fycm90cy4gUHVyZWUgdGhlIHJlbWFpbmluZyBjaG9wcGVkIGNhcnJvdHMuIFNlYXNvbiB3aXRoIG9yYW5nZSB6ZXN0LCBzYWx0IGFuZCBwZXBwZXIgdG8gdGFzdGUuICBGb2xkIHRoZSBkaWNlZCBjYXJyb3RzIGludG8gdGhlIHNlYXNvbmVkIGNhcnJvdCBwdXJlZS4gU2V0IGFzaWRlLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtb3JlY2NoaWV0dGUtc2F1c2FnZS1yYWd1XCJcbn0sXG5cIndpbnRlci1icmFpc2VkLWR1Y2tcIjoge1xuICBcInRpdGxlXCI6IFwiSXRhbGlhbiBSZWQtV2luZSBCcmFpc2VkIER1Y2sgdy8gT2xpdmUgR3JlbW9sYXRhXCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiQSBnb29kIGJyYWlzZSBhbHdheXMgdHJ1bXBzIGEgc3RlYWsgb3IgYSByb2FzdCwgYm90aCBpbiB0ZXJtcyBvZiBjb21wbGV4IGZsYXZvcnMgYW5kIHNhdGlzZmFjdGlvblwiLFxuICBcInNvdXJjZVwiOiB7XG4gICAgXCJuYW1lXCI6IFwiTlkgVGltZXNcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cubnl0aW1lcy5jb20vcmVjaXBlcy8xMDE0NDI0L2l0YWxpYW4tcmVkLXdpbmUtYnJhaXNlZC1kdWNrLXdpdGgtb2xpdmUtZ3JlbW9sYXRhLmh0bWxcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMiBociAzMCBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCI0IE11c2NvdnkgZHVjayBsZWdzIChhYm91dCA0IHBvdW5kcyksIHVudHJpbW1lZFwiLFxuICAgIFwiU2FsdCBhbmQgcGVwcGVyXCIsXG4gICAgXCIxLzIgdGVhc3Bvb24gY29yaWFuZGVyIHNlZWQsIHRvYXN0ZWQgYW5kIGNvYXJzZWx5IGdyb3VuZFwiLFxuICAgIFwiMS8yIHRlYXNwb29uIGZlbm5lbCBzZWVkLCB0b2FzdGVkIGFuZCBjb2Fyc2VseSBncm91bmRcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgb2xpdmUgb2lsXCIsXG4gICAgXCIyIGN1cHMgZmluZWx5IGRpY2VkIG9uaW9uXCIsXG4gICAgXCIzLzQgY3VwIGZpbmVseSBkaWNlZCBjYXJyb3RcIixcbiAgICBcIjMvNCBjdXAgZmluZWx5IGRpY2VkIGNlbGVyeVwiLFxuICAgIFwiMSBsYXJnZSB0aHltZSBzcHJpZ1wiLFxuICAgIFwiMSBiYXkgbGVhZlwiLFxuICAgIFwiMSA0LWluY2ggc3RyaXAgb2Ygb3JhbmdlIHBlZWwsIHBpdGggcmVtb3ZlZFwiLFxuICAgIFwiNCBnYXJsaWMgY2xvdmVzLCBtaW5jZWRcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgdG9tYXRvIHBhc3RlXCIsXG4gICAgXCIxIGN1cCBjaG9wcGVkIGNhbm5lZCBvciBmcmVzaCB0b21hdG9lc1wiLFxuICAgIFwiMSBjdXAgZHJ5IHJlZCB3aW5lXCIsXG4gICAgXCIzIGN1cHMgY2hpY2tlbiBicm90aFwiLFxuICAgIFwiUGluY2ggY2F5ZW5uZSBvciByZWQgcGVwcGVyLCBvcHRpb25hbFwiLFxuICAgIFwiT2xpdmUgZ3JlbW9sYXRhIGZvciBnYXJuaXNoXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlRyaW0gZHVjayBsZWdzIG9mIGV4dHJhbmVvdXMgZmF0IHdpdGggYSBzaGFycCBrbmlmZSwgbGVhdmluZyBhIHRoaW4gbGF5ZXIgb24gdG9wLiAoSXQgaXMgYmVzdCB0byBkbyB0aGlzIHN0cmFpZ2h0IGZyb20gdGhlIGZyaWRnZSwgd2hpbGUgZmF0IGlzIHN0aWxsIGZpcm0uKSBTYXZlIGR1Y2sgZmF0IGZvciByZW5kZXJpbmcuXCIsXG4gICAgXCJTZWFzb24gZWFjaCBsZWcgZ2VuZXJvdXNseSB3aXRoIHNhbHQgYW5kIHBlcHBlciwgdGhlbiBzcHJpbmtsZSB3aXRoIGdyb3VuZCBjb3JpYW5kZXIgYW5kIGZlbm5lbC4gTWFzc2FnZSBzZWFzb25pbmcgaW50byBtZWF0IGFuZCBsZWF2ZSBhdCByb29tIHRlbXBlcmF0dXJlIGZvciAzMCBtaW51dGVzLCBvciB3cmFwIGFuZCByZWZyaWdlcmF0ZSBvdmVybmlnaHQuXCJcbiAgXSxcbiAgXCJuYW1lXCI6IFwid2ludGVyLWJyYWlzZWQtZHVja1wiXG59LFxuXCJmYWxsLWNob2NvbGF0ZS1jaGFpLWN1cGNha2VcIjoge1xuICBcInRpdGxlXCI6IFwiQ2hvY29sYXRlIENoYWkgU3BpY2UgQ3VwY2FrZVwiLFxuICBcImV4Y2VycHRcIjogXCJUaGUgbW9pc3QgY2hvY29sYXRleSBnb29kbmVzcyBvZiB0aGUgY2FrZSBjYW4gbGl2ZSBvbiBpdHMgb3duXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJDdXBjYWtlIEJha2VzaG9wXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vY3VwY2FrZWJsb2cuY29tLz9wPTUwXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjU1IG1pblwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjIwMCBncmFtIGJhciBvZiBWYWxyaG9uYSA2MSUgY2FjYW9cIixcbiAgICBcIjMgc3RpY2tzIGJ1dHRlclwiLFxuICAgIFwiMi0xLzQgY3VwcyBzdWdhclwiLFxuICAgIFwiOCBlZ2dzXCIsXG4gICAgXCIxLTEvNCBjdXAgZmxvdXJcIixcbiAgICBcIjEvNCBjdXAgY29jb2EgcG93ZGVyLCB1bnN3ZWV0ZW5lZFwiLFxuICAgIFwiMS0xLzIgdGVhc3Bvb25zIGJha2luZyBwb3dkZXJcIixcbiAgICBcIjMgdGVhc3Bvb25zIGNoYWkgc3BpY2UgbWl4XCIsXG4gICAgXCJwaW5jaCBvZiBzYWx0XCIsXG4gICAgXCIxIGN1cCAoMiBzdGlja3MpIGJ1dHRlclwiLFxuICAgIFwiNC01IGN1cHMgcG93ZGVyZWQgc3VnYXIsIHNpZnRlZFwiLFxuICAgIFwiMS80IGN1cCBtaWxrXCIsXG4gICAgXCIyIHRlYXNwb29ucyBjaGFpIHNwaWNlIG1peFwiLFxuICAgIFwiMiB0ZWFzcG9vbnMgbWluY2VkIGZyZXNoIGdpbmdlclwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJXaXRoIGEgc21hbGwgZm9vZCBwcm9jZXNzb3IsIGdyaW5kIHVwIHRoZSB3aG9sZSBmZW5uZWwgYW5kIGNsb3Zlcy5cIixcbiAgICBcIlRyYW5zZmVyIHRvIGEgc21hbGwgYm93bCBhbmQgYWRkIHJlbWFpbmluZyBzcGljZXMuIE1peCB0byBjb21iaW5lLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtY2hvY29sYXRlLWNoYWktY3VwY2FrZVwiXG59LFxuXCJmYWxsLW1leGljYW4tcmljZVwiOiB7XG4gIFwidGl0bGVcIjogXCJNZXhpY2FuIFJpY2VcIixcbiAgXCJleGNlcnB0XCI6IFwiXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJOWSBUaW1lc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5ueXRpbWVzLmNvbS9yZWNpcGVzLzEwMTY2NzQvbWV4aWNhbi1yaWNlLmh0bWxcIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiNDAgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMSBsYXJnZSBjbG92ZSBnYXJsaWMsIHJvdWdobHkgY2hvcHBlZFwiLFxuICAgIFwiMiBjdXBzIGNhbm5lZCB0b21hdG9lcyAoZnJlc2ggdG9tYXRvZXMgY2FuIGJlIHVzZWQpXCIsXG4gICAgXCIxLzIgY3VwIGdyZWVuIGJlbGwgcGVwcGVyLCByb3VnaGx5IGNob3BwZWRcIixcbiAgICBcIjEgbWVkaXVtIG9uaW9uLCByb3VnaGx5IGNob3BwZWRcIixcbiAgICBcIjEvMiBtZWRpdW0gamFsYXBlw7FvLCBzZWVkcyBhbmQgdmVpbnMgcmVtb3ZlZFwiLFxuICAgIFwiMSB0ZWFzcG9vbiBzYWx0XCIsXG4gICAgXCIxLzIgY3VwIGNoaWNrZW4gc3RvY2sgb3Igd2F0ZXJcIixcbiAgICBcIjIgdGFibGVzcG9vbnMgdmVnZXRhYmxlIG9pbFwiLFxuICAgIFwiMSBoZWFwaW5nIGN1cCBsb25nLWdyYWluIHdoaXRlIHJpY2UsIHJpbnNlZFwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJCbGVuZCB2ZWdldGFibGVzLCBzYWx0IGFuZCBzdG9jayBvciB3YXRlciB0b2dldGhlciBpbnRvIGEgbW9zdGx5IHNtb290aCBwdXLDqWUgKGEgZmV3IHNtYWxsIHBpZWNlcyBvZiBvbmlvbiBhbmQgcGVwcGVyIGFyZSBmaW5lKS5cIixcbiAgICBcIkluIGEgbGFyZ2Ugc2tpbGxldCB3aXRoIGEgdGlnaHRmaXR0aW5nIGxpZCwgaGVhdCBvaWwuIEFkZCByaWNlIGFuZCB0b2FzdCB1bnRpbCBpdCBhYnNvcmJzIG1vc3Qgb2YgdGhlIG9pbCBhbmQgYmVnaW5zIHRvIHNtZWxsIG51dHR5LlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtbWV4aWNhbi1yaWNlXCJcbn0sXG5cImZhbGwtd2hvbGUtd2hlYXQtZ29sZGZpc2gtY3JhY2tlcnNcIjoge1xuICBcInRpdGxlXCI6IFwiV2hvbGUgV2hlYXQgR29sZGZpc2ggQ3JhY2tlcnNcIixcbiAgXCJleGNlcnB0XCI6IFwiXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJTbWl0dGVuIEtpdGNoZW5cIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly9zbWl0dGVua2l0Y2hlbi5jb20vYmxvZy8yMDExLzAzL3dob2xlLXdoZWF0LWdvbGRmaXNoLWNyYWNrZXJzL1wiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxIGhyIDUgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiNiBvdW5jZXMgKDEgMS8yIGN1cHMgY29hcnNlbHkgZ3JhdGVkKSBzaGFycCBjaGVkZGFyXCIsXG4gICAgXCI0IHRhYmxlc3Bvb25zICgyIG91bmNlcyBvciA1NyBncmFtcykgYnV0dGVyXCIsXG4gICAgXCIxLzIgY3VwICgyIDEvMiBvdW5jZXMgb3IgNjIgZ3JhbXMpIHdob2xlIHdoZWF0IGZsb3VyXCIsXG4gICAgXCIxLzQgY3VwICgxIDEvOCBvdW5jZXMgb3IgMzEgZ3JhbXMpIGFsbC1wdXJwb3NlIGZsb3VyXCIsXG4gICAgXCIxLzggdGVhc3Bvb24gb25pb24gcG93ZGVyXCIsXG4gICAgXCIxLzggdG8gMS80IHRlYXNwb29uIHRhYmxlIHNhbHRcIlxuICBdLFxuICBcImRpcmVjdGlvbnNcIjogW1xuICAgIFwiUHJlaGVhdCBvdmVuIHRvIDM1MMKwRi4gQ29tYmluZSBhbGwgaW5ncmVkaWVudHMgaW4gYSBmb29kIHByb2Nlc3NvciwgcnVubmluZyB0aGUgbWFjaGluZSB1bnRpbCB0aGUgZG91Z2ggZm9ybXMgYSBiYWxsLCBhYm91dCB0d28gbWludXRlcy5cIixcbiAgICBcIklmIHRoZSBkb3VnaCBmZWVscyB3YXJtIG9yIHdvcnJpc29tZS1seSBzb2Z0LCB3cmFwIGl0IGluIHdheGVkIHBhcGVyIG9yIHBsYXN0aWMgd3JhcCBhbmQgY2hpbGwgaXQgaW4gdGhlIGZyaWRnZSBmb3IgMzAgdG8gNDUgbWludXRlcy4gVGhpcyBhbHNvIG1ha2VzIGl0IGVhc2llciB0byB0cmFuc2ZlciBzaGFwZXMgb25jZSB0aGV5IGFyZSByb2xsZWQgb3V0LlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcImZhbGwtd2hvbGUtd2hlYXQtZ29sZGZpc2gtY3JhY2tlcnNcIlxufSxcblwid2ludGVyLXdvcmxkLXBlYWNlLWNvb2tpZVwiOiB7XG4gIFwidGl0bGVcIjogXCJQLkhlcm3DqSAmIEQuR3JlZW5zcGFuJ3MgV29ybGQgUGVhY2UgQ29va2llc1wiLFxuICBcImV4Y2VycHRcIjogXCJTaG9ydGJyZWFkIGNvb2tpZSBtZWV0cyBzYWx0ZWQgY2hvY29sYXRlIGNoaXAsIGFuZCB3b3JsZCBwZWFjZSBmZWVscyB3aXRoaW4gcmVhY2hcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIkZvb2Q1MlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Zvb2Q1Mi5jb20vcmVjaXBlcy8yNTM3Mi1waWVycmUtaGVybWUtZG9yaWUtZ3JlZW5zcGFuLXMtd29ybGQtcGVhY2UtY29va2llc1wiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIzNSBtaW5cIixcbiAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgXCIxIDEvNCBjdXBzIGFsbC1wdXJwb3NlIGZsb3VyXCIsXG4gICAgXCIxLzMgY3VwIHVuc3dlZXRlbmVkIGNvY29hIHBvd2RlclwiLFxuICAgIFwiMS8yIHRlYXNwb29uIGJha2luZyBzb2RhXCIsXG4gICAgXCIxIHN0aWNrIHBsdXMgMyB0YWJsZXNwb29ucyAoMTEgdGFibGVzcG9vbnMpIHVuc2FsdGVkIGJ1dHRlciwgcm9vbSB0ZW1wZXJhdHVyZVwiLFxuICAgIFwiMi8zIGN1cHMgKHBhY2tlZCkgbGlnaHQgYnJvd24gc3VnYXJcIixcbiAgICBcIjEvNCBjdXAgZ3JhbnVsYXRlZCBzdWdhclwiLFxuICAgIFwiMS8yIHRlYXNwb29uIGZsZXVyIGRlbCBzZWwgb3IgMS80IHRlYXNwb29uIGZpbmUgc2VhIHNhbHRcIixcbiAgICBcIjEgdGVhc3Bvb24gcHVyZSB2YW5pbGxhIGV4dHJhY3RcIixcbiAgICBcIjUgb3VuY2VzIGJpdHRlcnN3ZWV0IGNob2NvbGF0ZSwgY2hvcHBlZCBpbnRvIGNoaXBzLCBvciBhIGdlbmVyb3VzIDMvNCBjdXAgc3RvcmUtYm91Z2h0IG1pbmkgY2hvY29sYXRlIGNoaXBzXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlNpZnQgdGhlIGZsb3VyLCBjb2NvYSBhbmQgYmFraW5nIHNvZGEgdG9nZXRoZXIuXCIsXG4gICAgXCJXb3JraW5nIHdpdGggYSBzdGFuZCBtaXhlciwgcHJlZmVyYWJseSBmaXR0ZWQgd2l0aCBhIHBhZGRsZSBhdHRhY2htZW50LCBvciB3aXRoIGEgaGFuZCBtaXhlciBpbiBhIGxhcmdlIGJvd2wsIGJlYXQgdGhlIGJ1dHRlciBvbiBtZWRpdW0gc3BlZWQgdW50aWwgc29mdCBhbmQgY3JlYW15LiBBZGQgYm90aCBzdWdhcnMsIHRoZSBzYWx0IGFuZCB2YW5pbGxhIGV4dHJhY3QgYW5kIGJlYXQgZm9yIDIgbWludXRlcyBtb3JlLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcIndpbnRlci13b3JsZC1wZWFjZS1jb29raWVcIlxufSxcblwid2ludGVyLWNob2NvbGF0ZS10YXJ0XCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkNob2NvbGF0ZSBUYXJ0XCIsXG4gIFwiaGlnaGxpZ2h0ZWRcIjogdHJ1ZSxcbiAgXCJleGNlcnB0XCI6IFwiQSBnb29kIGNob2NvbGF0ZSB0YXJ0IGRvZXNu4oCZdCBuZWVkIHRvIGJlIGZhbmN5LCBidXQgaXQgbmVlZHMgdG8gYmUgZGVlcCwgZGFyaywgYW5kIHllcywgc29tZXdoYXQgZGVjYWRlbnQuXCIsXG4gIFwic291cmNlXCI6IHtcbiAgICBcIm5hbWVcIjogXCJEYXZpZCBMZWJvdml0elwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5kYXZpZGxlYm92aXR6LmNvbS8yMDExLzEwL2Nob2NvbGF0ZS10YXJ0LXJlY2lwZS9cIlxuICB9LFxuICBcImNvb2tUaW1lXCI6IFwiMSBoclwiLFxuICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICBcIjEgMS80IGN1cCAoMjUwIGcpIHN1Z2FyXCIsXG4gICAgXCI2IHRhYmxlc3Bvb25zICg5MCBtbCkgd2FybSBjb2ZmZWVcIixcbiAgICBcIjQgb3VuY2VzICgxMTUgZykgdW5zYWx0ZWQgYnV0dGVyLCBjdWJlZCwgcm9vbSB0ZW1wZXJhdHVyZVwiLFxuICAgIFwicGluY2ggb2Ygc2VhIHNhbHRcIixcbiAgICBcIjQgb3VuY2VzICgxMTUgZykgYml0dGVyc3dlZXQgb3Igc2VtaXN3ZWV0IGNob2NvbGF0ZSwgY2hvcHBlZFwiLFxuICAgIFwiMiBvdW5jZXMgKDU1IGcpIHVuc3dlZXRlbmVkIGNob2NvbGF0ZSwgY2hvcHBlZFwiLFxuICAgIFwiMiBsYXJnZSBlZ2dzXCIsXG4gICAgXCIxLzQgY3VwICgzNSBnKSBmbG91clwiLFxuICAgIFwiMSB0YWJsZXNwb29uIGRhcmsgcnVtIG9yIDEgdGVhc3Bvb24gdmFuaWxsYSBleHRyYWN0XCIsXG4gICAgXCJPbmUgOeKAkzEwIGluY2ggcHJlYmFrZWQgdGFydCBzaGVsbFwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJQcmVoZWF0IG92ZW4gdG8gMzUwwrpGICgxODDCukMuKVwiLFxuICAgIFwiU3ByZWFkIHRoZSBzdWdhciBpbiBhbiBldmVuIGxheWVyIGluIHRoZSBib3R0b20gb2YgYSBsYXJnZSwgaGVhdnktZHV0eSBzYXVjZXBhbiBvciBEdXRjaCBvdmVuLiBDb29rIHRoZSBzdWdhciBvdmVyIG1vZGVyYXRlIGhlYXQgdW50aWwgdGhlIGVkZ2VzIGxpcXVlZnkgYW5kIGJlaW5nIHRvIGNhcmFtZWxpemUuIFVzZSBhIGhlYXRwcm9vZiB1dGVuc2lsIHRvIGdlbnRseSBkcmFnIHRoZSBsaXF1ZWZpZWQgc3VnYXIgdG93YXJkIHRoZSBjZW50ZXIgb2YgdGhlIHBhbiwgZW5jb3VyYWdpbmcgdGhlIHN1Z2FyIHRvIG1lbHQgZXZlbmx5LlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcIndpbnRlci1jaG9jb2xhdGUtdGFydFwiXG59LFxuXCJ3aW50ZXItYnJhaXNlZC1lZ2dzLXdpdGgtYmVlZlwiOiB7XG4gIFwidGl0bGVcIjogXCJCcmFpc2VkIGVnZ3Mgdy8gYmVlZiwgc21va2VkIGF1YmVyZ2luZSAmIHRvbWF0b1wiLFxuICBcImV4Y2VycHRcIjogXCJcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIk90dG9sZW5naGlcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cub3R0b2xlbmdoaS5jby51ay9yZWNpcGVzL21lYXQvYnJhaXNlZC1lZ2dzLXdpdGgtYmVlZi1zbW9rZWQtYXViZXJnaW5lLWFuZC10b21hdG8tc2hvcFwiXG4gIH0sXG4gIFwiY29va1RpbWVcIjogXCIxIGhyIDUgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiNCBhdWJlcmdpbmVzICgxLjFrZyBncm9zcylcIixcbiAgICBcIjEgdGJzcCBvbGl2ZSBvaWwsIHBsdXMgZXh0cmEgZm9yIGRyaXp6bGluZ1wiLFxuICAgIFwiMSBsYXJnZSBvbmlvbiwgZmluZWx5IGNob3BwZWQgKDIwMGcgbmV0KVwiLFxuICAgIFwiNiBnYXJsaWMgY2xvdmVzLCByb3VnaGx5IGNob3BwZWQgKDIwZyBuZXQpXCIsXG4gICAgXCIxLzIgdHNwIGNoaWxsaSBmbGFrZXNcIixcbiAgICBcIjEvMiB0c3AgZ3JvdW5kIGNpbm5hbW9uXCIsXG4gICAgXCIxLzIgdHNwIGdyb3VuZCBjdW1pblwiLFxuICAgIFwiMiB0c3AgdG9tYXRvIHBhc3RlXCIsXG4gICAgXCIzMDBnIG1pbmNlZCBiZWVmXCIsXG4gICAgXCIyIG1lZGl1bSB0b21hdG9lcywgY2hvcHBlZCAoMTAwZyBuZXQpXCIsXG4gICAgXCIyIHRzcCBmaW5lbHkgY2hvcHBlZCBwcmVzZXJ2ZWQgbGVtb24gKDE1ZylcIixcbiAgICBcIjQgZWdnc1wiLFxuICAgIFwiMy80IHRzcCBzdW1hY1wiLFxuICAgIFwiMSB0YnNwIGNob3BwZWQgcGFyc2xleVwiLFxuICAgIFwiU2FsdCBhbmQgYmxhY2sgcGVwcGVyXCIsXG4gICAgXCI0MGcgdGFoaW5pXCIsXG4gICAgXCIyIHRic3AgbGVtb24ganVpY2VcIixcbiAgICBcIjEgZ2FybGljIGNsb3ZlLCBjcnVzaGVkXCJcbiAgXSxcbiAgXCJkaXJlY3Rpb25zXCI6IFtcbiAgICBcIlBpZXJjZSB0aGUgYXViZXJnaW5lcyB3aXRoIGEgc2hhcnAga25pZmUgaW4gYSBmZXcgcGxhY2VzIGFuZCBwbGFjZSBlYWNoIGRpcmVjdGx5IG92ZXIgYSBuYWtlZCBmbGFtZSBvbiB5b3VyIHN0b3ZldG9wLiBDb29rIG9uIG1lZGl1bSBoZWF0IGZvciAyMCBtaW51dGVzLCB0dXJuaW5nIG9jY2FzaW9uYWxseSB3aXRoIG1ldGFsIHRvbmdzIHVudGlsIHRoZSBvdXRzaWRlIGlzIHRvdGFsbHkgYnVybnQgYW5kIHRoZSBhdWJlcmdpbmUgc3RhcnRzIHRvIGNvbGxhcHNlIG9uIGl0c2VsZi4gQWx0ZXJuYXRpdmVseSwgcGxhY2UgdGhlIHBpZXJjZWQgYXViZXJnaW5lcyBvbiBhIHRpbiBmb2lsIGxpbmVkIHRyYXkgdW5kZXIgYSBob3QgZ3JpbGwgaW4gdGhlIG92ZW4gZm9yIGFuIGhvdXIsIHR1cm5pbmcgZXZlcnkgMjAgbWludXRlcy4gUmVtb3ZlIGZyb20gYW5kIHBsYWNlIGluIGEgY29sYW5kZXIuXCIsXG4gICAgXCJDdXQgYSBzaW5nbGUgc2xpdCBpbiBlYWNoIGF1YmVyZ2luZSwgZnJvbSB0b3AgdG8gYm90dG9tIGFuZCBhbGxvdyB0aGUganVpY2VzIHRvIHN0cmFpbi4gT25jZSBjb29sIGVub3VnaCB0byBoYW5kbGUsIHNjb29wIG91dCBhbGwgdGhlIGZsZXNoLCBhdm9pZGluZyBhbGwgYmxhY2sgc2tpbiwgYW5kIHNldCBhc2lkZS4gWW91IHNob3VsZCBoYXZlIGFib3V0IDM3MGcgYXViZXJnaW5lIGZsZXNoLlwiXG4gIF0sXG4gIFwibmFtZVwiOiBcIndpbnRlci1icmFpc2VkLWVnZ3Mtd2l0aC1iZWVmXCJcbn0sXG5cIndpbnRlci1jYXNoZXctZ2F0ZWF1XCI6IHtcbiAgXCJ0aXRsZVwiOiBcIkNhc2hldyBHYXRlYXUgd2l0aCBDb2ZmZWUgQ2FyZGFtb20gTW91c3NlXCIsXG4gIFwiZXhjZXJwdFwiOiBcIlRoZSBpbnNwaXJhdGlvbiBmb3IgdGhlIGNhcmFtZWwgc3RhaW5lZCBcXFwiZ2xhc3NcXFwiIHBhbmVsIGNvbWVzIGZyb20gbXkgZ3JhbmRtb3RoZXJcIixcbiAgXCJzb3VyY2VcIjoge1xuICAgIFwibmFtZVwiOiBcIlRhcnRlbGV0dGVcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudGFydGVsZXR0ZWJsb2cuY29tLzIwMDgvMDgvY2FzaGV3LWdhdGVhdS13aXRoLWNvZmZlZS1jYXJkYW1vbS5odG1sXCJcbiAgfSxcbiAgXCJjb29rVGltZVwiOiBcIjEgaHIgMzAgbWluXCIsXG4gIFwiaW5ncmVkaWVudHNcIjogW1xuICAgIFwiMy80IGN1cHMgY2FzaGV3LCB0b2FzdGVkL3NraW5uZWRcIixcbiAgICBcIjEvMyBjdXAgY2FrZSBmbG91ciwgdW5zaWZ0ZWRcIixcbiAgICBcIjEgVGJzcC4gY29ybnN0YXJjaFwiLFxuICAgIFwiMyBsYXJnZSBlZ2cgeW9sa3NcIixcbiAgICBcIjEvMiBjdXAgc3VnYXIsIGRpdmlkZWQgKDJUYiAmIDYgVGIpXCIsXG4gICAgXCIxLzIgdHNwLiB2YW5pbGxhIGV4dHJhY3RcIixcbiAgICBcIjEvMiB0c3AuIGdyYXRlZCBsZW1vbiByaW5kXCIsXG4gICAgXCIyIGxnLiBlZ2cgd2hpdGVzXCIsXG4gICAgXCIyIFRiIG1lbHRlZCBidXR0ZXIsIGNvb2xlZFwiLFxuICAgIFwiMS8yIHRlYXNwb29uIGdyb3VuZCBjYXJkYW1vbVwiLFxuICAgIFwiMS8yIGN1cCBlc3ByZXNzbyBvciBzdHJvbmcgY29mZmVlXCIsXG4gICAgXCIxLzQgY3VwIHN1Z2FyXCIsXG4gICAgXCIxIHRzcCBwb3dkZXJlZCB1bmZsYXZvcmVkIGdlbGF0aW4sIHNvZnRlbmVkIGluIDEgdGFibGVzcG9vbiBjb2xkIHdhdGVyXCIsXG4gICAgXCIxIGN1cCBoZWF2eSBjcmVhbSwgY29sZFwiLFxuICAgIFwiMS8yIGN1cCBoZWF2eSBjcmVhbVwiLFxuICAgIFwiMy80IGN1cCBjaG9wcGVkIGNob2NvbGF0ZSBvciBjaG9jb2xhdGUgY2hpcHMgKGFib3V0IDYgb3ogb3IgMTgwIGdyKVwiXG4gIF0sXG4gIFwiZGlyZWN0aW9uc1wiOiBbXG4gICAgXCJQb3NpdGlvbiByYWNrIGluIHRoZSBsb3dlciAzcmQgb2YgdGhlIG92ZW4gYW5kIHByZWhlYXQgdG8gMzUwIGRlZ3JlZXMuXCIsXG4gICAgXCJHcmVhc2UgYW5kIGZsb3VyIGEgOOKAnSBYIDTigJ0gaW5jaCByb3VuZCBzcHJpbmdmb3JtIHBhbi5cIlxuICBdLFxuICBcIm5hbWVcIjogXCJ3aW50ZXItY2FzaGV3LWdhdGVhdVwiXG59XG59OyIsInZhciBmZWVkU3Vic2NyaXB0aW9uO1xudmFyIHRoaXNDdXJyZW50UHJvZHVjdCA7XG4vLyBIYW5kbGUgZm9yIGxhdW5jaCBzY3JlZW4gcG9zc2libHkgZGlzbWlzc2VkIGZyb20gYXBwLWJvZHkuanNcbmRhdGFSZWFkeUhvbGQgPSBudWxsO1xuXG4vLyBHbG9iYWwgc3Vic2NyaXB0aW9uc1xuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICBNZXRlb3Iuc3Vic2NyaWJlKCduZXdzJyk7XG4gIE1ldGVvci5zdWJzY3JpYmUoJ2Jvb2ttYXJrQ291bnRzJyk7XG4gIE1ldGVvci5zdWJzY3JpYmUoJ2ltYWdlcycpO1xuICBNZXRlb3Iuc3Vic2NyaWJlKCdnZXRTZWxsZXJzJyk7XG4gIFxuICAvLyB2YXIgcmVzdWx0c3EgPSBNZXRlb3Iuc3Vic2NyaWJlKCdmZWF0dXJlZFByb2R1Y3RzJyk7XG4gXG4gIC8vIFNlc3Npb24uc2V0KCdmZWF0dXJlZFByb2R1Y3RzJyxyZXN1bHRzcSk7XG4gIGZlZWRTdWJzY3JpcHRpb24gPSBNZXRlb3Iuc3Vic2NyaWJlKCdmZWVkJyk7XG59XG5cblJvdXRlci5jb25maWd1cmUoe1xuICBsYXlvdXRUZW1wbGF0ZTogJ2FwcEJvZHknLFxuICBub3RGb3VuZFRlbXBsYXRlOiAnbm90Rm91bmQnXG59KTtcblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICAvLyBLZWVwIHNob3dpbmcgdGhlIGxhdW5jaCBzY3JlZW4gb24gbW9iaWxlIGRldmljZXMgdW50aWwgd2UgaGF2ZSBsb2FkZWRcbiAgLy8gdGhlIGFwcCdzIGRhdGFcbiAgZGF0YVJlYWR5SG9sZCA9IExhdW5jaFNjcmVlbi5ob2xkKCk7XG59XG5cblxuXG5Qcm9kdWN0c0NvbnRyb2xsZXIgPSBSb3V0ZUNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgb25CZWZvcmVBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiBcbiAgICBNZXRlb3Iuc3Vic2NyaWJlKCdsYXRlc3RQcm9kdWN0cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRhdGFSZWFkeUhvbGQucmVsZWFzZSgpO1xuICAgIH0pO1xuXG4gICAgTWV0ZW9yLnN1YnNjcmliZSgnZ2V0U2VsbGVyUHJvZHVjdHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkYXRhUmVhZHlIb2xkLnJlbGVhc2UoKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbkZlZWRDb250cm9sbGVyID0gUm91dGVDb250cm9sbGVyLmV4dGVuZCh7XG4gIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mZWVkU3Vic2NyaXB0aW9uID0gZmVlZFN1YnNjcmlwdGlvbjtcbiAgfVxufSk7XG5cblJlY2lwZXNDb250cm9sbGVyID0gUm91dGVDb250cm9sbGVyLmV4dGVuZCh7XG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXy52YWx1ZXMoUmVjaXBlc0RhdGEpO1xuICB9XG59KTtcblxuQm9va21hcmtzQ29udHJvbGxlciA9IFJvdXRlQ29udHJvbGxlci5leHRlbmQoe1xuICBvbkJlZm9yZUFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmIChNZXRlb3IudXNlcigpKVxuICAgICAgTWV0ZW9yLnN1YnNjcmliZSgnYm9va21hcmtzJyk7XG4gICAgZWxzZVxuICAgICAgT3ZlcmxheS5vcGVuKCdhdXRoT3ZlcmxheScpO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKE1ldGVvci51c2VyKCkpXG4gICAgICByZXR1cm4gXy52YWx1ZXMoXy5waWNrKFJlY2lwZXNEYXRhLCBNZXRlb3IudXNlcigpLmJvb2ttYXJrZWRSZWNpcGVOYW1lcykpO1xuICB9XG59KTtcblxuUmVjaXBlQ29udHJvbGxlciA9IFJvdXRlQ29udHJvbGxlci5leHRlbmQoe1xuICBvbkJlZm9yZUFjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIE1ldGVvci5zdWJzY3JpYmUoJ3JlY2lwZScsIHRoaXMucGFyYW1zLm5hbWUpO1xuICB9LFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJlY2lwZXNEYXRhW3RoaXMucGFyYW1zLm5hbWVdO1xuICB9XG59KTtcblxuLy8gYWRkU2VsbGVyQ29udHJvbGxlciA9IFJvdXRlQ29udHJvbGxlci5leHRlbmQoe1xuLy8gICBvbkJlZm9yZUFjdGlvbjpmdW5jdGlvbigpXG4vLyAgIHtcbi8vICAgICBjb25zb2xlLmxvZygnU2VsbGVyIENvbnRyb2xsZXIgbG9hZGVkJyk7XG5cbiAgICBcbi8vICAgICBpZiAoTWV0ZW9yLnVzZXJJZCgpKVxuLy8gICAgIHtcbi8vICAgICAgIHZhciBjdXJyZW50U2VsbGVyID0gTWV0ZW9yLndyYXBBc3luYyhnZXRUaGlzU2VsbGVyKE1ldGVvci51c2VySWQoKSkpOyAgICAgXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KTtcblxuXG5cbi8vIGZ1bmN0aW9uIGdldFRoaXNTZWxsZXIoaWQpXG4vLyB7XG4vLyAgIGNvbnNvbGUubG9nKFwiR2V0IFNlbGxlciAgOiBcIiArIGlkKTtcbi8vICAgdmFyIHJldFByb2QgPSB7fTtcbi8vICAgdmFyIHJldHVyblByb2Q9W107XG4gICBcbi8vICAgdmFyIHJlcHJvID0gICBNZXRlb3IuYXBwbHkoJ2dldFByb2R1Y3RTZWxsZXInLCBbaWRdLHt3YWl0OiB0cnVlfSwgZnVuY3Rpb24oZXJyLGRhdGEpe1xuLy8gICAgIGlmICghZXJyKVxuLy8gICAgIHtcbiAgICAgIFxuLy8gICAgICAgU2Vzc2lvbi5zZXQoXCJjdXJyZW50U2VsbGVyXCIsZGF0YSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgXG4gXG4vLyAgICAgfVxuLy8gICAgIGVsc2Vcbi8vICAgICB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuLy8gICAgIH1cbiAgICBcbi8vICAgfSk7XG4vLyB9XG4gXG4gXG5Qcm9kdWN0Q29udHJvbGxlciA9IFJvdXRlQ29udHJvbGxlci5leHRlbmQoe1xuICBvbkJlZm9yZUFjdGlvbiA6IGZ1bmN0aW9uKClcbiAge1xuICAgIGlmICh0aGlzLnBhcmFtcy5faWQpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IGxhdW5jaCA6XCIgKyB0aGlzLnBhcmFtcy5faWQpO1xuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImN1cnJlbnRQcm9kdWN0XCIpO1xuICAgICAgTWV0ZW9yLnN1YnNjcmliZSgncHJvZHVjdCcsUm91dGVyLmN1cnJlbnQoKS5wYXJhbXMuX2lkKTtcbiAgICAgIHZhciBjdXJyZW50UHJvZHVjdCA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VGhpc1Byb2REYXRhKHRoaXMucGFyYW1zLl9pZCkpO1xuICAgICAgLy92YXIgcHJvZHVjdEltYWdlcyA9IE1ldGVvci53cmFwQXN5bmMoZ2V0UHJvZHVjdEltYWdlcyhjdXJyZW50UHJvZHVjdC5wcm9kSW1nKSk7XG4gICAgICAvL2N1cnJlbnRQcm9kdWN0LnByb2RJbWcgPSBwcm9kdWN0SW1hZ2VzO1xuICAgICAgZGF0YVJlYWR5SG9sZC5yZWxlYXNlKCk7XG5cbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIC8vICxcbiAgLy8gZGF0YSA6IGZ1bmN0aW9uKClcbiAgLy8ge1xuICAvLyAgIGN1cnJlbnRQcm9kdWN0ID0gTWV0ZW9yLndyYXBBc3luYyhnZXRUaGlzUHJvZERhdGEodGhpcy5wYXJhbXMuX2lkKSk7XG4gIC8vIH1cbiAgXG4gICBcbn0pO1xuXG5mdW5jdGlvbiBnZXRUaGlzUHJvZERhdGEoaWQpXG57XG4gIGNvbnNvbGUubG9nKFwiR2V0IFNpbmdsZSBwcm9kdWN0IHB1Ymxpc2ggUm91dGVyIE1ldGhvZCA6IFwiICsgaWQpO1xuICB2YXIgcmV0UHJvZCA9IHt9O1xuICB2YXIgcmV0dXJuUHJvZD1bXTtcbiAgdmFyIHJlcHJvID0gICBNZXRlb3IuYXBwbHkoJ2dldFByb2R1Y3QnLCBbaWRdLHt3YWl0OiBmYWxzZX0sIGZ1bmN0aW9uKGVycixkYXRhKXtcbiAgICBpZiAoIWVycilcbiAgICB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VycmVudFByb2R1Y3RcIik7XG4gICAgICBTZXNzaW9uLnNldChcImN1cnJlbnRQcm9kdWN0XCIsZGF0YSk7ICBcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VycmVudFByb2R1Y3RcIik7XG4gICAgfSAgICBcbiAgfSk7ICBcbn1cblxuXG5TZWxsZXJDb250cm9sbGVyID0gUm91dGVDb250cm9sbGVyLmV4dGVuZCh7XG4gIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbigpXG4gIHtcbiAgICBjb25zb2xlLmxvZygnU2VsbGVyIENvbnRyb2xsZXIgbG9hZGVkJyk7XG4gICAgaWYgKE1ldGVvci51c2VySWQoKSlcbiAgICB7XG4gICAgICAvL2xvYWRpbmcuc3RhcnQoKTtcbiAgICAgIC8vTWV0ZW9yLnN1YnNjcmliZSgnU2VsbGVyRGV0YWlsc0ltYWdlcycsTWV0ZW9yLnVzZXJJZCgpKTtcbiAgICAgIE1ldGVvci5zdWJzY3JpYmUoJ2dldFNlbGxlcicsTWV0ZW9yLnVzZXJJZCgpKTtcbiAgICAgIFNlbGxlcnMuZmluZE9uZSh7dXNlcklkOk1ldGVvci51c2VySWQoKX0pO1xuICAgICBcbiAgICAgIC8vIE1ldGVvci5jYWxsKCdnZXRTZWxsZXInLCBbTWV0ZW9yLnVzZXJJZCgpXSwgZnVuY3Rpb24oZXJyb3IsIHN1Y2Nlc3MpIHsgXG4gICAgICAvLyAgIGlmIChlcnJvcikgeyBcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnZXJyb3IgZ2V0dGluZyBzZWxsZXInLCBlcnJvcik7IFxuICAgICAgLy8gICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJjdXJyZW50U2VsbGVyXCIpO1xuICAgICAgLy8gICB9IFxuICAgICAgLy8gICBpZiAoc3VjY2VzcykgeyBcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNsaWVudCBSb3V0ZXIgU2VsbGVyIDogXCIgKyBzdWNjZXNzKTtcbiAgICAgIC8vICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VycmVudFNlbGxlclwiKTtcbiAgICAgIC8vICAgICBTZXNzaW9uLnNldChcImN1cnJlbnRTZWxsZXJcIixzdWNjZXNzKTtcbiAgICAgIC8vICAgfSBcbiAgICAgIC8vIH0pO1xuICAgICAgY29uc29sZS5sb2coJ1NlbGxlciBDb250cm9sbGVyIHJlZmVyZW5jZSBkYXRhJyk7XG4gICAgICBNZXRlb3Iuc3Vic2NyaWJlKCdyZWZlcmVuY2VEYXRhJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhSZWZlcmVuY2VEYXRhLmZpbmQoe30pLmNvdW50KCkpO1xuICAgICAgICAvL2xvYWRpbmcuc3RvcCgpO1xuICAgICAgICBkYXRhUmVhZHlIb2xkLnJlbGVhc2UoKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAgXG4gICAgfVxuICB9XG59KVxuXG5FZGl0UHJvZHVjdENvbnRyb2xsZXIgPSBSb3V0ZUNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgb25CZWZvcmVBY3Rpb246ZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhcIkVkaXQgUHJvZHVjdFwiKTtcbiAgICBpZiAodGhpcy5wYXJhbXMuX2lkKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCBQcm9kdWN0IGxhdW5jaCA6XCIgKyB0aGlzLnBhcmFtcy5faWQpO1xuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImN1cnJlbnRQcm9kdWN0XCIpO1xuICAgICAgTWV0ZW9yLnN1YnNjcmliZSgncHJvZHVjdCcsUm91dGVyLmN1cnJlbnQoKS5wYXJhbXMuX2lkKTtcbiAgICAgIHZhciBjdXJyZW50UHJvZHVjdCA9IE1ldGVvci53cmFwQXN5bmMoZ2V0VGhpc1Byb2REYXRhKHRoaXMucGFyYW1zLl9pZCkpO1xuICAgICAgZGF0YVJlYWR5SG9sZC5yZWxlYXNlKCk7XG4gICAgfVxuICB9XG59KTtcblxuQWRtaW5Db250cm9sbGVyID0gUm91dGVDb250cm9sbGVyLmV4dGVuZCh7XG4gIG9uQmVmb3JlQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgTWV0ZW9yLnN1YnNjcmliZSgnbmV3cycpO1xuICB9XG59KTtcblxuSG9tZUNvbnRyb2xsZXIgPSBSb3V0ZUNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgb25CZWZvcmVBY3Rpb246ZnVuY3Rpb24oKXtcbiAgICAgIE1ldGVvci5zdWJzY3JpYmUoJ2ZlYXR1cmVkUHJvZHVjdHMnKTtcbiAgICBjb25zb2xlLmxvZyhcIkhvbWUgZnJvbSByb3V0ZXIgcHJvZHVjdHMgXCIgKTtcbiAgICBkYXRhUmVhZHlIb2xkLnJlbGVhc2UoKTtcbiAgfVxufSk7XG5cblJvdXRlci5yb3V0ZSgnaG9tZScsIHtcbiAgcGF0aDogJy8nXG59KTtcblxuLy8gUm91dGVyLnJvdXRlKCdwcm9kdWN0cycsIHtcbi8vICAgcGF0aCA6ICcvcHJvZHVjdHMvOl9zZWFyY2hUZXJtJyxcbi8vICAgLy8gbmFtZTogJ3Byb2R1Y3RzJyxcbi8vICAgLy8gdGVtcGxhdGU6ICdwcm9kdWN0cycsXG4vLyAgIH0pO1xuIFxuUm91dGVyLnJvdXRlKCdwcm9kdWN0cycpO1xuXG5Sb3V0ZXIucm91dGUoJ3NlbGxlcicpO1xuXG5Sb3V0ZXIucm91dGUoJ2ZlZWQnKTtcblxuXG5cblJvdXRlci5yb3V0ZSgncmVjaXBlcycpO1xuXG5Sb3V0ZXIucm91dGUoJ2Jvb2ttYXJrcycpO1xuXG5Sb3V0ZXIucm91dGUoJ2Fib3V0Jyk7XG5cblJvdXRlci5yb3V0ZSgncmVjaXBlJywge1xuICBwYXRoOiAnL3JlY2lwZXMvOm5hbWUnXG59KTtcblxuUm91dGVyLnJvdXRlKCdwcm9kdWN0Jywge1xuICBwYXRoIDogJy9wcm9kdWN0LzpfaWQnLFxuICBuYW1lOiAncHJvZHVjdFBhZ2UnLFxuICB0ZW1wbGF0ZTogJ3Byb2R1Y3QnLFxuICB9KTtcblxuICBSb3V0ZXIucm91dGUoJ2VkaXRwcm9kdWN0Jywge1xuICAgIHBhdGggOiAnL2VkaXRwcm9kdWN0LzpfaWQnLFxuICAgIG5hbWU6ICdwcm9kdWN0RWRpdFBhZ2UnLFxuICAgIHRlbXBsYXRlOiAndG1wX3Byb2R1Y3RfbWFpbnRhaW4nLFxuICAgIGxheW91dFRlbXBsYXRlOiBudWxsLFxuICAgIGNvbnRyb2xsZXI6IEVkaXRQcm9kdWN0Q29udHJvbGxlclxuICAgIH0pO1xuICBcblxuICBSb3V0ZXIucm91dGUoJ2xvZ2luJyx7XG4gICAgcGF0aCA6Jy9sb2dpbicsXG4gICAgdGVtcGxhdGUgOidhdXRoT3ZlcmxheScsXG4gICAgbGF5b3V0VGVtcGxhdGU6ICdhcHBCb2R5J1xuICB9KTtcblxuICBSb3V0ZXIucm91dGUoJ3NpZ251cCcse1xuICAgIHBhdGggOicvc2lnbnVwJyxcbiAgICB0ZW1wbGF0ZSA6J2F1dGhPdmVybGF5U2lnbnVwJyxcbiAgICBsYXlvdXRUZW1wbGF0ZTogJ2FwcEJvZHknXG4gIH0pXG5cblxuUm91dGVyLnJvdXRlKCdhZG1pbicsIHtcbiAgbGF5b3V0VGVtcGxhdGU6IG51bGxcbn0pO1xuXG5Sb3V0ZXIub25CZWZvcmVBY3Rpb24oJ2RhdGFOb3RGb3VuZCcsIHtcbiAgb25seTogJ3JlY2lwZSdcbn0pO1xuXG4iLCIgXG5cblNlbGxlcnMuYWxsb3coe1xuICAgIGluc2VydDogZnVuY3Rpb24odXNlcklkLCBkb2MpIHtcbiAgICAgIHJldHVybiBkb2MudXNlcklkID09PSB1c2VySWQ7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCxkb2Mpe1xuICAgICAgcmV0dXJuIGRvYy51c2VySWQgPT09IHVzZXJJZDtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24odXNlcklkLCBkb2MpIHtcbiAgICAgICAgcmV0dXJuIGRvYy51c2VySWQgPT09IHVzZXJJZDtcbiAgICAgIH1cbiAgfSk7XG4gIFxuIFxuICBNZXRlb3IubWV0aG9kcyh7XG4gICAgJ2dldFNlbGxlcic6ZnVuY3Rpb24oaWQpe1xuICAgICAgdmFyIHJlc3VsdD17fTtcbiAgICAgIHRyeVxuICAgICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiIHNlcnZlciBmaW5kIG9uZSA6IFwiICsgaWQpO1xuICAgICAgICAvL2xvYWRpbmcuc3RhcnQoKTtcbiAgICAgICAgdmFyIFNlbGxlclJlc3VsdCA9IE1ldGVvci5hcHBseSgnZ2V0UHJvZHVjdFNlbGxlcicsW2lkXSx7cmV0dXJuU3R1YlZhbHVlOiB0cnVlfSk7XG4gICAgICAgXG4gICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2VydmVyIHNlbGxlciBcIiApO1xuIFxuICAgICAgICBpZiAoU2VsbGVyUmVzdWx0KVxuICAgICAgICB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImhhcyBzZWxsZXJcIik7XG4gICAgICAgICAgcmVzdWx0PVNlbGxlclJlc3VsdDtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuXG4gICAgICAgIHtcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGFzIG5vIHNlbGxlclwiKTtcbiAgICAgICAgICByZXN1bHQgID0ge1xuICAgICAgICAgICAgX2lkOlwiXCIsXG4gICAgICAgICAgICAgdXNlcklkOk1ldGVvci51c2VySWQoKSxcbiAgICAgICAgICAgICBidXNpbmVzc25hbWUgOiBcIlwiLFxuICAgICAgICAgICAgIGJ1c1RhZ0xpbmU6IFwiXCIsXG4gICAgICAgICAgICAgYnVzTG9nbzogXCJcIixcbiAgICAgICAgICAgICBidXNBdmF0YXI6IFwiXCIsXG4gICAgICAgICAgICAgYnVzdGVsOiBcIlwiLFxuICAgICAgICAgICAgIGJ1c2NlbDogXCJcIixcbiAgICAgICAgICAgICBidXNlbWFpbDogXCJcIixcbiAgICAgICAgICAgICBjb250MSA6IFwiXCIsXG4gICAgICAgICAgICAgY29udDIgOiBcIlwiLFxuICAgICAgICAgICAgIGFkZDE6IFwiXCIsXG4gICAgICAgICAgICAgYWRkMjogXCJcIixcbiAgICAgICAgICAgICBhZGQzOiBcIlwiLFxuICAgICAgICAgICAgIGFkZDQ6IFwiXCIsXG4gICAgICAgICAgICAgYWRkNTogXCJcIixcbiAgICAgICAgICAgICB3ZWJzaXRlOiBcIlwiXG4gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vbG9hZGluZy5zdG9wKCk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXhwKVxuICAgICAge1xuICAgICAgICAvL2xvYWRpbmcuaGFsdCgpO1xuICAgICAgICAgIHRocm93IGV4cDtcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBcbiAgICB9LFxuICAgXG4gICAgJ25ld1NlbGxlcic6ZnVuY3Rpb24oc2VsbGVyT2JqKXtcbiAgICAgLy8gdmFyIHJlc3VsdCA9IFByb2R1Y3RzLmZpbmQoe19pZDpwcm9kaWR9KTtcbiAgICAgIFxuICAgICB0cnkge1xuIFxuICAgIFxuXG4gICAgICBcbiAgICAgdmFyIHNlbGxlclJlc3VsdCA9IFxuICAgICBTZWxsZXJzLnVwc2VydCh7XG4gICAgICAvLyBTZWxlY3RvclxuICAgICAgdXNlcklkOiBzZWxsZXJPYmoudXNlcklkIFxuICAgICAgICB9LCB7XG4gICAgICAvLyBNb2RpZmllclxuICAgICAgJHNldDoge1xuICAgICAgICBidXNpbmVzc25hbWUgOiBzZWxsZXJPYmouYnVzaW5lc3NuYW1lLFxuICAgICAgICBidXNUYWdMaW5lOiBzZWxsZXJPYmouYnVzVGFnTGluZSxcbiAgICAgICAgYnVzTG9nbyA6IHNlbGxlck9iai5idXNMb2dvLFxuICAgICAgICBidXNBdmF0YXIgOiBzZWxsZXJPYmouYnVzQXZhdGFyLFxuICAgICAgICBidXN0ZWwgOiBzZWxsZXJPYmouYnVzdGVsLFxuICAgICAgICBidXNjZWwgOiBzZWxsZXJPYmouYnVzY2VsLFxuICAgICAgICBidXNlbWFpbCA6IHNlbGxlck9iai5idXNlbWFpbCxcbiAgICAgICAgY29udDEgOiBzZWxsZXJPYmouY29udDEsXG4gICAgICAgIGNvbnQyIDogc2VsbGVyT2JqLmNvbnQyLFxuICAgICAgICBhZGQxIDogc2VsbGVyT2JqLmFkZDEsXG4gICAgICAgIGFkZDIgOiBzZWxsZXJPYmouYWRkMixcbiAgICAgICAgYWRkMyA6IHNlbGxlck9iai5hZGQzLFxuICAgICAgICBhZGQ0IDogc2VsbGVyT2JqLmFkZDQsXG4gICAgICAgIGFkZDUgOiBzZWxsZXJPYmouYWRkNSxcbiAgICAgICAgd2Vic2l0ZSA6IHNlbGxlck9iai53ZWJzaXRlXG4gICAgICB9XG4gICAgICB9KTtcbiAgICAgICBcbiAgICAvL2NvbnNvbGUubG9nKHNlbGxlclJlc3VsdCk7XG5cbiAgICAgIC8vcmV0dXJuIFNlbGxlcnMuaW5zZXJ0KHNlbGxlck9iaik7XG4gICAgICBcbiAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgXG4gICAgICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgLSBTZWxsZXIgLSBcIiArIGVycm9yKTtcbiAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgfVxuICAgICBcbiAgICAgIFxuICAgIH0sXG4gICAgXG4gICAgJ3VwZGF0ZVNlbGxlcic6ZnVuY3Rpb24oc2VsbGVyT2JqKXtcbiAgICAgICAgLy8gdmFyIHJlc3VsdCA9IFByb2R1Y3RzLmZpbmQoe19pZDpwcm9kaWR9KTtcbiAgICAgICAgIHJldHVybiBTZWxsZXJzLmZpbmRPbmUoe3VzZXJJZDpwcm9kaWR9KTtcbiAgICB9LFxuICAgICdkZWxldGVTZWxsZXInOmZ1bmN0aW9uKGlkKXtcbiAgICAgICAgLy8gdmFyIHJlc3VsdCA9IFByb2R1Y3RzLmZpbmQoe19pZDpwcm9kaWR9KTtcbiAgICAgICAgIHJldHVybiBTZWxsZXJzLnJlbW92ZSh7dXNlcklkOmlkfSk7XG4gICAgfVxuICAgIFxuICB9KTtcblxuICAgIFxuXG4gIFNlbGxlcnMuYWxsU2VsbGVycz0gZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBTZWxsZXJzLmZpbmQoe30pO1xuICB9XG5cbiAgU2VsbGVycy5tb3JlID0gZnVuY3Rpb24oY29udGludWF0aW9uVmFsdWUpe1xuICAgICAgLy9odHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tb25nby1jdXJzb3ItcGFnaW5hdGlvblxuICAgICAgcmV0dXJuIFNlbGxlcnMuZmluZCh7fSwge3NvcnQ6IHtkYXRlOiAtMX19KTtcbiAgICBcbiAgfSBcblxuICAgXG4gIC8qXG4gIE1ldGVvci5tZXRob2RzKHtcbiAgICBjcmVhdGVBY3Rpdml0eTogZnVuY3Rpb24oYWN0aXZpdHksIHR3ZWV0LCBsb2MpIHtcbiAgICAgIE1ldGVvci51c2VySWQoKSwgU3RyaW5nLFxuICAgICAgYWN0aXZpdHksIHtcbiAgICAgICAgcmVjaXBlTmFtZTogU3RyaW5nLFxuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIGltYWdlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICB0d2VldCwgQm9vbGVhbixcbiAgICAgIGxvYywgTWF0Y2guT25lT2YoT2JqZWN0LCBudWxsKSxcbiAgICAgIFxuICAgICAgYWN0aXZpdHkudXNlcklkID0gTWV0ZW9yLnVzZXJJZCgsXG4gICAgICBhY3Rpdml0eS51c2VyQXZhdGFyID0gTWV0ZW9yLnVzZXIoKS5zZXJ2aWNlcy50d2l0dGVyLnByb2ZpbGVfaW1hZ2VfdXJsX2h0dHBzO1xuICAgICAgYWN0aXZpdHkudXNlck5hbWUgPSBNZXRlb3IudXNlcigpLnByb2ZpbGUubmFtZTtcbiAgICAgIGFjdGl2aXR5LmRhdGUgPSBuZXcgRGF0ZTtcbiAgICAgIFxuICAgICAgaWYgKCEgdGhpcy5pc1NpbXVsYXRpb24gJiYgbG9jKVxuICAgICAgICBhY3Rpdml0eS5wbGFjZSA9IGdldExvY2F0aW9uUGxhY2UobG9jLFxuICAgICAgXG4gICAgICB2YXIgaWQgPSBBY3Rpdml0aWVzLmluc2VydChhY3Rpdml0eSxcbiAgICAgIFxuICAgICAgaWYgKCEgdGhpcy5pc1NpbXVsYXRpb24gJiYgdHdlZXQpXG4gICAgICAgIHR3ZWV0QWN0aXZpdHkoYWN0aXZpdHksXG4gICAgICBcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH0sXG4gIFxuICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgdmFyIHR3aXR0ZXJPYXV0aCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBjb25maWcgPSBNZXRlb3Iuc2V0dGluZ3MudHdpdHRlclxuICAgICAgdmFyIHVzZXJDb25maWcgPSBNZXRlb3IudXNlcigpLnNlcnZpY2VzLnR3aXR0ZXI7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uc3VtZXJfa2V5OiBjb25maWcuY29uc3VtZXJLZXksXG4gICAgICAgIGNvbnN1bWVyX3NlY3JldDogY29uZmlnLnNlY3JldCxcbiAgICAgICAgdG9rZW46IHVzZXJDb25maWcuYWNjZXNzVG9rZW4sXG4gICAgICAgIHRva2VuX3NlY3JldDogdXNlckNvbmZpZy5hY2Nlc3NUb2tlblNlY3JldFxuICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdmFyIHR3ZWV0QWN0aXZpdHkgPSBmdW5jdGlvbihhY3Rpdml0eSkge1xuICAgICAgLy8gY3JlYXRlcyB0aGUgdHdlZXQgdGV4dCwgb3B0aW9uYWxseSB0cnVuY2F0aW5nIHRvIGZpdCB0aGUgYXBwZW5kZWQgdGV4dFxuICAgICAgZnVuY3Rpb24gYXBwZW5kVHdlZXQodGV4dCwgYXBwZW5kKSB7XG4gICAgICAgIHZhciBNQVggPSAxMTc7IC8vIE1heCBzaXplIG9mIHR3ZWV0IHdpdGggaW1hZ2UgYXR0YWNoZWRcbiAgICAgICAgXG4gICAgICAgIGlmICgodGV4dCArIGFwcGVuZCkubGVuZ3RoID4gTUFYKVxuICAgICAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZygwLCAoTUFYIC0gYXBwZW5kLmxlbmd0aCAtIDMpKSArICcuLi4nICsgYXBwZW5kO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHRleHQgKyBhcHBlbmQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIHdlIG5lZWQgdG8gc3RyaXAgdGhlIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiBiaXQgb2ZmIHRoZSBkYXRhIHVybFxuICAgICAgdmFyIGltYWdlID0gYWN0aXZpdHkuaW1hZ2UucmVwbGFjZSgvXmRhdGEuKmJhc2U2NCwvLCAnJyxcbiAgXG4gICAgICB2YXIgcmVzcG9uc2UgPSBIVFRQLnBvc3QoXG4gICAgICAgICdodHRwczovL3VwbG9hZC50d2l0dGVyLmNvbS8xLjEvbWVkaWEvdXBsb2FkLmpzb24nLCB7XG4gICAgICAgICAgcGFyYW1zOiB7IG1lZGlhOiBpbWFnZSB9LFxuICAgICAgICAgIG5wbVJlcXVlc3RPcHRpb25zOiB7IG9hdXRoOiB0d2l0dGVyT2F1dGgoKSB9XG4gICAgICAgIH1cbiAgICAgICxcbiAgICAgIFxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMClcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsICdVbmFibGUgdG8gcG9zdCBpbWFnZSB0byB0d2l0dGVyJyxcbiAgXG4gICAgICBpZiAoISByZXNwb25zZS5kYXRhKVxuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgJ0RpZCBub3QgcmVjZWl2ZSBhdHRhY2htZW50IGZyb20gdHdpdHRlcicsXG4gIFxuICAgICAgdmFyIGF0dGFjaG1lbnQgPSByZXNwb25zZS5kYXRhO1xuICBcbiAgICAgIHJlc3BvbnNlID0gSFRUUC5wb3N0KFxuICAgICAgICAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vMS4xL3N0YXR1c2VzL3VwZGF0ZS5qc29uJywge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc3RhdHVzOiBhcHBlbmRUd2VldChhY3Rpdml0eS50ZXh0LCAnICNsb2NhbG1hcmtldCcpLFxuICAgICAgICAgICAgbWVkaWFfaWRzOiBhdHRhY2htZW50Lm1lZGlhX2lkX3N0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbnBtUmVxdWVzdE9wdGlvbnM6IHsgb2F1dGg6IHR3aXR0ZXJPYXV0aCgpIH1cbiAgICAgICAgfVxuICAgICAgLFxuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApXG4gICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCAnVW5hYmxlIHRvIGNyZWF0ZSB0d2VldCcsXG4gICAgfVxuICAgIFxuICAgIHZhciBnZXRMb2NhdGlvblBsYWNlID0gZnVuY3Rpb24obG9jKSB7XG4gICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMS9nZW8vcmV2ZXJzZV9nZW9jb2RlLmpzb24nXG4gICAgICAgICsgJz9ncmFudWxhcml0eT1uZWlnaGJvcmhvb2QnXG4gICAgICAgICsgJyZtYXhfcmVzdWx0cz0xJ1xuICAgICAgICArICcmYWNjdXJhY3k9JyArIGxvYy5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgKyAnJmxhdD0nICsgbG9jLmNvb3Jkcy5sYXRpdHVkZVxuICAgICAgICArICcmbG9uZz0nICsgbG9jLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICBcbiAgICAgIHZhciByZXNwb25zZSA9IEhUVFAuZ2V0KHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtucG1SZXF1ZXN0T3B0aW9uczogeyBvYXV0aDogdHdpdHRlck9hdXRoKCkgfSB9LFxuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICB2YXIgcGxhY2UgPSBfLmZpbmQocmVzcG9uc2UuZGF0YS5yZXN1bHQucGxhY2VzLCBmdW5jdGlvbihwbGFjZSkge1xuICAgICAgICAgIHJldHVybiBwbGFjZS5wbGFjZV90eXBlID09PSAnbmVpZ2hib3Job29kJztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwbGFjZSAmJiBwbGFjZS5mdWxsX25hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICBcbiAgKi8iLCIvLyBQcm92aWRlIGRlZmF1bHRzIGZvciBNZXRlb3Iuc2V0dGluZ3Ncbi8vXG4vLyBUbyBjb25maWd1cmUgeW91ciBvd24gVHdpdHRlciBrZXlzLCBzZWU6XG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tZXRlb3IvbG9jYWxtYXJrZXQjY29uZmlndXJpbmctdHdpdHRlclxuaWYgKHR5cGVvZiBNZXRlb3Iuc2V0dGluZ3MgPT09ICd1bmRlZmluZWQnKVxuICBNZXRlb3Iuc2V0dGluZ3MgPSB7fTtcbiAgXG5cbl8uZGVmYXVsdHMoTWV0ZW9yLnNldHRpbmdzLCB7XG4gIHR3aXR0ZXI6IHtcbiAgICBjb25zdW1lcktleTogXCJQTGZyZzJiVWgwb0wwYXNpM1IyZnVtUmptXCIsIFxuICAgIHNlY3JldDogXCJzUkk4cm53TzNzeDd4VUF4TldUWDBXRURXcGgzV0VCSHU2dFRkSllRNXdWckplVkNDdFwiXG4gIH0sXG4gIC8vL1VzZXJzL2ZhcmlkL0RvY3VtZW50cy9Qcm9qZWN0cy9NZXRlb3IvdW50aXRsZWQgZm9sZGVyL2xvY2FsbWFya2V0LW1hc3Rlci8ubWV0ZW9yL2xvY2FsL2J1aWxkL3Byb2dyYW1zL3dlYi5icm93c2VyL2FwcC9pbWcvcHJvZHNcbiAgcHJvZHVjdHM6e1xuICAgIGZpbGVTYXZlUGF0aDpcIi9Vc2Vycy9mYXJpZC9Eb2N1bWVudHMvUHJvamVjdHMvTWV0ZW9yL2p1c3RhZGl0L3B1YmxpYy9pbWcvcHJvZHMvXCIsIFxuICAgIGltZ1BhdGg6XCIvaW1nL3Byb2RzL1wiLFxuICAgIG1heGZpbGVVcGxvYWRTaXplOjIwMDAwMDAsXG4gICAgbWF4ZmlsZVVwbG9hZFNvdXJjZTpcIlwiXG4gIH0sXG4gIGZlYXR1cmVkUHJvZHVjdHNMaW1pdCA6IDRcbn0pO1xuXG5TZXJ2aWNlQ29uZmlndXJhdGlvbi5jb25maWd1cmF0aW9ucy51cHNlcnQoXG4gIHsgc2VydmljZTogXCJ0d2l0dGVyXCIgfSxcbiAge1xuICAgICRzZXQ6IHtcbiAgICAgIGNvbnN1bWVyS2V5OiBNZXRlb3Iuc2V0dGluZ3MudHdpdHRlci5jb25zdW1lcktleSxcbiAgICAgIHNlY3JldDogTWV0ZW9yLnNldHRpbmdzLnR3aXR0ZXIuc2VjcmV0XG4gICAgfVxuICB9XG4pO1xuIiwiTWV0ZW9yLnB1Ymxpc2goJ2Jvb2ttYXJrQ291bnRzJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBCb29rbWFya0NvdW50cy5maW5kKCk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ25ld3MnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE5ld3MuZmluZCh7fSwge3NvcnQ6IHtkYXRlOiAtMX0sIGxpbWl0OiAxfSk7XG59KTtcblxuXG5NZXRlb3IucHVibGlzaCgnaW1hZ2VzJyxmdW5jdGlvbigpe1xuICByZXR1cm4gSW1hZ2VzLmZpbmQoe30pO1xufSk7XG5cbiBcblxuXG5NZXRlb3IucHVibGlzaCgnbGF0ZXN0UHJvZHVjdHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc29sZS5sb2coXCJQdWJsaXNoaW5nIGhvbWUgdmlldyBwcm9kdWN0cyA6XCIgKyBNZXRlb3Iuc2V0dGluZ3MuZmVhdHVyZWRQcm9kdWN0c0xpbWl0ICk7XG4gIHZhciByZXR1cm5Qcm9kcztcbiAgdHJ5XG4gIHtcbiAgICAgXG4gICAgcmV0dXJuUHJvZHMgPSBQcm9kdWN0cy5maW5kKHt9LHtzb3J0OntjcmVhdGVkQXQ6LTF9fSApO1xuIFxuICB9XG4gIGNhdGNoIChleHApXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciA6IGxhdGVzdCBQcm9kdWN0cyAtIFwiICsgZXhwKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcIlB1Ymxpc2hpbmcgTGF0ZXN0IFByb2R1Y3QgOiBcIiApXG4gIHJldHVybiByZXR1cm5Qcm9kcztcblxuICAgXG4gIFxuICAgXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2xhdGVzdEFjdGl2aXR5JywgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIlB1Ymxpc2hpbmcgQWN0aXZpdGllcyA6IFwiICsgQWN0aXZpdGllcy5jb3VudClcbiAgcmV0dXJuIEFjdGl2aXRpZXMubGF0ZXN0KCk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2ZlZWQnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7fSwge3NvcnQ6IHtkYXRlOiAtMX0sIGxpbWl0OiAxMH0pO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdyZWNpcGUnLCBmdW5jdGlvbihuYW1lKSB7XG4gIGNoZWNrKG5hbWUsIFN0cmluZyk7XG4gIHJldHVybiBbXG4gICAgQm9va21hcmtDb3VudHMuZmluZCh7cmVjaXBlTmFtZTogbmFtZX0pLFxuICAgIEFjdGl2aXRpZXMuZmluZCh7cmVjaXBlTmFtZTogbmFtZX0pXG4gIF07XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ3JlZmVyZW5jZURhdGEnLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJQdWJsaXNoaW5nIEFjdGl2aXRpZXMgOiBcIiArIFJlZmVyZW5jZURhdGEuY291bnQpXG4gIHJldHVybiBSZWZlcmVuY2VEYXRhLmZpbmQoe30pO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdhbGxQcm9kdWN0cycsIGZ1bmN0aW9uKCl7XG4gICAvL3JldHVybiBQcm9kdWN0cy5maW5kKHt9LHtvcmRlcjp7Y3JlYXRlZEF0Oi0xfX0pO1xuICAgXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2ZlYXR1cmVkUHJvZHVjdHMnLGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKFwiUHVibGlzaGluZyBob21lIHZpZXcgcHJvZHVjdHMgOlwiICsgTWV0ZW9yLnNldHRpbmdzLmZlYXR1cmVkUHJvZHVjdHNMaW1pdCApO1xuXG52YXIgcmV0dXJuUHJvZHM7XG50cnlcbntcbiBcbiAgcmV0dXJuUHJvZHMgPSBQcm9kdWN0cy5maW5kKHt9LHtzb3J0OntjcmVhdGVkQXQ6LTF9fSx7bGltaXQ6IE1ldGVvci5zZXR0aW5ncy5mZWF0dXJlZFByb2R1Y3RzTGltaXR9KTtcbiBcbn1cbmNhdGNoIChleHApXG57XG4gIGNvbnNvbGUubG9nKFwiU2VydmVyIDogZmVhdHVyZWRQcm9kdWN0IC0gXCIgKyBleHApO1xufVxucmV0dXJuIHJldHVyblByb2RzO1xuICBcbiBcbn0pO1xuXG5cbk1ldGVvci5wdWJsaXNoKCdwcm9kdWN0JywgZnVuY3Rpb24oaWQpIHtcbiAgY2hlY2soaWQsIFN0cmluZyk7XG4gIGNvbnNvbGUubG9nKFwiR2V0IFNpbmdsZSBwcm9kdWN0IHB1Ymxpc2ggOiBcIiArIGlkKTtcbiAgdmFyIHJldHVyblByb2Q9W107XG4gIHRyeVxuICB7XG4gICAgIFxuICAgIHRoaXMucmVhZHkoKTtcbiAgICB2YXIgUHJvZHMgPSBQcm9kdWN0cy5maW5kT25lKHtfaWQ6aWR9KTtcbiAgICAvL2NvbnNvbGUubG9nKFByb2RzKTtcbiAgICByZXR1cm4gUHJvZHVjdHMuZmluZCh7X2lkOmlkfSk7XG4gICAgIFxuIFxuICB9XG4gIGNhdGNoIChleHApXG4gIHtcbiAgICB0aGlzLnJlYWR5KCk7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgOiBQcm9kdWN0IC0gXCIgKyBleHApO1xuICB9XG4gXG4gXG4gIFxuICAgXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2dldFNlbGxlcicsZnVuY3Rpb24oaWQpe1xuICBjaGVjayhpZCxTdHJpbmcpO1xuICBjb25zb2xlLmxvZyhcIkdldHRpbmcgU2VsbGVyIDogXCIgKyBpZCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdHJ5XG4gIHtcbiAgICB2YXIgc2VsbGVycyA9IFNlbGxlcnMuZmluZCh7dXNlcklkOmlkfSk7XG4gXG4gICAgcmV0dXJuIHNlbGxlcnM7XG4gIH1cbiAgY2F0Y2goZXhwKVxuICB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgU2lkZSA6IEVycm9yIGdldHRpbmcgc2VsbGVycyAtIFwiICsgZXhwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xuXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2dldFNlbGxlcnMnLGZ1bmN0aW9uKCl7XG4gXG4gIGNvbnNvbGUubG9nKFwiR2V0dGluZyBTZWxsZXIgIEltYWdlc1wiKTtcbiAgcmV0dXJuIFNlbGxlcnMuZmluZCh7fSk7XG5cbn0pO1xuXG4gIE1ldGVvci5wdWJsaXNoKCdTZWxsZXJEZXRhaWxzSW1hZ2VzJyxmdW5jdGlvbihpZCl7XG4gICAgY2hlY2soaWQsU3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyhcIkdldHRpbmcgU2VsbGVyIERldGFpbHMgSW1hZ2VzXCIpO1xuICAgIHJldHVybiBJbWFnZXMuZmluZCh7SW1hZ2VDYXQ6J1NlbGxlckRldGFpbHMnLFNlbGxlcklkOmlkfSk7XG5cbiAgfSk7XG4gIE1ldGVvci5wdWJsaXNoKCdTZWxsZXJQcm9kdWN0SW1hZ2VzJyxmdW5jdGlvbihpZCl7XG4gICAgLy9jaGVjayhpZCxTdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKFwiR2V0dGluZyBTZWxsZXIgUHJvZHVjdCBJbWFnZXNcIik7XG4gICAgcmV0dXJuIEltYWdlcy5maW5kKHtJbWFnZUNhdDonUHJvZHVjdERldGFpbHMnLEltYWdlSWQ6aWR9KTtcblxuICB9KTtcblxuICBNZXRlb3IucHVibGlzaCgnU2luZ2xlUHJvZHVjdEltYWdlJywgZnVuY3Rpb24oaWQpIHtcbiAgICAvL2NoZWNrKGlkLCBTdHJpbmcpO1xuICAgIC8vY29uc29sZS5sb2coXCJHZXQgcHJvZHVjdCBzaW5nbGUgaW1hZ2UgcHVibGlzaCA6IFwiICsgaWQpO1xuICAgIHZhciByZXR1cm5JbWFnZSA9IFtdO1xuICAgIHRyeVxuICAgIHtcbiAgICB2YXIgaW1nID0gSW1hZ2VzLmZpbmRPbmUoe0ltYWdlSWQ6aWR9KTsgICAgXG4gICAgcmV0dXJuSW1hZ2UucHVzaChpbWcpO1xuICAgIH1cbiAgICBjYXRjaCAoZXhwKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIC0gUHJvZHVjdCBJbWFnZSAtIFwiICsgZXhwKTtcbiAgICB9ICBcbiAgICByZXR1cm4gSW1hZ2VzLmZpbmQoe0ltYWdlSWQ6aWR9LHtsaW1pdDoxfSk7ICAgXG4gICAgIFxufSk7XG4gIFxuXG4gIE1ldGVvci5wdWJsaXNoKCdQcm9kdWN0SW1hZ2VzJywgZnVuY3Rpb24oaWQpIHtcbiAgICAvL2NoZWNrKGlkLCBTdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKFwiR2V0IFNlbGxlciBwcm9kdWN0cyBpbWFnZXMgcHVibGlzaCA6IFwiICsgaWQpO1xuICAgICB2YXIgcmV0dXJuSW1hZ2VzID0gSW1hZ2VzLmZpbmQoe0ltYWdlSWQ6aWR9KTtcbiAgICAgY29uc29sZS5sb2cocmV0dXJuSW1hZ2VzLmNvdW50KCkpO1xuICAgIHRyeVxuICAgIHtcbiAgICAgIEltYWdlcy5maW5kKHtJbWFnZUlkOmlkfSkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICBcbiAgICB9XG4gICAgY2F0Y2ggKGV4cClcbiAgICB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZlciAtIFByb2R1Y3QgSW1hZ2VzIC0gXCIgKyBleHApO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5JbWFnZXM7XG4gICAgIFxufSk7XG4gXG4gIE1ldGVvci5wdWJsaXNoKCdTZWxsZXJQcm9kdWN0cycsIGZ1bmN0aW9uKGlkKSB7XG4gICAgY2hlY2soaWQsIFN0cmluZyk7XG4gICAgY29uc29sZS5sb2coXCJHZXQgU2VsbGVyIHByb2R1Y3RzIHB1Ymxpc2ggOiBcIiArIGlkKTtcbiAgICB0cnkge1xuICAgICAgdmFyIFNlbGxlclByb2RzID0gUHJvZHVjdHMuZmluZCh7c2VsbGVySWQ6aWR9KTtcbiAgICByZXR1cm4gU2VsbGVyUHJvZHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBcbiAgICAgXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ1FTZWFyY2gnLGZ1bmN0aW9uIChvcHRpb25zKXtcbiBjb25zb2xlLmxvZyhcIlF1aWNrIFNlYXJjaFwiKTtcbiB2YXIgc2VhcmNoVGVybXMgPSBcIicvXi4qXCIgKyBvcHRpb25zICsgXCIuKiQvaSdcIjtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hUZXJtcyk7XG4gICAgLy8kdGV4dDogeyRzZWFyY2g6IHNlYXJjaFZhbHVlfSB9LFxuICAgIHZhciBwcm9kcyA9IFByb2R1Y3RzLmZpbmQoe1wicHJvZHVjdHRpdGxlXCI6eyRyZWdleDpzZWFyY2hUZXJtc319KTtcbiAgICBjb25zb2xlLmxvZyhwcm9kcy5jb3VudCgpKTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcHJvZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIC8vdmFyIHJlc3VsdCA9IFByb2R1Y3RzLmZpbmQoeyR0ZXh0OiB7JHNlYXJjaDogc2VhcmNoVGVybXN9fSkuZmV0Y2goKTtcbiAgICAvLyh7JHRleHQ6eyRzZWFyY2g6XCJ0dXRvcmlhbHNwb2ludFwifX0pXG4gICAgXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICBcbn0pO1xuLy8gYXV0b3B1Ymxpc2ggdGhlIHVzZXIncyBib29rbWFya3MgYW5kIGFkbWluIHN0YXR1c1xuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh0aGlzLnVzZXJJZCwge1xuICAgIGZpZWxkczoge1xuICAgICAgYWRtaW46IDEsXG4gICAgICBib29rbWFya2VkUmVjaXBlTmFtZXM6IDEsXG4gICAgICAnc2VydmljZXMudHdpdHRlci5wcm9maWxlX2ltYWdlX3VybF9odHRwcyc6IDFcbiAgICB9XG4gIH0pO1xufSk7IiwiQWNjb3VudHMub25DcmVhdGVVc2VyKGZ1bmN0aW9uKG9wdGlvbnMsIHVzZXIpIHtcbiAgaWYgKG9wdGlvbnMucHJvZmlsZSlcbiAgICB1c2VyLnByb2ZpbGUgPSBvcHRpb25zLnByb2ZpbGU7XG5cbiAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdXNlciBnb2luZyBpbnRvIHRoZSBkYXRhYmFzZSwgbWFrZSB0aGVtIGFuIGFkbWluXG4gIGlmIChNZXRlb3IudXNlcnMuZmluZCgpLmNvdW50KCkgPT09IDApXG4gICAgdXNlci5hZG1pbiA9IHRydWU7XG5cbiAgcmV0dXJuIHVzZXI7XG59KTtcblxuQWNjb3VudHMub25Mb2dpbihmdW5jdGlvbigpIHsgXG4gIGNvbnNvbGUubG9nKFwiTG9naW4gaW5cIik7XG4gIGlmIChNZXRlb3IudXNlcklkKVxuICB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgXG4gIH1cbiBcbn0pO1xuIFxuXG5BY2NvdW50cy5vbkxvZ291dChmdW5jdGlvbigpe1xuICBpZiAoIU1ldGVvci51c2VySWQpXG4gIHtcbiAgICB0aGlzLlJvdXRlci5nbyhcIi9cIik7XG4gIH1cbiAgXG59KTtcbiAiXX0=
