/* ============================================================
   MAIN.JS — renders homepage sections from SITE_DATA (data.js)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Stamp "as of" dates
  document.querySelectorAll("#statsDate, #footerDate").forEach(el => {
    el.textContent = SITE_DATA.statsAsOf;
  });

  renderScoreboard();
  renderFormats();
});

function renderScoreboard() {
  const grid = document.getElementById("scoreboardGrid");
  if (!grid) return;

  const t = SITE_DATA.careerTotals;
  const cells = [
    { val: t.internationalCenturies, label: "International Centuries" },
    { val: t.internationalRuns.toLocaleString(), label: "International Runs" },
    { val: t.iplRuns.toLocaleString(), label: "IPL Runs (RCB)" },
    { val: t.worldCupsWon.length, label: "ICC Titles Won" }
  ];

  grid.innerHTML = cells.map(c => `
    <div class="score-cell">
      <div class="val">${c.val}</div>
      <div class="label">${c.label}</div>
    </div>
  `).join("");
}

function renderFormats() {
  const grid = document.getElementById("formatsGrid");
  if (!grid) return;

  grid.innerHTML = SITE_DATA.formats.map(f => `
    <div class="format-card">
      <div class="fmt-name">${f.format}</div>
      <div class="fmt-status">${f.status}</div>
      <div class="fmt-runs">${f.runs.toLocaleString()}<small> runs</small></div>
      <dl>
        <dt>Matches</dt><dd>${f.matches}</dd>
        <dt>Average</dt><dd>${f.average !== null ? f.average : "—"}</dd>
        <dt>Centuries</dt><dd>${f.centuries}</dd>
        <dt>Highest</dt><dd>${f.highScore}</dd>
      </dl>
      <div class="fmt-note">${f.note}</div>
    </div>
  `).join("");
}
