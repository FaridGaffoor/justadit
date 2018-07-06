Template.QuickSearch.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.QuickSearch.events({ 
    'click #btnQSearch': function(event, template) { 
        console.log("Searching Quick");
        // debugger;
        var searchValue = template.$('#searchTerm')[0].value;
        
        //alert(searchValue);
        Router.route('pathfor products');
        }
    });