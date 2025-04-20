module.exports = function(eleventyConfig) {

  // --- Passthrough Copy ---
  // Copy static assets directly to the output directory (_site)
  // The path is relative to the input directory ('src')
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  // eleventyConfig.addPassthroughCopy("src/js"); // Uncomment if you have JS files

  // --- Watch Targets ---
  // Watch CSS files for changes, useful for hot-reloading styles during development
  eleventyConfig.addWatchTarget("src/css/");

  // --- Eleventy Settings ---
  return {
    // Define directory structure
    dir: {
      input: "src",          // Source files directory
      includes: "_includes", // Partials directory (relative to input)
      layouts: "_layouts",   // Layouts directory (relative to input)
      output: "_site"        // Output directory (where the built site goes)
    },
    // Use Nunjucks for templating in HTML files as well
    // This allows using {{ variables }} and {% includes %} directly in .html files
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk" // Optional: If you want to use Markdown files
  };
};
