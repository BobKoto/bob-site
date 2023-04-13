// JavaScript source code
// Check if the user's browser supports web notifications
if ("Notification" in window) {
  // Ask the user for permission to show notifications
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      // Show the notification when new content is posted to the website
      // This is just an example - replace with your own code to check for new content
      setInterval(function () {
        if (newContentAvailable()) {
          var notification = new Notification("New content available!", {
            body: "Click here to view the new content",
            icon: "path/to/icon.png",
          });
          // When the user clicks on the notification, take them to the new content
          notification.onclick = function () {
            window.open("https://bobkoto.github.io/bob-site");
          };
        }
      }, 86400000); // Check every day for new content
    }
  });
}

// This is just an example - replace with your own code to check for new content
function newContentAvailable() {
  // Get the latest post from the _posts folder
  var latestPostUrl = '{{ site.baseurl }}{{ site.posts.first.url }}';
  
  // Get the timestamp of the latest post
  var latestPostTimestamp = Date.parse('{{ site.posts.first.date }}');

  // Check if the latest post is newer than the user's last visit
  var lastVisit = localStorage.getItem('lastVisit');
  if (lastVisit === null || Date.parse(lastVisit) < latestPostTimestamp) {
    // New content is available
    return true;
  } else {
    // No new content
    return false;
  }
}