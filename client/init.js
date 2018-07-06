Meteor.startup(function() {
  // Potentially prompts the user to enable location services. We do this early
  // on in order to have the most accurate location by the time the user shares
  
  //if (Meteor.isCordova) {
    var geoLocation = Geolocation.currentLocation();
    if (geoLocation != null)
    {
      console.log("Location");
      console.log(geoLocation);
    }
  
  //}
  
 
  
});
