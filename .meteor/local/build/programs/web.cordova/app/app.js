var require = meteorInstall({"client":{"templates":{"template.Maintain_Product.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.Maintain_Product.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("tmp_product_maintain");
Template["tmp_product_maintain"] = new Template("Template.tmp_product_maintain", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page product ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n            ", Blaze.View("lookup:uiLogger", function() {
    return Spacebars.mustache(view.lookup("uiLogger"), view.lookup("thisSelectedProduct"));
  }), "\n                ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("thisSelectedProduct"));
  }, function() {
    return [ "   \n                \n                  ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call(Spacebars.dot(view.lookup("thisSelectedProduct"), "producttitle")),
        black: Spacebars.call(true),
        back: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("nav"), function() {
        return [ "\n                    ", HTML.Comment(' {{#if bookmarked}}\n                      <a href="#" class="nav-item js-remove-bookmark bookmarked"><span class="icon-bookmark"></span></a>\n                    {{else}}\n                      <a href="#" class="nav-item js-add-bookmark"><span class="icon-bookmark-hollow"></span></a>\n                    {{/if}} '), "\n                  ", HTML.Comment('<a href="#" class="nav-item js-share"><span class="icon-camera"></span></a>'), "\n                  " ];
      });
    }), "\n                \n                   \n                  ", HTML.DIV({
      class: "content-scrollable static-nav product-scrollable"
    }, "\n                    ", HTML.DIV("\n\n                    "), "\n                    ", HTML.DIV({
      class: "container-fluid panel-body form-row"
    }, "\n\n                    ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.dataMustache(view.lookup("getImageById"), view.lookup("prodImg")),
        _variable: "imgs"
      };
    }, function() {
      return [ "               \n       \n                        ", HTML.DIV({
        class: "col-sm-4 col-md-4 col-lg-2",
        style: function() {
          return [ "background-image:url('", Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "url")), "');height:300px" ];
        }
      }, "    \n                                ", HTML.Comment(" <img   class=\"img-responsive panel-body \"     src=\"{{imgs.url store='images' loading='/images/uploading.gif' uploading='/images/uploading.gif' storing='/images/storing.gif'}}\" alt=\"\"  /> "), "\n                                \n                                 ", HTML.IMG({
        class: "deleteImg btn primary-btn",
        src: "/images/delImage.png",
        style: "width:5em;height:5em;display:block;margin-left:auto;position:relative; margin-right:auto;margin-top:auto;top:50%",
        imgid: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "_id"));
        }
      }), "\n                           \n                        "), "                                                   \n     \n                     " ];
    }), "\n                    "), "\n                    ", HTML.DIV({
      class: "container-fluid panel-body"
    }, "\n                      ", HTML.DIV({
      class: "form-row"
    }, "\n                          ", HTML.DIV({
      class: "col-md-4"
    }, "\n                              ", HTML.LABEL("Product Title :"), "\n                              ", HTML.INPUT({
      type: "text",
      class: "",
      id: "txtTitle",
      value: function() {
        return Spacebars.mustache(view.lookup("producttitle"));
      }
    }), "\n                          "), "\n                          ", HTML.DIV({
      class: "col-md-4"
    }, "\n                                ", HTML.LABEL("Product Description :"), "\n                                ", HTML.INPUT({
      type: "text",
      id: "txtDescription",
      value: function() {
        return Spacebars.mustache(view.lookup("productDescription"));
      }
    }), "\n                            "), "\n                            ", HTML.DIV({
      class: "col-md-4"
    }, "\n                                    ", HTML.LABEL("Product Price :"), "\n                                    ", HTML.INPUT({
      type: "text",
      id: "txtPrice",
      value: function() {
        return Spacebars.mustache(view.lookup("price"));
      }
    }), "\n                            "), "\n                            ", HTML.DIV({
      class: "col-md-4"
    }, "\n                                    ", HTML.LABEL("Product Category :"), "\n                                    ", HTML.INPUT({
      type: "text",
      id: "txtPrice",
      value: function() {
        return Spacebars.mustache(view.lookup("price"));
      }
    }), "\n                            "), "\n                            ", HTML.DIV({
      class: "col-md-4"
    }, "\n                                    ", HTML.LABEL("Product Status : Active"), "\n                                     \n                            "), "\n                            \n                              \n                      "), "     \n                    "), "\n                    \n                     ", HTML.Comment(' <div class="card" >\n                        <div class="panel-body">\n                            <div class="card-block">\n                                <div class="media-left">\n                                   <div class="row">\n                                      <div class="col-md-4 col-sm-4">\n                                          <div style="width:236px;height:236px">\n                                              {{>showImage imgId=seller.busLogo}}\n                                            </div>\n                                      </div>\n                                      <div class="col-md-8 col-sm-8">\n                                        {{#if currentUser}}\n                                          <div class="media-body">\n                                              <h1 class="text-capitalize">{{seller.businessname}}</h1>\n                                                <div class="panel-body">\n                                                    <h1>Contact</h1>\n                                                    <div class="card-subtitle">\n                                                      <div class="row">\n                                                          <div class="col-sm-4">\n                                                              <span class="glyphicon glyphicon-phone"></span>\n                                                              {{seller.buscel}}\n                                                          </div>\n                                                      </div>\n                                                      <div class="row">\n                                                          <div class="col-sm-4">\n                                                              <span class="glyphicon glyphicon-envelope"></span>\n                                                              {{seller.busemail}}\n                                                          </div>\n                                                      </div>\n                                                      <div class="row">\n                                                          <div class="col-sm-4">\n                                                              <span class="glyphicon glyphicon-user"></span>\n                                                              {{seller.cont1}}/{{seller.cont2}}\n                                                          </div>\n                                                      </div>\n                                                    </div>                        \n                                                </div>                    \n                                              <div class="clearfix"></div>                 \n                                            </div>    \n                                      \n                                      \n                                            {{else}}\n                                              Please login to view details\n                                            {{/if}}    \n                                      </div>\n                                   </div>                    \n                                </div>            \n                                               \n                            </div>            \n                        </div>       \n                    </div>  \n                     '), "\n                  "), "\n                  " ];
  }), "\n               ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Sell_Product.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.Sell_Product.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("tmp_product_sell");
Template["tmp_product_sell"] = new Template("Template.tmp_product_sell", (function() {
  var view = this;
  return HTML.FORM({
    class: "product-link-add"
  }, "\n            ", HTML.DIV({
    class: "form-row"
  }, "\n              ", HTML.DIV({
    class: "form-group col-md-4"
  }, "\n                ", HTML.DIV({
    class: "form-group"
  }, "\n                  ", HTML.Raw('<label for="img" class="col-form-label">Product Image</label>'), "\n                  ", HTML.Raw('<div class="card">\n                    <!--<img id="prdImg" class="img-responsive"  width="304" name="imgprd" height="236">\n                    -->\n                  </div>'), "\n                  ", HTML.DIV({
    name: "imgProgress"
  }, "\n                    \n                    ", HTML.IMG({
    name: "imgBusLogo",
    id: "imgBuslogo",
    class: "imgBusLogo img-fluid img-responsive panel-body ",
    width: "236px",
    height: "236px",
    src: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
        store: "images",
        uploading: "/images/uploading.gif",
        storing: "/images/storing.gif"
      }));
    },
    alt: ""
  }), " \n                  "), "\n                  ", HTML.Raw('<div id="prdImages" name="prdImages" style="height:auto;width:auto">\n               \n    \n                  </div>'), "\n              \n                  ", HTML.Raw('<input type="file" name="prodImg" class="prodImg" multiple="multiple" id="prodImg" placeholder="Please select product image">'), "                  \n                "), "\n              "), "\n              ", HTML.DIV({
    class: "form-group col-md-8"
  }, "\n                ", HTML.Raw('<div class="form-row">\n                  <div class="form-group col-md-6">\n                    <!-- <label for="title" class="col-form-label">Product Title</label> -->\n                    <input type="text" name="prdTitle" class="required" placeholder="Product Title">\n                  </div>                 \n                  <div class="form-group col-md-6">\n                    <!-- <label for="description" class="col-form-label">Product Description</label> -->\n                    <input type="text" name="prdDesc" class="required" placeholder="Product Description">\n                  </div>                \n                  <div class="form-group col-md-2">\n                    <!-- <label for="price" class="col-form-label">Price</label> -->\n                    <input type="text" name="prdprice" class="required" placeholder="100.00">\n                  </div>\n                </div>'), "\n                ", HTML.DIV({
    class: "form-row"
  }, "\n                  ", HTML.DIV({
    class: "form-group col-md-3"
  }, "\n                    ", HTML.Raw('<!--<input type="hidden" name="sellerId">{{Meteor.userId}}</input> -->'), "\n                    ", HTML.Raw('<!-- <label for="lprdCat" class="col-form-label">Category</label> -->'), "\n                    ", HTML.SELECT({
    id: "prdCat",
    class: "prdCat form-control ",
    name: "prdCat",
    placeholder: "Please select product category"
  }, "\n               \n                      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("get_Prod_Cat"));
  }, function() {
    return [ "\n                          ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("id"));
      }
    }, Blaze.View("lookup:value", function() {
      return Spacebars.mustache(view.lookup("value"));
    })), "\n                      " ];
  }), "\n                    "), "\n                  "), "\n    \n                  \n                  ", HTML.DIV({
    class: "form-group col-md-3"
  }, "\n                    ", HTML.Raw('<!--<input type="hidden" name="sellerId">{{Meteor.userId}}</input>  \n                    <label for="expireDate" class="col-form-label">End Date</label>-->'), "\n                    ", HTML.SELECT({
    id: "prdExpire",
    class: "prdExpire form-control ",
    name: "prdExpire",
    placeholder: "Please select product advert period length"
  }, "\n                      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("get_Add_Length"));
  }, function() {
    return [ "\n                          ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("id"));
      }
    }, Blaze.View("lookup:value", function() {
      return Spacebars.mustache(view.lookup("value"));
    })), "\n                      " ];
  }), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n            "), "\n                \n                ", HTML.DIV({
    class: "form-group"
  }, "\n                  ", HTML.Raw('<!-- <div class="form-row ">\n                     <div class="col-md-8">\n                        <input name="chkTC" class="button" type="button" onclick="document.getElementById(\'btnAdd\').enable = this.value;" > \n                        <label class="form-check-label">\n                            Accept terms and conditions\n                        </label>\n                    </div>\n                  </div> -->'), "\n                ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n                  ", HTML.BUTTON({
      id: "btnAdd",
      type: "submit",
      class: "btn btn-primary"
    }, "Start"), "\n                " ];
  }, function() {
    return [ "\n                  ", HTML.LABEL({
      for: "expireDate",
      class: "col-form-label"
    }, "You must login and register as a Seller."), "\n                " ];
  }), "\n                "), "\n                \n                \n              ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.about.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.about.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return HTML.DIV({
    class: "page about"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("About"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), HTML.Raw('\n\n    <div class="content-scrollable">\n      <div class="bg-image about">\n        <h1 class="title-about">\n          <img src="img/app/title-about.svg" alt="Go Local">\n        </h1>\n      </div>\n      <div class="description-about">\n        <p>Be a local wherever you go. Connect to Local Market’s community to get the latest news, hand-picked products , and share with other locals. .</p>\n\n        <p>Just Ad It was built of the Local Market theme  made by <a href="http://percolatestudio.com" target="_blank" class="js-open">Percolate Studio</a> .</p>\n      </div>\n\n    </div>\n    \n  '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.activity.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.activity.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("activity");
Template["activity"] = new Template("Template.activity", (function() {
  var view = this;
  return HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("path"));
    },
    class: "item-activity"
  }, "\n\n    ", HTML.SPAN({
    class: "attribution"
  }, "\n      ", HTML.SPAN({
    class: "avatar"
  }, "\n        ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("userAvatar"));
    },
    class: "image-avatar"
  }), "\n      "), "\n      ", HTML.SPAN({
    class: "meta"
  }, "\n        ", HTML.SPAN({
    class: "author"
  }, Blaze.View("lookup:firstName", function() {
    return Spacebars.mustache(view.lookup("firstName"));
  })), " made ", HTML.SPAN({
    class: "recipe"
  }, Blaze.View("lookup:recipeTitle", function() {
    return Spacebars.mustache(view.lookup("recipeTitle"));
  })), ": ", Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  }), "\n       ", Blaze.If(function() {
    return Spacebars.call(view.lookup("place"));
  }, function() {
    return HTML.SPAN({
      class: "location"
    }, HTML.CharRef({
      html: "&mdash;",
      str: "—"
    }), Blaze.View("lookup:place", function() {
      return Spacebars.mustache(view.lookup("place"));
    }));
  }), "\n       "), "\n    "), "\n\n    ", HTML.DIV({
    class: "bg-image",
    style: function() {
      return [ "background-image: url('", Spacebars.mustache(view.lookup("image")), "');" ];
    }
  }), "\n\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.admin.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.admin.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("admin");
Template["admin"] = new Template("Template.admin", (function() {
  var view = this;
  return HTML.DIV({
    id: "admin"
  }, HTML.Raw('\n    <a href="/" class="back-desktop"><span class="icon-arrow-left-alt"></span> Back</a>\n    '), HTML.DIV({
    class: "wrapper-admin"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isAdmin"));
  }, function() {
    return [ "\n        ", HTML.H1({
      class: "title-admin"
    }, "Admin"), "\n\n        ", HTML.FORM("\n          ", HTML.LABEL("Edit the front page news:"), "\n          ", HTML.TEXTAREA({
      name: "text",
      rows: "5",
      placeholder: "Show the latest Local Market news on the the frontpage...",
      value: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("latestNews"), "text"));
      }
    }), "\n          ", HTML.BUTTON({
      type: "submit",
      class: "btn-primary"
    }, "Save"), "\n        "), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.H1({
      class: "title-admin"
    }, "Forbidden"), "\n        \n        ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("currentUser"));
    }, function() {
      return [ "\n          ", HTML.A({
        class: "login"
      }, "Log in with Twitter"), "\n        " ];
    }), "\n      " ];
  }), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.app-body.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.app-body.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("appBody");
Template["appBody"] = new Template("Template.appBody", (function() {
  var view = this;
  return [ HTML.Raw('<!--\n  <div class="wrapper-welcome">\n    <div class="title-welcome">Local Market</div>\n    <div class="description-welcome">Local Market was made by <a href="http://percolatestudio.com" target="_blank" class="js-open">Percolate Studio</a> as an example of a cross platform mobile app built in <a href="https://www.meteor.com" target="_blank" class="js-open">Meteor</a>. The entire app is less than 1,000 lines of JavaScript. View the source on <a href="https://github.com/meteor/meteor/tree/devel/examples/localmarket" target="_blank" class="js-open">GitHub</a>.\n    </div>\n    \n    <div class="description-welcome">\n    The app is designed to run on a physical device, where it uses the hardware\'s native camera and GPS support.\n    </div>\n\n    <div class="description-welcome">\n    You can also run it in a simulator, or in a desktop browser as a convenience (what you\'re looking at right now).\n    </div>\n\n    <div class="description-welcome">\n    This app includes a simple administrative backend that you can use to set welcome text on the app\'s home screen. Visit <a href="{{pathFor \'admin\'}}">/admin</a> to log into the backend. The first authenticated user is allowed access.\n    </div>\n  </div>\n-->\n\n  '), HTML.DIV({
    id: "container",
    class: function() {
      return [ Spacebars.mustache(view.lookup("menuOpen")), " ", Spacebars.mustache(view.lookup("overlayOpen")) ];
    }
  }, "\n    ", HTML.SECTION({
    id: "menu",
    class: "overthrow"
  }, "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    },
    class: function() {
      return Spacebars.mustache(view.lookup("activePage"), "home");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-home"></span>\n          <span class="title-menu">Home</span>\n        </span>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "products");
    },
    class: function() {
      return Spacebars.mustache(view.lookup("activePage"), "products");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="glyphicon glyphicon-shopping-cart"></span>\n          <span class="title-menu">Buy</span>\n        </span>'), "\n      "), "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n      ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "seller");
      },
      class: function() {
        return Spacebars.mustache(view.lookup("activePage"), "seller");
      }
    }, "\n        ", HTML.SPAN({
      class: "wrapper-menu-item"
    }, "\n          ", HTML.SPAN({
      class: "glyphicon glyphicon-tags"
    }), "\n          ", HTML.SPAN({
      class: "title-menu"
    }, "Sell"), "\n        "), "\n      "), "\n      ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "notifications");
      },
      class: function() {
        return Spacebars.mustache(view.lookup("activePage"), "notifications");
      }
    }, "\n        ", HTML.SPAN({
      class: "wrapper-menu-item"
    }, "\n          ", HTML.SPAN({
      class: "glyphicon glyphicon-tags"
    }), "\n          ", HTML.SPAN({
      class: "title-menu"
    }, "Notifications"), "\n        "), "\n      "), "\n      " ];
  }), "\n\n      \n      ", HTML.Raw('<!-- <a href="{{pathFor \'feed\'}}" class="{{activePage \'feed\'}}">\n        <span class="wrapper-menu-item">\n          <span class="icon-rss"></span>\n          <span class="title-menu">What\'s<br>Cooking</span>\n        </span>\n      </a>\n      <a href="{{pathFor \'recipes\'}}" class="{{activePage \'recipes\' \'recipe\'}}">\n        <span class="wrapper-menu-item">\n          <span class="icon-category"></span>\n          <span class="title-menu">Recipes</span>\n        </span>\n      </a>\n      <a href="{{pathFor \'bookmarks\'}}" class="{{activePage \'bookmarks\'}}">\n        <span class="wrapper-menu-item">\n          <span class="icon-bookmark-hollow"></span>\n          <span class="title-menu">Bookmarks</span>\n        </span>\n      </a> -->'), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "about");
    },
    class: function() {
      return Spacebars.mustache(view.lookup("activePage"), "about");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-question"></span>\n          <span class="title-menu">About</span>\n        </span>'), "\n      "), "\n\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "login");
    },
    class: function() {
      return Spacebars.mustache(view.lookup("activePage"), "login");
    }
  }, "\n          ", HTML.Raw('<span class="wrapper-menu-item">\n            <span class="glyphicon glyphicon-user"></span>\n            <span class="title-menu">Login</span>\n          </span>'), "\n        "), "\n    "), "\n\n      ", HTML.DIV({
    class: "notifications"
  }, "\n        ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("connected"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      class: "notification"
    }, "\n            ", HTML.SPAN({
      class: "icon-sync"
    }), "\n            ", HTML.DIV({
      class: "title-notification"
    }, "Trying to connect"), "\n          "), "\n        " ];
  }), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("notifications"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      class: "notification"
    }, "\n            ", HTML.A({
      class: "btn-primary js-notification-action"
    }, Blaze.View("lookup:action", function() {
      return Spacebars.mustache(view.lookup("action"));
    })), "\n            ", HTML.DIV({
      class: "title-notification"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n          "), "\n        " ];
  }), "\n      "), "\n\n    ", Spacebars.include(view.lookupTemplate("overlay")), "\n\n    ", HTML.Raw('<div class="content-overlay"></div>'), "\n\n    ", HTML.DIV({
    id: "content-container"
  }, "\n      ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n\n  ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.auth-overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.auth-overlay.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("authOverlay");
Template["authOverlay"] = new Template("Template.authOverlay", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page product ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Login"),
      black: Spacebars.call(true),
      back: Spacebars.call(false)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return "\n        ";
    });
  }), "\n        ", HTML.DIV({
    class: "content-scrollable static-nav "
  }, "\n          ", HTML.DIV({
    class: "container-fluid",
    style: "height: 100%;max-height: 360px"
  }, "\n              ", HTML.DIV({
    class: "",
    style: "position:absolute;display:inline-block;left:30%;top:20%"
  }, " \n                  ", HTML.DIV({
    class: "panel-body",
    style: "position: relative;left:-25%"
  }, "\n                        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n                  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n                    ", Spacebars.include(view.lookupTemplate("logout")), "\n                  " ];
  }, function() {
    return [ "\n                \n                      ", Spacebars.include(view.lookupTemplate("customLogin")), "\n                     \n                     \n                  \n                  " ];
  }), "\n                  "), "\n              "), "\n          "), "\n            \n          ", HTML.Raw('<div style="position: relative;display:inline-block;height:400px;left:30%;top:30%">\n          <!-- <div id="login-screen">\n            {{> loginButtons}}\n          </div> -->\n          \n           \n        </div>'), "\n              \n         "), "\n  ");
}));

Template.__checkName("logout");
Template["logout"] = new Template("Template.logout", (function() {
  var view = this;
  return HTML.Raw('<div>\n        <button class="btn btn-primary col-xs-12 col-sm-12 btnLogout" id="btnLogout" type="button">Logout</button>\n        <button class="btn btn-secondary col-xs-12 col-sm-12 btnCancel " type="button">Cancel</button>\n      </div>');
}));

Template.__checkName("customLogin");
Template["customLogin"] = new Template("Template.customLogin", (function() {
  var view = this;
  return HTML.Raw('<div class="panel-heading title-product"><h1>Login</h1></div>\n    <form id="login-form" action="action">\n      <div>\n          <div class="form-group">\n              <label for="emailAddress">Email address</label>\n              <input type="email" class="form-control" id="emailAddress" placeholder="Email">\n            </div>\n            <div class="form-group">\n                <label for="password">Password</label>\n                <input type="password" class="form-control" id="password" placeholder="Password">\n              </div>\n        <div style="">\n          <button id="btnLogin" class="btn btn-primary col-xs-12 col-sm-12 btnLogin " type="button">Login</button>\n          <button class="btnCancel btn btn-secondary col-xs-12 col-sm-12 " type="button">Cancel</button>\n        </div>\n        \n      </div>\n      </form>\n      <div class="row">      \n          <button id="bSignup" class="bSignup btn" type="button">Signup</button>\n          <button ib="bForgot" class="btn" type="submit">Forgot password</button>\n          \n      </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.auth-signup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.auth-signup.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("authOverlaySignup");
Template["authOverlaySignup"] = new Template("Template.authOverlaySignup", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page product ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Signup"),
      black: Spacebars.call(true),
      back: Spacebars.call(false)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return "\n        ";
    });
  }), "\n        ", HTML.DIV({
    class: "content-scrollable static-nav "
  }, "\n          ", HTML.DIV({
    class: "container-fluid",
    style: "height: 100%;max-height: 360px"
  }, "\n              ", HTML.DIV({
    class: "",
    style: "position:absolute;display:inline-block;left:30%;top:20%"
  }, " \n                  ", HTML.DIV({
    class: "panel-body",
    style: "position: relative;left:-25%"
  }, "\n                  ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n                    ", Spacebars.include(view.lookupTemplate("logout")), "\n                  " ];
  }, function() {
    return [ "\n                   \n                      ", Spacebars.include(view.lookupTemplate("SignUp")), "\n                     \n                  " ];
  }), "\n                  "), "\n              "), "\n          "), "\n            \n          ", HTML.Raw('<!-- <div style="position: relative;display:inline-block;height:400px;left:30%;top:30%">\n          <div id="login-screen">\n            {{> loginButtons}}\n          </div>\n          \n           \n        </div> -->'), "\n              \n         "), "\n  ");
}));

