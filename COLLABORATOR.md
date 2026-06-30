# EU Staging Site — Collaborator Guide

This is the staging environment for the TruckerCloud European website. You can make changes here and they'll appear live at:

**https://eustaging-tceuwebsite.vercel.app**

---

## Step 1 — Accept the GitHub invite

You should have received an email from GitHub inviting you to collaborate on this repository. Click the link in that email to accept. You'll need a GitHub account — if you don't have one, create a free one at [github.com](https://github.com) first.

---

## Step 2 — Install the tools (one time only)

You need two programs installed on your computer before you can work with this site.

### Install Node.js
Node.js is what runs the website on your computer so you can preview changes before publishing them.

1. Go to [nodejs.org](https://nodejs.org)
2. Click the button labeled **"LTS"** (the recommended version)
3. Open the downloaded file and follow the installer

### Install Claude Code
Claude Code is an AI tool that lets you make edits to the website by describing what you want in plain English — no coding required.

1. Go to [claude.ai/code](https://claude.ai/code)
2. Download and install it
3. Sign in with your Anthropic account (or create one for free)

---

## Step 3 — Download the project (one time only)

1. Open **Terminal** (on Mac: press `Cmd + Space`, type "Terminal", hit Enter)
2. Copy and paste these commands one at a time, pressing Enter after each:

```
git clone https://github.com/reed-soyunbot/eustaging.git
```
```
cd eustaging
```
```
npm install
```

The last command downloads all the site's dependencies — it may take a minute or two.

---

## Step 4 — Making edits

### Open the project in Claude Code

1. Open Claude Code
2. Click **"Open Project"** and select the `eustaging` folder you just downloaded
3. Type what you want to change in plain English. Examples:
   - *"Change the headline on the homepage to say..."*
   - *"Update the contact email on the sentry program page to..."*
   - *"Add a section below the hero that says..."*

Claude Code will find the right files and make the changes for you.

### Preview your changes before publishing

To see your changes on your own computer before they go live, open Terminal and run:

```
cd eustaging
npm run dev
```

Then open your browser and go to **http://localhost:3000**. The preview updates automatically as you make edits. When you're done previewing, go back to Terminal and press `Ctrl + C` to stop it.

---

## Step 5 — Publishing your changes

Once you're happy with your edits, you need to save and publish them. In Terminal (make sure you're in the `eustaging` folder):

```
git add .
```
```
git commit -m "brief description of what you changed"
```
```
git push origin main
```

Replace the description in quotes with something like `"update homepage headline"` or `"fix contact email on sentry page"`.

After about 2 minutes, your changes will be live at https://eustaging-tceuwebsite.vercel.app.

---

## Questions?

Contact Reed at Reed@truckercloud.com.
