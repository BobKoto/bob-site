//Register service worker for az page

console.log("Service worker registration started:");

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);

      // Listen for messages from the service worker
      navigator.serviceWorker.addEventListener('message', event => {
        // Update the message on the page
        document.getElementById('message-container').innerText = event.data;
        console.log("SW Registrar placing sw message post on page");
      });
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

