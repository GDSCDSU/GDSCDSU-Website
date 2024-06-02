import { auth } from "../../../../controller";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return await auth.login(request);
}