Template.__checkName("SignUp");
Template["SignUp"] = new Template("Template.SignUp", (function() {
  var view = this;
  return HTML.Raw('<div class="panel-heading title-product"><h1>Signup</h1></div>\n      <form id="sign-up-form" class="sign-up-form">\n        <div>\n            <div class="form-group">\n                <label for="signupEmail">Email address</label>\n                <input type="email" class="form-control" id="signupEmail" placeholder="Email">\n              </div>\n              <div class="form-group">\n                  <label for="signupPassword">Password</label>\n                  <input type="password" class="form-control" id="signupPassword" placeholder="Password">\n                </div>\n                <div class="form-group">\n                    <label for="signupRPassword">Repeat Password</label>\n                    <input type="password" class="form-control" id="signupRPassword" placeholder="Repeat Password">\n                  </div>\n          <div style="">\n            <button name="btnSignUp" class="btnSignup btn btn-primary col-xs-12 col-sm-12 " id="btnSignUp" type="button">Sign up</button>\n            <button class="btn btn-secondary col-xs-12 col-sm-12 btnCancel" type="button">Cancel</button>\n          </div>\n          <div class="row">\n              <button id="bLogin" class="bLogin btn " type="button">Login</button>             \n            </div>\n        </div>\n        </form>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.bookmarks.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.bookmarks.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("bookmarks");
Template["bookmarks"] = new Template("Template.bookmarks", (function() {
  var view = this;
  return HTML.DIV({
    class: "page bookmarks"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Your Bookmarks"),
      subtext: Spacebars.call(view.lookup("recipeCount"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    class: "content-scrollable"
  }, "\n      ", HTML.DIV({
    class: "list-recipes"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return [ "\n          ", Blaze._TemplateWith(function() {
      return {
        recipe: Spacebars.call(view.lookup(".")),
        size: Spacebars.call("large")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("recipeItem"));
    }), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      class: "wrapper-message"
    }, "\n            ", HTML.DIV({
      class: "title-message"
    }, "No bookmarks yet"), "\n            ", HTML.DIV({
      class: "subtitle-message"
    }, "Tap ", HTML.SPAN({
      class: "icon-bookmark-hollow"
    }), " to bookmark your favorite recipes. ", HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "home");
      }
    }, "Return home")), "\n\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.card.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.card.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("card");
Template["card"] = new Template("Template.card", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "col-sm-8"
  }, "\n    ", HTML.DIV({
    class: "card"
  }, "\n\n   \n        ", Blaze.View("lookup:cardDetails.prodImg", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("cardDetails"), "prodImg"));
  }), "\n        ", HTML.DIV("\n            ", Blaze._TemplateWith(function() {
    return {
      inputImages: Spacebars.call(Spacebars.dot(view.lookup("cardDetails"), "prodImg"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("carousel"));
  }), "\n        "), "\n      ", HTML.Raw('<!--img class="card-img-top img-responsive" src="http://placehold.it/800x400" alt="Card image cap">-->'), "\n      ", HTML.DIV({
    class: "card-block"
  }, "\n        ", HTML.Raw('<h4 class="card-title">cardDetails.producttitle</h4>'), "\n        ", HTML.Raw('<p class="card-text">cardDetails.productDescription</p>'), "\n        ", Blaze._TemplateWith(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("product"), "sellerId"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("SellerShort"));
  }), "\n         \n      "), "\n    "), "\n    ", HTML.Raw("<!-- /.card -->"), "\n  "), HTML.Raw("  <!-- /.col -->") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.carousel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.carousel.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("carousel");
Template["carousel"] = new Template("Template.carousel", (function() {
  var view = this;
  return HTML.DIV(HTML.Raw('\n    <!--id="Caro{{carID}}"-->\n    '), HTML.DIV({
    id: "Caro",
    class: "carousel slide ",
    style: "width:100%;margin :auto;height:400px;padding:4em;background-color: #d83e14",
    "data-ride": "carousel"
  }, "\n        ", HTML.OL({
    class: "carousel-indicators"
  }, "          \n            ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.dataMustache(view.lookup("getImageById"), view.lookup("prodImg")),
      _variable: "imgs"
    };
  }, function() {
    return [ "      \n                \n                ", Blaze.Let({
      slideIndex: function() {
        return Spacebars.call(view.lookup("@index"));
      }
    }, function() {
      return [ "                                   \n                    ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("compare"), view.lookup("slideIndex"), 0);
      }, function() {
        return [ "\n                        ", HTML.LI({
          "data-target": "#Caro",
          "data-slide-to": function() {
            return Spacebars.mustache(view.lookup("@index"));
          },
          class: "active"
        }), "                       \n                    " ];
      }), "\n                    ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("bigger"), view.lookup("slideIndex"), 0);
      }, function() {
        return [ "\n                        ", HTML.LI({
          "data-target": "#Caro",
          "data-slide-to": function() {
            return Spacebars.mustache(view.lookup("@index"));
          }
        }), "                       \n                    " ];
      }), "\n                " ];
    }), "          \n                \n            " ];
  }), "                   \n        "), "\n\n        ", HTML.Raw("<!-- Wrapper for slides -->"), "\n        ", HTML.DIV({
    id: "CaroImg",
    class: "carousel-inner carouselBack bg-image"
  }, "\n\n\n\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.dataMustache(view.lookup("getImageById"), view.lookup("prodImg")),
      _variable: "imgs"
    };
  }, function() {
    return [ "      \n\n            ", Blaze.Let({
      imgIndex: function() {
        return Spacebars.call(view.lookup("@index"));
      }
    }, function() {
      return [ "  \n\n\n                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("compare"), view.lookup("imgIndex"), 0);
      }, function() {
        return [ "\n                ", HTML.DIV({
          class: "item  active  card   "
        }, "    \n                   \n                     \n                        ", HTML.getTag("picture")("\n                          ", HTML.SOURCE({
          media: "(max-height:380px)",
          srcset: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "url"), Spacebars.kw({
              store: "images",
              loading: "/images/uploading.gif",
              uploading: "/images/uploading.gif",
              storing: "/images/storing.gif"
            }));
          }
        }), "\n                            ", HTML.IMG({
          name: "imgBusAvatar",
          id: "imgBusAvatar",
          class: "card-img-top img-responsive ",
          style: "position:relative;display: block;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;height:auto;width:auto;max-height:380px ",
          src: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "url"), Spacebars.kw({
              store: "images",
              loading: "/images/uploading.gif",
              uploading: "/images/uploading.gif",
              storing: "/images/storing.gif"
            }));
          },
          alt: ""
        }), "\n                        "), "\n                        \n                        ", HTML.Comment('<img  class="card-img-top img-responsive " style="height:20em;width:100%;text-align: center" src=\'/img/app/noImage.jpg\' alt=""  /> \n                         \n                        <img name="imgBusAvatar" id="imgBusAvatar" class="imgBusAvatar img-responsive panel-body " style="position:relative;display: block;margin-left:auto;margin-right:auto;width:auto;height:380px"    src="{{imgs.url store=\'images\' loading=\'/images/uploading.gif\' uploading=\'/images/uploading.gif\' storing=\'/images/storing.gif\'}}" alt=""  />\n                        '), "\n                     \n                "), "                                                               \n                " ];
      }), "\n\n                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("bigger"), view.lookup("imgIndex"), 0);
      }, function() {
        return [ "\n               \n                ", HTML.DIV({
          class: "item  card   "
        }, "        \n                        ", HTML.getTag("picture")("\n                                ", HTML.SOURCE({
          media: "(max-height:380px)",
          srcset: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "url"), Spacebars.kw({
              store: "images",
              loading: "/images/uploading.gif",
              uploading: "/images/uploading.gif",
              storing: "/images/storing.gif"
            }));
          }
        }), "\n                                  ", HTML.IMG({
          name: "imgBusAvatar",
          id: "imgBusAvatar",
          class: "card-img-top img-responsive ",
          style: "position:relative;display: block;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;height:auto;width:auto;max-height:380px ",
          src: function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("imgs"), "url"), Spacebars.kw({
              store: "images",
              loading: "/images/uploading.gif",
              uploading: "/images/uploading.gif",
              storing: "/images/storing.gif"
            }));
          },
          alt: ""
        }), "\n                              "), "     \n                       ", HTML.Comment(' <img name="imgBusAvatar" id="imgBusAvatar" class="imgBusAvatar img-responsive panel-body "  style="position:relative;display: block;margin-left:auto;margin-right:auto;width:auto;height:380px"   src="{{imgs.url store=\'images\' loading=\'/images/uploading.gif\' uploading=\'/images/uploading.gif\' storing=\'/images/storing.gif\'}}" alt=""  />\n                       '), "\n                       \n            "), "\n                " ];
      }), "\n                \n\n            " ];
    }), "          \n                                                                            \n                        \n        " ];
  }), "\n\n\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isSingle"), view.lookup("prodImg"));
  }, function() {
    return "\n        ";
  }, function() {
    return [ "\n        ", HTML.Comment(" Left and right controls "), "\n        ", HTML.A({
      class: "left carousel-control",
      href: "#Caro",
      "data-slide": "prev"
    }, "\n        ", HTML.SPAN({
      class: "glyphicon glyphicon-chevron-left"
    }), "\n        ", HTML.SPAN({
      class: "sr-only"
    }, "Previous"), "\n        "), "\n        ", HTML.A({
      class: "right carousel-control",
      href: "#Caro",
      "data-slide": "next"
    }, "\n        ", HTML.SPAN({
      class: "glyphicon glyphicon-chevron-right"
    }), "\n        ", HTML.SPAN({
      class: "sr-only"
    }, "Next"), "\n        "), "\n        " ];
  }), "\n    "), "\n             \n");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.home.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return HTML.DIV({
    class: "page home"
  }, "\n\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("just adit"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n     \n\n    ", HTML.DIV({
    class: "content-scrollable"
  }, "\n      ", HTML.Raw('<div class="bg-image home">\n        <h1 class="title-home">\n          <!--<img src="img/app/logo-local.svg" alt="Local Market"/>-->\n          <img src="img/app/logo-local.png" alt="just adit now">\n        </h1>\n        <span class="hours"><span class="title-callout">Advertise </span>\n        Anytime you want.</span>\n        <span class="arrow"></span>\n      </div>'), "\n\n      ", HTML.Raw('<div class="callout-news">\n        <span class="title-callout">Ticker</span>\n         \n         \n      </div>'), "\n      ", HTML.DIV("\n      \n      ", HTML.Raw('<!--<a href="{{pathFor \'feed\'}}" class="btn-primary">See who\'s selling</a>-->'), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "products", Spacebars.kw({
        ":_searchTerm": "All"
      }));
    },
    class: "btn-primary"
  }, "More products"), "\n    "), "\n      ", HTML.DIV("\n      ", HTML.Raw('<h2 class="list-title">Latest products</h2>'), "\n      ", HTML.Raw('<div class="list-subtitle">Just added by suppliers</div>'), "\n        ", HTML.DIV({
    class: "list-products"
  }, "\n          ", HTML.DIV({
    style: "padding:20px"
  }, "\n          ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("featuredProducts")),
      _variable: "prod"
    };
  }, function() {
    return [ "             \n                  \n                  ", Blaze._TemplateWith(function() {
      return {
        product: Spacebars.call(view.lookup("prod")),
        size: Spacebars.call("large"),
        isEdit: Spacebars.call("false")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("productItem"));
    }), " \n                      \n          " ];
  }), "\n          "), "\n        \n        "), "\n      "), "\n      ", HTML.Raw("<div>\n\n    </div>"), "\n    ", HTML.Raw('<!-- <a href="{{pathFor \'products\'}}" class="btn-primary">Explore all our products</a> -->'), "\n    "), "\n \n\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.login.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<div id="login-buttons">\n                <div class="login-text-and-button">\n                  <div class="login-button single-login-button " id="login-buttons-facebook">\n                    <div class="login-image" id="login-buttons-image-facebook"></div>\n                    <span id="sign-in-facebook" class="text-besides-image sign-in-text-facebook">Sign in with Facebook</span>\n                  </div>\n                  <br>\n                </div>\n                <div class="login-text-and-button">\n                  <div class="login-button single-login-button " id="login-buttons-google">\n                    <div class="login-image" id="login-buttons-image-google"></div>\n                    <span id="sign-in-google" class="text-besides-image sign-in-text-google">Sign in with Google</span> \n                  </div>\n                </div>\n            </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.nav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.nav.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("nav");
Template["nav"] = new Template("Template.nav", (function() {
  var view = this;
  return HTML.NAV({
    class: function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("black"));
      }, function() {
        return "black";
      });
    }
  }, "\n    ", HTML.DIV({
    class: "nav-group"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("back"));
  }, function() {
    return [ "\n        ", HTML.A({
      class: "nav-item js-back",
      href: "#"
    }, HTML.SPAN({
      class: "icon-arrow-left-alt"
    })), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.A({
      class: "nav-item js-menu",
      href: "#"
    }, HTML.SPAN({
      class: "icon-menu"
    })), "\n      " ];
  }), "\n     \n    "), "\n\n    ", HTML.DIV({
    class: "title-page"
  }, "\n      ", Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  }), "\n      ", HTML.SPAN({
    class: "subtext-page"
  }, Blaze.View("lookup:subtext", function() {
    return Spacebars.mustache(view.lookup("subtext"));
  })), "\n    "), "\n    \n    ", HTML.DIV({
    class: "nav-group search right   "
  }, "\n     \n        ", Spacebars.include(view.lookupTemplate("QuickSearch")), "\n        ", Spacebars.include(view.lookupTemplate("headerShoppingCart")), "\n    \n      \n    "), "\n    \n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.navaddons.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.navaddons.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("navadons");
Template["navadons"] = new Template("Template.navadons", (function() {
  var view = this;
  return "";
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.not-found.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.not-found.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("notFound");
Template["notFound"] = new Template("Template.notFound", (function() {
  var view = this;
  return HTML.DIV({
    class: "page not-found"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Not Found")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    class: "content-scrollable"
  }, "\n      ", HTML.DIV({
    class: "wrapper-message"
  }, "\n        ", HTML.Raw('<div class="title-message">Yikes! That wasn\'t found</div>'), "\n        ", HTML.DIV({
    class: "subtitle-message"
  }, "The stuff you were looking for wasn't found. ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    }
  }, "Return home")), "\n      "), "\n\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.overlay.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("overlay");
Template["overlay"] = new Template("Template.overlay", (function() {
  var view = this;
  return HTML.DIV({
    id: "overlay-hook"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("template")),
      data: Spacebars.call(view.lookup("data"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.product-item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.product-item.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("productItem");
Template["productItem"] = new Template("Template.productItem", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Products"),
      black: Spacebars.call(false),
      back: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return [ "\n        \n          ", Blaze.If(function() {
        return Spacebars.call(view.lookup("bookmarked"));
      }, function() {
        return [ "\n            ", HTML.A({
          href: "#",
          class: "nav-item js-remove-bookmark bookmarked"
        }, HTML.SPAN({
          class: "icon-bookmark"
        })), "\n          " ];
      }, function() {
        return [ "\n            ", HTML.A({
          href: "#",
          class: "nav-item js-add-bookmark"
        }, HTML.SPAN({
          class: "icon-bookmark-hollow"
        })), "\n          " ];
      }), "\n \n        " ];
    });
  }), "\n          \n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("compare"), view.lookup("isEdit"), true);
  }, function() {
    return [ "\n\n        ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("product"));
    }, function() {
      return [ "        \n           \n            \n            ", HTML.DIV({
        class: "col-sm-6 col-md-4 col-lg-3 mt-1"
      }, "\n            ", HTML.DIV({
        class: "card"
      }, "\n                ", HTML.A({
        class: function() {
          return [ "item-product ", Spacebars.mustache(view.lookup("highlightedClass")) ];
        },
        href: function() {
          return Spacebars.mustache(view.lookup("pathFor"), "product", Spacebars.kw({
            _id: view.lookup("_id")
          }));
        }
      }, "  \n              ", HTML.DIV({
        style: "text-align: center"
      }, "\n                    \n                ", Blaze.Each(function() {
        return Spacebars.dataMustache(view.lookup("getCardImageById"), view.lookup("prodImg"));
      }, function() {
        return [ "\n                \n               \n                ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("."), "url"));
        }, function() {
          return [ "\n                ", HTML.getTag("picture")("\n                  ", HTML.SOURCE({
            media: "(min-width:400px)",
            srcset: function() {
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
                store: "images",
                uploading: "/images/uploading.gif",
                storing: "/images/storing.gif"
              }));
            }
          }), "\n                    ", HTML.IMG({
            class: "card-img-top img-responsive ",
            style: "height:auto;width:100%;text-align: center",
            src: function() {
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
                store: "images",
                uploading: "/images/uploading.gif",
                storing: "/images/storing.gif"
              }));
            },
            alt: ""
          }), "  \n                "), "\n                " ];
        }, function() {
          return [ "\n                ", HTML.getTag("picture")("\n                  ", HTML.SOURCE({
            media: "(min-width:400px)",
            srcset: "/img/app/noImage.jpg"
          }), "\n                    ", HTML.IMG({
            class: "card-img-top img-responsive ",
            style: "height:auto;width:100%;text-align: center",
            src: "/img/app/noImage.jpg",
            alt: ""
          }), "  \n                "), "\n                \n                " ];
        }), "\n\n                " ];
      }), "   \n\n         \n              "), "\n              "), "\n               ", HTML.DIV({
        class: "card-block"
      }, "\n                ", HTML.H4({
        class: "card-title"
      }, Blaze.View("lookup:producttitle", function() {
        return Spacebars.mustache(view.lookup("producttitle"));
      })), "\n                ", HTML.P({
        class: "card-text",
        style: "overflow-wrap:break-word "
      }, Blaze.View("lookup:productDescription", function() {
        return Spacebars.mustache(view.lookup("productDescription"));
      })), "\n                ", HTML.H4({
        class: "card-title"
      }, "R ", Blaze.View("lookup:price", function() {
        return Spacebars.mustache(view.lookup("price"));
      })), "\n                ", Blaze._TemplateWith(function() {
        return Spacebars.call(view.lookup("sellerId"));
      }, function() {
        return Spacebars.include(view.lookupTemplate("SellerShort"));
      }), "\n                 ", HTML.A({
        class: "btn btn-tertiary ",
        href: function() {
          return Spacebars.mustache(view.lookup("pathFor"), "editproduct", Spacebars.kw({
            _id: view.lookup("_id")
          }));
        }
      }, "Edit"), "\n                   \n                \n                 \n              "), "\n            "), "\n          "), "\n     \n            " ];
    }), "\n        " ];
  }, function() {
    return [ "\n        ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("product"));
    }, function() {
      return [ "        \n          ", HTML.A({
        class: function() {
          return [ "item-product ", Spacebars.mustache(view.lookup("highlightedClass")) ];
        },
        href: function() {
          return Spacebars.mustache(view.lookup("pathFor"), "product", Spacebars.kw({
            _id: view.lookup("_id")
          }));
        }
      }, "   \n            \n            ", HTML.DIV({
        class: "col-sm-6 col-md-4 col-lg-3 mt-1"
      }, "\n            ", HTML.DIV({
        class: "card"
      }, "\n              ", HTML.DIV({
        style: "text-align: center"
      }, "\n                 ", Blaze.View("lookup:..url", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), view.lookup("prodImg"));
      }), "\n                ", Blaze.Each(function() {
        return Spacebars.dataMustache(view.lookup("getCardImageById"), view.lookup("prodImg"));
      }, function() {
        return [ "\n                \n\n\n                ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("."), "url"));
        }, function() {
          return [ "\n                ", HTML.getTag("picture")("\n                  ", HTML.SOURCE({
            media: "(min-width:400px)",
            srcset: function() {
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
                store: "images",
                uploading: "/images/uploading.gif",
                storing: "/images/storing.gif"
              }));
            }
          }), "\n                    ", HTML.IMG({
            class: "card-img-top img-responsive ",
            style: "height:auto;width:100%;text-align: center",
            src: function() {
              return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
                store: "images",
                uploading: "/images/uploading.gif",
                storing: "/images/storing.gif"
              }));
            },
            alt: ""
          }), "  \n                "), "\n                " ];
        }, function() {
          return [ "\n                ", HTML.getTag("picture")("\n                  ", HTML.SOURCE({
            media: "(min-width:400px)",
            srcset: "/img/app/noImage.jpg"
          }), "\n                    ", HTML.IMG({
            class: "card-img-top img-responsive ",
            style: "height:auto;width:100%;text-align: center",
            src: "/img/app/noImage.jpg",
            alt: ""
          }), "  \n                "), "\n                ", HTML.Comment('<img  class="card-img-top img-responsive " style="height:20em;width:100%;text-align: center" src=\'/img/app/noImage.jpg\' alt=""  /> '), "\n                " ];
        }), "\n                " ];
      }), "   \n\n                 \n               \n              "), "\n               ", HTML.DIV({
        class: "card-block"
      }, "\n                ", HTML.H4({
        class: "card-title"
      }, Blaze.View("lookup:producttitle", function() {
        return Spacebars.mustache(view.lookup("producttitle"));
      })), "\n                ", HTML.P({
        class: "card-text",
        style: "overflow-wrap:break-word "
      }, Blaze.View("lookup:productDescription", function() {
        return Spacebars.mustache(view.lookup("productDescription"));
      })), "\n                ", HTML.H4({
        class: "card-title"
      }, "R ", Blaze.View("lookup:price", function() {
        return Spacebars.mustache(view.lookup("price"));
      })), "\n                ", Blaze._TemplateWith(function() {
        return Spacebars.call(view.lookup("sellerId"));
      }, function() {
        return Spacebars.include(view.lookupTemplate("SellerShort"));
      }), "\n                \n                 \n              "), "\n            "), "\n          "), "\n        "), "\n            " ];
    }), "\n        " ];
  }) ];
}));

Template.__checkName("showCardImage");
Template["showCardImage"] = new Template("Template.showCardImage", (function() {
  var view = this;
  return HTML.DIV("\n        \n        ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getImage"), view.lookup("imgId"));
  }, function() {
    return [ "\n        ", HTML.DIV("\n       \n            ", HTML.IMG({
      class: " img-responsive panel-body ",
      width: "236px",
      height: "236px",
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
          store: "images",
          uploading: "/images/uploading.gif",
          storing: "/images/storing.gif"
        }));
      },
      alt: ""
    }), "  \n            "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.product.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.product.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("product");
Template["product"] = new Template("Template.product", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page product ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n  ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("thisSelectedProduct"));
  }, function() {
    return [ "   \n    ", Blaze._TemplateWith(function() {
      return {
        title: Spacebars.call(Spacebars.dot(view.lookup("thisSelectedProduct"), "producttitle")),
        black: Spacebars.call(true),
        back: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("nav"), function() {
        return [ "\n      ", Blaze.If(function() {
          return Spacebars.call(view.lookup("bookmarked"));
        }, function() {
          return [ "\n        ", HTML.A({
            href: "#",
            class: "nav-item js-remove-bookmark bookmarked"
          }, HTML.SPAN({
            class: "icon-bookmark"
          })), "\n      " ];
        }, function() {
          return [ "\n        ", HTML.A({
            href: "#",
            class: "nav-item js-add-bookmark"
          }, HTML.SPAN({
            class: "icon-bookmark-hollow"
          })), "\n      " ];
        }), "\n    ", HTML.Comment('<a href="#" class="nav-item js-share"><span class="icon-camera"></span></a>'), "\n    " ];
      });
    }), "\n  \n     \n    ", HTML.DIV({
      class: "content-scrollable static-nav product-scrollable"
    }, "\n      ", Blaze._TemplateWith(function() {
      return {
        prodImg: Spacebars.call(view.lookup("prodImg"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("carousel"));
    }), "   \n     \n      ", HTML.DIV({
      class: "container-fluid panel-body"
    }, "\n        ", HTML.DIV({
      class: "attribution-product js-uncollapse"
    }, "\n          ", HTML.H1({
      class: "title-product text-capitalize"
    }, Blaze.View("lookup:producttitle", function() {
      return Spacebars.mustache(view.lookup("producttitle"));
    })), "       \n            ", HTML.H2({
      class: "title-product text-capitalize"
    }, Blaze.View("lookup:productDescription", function() {
      return Spacebars.mustache(view.lookup("productDescription"));
    })), "        \n            ", HTML.H3({
      class: "title-product text-capitalize"
    }, "R ", Blaze.View("lookup:price", function() {
      return Spacebars.mustache(view.lookup("price"));
    })), "       \n        "), "     \n      "), "\n      \n       ", HTML.DIV({
      class: "card"
    }, "\n          ", HTML.DIV({
      class: "panel-body"
    }, "\n              ", HTML.DIV({
      class: "card-block"
    }, "\n                  ", HTML.DIV({
      class: "media-left"
    }, "\n                     ", HTML.DIV({
      class: "row"
    }, "\n                        ", HTML.DIV({
      class: "col-md-4 col-sm-4"
    }, "\n                            ", HTML.DIV({
      style: "width:236px;height:236px"
    }, "\n                                ", Blaze._TemplateWith(function() {
      return {
        imgId: Spacebars.call(Spacebars.dot(view.lookup("seller"), "busLogo"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("showImage"));
    }), "\n                              "), "\n                        "), "\n                        ", HTML.DIV({
      class: "col-md-8 col-sm-8"
    }, "\n                          ", Blaze.If(function() {
      return Spacebars.call(view.lookup("currentUser"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "media-body"
      }, "\n                                ", HTML.H1({
        class: "text-capitalize"
      }, Blaze.View("lookup:seller.businessname", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seller"), "businessname"));
      })), "\n                                  ", HTML.DIV({
        class: "panel-body"
      }, "\n                                      ", HTML.H1("Contact"), "\n                                      ", HTML.DIV({
        class: "card-subtitle"
      }, "\n                                        ", HTML.DIV({
        class: "row"
      }, "\n                                            ", HTML.DIV({
        class: "col-sm-4"
      }, "\n                                                ", HTML.SPAN({
        class: "glyphicon glyphicon-phone"
      }), "\n                                                ", Blaze.View("lookup:seller.buscel", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seller"), "buscel"));
      }), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
        class: "row"
      }, "\n                                            ", HTML.DIV({
        class: "col-sm-4"
      }, "\n                                                ", HTML.SPAN({
        class: "glyphicon glyphicon-envelope"
      }), "\n                                                ", Blaze.View("lookup:seller.busemail", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seller"), "busemail"));
      }), "\n                                            "), "\n                                        "), "\n                                        ", HTML.DIV({
        class: "row"
      }, "\n                                            ", HTML.DIV({
        class: "col-sm-4"
      }, "\n                                                ", HTML.SPAN({
        class: "glyphicon glyphicon-user"
      }), "\n                                                ", Blaze.View("lookup:seller.cont1", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seller"), "cont1"));
      }), "/", Blaze.View("lookup:seller.cont2", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seller"), "cont2"));
      }), "\n                                            "), "\n                                        "), "\n                                      "), "                        \n                                  "), "                    \n                                ", HTML.DIV({
        class: "clearfix"
      }), "                 \n                              "), "    \n                        \n                        \n                              " ];
    }, function() {
      return "\n                                Please login to view details\n                              ";
    }), "    \n                        "), "\n                     "), "                    \n                  "), "            \n                                 \n              "), "            \n          "), "       \n      "), "  \n      \n    "), "\n    " ];
  }), "\n ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.products.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.products.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("products");
Template["products"] = new Template("Template.products", (function() {
  var view = this;
  return HTML.DIV({
    class: "page products"
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Products"),
      black: Spacebars.call(true),
      back: Spacebars.call(false)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return "     \n\n        ";
    });
  }), HTML.Raw('\n        \n       <div>\n        <div class="bg-image buy">\n           \n        </div>\n       </div>\n          '), HTML.DIV({
    class: "content-scrollable"
  }, "\n              ", HTML.Raw('<img class="  " src="/img/app/bg-about-640x540.png" alt="seller" style="height:300px;width:100%">'), " \n            ", HTML.DIV({
    class: "list-products"
  }, "    \n              ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("latestProducts")),
      _variable: "prod"
    };
  }, function() {
    return [ "             \n                 \n                 ", Blaze._TemplateWith(function() {
      return {
        product: Spacebars.call(view.lookup("prod")),
        size: Spacebars.call("large"),
        isEdit: Spacebars.call("false")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("productItem"));
    }), " \n                     \n              " ];
  }), "\n            "), "\n          \n          "), "\n       \n        ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.recipe-item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.recipe-item.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("recipeItem");
Template["recipeItem"] = new Template("Template.recipeItem", (function() {
  var view = this;
  return HTML.A({
    class: function() {
      return [ "item-recipe ", Spacebars.mustache(view.lookup("highlightedClass")) ];
    },
    href: function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("isEdit"));
      }, function() {
        return [ ' "', Blaze.View("lookup:editpath", function() {
          return Spacebars.mustache(view.lookup("editpath"));
        }), '"' ];
      }, function() {
        return [ ' "', Blaze.View("lookup:path", function() {
          return Spacebars.mustache(view.lookup("path"));
        }), '"' ];
      });
    }
  }, "\n    ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("recipe"));
  }, function() {
    return [ "\n      ", HTML.SPAN({
      class: "attribution"
    }, "\n        ", HTML.SPAN({
      class: "title-recipe"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n        ", HTML.SPAN({
      class: "metadata-recipe"
    }, "\n          ", HTML.SPAN({
      class: "author-recipe"
    }, Blaze.View("lookup:source.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
    })), "\n          ", HTML.SPAN({
      class: "bookmarks-recipe"
    }, HTML.SPAN({
      class: "icon-bookmark"
    }), " ", Blaze.View("lookup:bookmarkCount", function() {
      return Spacebars.mustache(view.lookup("bookmarkCount"));
    })), "\n        "), "\n      "), "\n    " ];
  }), "\n\n    ", HTML.IMG({
    src: function() {
      return Spacebars.mustache(view.lookup("recipeImage"), Spacebars.kw({
        recipe: view.lookup("recipe"),
        size: view.lookup("size")
      }));
    }
  }), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.recipe.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.recipe.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("recipe");
