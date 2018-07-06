pluralize = function (n, thing, options) {
  var plural = thing;
  if (_.isUndefined(n)) {
    return thing;
  } else if (n !== 1) {
    if (thing.slice(-1) === 's')
      plural = thing + 'es';
    else
      plural = thing + 's';
  }

  if (options && options.hash && options.hash.wordOnly)
    return plural;
  else
    return n + ' ' + plural;
}

Handlebars.registerHelper('pluralize', pluralize);

var DIMENSIONS = {
  small: '320x350',
  large: '640x480',
  full: '640x800'
};

UI.registerHelper('urlImage', function (imageName) {

  var str = "";
  if (imageName instanceof Array) {
    str = "url('/img/prods/" + imageName[0] + "')";
  }
  else {
    str = "url('/img/prods/" + imageName + "')";
  }
  return str;
});

Handlebars.registerHelper('getFirstElement', function (objCol) {
  var result = NaN;
  if (objCol.count > 0) {
    result = objCol[0];
  }
  return result;
});

Handlebars.registerHelper('getAllImages',function (imgId){
  console.log("Getting images");
  console.log(Images.count());
  return Images.find({});
});

UI.registerHelper('isNullOrEmpty', function (someObject) {
  var result = true;
  if ((someObject == 'undefined') || (someObject == '')) {
    return result;
  }

  return result;
});

UI.registerHelper('getCardImageById',function (ImgId){
  console.log("Getting from store");
 
  console.log("Single Image Id : " + ImgId);
  Meteor.subscribe('SingleProductImage',ImgId);
  var returnimgs = Images.find({ImageId:ImgId},{limit:1});
  
  return returnimgs;
});

UI.registerHelper('thisSelectedProduct',function(){
  console.log("This Selected Product");
  try {
      var result;
      result = Session.get("currentProduct");//Products.find({_id:Router.current().params._id});
      
      return result;
  } catch (error) {
    throw error;
  } 
});

UI.registerHelper('getImageById',function (ImgId){
  console.log("Getting from store");
   
  console.log("Image Id : " + ImgId);
  Meteor.subscribe('ProductImages',ImgId);
  var returnimgs = Images.find({ImageId:ImgId});
  
  return returnimgs;
});

Handlebars.registerHelper('getFirstElement', function (arr) {
  if (!isUndefined(arr))

  {var result = arr[0];

  return result;}
});

Handlebars.registerHelper('compare', function (v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});
Handlebars.registerHelper('bigger', function (v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 > v2;
  }
});
Handlebars.registerHelper('smaller', function (v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 < v2;
  }
});
Handlebars.registerHelper('isSingle', function (someArr) {
  if (typeof someArr == 'object') {
    if (someArr.count == 1) {
      return true;
    }
    return false;
  }
});

UI.registerHelper('productPath', function (option) {

  var pathing = "/img/prods/";

  if (option == "save") {
    pathing = Meteor.settings.products.fileSavePath;
  }
  return pathing;

});

UI.registerHelper('getReferenceData',function (refName){
    var refData = Session.get('refData');
    //return refData.find({name:refName});
});

 
UI.registerHelper('get_Add_Length', function ()
  {
    console.log("refdata sell tmp");
    return ReferenceData.find({name:"addTime"});
  });
UI.registerHelper('get_Prod_Cat', function()
  {
    console.log("Get Product Catalogue");
    return ReferenceData.find({name:"prdCat"});
  });

Handlebars.registerHelper('uiLogger', function (someObject) {
  console.log("UI Logging " + someObject);
});

UI.registerHelper('productImage', function (imagename) {
  return '/img/prods/' + imagename;
});

UI.registerHelper('recipeImage', function (options) {
  var size = options.hash.size || 'large';

  if (options.hash.recipe)
    return '/img/recipes/' + DIMENSIONS[size] + '/' + options.hash.recipe.name + '.jpg';
});

Handlebars.registerHelper('activePage', function () {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;

  return _.include(routeNames, Router.current().route.name) && 'active';
});

UI.registerHelper('thisUser', function () {
  var result = "Not logged in";
  if (Meteor.userId()) {
    result = Meteor.usedId().name;
  }
  return result;
})

if (Meteor.isServer) {


}