console.log("Server create FS Media Collection");

//var imageStore = new FS.Store.GridFS("images", {
//mongoUrl: 'mongodb://127.0.0.1:3001/justadit/', // optional, defaults to Meteor's local MongoDB
//mongoOptions: {...},  // optional, see note below
//transformWrite: myTransformWriteFunction, //optional
//transformRead: myTransformReadFunction, //optional
//maxTries: 1, // optional, default 5
//chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
// Default: 2MB. Reasonable range: 512KB - 4MB
//  });
var imageStore = new FS.Store.FileSystem("images", {
    path: "/var/www/justaditimages/", //optional, default is "/cfs/files" path within app container
    //transformWrite: function(fileObj, readStream, writeStream) {
        //console.log("Resize Image");
        //console.log(fileObj.name() + " : "  + fileObj.size());
        // if (fileObj.size() > 500)
        // {
        //     if (gm.isAvailable)
        //     {
        //         gm(readStream, fileObj.name()).resize('500').stream().pipe(writeStream);
        //     }
        //     else
        //     {
        //         console.log("No GraphicsMagick Installed.")
        //     }
        // }
    //},
    chunkSize: 2*1024*1024 - 1024,  // optional, default GridFS chunk size in bytes (can be overridden per file).
    //Default: 2MB,//. Reasonable range: 512KB - 4MB
    //transformWrite: myTransformWriteFunction, //optional
    //transformRead: myTransformReadFunction, //optional
    maxTries: 2 //optional, default 5
});
//   var videoStore = new FS.Store.GridFS("videos", {
//     //mongoUrl: 'mongodb://127.0.0.1:3001/justaditmedia/', // optional, defaults to Meteor's local MongoDB
//     //mongoOptions: {...},  // optional, see note below
//     //transformWrite: myTransformWriteFunction, //optional
//     //transformRead: myTransformReadFunction, //optional
//     //maxTries: 1, // optional, default 5
//     //chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
//                           // Default: 2MB. Reasonable range: 512KB - 4MB
//   });

Images = new FS.Collection("images", {
    stores: [imageStore]
});


// Videos = new FS.Collection("videos", {
//   stores: [videoStore]
// // });


Images.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    download: function () {
        return true;
    }
});

// Videos.allow({ 
//     insert: function() { 
//         return true; 
//     }, 
//     update: function() { 
//         return true; 
//     }, 
//     remove: function() { 
//         return true; 
//     } 
// });


Meteor.methods({
    getProductImages: function (ImgId) {
 
        // var result = Products.find({_id:prodid});
        var prodImages = Images.find({ ImageId: ImgId });
        var returnImages = [];
        prodImages.forEach(element => {
            returnImages.push(element);

        });
        //var sell = Meteor.apply('getProductSeller', [prod.sellerId], { returnStubValue: true });
        //prod.seller = sell;
        return returnImages;

        //return Meteor.Mongo.Products.findOne({_id:prodid});
    },
});