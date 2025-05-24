const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "..", "assets", "posts");

function getPosts() {
  // Read folders inside posts directory
  const folders = fs.readdirSync(POSTS_DIR).filter((file) =>
    fs.statSync(path.join(POSTS_DIR, file)).isDirectory()
  );

  // Sort folders by date (descending: newest first)
  const sortedFolders = folders.sort((a, b) => {
    const dateA = a.slice(0, 10); // 'YYYY-MM-DD'
    const dateB = b.slice(0, 10);
    return dateB.localeCompare(dateA); // newer first
  });

  return sortedFolders.map((folder) => {
    const folderPath = path.join(POSTS_DIR, folder);
    const files = fs.readdirSync(folderPath);

    const id = folder; // e.g., 2024-06-02-mozart
    const nameMatch = folder.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
    const nameSlug = nameMatch ? nameMatch[1] : folder;
    const title = nameSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    const drawFile = files.find(f => f.startsWith("draw"));
    const originalFile = files.find(f => f.startsWith("original"));
    const sliceFiles = files.filter(f => f.startsWith("slice"));    

    const lightboxImages = [
      ...(drawFile ? [drawFile] : []),
      ...(originalFile ? [originalFile] : []),
      ...sliceFiles
    ];

    return {
      id,
      title,
      originalImage: drawFile || originalFile || files[0],
      altText: `Image for ${nameSlug}`,
      lightboxImages
    };
  });
}

module.exports = getPosts();

