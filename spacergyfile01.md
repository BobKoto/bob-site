---
layout: page
title: "Space... the Final Dumpster"
---
<script src="./scripts/favicon.js"></script>
<script>
const myHeading = document.querySelector("h1");
myHeading.innerHTML = "<em>Space... the Final Dumpster</em>";
</script>
<style>
      body {
        background-color: lightblue;
      }
</style>
This is an Android based 3D arcade game with 2 levels that run for just 60 seconds. Perfect for playing during commercials,
breaking up boredom, waiting on line at the DMV, or wherever... &#128512; 
 


[Back to screen shots](https://bobkoto.github.io/bob-site/image02)

The Game Opening screen:

![GameOpen image](assets/Spacergy1.jpg){: width="75%" height="75%"} <br>
Game start, level select.

The Space Junk level 1:

![Level1 image](assets/Spacergy3.jpg){: width="75%" height="75%"} <br>
Level 1, space junk, gameplay. If we can send a Tesla to space why not soda machines too. &#128512; 

The Space Junk level 1 game speed setup:

![Level1Setup image](assets/Spacergy6.jpg){: width="75%" height="75%"} <br>
Level 1 has 3 speeds to choose from. The default is slowest.


# A video of Level 1 Space Junk play:
<video width="640" height="360" controls>
  <source src="{{ site.baseurl }}/assets/SpaceJunkSweeper1.mp4"  type="video/mp4">
  
  Your browser does not support the video.
</video>
That "Doh" you heard is because you should *not* hit a blue satellite.
<br>
<br>

The Wormhole level 2:

![Level2 image](assets/Spacergy5.jpg){: width="75%" height="75%"} <br>
Level 2, wormhole, game play. The red streak is a menace that got vaporized by our shielded ship.
<br>
<br>
# A video of Level 2 Wormhole play:
<video width="640" height="360" controls>
  <source src="{{ site.baseurl }}/assets/Wormhole1.mp4"  type="video/mp4">
  
  Your browser does not support the video.
</video>
Ok, so a wormhole round *can* end in less than 60 seconds if a menace hits your unshielded ship...
<br>

[Back to screen shots](https://bobkoto.github.io/bob-site/image02)


# Tech Notes: 
3D casual arcade game for Android created in Unity and C#.

Gameplay uses a mobile on-screen joystick to move your spaceship and intercept or evade objects. 
Player can set their preferred joystick position - left, center, or right.
Level 1 has 3 player selectable speed setttings. 

A variation of object pooled endless runner (on Z axis)

I play tested this on a mid-range Android phones- Galaxy J7 - and phones as old as Galaxy S4,
often playing for an hour or more with little drain on the battery. 

Find this project at [Spacergy project](https://github.com/bobkoto/spacergy/) 