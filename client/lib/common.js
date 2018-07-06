if (Meteor.isClient) {
    
    //const compress = require('compress.js');
    RegExp.escape = function(s) {  
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      };
    
}