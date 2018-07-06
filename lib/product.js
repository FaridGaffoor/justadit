Product = new Mongo.Collection('Product');

Product.allow({
    insert: function(userId, doc) {
      return doc.userId === userId;
    }
  });
  
 
  Meteor.methods({
    'latestProduct':function(id){
     
      return Product.find({},{order:{createdAt:-1}});
      //return result[0];
    },
    'QSearchProduct':function(id){
      console.log("Searching");
      Meteor.subscribe('QSearch', id);
      var results =  Products.find({});
      console.log(results); 
      return results;
      
    },
    'products.insert':function (productObj)
    {
        //var fs = Npm.require('fs');
        var newProd = false;
        if (productObj._id == "")
        {
            newProd = true;
        }
        var ProdImgs = [];
      try 
      {
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
          var productResult = 
          Products.upsert({
          // Selector
          _id: productObj._id 
          }, {
          // Modifier
          $set: {
            sellerId : productObj.sellerId,
            producttitle : productObj.producttitle,
            productDescription : productObj.productDescription,
            price : productObj.price,
            prdCat : productObj.prdCat,
            prodImg : productObj.prodImg,
            createdAt : productObj.createdAt,
            expireAt : productObj.expireAt
            
           
          
          }
          });

      }
      catch (exp)
      {
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

  Product.MyProducts= function(sellerId){
      return Product.find({SellerID:sellerId});
  }

  Product.more = function(continuationValue){
      //https://www.npmjs.com/package/mongo-cursor-pagination
      //Product.find({},{order:{createdAt:-1}});
      return Product.find({}, {order: {createdAt: -1}});
    
  } 

   
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