import { team } from "@/controller";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    return await team.createLeads(request);
}
