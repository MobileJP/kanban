// Minimal service worker — exists only because Chromium requires one to be
// registered for the "Install app" prompt to be offered. No caching strategy:
// this app's data lives behind a live File System Access folder handle that
// can't be meaningfully replayed offline, so there's nothing useful to cache.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
