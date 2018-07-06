 

Sellers.allow({
    insert: function(userId, doc) {
      return doc.userId === userId;
    },
    update: function(userId,doc){
      return doc.userId === userId;
    },
    remove: function(userId, doc) {
        return doc.userId === userId;
      }
  });
  
 
  Meteor.methods({
    'getSeller':function(id){
      var result={};
      try
      {
        //console.log(" server find one : " + id);
        //loading.start();
        var SellerResult = Meteor.apply('getProductSeller',[id],{returnStubValue: true});
       
         //console.log("Server seller " );
 
        if (SellerResult)
        {
          //console.log("has seller");
          result=SellerResult;
        
        }
        else

        {
         // console.log("has no seller");
          result  = {
            _id:"",
             userId:Meteor.userId(),
             businessname : "",
             busTagLine: "",
             busLogo: "",
             busAvatar: "",
             bustel: "",
             buscel: "",
             busemail: "",
             cont1 : "",
             cont2 : "",
             add1: "",
             add2: "",
             add3: "",
             add4: "",
             add5: "",
             website: ""
  
            }
             
        }
        //loading.stop();
      }
      catch (exp)
      {
        //loading.halt();
          throw exp;
      }
      //console.log(result);
      return result;
      
    },
   
    'newSeller':function(sellerObj){
     // var result = Products.find({_id:prodid});
      
     try {
 
    

      
     var sellerResult = 
     Sellers.upsert({
      // Selector
      userId: sellerObj.userId 
        }, {
      // Modifier
      $set: {
        businessname : sellerObj.businessname,
        busTagLine: sellerObj.busTagLine,
        busLogo : sellerObj.busLogo,
        busAvatar : sellerObj.busAvatar,
        bustel : sellerObj.bustel,
        buscel : sellerObj.buscel,
        busemail : sellerObj.busemail,
        cont1 : sellerObj.cont1,
        cont2 : sellerObj.cont2,
        add1 : sellerObj.add1,
        add2 : sellerObj.add2,
        add3 : sellerObj.add3,
        add4 : sellerObj.add4,
        add5 : sellerObj.add5,
        website : sellerObj.website
      }
      });
       
    //console.log(sellerResult);

      //return Sellers.insert(sellerObj);
      
     } catch (error) {
        
       console.log("Server - Seller - " + error);
       throw error;
     }
     
      
    },
    
    'updateSeller':function(sellerObj){
        // var result = Products.find({_id:prodid});
         return Sellers.findOne({userId:prodid});
    },
    'deleteSeller':function(id){
        // var result = Products.find({_id:prodid});
         return Sellers.remove({userId:id});
    }
    
  });

    

  Sellers.allSellers= function(){
      return Sellers.find({});
  }

  Sellers.more = function(continuationValue){
      //https://www.npmjs.com/package/mongo-cursor-pagination
      return Sellers.find({}, {sort: {date: -1}});
    
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