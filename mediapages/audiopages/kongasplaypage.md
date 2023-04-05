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

<h1 id="now-wasnt-that-nice">Now, that was nice originally!!</h1>

<script>
function showText() 
{
   var myMessage = document.querySelector("now-wasnt-that-nice");
   myMessage.textContent = "Yes it was nice secondarily!";
   document.body.appendChild(message);
}
</script>
<!--
  //var message = document.createElement("p");
  // message.textContent = "Audio finished playing!  Now, wasn't that nice?";
  //document.body.appendChild(message);
  -->