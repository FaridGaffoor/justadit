

Template.SellerProducts_tmp.helpers({
  'myProducts':function(){
    console.log("This sellers products:" + Meteor.userId());

    Loading.call("getSellerProducts", [], [], [], function (error, result){
      if (error)
      {
        console.log("Error getting seller products " + error) ;
      }
      else
      {
        // console.log("Got it");
        // console.log(result);
        Session.set("SellerProducts",result);
      }
    });
    
    
    return Session.get("SellerProducts");
  }
})

Template.Seller_tmp.helpers({
   
    amISeller: function() {
      if (Meteor.userId())

      {
    
        console.log(" Client Checking  for seller : " + Meteor.userId());
        Meteor.subscribe('getSeller',Meteor.userId());
         
        var result =  {
          _id:"",
           userId:Meteor.userId(),
           businessname : "",
           busTagLine: "",
           busLogo: "",
           busAvatar: "",
           bustel: "",
           buscel: "",
           busemail: "",
           cont1 : "",
           cont2 : "",
           add1: "",
           add2: "",
           add3: "",
           add4: "",
           add5: "",
           website: ""
          };
        if (Sellers.find({userId:Meteor.userId()}).count() === 0)
        {
          console.log("Seller not found");
        }        
        else
        {
          result = Sellers.findOne({userId:Meteor.userId()});          
        }  
       return result;
         
      }
        
        
    },
    
});

Template.seller.onRendered(function() {
  console.log("Create Seller template");
  
 
 
  
 
  });

  Template.tmp_product_sell.onRendered(function(){
   
     
  });

  Template.tmp_product_sell.events({
    'change .prodImg' :function (event,template)
    {     
      event.preventDefault();
      
      var fr=new FileReader();   
      document.getElementById('prdImages').innerHTML = "";
 
      var fileCount = event.currentTarget.files.length;
      
      if (fileCount > 10)
      {
        alert('Oh No Too Many files , please select 10 or less');
        event.currentTarget  ="";        
        return false;
      }
      var isToBig = false;
      var uploadSize =0;
      for (i=0 ; i < fileCount ; i++)
      {
        console.log("Processing files " + event.currentTarget.files[i].name);
         //document.querySelector('imgProgress').outerHTML="<span>Processing file "+ event.currentTarget.files[i].name +"</span>";
         HandleClientImageFile(event.currentTarget.files[i],"prdImages");
       
      }

 
      
     event.currentTarget  = "";
    
    }
  });

