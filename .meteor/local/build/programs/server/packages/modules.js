(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package['modules-runtime'].meteorInstall;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"server.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/modules/server.js                                                         //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
require("./install-packages.js");
require("./process.js");
require("./reify.js");

////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/modules/install-packages.js                                               //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
function install(name, mainModule) {
  var meteorDir = {};

  // Given a package name <name>, install a stub module in the
  // /node_modules/meteor directory called <name>.js, so that
  // require.resolve("meteor/<name>") will always return
  // /node_modules/meteor/<name>.js instead of something like
  // /node_modules/meteor/<name>/index.js, in the rare but possible event
  // that the package contains a file called index.js (#6590).

  if (typeof mainModule === "string") {
    // Set up an alias from /node_modules/meteor/<package>.js to the main
    // module, e.g. meteor/<package>/index.js.
    meteorDir[name + ".js"] = mainModule;
  } else {
    // back compat with old Meteor packages
    meteorDir[name + ".js"] = function (r, e, module) {
      module.exports = Package[name];
    };
  }

  meteorInstall({
    node_modules: {
      meteor: meteorDir
    }
  });
}

// This file will be modified during computeJsOutputFilesMap to include
// install(<name>) calls for every Meteor package.

install("meteor");
install("ecmascript-runtime");
install("modules-runtime");
install("modules", "meteor/modules/server.js");
install("modern-browsers", "meteor/modern-browsers/modern.js");
install("es5-shim");
install("promise", "meteor/promise/server.js");
install("ecmascript-runtime-client", "meteor/ecmascript-runtime-client/versions.js");
install("ecmascript-runtime-server", "meteor/ecmascript-runtime-server/runtime.js");
install("babel-compiler");
install("ecmascript");
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");
install("url", "meteor/url/url_server.js");
install("http", "meteor/http/httpcall_server.js");
install("dynamic-import", "meteor/dynamic-import/server.js");
install("tracker");
install("reactive-var");
install("shell-server", "meteor/shell-server/main.js");
install("less");
install("email");
install("jquery");
install("coffeescript");
install("jquery-waypoints");
install("fastclick");
install("underscore");
install("random");
install("rate-limit", "meteor/rate-limit/rate-limit.js");
install("ddp-rate-limiter");
install("base64", "meteor/base64/base64.js");
install("ejson", "meteor/ejson/ejson.js");
install("check", "meteor/check/match.js");
install("callback-hook", "meteor/callback-hook/hook.js");
install("retry", "meteor/retry/retry.js");
install("id-map", "meteor/id-map/id-map.js");
install("ddp-common");
install("reload");
install("socket-stream-client", "meteor/socket-stream-client/node.js");
install("diff-sequence", "meteor/diff-sequence/diff.js");
install("mongo-id", "meteor/mongo-id/id.js");
install("ddp-client", "meteor/ddp-client/server/server.js");
install("logging", "meteor/logging/logging.js");
install("routepolicy", "meteor/routepolicy/main.js");
install("boilerplate-generator", "meteor/boilerplate-generator/generator.js");
install("webapp-hashing");
install("webapp", "meteor/webapp/webapp_server.js");
install("geojson-utils", "meteor/geojson-utils/main.js");
install("ordered-dict", "meteor/ordered-dict/ordered_dict.js");
install("minimongo", "meteor/minimongo/minimongo_server.js");
install("ddp-server");
install("ddp");
install("npm-mongo");
install("allow-deny");
install("mongo-dev-server", "meteor/mongo-dev-server/server.js");
install("binary-heap");
install("mongo");
install("accounts-base", "meteor/accounts-base/server_main.js");
install("service-configuration");
install("localstorage");
install("oauth");
install("accounts-oauth");
install("oauth1");
install("twitter-oauth");
install("accounts-ui");
install("accounts-twitter");
install("launch-screen");
install("tmeasday:publish-counts");
install("reactive-dict", "meteor/reactive-dict/migration.js");
install("deps");
install("observe-sequence");
install("htmljs");
install("blaze");
install("spacebars");
install("templating-compiler");
install("templating-runtime");
install("templating");
install("iron:core");
install("ui");
install("iron:dynamic-template");
install("iron:layout");
install("iron:router");
install("percolate:velocityjs");
install("percolate:wireframing");
install("session");
install("mdg:camera");
install("mdg:geolocation");
install("meteor-base");
install("mobile-experience");
install("blaze-html-templates");
install("standard-minifier-css");
install("standard-minifier-js");
install("npm-bcrypt", "meteor/npm-bcrypt/wrapper.js");
install("sha");
install("srp");
install("accounts-password");
install("twbs:bootstrap");
install("xyz:loading");
install("cfs:standard-packages");
install("cfs:base-package");
install("livedata");
install("mongo-livedata");
install("raix:eventemitter");
install("cfs:storage-adapter");
install("cfs:filesystem");
install("hot-code-push");
install("cfs:data-man");
install("cfs:file");
install("cfs:tempstore");
install("cfs:http-methods");
install("cfs:http-publish");
install("cfs:access-point");
install("cfs:reactive-property");
install("cfs:reactive-list");
install("cfs:power-queue");
install("cfs:upload-http");
install("cfs:collection");
install("cfs:collection-filters");
install("cfs:worker");
install("autoupdate");

////////////////////////////////////////////////////////////////////////////////////////

},"process.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/modules/process.js                                                        //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
if (! global.process) {
  try {
    // The application can run `npm install process` to provide its own
    // process stub; otherwise this module will provide a partial stub.
    global.process = require("process");
  } catch (missing) {
    global.process = {};
  }
}

var proc = global.process;

if (Meteor.isServer) {
  // Make require("process") work on the server in all versions of Node.
  meteorInstall({
    node_modules: {
      "process.js": function (r, e, module) {
        module.exports = proc;
      }
    }
  });
} else {
  proc.platform = "browser";
  proc.nextTick = proc.nextTick || Meteor._setImmediate;
}

if (typeof proc.env !== "object") {
  proc.env = {};
}

var hasOwn = Object.prototype.hasOwnProperty;
for (var key in meteorEnv) {
  if (hasOwn.call(meteorEnv, key)) {
    proc.env[key] = meteorEnv[key];
  }
}

////////////////////////////////////////////////////////////////////////////////////////

},"reify.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/modules/reify.js                                                          //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
require("reify/lib/runtime").enable(
  module.constructor.prototype
);

////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"reify":{"lib":{"runtime":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/index.js                //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},"moment":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/moment/package.json                                                   //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
exports.name = "moment";
exports.version = "2.20.1";
exports.main = "./moment.js";

////////////////////////////////////////////////////////////////////////////////////////

},"moment.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/moment/moment.js                                                      //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

}},"@babel":{"runtime":{"package.json":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/@babel/runtime/package.json                                           //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"builtin":{"interopRequireDefault.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js               //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

},"objectSpread.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/@babel/runtime/helpers/builtin/objectSpread.js                        //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

}}}}},"bcrypt":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/bcrypt/package.json                                                   //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
exports.name = "bcrypt";
exports.version = "1.0.3";
exports.main = "./bcrypt";

////////////////////////////////////////////////////////////////////////////////////////

},"bcrypt.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// node_modules/bcrypt/bcrypt.js                                                      //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.useNode();
////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/modules/server.js");

/* Exports */
Package._define("modules", exports, {
  meteorInstall: meteorInstall
});

})();
