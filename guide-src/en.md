ALL IN runs an archery competition from registration to final results: archers register and score on their phones, the admin manages everything from one screen, and results update live.

## Overview

**Live address:** https://matan1sharon-ops.github.io/All-in-competition/

| Page | Who uses it | What it does |
| --- | --- | --- |
| Admin | Organizer, judge | Create the competition, entries, targets, printing, elimination, approving results, timer settings |
| Registration | Archers | Sign up with the registration link |
| Scoring | Archers | Enter arrows after scanning a QR code |
| Live results | Everyone | Qualification, elimination brackets and final results, live |
| Timer | Field manager, TV screen | End timer display with beeps, and phone control |
| History | Everyone | Results of archived competitions |

A competition day in order:

1. Create the competition and share the registration link.
2. Archers register; mark no-shows as DNS on the day.
3. Assign targets and print the scorecards (or use the target QR signs).
4. Qualification: archers scan the QR and score; the timer runs the ends.
5. Elimination: generate brackets, archers score matches, the admin approves each result.
6. Final results: show and print; archive the competition.

## Admin: before the competition

Set up takes four steps: create the competition, collect entries, assign targets, print.

### 1. Create the competition

1. Press **+ NEW COMPETITION** (top left).
2. Fill in name, date, number of days, location, organizer and **discipline**: Outdoor, Indoor, 3D, Field or Custom.
3. Optional: a **payment link** (archers see a yellow pay button after registering). For Custom: allowed bow types and ages. For 3D: 24 targets or 2×12.
4. Save. Pick the competition in **Select Competition** whenever you come back.

### 2. Registration and entries

- **Registration link:** Dashboard → **🔗 REGISTRATION LINK**, then send it (WhatsApp, email). Archers fill in name, club, bow, age, gender, phone and email. The same name can't register twice.
- **Schedule** (optional): add sessions (name, place, date, time). Archers see them before the registration form. Nothing else uses them.
- **Entry List:** every archer with club, bow, age, gender, target, phone and email.
    - Add an archer by hand at the top of the panel.
    - **📥 IMPORT CSV** for many archers at once (**📋 GET TEMPLATE** gives the file layout).
    - ✏️ edits an archer, ✕ deletes one.
    - **DNS** marks an archer who did not start or withdrew: the row greys out, the archer leaves their target and is left out of scoring, elimination and results. **↩** brings them back (they need a target again).

### 3. Targets

- **Target Assignment → ⚡ AUTO GENERATE FROM ENTRIES** places archers on targets by bow and age group, up to 4 per target (A, B, C, D).
- Click an empty place to put an archer there by hand; edit a target's number to renumber it. In 3D, Field and Custom you can add or delete targets.
- Mark DNS archers **before** generating, so they don't take a place.
- **🖨 PRINT START LIST** and **🏟 FIELD OF PLAY** print who is where.

### 4. Print

- **Scorecards → 🖨 PRINT BLANK:** qualification scorecards with a **QR code per target**. Archers scan it to score.
- **🖨 PRINT ALL:** scorecards with the scores filled in (after the round).
- **Target Assignment → 🔳 TARGET QR SIGNS:** one A4 sign per target (TARGET 1, TARGET 2…). The QR holds only the target number, so the same laminated signs work at every competition. Print them from the live site.
- Custom discipline only: set up each target in **Target Setup** first (type, arrows, scoring).

## Admin: competition day

On the day the admin runs the timer, watches scores come in and fixes mistakes; archers do the scoring themselves.

### Check-in

- Mark archers who didn't come as **DNS** (Entry List). Their target place is freed; you can put a late entry there by hand.

### Timer

1. **Timer** panel → settings: shooting time, call-up time (10 s), yellow warning (30 s), number of ends, practice ends, shooting lines (AB only, AB then CD, or alternating). **SAVE SETTINGS.**
2. **🖥 OPEN TIMER DISPLAY** on the computer connected to the TV or projector. Press **SOUND ON** there (on that one device only).
3. Run the ends from the controller in the panel, or from a phone: scan the QR in the panel or use **🔗 COPY PHONE CONTROL LINK**. See *Field manager* below.

### Watching scores

- **Dashboard** shows how many archers are entered, assigned and scored.
- **Live Results** shows the qualification ranking per category as arrows come in.
- **🖥 DISPLAY SCREEN** opens the public live results for a TV. **🔗 SHARE RESULTS** copies the results link for archers and families.

### Fixing a qualification score

- **Live Results** → click an archer's score (✏️) → change it → save. Use the paper scorecard as the reference.

## Admin: elimination

After qualification the admin generates the brackets once; from then on every match result is approved by the admin, and the winner moves to the next round by himself.

### Generate the brackets

1. **Elimination** panel → choose the bracket size (e.g. **1/8 — Top 16**). Categories with fewer archers get a smaller bracket.
2. **⚡ GENERATE ALL** builds a bracket per category in World Archery seed order (1 and 2 can only meet in the final). DNS archers and archers without a score are left out.
3. Every round is created at once: later rounds show **TBD**, Final and Bronze included, each with its target. Archers with a bye are already in the next round.

Format in Outdoor and Indoor: Recurve, Barebow, Traditional and Longbow shoot **sets** (S1–S5, 2 points a set won, 6 wins); Compound shoots **cumulative** (5 ends of 3 arrows). In 3D and Field every bow shoots cumulative over 4 targets (2 arrows per target in 3D).

### Print and score

- **🖨 PRINT SCORECARDS** prints one card per match that is ready (both archers known, not finished), with a QR for its target. Press it again after each round: it prints only the new matches.
- **👤 WITH NAMES / NO NAMES** switches names on the printed cards.
- Archers scan the card's QR (or the target sign) and score the match on one or two phones.

### Approve each result

A match finished on a phone is only a **provisional** winner until the admin approves it:

1. The match box turns orange: **⏳ APPROVE?**, with the end scores of both archers in the box.
2. Compare with the paper scorecard.
3. Same result → **✓ APPROVE**. The winner moves to his place in the next round; a semifinal loser goes to the Bronze match.
4. Different result → **✏️**, type the scores from the paper and save. Saving counts as the approval, and the right archer moves on.

A result you enter yourself with **Enter Result** needs no extra approval. If you change a winner after the next match has started, the archer there is not changed and you get a warning: fix that match by hand.

### Other tools

- The 🎯 box on each match changes its target number.
- **🖨 PRINT BRACKETS** prints the brackets as on screen, one category per A4 landscape page.
- **✕ DELETE** on a category removes its bracket (to generate it again).

## Admin: results and after

Final results build themselves from the approved matches; print them, then archive the competition.

- **Live Results → 🏆 FINAL RESULTS** shows each category's final ranking: 1st–2nd from the Final, 3rd–4th from the Bronze match, then archers out in earlier rounds by qualification rank, then everyone else by qualification. A category whose Final or Bronze isn't approved yet shows "Elimination in progress".
- **🖨 PRINT QUALIFICATION** and **🖨 PRINT FINAL RESULTS** print plain black-and-white tables.
- The public results page has the same three views (Qualification, Elimination, Final Results) and its own print button for final results.
- **🗄 ARCHIVE** (top right) moves the competition to **History**, where everyone can still see its results. Competitions are also archived automatically 7 days after their date.
- **🗑 DELETE** removes the competition and everything in it (archers, scores, brackets). It can't be undone.

## Archers

Archers need only their phone: register with the link, then scan the QR on the target to score.

### Register

1. Open the registration link from the organizer.
2. Fill in first and last name, club, bow, age category, gender and phone (email is optional).
3. Press register. If there is a pay button, pay there.

### Score qualification

1. Scan the QR on your **scorecard** or on the **target sign**, with the phone camera or the app's **📷 SCAN QR CODE** button (allow the camera the first time).
2. Check the archers on your target and press **START SCORING**.
3. Enter each arrow (X, 10–1, M). Use BACKSPACE ← to fix the last arrow. After an end the app moves to the next archer by itself.
4. Keep the paper scorecard too: it's the reference if something is wrong.

Two phones can score the same target at the same time; each sees the other's arrows. If your phone dies, another archer scans the same QR and continues; nothing saved is lost.

### Score an elimination match

1. Scan the QR on the match scorecard (or the target sign). The app opens your match.
2. Enter the arrows for both archers, set by set (or target by target in 3D/Field).
3. At the end press **SUBMIT MATCH**. The result goes to the admin for approval.

### Messages you may see

| Message | What it means |
| --- | --- |
| ⚠ Offline — scores are saved on this phone | No internet. Keep scoring; scores upload by themselves when the connection is back |
| ⏳ Uploading scores… | Back online, sending what was saved |
| Updated from another phone | Someone else on your target entered arrows |
| Your next match is waiting for the opponent | The other match feeding yours isn't finished. Scan again later |
| Match finished — waiting for the admin to approve | Your match is done; the admin checks it against the paper |
| No archers or match on this target | Wrong target, or not assigned yet. Ask the organizer |
| No competition is running today | The target sign found no competition today. Ask the organizer |

## Field manager: running the timer

The field manager runs the ends from a phone; one press starts an end and the timer does the rest.

**Get the controller:** scan the QR in the admin **Timer** panel, or open the phone control link the admin sends. The phone shows the same clock as the big screen.

**One end runs by itself:** call-up for AB (red, 2 beeps) → AB shoots (green, 1 beep; yellow for the last 30 s) → call-up for CD → CD shoots → collect arrows (red, 3 beeps). Practice ends show as **PRACTICE ROUND** and don't count as ends. Time is shown in seconds.

| Button | What it does |
| --- | --- |
| ▶ START | Starts the next end (or practice round) |
| ⏭ NEXT | Ends the current phase early, when everyone on the line has shot |
| ⏸ PAUSE / ▶ RESUME | Stops the clock; resume continues from the same second with the phase's signal |
| ⛔ EMERGENCY STOP | 5 beeps, red screen; resume continues where it stopped |
| −5 / −1 / +1 / +5 s | Change the time left — only while paused or stopped |
| ↺ RESTART END | Cancels the current end and gets it ready again |
| Jump to end → GO | Picks any end or practice round, ready to start |
| 1 / 2 / 3 BEEPS | A manual signal at any time |

Turn **sound on** only on the device connected to the speaker (usually the TV computer), so the beeps don't echo.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| A page shows an old version | Reload with Ctrl+Shift+R (computer). On a phone, open the page once with internet |
| An archer's phone died | Another archer scans the same QR and continues; saved scores are kept |
| Arrows entered offline are missing | They upload when that phone is back online. Until then re-enter the end, or fix it in admin from the paper |
| Phone score differs from the paper | Qualification: Live Results → click the score ✏️. Elimination: ✏️ on the match, type the paper scores |
| An archer didn't come | Entry List → DNS (before generating targets or brackets) |
| A match won't open ("waiting for the opponent") | The feeding match isn't approved yet; approve it in Elimination |
| Camera doesn't open in the app | Allow the camera in the browser settings, or scan with the phone's camera app |
| QR from a computer printout doesn't open on phones | Print QR codes and signs from the live site, not from files on a computer |
| Timer has no sound | Press SOUND ON on that screen; phones and tablets need one tap first |
| Two competitions on the same day | Scanning a target sign shows a list; the archer picks the right one |
