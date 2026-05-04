<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ALL IN — Competition Admin</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0a0a0a; --surface: #141414; --surface2: #1e1e1e; --surface3: #252525;
  --border: #2a2a2a; --border2: #333;
  --accent: #FFD700; --accent2: #FFA500;
  --red: #e53935; --blue: #1e88e5; --green: #43a047; --purple: #7b1fa2;
  --text: #f0f0f0; --muted: #666; --muted2: #888;
  --radius: 10px;
}
* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
body { font-family: 'Barlow', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

/* ── LAYOUT ── */
.app { display: flex; height: 100vh; overflow: hidden; }

/* SIDEBAR */
.sidebar {
  width: 220px; flex-shrink: 0; background: var(--surface);
  border-right: 1px solid var(--border); display: flex; flex-direction: column;
  padding: 0; overflow: hidden;
}
.sidebar-logo {
  padding: 20px 16px 16px;
  border-bottom: 1px solid var(--border);
}
.sidebar-logo .brand { font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 900; letter-spacing: 4px; color: var(--accent); }
.sidebar-logo .sub { font-size: 9px; font-weight: 600; color: var(--muted2); letter-spacing: 2px; text-transform: uppercase; margin-top: 2px; }

.comp-selector {
  padding: 12px;
  border-bottom: 1px solid var(--border);
}
.comp-selector select {
  width: 100%; background: var(--surface2); border: 1px solid var(--border2);
  color: var(--text); padding: 8px 10px; border-radius: 6px;
  font-family: 'Barlow', sans-serif; font-size: 12px; outline: none; cursor: pointer;
}
.new-comp-btn {
  width: 100%; margin-top: 6px; padding: 8px; background: var(--accent);
  color: #000; border: none; border-radius: 6px; font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700; font-size: 12px; letter-spacing: 1px; cursor: pointer;
}
.new-comp-btn:hover { filter: brightness(1.1); }

.nav { flex: 1; padding: 8px; overflow-y: auto; }
.nav-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600;
  color: var(--muted2); transition: all 0.15s; margin-bottom: 2px;
  border: 1px solid transparent;
}
.nav-item:hover { background: var(--surface2); color: var(--text); }
.nav-item.active { background: var(--surface3); color: var(--accent); border-color: var(--border2); }
.nav-item .icon { font-size: 16px; width: 20px; text-align: center; }
.nav-item .badge {
  margin-left: auto; background: var(--accent); color: #000;
  font-size: 9px; font-weight: 900; padding: 1px 5px; border-radius: 8px;
}

.sidebar-footer {
  padding: 12px; border-top: 1px solid var(--border);
  font-size: 10px; color: var(--muted); text-align: center;
}
.lang-toggle { display: flex; gap: 4px; justify-content: center; margin-bottom: 6px; }
.lang-btn { background: var(--surface2); border: 1px solid var(--border2); color: var(--muted2); padding: 3px 10px; border-radius: 4px; font-size: 10px; font-weight: 700; cursor: pointer; }
.lang-btn.active { background: var(--accent); color: #000; border-color: var(--accent); }

/* MAIN */
.main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

.topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px; height: 56px; border-bottom: 1px solid var(--border);
  background: var(--surface); flex-shrink: 0;
}
.topbar-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; letter-spacing: 1px; color: var(--text); }
.topbar-actions { display: flex; gap: 8px; align-items: center; }

.content { flex: 1; overflow-y: auto; padding: 24px; }

/* PANELS */
.panel { display: none; }
.panel.active { display: block; }

/* CARDS */
.card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 20px; margin-bottom: 16px;
}
.card-title {
  font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 700;
  letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted2);
  margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
}
.card-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

/* FORM */
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group label { font-size: 10px; font-weight: 700; color: var(--muted2); text-transform: uppercase; letter-spacing: 0.5px; }
.form-group input, .form-group select, .form-group textarea {
  background: var(--surface2); border: 1px solid var(--border2); color: var(--text);
  padding: 10px 12px; border-radius: 8px; font-family: 'Barlow', sans-serif;
  font-size: 14px; outline: none; transition: border-color 0.15s;
}
.form-group input:focus, .form-group select:focus { border-color: var(--accent); }
.form-group select option { background: var(--surface2); }

