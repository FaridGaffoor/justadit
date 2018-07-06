Products = new Mongo.Collection('Products');



Products.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  },
  update:function(userId,doc)
  {
    return false;
  }
});


Meteor.methods({
  'featuredProducts': function () {
    
    console.log("Getting Latest featured products data " + Meteor.settings.featuredProductsLimit);
 
 
    var prodresult = [];
    try
    {
    
    var prod = Products.find({},{order:{createdAt: -1}},{limit: Meteor.settings.featuredProductsLimit});
   
    prod.forEach(element => {
 
      prodresult.push(element);
    });
  }
  catch(exp)
  {
    console.log("Error getting featured Products : " + exp);
    throw exp;
  }
      
 
    return {Results:prodresult};
  },
  'getProduct': function (prodid) {
    // var result = Products.find({_id:prodid});
    try
    {
     
      //Meteor.subscribe('product',prodid);
      //Meteor.subscribe('getSellers');
     
    var prod = Products.findOne({ _id: prodid });
    if (prod)
    {
      var sell = Sellers.findOne({userId:prod.sellerId});
      var prodImages = Meteor.apply('getProductImages', [prod.prodImg], { returnStubValue: true });
      prod.seller = sell;
      prod.prodImgs = prodImages;
    }
    //loading.stop();
    return prod;
    }
    catch (exp)
    {
      //loading.halt();
      console.log(exp);
    }

    //return Meteor.Mongo.Products.findOne({_id:prodid});
  },
  
  'getProductSeller': function (sellerId) {
    Meteor.subscribe('getSeller',sellerId);
    return Sellers.findOne({ userId: Meteor.userId() });
  },
  'QSearchProducts' : function (searchItem)
  {
    //debugger;
    var searchTerms = "'/^.*" + searchItem[0] + ".*$/i'";
    console.log(searchTerms);
    //$text: {$search: searchValue} },
    var prods = Products.find({$or:[{"producttitle":{$regex:searchTerms}} , {"productDescrption":{$regex:searchTerms}}]});
    var result = [];
    prods.forEach(element => {
      result.push(element);
    });
    //var result = Products.find({$text: {$search: searchTerms}}).fetch();
    //({$text:{$search:"tutorialspoint"}})
    
    console.log(result);
    return result;
  },
  'getSellerProducts': function () {
    console.log("Getting Seller Server Side Products");

    var prodresult = [];

    //Product.find({},{order:{createdAt:-1}});
    var prod = Products.find({sellerId:Meteor.userId()},{order:{createdAt: -1}});
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
  return Products.find({},{order:{createdAt: -1}});
  // return Products.find({});
}
Products.getProduct = function (prodId) {
  var result;
  console.log("Single product api method");
  try {
    result = Products.findOne({ _id: prodId }, { limit: 1 });
    //console.log(result.producttitle);
  }
  catch (exp) {
    throw exp;
  }
  return result;
}

Products.bookedMarked = function () {
  // here get all my userid Booked marked products and then get each prod and push to array and return the array.
}

Products.latestProducts = function () {
  var result;
  console.log("Api method");
  try {
    //Product.find({},{order:{createdAt:-1}});
    result = Products.find({},{order:{createdAt: -1}});

  }
  catch (exp) {
    throw exp;
  }


  return result;//Products.find({}, {sort: {createdAt: -1}, limit: 1});


}

Products.MyProducts = function (SellerId) {
  //Product.find({},{order:{createdAt:-1}});
  return Products.find({ sellerId: SellerId },{order:{createdAt: -1}});;
}

// Products.featuredProducts = function () {

 
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
  return Products.find().sort({createdAt:-1}).limit(12).skip(continuationValue);

}

Meteor.methods({
  createProduct: function (product, loc) {
    check(product, {
      sellerId: String,
      producttitle: String,
      productDescription: String,
      price: Number,
      prodCat: String,
      url: String
    },
      loc, Match.OneOf(Object, null));

    product.sellerId = Meteor.userId;
    product.createDate = new Date;
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

  },

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