import { connectDB } from "../../../../config/database.config"


export async function GET() {
await connectDB();
 
    
   
    return Response.json({ message:"Hello world" })

}