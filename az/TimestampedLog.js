//for now this script is in _includes\custom-head.html - cheap breadcrumb 
function logWithTimestamp(message) {
    // Get the current time
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0]; // Extract hh:mm:ss
  
    // Prefix the message with the timestamp
    const logMessage = `[${timestamp}] ${message}`;
  
    // Output the log message to the console
    console.log(logMessage);
  }