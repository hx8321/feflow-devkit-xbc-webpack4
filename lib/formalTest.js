"use strict";

var _build = require("./build.js");

module.exports = function (ctx) {
  var runParams = {
    env: "formalTest"
  };
  (0, _build.run)(ctx, runParams);
};