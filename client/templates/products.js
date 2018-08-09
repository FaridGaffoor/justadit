var TAB_KEY = 'productShowTab';

Template.product.onCreated(function() {
  //debugger;
  if (Router.current().params._searchTerm)

    Template.product.setTab('feed');
  else
    Template.product.setTab('product');
});

Template.product.onRendered(function () {
  // this.$('.product').touchwipe({
  //   wipeDown: function () {
  //     if (Session.equals(TAB_KEY, 'product'))
  //       Template.product.setTab('show')
  //   },
  //   preventDefaultEvents: false
  // });
  // this.$('.attribution-product').touchwipe({
  //   wipeUp: function () {
  //     if (! Session.equals(TAB_KEY, 'product'))
  //       Template.product.setTab('product')
  //   },
  //   preventDefaultEvents: false
  // });
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
  activeTabClass: function() {
    return Session.get(TAB_KEY);
  },
  bookmarked: function() {
    return true;//Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  activities: function() {
    return Activities.find({recipeName: this.name}, {sort: {date: -1}});
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
  
  'click .js-show-product': function(event) {
    event.stopPropagation();
    Template.product.setTab('show')
  },
  
  'click .js-show-feed': function(event) {
    event.stopPropagation();
    Template.product.setTab('feed')
  },
  
  'click .js-uncollapse': function() {
    Template.product.setTab('product')
  },

  'click .js-share': function() {
    Overlay.open('shareOverlay', this);
  }
});





 
  
  Template.products.helpers({
    firstName: function() {
      return this.userName.split(' ')[0];
    },
    latestProducts : function()
    {//({done: false},{order: {status: 1}, limit: 5});
      //return Products.find({},{sort:{createdAt:-1}});
      Loading.start();
      var query =false;
      if(Router.current().params.searchTerm)
      {
       query = RegExp.escape(Router.current().params.searchTerm)  ;
      }
      var result ={};
      if (query && query != "")
      {
        result = Products.find({$or:[{producttitle:{ $regex: query, $options: 'i' },productDescription:{ $regex: query, $options: 'i' }}]},{sort:{createdAt:-1}});    
  

      }
      else
      {
        result = Products.find({},{sort:{createdAt:-1}});
    
      }
      Loading.stop();
      return result;
    },
    homeProducts : function()
    {
      return Products.find({},{sort:{createdAt:-1},limit:4});
    },
    productTitle: function() {
      return "";//RecipesData[this.recipeName].title;
    },
    path: function() {
      return Router.path('product', { id: this._id },
        { query: { _id: this._id } })
    }
  })

  
