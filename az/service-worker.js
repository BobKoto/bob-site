// Service Worker   in most cases be sure to edit VERSION to update/add cached content
var VERSION = 'version_0a074';    //change index.html too!!! for now
var GHPATH = '/bob-site/az';
const CACHE_NAME = 'hello-pwa-cache-v146';
var APP_PREFIX = 'hellopwa_';
const urlsToCache = [
"https://bobkoto.github.io/bob-site/az/",
"https://bobkoto.github.io/bob-site/az/index.html",
"https://bobkoto.github.io/bob-site/az/AppPageTemp/theAppPage.html",
"https://bobkoto.github.io/bob-site/az/azmanifest.json",   
"https://bobkoto.github.io/bob-site/az/icon.png",
"https://bobkoto.github.io/bob-site/az/intericon.png",
"https://bobkoto.github.io/bob-site/az/intericon256.png",
"https://bobkoto.github.io/bob-site/az/intericon1024.png",
"https://bobkoto.github.io/bob-site/az/installbutton.png",
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
"https://bobkoto/github.io/bob-site/az/pwaicons/",
"https://bobkoto/github.io/bob-site/az/pwaicons/android/",
"https://bobkoto/github.io/bob-site/az/android-launchericon-512-512.png",
"https://bobkoto/github.io/bob-site/az/android-launchericon-192-192.png",
"https://bobkoto/github.io/bob-site/az/android-launchericon-144-144.png",
"https://bobkoto/github.io/bob-site/az/android-launchericon-96-96.png",
"https://bobkoto/github.io/bob-site/az/android-launchericon-72-72.png",
"https://bobkoto/github.io/bob-site/az/android-launchericon-48-48.png"
];

//"https://bobkoto/github.io/bob-site/az/pwaicons/ios/144.png",     this errored?
//"https://bobkoto/github.io/bob-site/az/pwaicons/android/android-launchericon-144-144.png",  then this one?
//"https://                  bob-site/az/pwaicons/windows11/Square150x150Logo.scale-100.png net::ERR_NAME_NOT_RESOLVED    then this one?

//Error while trying to use the following icon from the Manifest:
// https://bobkoto/github.io/bob-site/az/pwaicons/ios/152.png (Download error or resource isn't a valid image) another

//Error while trying to use the following icon from the Manifest:
//https://bobkoto/github.io/bob-site/az/pwaicons/ios/167.png (Download error or resource isn't a valid image)

// well looks like /az/ does not cache any of its directory contents - gotta spell 'em out?
//wonder if it's cuz we're working from a subdirectory and not the root of the site... or github pages w/Jekyll?

//"https://bobkoto.github.io/bob-site/az/",
//"https://bobkoto.github.io/bob-site/az/index.html",
//"https://bobkoto.github.io/bob-site/az/azmanifest.json",
//"https://bobkoto.github.io/bob-site/az/icon.png",

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
      console.log("Service worker install event in ", VERSION, " - ", urlsToCache);
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