Template["recipe"] = new Template("Template.recipe", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page recipe ", Spacebars.mustache(view.lookup("activeTabClass")) ];
    }
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Recipe"),
      black: Spacebars.call(true),
      back: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return [ "\n      ", Blaze.If(function() {
        return Spacebars.call(view.lookup("bookmarked"));
      }, function() {
        return [ "\n        ", HTML.A({
          href: "#",
          class: "nav-item js-remove-bookmark bookmarked"
        }, HTML.SPAN({
          class: "icon-bookmark"
        })), "\n      " ];
      }, function() {
        return [ "\n        ", HTML.A({
          href: "#",
          class: "nav-item js-add-bookmark"
        }, HTML.SPAN({
          class: "icon-bookmark-hollow"
        })), "\n      " ];
      }), "\n      ", HTML.A({
        href: "#",
        class: "nav-item js-share"
      }, HTML.SPAN({
        class: "icon-camera"
      })), "\n    " ];
    });
  }), "\n\n    ", HTML.DIV({
    class: "image-recipe",
    style: function() {
      return [ "background-image: url('", Spacebars.mustache(view.lookup("recipeImage"), Spacebars.kw({
        recipe: view.lookup("."),
        size: "full"
      })), "')" ];
    }
  }), "\n\n    ", HTML.DIV({
    class: "attribution-recipe js-uncollapse"
  }, "\n      ", HTML.H1({
    class: "title-recipe"
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n      ", HTML.DIV({
    class: "metadata-wrapper"
  }, "\n        ", HTML.P({
    class: "description-recipe"
  }, Blaze.View("lookup:excerpt", function() {
    return Spacebars.mustache(view.lookup("excerpt"));
  })), "\n        ", HTML.SPAN({
    class: "source"
  }, Blaze.View("lookup:source.name", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
  })), "\n        ", HTML.SPAN({
    class: "time"
  }, Blaze.View("lookup:cookTime", function() {
    return Spacebars.mustache(view.lookup("cookTime"));
  })), "\n      "), "\n\n      ", HTML.DIV({
    class: "btns-group"
  }, "\n        ", HTML.A({
    class: function() {
      return [ "btn-secondary ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "make");
      }, function() {
        return "active";
      }), " ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "recipe");
      }, function() {
        return "no-state";
      }), " js-show-recipe" ];
    }
  }, "Make It"), "\n        ", HTML.A({
    class: function() {
      return [ "btn-secondary ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "feed");
      }, function() {
        return "active";
      }), " ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isActiveTab"), "recipe");
      }, function() {
        return "no-state";
      }), " js-show-feed" ];
    }
  }, "Pictures"), "\n      "), "\n    "), "\n\n\n    ", HTML.DIV({
    class: "content-scrollable static-nav make-scrollable"
  }, "\n      ", HTML.Raw('<a class="btn-tertiary js-share"><span class="icon-camera"></span> Share that you made this</a>'), "\n\n      ", HTML.Raw('<h2 class="list-title">Ingredients</h2>'), "\n      ", HTML.UL({
    class: "list-ingredients"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("ingredients"));
  }, function() {
    return [ "\n          ", HTML.LI({
      class: "item-ingredient"
    }, Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n        " ];
  }), "\n      "), "\n\n      ", HTML.Raw('<h2 class="list-title">Directions</h2>'), "\n      ", HTML.OL({
    class: "list-directions"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("directions"));
  }, function() {
    return [ "\n          ", HTML.LI({
      class: "item-direction"
    }, "\n            ", HTML.SPAN({
      class: "text"
    }, Blaze.View("lookup:.", function() {
      return Spacebars.mustache(view.lookup("."));
    })), "\n          "), "\n        " ];
  }), "\n          ", HTML.Raw('<li class="item-direction">\n          ...\n          </li>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "url"));
    },
    target: "_blank",
    class: "btn-primary js-open"
  }, "See full recipe on ", Blaze.View("lookup:source.name", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("source"), "name"));
  })), "\n    "), "\n\n    ", HTML.DIV({
    class: "content-scrollable static-nav feed-scrollable"
  }, "\n      ", HTML.Raw('<a class="btn-tertiary js-share"><span class="icon-camera"></span> Share that you made this</a>'), "\n      ", HTML.DIV({
    class: "list-activities"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("activities"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("activity")), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      class: "wrapper-message"
    }, "\n            ", HTML.DIV({
      class: "title-message"
    }, "No feed activity yet"), "\n            ", HTML.DIV({
      class: "subtitle-message"
    }, "Be the first to share that you made this recipe. ", HTML.A({
      class: "js-share"
    }, "Share now")), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.recipes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.recipes.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("recipes");
Template["recipes"] = new Template("Template.recipes", (function() {
  var view = this;
  return HTML.DIV({
    class: "page recipes"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Recipes"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    class: "content-scrollable"
  }, "\n      ", HTML.DIV({
    class: "list-recipes"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return [ "\n          ", Blaze.If(function() {
      return Spacebars.call(view.lookup("highlighted"));
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          recipe: Spacebars.call(view.lookup(".")),
          size: Spacebars.call("large")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("recipeItem"));
      }), "\n          " ];
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          recipe: Spacebars.call(view.lookup(".")),
          size: Spacebars.call("small")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("recipeItem"));
      }), "\n          " ];
    }), "\n        " ];
  }), "\n      "), "\n    "), "\n\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.search.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.search.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("AdvSearch");
Template["AdvSearch"] = new Template("Template.AdvSearch", (function() {
  var view = this;
  return HTML.Raw("<div>\n         \n    </div>");
}));

Template.__checkName("QuickSearch");
Template["QuickSearch"] = new Template("Template.QuickSearch", (function() {
  var view = this;
  return HTML.Raw('<form id="frmSearch">\n        \n            <div class="input-group add-on">\n                    <input class="form-control " placeholder="Search" name="searchTerm" id="qsrch-term" type="text">\n                    <div class="input-group-btn">\n                      <button class="btn navSearchBtn" id="btnQSearch" type="submit">\n                          <i class="glyphicon glyphicon-search"></i>\n                      </button>\n                    </div>\n            </div>\n       \n    </form>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.seller.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.seller.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("seller");
Template["seller"] = new Template("Template.seller", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Seller"),
      black: Spacebars.call(true),
      back: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"), function() {
      return "\n        \n         \n        ";
    });
  }), "\n        \n        \n       \n  ", HTML.DIV({
    class: "content-scrollable"
  }, "\n                \n                 ", HTML.Raw('<img class="  " src="/img/app/bg-about-640x540.png" alt="seller" style="height:300px;width:100%">'), "  \n\n                 ", HTML.Raw("<!-- Use `name` to add a custom class to the outer container -->"), "\n\n                 ", HTML.Raw('<ul class="nav nav-tabs">\n                    <li class="active"><a data-toggle="tab" href="#seller">Seller Details</a></li>\n                    <li><a data-toggle="tab" href="#prod">New Product</a></li>\n                    <li><a data-toggle="tab" href="#prodCat">My Catalogue</a></li>\n                  </ul>'), "\n                  \n                  ", HTML.DIV({
    class: "tab-content"
  }, "\n                    ", HTML.DIV({
    id: "seller",
    class: "tab-pane fade in active"
  }, "\n                      ", HTML.Raw("<h3>Seller Details</h3>"), "\n                        ", Spacebars.include(view.lookupTemplate("Seller_tmp")), "\n                    "), "\n                    ", HTML.DIV({
    id: "prod",
    class: "tab-pane fade"
  }, "\n                      ", HTML.Raw("<h3>New Product</h3>"), "\n                        ", Spacebars.include(view.lookupTemplate("tmp_product_sell")), "\n                    "), "\n                    ", HTML.DIV({
    id: "prodCat",
    class: "tab-pane fade"
  }, "\n                      ", HTML.Raw("<h3>My Product Catalogue</h3>"), "\n                      ", Spacebars.include(view.lookupTemplate("SellerProducts_tmp")), "\n                    "), "\n                  "), "\n   \n                \n\n \n        \n  ") ];
}));

