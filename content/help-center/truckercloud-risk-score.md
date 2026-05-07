---
title: "TruckerCloud Risk Score"
description: "Comprehensive explanation of the TruckerCloud Risk Score — how it's calculated, what each index measures, and how scores update."
category: "Getting Started"
order: 140
---

<p>The <b>TruckerCloud Risk Score</b> is a 0–100 safety scoring system where <b>100 represents the strongest safety performance</b>. Scores are recalculated every Sunday/Monday based on a rolling 30-day window.</p>
<h2>Summary Score</h2>
<p>The Summary Score averages three core indices. If an index has a null value (provider doesn't supply the required data type), it is excluded from the calculation.</p>
<ol><li><b>Safety Events Index</b></li><li><b>Speeding Index</b></li><li><b>Geographic Risk Index</b></li></ol>
<h2>Safety Events Index</h2>
<p>Based on accelerometer events per 1,000 miles. Camera-generated / Vision AI events are NOT included. Three severity categories:</p>
<ul><li><b>High G-Force (&ge;1.3 Gs)</b> — Highest weighting</li><li><b>Harsh Brakes (&ge;0.47 Gs)</b> — Second-highest weighting</li><li><b>Harsh Corners/Accelerations (&ge;0.32 / &ge;0.29 Gs)</b> — Lowest weighting</li></ul>
<h2>Speeding Index</h2>
<p>Based on percentage of time speeding, with four tiers weighted by severity:</p>
<ol><li>5–10 MPH over (lowest weighting)</li><li>10.1–15 MPH over</li><li>15.1+ MPH over</li><li>Driving 75+ MPH (highest weighting)</li></ol>
<h2>Geographic Risk Index</h2>
<p>Mileage-weighted average of zip code risk rates (scale 0.3–6.73). More miles in higher-risk zip codes = lower geographic score. Low-risk: rural areas (~0.5). High-risk: suburban NJ, downtown Atlanta (~3.0+).</p>
<h2>Portfolio vs. Vehicle Scores</h2>
<p>Portfolio Risk Scores are a <b>mileage-weighted average</b> of the underlying vehicle risk scores — vehicles driving more miles influence the fleet score proportionally.</p>