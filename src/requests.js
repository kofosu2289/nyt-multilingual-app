const APIURL = "https://api.nytimes.com/svc";
const axios = require("axios");
const querystring = require("querystring");

export const search = data => {
  Object.keys(data).forEach(key => {
    data["api-key"] = process.env.REACT_APP_APIKEY;
    if (!data[key]) {
      delete data[key];
    }
  });
  return axios.get(
    `${APIURL}/search/v2/articlesearch.json?${querystring.encode(data)}`
  );
};

export const getArticles = section =>
  axios.get(`${APIURL}/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_APIKEY}`);