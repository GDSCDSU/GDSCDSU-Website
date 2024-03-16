import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: 'dgjvt9oa9', 
  api_key: '674622387414444', 
  api_secret: 'bLwQSkWWcS25VZTZYqNeEvJ9v0I'
});

const Cloudinary = async (file: File) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result:any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
      }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }).end(buffer);
    });

    console.log('Image uploaded successfully:', result.url );
    return result;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error;
  }
};

export default Cloudinary;
