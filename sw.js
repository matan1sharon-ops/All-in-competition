// Keeps the scoring app working offline.
// Network first (always the newest version when online), stored copy when offline.
// Bump the version to make phones drop old stored copies.
const CACHE_NAME = 'allin-scoring-v2';
const ASSETS = [
  './scoring.html',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js',
  'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@400;500;600&display=swap',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => Promise.all(ASSETS.map((u) => cache.add(u).catch(() => {}))))
      .catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
      ),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Live database traffic is never cached (Firebase keeps its own offline copy of the data).
  // The Firebase program files (gstatic.com/firebasejs) ARE cached, so the app can start offline.
  const url = req.url;
  if (url.includes('firestore.googleapis.com') || url.includes('googleapis.com/google.firestore'))
    return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      // offline: stored copy; pages are matched without ?comp=…&target=… so a scanned page reloads
      .catch(() =>
        caches.match(req).then((hit) => hit || caches.match(req, { ignoreSearch: true })),
      ),
  );
});
