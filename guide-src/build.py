"""Builds guide.html (the in-app guide) from en.md and he.md.
Run again after editing the .md files: python3 build.py <repo dir>"""
import re, sys, html
import markdown, os
HERE = os.path.dirname(os.path.abspath(__file__))

repo = sys.argv[1]
md = markdown.Markdown(extensions=['tables', 'sane_lists'])


def sections(path, archers_heading):
    text = open(path, encoding='utf-8').read()
    parts = re.split(r'(?m)^## ', text)
    intro, rest = parts[0], parts[1:]
    out = [('intro', '', md.reset().convert(intro))]
    for p in rest:
        title, _, body = p.partition('\n')
        sid = 'archers' if title.strip() == archers_heading else re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-') or 's'
        out.append((sid, title.strip(), md.reset().convert(body)))
    return out


def render(lang, secs):
    toc = ''.join(
        f'<a href="#{lang}-{sid}">{html.escape(t)}</a>' for sid, t, _ in secs if t
    )
    body = ''.join(
        f'<section id="{lang}-{sid}" data-part="{"archers" if sid == "archers" else ("intro" if sid == "intro" else "admin")}">'
        + (f'<h2>{html.escape(t)}</h2>' if t else '')
        + h
        + '</section>'
        for sid, t, h in secs
    )
    d = 'rtl' if lang == 'he' else 'ltr'
    return f'<div class="lang" id="lang-{lang}" dir="{d}" lang="{lang}"><nav class="toc">{toc}</nav>{body}</div>'


en = render('en', sections(f'{HERE}/en.md', 'Archers'))
he = render('he', sections(f'{HERE}/he.md', 'קשתים'))

page = '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ALL IN — Guide</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;900&family=Barlow:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      :root { --bg:#0a0a0a; --surface:#141414; --surface2:#1c1c1c; --border:#2a2a2a; --text:#f0f0f0; --muted:#9a9a9a; --accent:#ffd700; }
      * { box-sizing: border-box; }
      body { margin:0; background:var(--bg); color:var(--text); font-family:'Barlow',sans-serif; font-size:16px; line-height:1.55; }
      header { position:sticky; top:0; z-index:5; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 18px; background:var(--surface); border-bottom:1px solid var(--border); }
      .logo { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:24px; letter-spacing:4px; color:var(--accent); }
      .logo small { display:block; font-size:11px; letter-spacing:3px; color:var(--muted); }
      .switch button { background:transparent; color:var(--muted); border:1px solid var(--border); border-radius:8px; padding:6px 12px; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:14px; cursor:pointer; }
      .switch button.on { background:var(--accent); color:#000; border-color:var(--accent); }
      main { max-width:860px; margin:0 auto; padding:18px 18px 60px; }
      .toc { display:flex; flex-wrap:wrap; gap:6px; margin:6px 0 18px; }
      .toc a { color:var(--text); text-decoration:none; background:var(--surface2); border:1px solid var(--border); border-radius:999px; padding:4px 12px; font-size:13px; }
      h2 { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:26px; letter-spacing:1px; color:var(--accent); margin:34px 0 8px; padding-top:8px; border-top:1px solid var(--border); }
      h3 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:19px; margin:22px 0 6px; }
      a { color:var(--accent); }
      strong { color:#fff; }
      code { background:var(--surface2); padding:1px 5px; border-radius:4px; }
      ul, ol { padding-inline-start:22px; }
      li { margin:4px 0; }
      table { width:100%; border-collapse:collapse; margin:10px 0 14px; font-size:14px; display:block; overflow-x:auto; }
      th, td { border:1px solid var(--border); padding:7px 10px; text-align:start; vertical-align:top; }
      th { background:var(--surface2); font-family:'Barlow Condensed',sans-serif; letter-spacing:1px; }
      .lang { display:none; }
      .lang.show { display:block; }
      body.archers [data-part="admin"], body.archers .toc { display:none; }
      .back { display:inline-block; margin-top:28px; color:var(--muted); font-size:14px; }
    </style>
  </head>
  <body>
    <header>
      <div class="logo">ALL IN<small>GUIDE</small></div>
      <div class="switch"><button id="btn-en" onclick="setLang('en')">ENG</button> <button id="btn-he" onclick="setLang('he')">עברית</button></div>
    </header>
    <main>
''' + en + he + '''
      <a class="back" href="javascript:history.back()">← Back</a>
    </main>
    <script>
      // ?lang=he|en (else the language the app last used), ?for=archers shows only the archers part
      const q = new URLSearchParams(location.search);
      if (q.get('for') === 'archers') document.body.classList.add('archers');
      function setLang(l) {
        document.querySelectorAll('.lang').forEach((e) => e.classList.toggle('show', e.id === 'lang-' + l));
        document.getElementById('btn-en').classList.toggle('on', l === 'en');
        document.getElementById('btn-he').classList.toggle('on', l === 'he');
        document.documentElement.lang = l;
        try { localStorage.setItem('guideLang', l); } catch (e) {}
      }
      let saved = null;
      try { saved = localStorage.getItem('guideLang') || localStorage.getItem('scoringLang') || localStorage.getItem('adminLang'); } catch (e) {}
      setLang(q.get('lang') === 'he' || q.get('lang') === 'en' ? q.get('lang') : saved === 'he' ? 'he' : 'en');
    </script>
  </body>
</html>
'''
open(f'{repo}/guide.html', 'w', encoding='utf-8').write(page)
print('guide.html written', len(page), 'bytes')
