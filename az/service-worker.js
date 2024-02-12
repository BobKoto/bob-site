// Service Worker   in most cases be sure to edit VERSION to update/add cached content
var VERSION = 'version_0b011';    //change index.html too!!! for now
var GHPATH = '/bob-site/az';
const CACHE_NAME = 'hello-pwa-cache-v146';
var APP_PREFIX = 'hellopwa_';
const urlsToCache = [
"https://bobkoto.github.io/bob-site/az/",
"https://bobkoto.github.io/bob-site/az/index.html",
"https://bobkoto.github.io/bob-site/az/AppPageTemp/theAppPage.html",
"https://bobkoto.github.io/bob-site/az/azmanifest.json",   
"https://bobkoto.github.io/bob-site/az/CubeTestPlaying1.png",
"https://bobkoto.github.io/bob-site/az/icon.png",
"https://bobkoto.github.io/bob-site/az/intericon.png",
"https://bobkoto.github.io/bob-site/az/intericon48.png",
"https://bobkoto.github.io/bob-site/az/intericon192.png",
"https://bobkoto.github.io/bob-site/az/intericon256.png",
"https://bobkoto.github.io/bob-site/az/intericon1024.png",
"https://bobkoto.github.io/bob-site/az/installbutton.png",
"https://bobkoto.github.io/bob-site/az/android-launchericon-144-144.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-512-512.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-192-192.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-144-144.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-96-96.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-72-72.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/android/android-launchericon-48-48.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/16.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/20.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/29.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/32.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/40.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/50.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/57.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/58.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/60.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/64.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/72.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/76.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/80.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/87.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/114.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/120.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/128.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/144.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/152.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/167.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/180.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/192.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/256.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/512.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/ios/1024.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SmallTile.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SmallTile.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SmallTile.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SmallTile.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SmallTile.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square150x150Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square150x150Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square150x150Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square150x150Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square150x150Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Wide310x150Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Wide310x150Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Wide310x150Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Wide310x150Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Wide310x150Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/LargeTile.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/LargeTile.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/LargeTile.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/LargeTile.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/LargeTile.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/StoreLogo.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/StoreLogo.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/StoreLogo.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/StoreLogo.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/StoreLogo.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SplashScreen.scale-100.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SplashScreen.scale-125.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SplashScreen.scale-150.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SplashScreen.scale-200.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/SplashScreen.scale-400.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-16.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-20.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-24.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-30.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-32.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-36.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-40.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-44.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-48.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-60.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-64.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-72.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-80.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-96.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.targetsize-256.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
"https://bobkoto.github.io/bob-site/az/pwaicons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
"https://bobkoto.github.io/bob-site/az/notnowbutton.png",
"https://bobkoto.github.io/bob-site/az/rungamebutton.png",
"https://bobkoto.github.io/bob-site/az/RegisterServiceWorker.js",
"https://bobkoto.github.io/bob-site/az/game01/",
"https://bobkoto.github.io/bob-site/az/game01/index.html",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/unity-logo-dark.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/favicon.ico",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/fullscreen-button.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/MemoryProfiler.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/progress-bar-empty-dark.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/progress-bar-empty-light.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/progress-bar-full-dark.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/progress-bar-full-light.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/style.css",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/unity-logo-light.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/webgl-logo.png",
"https://bobkoto.github.io/bob-site/az/game01/TemplateData/webmemd-icon.png",
"https://bobkoto.github.io/bob-site/az/game01/Build/game01.data.unityweb",
"https://bobkoto.github.io/bob-site/az/game01/Build/game01.framework.js.unityweb",
"https://bobkoto.github.io/bob-site/az/game01/Build/game01.loader.js",
"https://bobkoto.github.io/bob-site/az/game01/Build/game01.wasm.unityweb",
"https://bobkoto.github.io/bob-site/az/game01/StreamingAssets/UnityServicesProjectConfiguration.json",
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
        console.log('Responding with cache : ' + e.request.url);
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
/*
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});*/

/*
var GHPATH = '/github-page-pwa';
var APP_PREFIX = 'gppwa_';
var VERSION = 'version_002';
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/img/icon.png`,
  `${GHPATH}/js/app.js`
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

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
var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})
*/