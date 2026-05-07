---
title: "Error: Unauthorized — OAuth admin permissions required (Motive, Samsara)"
description: "Fix for \"Unauthorized\" errors or unexpected redirects on Motive or Samsara — log out of driver/partial-admin and authenticate with full admin credentials."
category: "Troubleshooting"
order: 50
---

<p>If you see <b>"Unauthorized"</b> or are taken back to your Motive or Samsara account without an explicit error message, follow the steps below.</p>
<h2>Why this happens</h2>
<p>The OAuth handshake requires <b>full admin</b> permissions on your TSP account. The error is triggered when you authenticate with driver credentials, partial-admin credentials, or a driver session left open in another tab.</p>
<h2>How to fix it</h2>
<ol><li>Log out completely from Motive or Samsara in every browser tab.</li><li>Confirm which user has <b>full admin</b> permissions in your provider account.</li><li>Restart the TruckerCloud onboarding step and sign in with the full-admin credentials.</li></ol>
<h2>Still stuck?</h2>
<p>Contact <a href="mailto:support@truckercloud.com">support@truckercloud.com</a> — we can review the failed handshake on our side.</p>