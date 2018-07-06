Template.tmp_product_maintain.helpers({ 
    create: function() { 
         console.log("Maintain Created");
    }, 
    rendered: function() { 
        console.log("Maintain rendered");
    }, 
    destroyed: function() { 
        console.log("Maintain destroyed");
    }, 
}); 

Template.tmp_product_maintain.events({ 
    'click .deleteImg': function(event, template) { 

        var ImageId = event.currentTarget.attributes['imgid'].value;
        imageFile = Images.find({_id:ImageId});  
        Images.remove({_id:ImageId});
          
    },
    'click .updateRec': function(event,template){
        alert('update the record')
    } 
}); 
