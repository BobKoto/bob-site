---
layout: page
title: "Play the Kongas for a Pick Me Up!"
---
<style>
      body {
        background-color: lightblue;
      }
</style>
# The Kongas

The Kongas are amazing. Click play for a pick me up!

<audio controls onended="showText()">
  <source src="https://bobkoto.github.io/bob-site/downloads/kongas.ogg" type="audio/ogg" >
</audio>

<script>
function showText() {
  var message = document.createElement("p");
  message.textContent = "Audio finished playing!  Now, wasn't that nice?";
  document.body.write(message);
}
</script>

<!--
<h1 id="end-play">Now, wasn’t that nice?</h1>
<h1 id="now-wasnt-that-nice">Now, wasn’t that nice?</h1>

<audio src="your-audio-file.mp3" controls onended="showText()"> 
  Your browser does not support the audio element.
</audio>

<script>
function showText() {
  var message = document.createElement("p");
  message.textContent = "Audio finished playing!";
  document.body.appendChild(message);
}
</script>
-->

