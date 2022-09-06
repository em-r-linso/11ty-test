const eleventySass = require("eleventy-sass");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventySass);
	eleventyConfig.addPassthroughCopy("./assets")

	return {
		passthroughFileCopy: true,
	}
}