---
title: Understanding Risk Scores
description: How TruckerCloud calculates risk scores and what they mean for underwriting.
category: Getting Started
order: 2
---

<h2>What is a Risk Score?</h2>
<p>TruckerCloud's Risk Score is a 0–100 composite score assigned to each vehicle or driver. Higher scores indicate safer behavior. A score below 60 is considered elevated risk.</p>

<h2>What goes into the score?</h2>
<p>The score is calculated from three components:</p>
<ul>
  <li><strong>Speed Behavior (frequency-based)</strong> — how often a driver exceeds posted speed limits, weighted by severity and road type</li>
  <li><strong>Harsh Events</strong> — hard braking, rapid acceleration, and sharp cornering events per mile</li>
  <li><strong>Geographic Risk</strong> — routes through high-incident corridors and jurisdictions</li>
</ul>

<h2>Score ranges</h2>
<table>
  <thead>
    <tr><th>Score</th><th>Interpretation</th></tr>
  </thead>
  <tbody>
    <tr><td>80–100</td><td>Low risk — preferred pricing candidate</td></tr>
    <tr><td>60–79</td><td>Moderate risk — standard pricing</td></tr>
    <tr><td>40–59</td><td>Elevated risk — additional review recommended</td></tr>
    <tr><td>0–39</td><td>High risk — flag for loss control outreach</td></tr>
  </tbody>
</table>

<h2>Rolling 30-day windows</h2>
<p>Scores are calculated over rolling 30-day windows. Multiple score entries in the API response represent consecutive windows, allowing you to see trend direction over time.</p>

<h2>Using scores in underwriting</h2>
<p>Risk scores are available via the TruckerCloud API at <code>GET /api/v5/risk-scores</code>. They can be pulled at renewal, mid-term audit, or continuously for real-time monitoring programs. Contact your TruckerCloud account manager to discuss integrating scores into your rating engine.</p>