Template.seller.events({
   
    'change .imgBuLogo' :function (event,template)
    { 
     event.preventDefault();     
        console.log('Add Seller BusLogo Upload');
        Loading.start();
      
      var fr=new FileReader();        
      fr.onload=function(event){
              
              var data=event.target.result;      
              template.$('.imgBusLogo')[0].src = data;    
      }      
      fr.readAsDataURL(event.currentTarget.files[0]);  
      
      Loading.stop();
    },
    'change .imgAvatar' :function (event,template)
    { 
      event.preventDefault();        
      
      var fr=new FileReader();        
      fr.onload=function(event){
              var data=event.target.result;                            
              template.$('.imgBusAvatar')[0].src = data;          
      }
      if (event.currentTarget.files[0].size < 2000000)
      {
       fr.readAsDataURL(event.currentTarget.files[0]);          
      }
      else
      {
        template.$('.imgBusAvatar')[0].src = "/img/app/big.jpg";  
      }  
    },
    'submit .add_Seller_form' :function (event,template)
    {       
      
      event.preventDefault();
       target = event.target;
      //'seller.add'(excel) { 
        Loading.start();
         businessname = target.businessname.value;
         busTagLine= target.businesstagLine.value;
         busLogo= target.imgBusLogo.src;
         //busAvatar= target.imgBusAvatar.src;
         bustel= target.bustell.value;
         buscel= target.buscell.value;
         busemail= target.busemail.value;
         cont1 = target.person1.value;
         cont2 = target.person2.value;
         add1= target.add1.value;
         add2= target.add2.value;
         add3= target.add3.value;
         add4= target.add4.value;
         add5= target.add5.value;
         website= target.website.value;


         var busLogoFile = target.fileLogo.files;
         var randLogoId = Random.id();
         var buslogImdId = Random.id();      
      
         if (busLogoFile.length > 0)
         {
          var BuslogoImg = new FS.File(busLogoFile[0]);
           
            BuslogoImg.sellerId = Meteor.userId();
            BuslogoImg.ImageCat = "SellerDetails";
            BuslogoImg.ImageType = "BusLogo";
            BuslogoImg.ImageId = randLogoId;
            try {
              Images.insert(BuslogoImg, function (err, fileObj) {
                if (err)
                {
             
                }
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
              });      
              
            } catch (error) {
              
            }
              
           
         }
        
       
       createDate = Date.now().toLocaleString();

      if (target.currentuser === null)
      {
          alert('You must be logged in to be a seller');
          return false;
      }
     
      var SellerObj = {
          //_id:this._id,
           userId:Meteor.userId(),
           businessname : target.businessname.value,
           busTagLine: target.businesstagLine.value,
           busLogo: randLogoId,
           //busAvatar: randAvaId,
           bustel: target.bustell.value,
           buscel: target.buscell.value,
           busemail: target.busemail.value,
           cont1 : target.person1.value,
           cont2 : target.person2.value,
           add1: target.add1.value,
           add2: target.add2.value,
           add3: target.add3.value,
           add4: target.add4.value,
           add5: target.add5.value,
           website: target.website.value

      }

     // Loading.start();
      
  var result =  Meteor.call(
    'newSeller',
    SellerObj,
    (err) =>
            {
                if (err)
                {
                    console.log(err);
                    alert('OOps something went wrong adding new seller, please retry .');
                }
                else
                {
                    //clean up form   
                    try
                    {
                    
                    }
                    catch (exp)
                    {
                        console.log(exp);
                    }
                }
            });

            Loading.stop();
  
  }
});

 

 



  
  function HandleClientImageFile(file,targetElement)
  {
    var preview = document.querySelector("#" + targetElement);
    var fr = new FileReader();
   
    //insertImg.name="imgprds";
  
    if (file.name === null)
    {
      return null;
    }
  
     
    fr.onload =function(event)
    {
      var data = event.target.result;
      var insertImg = new Image();
      insertImg.id = "prdImages";
      //insertImg.style ="height=100%;width=100%"; 
      insertImg.className="prdImages img-responsive";    
      insertImg.src = data;
     
      

      var image = new Image();
      var compressedImage = new Image();
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = insertImg.naturalWidth;       
        canvas.height = insertImg.naturalHeight;        
       var ctx = canvas.getContext("2d").drawImage(insertImg, 0, 0);//,insertImg.naturalWidth,insertImg.naturalHeight, 0, 0,insertImg.naturalWidth,insertImg.naturalHeight);
       compressedImage.width =  insertImg.naturalWidth;
       compressedImage.height = insertImg.naturalHeight;
        var compressValue = 1/100;
       switch(true) {
        case (file.size < 400000):
            compressValue = 100/100;
            break;
        case (file.size < 800000):
            compressValue = 80/100;
            break;
        case (file.size < 2000000):
            compressValue = 60/100;
            break;
        case (file.size < 4000000):
            compressValue = 40/100;
            break;    
        case (file.size < 6000000):
            compressValue = 20/100;
            break;     
        default:
        compressValue = 10/100;
        break;     
    }

       compressedImage = canvas.toDataURL("image/jpeg", compressValue);
       var newImg  = new Image(); 
        //newImg.height =1000;
        newImg.id = "prdImages";
        newImg.src = compressedImage;
        newImg.className="prdImages img-responsive"; 
        preview.appendChild(newImg); 
      };
      image.src = data;

 

       
    
    }
  
    fr.readAsDataURL(file);
     
    
  }

  function compressImage(source_img_obj, quality, output_format){
             
    var mime_type = "image/jpeg";
    if(typeof output_format !== "undefined" && output_format=="png"){
       mime_type = "image/png";
    }
    var result_image_obj = new Image();
    
    try
    {
    var cvs = document.createElement('canvas');
    cvs.style.width = source_img_obj.naturalWidth;
    cvs.style.height = source_img_obj.naturalHeight;
 
    //ctx.drawImage(img,0,0,img.width,img.height,0,0,400,300);
    var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0,source_img_obj.naturalHeight,source_img_obj.naturalWidth, 0, 0,source_img_obj.naturalHeight,source_img_obj.naturalWidth);
    var newImageData = cvs.toDataURL(mime_type, quality/100);
    
    result_image_obj.src = newImageData;
    result_image_obj.style.width = source_img_obj.naturalWidth;
    result_image_obj.style.height = source_img_obj.naturalHeight;
    }
    catch (exp)
    {
        result_image_obj = null;
    }

    return result_image_obj; 
}

  function HandleClientImageData(file,targetElement)
  {
    var preview = document.querySelector("#" + targetElement);
     
 
    //insertImg.name="imgprds";
  
    if (file === null)
    {
      return null;
    }
  
     
    
      var data = file;
      var insertImg = new Image();
      insertImg.id = "prdImages";
      insertImg.style ="height=100%;width=100%"; 
      insertImg.className="prdImages img-responsive";    
      insertImg.src = data;    
      preview.appendChild(insertImg);    
    
     
    
  }
  
  
  
  
  
  if (Meteor.isClient)
  {
  

    
   
  
  Template.tmp_product_sell.events({
    'submit .product-link-add'(event) {
      var thisForm = $('.product-link-add');
      thisForm.validate();
      event.preventDefault();
        
      try {
      

 
        var productImages = event.target.prodImg.files;
        var compressedImages = $('.prdImages');
        var prodimgId = Random.id();
        var saveId;        
        if (productImages.length > 0)
        {
          
          for (var i =0;i < productImages.length ; i  ++)
          {
            var fr = new FS.File(compressedImages[i].src);

             
          
                    Loading.start();
                    var productImg = new FS.File(productImages[i]);
                    fr.name = productImg.name;
                    fr.extension = productImg.extension;
                    fr.type = productImg.type;
                    fr.sellerId = Meteor.userId();
                    fr.ImageCat = "ProductImage";
                    fr.ImageType = "ProductDisplay";
                    fr.ImageId = prodimgId ;
                    //template.$('.imgBusLogo')[0].src = data;    
                    saveId = Images.insert(fr, function (err, fileObj) {
                      // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                      });
                      Loading.stop();         
                  
        }  
        }
        
       
        
      } catch (error) {
        console.log("Error inserting Product Images");
        Loading.halt();
      }
     
      var ImagesInserted = prodimgId;
       
  
      //debugger;
      
      const target = event.target;
      const title = target.prdTitle.value;
      const description = target.prdDesc.value;
      const img = ImagesInserted;
      const price = target.prdprice.value;
      const prdCat = target.prdCat.value;
      const createDate =  new Date();
      const expireValue = target.prdExpire.value;
      const expireDate = new Date();
      
       
      console.log(description);
  
   
        var timetoadd = ReferenceData.findOne({name:"addTime",id:expireValue}).timetoadd;
    
        var expDate = new Date();//Date.parse(expDate.format());// moment().add(timetoadd,'days');
        var myExpDate =new Date();// Date.parse(expDate.format());
  
        var prodObj =
        {
          sellerId:Meteor.userId(),
          producttitle:title,    
          productDescription:description,
          price:price,
          prdCat:prdCat,
          prodImg : img,
          createdAt:createDate,
          expireAt : new Date(myExpDate) 
        }
       
       // Here we need to get the images that have been selected to be uploaded to the server
        
      
  
        try {
          Loading.call("products.insert", prodObj, [], [], function (error, result){
            if (error)
            {
              alert('Something went wrong. Please try again.')
            }
            else
            {
              //clear form.
            }
          });
                   
        } catch (error) {
          console.log("Error Inserting product");
  
          
        }
        
   
   
      
  
    }
  });
  
  }