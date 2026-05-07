---
title: "Camera Detection by Telematics Service Provider (TSP)"
description: "How TruckerCloud determines whether a vehicle has a camera, broken down by the three detection methods and the TSPs that fall under each."
category: "Getting Started"
order: 20
---

<p>Not every telematics provider exposes camera hardware the same way. TruckerCloud uses one of three detection methods depending on how the TSP reports camera data.</p>
<h2>1. Camera by default</h2>
<p>These TSPs are camera-only providers. Every vehicle reporting through them is treated as camera-equipped.</p>
<ul><li>Lytx</li><li>Netradyne</li><li>Surfsight</li><li>SmartDrive</li><li>Lightmetrics</li><li>Eyeride</li><li>TXTDashCam</li><li>PowerFleet</li><li>Prometheus</li><li>SmartDriveProtect</li></ul>
<h2>2. Camera flagged on the assets endpoint</h2>
<p>The vehicle list returned by these TSPs includes hardware information. We read camera presence directly from the vehicle record.</p>
<ul><li>Samsara</li><li>Azuga</li><li>Fleethunt</li><li>Linxup</li><li>TruckX</li></ul>
<h2>3. Inferred from safety events (30-day lookback)</h2>
<p>These TSPs don't expose camera hardware directly on the vehicle record. We review the last 30 days of safety events for each vehicle. If any camera-generated events are present, the vehicle is flagged as camera-equipped.</p>
<ul><li>Verizon</li><li>Motive</li></ul>
<p>Because this method is event-driven, a vehicle with a camera but no recent safety events during the lookback window may not be flagged until events start coming through.</p>