Template.__checkName("Seller_tmp");
Template["Seller_tmp"] = new Template("Template.Seller_tmp", (function() {
  var view = this;
  return Spacebars.With(function() {
    return Spacebars.call(view.lookup("amISeller"));
  }, function() {
    return [ "\n   \n    ", HTML.FORM({
      class: "add_Seller_form form-inline",
      id: "add_Seller_form",
      role: "form"
    }, "\n            \n        ", HTML.DIV("\n            ", HTML.INPUT({
      type: "hidden",
      name: "id",
      value: function() {
        return Spacebars.mustache(view.lookup("_id"));
      }
    }), "\n            ", HTML.INPUT({
      type: "hidden",
      name: "userId",
      value: function() {
        return Spacebars.mustache(view.lookup("userId"));
      }
    }), "\n            ", HTML.DIV({
      class: "form-group"
    }, "        \n                ", HTML.DIV("\n                    ", HTML.Comment("Business Details "), "\n                    ", HTML.DIV({
      class: "form-row"
    }, "\n                      ", HTML.DIV({
      class: "panel-defaul panel"
    }, "\n                          ", HTML.DIV({
      class: "title panel-heading"
    }, "Business Details"), "     \n                          ", HTML.DIV({
      class: "panel-body"
    }, "\n                        ", HTML.DIV({
      class: "col-md-4 col-sm-4 "
    }, "\n                                ", HTML.Comment(' <label for="busname" class="col-form-label">Business Name</label> '), "\n                                ", HTML.INPUT({
      type: "text",
      class: "",
      name: "businessname",
      placeholder: "Business Name",
      value: function() {
        return Spacebars.mustache(view.lookup("businessname"));
      }
    }), "                                                \n                        "), "\n                        ", HTML.DIV({
      class: "col-md-4 col-sm-4"
    }, "\n                                ", HTML.Comment(' <label for="tagName" class="col-form-label">Tag Line</label>  '), "\n                                ", HTML.INPUT({
      type: "text",
      class: "",
      name: "businesstagLine",
      placeholder: "Business Tag line",
      id: "busTagLine",
      value: function() {
        return Spacebars.mustache(view.lookup("busTagLine"));
      }
    }), "\n                        "), " \n                        ", HTML.DIV({
      class: "col-md-4 col-sm-4"
    }, "\n                                ", HTML.Comment(' <label for="webSite" class="col-form-label">Web Site</label>  '), "\n                                ", HTML.INPUT({
      type: "text",
      class: "",
      name: "website",
      placeholder: "Website",
      id: "Website",
      value: function() {
        return Spacebars.mustache(view.lookup("website"));
      }
    }), "\n                        "), "       \n                      "), "\n                      "), "\n                    "), "\n                    ", HTML.Comment("Business Images Details "), "\n                    ", HTML.DIV({
      class: "row "
    }, "                \n                            ", HTML.DIV({
      class: "col-md-8 col-sm-4 panel"
    }, "\n                                ", HTML.Comment(' <label for="BusLogo" class="col-form-label">Business Logo</label> '), "\n                                ", HTML.Comment("zid=SellerId cat=Cat type=Type }}"), "\n                                ", HTML.DIV({
      class: "panelheading panel-heading"
    }, "Business Images"), "     \n                                ", HTML.DIV({
      class: " form-group  panel-body  "
    }, " \n                                  ", HTML.DIV({
      class: "panel"
    }, "\n                                      ", HTML.DIV({
      class: "panelheading panel-heading"
    }, "Business Logo"), "  \n                                    ", HTML.DIV({
      class: "panel-body"
    }, "\n                                    \n                                      \n                                ", HTML.Comment(' <img src="" alt="" id="comp_img" class="img-fluid" width="236px" height="236px">      '), "\n                                 \n                                ", HTML.IMG({
      name: "imgBusLogo",
      id: "imgBuslogo",
      class: "imgBusLogo img-fluid img-responsive panel-body ",
      width: "236px",
      height: "236px",
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
          store: "images",
          uploading: "/images/uploading.gif",
          storing: "/images/storing.gif"
        }));
      },
      alt: ""
    }), " \n                               ", Blaze._TemplateWith(function() {
      return {
        imgId: Spacebars.call(view.lookup("busLogo"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("showImage"));
    }), "                                 \n                               ", HTML.A({
      href: "",
      download: "file",
      id: "comp_download",
      class: "btn btn-primary",
      style: "display: none"
    }, "download"), "\n                               ", HTML.A({
      href: "",
      download: "file",
      id: "comp_download2",
      class: "btn btn-primary",
      style: "display: none"
    }, "download"), "\n                                ", HTML.INPUT({
      type: "file",
      name: "fileLogo",
      class: "imgBuLogo",
      id: "imgBuLogo",
      placeholder: "Select business Logo"
    }), "\n                                     "), "\n                                  "), " \n                                    ", HTML.Comment(' <label for="MyPhoto" class="col-form-label">My Photo</label>    '), "\n                                    ", HTML.Comment(' <img src="" alt="" id="comp_img2" class="img-fluid" width="236px" height="236px">                          \n                                    <img name="imgBusAvatar" id="imgBusAvatar" class="imgBusAvatar img-responsive panel-body "  width="236px" height="236px" src="\'/images/storing.gif\'" alt=""  /> \n                                   {{>showImage imgId=busAvatar }}  \n                                    \n                                    <input type="file" name="imgAvatar" class="imgAvatar" id="imgAvatar" placeholder="Select Image of you"   > '), "\n                              "), "  \n                           "), "\n\n                    "), "               \n                    \n\n                    ", HTML.Comment("Details "), "\n                    ", HTML.DIV({
      class: "row "
    }, "\n                        ", HTML.DIV({
      class: "form-group col-md-4 panel "
    }, "      \n                            ", HTML.DIV({
      class: "title panel-heading"
    }, "Contact Details"), "                     \n                                ", HTML.DIV({
      class: " form-group  panel-body  "
    }, " \n                                    ", HTML.INPUT({
      type: "tel",
      class: "form-control required",
      name: "bustell",
      placeholder: "Business Number",
      maxlength: "12",
      value: function() {
        return Spacebars.mustache(view.lookup("bustel"));
      }
    }), "\n                                    ", HTML.INPUT({
      type: "tel",
      class: "form-control required",
      name: "buscell",
      placeholder: "Cell Number",
      maxlength: "12",
      value: function() {
        return Spacebars.mustache(view.lookup("buscel"));
      }
    }), "\n                                    ", HTML.INPUT({
      type: "email",
      class: "form-control required",
      name: "busemail",
      placeholder: "Email Address",
      maxlength: "35",
      value: function() {
        return Spacebars.mustache(view.lookup("busemail"));
      }
    }), "                                                                   \n                                    ", HTML.INPUT({
      type: "",
      class: "form-control required",
      name: "person1",
      placeholder: "Contact Person 1",
      maxlength: "25",
      value: function() {
        return Spacebars.mustache(view.lookup("cont1"));
      }
    }), "                                                                   \n                                    ", HTML.INPUT({
      type: "text",
      class: "form-control",
      name: "person2",
      placeholder: "Contact Person 2",
      maxlength: "25",
      value: function() {
        return Spacebars.mustache(view.lookup("cont2"));
      }
    }), "                                                                   \n                                "), "    \n                        "), "\n                    \n                        ", HTML.DIV({
      class: "form-group col-md-4 panel"
    }, "\n                            ", HTML.DIV({
      class: "title panel-heading"
    }, "Address Details"), "              \n                                ", HTML.DIV({
      class: "form-group   panel-body  "
    }, " \n                                    ", HTML.INPUT({
      type: "text",
      class: " ",
      name: "add1",
      placeholder: "Street Address",
      value: function() {
        return Spacebars.mustache(view.lookup("add1"));
      }
    }), "\n                                    ", HTML.INPUT({
      type: "text",
      class: " ",
      name: "add2",
      placeholder: "",
      value: function() {
        return Spacebars.mustache(view.lookup("add2"));
      }
    }), "\n                                    ", HTML.INPUT({
      type: "text",
      class: " ",
      name: "add3",
      placeholder: "",
      value: function() {
        return Spacebars.mustache(view.lookup("add3"));
      }
    }), "                                                                   \n                                    ", HTML.INPUT({
      type: "text",
      class: " ",
      name: "add4",
      placeholder: "Postal Code",
      value: function() {
        return Spacebars.mustache(view.lookup("add4"));
      }
    }), "    \n                                    ", HTML.INPUT({
      type: "text",
      class: " ",
      name: "add5",
      placeholder: "Additional Info",
      value: function() {
        return Spacebars.mustache(view.lookup("add5"));
      }
    }), "                                                                                                                                  \n                                "), "   \n                        "), "                \n                    \n                        ", HTML.DIV({
      class: "form-group col-md-4 panel"
    }, "  \n                            ", HTML.DIV({
      class: "form-group  panel-body  "
    }, "                        \n                                ", HTML.IMG({
      src: "/lenz.png"
    }), "                                                           \n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.INPUT({
      type: "checkbox",
      name: "chkCond",
      class: "form-check-input required",
      value: "true"
    }), "Accept terms and condtions     \n                "), "\n                ", HTML.DIV({
      class: "form-row "
    }, "\n                        ", HTML.DIV({
      class: "col-md-8"
    }, "\n                               \n                            ", HTML.BUTTON({
      type: "submit",
      name: "btnAddSeller",
      class: "btn btn-primary"
    }, Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("isNullOrEmpty"), view.lookup("_id"));
    }, function() {
      return "New";
    }, function() {
      return "Update";
    })), "\n                            ", HTML.BUTTON({
      type: "button",
      class: "btn btn-secondary"
    }, "Cancel"), "\n                        "), "\n                    "), " \n\n            "), "                   \n        "), "                                 \n    "), "\n \n\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sellerShort.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.sellerShort.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("SellerShort");
Template["SellerShort"] = new Template("Template.SellerShort", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return "\n    ";
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: "info"
    }, "\n            Please log in to view details\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.share-overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.share-overlay.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("shareOverlay");
Template["shareOverlay"] = new Template("Template.shareOverlay", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      class: "overlay share"
    }, "\n\n      ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("attachedImage"));
    }, function() {
      return [ "\n        ", HTML.A({
        href: "#",
        class: "js-close-overlay overlay-dismiss"
      }, HTML.SPAN({
        class: "icon-cross"
      })), "\n        ", HTML.DIV({
        class: "wrapper-heading"
      }, "\n          ", HTML.DIV({
        class: "title-overlay"
      }, "Share"), "\n          ", HTML.DIV({
        class: "subtitle-overlay"
      }, "Share that you made this recipe with the just adit community."), "\n        "), "\n\n        ", HTML.DIV({
        class: "wrapper-camera"
      }, "\n          ", HTML.A({
        class: "js-attach-image btn-camera"
      }, HTML.SPAN({
        class: "icon-camera"
      })), "\n          ", HTML.DIV({
        class: "subtext-camera"
      }, "Add your photo"), "\n        "), "\n      " ];
    }, function() {
      return [ "\n        ", HTML.A({
        href: "#",
        class: "js-unattach-image overlay-back"
      }, HTML.SPAN({
        class: "icon-arrow-left-alt"
      })), "\n        ", HTML.DIV({
        class: "title-page"
      }, "Share"), "\n        ", HTML.A({
        href: "#",
        class: "js-close-overlay overlay-dismiss"
      }, HTML.SPAN({
        class: "icon-cross"
      })), "\n\n        ", HTML.DIV({
        class: "bg-image",
        style: function() {
          return [ "background-image: url('", Spacebars.mustache(view.lookup("attachedImage")), "')" ];
        }
      }), "\n\n        ", HTML.FORM({
        class: "form-share"
      }, "\n          ", HTML.DIV({
        class: "form-group"
      }, "\n            ", HTML.DIV({
        class: "avatar"
      }, "\n              ", HTML.IMG({
        src: function() {
          return Spacebars.mustache(view.lookup("avatar"));
        },
        class: "image-avatar"
      }), "\n            "), "\n\n            ", HTML.TEXTAREA({
        name: "text",
        type: "text",
        autocapitalize: "off",
        autocorrect: "off",
        required: "",
        maxlength: "140",
        class: "message-share",
        placeholder: "Add advice, suggestions, or thoughts to share with the community..."
      }), "\n          "), "\n\n          ", HTML.DIV({
        class: "wrapper-checkbox"
      }, "\n            ", HTML.LABEL({
        for: "tweeting",
        class: "checkbox"
      }, "\n              ", HTML.INPUT({
        type: "checkbox",
        name: "tweeting",
        id: "tweeting",
        checked: ""
      }), "\n              ", HTML.SPAN("Post to Twitter"), "\n            "), "\n          "), "\n\n          ", HTML.BUTTON({
        class: "btn-primary",
        type: "submit"
      }, "\n            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("tweeting"));
      }, function() {
        return [ "\n              Share ", HTML.CharRef({
          html: "&amp;",
          str: "&"
        }), " Tweet\n            " ];
      }, function() {
        return "\n              Share\n            ";
      }), "\n          "), "\n        "), "\n      " ];
    }), "\n\n    "), "\n  " ];
  }, function() {
    return [ "\n    ", Spacebars.include(view.lookupTemplate("authOverlay")), "\n  " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.shoppingcart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.shoppingcart.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("headerShoppingCart");
Template["headerShoppingCart"] = new Template("Template.headerShoppingCart", (function() {
  var view = this;
  return HTML.Raw('<div class="shoppingcart header"> \n           \n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.showEdit_Products.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.showEdit_Products.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("SellerProducts_tmp");
Template["SellerProducts_tmp"] = new Template("Template.SellerProducts_tmp", (function() {
  var view = this;
  return Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("myProducts")),
      _variable: "prod"
    };
  }, function() {
    return [ "\n             ", HTML.DIV({
      class: "list-products"
    }, "            \n                  ", Blaze._TemplateWith(function() {
      return {
        product: Spacebars.call(view.lookup("prod")),
        size: Spacebars.call("large"),
        isEdit: Spacebars.call(true)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("productItem"));
    }), "         \n            "), "    \n        " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.showImage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.showImage.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("showImage");
Template["showImage"] = new Template("Template.showImage", (function() {
  var view = this;
  return HTML.DIV("\n   \n    ", Spacebars.With(function() {
    return Spacebars.dataMustache(view.lookup("getSellerImage"), view.lookup("imgId"));
  }, function() {
    return [ "\n    ", HTML.DIV("\n        ", HTML.IMG({
      class: " img-responsive panel-body ",
      width: "236px",
      height: "236px",
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"), Spacebars.kw({
          store: "images",
          uploading: "/images/uploading.gif",
          storing: "/images/storing.gif"
        }));
      },
      alt: ""
    }), "  \n    "), "\n    " ];
  }), "\n");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ticker.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.ticker.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("ticker");
Template["ticker"] = new Template("Template.ticker", (function() {
  var view = this;
  return HTML.Raw('<!-- <div class="row">\n        <div class="col-md-2 col-sm-2">{{timestamp}}</div>\n        {{#each getAllTickers}}\n            <div class="col-md-2 col-sm-2">{{_id}} -: {{price}}</div>\n        {{/each}}\n    </div> -->');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.whats-cooking.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/template.whats-cooking.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("feed");
Template["feed"] = new Template("Template.feed", (function() {
  var view = this;
  return HTML.DIV({
    class: "page whats-cooking"
  }, "\n\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("What's Cooking")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), "\n\n    ", HTML.DIV({
    class: "content-scrollable"
  }, "\n      ", HTML.DIV({
    class: function() {
      return [ "list-activities ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("ready"));
      }, function() {
        return "loading";
      }) ];
    }
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("ready"));
  }, function() {
    return [ "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("activities"));
    }, function() {
      return [ "\n            ", Spacebars.include(view.lookupTemplate("activity")), "\n          " ];
    }, function() {
      return [ "\n            ", HTML.DIV({
        class: "wrapper-message"
      }, "\n              ", HTML.DIV({
        class: "title-message"
      }, "No one is cooking yet!"), "\n              ", HTML.DIV({
        class: "subtitle-message"
      }, "Share that you made a recipe and it will show up here."), "\n            "), "\n          " ];
    }), "\n        " ];
  }, function() {
    return [ "\n          ", HTML.DIV({
      class: "wrapper-message"
    }, "\n            ", HTML.DIV({
      class: "icon-sync"
    }), "\n            ", HTML.DIV({
      class: "title-message"
    }, "Loading"), "\n          "), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Maintain_Product.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/Maintain_Product.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.tmp_product_maintain.helpers({
  create: function () {
    console.log("Maintain Created");
  },
  rendered: function () {
    console.log("Maintain rendered");
  },
  destroyed: function () {
    console.log("Maintain destroyed");
  }
});
Template.tmp_product_maintain.events({
  'click .deleteImg': function (event, template) {
    var ImageId = event.currentTarget.attributes['imgid'].value;
    imageFile = Images.find({
      _id: ImageId
    });
    Images.remove({
      _id: ImageId
    });
  },
  'click .updateRec': function (event, template) {
    alert('update the record');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"activity.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/activity.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.activity.onRendered(function () {
  var self = this; // If the activity is in a list, scroll it into view. Note, we can't just use
  // element.scrollIntoView() because it attempts to scroll in the X direction
  // messing up our animations

  if (Router.current().params.activityId === self.data._id) {
    var $activity = $(self.firstNode);
    var top = $activity.offset().top;
    var $parent = $(self.firstNode).closest('.content-scrollable');
    var parentTop = $parent.offset().top;
    $parent.scrollTop(top - parentTop);
  }
});
Template.activity.helpers({
  firstName: function () {
    return this.userName.split(' ')[0];
  },
  recipeTitle: function () {
    return RecipesData[this.recipeName].title;
  },
  path: function () {
    return Router.path('recipe', {
      name: this.recipeName
    }, {
      query: {
        activityId: this._id
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"admin.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/admin.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.admin.helpers({
  isAdmin: function () {
    return Meteor.user() && Meteor.user().admin;
  },
  latestNews: function () {
    return News.latest();
  }
});
Template.admin.events({
  'submit form': function (event) {
    event.preventDefault();
    var text = $(event.target).find('[name=text]').val();
    News.insert({
      text: text,
      date: new Date()
    });
    alert('Saved latest news');
  },
  'click .login': function () {
    Meteor.loginWithTwitter();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"app-body.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/app-body.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ANIMATION_DURATION = 300;
var NOTIFICATION_TIMEOUT = 3000;
var MENU_KEY = 'menuOpen';
var IGNORE_CONNECTION_ISSUE_KEY = 'ignoreConnectionIssue';
var CONNECTION_ISSUE_TIMEOUT = 5000;
Session.setDefault(IGNORE_CONNECTION_ISSUE_KEY, true);
Session.setDefault(MENU_KEY, false); // XXX: this work around until IR properly supports this
//   IR refactor will include Location.back, which will ensure that initator is
//   set 

var nextInitiator = null,
    initiator = null;
Deps.autorun(function () {
  // add a dep
  Router.current();
  initiator = nextInitiator;
  nextInitiator = null;
});
var notifications = new Mongo.Collection(null);

Template.appBody.addNotification = function (notification) {
  var id = notifications.insert(notification);
  Meteor.setTimeout(function () {
    notifications.remove(id);
  }, NOTIFICATION_TIMEOUT);
};

Meteor.startup(function () {
  // set up a s  left / right handler
  $(document.body).touchwipe({
    wipeLeft: function () {
      Session.set(MENU_KEY, false);
    },
    wipeRight: function () {
      Session.set(MENU_KEY, true);
    },
    preventDefaultEvents: false
  }); // Only show the connection error box if it has been 5 seconds since
  // the app started

  setTimeout(function () {
    // Launch screen handle created in lib/router.js
    dataReadyHold.release(); // Allow the connection error box to be shown if there is an issue

    Session.set(IGNORE_CONNECTION_ISSUE_KEY, false);
  }, CONNECTION_ISSUE_TIMEOUT);
});
Template.appBody.onRendered(function () {
  this.find("#content-container")._uihooks = {
    insertElement: function (node, next) {
      // short-circuit and just do it right away
      if (initiator === 'menu') return $(node).insertBefore(next);
      var start = initiator === 'back' ? '-100%' : '100%';
      $.Velocity.hook(node, 'translateX', start);
      $(node).insertBefore(next).velocity({
        translateX: [0, start]
      }, {
        duration: ANIMATION_DURATION,
        easing: 'ease-in-out',
        queue: false
      });
    },
    removeElement: function (node) {
      if (initiator === 'menu') return $(node).remove();
      var end = initiator === 'back' ? '100%' : '-100%';
      $(node).velocity({
        translateX: end
      }, {
        duration: ANIMATION_DURATION,
        easing: 'ease-in-out',
        queue: false,
        complete: function () {
          $(node).remove();
        }
      });
    }
  };
  this.find(".notifications")._uihooks = {
    insertElement: function (node, next) {
      $(node).insertBefore(next).velocity("slideDown", {
        duration: ANIMATION_DURATION,
        easing: [0.175, 0.885, 0.335, 1.05]
      });
    },
    removeElement: function (node) {
      $(node).velocity("fadeOut", {
        duration: ANIMATION_DURATION,
        complete: function () {
          $(node).remove();
        }
      });
    }
  };
});
Template.appBody.helpers({
  menuOpen: function () {
    return Session.get(MENU_KEY) && 'menu-open';
  },
  overlayOpen: function () {
    return Overlay.isOpen() ? 'overlay-open' : '';
  },
  connected: function () {
    return Session.get(IGNORE_CONNECTION_ISSUE_KEY) || Meteor.status().connected;
  },
  notifications: function () {
    return notifications.find();
  }
});
Template.appBody.events({
  'click .js-menu': function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    Session.set(MENU_KEY, !Session.get(MENU_KEY));
  },
  'click .js-back': function (event) {
    nextInitiator = 'back'; // XXX: set the back transition via Location.back() when IR 1.0 hits

    history.back();
    event.stopImmediatePropagation();
    event.preventDefault();
  },
  'click a.js-open': function (event) {
    // On Cordova, open links in the system browser rather than In-App
    if (Meteor.isCordova) {
      event.preventDefault();
      window.open(event.target.href, '_system');
    }
  },
  'click .content-overlay': function (event) {
    Session.set(MENU_KEY, false);
    event.preventDefault();
  },
  'click #menu a': function (event) {
    nextInitiator = 'menu';
    Session.set(MENU_KEY, false);
  },
  'click .js-notification-action': function () {
    if (_.isFunction(this.callback)) {
      this.callback();
      notifications.remove(this._id);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"auth-overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/auth-overlay.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlay.onCreated(function () {
  this.autorun(function () {
    if (Meteor.userId() && Overlay.template() === 'authOverlay') {
      //Router.go("/");
      Overlay.close();
    }
  });
});
Template.logout.events({
  'click .btnLogout': function () {
    Meteor.logout();
    Router.go("/");
  },
  'click .btnCancel': function () {
    Router.go("/");
  }
});
Template.authOverlay.events({
  'click .js-signin': function () {
    Meteor.loginWithTwitter({
      loginStyle: 'redirect'
    });
  }
});

var trimInput = function (val) {
  return val.replace(/^\s*|\s*$/g, "");
};

var isValidPassword = function (val) {
  return val.length >= 6 ? true : false;
};

var isValidEmail = function (val) {
  var re = new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');
  var isValidEmail = re.test(val) === null ? false : true;
  return isValidEmail;
};

Template.customLogin.events({
  'click #btnLogin': function (e, t) {
    e.preventDefault();
    Loading.start();
    var emailadd = t.$("#emailAddress").val();
    var password = t.$("#password").val();
    email = trimInput(emailadd);
    password = trimInput(password);
    var result = false;

    if (isValidEmail(email) && isValidPassword(password)) {
      result = true;
    }

    if (result) {
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {} // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
        else {
            Router.go("/");
          } // The user has been logged in.

      });
    } else {
      alert("Invlaid email and Password");
    }

    Loading.stop();
  },
  'click .btnCancel': function () {
    Router.go("/");
  }
});
Template.customLogin.events({
  'click .bSignup': function (e, t) {
    Router.go("/signup");
  }
});

Template.authOverlay.rendered = function () {
  console.log("rendering login"); //alert('Template Login redered');
  // Accounts._loginButtons.data-toggle = "tab";
}; // Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"auth-signup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/auth-signup.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// If the auth overlay is on the screen but the user is logged in,
//   then we have come back from the loginWithTwitter flow,
//   and the user has successfully signed in.
//
// We have to use an autorun for this as callbacks get lost in the
//   redirect flow.
Template.authOverlaySignup.onCreated(function () {
  this.autorun(function () {
    if (Meteor.userId() && Overlay.template() === 'authOverlaySignup') {
      //Router.go("/");
      Overlay.close();
    }
  });
});
Template.authOverlaySignup.events({
  'click .js-signin': function () {
    Meteor.loginWithTwitter({
      loginStyle: 'redirect'
    });
  }
});

var trimInput = function (val) {
  return val.replace(/^\s*|\s*$/g, "");
};

var isValidPassword = function (val) {
  return val.length >= 6 ? true : false;
};

var isValidEmail = function (val) {
  var re = new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');
  var isValidEmail = re.test(val) === null ? false : true;
  return isValidEmail;
};

Template.SignUp.events({
  'click .btnSignup': function (e, t) {
    e.preventDefault();
    Loading.start();
    var emailadd = t.$("#signupEmail").val();
    var password = t.$("#signupPassword").val();
    var passwordr = t.$("#signupRPassword").val();
    email = trimInput(emailadd);
    password = trimInput(password);
    passwordr = trimInput(passwordr);
    var result = false;

    if (isValidEmail(email) && isValidPassword(password) && password == passwordr) {
      result = true;
    }

    if (result) {
      Accounts.createUser({
        email: email,
        username: email,
        password: password
      });
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          alert('could not be logged in now.');
        } else {
          Router.go("/");
        } // The user has been logged in.

      });
    } else {
      alert("Invlaid email and Password");
    }

    Loading.stop();
  }
});
Template.SignUp.events({
  'click .bLogin': function (e, t) {
    Router.go("/login");
  },
  'click .btnCancel': function () {
    Router.go("/");
  }
});

Template.authOverlaySignup.rendered = function () {
  console.log("rendering login"); //alert('Template Login redered');
  // Accounts._loginButtons.data-toggle = "tab";
}; // Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bookmarks.1.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/bookmarks.1.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.bookmarks.helpers({
  recipeCount: function () {
    return pluralize(this.length, 'recipe');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bookmarks.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/bookmarks.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.bookmarks.helpers({
  recipeCount: function () {
    return pluralize(this.length, 'recipe');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"carousel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/carousel.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.carousel.onRendered(function () {
  Loading.start();
  this.$('#Caro').touchwipe({
    wipeUp: function () {
      $('#Caro').carousel('prev');
    },
    preventDefaultEvents: false
  });
  this.$('#CaroImg').touchwipe({
    wipeDown: function () {
      $('#Caro').carousel('next');
    },
    preventDefaultEvents: false
  });
  Loading.stop();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/home.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var FEATURED_COUNT = 4;
Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function () {
    var recipes = _.values(RecipesData);

    var selection = [];

    for (var i = 0; i < FEATURED_COUNT; i++) {
      selection.push(recipes.splice(_.random(recipes.length - 1), 1)[0]);
    }

    return selection;
  },
  featuredProducts: function () {
    console.log("Featured Products"); //let wrappedAsyncFunction = Loading.wrapAsync(someAsyncFunction);

    Meteor.subscribe('featuredProducts');
    return Products.find({}, {
      limit: FEATURED_COUNT,
      sort: {
        createdAt: -1
      }
    });
  },
  activities: function () {
    return Activities.latest();
  },
  latestNews: function () {
    return News.latest();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/login.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.login.events({
  'click #logout-button': function () {
    Meteor.logout();
  }
});
Template.login.helpers({
  services: function () {
    return Accounts._loginButtons.getLoginServices();
  }
}); // Template.login.service = function()
// {
//     //returns an array like [{name: 'facebook'}];
//     return getLoginServices();
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"nav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/nav.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.nav.onRendered(function () {
  var $nav = this.$('nav');
  $nav.siblings('.content-scrollable:not(.static-nav)').children().first().waypoint(function (direction) {
    $nav.toggleClass('scrolled', direction === 'down');
  }, {
    context: '.content-scrollable',
    offset: -200
  });
});
Template.nav.helpers({
  // Iron Router stores {initial: true} in history state if this is
  // the first route that we hit in an app. There are a variety of 
  // unexpected ways that this can happen (for example oauth, or 
  // hot code push), but we can't rely on going back in such cases.
  back: function () {
    return this.back && !history.state.initial;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navaddons.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/navaddons.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/overlay.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var TEMPLATE_KEY = 'overlayTemplate';
var DATA_KEY = 'overlayData';
var ANIMATION_DURATION = 200;
Session.setDefault(TEMPLATE_KEY, null);
Overlay = {
  open: function (template, data) {
    Session.set(TEMPLATE_KEY, template);
    Session.set(DATA_KEY, data);
  },
  close: function () {
    Session.set(TEMPLATE_KEY, null);
    Session.set(DATA_KEY, null);
  },
  isOpen: function () {
    return !Session.equals(TEMPLATE_KEY, null);
  },
  template: function () {
    return Session.get(TEMPLATE_KEY);
  },
  data: function () {
    return Session.get(DATA_KEY);
  }
};
Template.overlay.onRendered(function () {
  this.find('#overlay-hook')._uihooks = {
    insertElement: function (node, next, done) {
      var $node = $(node);
      $node.hide().insertBefore(next).velocity('fadeIn', {
        duration: ANIMATION_DURATION
      });
    },
    removeElement: function (node, done) {
      var $node = $(node);
      $node.velocity("fadeOut", {
        duration: ANIMATION_DURATION,
        complete: function () {
          $node.remove();
        }
      });
    }
  };
});
Template.overlay.helpers({
  template: function () {
    return Overlay.template();
  },
  data: function () {
    return Overlay.data();
  }
});
Template.overlay.events({
  'click .js-close-overlay': function (event) {
    event.preventDefault();
    Overlay.close();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product-item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/product-item.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.productItem.helpers({
  path: function () {
    return Router.path('product', this._id);
  },
  highlightedClass: function () {
    if (this.size === 'large') return 'highlighted';
  },
  bookmarkCount: function () {
    var count = 1; //BookmarkCounts.find({}).count());

    return count && count.count;
  },
  getImage: function (imgid) {
    return Images.findOne({
      ImageId: imgid
    });
  },
  getFirstElement: function (arr) {
    if (arr == 'undefined') {
      return null;
    }

    ;

    if (arr instanceof Array) {
      return arr[0];
    } //return str;

  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/product.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var TAB_KEY = 'productShowTab';
Template.product.helpers({
  getProduct: function (id) {
    loading.start();
    var result = Template.instance.data.Products; //var result = Meteor.apply('getProduct',[id],{wait:true});

    loading.stop();
    return result;
  }
}); // Template.product.helpers({
//   thisSelectedProduct : function(){
//     var self = this;
//     try {
//         var result;
//         result = Session.get("currentProduct");//Products.find({_id:Router.current().params._id});
//         return result;
//     } catch (error) {
//     }
//   }
// });

Template.product.onCreated(function () {
  // console.log("Create Product template");
  // console.log("parameter Id " + Router.current().params._id);
  var self = this;
  Loading.start();
  if (Router.current().params._id) Template.product.setTab('feed');else Template.product.setTab('product');
});
Template.product.onRendered(function () {
  Loading.stop();
  this.$('.product').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'product')) Template.productItem.setTab('show');
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-product').touchwipe({
    wipeUp: function () {
      if (!Session.equals(TAB_KEY, 'product')) Template.productItem.setTab('product');
    },
    preventDefaultEvents: false
  });
}); // CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over

Template.product.setTab = function (tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);
  var fromProduct = lastTab === 'product' && tab !== 'product';
  $('.feed-scrollable').toggleClass('instant', fromProduct);
  var toProduct = lastTab !== 'product' && tab === 'product';
  $('.feed-scrollable').toggleClass('delayed', toProduct);
};

Template.product.helpers({
  isActiveTab: function (name) {
    return Session.equals(TAB_KEY, name);
  },
  thisProductImages: function (imageId) {
    console.log("Searching for imageid : " + imageId + " -  Image Count : " + Images.count);
    Meteor.subscribe('ProductImages', imageId); //Loading.start();

    var ProductImgs = Images.find({}); //Loading.stop();

    return ProductImgs;
  },
  activeTabClass: function () {
    return Session.get(TAB_KEY);
  },
  bookmarked: function () {
    return Meteor.user(); //&& _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  activities: function () {
    return Activities.find({
      recipeName: this.name
    }, {
      sort: {
        date: -1
      }
    });
  },
  productData: function () {
    //console.log("Router data " + Template.instance().data[0]);
    return Template.instance().data[0];
  }
});
Template.product.events({
  'click .js-add-bookmark': function (event) {
    event.preventDefault();
    if (!Meteor.userId()) return Overlay.open('authOverlay');
    Meteor.call('bookmarkRecipe', this.name);
  },
  'click .js-remove-bookmark': function (event) {
    event.preventDefault();
    Meteor.call('unbookmarkRecipe', this.name);
  },
  'click .js-show-recipe': function (event) {
    event.stopPropagation();
    Template.product.setTab('make');
  },
  'click .js-show-feed': function (event) {
    event.stopPropagation();
    Template.product.setTab('feed');
  },
  'click .js-uncollapse': function () {
    Template.product.setTab('recipe');
  },
  'click .js-share': function () {
    Overlay.open('shareOverlay', this);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"products.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/products.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var TAB_KEY = 'productShowTab';
Template.product.onCreated(function () {
  debugger;
  if (Router.current().params._searchTerm) Template.product.setTab('feed');else Template.product.setTab('product');
});
Template.product.onRendered(function () {// this.$('.product').touchwipe({
  //   wipeDown: function () {
  //     if (Session.equals(TAB_KEY, 'product'))
  //       Template.product.setTab('show')
  //   },
  //   preventDefaultEvents: false
  // });
  // this.$('.attribution-product').touchwipe({
  //   wipeUp: function () {
  //     if (! Session.equals(TAB_KEY, 'product'))
  //       Template.product.setTab('product')
  //   },
  //   preventDefaultEvents: false
  // });
}); // CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over

Template.product.setTab = function (tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);
  var fromProduct = lastTab === 'product' && tab !== 'product';
  $('.feed-scrollable').toggleClass('instant', fromProduct);
  var toProduct = lastTab !== 'product' && tab === 'product';
  $('.feed-scrollable').toggleClass('delayed', toProduct);
};

Template.product.helpers({
  isActiveTab: function (name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function () {
    return Session.get(TAB_KEY);
  },
  bookmarked: function () {
    return true; //Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  activities: function () {
    return Activities.find({
      recipeName: this.name
    }, {
      sort: {
        date: -1
      }
    });
  }
});
Template.product.events({
  'click .js-add-bookmark': function (event) {
    event.preventDefault();
    if (!Meteor.userId()) return Overlay.open('authOverlay');
    Meteor.call('bookmarkRecipe', this.name);
  },
  'click .js-remove-bookmark': function (event) {
    event.preventDefault();
    Meteor.call('unbookmarkRecipe', this.name);
  },
  'click .js-show-product': function (event) {
    event.stopPropagation();
    Template.product.setTab('show');
  },
  'click .js-show-feed': function (event) {
    event.stopPropagation();
    Template.product.setTab('feed');
  },
  'click .js-uncollapse': function () {
    Template.product.setTab('product');
  },
  'click .js-share': function () {
    Overlay.open('shareOverlay', this);
  }
});
Template.products.helpers({
  firstName: function () {
    return this.userName.split(' ')[0];
  },
  latestProducts: function () {
    //({done: false},{order: {status: 1}, limit: 5});
    //return Products.find({},{sort:{createdAt:-1}});
    Loading.start();
    var query = false;

    if (Router.current().params.searchTerm) {
      query = RegExp.escape(Router.current().params.searchTerm);
    }

    var result = {};

    if (query && query != "") {
      result = Products.find({
        $or: [{
          producttitle: {
            $regex: query,
            $options: 'i'
          },
          productDescription: {
            $regex: query,
            $options: 'i'
          }
        }]
      }, {
        sort: {
          createdAt: -1
        }
      });
    } else {
      result = Products.find({}, {
        sort: {
          createdAt: -1
        }
      });
    }

    Loading.stop();
    return result;
  },
  homeProducts: function () {
    return Products.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 4
    });
  },
  productTitle: function () {
    return ""; //RecipesData[this.recipeName].title;
  },
  path: function () {
    return Router.path('product', {
      id: this._id
    }, {
      query: {
        _id: this._id
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipe-item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/recipe-item.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.recipeItem.helpers({
  path: function () {
    return Router.path('recipe', this.recipe);
  },
  highlightedClass: function () {
    if (this.size === 'large') return 'highlighted';
  },
  bookmarkCount: function () {
    var count = BookmarkCounts.findOne({
      recipeName: this.name
    });
    return count && count.count;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipe.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/recipe.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var TAB_KEY = 'recipeShowTab';
Template.recipe.onCreated(function () {
  if (Router.current().params.activityId) Template.recipe.setTab('feed');else Template.recipe.setTab('recipe');
});
Template.recipe.onRendered(function () {
  this.$('.recipe').touchwipe({
    wipeDown: function () {
      if (Session.equals(TAB_KEY, 'recipe')) Template.recipe.setTab('make');
    },
    preventDefaultEvents: false
  });
  this.$('.attribution-recipe').touchwipe({
    wipeUp: function () {
      if (!Session.equals(TAB_KEY, 'recipe')) Template.recipe.setTab('recipe');
    },
    preventDefaultEvents: false
  });
}); // CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over

Template.recipe.setTab = function (tab) {
  var lastTab = Session.get(TAB_KEY);
  Session.set(TAB_KEY, tab);
  var fromRecipe = lastTab === 'recipe' && tab !== 'recipe';
  $('.feed-scrollable').toggleClass('instant', fromRecipe);
  var toRecipe = lastTab !== 'recipe' && tab === 'recipe';
  $('.feed-scrollable').toggleClass('delayed', toRecipe);
};

Template.recipe.helpers({
  isActiveTab: function (name) {
    return Session.equals(TAB_KEY, name);
  },
  activeTabClass: function () {
    return Session.get(TAB_KEY);
  },
  bookmarked: function () {
    return Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
  },
  activities: function () {
    return Activities.find({
      recipeName: this.name
    }, {
      sort: {
        date: -1
      }
    });
  }
});
Template.recipe.events({
  'click .js-add-bookmark': function (event) {
    event.preventDefault();
    if (!Meteor.userId()) return Overlay.open('authOverlay');
    Meteor.call('bookmarkRecipe', this.name);
  },
  'click .js-remove-bookmark': function (event) {
    event.preventDefault();
    Meteor.call('unbookmarkRecipe', this.name);
  },
  'click .js-show-recipe': function (event) {
    event.stopPropagation();
    Template.recipe.setTab('make');
  },
  'click .js-show-feed': function (event) {
    event.stopPropagation();
    Template.recipe.setTab('feed');
  },
  'click .js-uncollapse': function () {
    Template.recipe.setTab('recipe');
  },
  'click .js-share': function () {
    Overlay.open('shareOverlay', this);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"search.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/search.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.QuickSearch.helpers({
  create: function () {},
  rendered: function () {},
  destroyed: function () {}
});
Template.QuickSearch.events({
  'click #btnQSearch': function (event, template) {
    console.log("Searching Quick"); // debugger;

    var searchValue = template.$('#searchTerm')[0].value; //alert(searchValue);

    Router.route('pathfor products');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seller.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/seller.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.SellerProducts_tmp.helpers({
  'myProducts': function () {
    console.log("This sellers products:" + Meteor.userId());
    Loading.call("getSellerProducts", [], [], [], function (error, result) {
      if (error) {
        console.log("Error getting seller products " + error);
      } else {
        // console.log("Got it");
        // console.log(result);
        Session.set("SellerProducts", result);
      }
    });
    return Session.get("SellerProducts");
  }
});
Template.Seller_tmp.helpers({
  amISeller: function () {
    if (Meteor.userId()) {
      console.log(" Client Checking  for seller : " + Meteor.userId());
      Meteor.subscribe('getSeller', Meteor.userId());
      var result = {
        _id: "",
        userId: Meteor.userId(),
        businessname: "",
        busTagLine: "",
        busLogo: "",
        busAvatar: "",
        bustel: "",
        buscel: "",
        busemail: "",
        cont1: "",
        cont2: "",
        add1: "",
        add2: "",
        add3: "",
        add4: "",
        add5: "",
        website: ""
      };

      if (Sellers.find({
        userId: Meteor.userId()
      }).count() === 0) {
        console.log("Seller not found");
      } else {
        result = Sellers.findOne({
          userId: Meteor.userId()
        });
      }

      return result;
    }
  }
});
Template.seller.onRendered(function () {
  console.log("Create Seller template");
});
Template.tmp_product_sell.onRendered(function () {});
Template.tmp_product_sell.events({
  'change .prodImg': function (event, template) {
    event.preventDefault();
    var fr = new FileReader();
    document.getElementById('prdImages').innerHTML = "";
    var fileCount = event.currentTarget.files.length;

    if (fileCount > 10) {
      alert('Oh No Too Many files , please select 10 or less');
      event.currentTarget = "";
      return false;
    }

    var isToBig = false;
    var uploadSize = 0;

    for (i = 0; i < fileCount; i++) {
      console.log("Processing files " + event.currentTarget.files[i].name); //document.querySelector('imgProgress').outerHTML="<span>Processing file "+ event.currentTarget.files[i].name +"</span>";

      HandleClientImageFile(event.currentTarget.files[i], "prdImages");
    }

    event.currentTarget = "";
  }
});
Template.seller.events({
  'change .imgBuLogo': function (event, template) {
    event.preventDefault();
    console.log('Add Seller BusLogo Upload');
    Loading.start();
    var fr = new FileReader();

    fr.onload = function (event) {
      var data = event.target.result;
      template.$('.imgBusLogo')[0].src = data;
    };

    fr.readAsDataURL(event.currentTarget.files[0]);
    Loading.stop();
  },
  'change .imgAvatar': function (event, template) {
    event.preventDefault();
    var fr = new FileReader();

    fr.onload = function (event) {
      var data = event.target.result;
      template.$('.imgBusAvatar')[0].src = data;
    };

    if (event.currentTarget.files[0].size < 2000000) {
      fr.readAsDataURL(event.currentTarget.files[0]);
    } else {
      template.$('.imgBusAvatar')[0].src = "/img/app/big.jpg";
    }
  },
  'submit .add_Seller_form': function (event, template) {
    event.preventDefault();
    target = event.target; //'seller.add'(excel) { 

    Loading.start();
    businessname = target.businessname.value;
    busTagLine = target.businesstagLine.value;
    busLogo = target.imgBusLogo.src; //busAvatar= target.imgBusAvatar.src;

    bustel = target.bustell.value;
    buscel = target.buscell.value;
    busemail = target.busemail.value;
    cont1 = target.person1.value;
    cont2 = target.person2.value;
    add1 = target.add1.value;
    add2 = target.add2.value;
    add3 = target.add3.value;
    add4 = target.add4.value;
    add5 = target.add5.value;
    website = target.website.value;
    var busLogoFile = target.fileLogo.files;
    var randLogoId = Random.id();
    var buslogImdId = Random.id();

    if (busLogoFile.length > 0) {
      var BuslogoImg = new FS.File(busLogoFile[0]);
      BuslogoImg.sellerId = Meteor.userId();
      BuslogoImg.ImageCat = "SellerDetails";
      BuslogoImg.ImageType = "BusLogo";
      BuslogoImg.ImageId = randLogoId;

      try {
        Images.insert(BuslogoImg, function (err, fileObj) {
          if (err) {} // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP

        });
      } catch (error) {}
    }

    createDate = Date.now().toLocaleString();

    if (target.currentuser === null) {
      alert('You must be logged in to be a seller');
      return false;
    }

    var SellerObj = {
      //_id:this._id,
      userId: Meteor.userId(),
      businessname: target.businessname.value,
      busTagLine: target.businesstagLine.value,
      busLogo: randLogoId,
      //busAvatar: randAvaId,
      bustel: target.bustell.value,
      buscel: target.buscell.value,
      busemail: target.busemail.value,
      cont1: target.person1.value,
      cont2: target.person2.value,
      add1: target.add1.value,
      add2: target.add2.value,
      add3: target.add3.value,
      add4: target.add4.value,
      add5: target.add5.value,
      website: target.website.value // Loading.start();

    };
    var result = Meteor.call('newSeller', SellerObj, function (err) {
      if (err) {
        console.log(err);
        alert('OOps something went wrong adding new seller, please retry .');
      } else {
        //clean up form   
        try {} catch (exp) {
          console.log(exp);
        }
      }
    });
    Loading.stop();
  }
});

function HandleClientImageFile(file, targetElement) {
  var preview = document.querySelector("#" + targetElement);
  var fr = new FileReader(); //insertImg.name="imgprds";

  if (file.name === null) {
    return null;
  }

  fr.onload = function (event) {
    var data = event.target.result;
    var insertImg = new Image();
    insertImg.id = "prdImages"; //insertImg.style ="height=100%;width=100%"; 

    insertImg.className = "prdImages img-responsive";
    insertImg.src = data;
    var image = new Image();
    var compressedImage = new Image();

    image.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = insertImg.naturalWidth;
      canvas.height = insertImg.naturalHeight;
      var ctx = canvas.getContext("2d").drawImage(insertImg, 0, 0); //,insertImg.naturalWidth,insertImg.naturalHeight, 0, 0,insertImg.naturalWidth,insertImg.naturalHeight);

      compressedImage.width = insertImg.naturalWidth;
      compressedImage.height = insertImg.naturalHeight;
      var compressValue = 1 / 100;

      switch (true) {
        case file.size < 400000:
          compressValue = 100 / 100;
          break;

        case file.size < 800000:
          compressValue = 80 / 100;
          break;

        case file.size < 2000000:
          compressValue = 60 / 100;
          break;

        case file.size < 4000000:
          compressValue = 40 / 100;
          break;

        case file.size < 6000000:
          compressValue = 20 / 100;
          break;

        default:
          compressValue = 10 / 100;
          break;
      }

      compressedImage = canvas.toDataURL("image/jpeg", compressValue);
      var newImg = new Image(); //newImg.height =1000;

      newImg.id = "prdImages";
      newImg.src = compressedImage;
      newImg.className = "prdImages img-responsive";
      preview.appendChild(newImg);
    };

    image.src = data;
  };

  fr.readAsDataURL(file);
}

function compressImage(source_img_obj, quality, output_format) {
  var mime_type = "image/jpeg";

  if (typeof output_format !== "undefined" && output_format == "png") {
    mime_type = "image/png";
  }

  var result_image_obj = new Image();

  try {
    var cvs = document.createElement('canvas');
    cvs.style.width = source_img_obj.naturalWidth;
    cvs.style.height = source_img_obj.naturalHeight; //ctx.drawImage(img,0,0,img.width,img.height,0,0,400,300);

    var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0, source_img_obj.naturalHeight, source_img_obj.naturalWidth, 0, 0, source_img_obj.naturalHeight, source_img_obj.naturalWidth);
    var newImageData = cvs.toDataURL(mime_type, quality / 100);
    result_image_obj.src = newImageData;
    result_image_obj.style.width = source_img_obj.naturalWidth;
    result_image_obj.style.height = source_img_obj.naturalHeight;
  } catch (exp) {
    result_image_obj = null;
  }

  return result_image_obj;
}

function HandleClientImageData(file, targetElement) {
  var preview = document.querySelector("#" + targetElement); //insertImg.name="imgprds";

  if (file === null) {
    return null;
  }

  var data = file;
  var insertImg = new Image();
  insertImg.id = "prdImages";
  insertImg.style = "height=100%;width=100%";
  insertImg.className = "prdImages img-responsive";
  insertImg.src = data;
  preview.appendChild(insertImg);
}

if (Meteor.isClient) {
  Template.tmp_product_sell.events({
    'submit .product-link-add': function (event) {
      var thisForm = $('.product-link-add');
      thisForm.validate();
      event.preventDefault();

      try {
        var productImages = event.target.prodImg.files;
        var compressedImages = $('.prdImages');
        var prodimgId = Random.id();
        var saveId;

        if (productImages.length > 0) {
          for (var i = 0; i < productImages.length; i++) {
            var fr = new FS.File(compressedImages[i].src);
            Loading.start();
            var productImg = new FS.File(productImages[i]);
            fr.name = productImg.name;
            fr.extension = productImg.extension;
            fr.type = productImg.type;
            fr.sellerId = Meteor.userId();
            fr.ImageCat = "ProductImage";
            fr.ImageType = "ProductDisplay";
            fr.ImageId = prodimgId; //template.$('.imgBusLogo')[0].src = data;    

            saveId = Images.insert(fr, function (err, fileObj) {// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
            });
            Loading.stop();
          }
        }
      } catch (error) {
        console.log("Error inserting Product Images");
        Loading.halt();
      }

      var ImagesInserted = prodimgId; //debugger;

      var target = event.target;
      var title = target.prdTitle.value;
      var description = target.prdDesc.value;
      var img = ImagesInserted;
      var price = target.prdprice.value;
      var prdCat = target.prdCat.value;
      var createDate = new Date();
      var expireValue = target.prdExpire.value;
      var expireDate = new Date();
      console.log(description);
      var timetoadd = ReferenceData.findOne({
        name: "addTime",
        id: expireValue
      }).timetoadd;
      var expDate = new Date(); //Date.parse(expDate.format());// moment().add(timetoadd,'days');

      var myExpDate = new Date(); // Date.parse(expDate.format());

      var prodObj = {
        sellerId: Meteor.userId(),
        producttitle: title,
        productDescription: description,
        price: price,
        prdCat: prdCat,
        prodImg: img,
        createdAt: createDate,
        expireAt: new Date(myExpDate) // Here we need to get the images that have been selected to be uploaded to the server

      };

      try {
        Loading.call("products.insert", prodObj, [], [], function (error, result) {
          if (error) {
            alert('Something went wrong. Please try again.');
          } else {//clear form.
          }
        });
      } catch (error) {
        console.log("Error Inserting product");
      }
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"share-overlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/share-overlay.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var TWEETING_KEY = 'shareOverlayTweeting';
var IMAGE_KEY = 'shareOverlayAttachedImage';
Template.shareOverlay.onCreated(function () {
  Session.set(TWEETING_KEY, true);
  Session.set(IMAGE_KEY, null);
});
Template.shareOverlay.helpers({
  attachedImage: function () {
    return Session.get(IMAGE_KEY);
  },
  avatar: function () {
    return Meteor.user().services.twitter.profile_image_url_https;
  },
  tweeting: function () {
    return Session.get(TWEETING_KEY);
  }
});
Template.shareOverlay.events({
  'click .js-attach-image': function () {
    MeteorCamera.getPicture({
      width: 320
    }, function (error, data) {
      if (error) alert(error.reason);else Session.set(IMAGE_KEY, data);
    });
  },
  'click .js-unattach-image': function () {
    Session.set(IMAGE_KEY, null);
  },
  'change [name=tweeting]': function (event) {
    Session.set(TWEETING_KEY, $(event.target).is(':checked'));
  },
  'submit': function (event, template) {
    var self = this;
    event.preventDefault();
    var text = $(event.target).find('[name=text]').val();
    var tweet = Session.get(TWEETING_KEY);
    Meteor.call('createActivity', {
      recipeName: self.name,
      text: text,
      image: Session.get(IMAGE_KEY)
    }, tweet, Geolocation.currentLocation(), function (error, result) {
      if (error) {
        alert(error.reason);
      } else {
        Template.appBody.addNotification({
          action: 'View',
          title: 'Your photo was shared.',
          callback: function () {
            Router.go('recipe', {
              name: self.name
            }, {
              query: {
                activityId: result
              }
            });
            Template.recipe.setTab('feed');
          }
        });
      }
    });
    Overlay.close();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"shoppingcart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/shoppingcart.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"showImage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/showImage.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.showImage.helpers({
  getSellerImage: function (imgid) {
    //console.log("Getting Seller images : " + imgid);
    var img = Images.findOne({
      ImageId: imgid
    }); //console.log(img.getFileRecord().collection.storesLookup.images.path);

    return img;
  },
  getProdCardImage: function (imgId) {
    return Images.find({
      ImageId: imgId
    }, {
      limit: 1
    });
  },
  getCarouselCardImage: function (imgId) {
    return Images.find({
      ImageId: imgId
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ticker.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/ticker.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.ticker.helpers({
  create: function () {},
  rendered: function () {// debugger;
    // EthTools.ticker.start();
  },
  destroyed: function () {
    EthTools.ticker.stop();
  },
  getAllTickers: function () {//EthTools.ticker.start();
    // var results = EthTools.ticker.find().fetch();
    // for (var i in results)
    // {
    //     console.log(i + " : " + results[i]);
    // }
    //return null;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"whats-cooking.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/whats-cooking.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.feed.helpers({
  activities: function () {
    return Activities.find({}, {
      sort: {
        date: -1
      }
    });
  },
  ready: function () {
    return Router.current().feedSubscription.ready();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"JIC.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/JIC.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*!
 * JIC JavaScript Library v2.0.2
 * https://github.com/brunobar79/J-I-C/
 *
 * Copyright 2016, Bruno Barbieri
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Tue Jul 11 13:13:03 2016 -0400
 */

/**
 * Create the jic object.
 * @constructor
 */
var jic = {
  /**
   * Receives an Image Object (can be JPG OR PNG) and returns a new Image Object compressed
   * @param {Image} source_img_obj The source Image Object
   * @param {Integer} quality The output quality of Image Object
   * @param {String} output format. Possible values are jpg and png
   * @return {Image} result_image_obj The compressed Image Object
   */
  compress: function (source_img_obj, quality, output_format) {
    var mime_type = "image/jpeg";

    if (typeof output_format !== "undefined" && output_format == "png") {
      mime_type = "image/png";
    }

    var cvs = document.createElement('canvas');
    cvs.width = source_img_obj.naturalWidth;
    cvs.height = source_img_obj.naturalHeight;
    var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
    var newImageData = cvs.toDataURL(mime_type, quality / 100);
    var result_image_obj = new Image();
    result_image_obj.src = newImageData;
    return result_image_obj;
  },

  /**
   * Receives an Image Object and upload it to the server via ajax
   * @param {Image} compressed_img_obj The Compressed Image Object
   * @param {String} The server side url to send the POST request
   * @param {String} file_input_name The name of the input that the server will receive with the file
   * @param {String} filename The name of the file that will be sent to the server
   * @param {function} successCallback The callback to trigger when the upload is succesful.
   * @param {function} (OPTIONAL) errorCallback The callback to trigger when the upload failed.
  * @param {function} (OPTIONAL) duringCallback The callback called to be notified about the image's upload progress.
  * @param {Object} (OPTIONAL) customHeaders An object representing key-value  properties to inject to the request header.
   */
  upload: function (compressed_img_obj, upload_url, file_input_name, filename, successCallback, errorCallback, duringCallback, customHeaders) {
    //ADD sendAsBinary compatibilty to older browsers
    if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
      XMLHttpRequest.prototype.sendAsBinary = function (string) {
        var bytes = Array.prototype.map.call(string, function (c) {
          return c.charCodeAt(0) & 0xff;
        });
        this.send(new Uint8Array(bytes).buffer);
      };
    }

    var type = "image/jpeg";

    if (filename.substr(-4).toLowerCase() == ".png") {
      type = "image/png";
    }

    var data = compressed_img_obj.src;
    data = data.replace('data:' + type + ';base64,', '');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', upload_url, true);
    var boundary = 'someboundary';
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary); // Set custom request headers if customHeaders parameter is provided

    if (customHeaders && (0, _typeof2.default)(customHeaders) === "object") {
      for (var headerKey in meteorBabelHelpers.sanitizeForInObject(customHeaders)) {
        xhr.setRequestHeader(headerKey, customHeaders[headerKey]);
      }
    } // If a duringCallback function is set as a parameter, call that to notify about the upload progress


    if (duringCallback && duringCallback instanceof Function) {
      xhr.upload.onprogress = function (evt) {
        if (evt.lengthComputable) {
          duringCallback(evt.loaded / evt.total * 100);
        }
      };
    }

    xhr.sendAsBinary(['--' + boundary, 'Content-Disposition: form-data; name="' + file_input_name + '"; filename="' + filename + '"', 'Content-Type: ' + type, '', atob(data), '--' + boundary + '--'].join('\r\n'));

    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          successCallback(this.responseText);
        } else if (this.status >= 400) {
          if (errorCallback && errorCallback instanceof Function) {
            errorCallback(this.responseText);
          }
        }
      }
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"common.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/common.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {
  //const compress = require('compress.js');
  RegExp.escape = function (s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"compressjs.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/compressjs.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "/dists/", t(t.s = 0);
}([function (e, t, n) {
  e.exports = n(1);
}, function (e, t, n) {
  "use strict";

  (function (e) {
    function t(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function r(e) {
      function t(e, t) {
        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            o = r ? document.querySelector(e) : Array.from(document.querySelectorAll(e));
        return Array.isArray(o) ? o.forEach(function (e) {
          n(e, t, function (e) {
            (0, i.default)(e, p, {
              rate: a.rate,
              dimension: a.dimen
            });
          });
        }) : n(o, t, function (e) {
          (0, i.default)(e, p, {
            rate: a.rate,
            dimension: a.dimen
          });
        }), o;
      }

      function n(e, t, n) {
        e.addEventListener(t, function (e) {
          e.preventDefault(), e.stopPropagation(), n(e);
        });
      }

      function r(e) {
        e.preventDefault(), e.stopPropagation();
        var t = m = m || document.createElement("a");
        t.download = a.imagePrefix + a.name.replace(/\..+/, ""), t.href = s[0], t.click();
      }

      var o = {
        rate: 50,
        imagePrefix: "compressed-",
        name: "image"
      },
          a = Object.assign({}, o, e),
          f = [],
          s = [],
          d = (a.inputSelector && t(a.inputSelector, "change"), a.dropSelector ? t(a.dropSelector, "drop") : null);
      !function (e) {
        e && (e.addEventListener("dragenter", function (e) {
          e.preventDefault(), console.log("drag entered");
        }), e.addEventListener("dragover", function (e) {
          e.preventDefault(), console.log("drag entered");
        }), e.addEventListener("dragleave", function (e) {
          e.preventDefault(), console.log("drag entered");
        }));
      }(d);
      a.rateSelector && function (e, t) {
        var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            o = r ? document.querySelector(e) : Array.from(document.querySelectorAll(e));
        Array.isArray(o) ? o.forEach(function (e) {
          n(e, t, function (e) {
            a.rate = parseInt(e.target.value), p.emit("startCompression", f, p, {
              rate: a.rate,
              dimension: a.dimen
            });
          });
        }) : n(o, t, function (e) {
          a.rate = parseInt(e.target.value), p.emit("startCompression", f, p, {
            rate: a.rate,
            dimension: a.dimen
          });
        });
      }(a.rateSelector, "change");
      (a.downloadSelector ? document.querySelector(a.downloadSelector) : null).addEventListener("click", r);
      var m = null,
          p = new u.default();
      return p.on("startCompression", l.default), p.on("saveFileUrl", function (e) {
        f = e;
      }), p.on("ImageCreated", function (e) {
        var t = e.map(function (e) {
          return (0, c.compress)(e, a.rate);
        });
        p.emit("compressed", t);
      }), p.on("compressed", function (e) {
        a.imageSelector && (document.querySelector(a.imageSelector).src = e[0]), s = e;
      }), {
        options: a,
        on: function (e, t) {
          p.on(e, t);
        }
      };
    }

    var o = n(3),
        i = t(o),
        a = n(4),
        u = t(a),
        c = n(5),
        l = t(c);
    e.Compress = r;
  }).call(t, n(2));
}, function (e, t, n) {
  "use strict";

  var r,
      o = "function" == typeof Symbol && "symbol" == (0, _typeof2.default)(Symbol.iterator) ? function (e) {
    return (0, _typeof2.default)(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0, _typeof2.default)(e);
  };

  r = function () {
    return this;
  }();

  try {
    r = r || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window);
  }

  e.exports = r;
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n = Array.from(e.target.files || e.dataTransfer.files),
        r = e.target.files ? "changed" : "dropped";
    return t.emit(r, n), n;
  }

  function o(e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) {
      r[o - 2] = arguments[o];
    }

    var i = new FileReader(),
        a = 0,
        u = [];
    i.onload = function () {
      a--, u.push(i.result), 0 === a && (t.emit("saveFileUrl", u), t.emit.apply(t, ["startCompression", u, t].concat(r)));
    }, e.forEach(function (e) {
      a++, i.readAsDataURL(e);
    });
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function (e, t) {
    for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) {
      i[a - 2] = arguments[a];
    }

    o.apply(void 0, [r(e, t), t].concat(i));
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      i = function () {
    function e() {
      r(this, e), this._events = {};
    }

    return o(e, [{
      key: "on",
      value: function (e, t) {
        var n = this._events;
        n[e] = n[e] || [], n[e].push(t);
      }
    }, {
      key: "emit",
      value: function (e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }

        var o = this._events;
        if (!(e in o)) return !1;
        o[e].forEach(function (e) {
          return e.apply(void 0, n);
        });
      }
    }]), e;
  }();

  t.default = i;
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = [];
    return e.map(function (e) {
      var o = new Image();
      o.src = e, o.onload = function () {
        r.push({
          img: o,
          dimension: Object.assign({}, {
            width: o.width,
            height: o.height
          }, n)
        }), t.emit("ImageCreated", r);
      };
    });
  }

  function o(e, t) {
    var n = a.getContext("2d");
    return a.width = e.dimension.width, a.height = e.dimension.height, n.drawImage(e.img, 0, 0, e.dimension.width, e.dimension.height), a.toDataURL("image/jpeg", t / 100);
  }

  function i(e, t, n) {
    var o = n.dimension;
    t.emit("compressing"), r(e, t, o);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.compress = o, t.default = i;
  var a = document.createElement("canvas");
}]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/init.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {//const compress = require('compress.js');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jquery.touchwipe.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/jquery.touchwipe.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function ($) {
  $.fn.touchwipe = function (settings) {
    var config = {
      min_move_x: 20,
      min_move_y: 20,
      wipeLeft: function () {},
      wipeRight: function () {},
      wipeUp: function () {},
      wipeDown: function () {},
      preventDefaultEvents: true
    };
    if (settings) $.extend(config, settings);
    this.each(function () {
      var startX;
      var startY;
      var isMoving = false;

      function cancelTouch() {
        this.removeEventListener('touchmove', onTouchMove);
        startX = null;
        isMoving = false;
      }

      function onTouchMove(e) {
        if (config.preventDefaultEvents) {
          e.preventDefault();
        }

        if (isMoving) {
          var x = e.touches[0].pageX;
          var y = e.touches[0].pageY;
          var dx = startX - x;
          var dy = startY - y;

          if (Math.abs(dx) >= config.min_move_x) {
            cancelTouch();

            if (dx > 0) {
              config.wipeLeft();
            } else {
              config.wipeRight();
            }
          } else if (Math.abs(dy) >= config.min_move_y) {
            cancelTouch();

            if (dy > 0) {
              config.wipeDown();
            } else {
              config.wipeUp();
            }
          }
        }
      }

      function onTouchStart(e) {
        if (e.touches.length == 1) {
          startX = e.touches[0].pageX;
          startY = e.touches[0].pageY;
          isMoving = true;
          this.addEventListener('touchmove', onTouchMove, false);
        }
      }

      if ('ontouchstart' in document.documentElement) {
        this.addEventListener('touchstart', onTouchStart, false);
      }
    });
    return this;
  };
})(jQuery);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jqueryValidate.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/jqueryValidate.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
  $.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function (options) {
      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }

        return;
      } // check if a validator for this form was already created


      var validator = $.data(this[0], "validator");

      if (validator) {
        return validator;
      } // Add novalidate tag if HTML5.


      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {
        this.validateDelegate(":submit", "click", function (event) {
          if (validator.settings.submitHandler) {
            validator.submitButton = event.target;
          } // allow suppressing validation by adding a cancel class to the submit button


          if ($(event.target).hasClass("cancel")) {
            validator.cancelSubmit = true;
          } // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button


          if ($(event.target).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        }); // validate the form on submit

        this.submit(function (event) {
          if (validator.settings.debug) {
            // prevent form submit to be able to see console output
            event.preventDefault();
          }

          function handle() {
            var hidden;

            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
              }

              validator.settings.submitHandler.call(validator, validator.currentForm, event);

              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }

              return false;
            }

            return true;
          } // prevent submit for invalid forms or custom submit handlers


          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }

          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }

            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function () {
      if ($(this[0]).is("form")) {
        return this.validate().form();
      } else {
        var valid = true;
        var validator = $(this[0].form).validate();
        this.each(function () {
          valid = valid && validator.element(this);
        });
        return valid;
      }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function (attributes) {
      var result = {},
          $element = this;
      $.each(attributes.split(/\s/), function (index, value) {
        result[value] = $element.attr(value);
        $element.removeAttr(value);
      });
      return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function (command, argument) {
      var element = this[0];

      if (command) {
        var settings = $.data(element.form, "validator").settings;
        var staticRules = settings.rules;
        var existingRules = $.validator.staticRules(element);

        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument)); // remove messages from rules, but allow them to be set separetely

            delete existingRules.messages;
            staticRules[element.name] = existingRules;

            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }

            break;

          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }

            var filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }

      var data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element); // make sure required is at front

      if (data.required) {
        var param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }

      return data;
    }
  }); // Custom selectors

  $.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function (a) {
      return !$.trim("" + $(a).val());
    },
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function (a) {
      return !!$.trim("" + $(a).val());
    },
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function (a) {
      return !$(a).prop("checked");
    }
  }); // constructor for validator

  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }

    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }

    if (params.constructor !== Array) {
      params = [params];
    }

    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element, event) {
        this.lastActive = element; // hide error label and remove error class on focus if enabled

        if (this.settings.focusCleanup && !this.blockFocusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }

          this.addWrapper(this.errorsFor(element)).hide();
        }
      },
      onfocusout: function (element, event) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        if (event.which === 9 && this.elementValue(element) === "") {
          return;
        } else if (element.name in this.submitted || element === this.lastElement) {
          this.element(element);
        }
      },
      onclick: function (element, event) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);
        } // or option elements, check parent select in that case
        else if (element.parentNode.name in this.submitted) {
            this.element(element.parentNode);
          }
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = this.groups = {};
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }

          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        var rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this[0].form, "validator"),
              eventType = "on" + event.type.replace(/^validate/, "");

          if (validator.settings[eventType]) {
            validator.settings[eventType].call(validator, this[0], event);
          }
        }

        $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'] ", "focusin focusout keyup", delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      // http://docs.jquery.com/Plugins/Validation/Validator/form
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);

        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }

        this.showErrors();
        return this.valid();
      },
      checkForm: function () {
        this.prepareForm();

        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }

        return this.valid();
      },
      // http://docs.jquery.com/Plugins/Validation/Validator/element
      element: function (element) {
        element = this.validationTargetFor(this.clean(element));
        this.lastElement = element;
        this.prepareElement(element);
        this.currentElements = $(element);
        var result = this.check(element) !== false;

        if (result) {
          delete this.invalid[element.name];
        } else {
          this.invalid[element.name] = true;
        }

        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }

        this.showErrors();
        return result;
      },
      // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
      showErrors: function (errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];

          for (var name in meteorBabelHelpers.sanitizeForInObject(errors)) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          } // remove items from success list


          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }

        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
      resetForm: function () {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }

        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },
      objectLength: function (obj) {
        var count = 0;

        for (var i in meteorBabelHelpers.sanitizeForInObject(obj)) {
          count++;
        }

        return count;
      },
      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },
      valid: function () {
        return this.size() === 0;
      },
      size: function () {
        return this.errorList.length;
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus() // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {// ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function () {
        var validator = this,
            rulesCache = {}; // select all valid inputs inside the form (no submit or reset buttons)

        return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          if (!this.name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          } // select only the first element for each name, and only those with rules specified


          if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }

          rulesCache[this.name] = true;
          return true;
        });
      },
      clean: function (selector) {
        return $(selector)[0];
      },
      errors: function () {
        var errorClass = this.settings.errorClass.replace(" ", ".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },
      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function (element) {
        var type = $(element).attr("type"),
            val = $(element).val();

        if (type === "radio" || type === "checkbox") {
          return $("input[name='" + $(element).attr("name") + "']:checked").val();
        }

        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }

        return val;
      },
      check: function (element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules();
        var dependencyMismatch = false;
        var val = this.elementValue(element);
        var result;

        for (var method in meteorBabelHelpers.sanitizeForInObject(rules)) {
          var rule = {
            method: method,
            parameters: rules[method]
          };

          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters); // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules

            if (result === "dependency-mismatch") {
              dependencyMismatch = true;
              continue;
            }

            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }

            throw e;
          }
        }

        if (dependencyMismatch) {
          return;
        }

        if (this.objectLength(rules)) {
          this.successList.push(element);
        }

        return true;
      },
      // return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      customDataMessage: function (element, method) {
        return $(element).data("msg-" + method.toLowerCase()) || element.attributes && $(element).attr("data-msg-" + method.toLowerCase());
      },
      // return the custom message for the given element name and validation method
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // return the first defined argument, allowing empty strings
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }

        return undefined;
      },
      defaultMessage: function (element, method) {
        return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), // title is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
      },
      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule.method),
            theregex = /\$?\{(\d+)\}/g;

        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }

        this.errorList.push({
          message: message,
          element: element
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }

        return toToggle;
      },
      defaultShowErrors: function () {
        var i, elements;

        for (i = 0; this.errorList[i]; i++) {
          var error = this.errorList[i];

          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }

          this.showLabel(error.element, error.message);
        }

        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }

        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }

        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }

        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function (element, message) {
        var label = this.errorsFor(element);

        if (label.length) {
          // refresh error/success class
          label.removeClass(this.settings.validClass).addClass(this.settings.errorClass); // replace message on existing label

          label.html(message);
        } else {
          // create label
          label = $("<" + this.settings.errorElement + ">").attr("for", this.idOrName(element)).addClass(this.settings.errorClass).html(message || "");

          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }

          if (!this.labelContainer.append(label).length) {
            if (this.settings.errorPlacement) {
              this.settings.errorPlacement(label, $(element));
            } else {
              label.insertAfter(element);
            }
          }
        }

        if (!message && this.settings.success) {
          label.text("");

          if (typeof this.settings.success === "string") {
            label.addClass(this.settings.success);
          } else {
            this.settings.success(label, element);
          }
        }

        this.toShow = this.toShow.add(label);
      },
      errorsFor: function (element) {
        var name = this.idOrName(element);
        return this.errors().filter(function () {
          return $(this).attr("for") === name;
        });
      },
      idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function (element) {
        // if radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name).not(this.settings.ignore)[0];
        }

        return element;
      },
      checkable: function (element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function (name) {
        return $(this.currentForm).find("[name='" + name + "']");
      },
      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;

          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }

        }

        return value.length;
      },
      depend: function (param, element) {
        return this.dependTypes[(0, _typeof2.default)(param)] ? this.dependTypes[(0, _typeof2.default)(param)](param, element) : true;
      },
      dependTypes: {
        "boolean": function (param, element) {
          return param;
        },
        "string": function (param, element) {
          return !!$(param, element.form).length;
        },
        "function": function (param, element) {
          return param(element);
        }
      },
      optional: function (element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },
      stopRequest: function (element, valid) {
        this.pendingRequest--; // sometimes synchronization fails, make sure pendingRequest is never < 0

        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }

        delete this.pending[element.name];

        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function (element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, "remote")
        });
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function (className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function (element) {
      var rules = {};
      var classes = $(element).attr("class");

      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }

      return rules;
    },
    attributeRules: function (element) {
      var rules = {};
      var $element = $(element);
      var type = $element[0].getAttribute("type");

      for (var method in meteorBabelHelpers.sanitizeForInObject($.validator.methods)) {
        var value; // support for <input required> in both html5 and older browsers

        if (method === "required") {
          value = $element.get(0).getAttribute(method); // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup

          if (value === "") {
            value = true;
          } // force non-HTML5 browsers to return bool


          value = !!value;
        } else {
          value = $element.attr(method);
        } // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings


        if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
          value = Number(value);
        }

        if (value) {
          rules[method] = value;
        } else if (type === method && type !== 'range') {
          // exception: the jquery validate 'range' method
          // does not test for the html5 'range' type
          rules[method] = true;
        }
      } // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs


      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },
    dataRules: function (element) {
      var method,
          value,
          rules = {},
          $element = $(element);

      for (method in meteorBabelHelpers.sanitizeForInObject($.validator.methods)) {
        value = $element.data("rule-" + method.toLowerCase());

        if (value !== undefined) {
          rules[method] = value;
        }
      }

      return rules;
    },
    staticRules: function (element) {
      var rules = {};
      var validator = $.data(element.form, "validator");

      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }

      return rules;
    },
    normalizeRules: function (rules, element) {
      // handle dependency check
      $.each(rules, function (prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }

        if (val.param || val.depends) {
          var keepRule = true;

          switch ((0, _typeof2.default)(val.depends)) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;

            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }

          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      }); // evaluate parameters

      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      }); // clean number parameters

      $.each(['minlength', 'maxlength'], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(['rangelength', 'range'], function () {
        var parts;

        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min && rules.max) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }

        if (rules.minlength && rules.maxlength) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }

      return data;
    },
    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];

      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    methods: {
      // http://docs.jquery.com/Plugins/Validation/Methods/required
      required: function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }

        if (element.nodeName.toLowerCase() === "select") {
          // could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }

        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }

        return $.trim(value).length > 0;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/email
      email: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
        return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/url
      url: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/date
      date: function (value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
      dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/number
      number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/digits
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
      // based on http://en.wikipedia.org/wiki/Luhn
      creditcard: function (value, element) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        } // accept only spaces, digits and dashes


        if (/[^0-9 \-]+/.test(value)) {
          return false;
        }

        var nCheck = 0,
            nDigit = 0,
            bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n);
          nDigit = parseInt(cDigit, 10);

          if (bEven) {
            if ((nDigit *= 2) > 9) {
              nDigit -= 9;
            }
          }

          nCheck += nDigit;
          bEven = !bEven;
        }

        return nCheck % 10 === 0;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/minlength
      minlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length >= param;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
      maxlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length <= param;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
      rangelength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/min
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/max
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/range
      range: function (value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
      equalTo: function (value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param);

        if (this.settings.onfocusout) {
          target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }

        return value === target.val();
      },
      // http://docs.jquery.com/Plugins/Validation/Methods/remote
      remote: function (value, element, param) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        var previous = this.previousValue(element);

        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }

        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;

        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          url: param,
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          success: function (response) {
            validator.settings.messages[element.name].remote = previous.originalMessage;
            var valid = response === true || response === "true";

            if (valid) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              var errors = {};
              var message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }

            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  }); // deprecated, use $.validator.format instead

  $.format = $.validator.format;
})(jQuery); // ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()


