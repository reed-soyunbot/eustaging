import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, COOKIE_MAX_AGE, getExpectedToken } from "@/lib/help-center-auth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password")?.toString() ?? "";

  if (password !== process.env.HELP_CENTER_PASSWORD) {
    return NextResponse.redirect(new URL("/help-center/login?error=1", request.url));
  }

  const token = await getExpectedToken();
  const response = NextResponse.redirect(new URL("/help-center", request.url));
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });
  return response;
}
