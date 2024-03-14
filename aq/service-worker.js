// Service Worker   in most cases be sure to edit VERSION to update/add cached content
var VERSION = 'version_0a035';    //change index.html too!!! for now
var GHPATH = '/bob-site/aq';
const CACHE_NAME = 'IPinballCache';
var APP_PREFIX = 'ipball01appprefix_';
const urlsToCache = [
"https://bobkoto.github.io/bob-site/aq/",
"https://bobkoto.github.io/bob-site/aq/index.html",
"https://bobkoto.github.io/bob-site/aq/aqmanifest.json",   
"https://bobkoto.github.io/bob-site/aq/pinball192.png",
"https://bobkoto.github.io/bob-site/aq/pinball512.png",
"https://bobkoto.github.io/bob-site/aq/IllusionPinball.jpg",
"https://bobkoto.github.io/bob-site/aq/IllusionPinball2.jpg",
"https://bobkoto.github.io/bob-site/aq/IllusionPinball2.png",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01.jpg",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-512-512.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-192-192.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-144-144.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-96-96.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-72-72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/android/android-launchericon-48-48.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/16.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/20.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/29.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/32.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/40.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/50.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/57.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/58.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/60.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/64.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/76.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/80.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/87.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/114.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/120.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/128.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/144.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/152.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/167.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/180.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/192.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/256.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/512.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/ios/1024.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SmallTile.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SmallTile.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SmallTile.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SmallTile.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SmallTile.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square150x150Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square150x150Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square150x150Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square150x150Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square150x150Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Wide310x150Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Wide310x150Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Wide310x150Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Wide310x150Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Wide310x150Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/LargeTile.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/LargeTile.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/LargeTile.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/LargeTile.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/LargeTile.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/StoreLogo.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/StoreLogo.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/StoreLogo.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/StoreLogo.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/StoreLogo.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SplashScreen.scale-100.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SplashScreen.scale-125.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SplashScreen.scale-150.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SplashScreen.scale-200.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/SplashScreen.scale-400.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-16.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-20.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-24.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-30.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-32.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-36.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-40.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-44.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-48.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-60.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-64.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-80.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-96.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.targetsize-256.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
"https://bobkoto.github.io/bob-site/aq/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
"https://bobkoto.github.io/bob-site/aq/RegisterServiceWorker.js",
"https://bobkoto.github.io/bob-site/aq/TimestampedLog.js",
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
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01.data.unityweb",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01.framework.js.unityweb",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01.loader.js",
"https://bobkoto.github.io/bob-site/aq/pinball01/Build/pinball01.wasm.unityweb",
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