(function ($) {
  var pendingRequests = {}; // Use a prefilter if available (1.5+)

  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;

      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    var ajax = $.ajax;

    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
          port = ("port" in settings ? settings : $.ajaxSettings).port;

      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }

        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }

      return ajax.apply(this, arguments);
    };
  }
})(jQuery); // provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target


(function ($) {
  $.extend($.fn, {
    validateDelegate: function (delegate, type, handler) {
      return this.bind(type, function (event) {
        var target = $(event.target);

        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    }
  });
})(jQuery);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"helpers.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/helpers.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

pluralize = function (n, thing, options) {
  var plural = thing;

  if (_.isUndefined(n)) {
    return thing;
  } else if (n !== 1) {
    if (thing.slice(-1) === 's') plural = thing + 'es';else plural = thing + 's';
  }

  if (options && options.hash && options.hash.wordOnly) return plural;else return n + ' ' + plural;
};

Handlebars.registerHelper('pluralize', pluralize);
var DIMENSIONS = {
  small: '320x350',
  large: '640x480',
  full: '640x800'
};
UI.registerHelper('urlImage', function (imageName) {
  var str = "";

  if (imageName instanceof Array) {
    str = "url('/img/prods/" + imageName[0] + "')";
  } else {
    str = "url('/img/prods/" + imageName + "')";
  }

  return str;
});
Handlebars.registerHelper('getFirstElement', function (objCol) {
  var result = NaN;

  if (objCol.count > 0) {
    result = objCol[0];
  }

  return result;
});
Handlebars.registerHelper('getAllImages', function (imgId) {
  console.log("Getting images");
  console.log(Images.count());
  return Images.find({});
});
UI.registerHelper('isNullOrEmpty', function (someObject) {
  var result = true;

  if (someObject == 'undefined' || someObject == '') {
    return result;
  }

  return result;
});
UI.registerHelper('getCardImageById', function (ImgId) {
  console.log("Getting from store");
  console.log("Single Image Id : " + ImgId);
  Meteor.subscribe('SingleProductImage', ImgId);
  var returnimgs = Images.find({
    ImageId: ImgId
  }, {
    limit: 1
  });
  return returnimgs;
});
UI.registerHelper('thisSelectedProduct', function () {
  console.log("This Selected Product");

  try {
    var result;
    result = Session.get("currentProduct"); //Products.find({_id:Router.current().params._id});

    return result;
  } catch (error) {
    throw error;
  }
});
UI.registerHelper('getImageById', function (ImgId) {
  console.log("Getting from store");
  console.log("Image Id : " + ImgId);
  Meteor.subscribe('ProductImages', ImgId);
  var returnimgs = Images.find({
    ImageId: ImgId
  });
  return returnimgs;
});
Handlebars.registerHelper('getFirstElement', function (arr) {
  if (!isUndefined(arr)) {
    var result = arr[0];
    return result;
  }
});
Handlebars.registerHelper('compare', function (v1, v2) {
  if ((0, _typeof2.default)(v1) === 'object' && (0, _typeof2.default)(v2) === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});
Handlebars.registerHelper('bigger', function (v1, v2) {
  if ((0, _typeof2.default)(v1) === 'object' && (0, _typeof2.default)(v2) === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 > v2;
  }
});
Handlebars.registerHelper('smaller', function (v1, v2) {
  if ((0, _typeof2.default)(v1) === 'object' && (0, _typeof2.default)(v2) === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 < v2;
  }
});
Handlebars.registerHelper('isSingle', function (someArr) {
  if ((0, _typeof2.default)(someArr) == 'object') {
    if (someArr.count == 1) {
      return true;
    }

    return false;
  }
});
UI.registerHelper('productPath', function (option) {
  var pathing = "/img/prods/";

  if (option == "save") {
    pathing = Meteor.settings.products.fileSavePath;
  }

  return pathing;
});
UI.registerHelper('getReferenceData', function (refName) {
  var refData = Session.get('refData'); //return refData.find({name:refName});
});
UI.registerHelper('get_Add_Length', function () {
  console.log("refdata sell tmp");
  return ReferenceData.find({
    name: "addTime"
  });
});
UI.registerHelper('get_Prod_Cat', function () {
  console.log("Get Product Catalogue");
  return ReferenceData.find({
    name: "prdCat"
  });
});
Handlebars.registerHelper('uiLogger', function (someObject) {
  console.log("UI Logging " + someObject);
});
UI.registerHelper('productImage', function (imagename) {
  return '/img/prods/' + imagename;
});
UI.registerHelper('recipeImage', function (options) {
  var size = options.hash.size || 'large';
  if (options.hash.recipe) return '/img/recipes/' + DIMENSIONS[size] + '/' + options.hash.recipe.name + '.jpg';
});
Handlebars.registerHelper('activePage', function () {
  // includes Spacebars.kw but that's OK because the route name ain't that.
  var routeNames = arguments;
  return _.include(routeNames, Router.current().route.name) && 'active';
});
UI.registerHelper('thisUser', function () {
  var result = "Not logged in";

  if (Meteor.userId()) {
    result = Meteor.usedId().name;
  }

  return result;
});

if (Meteor.isServer) {}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/init.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {
  // Potentially prompts the user to enable location services. We do this early
  // on in order to have the most accurate location by the time the user shares
  //if (Meteor.isCordova) {
  var geoLocation = Geolocation.currentLocation();

  if (geoLocation != null) {
    console.log("Location");
    console.log(geoLocation);
  } //}

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"startup":{"apiSetup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/startup/apiSetup.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
console.log("Creating Db Collections");
ReferenceData = new Mongo.Collection('ReferenceData'); //Products = new Mongo.Collection('Products');

Sellers = new Mongo.Collection('Sellers'); //const featuredProducts = new Mongo.Collection('featuredProducts');
// this.autorun(function() {
//       meteor.subscribe('featuerd')
//   });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fixtures.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/startup/fixtures.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {
  if (Meteor.isServer) {
    console.log("Server Fixture Startup"); // if the Links collection is empty

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

    console.log("Reference Data Check : " + ReferenceData.find().count());

    if (ReferenceData.find().count() === 0) {
      console.log("Adding Reference Data");
      var refDatas = [{
        name: "busCat",
        id: "0",
        value: "Electronic"
      }, {
        name: "busCat",
        id: "1",
        value: "Fashion"
      }, {
        name: "busCat",
        id: "2",
        value: "Convience"
      }, {
        name: "busCat",
        id: "3",
        value: "Food"
      }, {
        name: "busCat",
        id: "4",
        value: "Once Off"
      }, {
        name: "addTime",
        id: "1",
        value: "Free",
        timetoadd: 1
      }, {
        name: "addTime",
        id: "2",
        value: "3 Days",
        timetoadd: 3
      }, {
        name: "addTime",
        id: "3",
        value: "1 Week",
        timetoadd: 7
      }, {
        name: "addTime",
        id: "4",
        value: "2 Weeks",
        timetoadd: 14
      }, {
        name: "addTime",
        id: "5",
        value: "1 Month",
        timetoadd: 30
      }, {
        name: "prdCat",
        id: "0",
        value: "Deals"
      }, {
        name: "prdCat",
        id: "1",
        value: "Home"
      }, {
        name: "prdCat",
        id: "2",
        value: "Food"
      }, {
        name: "prdCat",
        id: "3",
        value: "Security"
      }, {
        name: "prdCat",
        id: "4",
        value: "Education"
      }, {
        name: "prdCat",
        id: "5",
        value: "Cosmetic"
      }, {
        name: "prdCat",
        id: "6",
        value: "Kitchen"
      }, {
        name: "prdCat",
        id: "7",
        value: "Services"
      }, {
        name: "prdCat",
        id: "8",
        value: "Tools"
      }, {
        name: "prdCat",
        id: "9",
        value: "Fashion"
      }, {
        name: "prdCat",
        id: "10",
        value: "Motor Sales"
      }, {
        name: "prdCat",
        id: "11",
        value: "Computer"
      }, {
        name: "prdCat",
        id: "12",
        value: "Health"
      }, {
        name: "prdCat",
        id: "13",
        value: "Pop Ups"
      }, {
        name: "prdCat",
        id: "13",
        value: "Community Events"
      }, {
        name: "prdCat",
        id: "14",
        value: "Other"
      }];
      refDatas.forEach(function (refData) {
        return ReferenceData.insert(refData);
      });
      console.log("Reference Data Post Insert Check : " + ReferenceData.find().count());
    }

    console.log("Product Data Check : " + Products.find().count());

    if (Products.find().count() === 0) {
      prodData = [{
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some Product description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["1"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }, {
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some Other description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["2"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }, {
        sellerId: "1",
        producttitle: "some item",
        productDescription: "Some New description",
        price: "100.00",
        prdCat: 0,
        prodImg: ["3"],
        createdAt: new Date(),
        expireAt: Date.now() + 150000 * 60
      }];
      prodData.forEach(function (prod) {
        return Products.insert(prod);
      });
      console.log("Products Data Post Insert Check : " + Products.find().count());
    }

    console.log("Selleres Data Check : " + Sellers.find().count());

    if (Sellers.find().count() === 0) {
      Sellers.insert({
        _id: "1",
        busCat: "Electronic",
        businessname: "Test Business",
        businessag: "tag line",
        add1: "Address 1",
        add2: "Address 2",
        add3: "Address 3",
        add4: "Address 4",
        office: "0118574563",
        cell: "0118574563",
        email: "0118574563",
        contact1: "bob",
        contact2: "rick",
        url: "www.somesite.com",
        logoImg: "http://cooldigital.photography/wp-content/uploads/2014/02/Details-of-a-Marigold-Blossom-620x404.jpg",
        createdAt: new Date()
      });
      console.log("Sellers Data Post Insert Check : " + Sellers.find().count());
    }

    if (Images.find().count === 0) {
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "1",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "2",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
      Images.insert({
        "original": {
          "name": "249442-3600x2395.jpg",
          "updatedAt": ISODate("2014-07-18T11:51:58.000Z"),
          "size": 1874582,
          "type": "image/jpeg"
        },
        "sellerId": "1",
        "ImageCat": "ProductImage",
        "ImageType": "ProductDisplay",
        "ImageId": "3",
        "uploadedAt": ISODate("2017-12-25T15:17:25.937Z"),
        "copies": {
          "images": {
            "name": "249442-3600x2395.jpg",
            "type": "image/jpeg",
            "size": 1874582,
            "key": "images-aaEvqjn48EqWDTu5c-249442-3600x2395.jpg",
            "updatedAt": ISODate("2017-12-25T15:17:25.968Z"),
            "createdAt": ISODate("2017-12-25T15:17:25.968Z")
          }
        }
      });
    }

    console.log("Fixtures Done");
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"activities.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/activities.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Activities = new Mongo.Collection('activities');
Activities.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  }
});

Activities.latest = function () {
  return Activities.find({}, {
    sort: {
      date: -1
    },
    limit: 1
  });
};

Meteor.methods({
  createActivity: function (activity, tweet, loc) {
    check(Meteor.userId(), String);
    check(activity, {
      recipeName: String,
      text: String,
      image: String
    });
    check(tweet, Boolean);
    check(loc, Match.OneOf(Object, null));
    activity.userId = Meteor.userId();
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date();
    if (!this.isSimulation && loc) activity.place = getLocationPlace(loc);
    var id = Activities.insert(activity);
    if (!this.isSimulation && tweet) tweetActivity(activity);
    return id;
  }
});

if (Meteor.isServer) {
  var twitterOauth = function (options) {
    var config = Meteor.settings.twitter;
    var userConfig = Meteor.user().services.twitter;
    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  };

  var tweetActivity = function (activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached

      if ((text + append).length > MAX) return text.substring(0, MAX - append.length - 3) + '...' + append;else return text + append;
    } // we need to strip the "data:image/jpeg;base64," bit off the data url


    var image = activity.image.replace(/^data.*base64,/, '');
    var response = HTTP.post('https://upload.twitter.com/1.1/media/upload.json', {
      params: {
        media: image
      },
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });
    if (response.statusCode !== 200) throw new Meteor.Error(500, 'Unable to post image to twitter');
    if (!response.data) throw new Meteor.Error(500, 'Did not receive attachment from twitter');
    var attachment = response.data;
    response = HTTP.post('https://api.twitter.com/1.1/statuses/update.json', {
      params: {
        status: appendTweet(activity.text, ' #localmarket'),
        media_ids: attachment.media_id_string
      },
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });
    if (response.statusCode !== 200) throw new Meteor.Error(500, 'Unable to create tweet');
  };

  var getLocationPlace = function (loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json' + '?granularity=neighborhood' + '&max_results=1' + '&accuracy=' + loc.coords.accuracy + '&lat=' + loc.coords.latitude + '&long=' + loc.coords.longitude;
    var response = HTTP.get(url, {
      npmRequestOptions: {
        oauth: twitterOauth()
      }
    });

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function (place) {
        return place.place_type === 'neighborhood';
      });

      return place && place.full_name;
    }
  };
} // Initialize a seed activity


Meteor.startup(function () {
  if (Meteor.isServer && Activities.find().count() === 0) {
    Activities.insert({
      recipeName: 'summer-apricots-honey-panna-cotta',
      text: 'I substituted strawberries for apricots - incredible!',
      image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis',
      place: 'SoMA, San Francisco',
      date: new Date()
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bookmarks.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/bookmarks.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
BookmarkCounts = new Mongo.Collection('bookmarkCounts');
Meteor.methods({
  'bookmarkRecipe': function (recipeName) {
    check(this.userId, String);
    check(recipeName, String);
    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedRecipeNames: {
        $ne: recipeName
      }
    }, {
      $addToSet: {
        bookmarkedRecipeNames: recipeName
      }
    });
    if (affected) BookmarkCounts.update({
      recipeName: recipeName
    }, {
      $inc: {
        count: 1
      }
    });
  },
  'unbookmarkRecipe': function (recipeName) {
    check(this.userId, String);
    check(recipeName, String);
    var affected = Meteor.users.update({
      _id: this.userId,
      bookmarkedRecipeNames: recipeName
    }, {
      $pull: {
        bookmarkedRecipeNames: recipeName
      }
    });
    if (affected) BookmarkCounts.update({
      recipeName: recipeName
    }, {
      $inc: {
        count: -1
      }
    });
  }
}); // Initialize bookmark counts. We could use upsert instead.

if (Meteor.isServer && BookmarkCounts.find().count() === 0) {
  Meteor.startup(function () {
    _.each(RecipesData, function (recipe, recipeName) {
      BookmarkCounts.insert({
        recipeName: recipeName,
        count: 0
      });
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"common.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/common.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//import { Buffer } from "buffer";
// Handlebars.registerHelper('saveImageFile',function(fbinaryData,filename)
// {
//   //import {FilesCollection} from 'meteor/ostrio:files';
//   //var fs = require('meteor/ostrio:files');
//   var result = false;
//   var  base64Image = fbinaryData.split(",")[1];
//   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
//   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
//   //productImage = filename;
//   var  imagePath = Meteor.settings.products.imgPath;
//   console.log(imagePath);
//   try
//   {
//   require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
//         if (err)
//         {
//             console.log(err); // writes out file without error, but it's not a valid image
//         }
//         else
//         {
//           result = true;
//         }
//       });
//     }
//     catch(exp)
//     {
//       console.log("Client side File Save to server..." + imagePath + filename);
//       result = false;
//     }
//     return result;
// });
Handlebars.registerHelper('UILogger', function (source, obj) {
  console.log("UI Logger : " + source);
  console.log("Object : " + obj);
});

function newRandomId(prefixStr) {
  var rnd = prefixStr + "_" + require("meteor/random").id();

  return rnd;
} // Handlebars.registerHelper("getReferenceData",function(refname){
//   console.log("reference data load to cache");
//   var result = Meteor.apply('getReferenceData',[refname],{ wait:true,returnStubValue: false });
// });


function jsWriteFile(fbinaryData, filename) {
  var result = false;

  try {
    //import {FilesCollection} from 'meteor/ostrio:files';
    //var fs = require('meteor/ostrio:files');
    // global.Buffer = global.Buffer || Npm.require("buffer").Buffer;
    var result = true;

    var fs = Npm.require('fs');

    var base64Image = fbinaryData.split(",")[1];
    var binaryData = new Buffer(base64Image, 'base64').toString('binary'); //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
    //productImage = filename;

    console.log("Writing file");
    var pathtoFile = Meteor.rootPath;
    var strPath = pathtoFile.substr(0, pathtoFile.length - 7);
    var imagePath = strPath + Meteor.settings.products.fileSavePath;
    imagePath = Meteor.settings.products.fileSavePath;
    var writeFileName = imagePath + filename;
    console.log(writeFileName);

    try {
      // var fileWriter = new writeFile()
      //require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
      if (!fs.exists(writeFileName)) {
        fs.writeFile(imagePath + filename, binaryData, "binary", function (err) {
          if (err) {
            console.log(err); // writes out file without error, but it's not a valid image

            result = false;
          } else {
            result = true;
          }
        });
      }
    } catch (exp) {
      console.log("Server side File Save to server..." + imagePath + filename);
      console.log(exp);
      result = false;
    }
  } catch (error) {
    result = false;
  }

  return result;
}

Meteor.methods({
  saveImageFile: function (fbinaryData, filename) {
    try {
      return jsWriteFile(fbinaryData, filename);
    } catch (error) {
      throw error;
    } //  //import {FilesCollection} from 'meteor/ostrio:files';
    //  //var fs = require('meteor/ostrio:files');
    //  // global.Buffer = global.Buffer || Npm.require("buffer").Buffer;
    //   var result = true;
    //   var fs = Npm.require('fs');
    //   var  base64Image = fbinaryData.split(",")[1];
    //   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
    //   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
    //   //productImage = filename;
    //   var  imagePath = Meteor.settings.products.fileSavePath;
    //   var writeFileName = imagePath + filename;
    //   console.log(writeFileName);
    //   try
    //   {
    //   // var fileWriter = new writeFile()
    //   //require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
    //         if (!fs.exists(writeFileName))
    //         {   
    //         fs.writeFile(imagePath + filename ,binaryData, "binary", function(err) {
    //             if (err)
    //             {
    //                 console.log(err); // writes out file without error, but it's not a valid image
    //                 result = false;
    //             }
    //             else
    //             {
    //               result = true;
    //             }
    //           });
    //         }
    //     }
    //     catch(exp)
    //     {
    //       console.log("Server side File Save to server..." + imagePath + filename);
    //       console.log(exp);
    //       result = false;
    //     }
    //     return result;

  },
  getReferenceData: function (refName) {
    switch (refName) {
      case "businessCat":
        return ReferenceData.find({
          name: busCat
        });
        break;

      case "productCat":
        return ReferenceData.find({
          name: prdCat
        });
        break;

      case "timeCat":
        return ReferenceData.find({
          name: addTime
        });
        break;

      default:
        return {};
    }
  }
}); // function _saveImageFile()
// {
//   var result = false;
//   var  base64Image = fbinaryData.split(",")[1];
//   var binaryData = new  Buffer(base64Image,'base64').toString('binary') ;
//   //var filename = "/img/" + sellerId+"_" + Random.id() +".jpg";
//   //productImage = filename;
//   var  imagePath = Meteor.settings.product.filePath;
//   try
//   {
//   require("fs").writeFile(imagePath + filename ,binaryData, "binary", function(err) {
//         if (err)
//         {
//             console.log(err); // writes out file without error, but it's not a valid image
//         }
//         else
//         {
//           result = true;
//         }
//       });
//     }
//     catch(exp)
//     {
//       console.log("Client side File Save to server..." + filename);
//       result = false;
//     }
//     return result;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"media.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/media.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
console.log("Server create FS Media Collection"); //var imageStore = new FS.Store.GridFS("images", {
//mongoUrl: 'mongodb://127.0.0.1:3001/justadit/', // optional, defaults to Meteor's local MongoDB
//mongoOptions: {...},  // optional, see note below
//transformWrite: myTransformWriteFunction, //optional
//transformRead: myTransformReadFunction, //optional
//maxTries: 1, // optional, default 5
//chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
// Default: 2MB. Reasonable range: 512KB - 4MB
//  });

var imageStore = new FS.Store.FileSystem("images", {
  path: "/var/www/justaditimages/",
  //optional, default is "/cfs/files" path within app container
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
  chunkSize: 2 * 1024 * 1024 - 1024,
  // optional, default GridFS chunk size in bytes (can be overridden per file).
  //Default: 2MB,//. Reasonable range: 512KB - 4MB
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  maxTries: 2 //optional, default 5

}); //   var videoStore = new FS.Store.GridFS("videos", {
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
}); // Videos = new FS.Collection("videos", {
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
}); // Videos.allow({ 
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
    var prodImages = Images.find({
      ImageId: ImgId
    });
    var returnImages = [];
    prodImages.forEach(function (element) {
      returnImages.push(element);
    }); //var sell = Meteor.apply('getProductSeller', [prod.sellerId], { returnStubValue: true });
    //prod.seller = sell;

    return returnImages; //return Meteor.Mongo.Products.findOne({_id:prodid});
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"news.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/news.js                                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
News = new Mongo.Collection('news');
News.allow({
  insert: function (userId) {
    var user = Meteor.users.findOne(userId);
    return user && user.admin;
  }
});

News.latest = function () {
  //http://feeds.news24.com/articles/news24/SouthAfrica/rss
  return News.findOne({}, {
    sort: {
      date: -1
    },
    limit: 1
  });
};

if (Meteor.isServer && News.find().count() === 0) {
  Meteor.startup(function () {
    News.insert({
      text: 'First of the season citrus has just arrived. Get succulent oranges and tangerines in our produce aisle!',
      date: new Date()
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"product.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/product.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Product = new Mongo.Collection('Product');
Product.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  }
});
Meteor.methods({
  'latestProduct': function (id) {
    return Product.find({}, {
      order: {
        createdAt: -1
      }
    }); //return result[0];
  },
  'QSearchProduct': function (id) {
    console.log("Searching");
    Meteor.subscribe('QSearch', id);
    var results = Products.find({});
    console.log(results);
    return results;
  },
  'products.insert': function (productObj) {
    //var fs = Npm.require('fs');
    var newProd = false;

    if (productObj._id == "") {
      newProd = true;
    }

    var ProdImgs = [];

    try {
      // console.log(productObj.prodImg);
      // for (pImg in productObj.prodImg)
      // {
      //   if (newProd)
      //   {
      //     var randId = Random.id();// require('random');     
      //     var FileName = productObj.userId + "_" + randId  + ".jpg";            
      //     ProdImgs.push(FileName);                
      //     var busLogCall = Meteor.apply('saveImageFile',[pImg,FileName],{wait:true});                   
      //   }
      //   else
      //   {
      //     if (!fs.exists(pImg))
      //     {
      //       var randId = Random.id();// require('random');     
      //       var FileName = productObj.userId + "_" + randId  + ".jpg";            
      //       ProdImgs.push(FileName);                
      //       var busLogCall = Meteor.apply('saveImageFile',[pImg,FileName],{wait:true}); 
      //     }
      //   }
      // }
      //   productObj.prodImg = ProdImgs;
      var productResult = Products.upsert({
        // Selector
        _id: productObj._id
      }, {
        // Modifier
        $set: {
          sellerId: productObj.sellerId,
          producttitle: productObj.producttitle,
          productDescription: productObj.productDescription,
          price: productObj.price,
          prdCat: productObj.prdCat,
          prodImg: productObj.prodImg,
          createdAt: productObj.createdAt,
          expireAt: productObj.expireAt
        }
      });
    } catch (exp) {
      throw exp;
    }
  }
});
/*


Meteor.methods(
    
    {
  'products.insert'(sellerId,producttitle, productDescription , price,prodCat,createdAt,expireAt, url,prodImg) {

    var ProdInsert = Products.insert({
      sellerId, 
      producttitle,
      productDescription , 
      price,
      prodCat,
      createdAt,
      expireAt,
      url,
      prodImg
      
  });
  return ProdInsert;

  
}




  Product.getProduct = function(prodId)
  {
    var returnProduct ;
    console.log("Single product Meteor Call method");
    try
    {
        Meteor.call('getProduct',[ prodId],(error,result)=>{
            if (error)
            {
                console.log(error);
            }
            else
            {
                console.log("Meteor Call to get product : " + result);
          
                returnProduct = result;
            }
        });
      
      console.log("Post Meteor Call after assign " + returnProduct);
    }
    catch(exp)
    {
      throw exp;
    }
    return returnProduct;
  }

   */

Product.MyProducts = function (sellerId) {
  return Product.find({
    SellerID: sellerId
  });
};

Product.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  //Product.find({},{order:{createdAt:-1}});
  return Product.find({}, {
    order: {
      createdAt: -1
    }
  });
};
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"products.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/products.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Products = new Mongo.Collection('Products');
Products.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  },
  update: function (userId, doc) {
    return false;
  }
});
Meteor.methods({
  'featuredProducts': function () {
    console.log("Getting Latest featured products data " + Meteor.settings.featuredProductsLimit);
    var prodresult = [];

    try {
      var prod = Products.find({}, {
        order: {
          createdAt: -1
        }
      }, {
        limit: Meteor.settings.featuredProductsLimit
      });
      prod.forEach(function (element) {
        prodresult.push(element);
      });
    } catch (exp) {
      console.log("Error getting featured Products : " + exp);
      throw exp;
    }

    return {
      Results: prodresult
    };
  },
  'getProduct': function (prodid) {
    // var result = Products.find({_id:prodid});
    try {
      //Meteor.subscribe('product',prodid);
      //Meteor.subscribe('getSellers');
      var prod = Products.findOne({
        _id: prodid
      });

      if (prod) {
        var sell = Sellers.findOne({
          userId: prod.sellerId
        });
        var prodImages = Meteor.apply('getProductImages', [prod.prodImg], {
          returnStubValue: true
        });
        prod.seller = sell;
        prod.prodImgs = prodImages;
      } //loading.stop();


      return prod;
    } catch (exp) {
      //loading.halt();
      console.log(exp);
    } //return Meteor.Mongo.Products.findOne({_id:prodid});

  },
  'getProductSeller': function (sellerId) {
    Meteor.subscribe('getSeller', sellerId);
    return Sellers.findOne({
      userId: Meteor.userId()
    });
  },
  'QSearchProducts': function (searchItem) {
    //debugger;
    var searchTerms = "'/^.*" + searchItem[0] + ".*$/i'";
    console.log(searchTerms); //$text: {$search: searchValue} },

    var prods = Products.find({
      $or: [{
        "producttitle": {
          $regex: searchTerms
        }
      }, {
        "productDescrption": {
          $regex: searchTerms
        }
      }]
    });
    var result = [];
    prods.forEach(function (element) {
      result.push(element);
    }); //var result = Products.find({$text: {$search: searchTerms}}).fetch();
    //({$text:{$search:"tutorialspoint"}})

    console.log(result);
    return result;
  },
  'getSellerProducts': function () {
    console.log("Getting Seller Server Side Products");
    var prodresult = []; //Product.find({},{order:{createdAt:-1}});

    var prod = Products.find({
      sellerId: Meteor.userId()
    }, {
      order: {
        createdAt: -1
      }
    });
    prod.forEach(function (element) {
      //console.log(element);
      prodresult.push(element);
    });
    return prodresult;
  }
});

Products.allProducts = function () {
  console.log("Getting latest products" + Products.count());
  Meteor.subscribe('allProducts');
  return Products.find({}, {
    order: {
      createdAt: -1
    }
  }); // return Products.find({});
};

Products.getProduct = function (prodId) {
  var result;
  console.log("Single product api method");

  try {
    result = Products.findOne({
      _id: prodId
    }, {
      limit: 1
    }); //console.log(result.producttitle);
  } catch (exp) {
    throw exp;
  }

  return result;
};

Products.bookedMarked = function () {// here get all my userid Booked marked products and then get each prod and push to array and return the array.
};

Products.latestProducts = function () {
  var result;
  console.log("Api method");

  try {
    //Product.find({},{order:{createdAt:-1}});
    result = Products.find({}, {
      order: {
        createdAt: -1
      }
    });
  } catch (exp) {
    throw exp;
  }

  return result; //Products.find({}, {sort: {createdAt: -1}, limit: 1});
};

Products.MyProducts = function (SellerId) {
  //Product.find({},{order:{createdAt:-1}});
  return Products.find({
    sellerId: SellerId
  }, {
    order: {
      createdAt: -1
    }
  });
  ;
}; // Products.featuredProducts = function () {
//   var result = [];
//   console.log("Api method featuredProducts ");
//   //Meteor.settings.featuredProductsLimit 
//   try {
//     //result = Products.find({},{sort: {createdAt:1}, limit: 4});
//     //console.log(result);
//   }
//   catch (exp) {
//     throw exp;
//   }
//   return result;//Products.find({}, {sort: {createdAt: -1}, limit: 1});
//   // var ctr = Meteor.settings.featuredProductsLimit;
//   // console.log("Api Method featured : " +  ctr);
//   // var result = Products.find({},{sort:{createdAt:1},limit: 2});//Meteor.settings.featuredProductsLimit}); 
//   // return result;// Products.find({},{sort:{createdAt:1},limit: 2});//Meteor.settings.featuredProductsLimit});
// }


Products.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  return Products.find().sort({
    createdAt: -1
  }).limit(12).skip(continuationValue);
};

Meteor.methods({
  createProduct: function (product, loc) {
    check(product, {
      sellerId: String,
      producttitle: String,
      productDescription: String,
      price: Number,
      prodCat: String,
      url: String
    }, loc, Match.OneOf(Object, null));
    product.sellerId = Meteor.userId;
    product.createDate = new Date();
    product.expireDate = require("moment");
    var ProdInsert = Products.insert({
      sellerId: sellerId,
      producttitle: producttitle,
      productDescription: productDescription,
      price: price,
      prodCat: prodCat,
      createdAt: createdAt,
      expireAt: expireAt,
      url: url,
      prodImg: prodImg
    });
    return ProdInsert;
  }
});
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes-data.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/recipes-data.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RecipesData = {
  "spring-fromage-fort": {
    "title": "Fromage Fort",
    "highlighted": true,
    "excerpt": "When I’ve got too many cheese bits on hand, it's now fromage fort to the rescue",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2014/04/fromage-forte-cheese-dip-spread-recipe/"
    },
    "cookTime": "15 min",
    "ingredients": ["8 ounces (225g) cheese pieces, hard rinds removed", "1 to 2 ounces (30 to 60g) cream cheese", "1/4 cup (60ml) dry white wine", "1 garlic clove, peeled and minced", "a few turns of freshly ground black pepper", "pinch of cayenne or red pepper powder", "1 tablespoon minced chives or flat-leaf parsley", "chives or parsley, for garnish"],
    "directions": ["Cut the cheese into bite-sized cubes and put them in the bowl of a food processor with 1 ounce (30g) of the cream cheese, wine, garlic, and the black and red peppers.", "Process the mixture until completely smooth. If it is not completely smooth (which may happen if you are starting with an assortment of harder cheeses), add the additional cream cheese, and continue to process."],
    "name": "spring-fromage-fort"
  },
  "spring-ragu-bolognese": {
    "title": "Classic Ragu Bolognese",
    "excerpt": "A certain magic happens as the beef and aromatic vegetables slowly cook down with wine, tomato paste, and broth",
    "source": {
      "name": "Bon Appétit",
      "url": "http://www.bonappetit.com/recipe/classic-rag-bolognese"
    },
    "cookTime": "1 hr 10 min",
    "ingredients": ["2 Tbsp. extra-virgin olive oil", "2 medium onions, finely chopped (about 1 1/2 cups)", "2 celery stalks, finely chopped (about 1 cup)", "2 carrots, peeled, finely chopped (about 3/4 cup)", "6 oz. ground beef (85% lean)", "6 oz. ground veal", "3 oz. thinly sliced pancetta, finely chopped", "1/2 cup dry red wine", "3 cups (about) beef stock or chicken stock, divided", "3 Tbsp. tomato paste", "Kosher salt and freshly ground black pepper", "1 cup whole milk", "1 lb. tagliatelle or fettuccine (preferably fresh egg)", "Finely grated Parmesan (for serving)"],
    "directions": ["Heat oil in a large heavy pot over medium-high heat.", "Add onions, celery, and carrots."],
    "name": "spring-ragu-bolognese"
  },
  "spring-animal-cracker-cookies": {
    "title": "Animal-Cracker Cookies",
    "excerpt": "Create and decorate magical cookies that are as much fun as a day at the circus!",
    "source": {
      "name": "Williams-Sonoma",
      "url": "http://www.williams-sonoma.com/recipe/animal-cracker-cookies.html"
    },
    "cookTime": "1 hr",
    "ingredients": ["2 1/2 cups all-purpose flour", "1 tsp. baking powder", "1/2 tsp. salt", "1/8 tsp. freshly grated nutmeg", "1/8 tsp. mace", "12 Tbs. (1 1/2 sticks) unsalted butter, at room temperature", "1 cup sugar", "1 egg", "1 tsp. vanilla extract"],
    "directions": ["Over a small bowl, sift together the flour, baking powder, salt, nutmeg and mace. Set aside.", "In the bowl of an electric mixer fitted with the flat beater, beat the butter on high speed for 2 minutes. Reduce the speed to medium, slowly add the sugar and beat for 2 minutes, stopping the mixer occasionally to scrape down the sides of the bowl. Add the egg and vanilla and beat for 1 minute, stopping the mixer once to scrape down the sides of the bowl."],
    "name": "spring-animal-cracker-cookies"
  },
  "spring-chicken-in-mole": {
    "title": "Chicken in Molé",
    "excerpt": "If there is one dish that could be considered Mexican haute cuisine, then Mole Poblano is surely it",
    "source": {
      "name": "Epicurious",
      "url": "http://www.epicurious.com/recipes/food/views/Chicken-in-Mole-Puebla-Style-238185"
    },
    "cookTime": "2 hr",
    "ingredients": ["4 pounds chicken pieces, skin on", "Sea salt and ground black pepper to taste", "2 tablespoons sesame seeds, toasted, for garnish", "white rice", "9 mulato chiles", "7 pasilla chiles", "6 ancho chiles", "1 cup plus 9 tablespoons vegetable oil or lard plus additional as needed", "4 or 5 tomatillos, husked and cooked until soft", "5 whole cloves", "20 whole black peppercorns", "1-inch piece of a Mexican cinnamon stick", "1 tablespoon seeds from the chiles, toasted", "1/2 teaspoon anise seeds, toasted", "1/4 teaspoon coriander seeds, toasted", "8 tablespoons sesame seeds, toasted", "4 garlic cloves, roasted", "3 tablespoons raisins", "20 whole almonds, blanched", "1/4 cup pumpkin seeds", "2 corn tortillas, torn into pieces", "3 stale French rolls, cut into 1-inch slices", "6 to 7 cups reserved chicken broth as needed", "1 1/2 ounces Mexican chocolate, chopped"],
    "directions": ["In a large stock pot, parboil the chicken in water seasoned with salt and pepper to taste. Drain, reserving cooking broth, and refrigerate until ready to assemble the dish.", "Prepare the Mole Poblano. Clean the chiles by removing stems, veins, and seeds; reserve 1 tablespoon of the seeds."],
    "name": "spring-chicken-in-mole"
  },
  "spring-spanish-asparagus-revuelto": {
    "title": "Spanish Asparagus Revuelto",
    "excerpt": "In Spain, wild asparagus is very popular, and it’s a sure sign of spring",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016240/spanish-asparagus-revuelto.html"
    },
    "cookTime": "30 min",
    "ingredients": ["Olive oil", "2 peeled garlic cloves, plus 1/2 teaspoon minced garlic", "2 cups bread cubes, made with day-old bread, cut in 1/2-inch cubes", "Salt and pepper", "2 ounces diced Spanish chorizo", "1 bunch thin asparagus, about 1 1/2 pounds, cut in 1- to 2-inch lengths", "1 bunch green onions, chopped", "8 large eggs, beaten", "1/2 teaspoon pimentón", "2 tablespoons roughly chopped Italian parsley"],
    "directions": ["Put 3 tablespoons olive oil in a cast-iron skillet over medium-high heat. Add peeled garlic cloves and let them sizzle until lightly browned, then remove.", "Add bread cubes, season with salt and pepper, lower heat to medium and gently fry until lightly browned and crisp, about 2 minutes. Remove bread and set aside to cool."],
    "name": "spring-spanish-asparagus-revuelto"
  },
  "spring-meatloaf": {
    "title": "Fatted Calf's Meatloaf",
    "highlighted": true,
    "excerpt": "It is a thing of beauty, shaped into a large oval loaf and glazed with tangy cocktail sauce",
    "source": {
      "name": "Food52",
      "url": "http://food52.com/recipes/24302-fatted-calf-s-meatloaf"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["3/4 teaspoons black peppercorns", "2 allspice berries", "2 teaspoons fennel seed", "1 teaspoon chile flakes", "1 whole clove", "1 1/4 pound boneless lean beef from eye of round or sirloin, cut into 1-inch cubes", "1 pound boneless pork picnic, cut into 1-inch cubes", "4 ounces pork back fat, cut into 1-inch cubes", "Sea salt", "2 teaspoons chopped garlic", "4 ounces chopped bacon", "2 cups diced yellow onion", "2 tablespoons unsalted butter", "6 tablespoons fresh breadcrumbs", "1 egg lightly beaten", "1/2 cup ketchup", "1 1/2 teaspoon Tabasco sauce", "1 1/4 teaspoon Worcestershire sauce", "1 teaspoon grated fresh horseradish", "1/4 cup chopped parsley", "2 tablespoons chopped oregano", "1 tablespoon chopped thyme", "1 tablespoon chopped sage", "1/4 cup ketchup", "1/4 teaspoon sea salt", "1/4 teaspoon freshly ground black pepper", "1 1/2 teaspoon grated fresh horseradish", "1/2 teaspoon Worcestershire sauce", "1/2 teaspoon Tabasco sauce"],
    "directions": ["Preheat the oven to 325° F (165° C). To make the forcemeat, spread the peppercorns and allspice on a baking sheet and toast for 3 to 5 minutes, until fragrant. Let cool completely.", "Toast the fennel seeds the same way, then let cool completely."],
    "name": "spring-meatloaf"
  },
  "spring-lahmacun-turkish-pizza": {
    "title": "Lahmacun - Turkish Pizza",
    "excerpt": "",
    "source": {
      "name": "Ottolenghi",
      "url": "http://www.ottolenghi.co.uk/lahmacun-turkish-pizza-with-spicy-minced-beef-and-salad-topping-shop"
    },
    "cookTime": "40 min",
    "ingredients": ["250g minced beef", "1 medium onion, finely chopped (180g net)", "3 3/4 tsp salt", "1 1/2 tsp ground cinnamon", "1 1/2 tsp ground allspice", "1/2 tsp red chilli flakes", "25g flat-leaf parsley, chopped", "2 tbsp pomegranate molasses", "1 1/2 tbsp sumac", "3 tbsp tahini", "25g pine nuts", "2 tbsp lemon juice", "250g white flour, plus extra to dust", "1 1/2 tbsp milk powder", "1/2 tbsp salt", "2 tsp fast-action dried yeast", "1/2 tbsp caster sugar", "60ml sunflower oil", "1 medium egg", "100ml lukewarm water", "Olive oil for brushing"],
    "directions": ["Start with the dough. Put the flour, milk powder, salt, yeast and sugar in a large mixing bowl and stir well to combine.", "Make a well in the centre. Add the sunflower oil and egg and stir as you add the water."],
    "name": "spring-lahmacun-turkish-pizza"
  },
  "spring-easiest-spaghetti-and-meatballs": {
    "title": "Easiest Spaghetti & Meatballs",
    "excerpt": "No pasta's more iconic than spaghetti and meatballs",
    "source": {
      "name": "Martha Stewart",
      "url": "http://www.marthastewart.com/336523/easiest-spaghetti-and-meatballs?czone=food%2Fdinner-tonight-center%2Fdinner-tonight-main-courses&gallery=274538&slide=336523&center=276948"
    },
    "cookTime": "30 min",
    "ingredients": ["Coarse salt and ground pepper", "1/4 cup finely grated Parmesan, plus more for serving", "1/4 cup chopped fresh parsley", "2 garlic cloves, minced", "1 large egg", "1 pound ground beef chuck", "1/4 cup plain dried breadcrumbs", "1 tablespoon olive oil", "1 can (28 ounces) crushed tomatoes in puree", "3/4 pound spaghetti"],
    "directions": ["Set a large pot of salted water to boil. In a bowl, combine Parmesan, parsley, garlic, egg, 1 teaspoon salt, and 1 teaspoon pepper. Add beef and breadcrumbs; mix gently. Form into 16 balls.", "In a 5-quart Dutch oven or heavy pot, heat oil over medium. Add meatballs, and cook, turning occasionally, until browned, 8 to 10 minutes."],
    "name": "spring-easiest-spaghetti-and-meatballs"
  },
  "summer-shaking-beef": {
    "title": "Slanted Door's Shaking Beef",
    "excerpt": "Cubes of tender filet mignon are sautéed with red onions and a vinaigrette",
    "source": {
      "name": "7x7 magazine",
      "url": "http://www.7x7.com/recipes/secret-recipe-slanted-doors-shaking-beef"
    },
    "cookTime": "25 min",
    "ingredients": ["1 1/2 - 2 pounds filet mignon, fat trimmed and cut into 1 1/4-inch cubes", "1 teaspoons ground black pepper", "1/2 cup plus 1 tablespoon canola oil", "1 cup thinly sliced red onion, preferably spring onions", "3 stalks green onion, trimmed and cut to 1-inch lengths", "1 tablespoon chopped garlic", "2 tablespoons unsalted butter", "2 tablespoons white vinegar", "1/4 cup white granulated sugar", "1/4 cup light soy sauce", "1/4 cup fish sauce", "1 teaspoon cooking rice wine"],
    "directions": ["Marinate meat 1/2 teaspoon black pepper and 1 tablespoon oil for about 2 hours.", "Meanwhile, make the stir-fry sauce by combining the white vinegar, sugar, soy, fish sauce, and rice wine. Mix until sugar is dissolved. Set aside."],
    "name": "summer-shaking-beef"
  },
  "summer-bavarian-pretzel": {
    "title": "Bavarian-style Soft Pretzel",
    "excerpt": "",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/2010/05/26/dining/26pretzelrex1.html"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["1 tablespoon barley malt syrup or dark brown sugar", "2 tablespoons lard or softened unsalted butter", "2 tablespoons instant yeast", "6 cups (about 30 ounces) bread flour", "1 tablespoon plus 1/2 teaspoon kosher salt", "Food-grade lye, for dipping", "Coarse sea salt or pretzel salt, for sprinkling (do not substitute kosher salt)"],
    "directions": ["In a mixing bowl (or bowl of a mixer), stir together syrup, lard or butter, yeast, 2 cups warm water and half the flour. Add kosher salt and remaining flour and stir just until mixture comes together in a shaggy mass.", "Turn out onto counter (or attach dough hook to mixer) and knead for 8 to 10 minutes, until smooth and supple. Cut into 12 pieces and let rest 5 minutes."],
    "name": "summer-bavarian-pretzel"
  },
  "summer-apricots-honey-panna-cotta": {
    "title": "Apricots Honey Panna Cotta",
    "highlighted": true,
    "excerpt": "Juicy, fragrant, perfectly textured for a little fire action",
    "source": {
      "name": "Tartelette",
      "url": "http://www.tarteletteblog.com/2011/07/recipe-gluten-free-apricots-honey-panna.html"
    },
    "cookTime": "35 min",
    "ingredients": ["6 apricots", "olive oil", "1/4 cup water", "1 tablespoon powdered gelatin (2 sheets gelatin)", "2 cups heavy cream", "1/4 cup honey", "1 cup full fat buttermilk"],
    "directions": ["Cut the apricots in half and remove the pit. Brush lightly with olive oil and grill over hot coals until tender (about 3-4 minutes on each side).", "Let cool and puree until smooth in a food processor. Divide the mixture between 6 glasses."],
    "name": "summer-apricots-honey-panna-cotta"
  },
  "summer-elderberry-syrup": {
    "title": "Elderberry Syrup",
    "excerpt": "The gorgeous syrup is great in a glass of sparkling water over ice, dripped some over plain yogurt",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2007/08/respect-your-el/"
    },
    "cookTime": "35 min",
    "ingredients": ["2 pounds (1kg) elderberries, stems removed and rinsed", "4 cups (1l) water", "2 1/2 (500g) cups sugar", "squirt of freshly-squeezed lemon juice"],
    "directions": ["Put the elderberries in a large, non-reactive pot with the water. Bring to a boil, then reduce heat to a low boil and cook for 15-20 minutes, until tender and soft.", "Pass through a food mill, then discard the skins."],
    "name": "summer-elderberry-syrup"
  },
  "summer-spaghetti-lemon-olive": {
    "title": "Spaghetti with Lemon & Olive Oil",
    "excerpt": "This is one of those recipes that are almost better off without one",
    "source": {
      "name": "Smitten Kitchen",
      "url": "http://smittenkitchen.com/blog/2011/02/spaghetti-with-lemon-and-olive-oil-al-limone/"
    },
    "cookTime": "20 min",
    "ingredients": ["1 pound spaghetti or linguine", "Salt", "3 lemons", "1/4 cup extra virgin olive oil , plus additional for serving", "1/4 cup heavy cream", "1 ounce finely grated Parmesan cheese (about 1/2 cup), plus additional for serving", "Ground black pepper", "Small handful fresh basil or arugula leaves, shredded"],
    "directions": ["Cook linguine or spaghetti in well-salted water to your al dente tastes in a large, wide-bottomed pot.", "While pasta is cooking, zest lemons until you have a little shy of a tablespoon of zest. Juice lemons — you’ll have anywhere from 1/3 to 1/2 cup lemon juice."],
    "name": "summer-spaghetti-lemon-olive"
  },
  "summer-homemade-pasta-dough": {
    "title": "Homemade Pasta Dough",
    "excerpt": "",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/basic-pasta-dough/"
    },
    "cookTime": "25 min",
    "ingredients": ["2 Cups All-Purpose Flour", "2 Cups 00 Flour or 4 cups All-Purpose Flour", "4 large Eggs"],
    "directions": ["Mound the flour in the center of a large wooden board. Make a well in the center of the flour and add the eggs. Using a fork, beat the eggs together and then begin to incorporate the flour; starting with the inner rim of the well. As you expand the well, keep pushing the flour up to retain the well shape (do not worry if it looks messy).", "When half of the flour is incorporated, the dough will begin to come together. Start kneading the dough, using primarily the palms of your hands. Once the dough is a cohesive mass, set the dough aside and scrape up and discard any dried bits of dough."],
    "name": "summer-homemade-pasta-dough"
  },
  "summer-hamburger": {
    "title": "Diner Style Hamburgers",
    "excerpt": "This is the traditional, griddled hamburger of diners and takeaway spots, smashed thin and cooked crisp on its edges",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016595/hamburgers-diner-style.html"
    },
    "cookTime": "20 min",
    "ingredients": ["1/2 teaspoon neutral oil, like canola, or a pat of unsalted butter", "2 pounds ground chuck, at least 20 percent fat", "Kosher salt and black pepper to taste", "8 slices cheese (optional)", "8 soft hamburger buns, lightly toasted", "Lettuce leaves, sliced tomatoes and condiments"],
    "directions": ["Add oil or butter to a large cast-iron or stainless-steel skillet and place over medium heat. Gently divide ground beef into 8 small piles of around 4 ounces each, and even more gently gather them together into orbs that are about 2 inches in height. Do not form patties.", "Increase heat under skillet to high. Put half the orbs into the skillet with plenty of distance between them and, using a stiff metal spatula, press down on each one to form a burger that is around 4 inches in diameter and about 1/2 inch thick. Season with salt and pepper."],
    "name": "summer-hamburger"
  },
  "fall-roasted-butternut-squash-lasagna": {
    "title": "Roasted Butternut Squash Lasagna",
    "highlighted": true,
    "excerpt": "Making homemade pasta may seem arduous, but this dish is worth the extra work",
    "source": {
      "name": "Martha Stewart",
      "url": "http://www.marthastewart.com/857657/roasted-butternut-squash-lasagna"
    },
    "cookTime": "1 hr 35 min",
    "ingredients": ["2 large butternut squashes (about 2 pounds each), halved lengthwise and seeded", "3 tablespoons extra-virgin olive oil", "Coarse salt and freshly ground pepper", "1 stick unsalted butter, cut into pieces", "2 1/4 cups finely grated Parmesan cheese (about 8 ounces)", "1/2 cup finely crushed amaretti cookies", "1/4 cup finely chopped fresh sage", "1/4 teaspoon freshly grated nutmeg", "6 tablespoons unsalted butter, cut into pieces", "1/4 cup plus 2 tablespoons all-purpose flour", "6 cups whole milk", "Coarse salt", "1/4 teaspoon freshly grated nutmeg", "Homemade Pasta"],
    "directions": ["Make the filling: Preheat oven to 400 degrees. Drizzle squash halves with oil, and season with salt and pepper. Roast squashes, cut sides down, on a rimmed baking sheet until tender and browned, about 1 hour. Let cool. Scoop flesh from skins, and puree in a food processor until smooth.", "Melt butter in a small saucepan over medium heat. Continue to cook until browned and fragrant, about 3 minutes. Transfer to a bowl."],
    "name": "fall-roasted-butternut-squash-lasagna"
  },
  "summer-grits-icecream": {
    "title": "Grits Praline & Brown Butter Ice Cream",
    "excerpt": "\"Decadent\" isn’t a word we throw around lightly",
    "source": {
      "name": "Anson Mills",
      "url": "http://www.ansonmills.com/recipes/480?recipes_by=grain"
    },
    "cookTime": "2 hr 20 min",
    "ingredients": ["2 ounces (4 tablespoons) European-style unsalted butter", "1 cup heavy cream", "1 cup whole milk", "6 large egg yolks", "1/3 cup sugar", "1 1/2 teaspoons vanilla extract", "1/8 teaspoon fine sea salt", "2 ounces Anson Mills Antebellum Coarse Yellow Grits or Antebellum Coarse White Grits", "2 1/2 cups spring or filtered water", "1 teaspoon fine sea salt", "3.5 ounces sugar"],
    "directions": ["Make the ice cream base: Set a large bowl in a sink or basin filled with lots (at least 3 quarts) of ice cubes and cold water. Have a fine-mesh strainer nearby. Melt the butter in a small heavy-bottomed saucepan over low heat, stirring with a wooden spoon to scrape the browning milk solids back into the butter, until the butter is the color of a hazelnut in the shell and the kitchen smells miraculous, 3 to 5 minutes. Pull the pan off the heat and set it aside.", "Pour the cream and milk into a medium heavy-bottomed saucepan set over medium-high heat. Whisk the egg yolks and sugar in a medium bowl. Drizzle the hot butter cautiously into the yolk-sugar mixture a little at a time, whisking well as you do."],
    "name": "summer-grits-icecream"
  },
  "fall-peanut-butter-cookie": {
    "title": "Peanut Butter Cookie with Salted Peanut Caramel",
    "excerpt": "This recipe takes Peanut Butter Cookies to the next level",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2008/12/peanut-butter-cookies-with-salte-1/"
    },
    "cookTime": "45 min",
    "ingredients": ["8 tablespoons (115g) unsalted butter, at room temperature", "1/2 cup (120g) packed light brown sugar", "1/2 cup (100g) granulated sugar", "1 large egg, at room temperature", "1 teaspoon vanilla extract", "3/4 cup (200g) creamy salted peanut butter", "1 3/4 cups (250g) flour", "1/2 teaspoon baking soda", "1/4 teaspoon salt", "1 cup (250ml) heavy cream", "1/2 cup (125ml) water", "1 cup (200g) granulated sugar", "1 tablespoon light corn syrup or glucose", "1/8 teaspoon coarse salt", "3/4 cup (100g) finely chopped roasted salted peanuts"],
    "directions": ["Preheat the oven to 350F and line two baking sheets with parchment paper or silicone baking mats.", "With an electric mixer, or by hand, make the cookie dough by beating the butter, brown and granulated sugar until smooth. Beat in the egg and vanilla until well blended. If using an electric mixer, scrape down the sides of the bowl."],
    "name": "fall-peanut-butter-cookie"
  },
  "fall-amatriciana": {
    "title": "Bucatini all' Amatriciana",
    "excerpt": "This dish is named for the town of Amatrice...considered by many Italians to be birthplace of the best cooks on the peninsula",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/bucatini-allamatriciana/"
    },
    "cookTime": "30 min",
    "ingredients": ["1/4 cup extra-virgin olive oil", "12 ounces thinly sliced guanciale pancetta, or good bacon", "1 red onion, cut lengthwise in half and then into 1/4-inch-thick half-moons", "3 cloves garlic, sliced", "1 1/2 teaspoons hot red pepper flakes", "2 cups Basic Tomato Sauce", "1 pound Bucatini", "Freshly grated Pecorino Romano"],
    "directions": ["Bring 6 quarts of water to a boil in a large pot, and add 2 tablespoons salt.", "Meanwhile, in a 10- to 12-inch saute pan, combine the olive oil, ganciale, onion, garlic, and re pepper flakes; set over low heat and cook until the onion is softened and the guanciale has rendered much of its fat, about 12 minutes."],
    "name": "fall-amatriciana"
  },
  "fall-orecchiette-sausage-ragu": {
    "title": "Orecchiette with red lamb sausage & carrots",
    "excerpt": "Chef di Cucina Matt Abdoo expounded on the virtues of the fundamental building block of Italian cooking: fresh pasta",
    "source": {
      "name": "Mario Batali",
      "url": "http://www.mariobatali.com/recipes/orecchiette-with-red-lamb-sausage-carrots/"
    },
    "cookTime": "45 min",
    "ingredients": ["1 pound ground lamb", "1 1/2 teaspoons salt", "1 tablespoon red wine", "1 teaspoon cayenne pepper", "2 teaspoons garlic purée", "2 tablespoons roasted red pepper purée", "1 teaspoon freshly ground black pepper", "2 tablespoons sweet paprika", "1 teaspoon smoked paprika", "1 pint carrot juice", "2 cups diced carrots", "2 cups chopped carrots", "1 teaspoon sugar", "Orange zest, to taste", "Salt and pepper, to taste", "1/4 cup chicken stock", "2 tablespoons of unsalted butter", "1 pound orecchiette pasta", "1/4 cup pecorino cheese", "Extra virgin olive oil", "Breadcrumbs, for garnish"],
    "directions": ["To make the spice mixture for the sausage: In a bowl, combine spices, lamb, salt, and water. Incorporate thoroughly using your hands. Set aside.", "To make the carrot puree: Cook carrots in carrot juice until tender. Strain, and reserve the diced carrots. Puree the remaining chopped carrots. Season with orange zest, salt and pepper to taste.  Fold the diced carrots into the seasoned carrot puree. Set aside."],
    "name": "fall-orecchiette-sausage-ragu"
  },
  "winter-braised-duck": {
    "title": "Italian Red-Wine Braised Duck w/ Olive Gremolata",
    "highlighted": true,
    "excerpt": "A good braise always trumps a steak or a roast, both in terms of complex flavors and satisfaction",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1014424/italian-red-wine-braised-duck-with-olive-gremolata.html"
    },
    "cookTime": "2 hr 30 min",
    "ingredients": ["4 Muscovy duck legs (about 4 pounds), untrimmed", "Salt and pepper", "1/2 teaspoon coriander seed, toasted and coarsely ground", "1/2 teaspoon fennel seed, toasted and coarsely ground", "2 tablespoons olive oil", "2 cups finely diced onion", "3/4 cup finely diced carrot", "3/4 cup finely diced celery", "1 large thyme sprig", "1 bay leaf", "1 4-inch strip of orange peel, pith removed", "4 garlic cloves, minced", "2 tablespoons tomato paste", "1 cup chopped canned or fresh tomatoes", "1 cup dry red wine", "3 cups chicken broth", "Pinch cayenne or red pepper, optional", "Olive gremolata for garnish"],
    "directions": ["Trim duck legs of extraneous fat with a sharp knife, leaving a thin layer on top. (It is best to do this straight from the fridge, while fat is still firm.) Save duck fat for rendering.", "Season each leg generously with salt and pepper, then sprinkle with ground coriander and fennel. Massage seasoning into meat and leave at room temperature for 30 minutes, or wrap and refrigerate overnight."],
    "name": "winter-braised-duck"
  },
  "fall-chocolate-chai-cupcake": {
    "title": "Chocolate Chai Spice Cupcake",
    "excerpt": "The moist chocolatey goodness of the cake can live on its own",
    "source": {
      "name": "Cupcake Bakeshop",
      "url": "http://cupcakeblog.com/?p=50"
    },
    "cookTime": "55 min",
    "ingredients": ["200 gram bar of Valrhona 61% cacao", "3 sticks butter", "2-1/4 cups sugar", "8 eggs", "1-1/4 cup flour", "1/4 cup cocoa powder, unsweetened", "1-1/2 teaspoons baking powder", "3 teaspoons chai spice mix", "pinch of salt", "1 cup (2 sticks) butter", "4-5 cups powdered sugar, sifted", "1/4 cup milk", "2 teaspoons chai spice mix", "2 teaspoons minced fresh ginger"],
    "directions": ["With a small food processor, grind up the whole fennel and cloves.", "Transfer to a small bowl and add remaining spices. Mix to combine."],
    "name": "fall-chocolate-chai-cupcake"
  },
  "fall-mexican-rice": {
    "title": "Mexican Rice",
    "excerpt": "",
    "source": {
      "name": "NY Times",
      "url": "http://www.nytimes.com/recipes/1016674/mexican-rice.html"
    },
    "cookTime": "40 min",
    "ingredients": ["1 large clove garlic, roughly chopped", "2 cups canned tomatoes (fresh tomatoes can be used)", "1/2 cup green bell pepper, roughly chopped", "1 medium onion, roughly chopped", "1/2 medium jalapeño, seeds and veins removed", "1 teaspoon salt", "1/2 cup chicken stock or water", "2 tablespoons vegetable oil", "1 heaping cup long-grain white rice, rinsed"],
    "directions": ["Blend vegetables, salt and stock or water together into a mostly smooth purée (a few small pieces of onion and pepper are fine).", "In a large skillet with a tightfitting lid, heat oil. Add rice and toast until it absorbs most of the oil and begins to smell nutty."],
    "name": "fall-mexican-rice"
  },
  "fall-whole-wheat-goldfish-crackers": {
    "title": "Whole Wheat Goldfish Crackers",
    "excerpt": "",
    "source": {
      "name": "Smitten Kitchen",
      "url": "http://smittenkitchen.com/blog/2011/03/whole-wheat-goldfish-crackers/"
    },
    "cookTime": "1 hr 5 min",
    "ingredients": ["6 ounces (1 1/2 cups coarsely grated) sharp cheddar", "4 tablespoons (2 ounces or 57 grams) butter", "1/2 cup (2 1/2 ounces or 62 grams) whole wheat flour", "1/4 cup (1 1/8 ounces or 31 grams) all-purpose flour", "1/8 teaspoon onion powder", "1/8 to 1/4 teaspoon table salt"],
    "directions": ["Preheat oven to 350°F. Combine all ingredients in a food processor, running the machine until the dough forms a ball, about two minutes.", "If the dough feels warm or worrisome-ly soft, wrap it in waxed paper or plastic wrap and chill it in the fridge for 30 to 45 minutes. This also makes it easier to transfer shapes once they are rolled out."],
    "name": "fall-whole-wheat-goldfish-crackers"
  },
  "winter-world-peace-cookie": {
    "title": "P.Hermé & D.Greenspan's World Peace Cookies",
    "excerpt": "Shortbread cookie meets salted chocolate chip, and world peace feels within reach",
    "source": {
      "name": "Food52",
      "url": "http://food52.com/recipes/25372-pierre-herme-dorie-greenspan-s-world-peace-cookies"
    },
    "cookTime": "35 min",
    "ingredients": ["1 1/4 cups all-purpose flour", "1/3 cup unsweetened cocoa powder", "1/2 teaspoon baking soda", "1 stick plus 3 tablespoons (11 tablespoons) unsalted butter, room temperature", "2/3 cups (packed) light brown sugar", "1/4 cup granulated sugar", "1/2 teaspoon fleur del sel or 1/4 teaspoon fine sea salt", "1 teaspoon pure vanilla extract", "5 ounces bittersweet chocolate, chopped into chips, or a generous 3/4 cup store-bought mini chocolate chips"],
    "directions": ["Sift the flour, cocoa and baking soda together.", "Working with a stand mixer, preferably fitted with a paddle attachment, or with a hand mixer in a large bowl, beat the butter on medium speed until soft and creamy. Add both sugars, the salt and vanilla extract and beat for 2 minutes more."],
    "name": "winter-world-peace-cookie"
  },
  "winter-chocolate-tart": {
    "title": "Chocolate Tart",
    "highlighted": true,
    "excerpt": "A good chocolate tart doesn’t need to be fancy, but it needs to be deep, dark, and yes, somewhat decadent.",
    "source": {
      "name": "David Lebovitz",
      "url": "http://www.davidlebovitz.com/2011/10/chocolate-tart-recipe/"
    },
    "cookTime": "1 hr",
    "ingredients": ["1 1/4 cup (250 g) sugar", "6 tablespoons (90 ml) warm coffee", "4 ounces (115 g) unsalted butter, cubed, room temperature", "pinch of sea salt", "4 ounces (115 g) bittersweet or semisweet chocolate, chopped", "2 ounces (55 g) unsweetened chocolate, chopped", "2 large eggs", "1/4 cup (35 g) flour", "1 tablespoon dark rum or 1 teaspoon vanilla extract", "One 9–10 inch prebaked tart shell"],
    "directions": ["Preheat oven to 350ºF (180ºC.)", "Spread the sugar in an even layer in the bottom of a large, heavy-duty saucepan or Dutch oven. Cook the sugar over moderate heat until the edges liquefy and being to caramelize. Use a heatproof utensil to gently drag the liquefied sugar toward the center of the pan, encouraging the sugar to melt evenly."],
    "name": "winter-chocolate-tart"
  },
  "winter-braised-eggs-with-beef": {
    "title": "Braised eggs w/ beef, smoked aubergine & tomato",
    "excerpt": "",
    "source": {
      "name": "Ottolenghi",
      "url": "http://www.ottolenghi.co.uk/recipes/meat/braised-eggs-with-beef-smoked-aubergine-and-tomato-shop"
    },
    "cookTime": "1 hr 5 min",
    "ingredients": ["4 aubergines (1.1kg gross)", "1 tbsp olive oil, plus extra for drizzling", "1 large onion, finely chopped (200g net)", "6 garlic cloves, roughly chopped (20g net)", "1/2 tsp chilli flakes", "1/2 tsp ground cinnamon", "1/2 tsp ground cumin", "2 tsp tomato paste", "300g minced beef", "2 medium tomatoes, chopped (100g net)", "2 tsp finely chopped preserved lemon (15g)", "4 eggs", "3/4 tsp sumac", "1 tbsp chopped parsley", "Salt and black pepper", "40g tahini", "2 tbsp lemon juice", "1 garlic clove, crushed"],
    "directions": ["Pierce the aubergines with a sharp knife in a few places and place each directly over a naked flame on your stovetop. Cook on medium heat for 20 minutes, turning occasionally with metal tongs until the outside is totally burnt and the aubergine starts to collapse on itself. Alternatively, place the pierced aubergines on a tin foil lined tray under a hot grill in the oven for an hour, turning every 20 minutes. Remove from and place in a colander.", "Cut a single slit in each aubergine, from top to bottom and allow the juices to strain. Once cool enough to handle, scoop out all the flesh, avoiding all black skin, and set aside. You should have about 370g aubergine flesh."],
    "name": "winter-braised-eggs-with-beef"
  },
  "winter-cashew-gateau": {
    "title": "Cashew Gateau with Coffee Cardamom Mousse",
    "excerpt": "The inspiration for the caramel stained \"glass\" panel comes from my grandmother",
    "source": {
      "name": "Tartelette",
      "url": "http://www.tarteletteblog.com/2008/08/cashew-gateau-with-coffee-cardamom.html"
    },
    "cookTime": "1 hr 30 min",
    "ingredients": ["3/4 cups cashew, toasted/skinned", "1/3 cup cake flour, unsifted", "1 Tbsp. cornstarch", "3 large egg yolks", "1/2 cup sugar, divided (2Tb & 6 Tb)", "1/2 tsp. vanilla extract", "1/2 tsp. grated lemon rind", "2 lg. egg whites", "2 Tb melted butter, cooled", "1/2 teaspoon ground cardamom", "1/2 cup espresso or strong coffee", "1/4 cup sugar", "1 tsp powdered unflavored gelatin, softened in 1 tablespoon cold water", "1 cup heavy cream, cold", "1/2 cup heavy cream", "3/4 cup chopped chocolate or chocolate chips (about 6 oz or 180 gr)"],
    "directions": ["Position rack in the lower 3rd of the oven and preheat to 350 degrees.", "Grease and flour a 8” X 4” inch round springform pan."],
    "name": "winter-cashew-gateau"
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/router.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var feedSubscription;
var thisCurrentProduct; // Handle for launch screen possibly dismissed from app-body.js

dataReadyHold = null; // Global subscriptions

if (Meteor.isClient) {
  Meteor.subscribe('news');
  Meteor.subscribe('bookmarkCounts');
  Meteor.subscribe('images');
  Meteor.subscribe('getSellers'); // var resultsq = Meteor.subscribe('featuredProducts');
  // Session.set('featuredProducts',resultsq);

  feedSubscription = Meteor.subscribe('feed');
}

Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
  // Keep showing the launch screen on mobile devices until we have loaded
  // the app's data
  dataReadyHold = LaunchScreen.hold();
}

