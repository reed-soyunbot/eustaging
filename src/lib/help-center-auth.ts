export const COOKIE_NAME = "tc_hc_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/** Web Crypto HMAC — works in both Edge and Node runtimes */
async function computeToken(secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode("authenticated"));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function getExpectedToken(): Promise<string> {
  const secret = process.env.HELP_CENTER_SECRET ?? "fallback-secret";
  return computeToken(secret);
}

export async function isValidToken(token: string): Promise<boolean> {
  const expected = await getExpectedToken();
  return token === expected;
}
