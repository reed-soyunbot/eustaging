import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/help-center-auth";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/help-center/login", request.url));
  response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return response;
}
