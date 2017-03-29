"use strict";

var axios = require("axios");
require("dotenv").config();

var MERCURY_API = "https://mercury.postlight.com/parser?url=";

/**
 * Create instance of ParserAPI
 * 
 * @param {string} api_key Mercury Web Parser 
 */
function ParsedAPI(api_key) {
  if (!(this instanceof ParsedAPI)) {
    return new ParsedAPI(api_key);
  }
  this.api_key = api_key;
}

/**
 * Dispatch request to Mercury Parser API to parse the given web url
 * 
 * @param {string} url The url to parse (*required)
 */
ParsedAPI.prototype.parse = function(url) {
  if (url == null) {
    throw new Error("parse method requires a url: " + url);
  }

  var _url = [MERCURY_API, url].join("");

  // config to pass to headers to axios
  var config = {
    headers: {
      "content-type": "application/json",
      "x-api-key": this.api_key
    }
  };

  return axios
    .get(_url, config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

module.exports = ParsedAPI;