ProductsController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('latestProducts', function () {
      dataReadyHold.release();
    });
    Meteor.subscribe('getSellerProducts', function () {
      dataReadyHold.release();
    });
  }
});
FeedController = RouteController.extend({
  onBeforeAction: function () {
    this.feedSubscription = feedSubscription;
  }
});
RecipesController = RouteController.extend({
  data: function () {
    return _.values(RecipesData);
  }
});
BookmarksController = RouteController.extend({
  onBeforeAction: function () {
    if (Meteor.user()) Meteor.subscribe('bookmarks');else Overlay.open('authOverlay');
  },
  data: function () {
    if (Meteor.user()) return _.values(_.pick(RecipesData, Meteor.user().bookmarkedRecipeNames));
  }
});
RecipeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('recipe', this.params.name);
  },
  data: function () {
    return RecipesData[this.params.name];
  }
}); // addSellerController = RouteController.extend({
//   onBeforeAction:function()
//   {
//     console.log('Seller Controller loaded');
//     if (Meteor.userId())
//     {
//       var currentSeller = Meteor.wrapAsync(getThisSeller(Meteor.userId()));     
//     }
//   }
// });
// function getThisSeller(id)
// {
//   console.log("Get Seller  : " + id);
//   var retProd = {};
//   var returnProd=[];
//   var repro =   Meteor.apply('getProductSeller', [id],{wait: true}, function(err,data){
//     if (!err)
//     {
//       Session.set("currentSeller",data);
//       console.log(data);
//     }
//     else
//     {
//       console.log(err);
//     }
//   });
// }

