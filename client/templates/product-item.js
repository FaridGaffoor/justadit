Template.productItem.helpers({
    path: function () {
      return Router.path('product', this._id);
    },
    
    highlightedClass: function () {
      if (this.size === 'large')
        return 'highlighted';
    },
    
    bookmarkCount: function () {
      var count =  1;//BookmarkCounts.find({}).count());
      return count && count.count;
    },
    getImage: function(imgid) {         
      return Images.findOne({ImageId:imgid});         
    },
    getFirstElement:function(arr)
    {
      if ( arr == 'undefined')
      {return null};
      if (arr instanceof Array)
      {
        return arr[0];
      }
       
      //return str;



       
    },

    
  });

   