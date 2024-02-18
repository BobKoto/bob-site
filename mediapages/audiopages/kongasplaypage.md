---
layout: page
title: "Play the Kongas for a Pick Me Up!"
---
{% include custom-head.html %} 

# The Kongas

The Kongas are amazing. Click play for a pick me up!

<audio controls onended="showText()">
  <source src="https://bobkoto.github.io/bob-site/downloads/kongas.ogg" type="audio/ogg" >
</audio>

<h1 id="now-wasnt-that-nice"> </h1>

<script>
function showText() {
  let myHeader = document.getElementById("now-wasnt-that-nice");
  myHeader.innerHTML = "<br> <br> Nice!!! Keep going... try viewing the <a href='https://BobKoto.github.io/bob-site/image02'>Game Gallery</a>";
}
</script>


<!--
  //var message = document.createElement("p");
  // message.textContent = "Audio finished playing!  Now, wasn't that nice?";
  //document.body.appendChild(message);

  ///the original working script 
  <script>
function showText() {
  var message = document.createElement("p");
  message.textContent = "Audio finished playing!";
  document.body.appendChild(message);
}
</script>
  -->