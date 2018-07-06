var TAB_KEY = 'productShowTab';

Template.product.helpers({ 
  getProduct: function(id) { 
    loading.start();
    
    var result = Template.instance.data.Products;
    //var result = Meteor.apply('getProduct',[id],{wait:true});
    loading.stop();
     return result;
  } 
});
// Template.product.helpers({
//   thisSelectedProduct : function(){
//     var self = this;
//     try {
//         var result;
//         result = Session.get("currentProduct");//Products.find({_id:Router.current().params._id});
//         return result;
//     } catch (error) {
      
//     }
    
    
//   }

// });

Template.product.onCreated(function() {
    // console.log("Create Product template");
    // console.log("parameter Id " + Router.current().params._id);
    var self = this;
 
    Loading.start();
    
  if (Router.current().params._id)
    Template.product.setTab('feed');
  else
    Template.product.setTab('product');
});

Template.product.onRendered(function () {
   
  Loading.stop();
  this.$('.product').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'product'))
        Template.productItem.setTab('show')
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-product').touchwipe({
    wipeUp: function () {
      if (! Session.equals(TAB_KEY, 'product'))
        Template.productItem.setTab('product')
    },
    preventDefaultEvents: false
  });
});



// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.product.setTab = function(tab) {
    var lastTab = Session.get(TAB_KEY);
    Session.set(TAB_KEY, tab);
    
    var fromProduct = (lastTab === 'product') && (tab !== 'product');
    $('.feed-scrollable').toggleClass('instant', fromProduct);
  
    var toProduct = (lastTab !== 'product') && (tab === 'product');
    $('.feed-scrollable').toggleClass('delayed', toProduct);
  }
  
  Template.product.helpers({
    isActiveTab: function(name) {
      return Session.equals(TAB_KEY, name);
    },
    thisProductImages:function(imageId){
      console.log("Searching for imageid : " + imageId + " -  Image Count : " + Images.count);
      Meteor.subscribe('ProductImages', imageId)
      //Loading.start();
      var ProductImgs = Images.find({});
      //Loading.stop();
 
      return ProductImgs;
    },
    activeTabClass: function() {
      return Session.get(TAB_KEY);
    },
    bookmarked: function() {
      return Meteor.user() ;//&& _.include(Meteor.user().bookmarkedRecipeNames, this.name);
    },
    activities: function() {
      return Activities.find({recipeName: this.name}, {sort: {date: -1}});
    },
    productData: function() {
        //console.log("Router data " + Template.instance().data[0]);
        return Template.instance().data[0];
    }
  });
  
  Template.product.events({
    'click .js-add-bookmark': function(event) {
      event.preventDefault();
  
      if (! Meteor.userId())
        return Overlay.open('authOverlay');
      
      Meteor.call('bookmarkRecipe', this.name);
    },
  
    'click .js-remove-bookmark': function(event) {
      event.preventDefault();
  
      Meteor.call('unbookmarkRecipe', this.name);
    },
    
    'click .js-show-recipe': function(event) {
      event.stopPropagation();
      Template.product.setTab('make')
    },
    
    'click .js-show-feed': function(event) {
      event.stopPropagation();
      Template.product.setTab('feed')
    },
    
    'click .js-uncollapse': function() {
      Template.product.setTab('recipe')
    },
  
    'click .js-share': function() {
      Overlay.open('shareOverlay', this);
    }
  });
  