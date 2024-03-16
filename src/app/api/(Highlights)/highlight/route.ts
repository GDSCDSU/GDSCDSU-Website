import { Highlight } from "@/controller";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await Highlight.getHighlights(request);
}

export async function POST(request: NextRequest) {
    return await Highlight.createHighlights(request);
}

export async function DELETE(request: NextRequest) {
    return await Highlight.deleteHighlights(request);
}

