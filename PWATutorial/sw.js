const VERSION = "v4";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  "/",
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "icons/circle.png",
];
self.addEventListener("install", (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(APP_STATIC_RESOURCES);
        console.log("Service worker install event");
      })(),
    );
  });
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      (async () => {
        const names = await caches.keys();
        await Promise.all(
          names.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          }),
        );
        await clients.claim();
        console.log("Service worker activate event");
      })(),
    );
  });
  self.addEventListener("fetch", (event) => {
    // when seeking an HTML page
    if (event.request.mode === "navigate") {
      // Return to the index.html page
      event.respondWith(caches.match("/"));
      console.log( CACHE_NAME, " Service worker fetch event   ");
      return;
    }
  
    // For every other request type
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request.url);
        console.log("Service worker respond to other request/event");
        if (cachedResponse) {
          // Return the cached response if it's available.
          return cachedResponse;
        }
        // Respond with a HTTP 404 response status.
        return new Response(null, { status: 404 });
      })(),
    );
  });
  