/* BUTTONS */
.btn { padding: 10px 18px; border-radius: 8px; border: none; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; cursor: pointer; transition: filter 0.15s, transform 0.1s; }
.btn:active { transform: scale(0.97); }
.btn-primary { background: var(--accent); color: #000; }
.btn-primary:hover { filter: brightness(1.1); }
.btn-secondary { background: var(--surface3); color: var(--text); border: 1px solid var(--border2); }
.btn-secondary:hover { border-color: var(--muted2); }
.btn-danger { background: var(--red); color: #fff; }
.btn-danger:hover { filter: brightness(1.1); }
.btn-success { background: var(--green); color: #fff; }
.btn-sm { padding: 6px 12px; font-size: 11px; }

/* TABLE */
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
thead tr { background: var(--surface2); }
thead th { padding: 10px 12px; text-align: left; font-family: 'Barlow Condensed', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--muted2); border-bottom: 1px solid var(--border2); }
tbody tr { border-bottom: 1px solid var(--border); transition: background 0.1s; }
tbody tr:hover { background: var(--surface2); }
tbody td { padding: 10px 12px; color: var(--text); }
tbody td:first-child { font-weight: 600; }

/* TAGS */
.tag { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; font-family: 'Barlow Condensed', sans-serif; letter-spacing: 0.5px; }
.tag-recurve { background: #1565c0; color: #fff; }
.tag-compound { background: #4a148c; color: #fff; }
.tag-barebow { background: #1b5e20; color: #fff; }
.tag-traditional { background: #e65100; color: #fff; }
.tag-longbow { background: #37474f; color: #fff; }
.tag-m { background: #1565c0; color: #fff; }
.tag-f { background: #880e4f; color: #fff; }

/* TARGET GRID */
.target-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; }
.target-card {
  background: var(--surface2); border: 1px solid var(--border2);
  border-radius: 8px; padding: 12px; position: relative;
}
.target-card .target-num { font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 900; color: var(--accent); margin-bottom: 8px; }
.target-slot { background: var(--surface3); border: 1px dashed var(--border2); border-radius: 6px; padding: 8px 10px; margin-bottom: 4px; min-height: 36px; cursor: pointer; transition: border-color 0.15s; }
.target-slot:hover { border-color: var(--muted2); }
.target-slot.filled { border-style: solid; border-color: var(--border2); background: var(--surface); }
.target-slot .slot-label { font-size: 9px; font-weight: 700; color: var(--muted); letter-spacing: 1px; margin-bottom: 3px; }
.target-slot .slot-name { font-size: 12px; font-weight: 600; color: var(--text); }
.target-slot .slot-cat { font-size: 10px; color: var(--muted2); }
.target-slot.empty .slot-name { color: var(--muted); font-style: italic; font-size: 11px; }

/* STATS ROW */
.stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-bottom: 20px; }
.stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 16px; text-align: center; }
.stat-val { font-family: 'Barlow Condensed', sans-serif; font-size: 32px; font-weight: 900; color: var(--accent); }
.stat-label { font-size: 10px; font-weight: 600; color: var(--muted2); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }

/* MODAL */
.modal-backdrop { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 100; align-items: center; justify-content: center; }
.modal-backdrop.open { display: flex; }
.modal { background: var(--surface); border: 1px solid var(--border2); border-radius: 14px; padding: 24px; width: 90%; max-width: 520px; max-height: 90vh; overflow-y: auto; }
.modal-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 900; letter-spacing: 1px; color: var(--accent); margin-bottom: 20px; }
.modal-actions { display: flex; gap: 8px; justify-content: flex-end; margin-top: 20px; }

/* EMPTY STATE */
.empty-state { text-align: center; padding: 60px 20px; color: var(--muted2); }
.empty-state .empty-icon { font-size: 48px; margin-bottom: 12px; }
.empty-state p { font-size: 14px; line-height: 1.6; }

/* STATUS */
.status-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 6px; }
.status-live { background: var(--green); box-shadow: 0 0 6px var(--green); animation: pulse 1.5s infinite; }
.status-draft { background: var(--muted); }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

/* TOAST */
#toast {
  position: fixed; bottom: 24px; right: 24px; background: var(--surface);
  border: 1px solid var(--border2); border-radius: 10px; padding: 12px 18px;
  font-size: 13px; font-weight: 600; z-index: 999; transform: translateY(80px);
  transition: transform 0.3s ease; display: flex; align-items: center; gap: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}
#toast.show { transform: translateY(0); }
#toast.success { border-color: var(--green); color: var(--green); }
#toast.error { border-color: var(--red); color: var(--red); }

/* SCHEDULE */
.session-block { background: var(--surface2); border: 1px solid var(--border2); border-radius: 8px; padding: 14px 16px; margin-bottom: 8px; display: flex; align-items: center; gap: 16px; }
.session-time { font-family: 'Barlow Condensed', sans-serif; font-size: 20px; font-weight: 900; color: var(--accent); min-width: 60px; }
.session-info { flex: 1; }
.session-name { font-size: 14px; font-weight: 600; }
.session-sub { font-size: 11px; color: var(--muted2); margin-top: 2px; }

/* RESPONSIVE TOPBAR */
@media (max-width: 768px) {
  .sidebar { width: 60px; }
  .sidebar-logo .brand, .sidebar-logo .sub, .nav-item span:not(.icon), .comp-selector, .sidebar-footer { display: none; }
  .nav-item { justify-content: center; padding: 12px; }
}
</style>
</head>
<body>
<div class="app">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="brand">ALL IN</div>
      <div class="sub">Competition Admin</div>
    </div>
    <div class="comp-selector">
      <select id="comp-select" onchange="selectCompetition(this.value)">
        <option value="">— Select Competition —</option>
      </select>
      <button class="new-comp-btn" onclick="openNewCompModal()">+ NEW COMPETITION</button>
    </div>
    <nav class="nav">
      <div class="nav-item active" onclick="showPanel('dashboard')" data-panel="dashboard">
        <span class="icon">📊</span><span>Dashboard</span>
      </div>
      <div class="nav-item" onclick="showPanel('entries')" data-panel="entries">
        <span class="icon">🏹</span><span>Entry List</span>
        <span class="badge" id="entry-badge">0</span>
      </div>
      <div class="nav-item" onclick="showPanel('targets')" data-panel="targets">
        <span class="icon">🎯</span><span>Target Assignment</span>
      </div>
      <div class="nav-item" onclick="showPanel('schedule')" data-panel="schedule">
        <span class="icon">⏰</span><span>Schedule</span>
      </div>
      <div class="nav-item" onclick="showPanel('results')" data-panel="results">
        <span class="icon">📋</span><span>Live Results</span>
      </div>
    </nav>
    <div class="sidebar-footer">
      <div class="lang-toggle">
        <button class="lang-btn active" onclick="setLang('en')">EN</button>
        <button class="lang-btn" onclick="setLang('he')">עב</button>
      </div>
      <div id="conn-status">🔴 Not connected</div>
    </div>
  </aside>

  <!-- MAIN -->
  <div class="main">
    <div class="topbar">
      <div class="topbar-title" id="topbar-title">Dashboard</div>
      <div class="topbar-actions" id="topbar-actions"></div>
    </div>

    <div class="content">

      <!-- DASHBOARD -->
      <div id="panel-dashboard" class="panel active">
        <div id="no-comp-msg" class="empty-state">
          <div class="empty-icon">🏆</div>
          <p>No competition selected.<br>Create a new competition or select an existing one.</p>
          <br>
          <button class="btn btn-primary" onclick="openNewCompModal()">+ CREATE COMPETITION</button>
        </div>
        <div id="dash-content" style="display:none;">
          <div class="stats-row">
            <div class="stat-card"><div class="stat-val" id="d-total">0</div><div class="stat-label">Total Archers</div></div>
            <div class="stat-card"><div class="stat-val" id="d-assigned">0</div><div class="stat-label">Assigned</div></div>
            <div class="stat-card"><div class="stat-val" id="d-targets">0</div><div class="stat-label">Targets</div></div>
            <div class="stat-card"><div class="stat-val" id="d-scored">0</div><div class="stat-label">Scored</div></div>
          </div>
          <div class="card">
            <div class="card-title">Competition Info</div>
            <div class="form-grid" id="comp-info-grid"></div>
          </div>
          <div class="card">
            <div class="card-title">Categories Breakdown</div>
            <div class="table-wrap"><table>
              <thead><tr><th>Bow</th><th>Category</th><th>M</th><th>F</th><th>Total</th></tr></thead>
              <tbody id="cat-breakdown"></tbody>
            </table></div>
          </div>
        </div>
      </div>

      <!-- ENTRIES -->
      <div id="panel-entries" class="panel">
        <div class="card">
          <div class="card-title">Add Archer</div>
          <div class="form-grid">
            <div class="form-group"><label>First Name</label><input type="text" id="e-fname" placeholder="First name"></div>
            <div class="form-group"><label>Last Name</label><input type="text" id="e-lname" placeholder="Last name"></div>
            <div class="form-group"><label>Club</label><input type="text" id="e-club" placeholder="Club name"></div>
            <div class="form-group"><label>Bow Type</label>
              <select id="e-bow">
                <option value="Recurve">Recurve</option>
                <option value="Compound">Compound</option>
                <option value="Barebow">Barebow</option>
                <option value="Traditional">Traditional</option>
                <option value="Longbow">Longbow</option>
              </select>
            </div>
            <div class="form-group"><label>Age Category</label>
              <select id="e-age">
                <option value="U12">U12</option>
                <option value="U14">U14</option>
                <option value="U18">U18</option>
                <option value="U21">U21</option>
                <option value="Senior">Senior</option>
                <option value="Master 50+">Master 50+</option>
                <option value="Master 60+">Master 60+</option>
              </select>
            </div>
            <div class="form-group"><label>Gender</label>
              <select id="e-gender">
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          <div style="margin-top:14px; display:flex; gap:8px;">
            <button class="btn btn-primary" onclick="addArcher()">+ ADD ARCHER</button>
            <button class="btn btn-secondary" onclick="openImportModal()">📥 IMPORT CSV</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">Entry List <span id="entry-count" style="color:var(--accent); margin-left:8px;">0 archers</span></div>
          <div style="margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
            <input type="text" id="search-archer" placeholder="🔍 Search..." style="background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:8px 12px;border-radius:8px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;flex:1;min-width:160px;" oninput="renderEntries()">
            <select id="filter-bow" style="background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:8px 12px;border-radius:8px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;" onchange="renderEntries()">
              <option value="">All Bows</option>
              <option>Recurve</option><option>Compound</option><option>Barebow</option><option>Traditional</option><option>Longbow</option>
            </select>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>#</th><th>Name</th><th>Club</th><th>Bow</th><th>Age</th><th>Gender</th><th>Target</th><th></th></tr></thead>
              <tbody id="entries-table"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TARGETS -->
      <div id="panel-targets" class="panel">
        <div class="card">
          <div class="card-title">Target Setup</div>
          <div style="display:flex; gap:12px; align-items:flex-end; flex-wrap:wrap;">
            <div class="form-group"><label>Number of Targets</label><input type="number" id="target-count" min="1" max="100" value="10" style="width:100px;"></div>
            <button class="btn btn-primary" onclick="generateTargets()">GENERATE</button>
            <button class="btn btn-success" onclick="autoAssign()">⚡ AUTO ASSIGN</button>
            <button class="btn btn-secondary" onclick="clearAssignments()">CLEAR ALL</button>
          </div>
        </div>
        <div id="target-grid" class="target-grid"></div>
      </div>

      <!-- SCHEDULE -->
      <div id="panel-schedule" class="panel">
        <div class="card">
          <div class="card-title">Add Session</div>
          <div class="form-grid">
            <div class="form-group"><label>Session Name</label><input type="text" id="s-name" placeholder="e.g. Qualification Round 1"></div>
            <div class="form-group"><label>Date</label><input type="date" id="s-date"></div>
            <div class="form-group"><label>Start Time</label><input type="time" id="s-time"></div>
            <div class="form-group"><label>Distance</label>
              <select id="s-dist">
                <option>70m</option><option>60m</option><option>50m</option><option>30m</option>
                <option>18m</option><option>25m</option><option>3D</option><option>Field</option>
              </select>
            </div>
            <div class="form-group"><label>Ends</label><input type="number" id="s-ends" value="12" min="1" max="30"></div>
            <div class="form-group"><label>Arrows/End</label><input type="number" id="s-arrows" value="6" min="1" max="6"></div>
          </div>
          <div style="margin-top:14px;">
            <button class="btn btn-primary" onclick="addSession()">+ ADD SESSION</button>
          </div>
        </div>
        <div id="sessions-list"></div>
      </div>

      <!-- RESULTS -->
      <div id="panel-results" class="panel">
        <div class="card">
          <div class="card-title"><span class="status-dot status-live"></span> Live Results</div>
          <div style="margin-bottom:12px; display:flex; gap:8px; flex-wrap:wrap;">
            <select id="r-filter-bow" style="background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:8px 12px;border-radius:8px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;" onchange="renderResults()">
              <option value="">All Bows</option>
              <option>Recurve</option><option>Compound</option><option>Barebow</option><option>Traditional</option><option>Longbow</option>
            </select>
            <select id="r-filter-age" style="background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:8px 12px;border-radius:8px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;" onchange="renderResults()">
              <option value="">All Ages</option>
              <option>U12</option><option>U14</option><option>U18</option><option>U21</option><option>Senior</option><option>Master 50+</option><option>Master 60+</option>
            </select>
            <button class="btn btn-secondary btn-sm" onclick="exportResultsPDF()">📄 EXPORT PDF</button>
          </div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Rank</th><th>Name</th><th>Club</th><th>Bow</th><th>Age</th><th>Target</th><th>Score</th><th>10+X</th><th>X</th></tr></thead>
              <tbody id="results-table"></tbody>
            </table>
          </div>
        </div>
      </div>

    </div><!-- /content -->
  </div><!-- /main -->
</div><!-- /app -->

<!-- NEW COMPETITION MODAL -->
<div class="modal-backdrop" id="modal-new-comp">
  <div class="modal">
    <div class="modal-title">🏆 New Competition</div>
    <div class="form-grid">
      <div class="form-group" style="grid-column:1/-1"><label>Competition Name</label><input type="text" id="nc-name" placeholder="e.g. National Championship 2025"></div>
      <div class="form-group"><label>Date</label><input type="date" id="nc-date"></div>
      <div class="form-group"><label>Location</label><input type="text" id="nc-location" placeholder="Venue / City"></div>
      <div class="form-group"><label>Discipline</label>
        <select id="nc-discipline">
          <option>Outdoor</option><option>Indoor</option><option>3D</option><option>Field</option>
        </select>
      </div>
      <div class="form-group"><label>Organizer</label><input type="text" id="nc-organizer" placeholder="Club / Federation"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal('modal-new-comp')">Cancel</button>
      <button class="btn btn-primary" onclick="createCompetition()">CREATE →</button>
    </div>
  </div>
</div>

<!-- ASSIGN MODAL -->
<div class="modal-backdrop" id="modal-assign">
  <div class="modal">
    <div class="modal-title" id="assign-modal-title">Assign Archer</div>
    <div class="form-group">
      <label>Select Archer</label>
      <select id="assign-archer-select" style="background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:10px 12px;border-radius:8px;font-family:'Barlow',sans-serif;font-size:14px;outline:none;width:100%;"></select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal('modal-assign')">Cancel</button>
      <button class="btn btn-danger btn-sm" onclick="removeFromSlot()" id="btn-remove-slot" style="display:none;">Remove</button>
      <button class="btn btn-primary" onclick="confirmAssign()">ASSIGN →</button>
    </div>
  </div>
</div>

<!-- IMPORT MODAL -->
<div class="modal-backdrop" id="modal-import">
  <div class="modal">
    <div class="modal-title">📥 Import Archers (CSV)</div>
    <p style="font-size:13px; color:var(--muted2); margin-bottom:12px;">CSV format: FirstName, LastName, Club, Bow, AgeCategory, Gender (M/F)</p>
    <textarea id="import-csv" rows="8" style="width:100%;background:var(--surface2);border:1px solid var(--border2);color:var(--text);padding:12px;border-radius:8px;font-family:monospace;font-size:12px;outline:none;resize:vertical;" placeholder="John,Smith,City Archers,Recurve,Senior,M&#10;Jane,Doe,National Club,Compound,U21,F"></textarea>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal('modal-import')">Cancel</button>
      <button class="btn btn-primary" onclick="importCSV()">IMPORT →</button>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<!-- FIREBASE -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, addDoc, setDoc, getDoc, getDocs, deleteDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVDdelVGWJOgQZwN_Um6rppelcNYVN2To",
  authDomain: "all-in-competition.firebaseapp.com",
  projectId: "all-in-competition",
  storageBucket: "all-in-competition.firebasestorage.app",
  messagingSenderId: "620146958631",
  appId: "1:620146958631:web:1e88019d1436372689c902"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

/* ── STATE ── */
let currentCompId = null;
let archers = [];
let targets = [];
let sessions = [];
let scores = {};
let assignPending = { targetIdx: null, slot: null };
let lang = 'en';

/* ── FIREBASE HELPERS ── */
async function getCompetitions() {
  const snap = await getDocs(collection(db, 'competitions'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function saveArchers() {
  if (!currentCompId) return;
  await setDoc(doc(db, 'competitions', currentCompId), { archers }, { merge: true });
}
async function saveTargets() {
  if (!currentCompId) return;
  await setDoc(doc(db, 'competitions', currentCompId), { targets }, { merge: true });
}
async function saveSessions() {
  if (!currentCompId) return;
  await setDoc(doc(db, 'competitions', currentCompId), { sessions }, { merge: true });
}

/* ── COMPETITION ── */
window.openNewCompModal = () => {
  document.getElementById('nc-date').value = new Date().toISOString().split('T')[0];
  openModal('modal-new-comp');
};

window.createCompetition = async () => {
  const name       = document.getElementById('nc-name').value.trim();
  const date       = document.getElementById('nc-date').value;
  const location   = document.getElementById('nc-location').value.trim();
  const discipline = document.getElementById('nc-discipline').value;
  const organizer  = document.getElementById('nc-organizer').value.trim();
  if (!name) { toast('Enter a competition name', 'error'); return; }
  const comp = { name, date, location, discipline, organizer, createdAt: Date.now(), archers: [], targets: [], sessions: [] };
  const ref = await addDoc(collection(db, 'competitions'), comp);
  closeModal('modal-new-comp');
  toast('Competition created! ✓', 'success');
  await loadCompetitions();
  selectCompetition(ref.id);
  document.getElementById('comp-select').value = ref.id;
};

async function loadCompetitions() {
  const comps = await getCompetitions();
  const sel = document.getElementById('comp-select');
  sel.innerHTML = '<option value="">— Select Competition —</option>';
  comps.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id; opt.textContent = c.name + (c.date ? ` (${c.date})` : '');
    sel.appendChild(opt);
  });
}

window.selectCompetition = async (id) => {
  if (!id) { currentCompId = null; document.getElementById('no-comp-msg').style.display='block'; document.getElementById('dash-content').style.display='none'; return; }
  currentCompId = id;
  const snap = await getDoc(doc(db, 'competitions', id));
  if (!snap.exists()) return;
  const data = snap.data();
  archers  = data.archers  || [];
  targets  = data.targets  || [];
  sessions = data.sessions || [];
  scores   = data.scores   || {};
  document.getElementById('no-comp-msg').style.display = 'none';
  document.getElementById('dash-content').style.display = 'block';
  document.getElementById('conn-status').textContent = '🟢 Connected';
  renderDashboard();
  renderEntries();
  renderTargets();
  renderSessions();
  renderResults();

  // live scores listener
  onSnapshot(doc(db, 'competitions', id), snap => {
    const d = snap.data();
    scores = d.scores || {};
    archers = d.archers || [];
    renderResults();
    renderDashboard();
  });
};

/* ── DASHBOARD ── */
function renderDashboard() {
  const assigned = archers.filter(a => a.target).length;
  const numTargets = targets.length;
  const scored = archers.filter(a => scores[a.id] && scores[a.id].total > 0).length;
  document.getElementById('d-total').textContent    = archers.length;
  document.getElementById('d-assigned').textContent = assigned;
  document.getElementById('d-targets').textContent  = numTargets;
  document.getElementById('d-scored').textContent   = scored;
  document.getElementById('entry-badge').textContent = archers.length;
  document.getElementById('entry-count').textContent = archers.length + ' archers';

  // comp info
  getDoc(doc(db, 'competitions', currentCompId)).then(snap => {
    const d = snap.data();
    document.getElementById('comp-info-grid').innerHTML = `
      <div class="form-group"><label>Name</label><input type="text" value="${d.name||''}" readonly style="opacity:0.7;"></div>
      <div class="form-group"><label>Date</label><input type="text" value="${d.date||''}" readonly style="opacity:0.7;"></div>
      <div class="form-group"><label>Location</label><input type="text" value="${d.location||''}" readonly style="opacity:0.7;"></div>
      <div class="form-group"><label>Discipline</label><input type="text" value="${d.discipline||''}" readonly style="opacity:0.7;"></div>
      <div class="form-group"><label>Organizer</label><input type="text" value="${d.organizer||''}" readonly style="opacity:0.7;"></div>
    `;
  });

  // breakdown
  const cats = {};
  archers.forEach(a => {
    const key = `${a.bow}|${a.age}`;
    if (!cats[key]) cats[key] = { bow: a.bow, age: a.age, M: 0, F: 0 };
    cats[key][a.gender] = (cats[key][a.gender] || 0) + 1;
  });
  document.getElementById('cat-breakdown').innerHTML = Object.values(cats).map(c =>
    `<tr><td>${c.bow}</td><td>${c.age}</td><td>${c.M||0}</td><td>${c.F||0}</td><td>${(c.M||0)+(c.F||0)}</td></tr>`
  ).join('') || '<tr><td colspan="5" style="text-align:center;color:var(--muted)">No archers yet</td></tr>';
}

/* ── ENTRIES ── */
window.addArcher = async () => {
  if (!currentCompId) { toast('Select a competition first', 'error'); return; }
  const fname  = document.getElementById('e-fname').value.trim();
  const lname  = document.getElementById('e-lname').value.trim();
  const club   = document.getElementById('e-club').value.trim();
  const bow    = document.getElementById('e-bow').value;
  const age    = document.getElementById('e-age').value;
  const gender = document.getElementById('e-gender').value;
  if (!fname || !lname) { toast('Enter first and last name', 'error'); return; }
  const archer = { id: Date.now() + Math.random(), fname, lname, name: `${fname} ${lname}`, club, bow, age, gender, target: null, slot: null };
  archers.push(archer);
  await saveArchers();
  document.getElementById('e-fname').value = '';
  document.getElementById('e-lname').value = '';
  renderEntries();
  renderDashboard();
  renderResults();
  toast(`${fname} ${lname} added ✓`, 'success');
};

window.deleteArcher = async (id) => {
  if (!confirm('Remove this archer?')) return;
  archers = archers.filter(a => a.id !== id);
  // also clear target slot
  targets.forEach(t => {
    ['A','B','C','D'].forEach(s => { if (t[s] && t[s].id === id) t[s] = null; });
  });
  await saveArchers();
  await saveTargets();
  renderEntries();
  renderTargets();
  renderDashboard();
  toast('Archer removed', 'success');
};

window.renderEntries = () => {
  const search = (document.getElementById('search-archer')?.value || '').toLowerCase();
  const bowF   = document.getElementById('filter-bow')?.value || '';
  let filtered = archers.filter(a =>
    (a.name.toLowerCase().includes(search) || (a.club||'').toLowerCase().includes(search)) &&
    (!bowF || a.bow === bowF)
  );
  document.getElementById('entry-count').textContent = archers.length + ' archers';
  document.getElementById('entry-badge').textContent  = archers.length;
  const tagClass = b => `tag tag-${b.toLowerCase()}`;
  document.getElementById('entries-table').innerHTML = filtered.map((a, i) => `
    <tr>
      <td style="color:var(--muted)">${archers.indexOf(a)+1}</td>
      <td><strong>${a.fname}</strong> ${a.lname}</td>
      <td style="color:var(--muted2)">${a.club||'—'}</td>
      <td><span class="${tagClass(a.bow)}">${a.bow}</span></td>
      <td>${a.age}</td>
      <td><span class="tag tag-${a.gender.toLowerCase()}">${a.gender}</span></td>
      <td style="color:var(--accent)">${a.target ? `T${a.target}${a.slot}` : '<span style="color:var(--muted)">—</span>'}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteArcher(${a.id})">✕</button></td>
    </tr>`).join('') || '<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:24px;">No archers yet</td></tr>';
};

window.openImportModal = () => openModal('modal-import');

window.importCSV = async () => {
  if (!currentCompId) { toast('Select a competition first', 'error'); return; }
  const text = document.getElementById('import-csv').value.trim();
  if (!text) return;
  const lines = text.split('\n').filter(l => l.trim());
  let added = 0;
  lines.forEach(line => {
    const parts = line.split(',').map(p => p.trim());
    if (parts.length < 5) return;
    const [fname, lname, club, bow, age, gender='M'] = parts;
    const validBows = ['Recurve','Compound','Barebow','Traditional','Longbow'];
    const bowNorm = validBows.find(b => b.toLowerCase() === bow.toLowerCase()) || 'Recurve';
    archers.push({ id: Date.now()+Math.random(), fname, lname, name:`${fname} ${lname}`, club, bow:bowNorm, age, gender:gender.toUpperCase()||'M', target:null, slot:null });
    added++;
  });
  await saveArchers();
  closeModal('modal-import');
  renderEntries();
  renderDashboard();
  toast(`${added} archers imported ✓`, 'success');
};

/* ── TARGETS ── */
window.generateTargets = async () => {
  if (!currentCompId) { toast('Select a competition first', 'error'); return; }
  const n = parseInt(document.getElementById('target-count').value) || 10;
  // preserve existing assignments
  const existing = targets.slice(0, n);
  targets = Array.from({length: n}, (_, i) => existing[i] || { num: i+1, A:null, B:null, C:null, D:null });
  await saveTargets();
  renderTargets();
  toast(`${n} targets set ✓`, 'success');
};

window.autoAssign = async () => {
  if (!currentCompId) { toast('Select a competition first', 'error'); return; }
  if (!targets.length) { toast('Generate targets first', 'error'); return; }
  // clear all
  targets.forEach(t => { t.A=null; t.B=null; t.C=null; t.D=null; });
  archers.forEach(a => { a.target=null; a.slot=null; });
  // sort by bow then age then gender
  const sorted = [...archers].sort((a,b) => a.bow.localeCompare(b.bow) || a.age.localeCompare(b.age));
  const slots = ['A','B','C','D'];
  let ti=0, si=0;
  sorted.forEach(archer => {
    if (ti >= targets.length) return;
    const slot = slots[si];
    targets[ti][slot] = { id: archer.id, name: archer.name, bow: archer.bow, age: archer.age };
    const orig = archers.find(a => a.id === archer.id);
    if (orig) { orig.target = targets[ti].num; orig.slot = slot; }
    si++;
    if (si >= 4) { si=0; ti++; }
  });
  await saveTargets();
  await saveArchers();
  renderTargets();
  renderEntries();
  toast('Auto-assigned ✓', 'success');
};

window.clearAssignments = async () => {
  if (!confirm('Clear all target assignments?')) return;
  targets.forEach(t => { t.A=null; t.B=null; t.C=null; t.D=null; });
  archers.forEach(a => { a.target=null; a.slot=null; });
  await saveTargets();
  await saveArchers();
  renderTargets();
  renderEntries();
  toast('Assignments cleared', 'success');
};

function renderTargets() {
  const grid = document.getElementById('target-grid');
  if (!targets.length) { grid.innerHTML = '<div class="empty-state"><div class="empty-icon">🎯</div><p>Set the number of targets and click Generate.</p></div>'; return; }
  grid.innerHTML = targets.map((t, ti) => {
    const slots = ['A','B','C','D'].map(s => {
      const archer = t[s];
      return `<div class="target-slot ${archer?'filled':'empty'}" onclick="openAssignModal(${ti},'${s}')">
        <div class="slot-label">${s}</div>
        ${archer ? `<div class="slot-name">${archer.name}</div><div class="slot-cat">${archer.bow} · ${archer.age}</div>` : `<div class="slot-name">Tap to assign</div>`}
      </div>`;
    }).join('');
    return `<div class="target-card"><div class="target-num">T${t.num}</div>${slots}</div>`;
  }).join('');
}

window.openAssignModal = (ti, slot) => {
  assignPending = { ti, slot };
  const t = targets[ti];
  document.getElementById('assign-modal-title').textContent = `Target ${t.num} — Slot ${slot}`;
  const sel = document.getElementById('assign-archer-select');
  const unassigned = archers.filter(a => !a.target || (a.target === t.num && a.slot === slot));
  sel.innerHTML = '<option value="">— Unassign —</option>' + unassigned.map(a =>
    `<option value="${a.id}" ${t[slot]?.id===a.id?'selected':''}>${a.name} (${a.bow})</option>`
  ).join('');
  const removeBtn = document.getElementById('btn-remove-slot');
  removeBtn.style.display = t[slot] ? 'block' : 'none';
  openModal('modal-assign');
};

window.confirmAssign = async () => {
  const { ti, slot } = assignPending;
  const archerId = parseFloat(document.getElementById('assign-archer-select').value);
  const t = targets[ti];
  // clear old
  if (t[slot]) {
    const old = archers.find(a => a.id === t[slot].id);
    if (old) { old.target=null; old.slot=null; }
  }
  if (archerId) {
    const archer = archers.find(a => a.id === archerId);
    if (archer) {
      // remove from old slot if any
      if (archer.target) {
        const oldT = targets.find(x => x.num === archer.target);
        if (oldT) oldT[archer.slot] = null;
      }
      t[slot] = { id: archer.id, name: archer.name, bow: archer.bow, age: archer.age };
      archer.target = t.num; archer.slot = slot;
    }
  } else {
    t[slot] = null;
  }
  await saveTargets();
  await saveArchers();
  closeModal('modal-assign');
  renderTargets();
  renderEntries();
  toast('Assignment saved ✓', 'success');
};

window.removeFromSlot = async () => {
  const { ti, slot } = assignPending;
  const t = targets[ti];
  if (t[slot]) {
    const old = archers.find(a => a.id === t[slot].id);
    if (old) { old.target=null; old.slot=null; }
    t[slot] = null;
  }
  await saveTargets();
  await saveArchers();
  closeModal('modal-assign');
  renderTargets();
  renderEntries();
  toast('Removed ✓', 'success');
};

/* ── SCHEDULE ── */
window.addSession = async () => {
  if (!currentCompId) { toast('Select a competition first', 'error'); return; }
  const name   = document.getElementById('s-name').value.trim();
  const date   = document.getElementById('s-date').value;
  const time   = document.getElementById('s-time').value;
  const dist   = document.getElementById('s-dist').value;
  const ends   = parseInt(document.getElementById('s-ends').value);
  const arrows = parseInt(document.getElementById('s-arrows').value);
  if (!name) { toast('Enter session name', 'error'); return; }
  sessions.push({ id: Date.now(), name, date, time, dist, ends, arrows });
  await saveSessions();
  renderSessions();
  toast('Session added ✓', 'success');
};

window.deleteSession = async (id) => {
  sessions = sessions.filter(s => s.id !== id);
  await saveSessions();
  renderSessions();
};

function renderSessions() {
  const list = document.getElementById('sessions-list');
  if (!sessions.length) { list.innerHTML = '<div class="empty-state"><div class="empty-icon">⏰</div><p>No sessions yet.</p></div>'; return; }
  list.innerHTML = sessions.map(s => `
    <div class="session-block">
      <div class="session-time">${s.time||'--:--'}</div>
      <div class="session-info">
        <div class="session-name">${s.name}</div>
        <div class="session-sub">${s.date||''} · ${s.dist} · ${s.ends} ends × ${s.arrows} arrows</div>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteSession(${s.id})">✕</button>
    </div>`).join('');
}

/* ── RESULTS ── */
window.renderResults = () => {
  const bowF = document.getElementById('r-filter-bow')?.value || '';
  const ageF = document.getElementById('r-filter-age')?.value || '';
  let list = archers.filter(a => (!bowF||a.bow===bowF) && (!ageF||a.age===ageF));
  list = list.map(a => {
    const s = scores[a.id] || {};
    return { ...a, total: s.total||0, tens: s.tens||0, xs: s.xs||0 };
  }).sort((a,b) => b.total-a.total || b.tens-a.tens || b.xs-a.xs);

  document.getElementById('results-table').innerHTML = list.map((a, i) => `
    <tr>
      <td style="color:var(--accent);font-weight:900;">${a.total>0?i+1:'—'}</td>
      <td><strong>${a.name}</strong></td>
      <td style="color:var(--muted2)">${a.club||'—'}</td>
      <td><span class="tag tag-${a.bow.toLowerCase()}">${a.bow}</span></td>
      <td>${a.age}</td>
      <td style="color:var(--accent)">${a.target?`T${a.target}${a.slot}`:'—'}</td>
      <td style="font-weight:900;font-size:16px;color:var(--accent)">${a.total||'—'}</td>
      <td>${a.tens||'—'}</td>
      <td>${a.xs||'—'}</td>
    </tr>`).join('') || '<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:24px;">No results yet</td></tr>';
};

window.exportResultsPDF = () => {
  const rows = Array.from(document.getElementById('results-table').querySelectorAll('tr')).map(r =>
    Array.from(r.querySelectorAll('td')).map(td => td.innerText).join('\t')
  ).join('\n');
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Results</title>
  <style>body{font-family:Arial,sans-serif;margin:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:6px 10px;text-align:left;}thead{background:#37474f;color:#fff;}@media print{@page{size:A4 landscape;margin:10mm;}}</style></head>
  <body><h2>Results</h2><table><thead><tr><th>Rank</th><th>Name</th><th>Club</th><th>Bow</th><th>Age</th><th>Target</th><th>Score</th><th>10+X</th><th>X</th></tr></thead>
  <tbody>${Array.from(document.getElementById('results-table').querySelectorAll('tr')).map(r=>`<tr>${Array.from(r.querySelectorAll('td')).map(td=>`<td>${td.innerText}</td>`).join('')}</tr>`).join('')}</tbody></table></body></html>`;
  const win = window.open('','_blank'); win.document.write(html); win.document.close(); setTimeout(()=>win.print(),400);
};

/* ── UI HELPERS ── */
window.showPanel = (name) => {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`panel-${name}`).classList.add('active');
  document.querySelector(`[data-panel="${name}"]`).classList.add('active');
  const titles = { dashboard:'Dashboard', entries:'Entry List', targets:'Target Assignment', schedule:'Schedule', results:'Live Results' };
  document.getElementById('topbar-title').textContent = titles[name] || name;
};

function openModal(id) { document.getElementById(id).classList.add('open'); }
window.closeModal = (id) => { document.getElementById(id).classList.remove('open'); };

function toast(msg, type='success') {
  const el = document.getElementById('toast');
  el.textContent = (type==='success'?'✓ ':'✕ ') + msg;
  el.className = `show ${type}`;
  setTimeout(() => el.classList.remove('show'), 3000);
}

window.setLang = (l) => {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent.trim()===(l==='en'?'EN':'עב')));
};

/* ── INIT ── */
loadCompetitions();
document.getElementById('conn-status').textContent = '🟡 Connecting...';
setTimeout(() => {
  if (!currentCompId) document.getElementById('conn-status').textContent = '🟢 Firebase ready';
}, 1500);

// close modals on backdrop click
document.querySelectorAll('.modal-backdrop').forEach(m => {
  m.addEventListener('click', e => { if(e.target===m) m.classList.remove('open'); });
});
</script>
</body>
</html>