ProductController = RouteController.extend({
  onBeforeAction: function () {
    if (this.params._id) {
      console.log("Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product', Router.current().params._id);
      var currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id)); //var productImages = Meteor.wrapAsync(getProductImages(currentProduct.prodImg));
      //currentProduct.prodImg = productImages;

      dataReadyHold.release();
    }
  } // ,
  // data : function()
  // {
  //   currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
  // }

});

function getThisProdData(id) {
  console.log("Get Single product publish Router Method : " + id);
  var retProd = {};
  var returnProd = [];
  var repro = Meteor.apply('getProduct', [id], {
    wait: false
  }, function (err, data) {
    if (!err) {
      sessionStorage.removeItem("currentProduct");
      Session.set("currentProduct", data);
    } else {
      console.log(err);
      sessionStorage.removeItem("currentProduct");
    }
  });
}

SellerController = RouteController.extend({
  onBeforeAction: function () {
    console.log('Seller Controller loaded');

    if (Meteor.userId()) {
      //loading.start();
      //Meteor.subscribe('SellerDetailsImages',Meteor.userId());
      Meteor.subscribe('getSeller', Meteor.userId());
      Sellers.findOne({
        userId: Meteor.userId()
      }); // Meteor.call('getSeller', [Meteor.userId()], function(error, success) { 
      //   if (error) { 
      //     console.log('error getting seller', error); 
      //     sessionStorage.removeItem("currentSeller");
      //   } 
      //   if (success) { 
      //     console.log("Client Router Seller : " + success);
      //     sessionStorage.removeItem("currentSeller");
      //     Session.set("currentSeller",success);
      //   } 
      // });

      console.log('Seller Controller reference data');
      Meteor.subscribe('referenceData', function () {
        console.log(ReferenceData.find({}).count()); //loading.stop();

        dataReadyHold.release();
      });
    }
  }
});
EditProductController = RouteController.extend({
  onBeforeAction: function () {
    console.log("Edit Product");

    if (this.params._id) {
      console.log("Edit Product launch :" + this.params._id);
      sessionStorage.removeItem("currentProduct");
      Meteor.subscribe('product', Router.current().params._id);
      var currentProduct = Meteor.wrapAsync(getThisProdData(this.params._id));
      dataReadyHold.release();
    }
  }
});
AdminController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('news');
  }
});
HomeController = RouteController.extend({
  onBeforeAction: function () {
    Meteor.subscribe('featuredProducts');
    console.log("Home from router products ");
    dataReadyHold.release();
  }
});
Router.route('home', {
  path: '/'
}); // Router.route('products', {
//   path : '/products/:_searchTerm',
//   // name: 'products',
//   // template: 'products',
//   });

