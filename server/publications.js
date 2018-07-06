Meteor.publish('bookmarkCounts', function() {
  return BookmarkCounts.find();
});

Meteor.publish('news', function() {
  return News.find({}, {sort: {date: -1}, limit: 1});
});


Meteor.publish('images',function(){
  return Images.find({});
});

 


Meteor.publish('latestProducts', function () {

  console.log("Publishing home view products :" + Meteor.settings.featuredProductsLimit );
  var returnProds;
  try
  {
     
    returnProds = Products.find({},{sort:{createdAt:-1}} );
 
  }
  catch (exp)
  {
    console.log("Server : latest Products - " + exp);
  }
  console.log("Publishing Latest Product : " )
  return returnProds;

   
  
   
});

Meteor.publish('latestActivity', function () {
  console.log("Publishing Activities : " + Activities.count)
  return Activities.latest();
});

Meteor.publish('feed', function() {
  return Activities.find({}, {sort: {date: -1}, limit: 10});
});

Meteor.publish('recipe', function(name) {
  check(name, String);
  return [
    BookmarkCounts.find({recipeName: name}),
    Activities.find({recipeName: name})
  ];
});

Meteor.publish('referenceData', function() {
  console.log("Publishing Activities : " + ReferenceData.count)
  return ReferenceData.find({});
});

Meteor.publish('allProducts', function(){
   //return Products.find({},{order:{createdAt:-1}});
   
});

Meteor.publish('featuredProducts',function(){
  console.log("Publishing home view products :" + Meteor.settings.featuredProductsLimit );

var returnProds;
try
{
 
  returnProds = Products.find({},{sort:{createdAt:-1}},{limit: Meteor.settings.featuredProductsLimit});
 
}
catch (exp)
{
  console.log("Server : featuredProduct - " + exp);
}
return returnProds;
  
 
});


Meteor.publish('product', function(id) {
  check(id, String);
  console.log("Get Single product publish : " + id);
  var returnProd=[];
  try
  {
     
    this.ready();
    var Prods = Products.findOne({_id:id});
    //console.log(Prods);
    return Products.find({_id:id});
     
 
  }
  catch (exp)
  {
    this.ready();
    console.log("Server : Product - " + exp);
  }
 
 
  
   
});

Meteor.publish('getSeller',function(id){
  check(id,String);
  console.log("Getting Seller : " + id);
  var result = [];
  try
  {
    var sellers = Sellers.find({userId:id});
 
    return sellers;
  }
  catch(exp)
  {
    console.log("Server Side : Error getting sellers - " + exp);
  }
  return result;

});

Meteor.publish('getSellers',function(){
 
  console.log("Getting Seller  Images");
  return Sellers.find({});

});

  Meteor.publish('SellerDetailsImages',function(id){
    check(id,String);
    console.log("Getting Seller Details Images");
    return Images.find({ImageCat:'SellerDetails',SellerId:id});

  });
  Meteor.publish('SellerProductImages',function(id){
    //check(id,String);
    console.log("Getting Seller Product Images");
    return Images.find({ImageCat:'ProductDetails',ImageId:id});

  });

  Meteor.publish('SingleProductImage', function(id) {
    //check(id, String);
    //console.log("Get product single image publish : " + id);
    var returnImage = [];
    try
    {
    var img = Images.findOne({ImageId:id});    
    returnImage.push(img);
    }
    catch (exp)
    {
      console.log("Server - Product Image - " + exp);
    }  
    return Images.find({ImageId:id},{limit:1});   
     
});
  

  Meteor.publish('ProductImages', function(id) {
    //check(id, String);
    console.log("Get Seller products images publish : " + id);
     var returnImages = Images.find({ImageId:id});
     console.log(returnImages.count());
    try
    {
      Images.find({ImageId:id}).forEach(element => {
        //console.log(element);
      });
     
    }
    catch (exp)
    {
      console.log("Server - Product Images - " + exp);
    }

    return returnImages;
     
});
 
  Meteor.publish('SellerProducts', function(id) {
    check(id, String);
    console.log("Get Seller products publish : " + id);
    try {
      var SellerProds = Products.find({sellerId:id});
    return SellerProds;
    } catch (error) {
      throw error;
    }
    
     
});

Meteor.publish('QSearch',function (options){
 console.log("Quick Search");
 var searchTerms = "'/^.*" + options + ".*$/i'";
    console.log(searchTerms);
    //$text: {$search: searchValue} },
    var prods = Products.find({"producttitle":{$regex:searchTerms}});
    console.log(prods.count());
    var result = [];
    prods.forEach(element => {
      result.push(element);
    });
    //var result = Products.find({$text: {$search: searchTerms}}).fetch();
    //({$text:{$search:"tutorialspoint"}})
    
    console.log(result);
    return result;
  
});
// autopublish the user's bookmarks and admin status
Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, {
    fields: {
      admin: 1,
      bookmarkedRecipeNames: 1,
      'services.twitter.profile_image_url_https': 1
    }
  });
});