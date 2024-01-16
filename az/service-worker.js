// Service Worker

const CACHE_NAME = 'hello-pwa-cache-v146';
const urlsToCache = [
  "https://bobkoto.github.io/bob-site/az/",


];
console.log("Service worker location", location);

//  "index.html",
//  "azmanifest.json",
//  "/icon.png" ,
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(urlsToCache);
      console.log("Service worker install event in az 402", urlsToCache);
    })(),
  );
}); 

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});