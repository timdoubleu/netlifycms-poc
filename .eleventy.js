module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("prettyPrint", function (obj) { 
    console.log(JSON.stringify(obj, null, 2));
    return JSON.stringify(obj, null, 2);
  });

  eleventyConfig.addPassthroughCopy('src/admin/config.yml');
  eleventyConfig.addPassthroughCopy('src/static/imgs');

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
