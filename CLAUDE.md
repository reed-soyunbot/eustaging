# TruckerCloud Website — Claude Context

## TruckerCloud API
- Instructions: `~/Documents/TruckerCloud/truckercloud_api_claude_instructions.md`
- Schema reference: `~/Documents/TruckerCloud/truckercloud_api_reference.json`
- Customer credentials: `~/Documents/TruckerCloud/billing_customers.json` (per-customer `api_username` / `api_password`)
- Note: `~/Documents/` requires macOS Files & Folders permission for terminal access

## Repo
- GitHub: `Rule-1-Repository/truckercloud-website-marketing`
- Working branch: `develop`
- Deploy: push to `develop` → GitHub Actions (`node-deployment.yaml`) → Docker build → AWS EKS (`truckercloud-eks-uat`, service `tc-website`, region `us-east-2`)

## Stack
- Next.js (App Router, TypeScript), `output: "standalone"`, `distDir: "build"`
- Program pages: `src/app/program/[slug]/page.tsx` — driven by JSON configs in `content/programs-json/`
- Provider logos: `src/lib/provider-logos.ts` maps provider names → `/images/providers/` paths
- All provider logo images live in `public/images/providers/` (149 files)

## Important: Middleware
- `src/middleware.ts` — 301-redirects uppercase URLs to lowercase (for Webflow migration compat)
- Matcher MUST exclude `/images/` — production is Linux (case-sensitive filesystem). Lowercasing image paths breaks logos.
- Current matcher: `'/((?!_next|api|favicon\\.ico|images/).*)'`

## Program Pages — CF / Crum & Forster
Three related pages all use the same CF branding (`/images/programs/cf.png`):
- `/program/cf` — `content/programs-json/cf.json`
- `/program/cftransportation` — `content/programs-json/cftransportation.json`
- `/program/crum-forster` — `content/programs-json/crum-forster.json`

### /cf specifics
- `extraSupportEmail: "telematics@cfins.com"`
- `extraSupportPhone: "469-404-5511"`
- Two support rows render in the hero: one with a gear icon (truckercloud support), one with a shield icon (telematics inquiries + phone)

### /cftransportation specifics
- Has a `subsidy` section: `$10/vehicle/month` for ELD data, `$20/vehicle/month` for Camera data
- Disclaimer text included in the subsidy JSON object

## page.tsx — Support Text
Support text is **hardcoded** in `page.tsx`, not pulled from `program.supportText`:
- Row 1: "For support onboarding your telematics account, please contact support@truckercloud.com or use the chat feature in the bottom right corner."
- Row 2 (only if `extraSupportEmail`): "For questions about the mutual benefits of sharing telematics data, please reach out to [email] or call [phone]"

