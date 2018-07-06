var FEATURED_COUNT = 4;

Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function() {
    var recipes = _.values(RecipesData);
    var selection = [];
    
    for (var i = 0;i < FEATURED_COUNT;i++)
    {
      selection.push(recipes.splice(_.random(recipes.length - 1), 1)[0]);
    }
    return selection;
  },
  featuredProducts:function(){
      console.log("Featured Products");
      //let wrappedAsyncFunction = Loading.wrapAsync(someAsyncFunction);
      Meteor.subscribe('featuredProducts');
      return Products.find({},{limit:FEATURED_COUNT,sort:{createdAt:-1}});
       
        }
  ,
  
  activities: function() {
    return Activities.latest();
  },
  
  latestNews: function() {
    return News.latest();
  }
});