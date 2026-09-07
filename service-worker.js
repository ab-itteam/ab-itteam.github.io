// Retire the previous React application's offline cache at this registration scope.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const previousCache = 'sw-precache-v3-sw-precache-webpack-plugin-' + self.registration.scope;
    await caches.delete(previousCache);
    await self.clients.claim();
    await self.registration.unregister();
  })());
});
// No fetch handler: all new requests use the network.
