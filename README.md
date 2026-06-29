# VK18 Archive — Virat Kohli Stats Website

A fan-made stats/timeline website for Virat Kohli. Pure HTML/CSS/JS — no
build step, no server required. Free to host.

## Files

```
index.html       Homepage (scoreboard + format cards + quick links)
profile.html      Profile page
childhood.html    Childhood timeline
yearwise.html     Year-wise stats table
milestones.html   Major milestones timeline
css/style.css     All styling
js/data.js        <-- THE ONLY FILE YOU NEED TO EDIT TO UPDATE STATS
js/main.js        Renders data.js into the homepage
```

## How to update stats (do this every few weeks)

Open `js/data.js` in any text editor. Every number on the site comes from
this one file. Update:

1. `statsAsOf` — today's date, shown across the site
2. `careerTotals` — the 4 big homepage numbers
3. `formats` — Test/ODI/T20I/IPL breakdown
4. `yearWise` — add a new row when the year's numbers change
5. `milestones` — add a new entry whenever something major happens
   (new record, retirement, trophy, etc.)

Save the file, then push it (see hosting steps below) — no other file
needs to change.

**Good sources to check for updated stats:** ESPNcricinfo's Statsguru
page for Virat Kohli, the official ICC site, and Wikipedia's "Virat
Kohli" page (its stats table is community-maintained and usually
current within a day or two of a match).

## Hosting for free

### Option A — GitHub Pages (recommended, easiest long-term)

1. Create a free GitHub account if you don't have one.
2. Create a new repository, e.g. `kohli-stats`.
3. Upload all the files in this folder (keep the folder structure —
   `css/` and `js/` must stay as subfolders).
4. Go to the repo's **Settings → Pages**.
5. Under "Source," choose the `main` branch and `/ (root)` folder, then save.
6. Your site goes live at `https://yourusername.github.io/kohli-stats/`
   within a minute or two.
7. To update stats later: edit `js/data.js` directly on GitHub (click the
   file, click the pencil/edit icon, save) — no software needed.

### Option B — Netlify (also free, drag-and-drop)

1. Go to netlify.com and sign up free.
2. On the dashboard, drag this whole folder onto the "Deploy" drop zone.
3. Netlify gives you a live URL immediately (e.g. `yourname.netlify.app`).
4. You can later connect a custom domain for free (you'd only pay if you
   buy the domain itself, typically $10–15/year).

### Option C — Vercel

Same idea as Netlify — free static hosting, drag-and-drop or connect a
GitHub repo for auto-deploys whenever you push a change to `data.js`.

## Getting a custom domain (optional, not free)

A domain like `viratkohlistats.com` costs roughly $10–15/year from
registrars like Namecheap or Google Domains. Not required to launch —
your free `.github.io` or `.netlify.app` subdomain works fine to start
and to apply for ad programs.

## Monetizing (earning from the site)

The most common free route is **Google AdSense**:

1. Apply at google.com/adsense once your site has several real pages
   of original content (you already have 5 — keep adding more
   stats/years/articles over time).
2. AdSense reviews for original content and a real user-facing site —
   approval is not guaranteed on day one and can take days to weeks.
3. Once approved, you paste a small script Google gives you into the
   `<head>` of each page, then place ad units where you see the
   `<div class="ad-slot">` placeholders already in `index.html` and
   `yearwise.html` — those are positioned to not block content.
4. Earnings depend heavily on traffic — this is a slow-build project,
   not a quick income source. Realistic plan: keep adding content
   (records pages, match reports, comparison pages vs other players)
   and share on cricket forums/Reddit/social media to build an
   audience over months.

Other options once you have traffic: affiliate links (cricket gear,
books), a "Buy Me a Coffee" donation button, or sponsored content from
cricket brands — all free to set up.

## Important notes

- This site presents factual statistics, which are not copyrightable —
  safe to use freely. The written descriptions are original, not copied
  from any source.
- The site includes a disclaimer that it's an unofficial, fan-made
  project. Keep this — don't imply official affiliation with Kohli,
  BCCI, RCB, or the ICC, since that could cause legal/trademark issues.
- Stats here are accurate as of the date in `data.js` at time of
  writing (28 June 2026) but cricket stats change with every match —
  update regularly for credibility.

## Adding more pages later

Each page follows the same pattern: copy `milestones.html`, change the
title/hero text, and point its render script at a new array you add to
`js/data.js`. Ideas: "Records page," "Kohli vs Tendulkar comparison,"
"Best innings," "IPL season-by-season," "Awards & honours."
