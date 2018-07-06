// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlaySignup.onCreated(function() {
  this.autorun(function() {
    if (Meteor.userId()  && Overlay.template() === 'authOverlaySignup')
    {
      
      //Router.go("/");
      Overlay.close();
    }
  });
});

 

Template.authOverlaySignup.events({
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

Template.SignUp.events({
  'click .btnSignup':function(e,t)
  {
    e.preventDefault();
    Loading.start();
 
    var emailadd = t.$("#signupEmail").val() ;
    var password =t.$("#signupPassword").val();
    var passwordr =t.$("#signupRPassword").val();
    email = trimInput(emailadd);
    password = trimInput(password);
    passwordr = trimInput(passwordr);
    var result = false;
   if (isValidEmail(email) && isValidPassword(password) && password == passwordr )
   {
     result = true;

   }
    if (result)
    {
      Accounts.createUser({
        email: email,
        username:email,
        password: password
            });
      Meteor.loginWithPassword(email, password, function(err){
        if (err)
        {
            alert('could not be logged in now.')
        }
       
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
  }
  

});

Template.SignUp.events({
  'click .bLogin' : function(e,t) {
    Router.go("/login");
  },
  'click .btnCancel' : function(){
    Router.go("/");
  }
});


Template.authOverlaySignup.rendered = function()
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