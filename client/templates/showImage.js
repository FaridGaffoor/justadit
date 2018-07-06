Template.showImage.helpers({
    getSellerImage: function(imgid) { 
        //console.log("Getting Seller images : " + imgid);
        var img = Images.findOne({ImageId:imgid});
        
        //console.log(img.getFileRecord().collection.storesLookup.images.path);
        
        return img;
         
    },
    
    getProdCardImage:function(imgId){
        return Images.find({ImageId:imgId},{limit:1});
    },
    getCarouselCardImage:function(imgId){
        return Images.find({ImageId:imgId});
    },
});