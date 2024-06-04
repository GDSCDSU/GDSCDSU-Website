import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/password")) {
    if (request.method === "POST") {
      const token = cookies().get("otpToken")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/highlight")) {
    if (request.method === "POST") {
      const token = cookies().get("session")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/partner")) {
    if (request.method === "POST") {
      const token = cookies().get("session")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
}
