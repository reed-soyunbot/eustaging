import { NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/help-center-auth";

export async function POST() {
  const response = new NextResponse(null, {
    status: 303,
    headers: { Location: "/help-center/login" },
  });
  response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
  return response;
}
