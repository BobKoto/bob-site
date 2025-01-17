---
layout: page
title: "memory1"
---
<script src="./scripts/favicon.js"></script>
<!--<script>
const myHeading = document.querySelector("h1");
myHeading.innerHTML = "<em>memory1</em>";
</script>
<style>
      body {
        background-color: lightblue;
      }
</style>  -->
{% include custom-head.html %} 
This is an Android based visual and auditory and reflex challenge game. Object is to replay a sequence of randomly displayed symbols - each with their own unique auditory tone - as quickly as possible. There are 3 levels of play to choose: Practice, Normal and Fast. &#128512; 


The Game Opening screen:

![GameOpen image](assets/memory1GameStart.jpg){: width="75%" height="75%"} <br>
Game start.   Work in progress, more memory1 samples to come... 

The Game Menu screen:

![GameOpen image](assets/memory1Menu.jpg){: width="75%" height="75%"} <br>
Game menu.   Work in progress, more memory1 samples to come... 

# A video of memory1 sequence you have to play back:
<video width="640" height="360" controls>
  <source src="{{ site.baseurl }}/assets/memory1StartRound.mp4"  type="video/mp4">
  
  Your browser does not support the video.
</video>
Note that less than 6 symbols are previewed because some might be repeated - so pay attention!

# A video of memory1 sequence you have to play back:
<video width="640" height="360" controls>
  <source src="{{ site.baseurl }}/assets/memory1StartWithAudio.webm"  type="video/webm">
  
  Your browser does not support the video.
</video>
Note that less than 6 symbols are previewed because some might be repeated - so pay attention!

[Back to screen shots](https://bobkoto.github.io/bob-site/image02)


# Tech Notes: 
A casual memory and reflex challenge game for Android created with Java using Android SDK.

Gameplay challenges player to play back a random sequence of 6 symbols and their associated auditory tones. Scoring is based on how fast a player can correctly repeat the random sequence.

I play tested this on a mid-range Android phones- Galaxy J7 - and phones as old as Galaxy S4,
often playing for an hour or more with little drain on the battery. 

Find this project at [memory1 project](https://github.com/bobkoto/memory1/) aka memory1.