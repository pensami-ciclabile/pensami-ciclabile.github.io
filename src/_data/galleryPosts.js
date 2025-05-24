// src/_data/galleryPosts.js
// This file defines the content for your gallery page.
// Each object in the array represents a "post" or a gallery item.

module.exports = [
  {
    id: "2024-06-02-mozart", // 'id' should match the folder name under src/assets/posts/
    title: "Gallery Post", // Title to display, perhaps in lightbox
    originalImage: "draw-mozart.png", // 'originalImage' is the filename of the image shown in the grid
    altText: "Drawing", // 'altText' is important for accessibility and SEO
    lightboxImages: ["draw-mozart.png", "original-mozart.png"] // 'lightboxImages' is an array of *filenames* for this post, including the original, that will be shown in the lightbox.
  },
  {
    id: "2024-06-20-papiniano",
    title: "Another Interesting Spot",
    originalImage: "draw-papiniano.png",
    altText: "Alt text for another spot's image.",
    lightboxImages: ["draw-papiniano.png", "original-papiniano.png"]
  },
];