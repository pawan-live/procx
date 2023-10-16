import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const uploadImageToSpaces = async (selectedImage) => {
  try {
    const s3Client = new S3Client({
      endpoint: "https://nyc3.digitaloceanspaces.com",
      forcePathStyle: false,
      region: "nyc3",
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
        secretAccessKey: process.env.NEXT_PUBLIC_SPACES_SECRET,
      },
    });

    const params = {
      Bucket: "cookiemonster",
      Key: "procx-images/" + selectedImage.name,
      Body: selectedImage,
      ACL: "public-read",
    };

    const data = await s3Client.send(new PutObjectCommand(params));

    const uploadedURL = `https://cookiemonster.nyc3.digitaloceanspaces.com/${params.Key}`;
    return uploadedURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
