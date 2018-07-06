Template.ticker.helpers({ 
    create: function() { 
        
    }, 
    rendered: function() { 
        // debugger;
        // EthTools.ticker.start();
    }, 
    destroyed: function() { 
        EthTools.ticker.stop();
    }, 
    getAllTickers:function()
    {
    
        //EthTools.ticker.start();
        // var results = EthTools.ticker.find().fetch();
        // for (var i in results)
        // {
        //     console.log(i + " : " + results[i]);
        // }
        //return null;
    }
}); 

 
