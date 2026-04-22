---
title: First Notice of Loss (FNOL)
description: How TruckerCloud detects crashes and delivers FNOL alerts to your claims team.
category: Getting Started
order: 3
---

<h2>How FNOL works</h2>
<p>When a crash event is detected by the connected ELD or camera, TruckerCloud generates an automatic FNOL alert — typically within minutes of the incident. On average, traditional FNOL reporting takes 13 days. TruckerCloud brings that down to minutes.</p>

<h2>What's included in an alert</h2>
<ul>
  <li>Date, time, and GPS coordinates of the event</li>
  <li>Vehicle identifier (VIN or Asset ID)</li>
  <li>Event type and severity estimate</li>
  <li>Dashcam footage URL (if a camera is connected and footage is available)</li>
  <li>Driver information (if provided by the ELD)</li>
</ul>

<h2>Accessing FNOL data</h2>
<p>FNOL events are available via <code>POST /api/v5/safety-events</code> with <code>"includeCameras": true</code> to pull footage links. You can also set up webhook delivery so alerts are pushed to your claims system in real time — contact your account manager to configure.</p>

<h2>Camera footage</h2>
<p>Footage URLs from dashcam providers are time-limited (typically 24–72 hours depending on the provider). Pull and store footage promptly after an alert. TruckerCloud does not archive footage — that remains with the camera provider.</p>
