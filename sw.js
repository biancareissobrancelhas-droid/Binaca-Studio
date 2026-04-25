/* ════════════════════════════════════════════════════════
   Service Worker — Bianca Reis Studio PWA
   Estratégia: Cache First para assets, Network First para HTML
════════════════════════════════════════════════════════ */

const CACHE_NAME = 'bianca-reis-v1';
const ASSETS = [
  './',
  './bianca_reis_pwa.html',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

/* ── Install: pré-caching ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Cache parcial, alguns assets externos podem não ter sido cacheados:', err);
      });
    })
  );
  self.skipWaiting();
});

/* ── Activate: limpar caches antigos ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: Cache First com fallback para rede ── */
self.addEventListener('fetch', event => {
  // Ignora requests que não são GET
  if (event.request.method !== 'GET') return;
  
  // Para o HTML principal: Network First (garante dados frescos)
  if (event.request.url.includes('bianca_reis_pwa.html') || event.request.url.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Para assets (fontes, scripts): Cache First
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Fallback offline para HTML
        return caches.match('./bianca_reis_pwa.html');
      });
    })
  );
});
