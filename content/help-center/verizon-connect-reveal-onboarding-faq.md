---
title: "Verizon Connect Reveal Onboarding FAQ"
description: "Step-by-step guide and common errors for onboarding Verizon Connect Reveal with TruckerCloud, including the Marketplace integration and credential requirements."
category: "Onboarding"
order: 10
---

<p>Verizon Connect Reveal requires a multi-step process: the carrier must first install the TruckerCloud integration through the Verizon Reveal Marketplace, which generates a separate set of API credentials emailed by Verizon. These API credentials — not the carrier's regular Verizon login — are what get entered into the TruckerCloud onboarding widget.</p>
<h2>How to onboard</h2>
<ol><li>Login to your Verizon Reveal account at https://reveal.fleetmatics.com/login.aspx</li><li>Navigate to the Reveal Marketplace and search for the <b>TruckerCloud</b> partner tile</li><li>Click "Integrate Now" and follow the instructions to sign the Data Consent</li><li>Verizon will email you a new username and password (API/integration credentials in the format <code>REST_TruckerCloud_XXXX@XXXXXXX.com</code>)</li><li>Go to your insurance provider's TruckerCloud onboarding page and click the Verizon tile</li><li>Click "Authorize", input the credentials from step 4, and click "Verify Credentials"</li></ol>
<h2>I got a "Credentials Failed" error. What is wrong?</h2>
<p>The most common mistake is using your regular Verizon login instead of the API integration credentials emailed by Verizon. Check your email (including spam) for a message from Verizon containing <code>REST_TruckerCloud_XXXX@XXXXXXX.com</code> credentials.</p>
<h2>I used the correct credentials but still get "Credentials Failed."</h2>
<p>This is almost always caused by missing vehicle or driver numbers. Every vehicle must have a Vehicle Name and Vehicle #, and every driver must have a Driver Name and Driver #, with no blank fields or special characters.</p>
<ol><li>In Verizon: click user button &rarr; <b>Admin &rarr; Vehicle List</b></li><li>Ensure ALL vehicles have both Vehicle Name and Vehicle # (no special characters)</li><li>Repeat for <b>Admin &rarr; Driver List</b></li><li>Retry onboarding</li></ol>
<h2>I never received the API credentials email.</h2>
<p>Check your spam folder. TruckerCloud is also copied on this email — contact <a href="mailto:support@truckercloud.com">support@truckercloud.com</a> with your DOT number and carrier name, and we can provide the credentials.</p>
<h2>Can TruckerCloud complete the onboarding for me?</h2>
<p>Yes. Share your Verizon username and password with TruckerCloud support and our team can complete the Marketplace integration and onboarding on your behalf.</p>