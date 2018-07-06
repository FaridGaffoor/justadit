// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/localmarket#configuring-twitter
if (typeof Meteor.settings === 'undefined')
  Meteor.settings = {};
  

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "PLfrg2bUh0oL0asi3R2fumRjm", 
    secret: "sRI8rnwO3sx7xUAxNWTX0WEDWph3WEBHu6tTdJYQ5wVrJeVCCt"
  },
  ///Users/farid/Documents/Projects/Meteor/untitled folder/localmarket-master/.meteor/local/build/programs/web.browser/app/img/prods
  products:{
    fileSavePath:"/Users/farid/Documents/Projects/Meteor/justadit/public/img/prods/", 
    imgPath:"/img/prods/",
    maxfileUploadSize:2000000,
    maxfileUploadSource:""
  },
  featuredProductsLimit : 4
});

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: Meteor.settings.twitter.consumerKey,
      secret: Meteor.settings.twitter.secret
    }
  }
);
