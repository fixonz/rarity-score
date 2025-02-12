const collection = require("./collection.json");
const fs = require("fs");
const axios = require('axios'); // Install with: npm install axios

/**
 * Script to update the collection.json with images fetched from metadata links.
 */

async function updateCollectionWithImages() {
  for (let i = 0; i < collection.length; i++) {
    try {
      // 1. Check if metadata link is available
      if (collection[i].metadata && collection[i].metadata.image) {
        // Metadata image URL exists, so attempt to fetch the image.
        const imageUrl = collection[i].metadata.image;

        //  Use Axios to fetch the image data.
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary'); // Create a Buffer
        const imageFilename = `${i + 1}.png`; // Desired image filename
        const imagePath = `./images/${imageFilename}`;   // Save images to the ./images directory

        // 3. Save the Image Locally
        fs.writeFileSync(imagePath, imageBuffer);  // Synchronously write the buffer to a file

        // 4. Update the Collection JSON
        collection[i]["image"] = `/images/${imageFilename}`; // Update the collection entry
        console.log(`Successfully saved image for token ${i + 1} from ${imageUrl} to ${imagePath}`);
      } else {
        console.warn(`No metadata or image URL found for token ${i + 1}`);
        collection[i]["image"] = null; // set to null to indicate missing info

      }
    } catch (error) {
      console.error(`Error processing token ${i + 1}:`, error);
      collection[i]["image"] = null; // set to null to indicate an error

    }
  }

  // 5. Write the updated collection back to the file
  fs.writeFile("./collection.json", JSON.stringify(collection, null, 2), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("collection.json updated");
  });
}

// Run the function
updateCollectionWithImages();
