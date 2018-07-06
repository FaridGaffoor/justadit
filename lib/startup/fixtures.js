Meteor.startup(() => { 
    if (Meteor.isServer) {

     
        

    console.log("Server Fixture Startup");  
      // if the Links collection is empty
      /*
      console.log(Links.find().count());
      if (Links.find().count() === 0) {
        const data = [
          {
            title: 'Do the Tutorial',
            url: 'https://www.meteor.com/try',
            createdAt: new Date(),
          },
          {
            title: 'Follow the Guide',
            url: 'http://guide.meteor.com',
            createdAt: new Date(),
          },
          {
            title: 'Read the Docs',
            url: 'https://docs.meteor.com',
            createdAt: new Date(),
          },
          {
            title: 'Discussions',
            url: 'https://forums.meteor.com',
            createdAt: new Date(),
          },
        ];
    
        data.forEach(link => Links.insert(link));
      }*/
    
      console.log("Reference Data Check : " + ReferenceData.find().count() ) ;
      
      if (ReferenceData.find().count() === 0 )
        {
          console.log("Adding Reference Data");
          const refDatas = [

          
            {name:"busCat",id:"0",value:"Electronic"},
            {name:"busCat",id:"1",value:"Fashion"},
            {name:"busCat",id:"2",value:"Convience"},
            {name:"busCat",id:"3",value:"Food"},     
            {name:"busCat",id:"4",value:"Once Off"},
            {name:"addTime",id:"1",value:"Free",timetoadd:1},
            {name:"addTime",id:"2",value:"3 Days",timetoadd:3},
            {name:"addTime",id:"3",value:"1 Week",timetoadd:7},
            {name:"addTime",id:"4",value:"2 Weeks",timetoadd:14},
            {name:"addTime",id:"5",value:"1 Month",timetoadd:30},
            {name:"prdCat",id:"0",value:"Deals"},
            {name:"prdCat",id:"1",value:"Home"},
            {name:"prdCat",id:"2",value:"Food"},
            {name:"prdCat",id:"3",value:"Security"},
            {name:"prdCat",id:"4",value:"Education"},
            {name:"prdCat",id:"5",value:"Cosmetic"},
            {name:"prdCat",id:"6",value:"Kitchen"},
            {name:"prdCat",id:"7",value:"Services"},
            {name:"prdCat",id:"8",value:"Tools"},
            {name:"prdCat",id:"9",value:"Fashion"},
            {name:"prdCat",id:"10",value:"Motor Sales"},
            {name:"prdCat",id:"11",value:"Computer"},
            {name:"prdCat",id:"12",value:"Health"},
            {name:"prdCat",id:"13",value:"Pop Ups"},
            {name:"prdCat",id:"13",value:"Community Events"},
            {name:"prdCat",id:"14",value:"Other"}
                ];
      
                refDatas.forEach(refData => ReferenceData.insert(refData));
                console.log("Reference Data Post Insert Check : " + ReferenceData.find().count() ) ;
          }
    
        console.log("Product Data Check : " + Products.find().count() ) ;
      
        
          
           
           
        if (Products.find().count() === 0)
        { 
            prodData = [         
            {
            sellerId:"1",
            producttitle:"some item",
            productDescription:"Some Product description",
            price:"100.00",
            prdCat:0,    
            prodImg : ["1"],
            createdAt:new Date(),
            expireAt : Date.now() + (150000 * 60) 
            },
        
            {
            sellerId:"1",
            producttitle:"some item",    
            productDescription:"Some Other description",
            price:"100.00",
            prdCat:0,
            prodImg : ["2"],
            createdAt:new Date(),
            expireAt : Date.now() + (150000 * 60) 
            },
        
            {
            sellerId:"1",
            producttitle:"some item",
            productDescription:"Some New description",
            price:"100.00",
            prdCat:0,
            prodImg : [ "3"],
            createdAt:new Date(),
            expireAt : Date.now() + (150000 * 60) 
            }];
            prodData.forEach(prod => Products.insert(prod));
            console.log("Products Data Post Insert Check : " + Products.find().count() ) ;

        }
       
        console.log("Selleres Data Check : " + Sellers.find().count() ) ;   
    
        if (Sellers.find().count() === 0)
        {
            Sellers.insert({_id:"1",
              busCat:"Electronic",
            businessname:"Test Business",         
            businessag:"tag line",
            add1:"Address 1",
            add2:"Address 2",
            add3:"Address 3",
            add4:"Address 4",
            office:"0118574563",
            cell:"0118574563",
            email:"0118574563",
            contact1:"bob",
            contact2:"rick", 
            url:"www.somesite.com",
            logoImg:"http://cooldigital.photography/wp-content/uploads/2014/02/Details-of-a-Marigold-Blossom-620x404.jpg",
            createdAt: new Date()
        });
        console.log("Sellers Data Post Insert Check : " + Sellers.find().count() ) ;
        }


        if (Images.find().count === 0)
        {
          Images.insert({
            
            "original" : {
                "name" : "249442-3600x2395.jpg",
                "updatedAt" : ISODate("2014-07-18T11:51:58.000Z"),
                "size" : 1874582,
                "type" : "image/jpeg"
            },
            "sellerId" : "1",
            "ImageCat" : "ProductImage",
            "ImageType" : "ProductDisplay",
            "ImageId" : "1",
            "uploadedAt" : ISODate("2017-12-25T15:17:25.937Z"),
            "copies" : {
                "images" : {
                    "name" : "249442-3600x2395.jpg",
                    "type" : "image/jpeg",
                    "size" : 1874582,
                    "key" : "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
                    "updatedAt" : ISODate("2017-12-25T15:17:25.968Z"),
                    "createdAt" : ISODate("2017-12-25T15:17:25.968Z")
                }
            }
        });
        Images.insert({
          
          "original" : {
              "name" : "249442-3600x2395.jpg",
              "updatedAt" : ISODate("2014-07-18T11:51:58.000Z"),
              "size" : 1874582,
              "type" : "image/jpeg"
          },
          "sellerId" : "1",
          "ImageCat" : "ProductImage",
          "ImageType" : "ProductDisplay",
          "ImageId" : "2",
          "uploadedAt" : ISODate("2017-12-25T15:17:25.937Z"),
          "copies" : {
              "images" : {
                  "name" : "249442-3600x2395.jpg",
                  "type" : "image/jpeg",
                  "size" : 1874582,
                  "key" : "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
                  "updatedAt" : ISODate("2017-12-25T15:17:25.968Z"),
                  "createdAt" : ISODate("2017-12-25T15:17:25.968Z")
              }
          }
      });
      Images.insert({
       
        "original" : {
            "name" : "249442-3600x2395.jpg",
            "updatedAt" : ISODate("2014-07-18T11:51:58.000Z"),
            "size" : 1874582,
            "type" : "image/jpeg"
        },
        "sellerId" : "1",
        "ImageCat" : "ProductImage",
        "ImageType" : "ProductDisplay",
        "ImageId" : "3",
        "uploadedAt" : ISODate("2017-12-25T15:17:25.937Z"),
        "copies" : {
            "images" : {
                "name" : "249442-3600x2395.jpg",
                "type" : "image/jpeg",
                "size" : 1874582,
                "key" : "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
                "updatedAt" : ISODate("2017-12-25T15:17:25.968Z"),
                "createdAt" : ISODate("2017-12-25T15:17:25.968Z")
            }
        }
    });
        }
      console.log("Fixtures Done");
     
      
    }
})