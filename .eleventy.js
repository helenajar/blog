module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css",// css is not yet a recognized template extension in Eleventy
    "jpg",
    "gif",
    "png",
    "eot",
    "woff",
    "woff2",
    "svg",
    "ico"

  ]);
  eleventyConfig.addPassthroughCopy("js");
};