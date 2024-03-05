// Service Worker   in most cases be sure to edit VERSION to update/add cached content
var VERSION = 'version_0a004';    //change index.html too!!! for now
var GHPATH = '/bob-site/aq';
const CACHE_NAME = 'IPinballCache';
var APP_PREFIX = 'ipball01appprefix_';
const urlsToCache = [
"https://bobkoto.github.io/bob-site/aq/",
"https://bobkoto.github.io/bob-site/aq/index.html",
"https://bobkoto.github.io/bob-site/aq/aqmanifest.json",   
"https://bobkoto.github.io/bob-site/aq/IllusionPinball.jpg",
"https://bobkoto.github.io/bob-site/aq/IllusionPinball2.jpg",
"https://bobkoto.github.io/bob-site/aq/IllusionPinball2.png",
'https://bobkoto.github.io/bob-site/aq/pinball01/index.html',
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-512-512.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-192-192.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-144-144.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-96-96.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-72-72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-48-48.png",
"https://bobkoto.github.io/bob-site/aq/RegisterServiceWorker.js",
"https://bobkoto.github.io/bob-site/aq/pinball01/",
"https://bobkoto.github.io/bob-site/aq/pinball01/index.html",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/unity-logo-dark.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/favicon.ico",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/fullscreen-button.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/MemoryProfiler.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/progress-bar-empty-dark.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/progress-bar-empty-light.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/progress-bar-full-dark.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/progress-bar-full-light.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/style.css",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/unity-logo-light.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/webgl-logo.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/TemplateData/webmemd-icon.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01/.data.unityweb",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01/.framework.js.unityweb",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01/.loader.js",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01/.wasm.unityweb",
];

//"${GHPATH}/",
//"${GHPATH}/index.html",
//"${GHPATH}/azmanifest.json",
//"${GHPATH}/icon.png",

console.log("Service worker location", location);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(urlsToCache);
      console.log("Service worker install event in ", VERSION, " - ", urlsToCache[0]);
    })(),
  );
}); 

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})

self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        // console.log('Responding with cache : ' + e.request.url);   // good logging for initial verification  
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})
// Communicate with the client (page)
self.clients.matchAll().then(clients => {
  clients.forEach(client => {
      // Send a message to the client
      console.log("SW sending VERSION out to page")
      client.postMessage(VERSION);
  });
});
