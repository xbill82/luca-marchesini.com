const cloudinary = require("cloudinary");
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: "luca-le-conteur",
  api_key: process.env.cloudinaryKey,
  api_secret: process.env.cloudinarySecret
});

/**
 *
 * @param {PathLike} path
 * @param {String} publicId
 * @param {String[]} tags
 */
const sendToCloudinary = (path, publicId, tags) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      path,
      {
        public_id: publicId,
        tags
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve();
      }
    );
  });
};

const sendHeaders = async () => {
  const mapsPath = path.join("..", "static", "headers");
  const mapImgs = fs.readdirSync(mapsPath);

  for (imageFile of mapImgs) {
    const imageName = imageFile.replace(/(.png)|(.jpg)$/, "");
    const imagePath = path.join(mapsPath, imageFile);

    console.log(`Sending ${imageName}`);

    await sendToCloudinary(imagePath, imageName, ["header"]);
  }
};

module.exports = sendHeaders();
