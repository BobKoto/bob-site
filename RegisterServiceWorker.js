//Register service worker for az page

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("service-worker.js")
   // navigator.serviceWorker.register('/service-worker.js')   //somebody, github pages? dunlike service worker in the root?
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}