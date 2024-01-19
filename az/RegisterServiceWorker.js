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

/*
if ("serviceWorker" in navigator) {
    // declaring scope manually
    navigator.serviceWorker.register("service-worker.js").then(
      (registration) => {
        console.log("Service worker registration succeeded:", registration.scope);
      },
      (error) => {
        console.error(`Service worker registration failed: ${error}`);
      },
    );
  } else {
    console.error("Service workers are not supported.");
  }


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        navigator.serviceWorker.register("/service-worker.js", { scope: "/az/" }).then(    //scope added

   // navigator.serviceWorker.register('/service-worker.js')   //somebody, github pages? dunlike service worker in the root?
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
} */