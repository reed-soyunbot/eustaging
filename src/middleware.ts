import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, isValidToken } from "@/lib/help-center-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Help center auth ──────────────────────────────────────────────────────
  if (pathname.startsWith("/help-center") && !pathname.startsWith("/help-center/login")) {
    const token = request.cookies.get(COOKIE_NAME)?.value ?? "";
    const valid = await isValidToken(token);
    if (!valid) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/help-center/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── Lowercase redirect (Webflow migration compat) ─────────────────────────
  const lowercased = pathname.toLowerCase();
  if (pathname !== lowercased) {
    const url = request.nextUrl.clone();
    url.pathname = lowercased;
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon\\.ico|images/).*)",
};