Router.route('products');
Router.route('seller');
Router.route('feed');
Router.route('recipes');
Router.route('bookmarks');
Router.route('about');
Router.route('recipe', {
  path: '/recipes/:name'
});
Router.route('product', {
  path: '/product/:_id',
  name: 'productPage',
  template: 'product'
});
Router.route('editproduct', {
  path: '/editproduct/:_id',
  name: 'productEditPage',
  template: 'tmp_product_maintain',
  layoutTemplate: null,
  controller: EditProductController
});
Router.route('login', {
  path: '/login',
  template: 'authOverlay',
  layoutTemplate: 'appBody'
});
Router.route('signup', {
  path: '/signup',
  template: 'authOverlaySignup',
  layoutTemplate: 'appBody'
});
Router.route('admin', {
  layoutTemplate: null
});
Router.onBeforeAction('dataNotFound', {
  only: 'recipe'
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seller.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/seller.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Sellers.allow({
  insert: function (userId, doc) {
    return doc.userId === userId;
  },
  update: function (userId, doc) {
    return doc.userId === userId;
  },
  remove: function (userId, doc) {
    return doc.userId === userId;
  }
});
Meteor.methods({
  'getSeller': function (id) {
    var result = {};

    try {
      //console.log(" server find one : " + id);
      //loading.start();
      var SellerResult = Meteor.apply('getProductSeller', [id], {
        returnStubValue: true
      }); //console.log("Server seller " );

      if (SellerResult) {
        //console.log("has seller");
        result = SellerResult;
      } else {
        // console.log("has no seller");
        result = {
          _id: "",
          userId: Meteor.userId(),
          businessname: "",
          busTagLine: "",
          busLogo: "",
          busAvatar: "",
          bustel: "",
          buscel: "",
          busemail: "",
          cont1: "",
          cont2: "",
          add1: "",
          add2: "",
          add3: "",
          add4: "",
          add5: "",
          website: ""
        };
      } //loading.stop();

    } catch (exp) {
      //loading.halt();
      throw exp;
    } //console.log(result);


    return result;
  },
  'newSeller': function (sellerObj) {
    // var result = Products.find({_id:prodid});
    try {
      var sellerResult = Sellers.upsert({
        // Selector
        userId: sellerObj.userId
      }, {
        // Modifier
        $set: {
          businessname: sellerObj.businessname,
          busTagLine: sellerObj.busTagLine,
          busLogo: sellerObj.busLogo,
          busAvatar: sellerObj.busAvatar,
          bustel: sellerObj.bustel,
          buscel: sellerObj.buscel,
          busemail: sellerObj.busemail,
          cont1: sellerObj.cont1,
          cont2: sellerObj.cont2,
          add1: sellerObj.add1,
          add2: sellerObj.add2,
          add3: sellerObj.add3,
          add4: sellerObj.add4,
          add5: sellerObj.add5,
          website: sellerObj.website
        }
      }); //console.log(sellerResult);
      //return Sellers.insert(sellerObj);
    } catch (error) {
      console.log("Server - Seller - " + error);
      throw error;
    }
  },
  'updateSeller': function (sellerObj) {
    // var result = Products.find({_id:prodid});
    return Sellers.findOne({
      userId: prodid
    });
  },
  'deleteSeller': function (id) {
    // var result = Products.find({_id:prodid});
    return Sellers.remove({
      userId: id
    });
  }
});

Sellers.allSellers = function () {
  return Sellers.find({});
};

Sellers.more = function (continuationValue) {
  //https://www.npmjs.com/package/mongo-cursor-pagination
  return Sellers.find({}, {
    sort: {
      date: -1
    }
  });
};
/*
Meteor.methods({
  createActivity: function(activity, tweet, loc) {
    Meteor.userId(), String,
    activity, {
      recipeName: String,
      text: String,
      image: String
    },
    tweet, Boolean,
    loc, Match.OneOf(Object, null),
    
    activity.userId = Meteor.userId(,
    activity.userAvatar = Meteor.user().services.twitter.profile_image_url_https;
    activity.userName = Meteor.user().profile.name;
    activity.date = new Date;
    
    if (! this.isSimulation && loc)
      activity.place = getLocationPlace(loc,
    
    var id = Activities.insert(activity,
    
    if (! this.isSimulation && tweet)
      tweetActivity(activity,
    
    return id;
  }
},

if (Meteor.isServer) {
  var twitterOauth = function(options) {
    var config = Meteor.settings.twitter
    var userConfig = Meteor.user().services.twitter;

    return {
      consumer_key: config.consumerKey,
      consumer_secret: config.secret,
      token: userConfig.accessToken,
      token_secret: userConfig.accessTokenSecret
    };
  }
  
  var tweetActivity = function(activity) {
    // creates the tweet text, optionally truncating to fit the appended text
    function appendTweet(text, append) {
      var MAX = 117; // Max size of tweet with image attached
      
      if ((text + append).length > MAX)
        return text.substring(0, (MAX - append.length - 3)) + '...' + append;
      else
        return text + append;
    }
    
    // we need to strip the "data:image/jpeg;base64," bit off the data url
    var image = activity.image.replace(/^data.*base64,/, '',

    var response = HTTP.post(
      'https://upload.twitter.com/1.1/media/upload.json', {
        params: { media: image },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,
    
    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to post image to twitter',

    if (! response.data)
      throw new Meteor.Error(500, 'Did not receive attachment from twitter',

    var attachment = response.data;

    response = HTTP.post(
      'https://api.twitter.com/1.1/statuses/update.json', {
        params: {
          status: appendTweet(activity.text, ' #localmarket'),
          media_ids: attachment.media_id_string
        },
        npmRequestOptions: { oauth: twitterOauth() }
      }
    ,

    if (response.statusCode !== 200)
      throw new Meteor.Error(500, 'Unable to create tweet',
  }
  
  var getLocationPlace = function(loc) {
    var url = 'https://api.twitter.com/1.1/geo/reverse_geocode.json'
      + '?granularity=neighborhood'
      + '&max_results=1'
      + '&accuracy=' + loc.coords.accuracy
      + '&lat=' + loc.coords.latitude
      + '&long=' + loc.coords.longitude;
    
    var response = HTTP.get(url,
                            {npmRequestOptions: { oauth: twitterOauth() } },

    if (response.statusCode === 200 && response.data) {
      var place = _.find(response.data.result.places, function(place) {
        return place.place_type === 'neighborhood';
      },
      
      return place && place.full_name;
    }
  }
}
 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".less"
  ]
});
require("/client/templates/template.Maintain_Product.js");
require("/client/templates/template.Sell_Product.js");
require("/client/templates/template.about.js");
require("/client/templates/template.activity.js");
require("/client/templates/template.admin.js");
require("/client/templates/template.app-body.js");
require("/client/templates/template.auth-overlay.js");
require("/client/templates/template.auth-signup.js");
require("/client/templates/template.bookmarks.js");
require("/client/templates/template.card.js");
require("/client/templates/template.carousel.js");
require("/client/templates/template.home.js");
require("/client/templates/template.login.js");
require("/client/templates/template.nav.js");
require("/client/templates/template.navaddons.js");
require("/client/templates/template.not-found.js");
require("/client/templates/template.overlay.js");
require("/client/templates/template.product-item.js");
require("/client/templates/template.product.js");
require("/client/templates/template.products.js");
require("/client/templates/template.recipe-item.js");
require("/client/templates/template.recipe.js");
require("/client/templates/template.recipes.js");
require("/client/templates/template.search.js");
require("/client/templates/template.seller.js");
require("/client/templates/template.sellerShort.js");
require("/client/templates/template.share-overlay.js");
require("/client/templates/template.shoppingcart.js");
require("/client/templates/template.showEdit_Products.js");
require("/client/templates/template.showImage.js");
require("/client/templates/template.ticker.js");
require("/client/templates/template.whats-cooking.js");
require("/client/lib/JIC.js");
require("/client/lib/common.js");
require("/client/lib/compressjs.js");
require("/client/lib/init.js");
require("/client/lib/jquery.touchwipe.js");
require("/client/lib/jqueryValidate.js");
require("/lib/startup/apiSetup.js");
require("/lib/startup/fixtures.js");
require("/lib/activities.js");
require("/lib/bookmarks.js");
require("/lib/common.js");
require("/lib/media.js");
require("/lib/news.js");
require("/lib/product.js");
require("/lib/products.js");
require("/lib/recipes-data.js");
require("/lib/router.js");
require("/lib/seller.js");
require("/client/templates/Maintain_Product.js");
require("/client/templates/activity.js");
require("/client/templates/admin.js");
require("/client/templates/app-body.js");
require("/client/templates/auth-overlay.js");
require("/client/templates/auth-signup.js");
require("/client/templates/bookmarks.1.js");
require("/client/templates/bookmarks.js");
require("/client/templates/carousel.js");
require("/client/templates/home.js");
require("/client/templates/login.js");
require("/client/templates/nav.js");
require("/client/templates/navaddons.js");
require("/client/templates/overlay.js");
require("/client/templates/product-item.js");
require("/client/templates/product.js");
require("/client/templates/products.js");
require("/client/templates/recipe-item.js");
require("/client/templates/recipe.js");
require("/client/templates/search.js");
require("/client/templates/seller.js");
require("/client/templates/share-overlay.js");
require("/client/templates/shoppingcart.js");
require("/client/templates/showImage.js");
require("/client/templates/ticker.js");
require("/client/templates/whats-cooking.js");
require("/client/helpers.js");
require("/client/init.js");