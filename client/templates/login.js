Template.login.events({
    'click #logout-button': function() {
      Meteor.logout();
    }
  });

  Template.login.helpers({
    services: function() {
      return Accounts._loginButtons.getLoginServices();
    }
  });
  
  // Template.login.service = function()
  // {
  //     //returns an array like [{name: 'facebook'}];
  //     return getLoginServices();
  // }