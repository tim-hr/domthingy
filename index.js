'use strict';

const jsdom = require('jsdom');

const getDOMTreeFromHTML = function(html, callback) {
  const wrapper = function(err, window) {
    // Obscures the Window and Document objects.
    callback(err, window.document.documentElement);
  };
  jsdom.env(html, null, wrapper);
};

module.exports = {
  getDOMTreeFromHTML: getDOMTreeFromHTML
};