var feedSubscription;
var thisCurrentProduct ;
// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  Meteor.subscribe('images');
  Meteor.subscribe('getSellers');
  
  // var resultsq = Meteor.subscribe('featuredProducts');
 
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
    if (Meteor.user())
      Meteor.subscribe('bookmarks');
    else
      Overlay.open('authOverlay');
  },
  data: function () {
    if (Meteor.user())
      return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});

RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
});

// addSellerController = RouteController.extend({
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
  onBeforeAction : function()
  {
    if (this.params._id)
    {
      console.log("Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product',Router.current().params._id);
      var currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
      //var productImages = Meteor.wrapAsync(getProductImages(currentProduct.prodImg));
      //currentProduct.prodImg = productImages;
      dataReadyHold.release();

    }
    
  }
  
  // ,
  // data : function()
  // {
  //   currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
  // }
  
   
});

function getThisProdData(id)
{
  console.log("Get Single product publish Router Method : " + id);
  var retProd = {};
  var returnProd=[];
  var repro =   Meteor.apply('getProduct', [id],{wait: false}, function(err,data){
    if (!err)
    {
      sessionStorage.removeItem("currentProduct");
      Session.set("currentProduct",data);  
    }
    else
    {
      console.log(err);
      sessionStorage.removeItem("currentProduct");
    }    
  });  
}


SellerController = RouteController.extend({
  onBeforeAction: function()
  {
    console.log('Seller Controller loaded');
    if (Meteor.userId())
    {
      //loading.start();
      //Meteor.subscribe('SellerDetailsImages',Meteor.userId());
      Meteor.subscribe('getSeller',Meteor.userId());
      Sellers.findOne({userId:Meteor.userId()});
     
      // Meteor.call('getSeller', [Meteor.userId()], function(error, success) { 
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
        console.log(ReferenceData.find({}).count());
        //loading.stop();
        dataReadyHold.release();
      });
      
       
    }
  }
})

EditProductController = RouteController.extend({
  onBeforeAction:function(){
    console.log("Edit Product");
    if (this.params._id)
    {
      console.log("Edit Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product',Router.current().params._id);
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
  onBeforeAction:function(){
      Meteor.subscribe('featuredProducts');
    console.log("Home from router products " );
    dataReadyHold.release();
  }
});

Router.route('home', {
  path: '/'
});

// Router.route('products', {
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
  path : '/product/:_id',
  name: 'productPage',
  template: 'product',
  });

  Router.route('editproduct', {
    path : '/editproduct/:_id',
    name: 'productEditPage',
    template: 'tmp_product_maintain',
    layoutTemplate: null,
    controller: EditProductController
    });
  

  Router.route('login',{
    path :'/login',
    template :'authOverlay',
    layoutTemplate: 'appBody'
  });

  Router.route('signup',{
    path :'/signup',
    template :'authOverlaySignup',
    layoutTemplate: 'appBody'
  })


Router.route('admin', {
  layoutTemplate: null
});

Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});

