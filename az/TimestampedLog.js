//especially for the when of online events
function logWithTimestamp(message) {
    // Get the current time
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0]; // Extract hh:mm:ss
  
    // Prefix the message with the timestamp
    const logMessage = `[${timestamp}] ${message}`;
  
    // Output the log message to the console
    console.log(logMessage);
  }