## Icon Colors
Icons in the subsidy section and secondary support row use `#44a3db` (the site's brand light blue), not gray.

## Dev Server
- Launch config: `.claude/worktrees/recursing-wilson/.claude/launch.json` (autoPort enabled, base port 3000)
- **Important:** The session CWD is the worktree at `.claude/worktrees/recursing-wilson/`. The main repo is at `/Users/reedpeets/truckercloud-website-marketing/`. When editing files for production, edit the main repo and commit from there. After merging develop into the worktree, the dev server reflects the latest code.

## Known Issues Resolved
1. ✅ Case-insensitive URL redirects (middleware)
2. ✅ /cf support text wording and split into two rows with icons
3. ✅ /cftransportation subsidy section
4. ✅ Icon colors changed to light blue (#44a3db)
5. ✅ Middleware breaking all logo images with uppercase filenames (excluded /images/ from matcher)

---

# TruckerCloud API — Claude Code Reference

When working with the TruckerCloud API, follow these patterns and conventions.

## Quick Start

```python
import requests

BASE_URL = "https://api.truckercloud.com"
session = requests.Session()
session.headers.update({"Content-Type": "application/json"})

# Authenticate (token lasts ~30 min for GETs; POST calls burn the token)
resp = session.post(f"{BASE_URL}/api/v4/authenticate", json={
    "userName": "<username>",
    "password": "<password>"
})
session.headers["Authorization"] = resp.json()["authToken"]
```

## Credentials

Customer API credentials are stored in `~/Documents/TruckerCloud/billing_customers.json`. Each customer has their own `api_username` and `api_password` and can only see their own data. Load credentials from that file rather than hardcoding them.

Structured API schema reference: `~/Documents/TruckerCloud/truckercloud_api_reference.json`

## API Conventions

- **Base URL**: `https://api.truckercloud.com`
- **Auth header**: Set `Authorization` to the raw `authToken` value (no "Bearer" prefix)
- **Pagination**: All list endpoints return `{ "Pagination": { currentPage, size, totalPages, totalElements }, "content": [...] }`. Note the capital-P `Pagination`. Loop until `currentPage >= totalPages`.
- **Rate limiting**: Add 0.15s delay between calls. Back off exponentially on HTTP 429.
- **Token refresh**: Re-authenticate on HTTP 401 or proactively every 25 minutes. POST calls burn the token immediately — re-auth after any POST.

## Key Endpoints

### GET /api/v4/carriers
List all carriers (trucking fleets) for this customer.

| Param | Value |
|-------|-------|
| `status` | `onboarded` (most common filter) |
| `size` | Page size (max 10000) |
| `page` | 1-based page number |

**Key response fields:**
- `content[].carrierInfo.carrierName` — fleet name
- `content[].carrierInfo.onboardedDate` — when they onboarded
- `content[].carrierInfo.carrierInfoCodes[]` — look for `codeType: "DOT"` to get DOT number
- `content[].eldVendorInfo[]` — array of `{ eldVendor, status }`. A carrier can have multiple ELD vendors.

### GET /api/v4/vehicles
List vehicles for a specific carrier + ELD combo.

| Param | Value |
|-------|-------|
| `codeType` | `dot` |
| `carrierCode` | DOT number |
| `eldVendor` | ELD vendor name (case-sensitive: "Samsara" not "samsara") |

**Key response fields:**
- `content[].assetEldId` — **the vehicle identifier used in all enriched-data endpoints**
- `content[].vin` — 17-char VIN (can be null)
- `content[].lastKnownLocation` — `{ latitude, longitude }` (only present if TC has a recent GPS fix)
- `content[].lastTrackingActivity` — last data timestamp
- `content[].lastMovementPing` — last detected movement

### GET /api/v4/enriched-data/gps-miles
Total GPS miles for a carrier's fleet in a date range. Returns fleet total + per-asset breakdown.

| Param | Value |
|-------|-------|
| `carrierCodeType` | `DOT` |
| `carrierCodeValue` | DOT number |
| `eldVendor` | ELD vendor name |
| `startDateTime` | `yyyy-MM-dd` or `yyyy-MM-ddTHH:mm:ssZ` |
| `endDateTime` | `yyyy-MM-dd` or `yyyy-MM-ddTHH:mm:ssZ` |

**Response:** `{ gpsMiles: float, gpsMilesByAsset: [{ assetEldId, gpsMiles }] }`

Not paginated — returns a single object. Used for billing: vehicles with `gpsMiles >= 1` are billable.

### GET /api/v4/enriched-data/miles-by-state
Miles broken down by state/province and **country** (USA/MEX). Can be fleet-level or per-vehicle.

| Param | Value |
|-------|-------|
| `carrierCodeType` | `DOT` |
| `carrierCodeValue` | DOT number |
| `eldVendor` | ELD vendor name |
| `dateFrom` | `yyyy-MM-ddTHH:mm:ss.SSSZ` (note: different format than gps-miles!) |
| `dateTo` | `yyyy-MM-ddTHH:mm:ss.SSSZ` |
| `vehicleIdType` | `assetEldId` (optional — omit for fleet-level) |
| `vehicleIdValue` | the assetEldId (optional) |

**Response:**
```json
{
  "statesMiles": [
    { "stateName": "Texas", "country": "USA", "miles": 5177.13 },
    { "stateName": "Baja California", "country": "MEX", "miles": 1628.37 }
  ]
}
```

**Important:** `dateFrom`/`dateTo` require milliseconds + Z format. Other formats return 400.

### GET /api/v5/risk-scores
Get TruckerCloud risk scores for a carrier. Composite score based on speed behavior, geographical risk, and harsh events.

| Param | Value |
|-------|-------|
| `carrierCode` | DOT number |
| `codeType` | `DOT` |
| `eldVendor` | ELD vendor name |
| `showAssetDetails` | `True` to include per-vehicle scores |

**Notes:**
- v5 endpoint — same auth token works.
- Response is a plain array, not paginated.
- Score is 0-100, higher = safer. Sub-60 is concerning.
- Multiple `riskScores` entries = rolling 30-day windows.

### GET /api/v4/drivers
List drivers for a specific carrier + ELD combo.

| Param | Value |
|-------|-------|
| `codeType` | `DOT` |
| `carrierCode` | DOT number |
| `eldVendor` | ELD vendor name |
| `size` | Page size (max 2000) |

### GET /api/v4/enriched-data/zip-code-miles
Miles driven broken down by zip code. Fleet-level or per-vehicle.

| Param | Value |
|-------|-------|
| `carrierCodeType` | `DOT` |
| `carrierCodeValue` | DOT number |
| `eldVendor` | ELD vendor name |
| `startDateTime` | `yyyy-MM-ddTHH:mm:ssZ` |
| `endDateTime` | `yyyy-MM-ddTHH:mm:ssZ` |
| `vehicleIdType` | `assetEldId` (optional) |
| `vehicleIdValue` | the assetEldId (optional) |
| `size` | Page size (max 1000) |

### POST /api/v5/safety-events
Safety events (harsh braking, speeding, collisions, etc.) for a carrier.

| Param | Value |
|-------|-------|
| `startTime` | `yyyy-MM-ddTHH:mm:ss.SSSZ` |
| `endTime` | `yyyy-MM-ddTHH:mm:ss.SSSZ` |
| `codeType` | `DOT` |
| `carrierCode` | DOT number |
| `eldVendor` | ELD vendor name |
| `includeCameras` | `true` to include dashcam footage URLs |

**Important:** POST — re-authenticate immediately after this call.

### GET /api/v5/trips (BETA)
Trip data for a specific vehicle. Uses VIN (not assetEldId).

| Param | Value |
|-------|-------|
| `carrierCodeType` | `DOT` |
| `carrierCodeValue` | DOT number |
| `vehicleIdType` | `vin` |
| `vehicleIdValue` | the VIN number |
| `eldVendor` | ELD vendor name |
| `startDateTime` | `yyyy-MM-ddTHH:mm:ssZ` |
| `endDateTime` | `yyyy-MM-ddTHH:mm:ssZ` |

## Date Format Quick Reference

| Endpoint | Format |
|----------|--------|
| gps-miles | `yyyy-MM-dd` or `yyyy-MM-ddTHH:mm:ssZ` |
| zip-code-miles | `yyyy-MM-ddTHH:mm:ssZ` |
| miles-by-state | `yyyy-MM-ddTHH:mm:ss.SSSZ` (with milliseconds) |
| safety-events | `yyyy-MM-ddTHH:mm:ss.SSSZ` (with milliseconds) |
| risk-scores | `yyyy-MM-ddTHH:mm:ss` (no Z, no milliseconds) |
| trips | `yyyy-MM-ddTHH:mm:ssZ` |

## Common ELD Vendor Names (case-sensitive)
Samsara, Motive, Geotab, Monarch Tracking, OneStepGPS, GPS Trackit, Azuga, Verizon Connect, ISAAC Instruments, Trimble, Omnitracs

## Gotchas
- **Token lifetime**: ~30 min for GET-only workflows (25-min re-auth interval is safe). POST calls burn the token — re-authenticate after any POST.
- Date format differs between endpoints — see Date Format Quick Reference above.
- `eldVendor` is case-sensitive — "Motive" works, "motive" returns 404.
- `lastKnownLocation` on vehicles is optional — many vehicles don't have it.
- Some carriers have multiple ELD vendors — try each until you get data.
- The `Pagination` key has a capital P.
- `assetEldId` is the universal vehicle identifier — except `trips` which uses VIN.
- Billing reports use "Asset ID" which maps to `assetEldId`.
- For large runs (10K+ API calls), expect ~1 hour runtime. Use `nohup python3 -u script.py &`.
