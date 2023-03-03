const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  try {
    let json = await EleventyFetch("https://quicken.com/get_sku_info", {
      duration: "1d", // 1 day
      type: "json" // also supports "text" or "buffer"
    });
    return json;
  } catch(e) {
    console.log( "Failed getting product data, fallback to some other/old data here" );
    return [];
  }
};