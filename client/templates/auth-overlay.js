// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlay.onCreated(function() {
  this.autorun(function() {
    if (Meteor.userId()  && Overlay.template() === 'authOverlay')
    {
      
      //Router.go("/");
      Overlay.close();
    }
  });
});

Template.logout.events({
  'click .btnLogout' : function(){
    Meteor.logout();
    Router.go("/");
  },
  'click .btnCancel' : function(){
    Router.go("/");
  }
});

Template.authOverlay.events({
  'click .js-signin': function() {
    Meteor.loginWithTwitter({loginStyle: 'redirect'});
  }
});
var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
};
var isValidPassword = function(val) {
  return val.length >= 6 ? true : false; 
}
var isValidEmail = function(val) {
  var re = new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');

  var isValidEmail = re.test(val) ===null?false:true;
  
  return isValidEmail;
}

Template.customLogin.events({
  'click #btnLogin':function(e,t)
  {
    e.preventDefault();
    Loading.start();
 
    var emailadd = t.$("#emailAddress").val() ;
    var password =t.$("#password").val();
    email = trimInput(emailadd);
    password = trimInput(password);
    var result = false;
   if (isValidEmail(email) && isValidPassword(password))
   {
     result = true;

   }
    if (result)
    {
      
      Meteor.loginWithPassword(email, password, function(err){
        if (err)
        {}
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
        else
        {
          Router.go("/");
        }
          // The user has been logged in.
      });
     
    }
    else
    {
      alert("Invlaid email and Password");
      
    }
    Loading.stop();
  } ,
  'click .btnCancel' : function(){
    Router.go("/");
  }

});
Template.customLogin.events({
  'click .bSignup' : function(e,t) {   
    Router.go("/signup");
  }
});
Template.authOverlay.rendered = function()
{
    console.log("rendering login");
   //alert('Template Login redered');
 
    
   
   
   // Accounts._loginButtons.data-toggle = "tab";
};


// Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });