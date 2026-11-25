/* ALL IN — Hebrew text for the parts of the pages that are written in English only
   (newer features, pop-up messages, the timer). Each page keeps its own translation list;
   this file translates whatever English text is still on screen when the language is Hebrew,
   including text the page creates later, and switches back when the language is English.
   To fix a Hebrew word: change it here. */
(function () {
  // <script src="he-text.js" data-keep-ltr="css selectors" data-rtl="no">
  //   data-keep-ltr: parts that stay left-to-right in Hebrew (score sheets, number pads, brackets)
  //   data-rtl="no": the page keeps left-to-right in Hebrew (the timer: left / right are real sides)
  const me = document.currentScript;
  const KEEP_LTR = (me && me.dataset.keepLtr) || '';
  const USE_RTL = !(me && me.dataset.rtl === 'no');
  if (KEEP_LTR) {
    const st = document.createElement('style');
    const sels = KEEP_LTR.split(',').map((x) => `[dir='rtl'] ${x.trim()}`);
    // the layout stays left-to-right; each label still reads in its own (Hebrew) order
    st.textContent =
      sels.join(',') +
      '{direction:ltr}' +
      sels.map((x) => `${x} *`).join(',') +
      '{unicode-bidi:plaintext}';
    document.head.appendChild(st);
  }
  const MONTHS = {
    January: 'בינואר',
    February: 'בפברואר',
    March: 'במרץ',
    April: 'באפריל',
    May: 'במאי',
    June: 'ביוני',
    July: 'ביולי',
    August: 'באוגוסט',
    September: 'בספטמבר',
    October: 'באוקטובר',
    November: 'בנובמבר',
    December: 'בדצמבר',
  };
  const DISC = {
    Outdoor: 'חוץ',
    Indoor: 'אולם',
    Field: 'שדה',
    Custom: 'מותאם אישית',
    '3D': '3D',
  };
  const MAP = {
    // ── admin: start / menu ──
    'Competition Admin': 'ניהול תחרות',
    Guide: 'מדריך',
    '— Select Competition —': '— בחר תחרות —',
    '♻️ RESTORE FROM BACKUP': '♻️ שחזור מגיבוי',
    // ── admin: dashboard ──
    '💾 Export & Backup': '💾 ייצוא וגיבוי',
    '📥 ENTRY LIST (CSV)': '📥 רשימת משתתפים (CSV)',
    '📥 QUALIFICATION (CSV)': '📥 מוקדמות (CSV)',
    '📥 FINAL RESULTS (CSV)': '📥 תוצאות סופיות (CSV)',
    '💾 BACKUP': '💾 גיבוי',
    '♻️ RESTORE': '♻️ שחזור',
    'CSV opens in Excel. BACKUP saves the whole competition in one file; RESTORE loads a backup file as a new competition.':
      'קובצי CSV נפתחים באקסל. גיבוי שומר את כל התחרות בקובץ אחד; שחזור טוען קובץ גיבוי כתחרות חדשה.',
    // ── admin: entry list ──
    '📱 SCORING LINK': '📱 קישור ניקוד',
    '🗑 DELETE ALL': '🗑 מחק הכל',
    Phone: 'טלפון',
    Email: 'אימייל',
    '💰 Paid': '💰 שילם',
    Paid: 'שילם',
    Male: 'זכר',
    Female: 'נקבה',
    Men: 'גברים',
    Women: 'נשים',
    'Click to choose CSV file': 'לחצו לבחירת קובץ CSV',
    'or drag and drop your file here': 'או גררו את הקובץ לכאן',
    '— or paste text directly —': '— או הדביקו טקסט ישירות —',
    // ── admin: schedule ──
    Location: 'מיקום',
    'No sessions yet.': 'אין מפגשים עדיין.',
    'e.g. Field A': 'לדוגמה: מגרש א',
    // ── admin: targets ──
    'Target Assignment': 'שיבוץ מטרות',
    'Targets are generated automatically from the entry list — 4 slots per target (A/B/C/D).':
      'המטרות נוצרות אוטומטית מרשימת המשתתפים — 4 מקומות בכל מטרה (A/B/C/D).',
    '🔳 TARGET QR SIGNS': '🔳 שלטי QR למטרות',
    'Tap to assign': 'לחצו לשיבוץ',
    'Select Archer': 'בחר קשת',
    Cancel: 'ביטול',
    'ASSIGN →': 'שבץ ←',
    '— Unassign —': '— בטל שיבוץ —',
    // ── admin: scorecards ──
    '📄 Scorecards': '📄 כרטיסי ניקוד',
    '👤 WITH NAMES': '👤 עם שמות',
    '👤 NO NAMES': '👤 בלי שמות',
    'VIEW 📄': 'הצג 📄',
    '🖨 PRINT': '🖨 הדפס',
    // ── admin: live results ──
    'SAVE →': 'שמור ←',
    // ── admin: elimination ──
    '⚔️ Elimination Rounds': '⚔️ מקצי הדחות',
    '🔗 SHARE MATCH SCORING LINK': '🔗 קישור ניקוד מקצה',
    '🖨 PRINT SCORECARDS': '🖨 הדפס כרטיסי ניקוד',
    '🖨 PRINT BRACKETS': '🖨 הדפס עצי הדחות',
    BYE: 'עלייה ישירה',
    TBD: 'טרם נקבע',
    '(First to 6 wins)': '(הראשון ל-6 מנצח)',
    'TIEBREAK ARROW (if needed)': 'חץ הכרעה (אם צריך)',
    'WINNER ✓ (required)': 'מנצח ✓ (חובה)',
    Score: 'ניקוד',
    '⏳ APPROVE?': '⏳ לאשר?',
    '✓ APPROVE': '✓ אישור',
    // ── admin: timer panel ──
    '⏱ End Timer — Settings': '⏱ טיימר סבבים — הגדרות',
    'Shooting time (sec)': 'זמן ירי (שניות)',
    'Call-up time (sec)': 'זמן עלייה לקו (שניות)',
    'Yellow warning (sec)': 'אזהרה צהובה (שניות)',
    Ends: 'סבבים',
    'Practice ends': 'סבבי אימון',
    'Shooting order': 'סדר ירי',
    'Beeps: 2 = to the line · 1 = start shooting · 3 = collect arrows · 5 = emergency stop':
      'צפצופים: 2 = עלייה לקו · 1 = התחלת ירי · 3 = איסוף חיצים · 5 = עצירת חירום',
    'SAVE SETTINGS': 'שמור הגדרות',
    '🖥 Display & phone control': '🖥 תצוגה ושליטה מהטלפון',
    '🖥 OPEN TIMER DISPLAY': '🖥 פתח את תצוגת הטיימר',
    '🔗 COPY PHONE CONTROL LINK': '🔗 העתק קישור שליטה לטלפון',
    'Open the display on the TV / projector and turn sound on there. Scan the QR to control the timer from your phone.':
      'פתחו את התצוגה בטלוויזיה / במקרן והפעילו שם את הצליל. סרקו את ה-QR כדי לשלוט בטיימר מהטלפון.',
    '🏆 Finals — alternating (Gold / Bronze)': '🏆 גמרים — ירי לסירוגין (זהב / ארד)',
    Match: 'מקצה',
    'Seconds per arrow': 'שניות לחץ',
    'Arrows each per end': 'חצים לכל קשת בסבב',
    'Ends (max)': 'סבבים (מקסימום)',
    'Call-up (sec)': 'עלייה לקו (שניות)',
    '▶ SEND TO TIMER': '▶ שלח לטיימר',
    '✏️ ENTER ARROWS': '✏️ הזנת חיצים',
    '↩ BACK TO NORMAL TIMER': '↩ חזרה לטיימר הרגיל',
    'The timer screen shows the two archers side by side, 20 s per arrow in turns, with the live score from the phones (provisional until you approve the match).':
      'מסך הטיימר מציג את שני הקשתים זה לצד זה, 20 שניות לחץ בתורות, עם הניקוד החי מהטלפונים (זמני עד שתאשרו את המקצה).',
    '🎛 Control': '🎛 שליטה',
    'AB only': 'AB בלבד',
    'AB then CD (every end)': 'AB ואז CD (בכל סבב)',
    'Alternate (AB-CD, then CD-AB)': 'מתחלף (AB-CD ואז CD-AB)',
    'No Gold / Bronze match ready yet': 'אין עדיין מקצה זהב / ארד מוכן',
    '◀ LEFT:': '◀ שמאל:',
    'RIGHT:': 'ימין:',
    '⇄ SWAP SIDES': '⇄ החלף צדדים',
    // ── admin: new competition ──
    '💳 Payment Link': '💳 קישור לתשלום',
    '(optional)': '(לא חובה)',
    '1 day': 'יום אחד',
    // ── admin: messages ──
    'All archers deleted ✓': 'כל הקשתים נמחקו ✓',
    'Archer removed from target ✓': 'הקשת הוסר מהמטרה ✓',
    'Backup failed': 'הגיבוי נכשל',
    'Backup saved ✓': 'הגיבוי נשמר ✓',
    'Cannot move — different group': 'אי אפשר להעביר — קבוצה אחרת',
    'Competition restored ✓': 'התחרות שוחזרה ✓',
    'Generate targets first': 'קודם צרו מטרות',
    'Invalid number': 'מספר לא תקין',
    'Invalid target number': 'מספר מטרה לא תקין',
    'Link copied ✓': 'הקישור הועתק ✓',
    'Match submitted ✓': 'המקצה נשלח ✓',
    'No archers imported — check format': 'לא יובאו קשתים — בדקו את מבנה הקובץ',
    'No categories with 3+ scored archers': 'אין קטגוריות עם 3 קשתים או יותר שיש להם ניקוד',
    'No completed round found': 'לא נמצא שלב שהסתיים',
    'No elimination brackets yet': 'אין עדיין עצי הדחות',
    'No match selected': 'לא נבחר מקצה',
    'No matches to print': 'אין מקצים להדפסה',
    'No score data yet': 'אין עדיין ניקוד',
    'No targets with archers assigned': 'אין מטרות עם קשתים משובצים',
    'Normal timer ✓': 'טיימר רגיל ✓',
    'Number change cancelled': 'שינוי המספר בוטל',
    'Please set a start date': 'נא לבחור תאריך התחלה',
    'Restore failed': 'השחזור נכשל',
    'Save failed': 'השמירה נכשלה',
    'Score updated ✓': 'הניקוד עודכן ✓',
    'Select a winner': 'בחרו מנצח',
    'Select at least one age group': 'בחרו לפחות קבוצת גיל אחת',
    'Select at least one bow type': 'בחרו לפחות סוג קשת אחד',
    'Sent to the timer ✓': 'נשלח לטיימר ✓',
    'Target deleted ✓': 'המטרה נמחקה ✓',
    'Target numbers updated ✓': 'מספרי המטרות עודכנו ✓',
    'Target updated ✓': 'המטרה עודכנה ✓',
    'This is not an ALL IN backup file': 'זה לא קובץ גיבוי של ALL IN',
    'This match has no target number — set it in Elimination (🎯)':
      'למקצה הזה אין מספר מטרה — קבעו אותו במקצי ההדחות (🎯)',
    'Timer settings saved': 'הגדרות הטיימר נשמרו',
    'Clear all target assignments?': 'לנקות את כל השיבוצים למטרות?',
    'Delete this bracket?': 'למחוק את עץ ההדחות הזה?',
    'Delete this target and unassign all archers?': 'למחוק את המטרה ולבטל את שיבוץ כל הקשתים בה?',
    'Go back to the normal end timer?': 'לחזור לטיימר הסבבים הרגיל?',
    'Remove this archer?': 'להסיר את הקשת?',
    'This cannot be undone.': 'אי אפשר לבטל את הפעולה.',
    // ── results / register / scoring ──
    '🏠 SCORING APP': '🏠 אפליקציית ניקוד',
    '▶ AUTO-SCROLL': '▶ גלילה אוטומטית',
    '⏸ AUTO-SCROLL ON': '⏸ גלילה אוטומטית פועלת',
    'No schedule yet.': 'אין עדיין לוח זמנים.',
    '📝 REGISTER →': '📝 להרשמה ←',
    'Archery Competition': 'תחרות קשתות',
    Scoring: 'ניקוד',
    'Quarter Final': 'רבע גמר',
    'Semi Final': 'חצי גמר',
    Final: 'גמר',
    'Bronze Medal': 'מקצה ארד',
    vs: 'נגד',
    '← BACK': '→ חזרה',
    TOTAL: 'סה״כ',
    'HALF TOTAL': 'סה״כ מחצית',
    'BACKSPACE ←': 'מחק ←',
    'Set System · First to 6 pts': 'שיטת סטים · הראשון ל-6 נקודות',
    SET: 'סט',
    Target: 'מטרה',
    'VIEW RESULTS →': 'לתוצאות ←',
    '← BACK TO MENU': '→ חזרה לתפריט',
    Type: 'סוג',
    Running: 'מצטבר',
    End: 'סבב',
    'No scores yet.': 'אין ניקוד עדיין.',
    'Results will appear here as archers complete their rounds.':
      'התוצאות יופיעו כאן לאחר סיום הניקוד.',
    Outdoor: DISC.Outdoor,
    Indoor: DISC.Indoor,
    Custom: DISC.Custom,
    // ── timer ──
    WAITING: 'ממתין',
    READY: 'מוכן',
    PAUSED: 'מושהה',
    'COLLECT ARROWS': 'איסוף חיצים',
    'TO THE LINE': 'עלייה לקו',
    SHOOT: 'ירי',
    WAIT: 'המתן',
    STARTS: 'מתחיל',
    'SET POINTS': 'נקודות סט',
    'SHOOT-OFF': 'חץ הכרעה',
    'PROVISIONAL SCORE — official result after the judge approves':
      'ניקוד זמני — התוצאה הרשמית לאחר אישור השופט',
    '✓ RESULT APPROVED': '✓ התוצאה אושרה',
    '🔇 SOUND OFF': '🔇 צליל כבוי',
    '🔊 SOUND ON': '🔊 צליל פועל',
    '🔇 SOUND OFF ON THIS DEVICE': '🔇 צליל כבוי במכשיר זה',
    '🔊 SOUND ON ON THIS DEVICE': '🔊 צליל פועל במכשיר זה',
    '⛶ FULL SCREEN': '⛶ מסך מלא',
    '✓ ALL ENDS DONE': '✓ כל הסבבים הסתיימו',
    '⏭ NEXT (END PHASE NOW)': '⏭ הבא (סיום השלב עכשיו)',
    '▶ RESUME': '▶ המשך',
    '⏸ PAUSE': '⏸ השהה',
    '↺ RESTART END': '↺ התחל את הסבב מחדש',
    'Change time (pause first)': 'שינוי זמן (קודם להשהות)',
    '⛔ EMERGENCY STOP': '⛔ עצירת חירום',
    'Jump to end': 'מעבר לסבב',
    GO: 'עבור',
    'Manual beeps': 'צפצופים ידניים',
    '1 BEEP': 'צפצוף 1',
    '2 BEEPS': '2 צפצופים',
    '3 BEEPS': '3 צפצופים',
    '⏭ ARROW SHOT → END': '⏭ חץ נורה — סוף הסבב',
    'Next: collect': 'הבא: איסוף חיצים',
    'No competition selected. Open the timer from the admin Timer panel.':
      'לא נבחרה תחרות. פתחו את הטיימר מלשונית הטיימר בממשק הניהול.',
    // ── login & clubs ──
    'COMPETITION ADMIN': 'ניהול תחרות',
    Password: 'סיסמה',
    'LOG IN': 'כניסה',
    'Forgot password?': 'שכחתי סיסמה',
    'Sign up with invite code': 'הרשמה עם קוד הזמנה',
    'Password (at least 6 characters)': 'סיסמה (לפחות 6 תווים)',
    'Club invite code': 'קוד הזמנה של המועדון',
    'SIGN UP': 'הרשמה',
    '← Back to log in': '→ חזרה לכניסה',
    "This account is not linked to a club yet. Enter your club's invite code.":
      'החשבון עוד לא מקושר למועדון. הזינו את קוד ההזמנה של המועדון.',
    'LINK TO CLUB': 'קישור למועדון',
    'Sign out': 'יציאה',
    'We sent you an email with a link. Open it to confirm your address, then press the button below.':
      'שלחנו אימייל עם קישור. פתחו אותו כדי לאשר את הכתובת, ואז לחצו על הכפתור למטה.',
    "I'VE CONFIRMED MY EMAIL": 'אישרתי את האימייל',
    'Send the email again': 'שלחו שוב את האימייל',
    'Wrong email or password': 'אימייל או סיסמה שגויים',
    'Email address is not valid': 'כתובת האימייל לא תקינה',
    'This email already has an account — log in': 'לאימייל הזה כבר יש חשבון — היכנסו',
    'Password must be at least 6 characters': 'הסיסמה צריכה להיות לפחות 6 תווים',
    'Too many tries — wait a minute and try again': 'יותר מדי ניסיונות — חכו דקה ונסו שוב',
    'No internet connection': 'אין חיבור לאינטרנט',
    'Something went wrong — try again': 'משהו השתבש — נסו שוב',
    'Write your email above, then press "Forgot password?"':
      'כתבו את האימייל למעלה, ואז לחצו "שכחתי סיסמה"',
    'We sent you an email to choose a new password.': 'שלחנו אימייל לבחירת סיסמה חדשה.',
    'Enter the invite code you got from the organizer': 'הזינו את קוד ההזמנה שקיבלתם מהמארגן',
    'Invite code not found — check it and try again': 'קוד ההזמנה לא נמצא — בדקו ונסו שוב',
    'Could not link — try again': 'הקישור נכשל — נסו שוב',
    'Email sent again.': 'האימייל נשלח שוב.',
    OWNER: 'בעלים',
    '🏛 Clubs': '🏛 מועדונים',
    Clubs: 'מועדונים',
    'Club name': 'שם המועדון',
    '+ CREATE CLUB': '+ צור מועדון',
    Club: 'מועדון',
    'Invite code': 'קוד הזמנה',
    Admins: 'מנהלים',
    '🔑 NEW CODE': '🔑 קוד חדש',
    '🔗 COPY INVITE LINK': '🔗 העתק קישור הזמנה',
    'USE AS MY CLUB': 'הגדר כמועדון שלי',
    '(MY CLUB)': '(המועדון שלי)',
    'No clubs yet.': 'אין מועדונים עדיין.',
    'Give a club\'s manager its invite code. They open the admin, choose "Sign up with invite code", and see only their club\'s competitions. NEW CODE replaces the old one (accounts already linked keep working).':
      'תנו למנהל המועדון את קוד ההזמנה. הוא פותח את ממשק הניהול, בוחר "הרשמה עם קוד הזמנה", ורואה רק את התחרויות של המועדון. קוד חדש מחליף את הישן (חשבונות שכבר מקושרים ממשיכים לעבוד).',
    'competition(s) have no club yet (made before logins). Move them into:':
      'תחרויות עדיין בלי מועדון (נוצרו לפני הכניסה עם סיסמה). להעביר אותן אל:',
    MOVE: 'העבר',
    'Club created ✓': 'המועדון נוצר ✓',
    'Competitions moved ✓': 'התחרויות הועברו ✓',
    'Write the club name': 'כתבו את שם המועדון',
    'Choose your club first: Clubs → USE AS MY CLUB':
      'קודם בחרו מועדון: מועדונים ← הגדר כמועדון שלי',
    'Not linked to a club': 'לא מקושר למועדון',
    'Could not load clubs.': 'לא ניתן לטעון את המועדונים.',
    "Open History from your club's admin, or from the scoring app after scanning a QR.":
      'פתחו את ההיסטוריה מממשק הניהול של המועדון, או מאפליקציית הניקוד אחרי סריקת QR.',
    GOLD: 'זהב',
    BRONZE: 'ארד',
  };
  const RX = [
    [/^(\d+) archers · (\d+) targets \((.+)\)$/, '$1 קשתים · $2 מטרות ($3)'],
    [/^(\d+) registered$/, '$1 רשומים'],
    [/^(\d) days$/, '$1 ימים'],
    [/^1\/(\d+) — Top (\d+)$/, '1/$1 — $2 הראשונים'],
    [/^Match (\d+)( ·)?$/, 'מקצה $1$2'],
    [/^Your club: (.+)$/, 'המועדון שלך: $1'],
    [/^Invite link for (.+) copied ✓$/, 'קישור ההזמנה של $1 הועתק ✓'],
    [
      /^Remove (.+) from the club\? They will no longer see its competitions\.$/,
      'להסיר את $1 מהמועדון? הוא לא יראה יותר את התחרויות שלו.',
    ],
    [/^Match (\d+) — (.+) vs (.+)$/, 'מקצה $1 — $2 נגד $3'],
    [/^Set Points: (\d+) — (\d+)$/, 'נקודות סט: $1 — $2'],
    [/^SET (\d)$/, 'סט $1'],
    [/^Round of (\d+)$/, 'סיבוב $1'],
    [/^TARGET (\d+)$/, 'מטרה $1'],
    [/^Target (\d+) — Slot ([A-D])$/, 'מטרה $1 — מקום $2'],
    [/^1st HALF \(Ends 1–(\d+)\)$/, 'מחצית ראשונה (סבבים 1–$1)'],
    [/^2nd HALF \(Ends (\d+)–(\d+)\)$/, 'מחצית שנייה (סבבים $1–$2)'],
    [/^End (\d+)( ▶)?$/, 'סבב $1$2'],
    [/^PRACTICE ROUND (\d+)\/(\d+)$/, 'סבב אימון $1/$2'],
    [/^PRACTICE ROUND$/, 'סבב אימון'],
    [/^END (\d+) \/ (\d+)$/, 'סבב $1 / $2'],
    [/^END (\d+)$/, 'סבב $1'],
    [
      /^T(\d+)([A-D]) · (.+) · ([MF])$/,
      (m) => `T${m[1]}${m[2]} · ${m[3]} · ${m[4] === 'M' ? 'ז' : 'נ'}`,
    ],
    [/^▶ START (.+)$/, (m) => '▶ התחל ' + (trCore(m[1]) ?? m[1])],
    [/^⏭ ARROW SHOT → (.+)$/, '⏭ חץ נורה — תור של $1'],
    [/^⏭ START (.+) NOW$/, '⏭ $1 מתחיל עכשיו'],
    [/^(◀ )?(.+) STARTS( ▶)?$/, (m) => `${m[1] || ''}${m[2]} מתחיל${m[3] || ''}`],
    [/^Next: (AB|CD) to the line$/, 'הבא: $1 עולים לקו'],
    [/^Next: (AB|CD) shoot$/, 'הבא: $1 יורים'],
    [/^Next: (.+)$/, 'הבא: $1'],
    [/^(.+) (Men|Women)$/, (m) => `${m[1]} ${MAP[m[2]]}`],
    [
      /^(📅 )?(\d{1,2}) ([A-Z][a-z]+) (\d{4})$/,
      (m) => (MONTHS[m[3]] ? `${m[1] || ''}${m[2]} ${MONTHS[m[3]]} ${m[4]}` : null),
    ],
    [/^Restore "(.*)" as a new competition\?$/, 'לשחזר את "$1" כתחרות חדשה?'],
    [/^DELETE "(.*)"\?$/, 'למחוק את "$1"?'],
    [
      /^Delete ALL (\d+) archers\? This cannot be undone\.$/,
      'למחוק את כל $1 הקשתים? אי אפשר לבטל את הפעולה.',
    ],
    [/^No new brackets — (\d+) already exist$/, 'לא נוצרו עצים חדשים — $1 כבר קיימים'],
    [/^Target T(\d+) added ✓$/, 'מטרה T$1 נוספה ✓'],
  ];

  let lang = 'en';
  function trCore(t) {
    if (Object.prototype.hasOwnProperty.call(MAP, t)) return MAP[t];
    if (Object.prototype.hasOwnProperty.call(DISC, t)) return DISC[t];
    for (const [re, f] of RX) {
      const m = t.match(re);
      if (!m) continue;
      const out = typeof f === 'string' ? t.replace(re, f) : f(m);
      if (out != null) return out;
    }
    if (t.includes(' · ')) {
      const parts = t.split(' · ');
      const out = parts.map((p) => trCore(p.trim()) ?? p);
      if (out.some((x, i) => x !== parts[i])) return out.join(' · ');
    }
    return null;
  }
  function tr(s) {
    if (typeof s !== 'string' || !/[A-Za-z]/.test(s)) return null;
    const t = s.replace(/\s+/g, ' ').trim();
    if (!t) return null;
    let h = trCore(t);
    if (h == null && t.includes('\n')) return null;
    if (h == null || h === t) return null; // nothing to change
    return s.match(/^\s*/)[0] + h + s.match(/\s*$/)[0];
  }
  // text with line breaks (confirm / alert): translate line by line
  function trMsg(s) {
    if (typeof s !== 'string') return s;
    const whole = tr(s);
    if (whole != null) return whole;
    return s
      .split('\n')
      .map((line) => tr(line) ?? line)
      .join('\n');
  }

  const SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };
  function doText(n) {
    const p = n.parentNode;
    if (!p || SKIP[p.nodeName]) return;
    const cur = n.nodeValue;
    if (n.__he != null && cur === n.__he) {
      if (lang !== 'he' && n.__en !== cur) n.nodeValue = n.__en;
      return;
    }
    if (cur !== n.__en) {
      n.__en = cur;
      n.__he = undefined;
    }
    if (lang === 'he') {
      if (n.__he === undefined) n.__he = tr(cur);
      if (n.__he != null && n.__he !== cur) n.nodeValue = n.__he;
    }
  }
  const ATTRS = ['placeholder', 'title'];
  function doAttr(el, a) {
    const v = el.getAttribute(a);
    if (v == null) return;
    const kE = '__en_' + a,
      kH = '__he_' + a;
    if (el[kH] != null && v === el[kH]) {
      if (lang !== 'he' && el[kE] !== v) el.setAttribute(a, el[kE]);
      return;
    }
    if (v !== el[kE]) {
      el[kE] = v;
      el[kH] = undefined;
    }
    if (lang === 'he') {
      if (el[kH] === undefined) el[kH] = tr(v);
      if (el[kH] != null && el[kH] !== v) el.setAttribute(a, el[kH]);
    }
  }
  function doEl(el) {
    for (const a of ATTRS) if (el.hasAttribute(a)) doAttr(el, a);
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    doEl(root);
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) doText(n);
      else doEl(n);
    }
  }
  const obs = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'characterData') doText(m.target);
      else if (m.type === 'attributes') doAttr(m.target, m.attributeName);
      else m.addedNodes.forEach(walk);
    }
  });
  obs.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRS,
  });
  ['confirm', 'alert', 'prompt'].forEach((fn) => {
    const orig = window[fn].bind(window);
    window[fn] = (msg, ...rest) => orig(lang === 'he' ? trMsg(msg) : msg, ...rest);
  });
  window.HeText = {
    setLang(l) {
      lang = l === 'he' ? 'he' : 'en';
      document.documentElement.lang = lang;
      if (USE_RTL) document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
      if (document.body) walk(document.body);
    },
    t: (s) => (lang === 'he' ? (tr(s) ?? s) : s),
    lang: () => lang,
  };
})();
