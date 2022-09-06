const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {

	eleventyConfig.addPlugin(eleventySass);
	eleventyConfig.addPassthroughCopy("./assets")

	return {
		passthroughFileCopy: true,
	}
}