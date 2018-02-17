"use strict";

var init = function init() {

  var date = new Date();
  date.setMonth(date.getMonth() + 6);
  document.cookie = 'landing-page-visited=true; expires= ' + date.toGMTString();

  var audioPresentation = new AudioPresentation();
  audioPresentation.start();
};

document.onreadystatechange = function () {
  if (document.readyState === "interactive") init();
};
