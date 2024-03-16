import { generateResponse } from "@/util/method";
import { STATUS_CODES } from "@/util/helper";
import {
  createHighlight,
  deleteHighlight,
  fetchHighlight,
} from "@/model";
import { connectDB } from "../../config/database.config";
import Cloudinary from "@/util/cloudinary";

class highlight {

  constructor() {
    connectDB();
  }
  // validate the request body
  private validate =  (body: FormData) => {

    if(body.get('title') === null || body.get('speaker') === null || body.get('picture') === null){
      throw new Error('All fields are required');
    }
  }

  // create highlight
  public createHighlights = async (request: Request) => {
    try {
      // get the form data
      const body = await request.formData();
    
      this.validate(body);
      const picture = body.get("picture") as File;
      
      // uploading image on cloudinary
      const image = await Cloudinary(picture);
      
      // creating highlight
      const highlight = await createHighlight({  picture: image.secure_url,title:body.get('title'),speaker:body.get('speaker') });

     return generateResponse(
        highlight,
        "Highlight created successfully",
        STATUS_CODES.CREATED
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  };
  // fetch all the highlights
  public getHighlights = async (request: Request) => {
    try {
      const highlights = await fetchHighlight();
      return generateResponse(
        highlights,
        "Highlights fetched successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
  
  // delete highlights
  public deleteHighlights = async (request: Request) => {
    try {
      const { id } = await request.json();
 
      await deleteHighlight(id);

     return generateResponse(
        null,
        "Highlight deleted successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
    return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }

}

const Highlight = new highlight();

export {Highlight};
