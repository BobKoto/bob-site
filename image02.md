---
layout: page
title: "Game Gallery"
weight: 50
---
{% include custom-head.html %} 
<script src="./scripts/favicon.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("a");
  links.forEach(function(link) {
    link.style.fontStyle = "italic";
    link.style.textDecoration = "underline";
  });
});
</script>

<script>
const myHeadingGameGallery = document.querySelector("h1");
myHeadingGameGallery.innerHTML = "<em>Game Screen Shots and Videos...</em>";
</script>


<br>

### The games on this page are "Native" Android Apps. 

- As of 11/2023 the going forward framework used to create games/apps is Unity WebGL and PWAs (Progressive Web Applications). 

- The Illusion 3D Pinball Game for Android has been ported to WebGL here [Game Lab](https://bobkoto.github.io/bob-site/gamelab) 

- Porting Space, the Final Dumpster Arcade Game to WebGL is planned.

- Apps ported to WebGL will be published as PWAs after their porting to WebGL is done. 

## All projects/sources on this page are available on GitHub for the purpose of sharing and learning
how to make a mess that works ok anyway.
<br><br><br>
# Illusion 3D Pinball Game for Android
<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/pinballinfo" style="display:flex; height:75; width:75%; justify-content:center; align-items:center" 
    title="Illusions 3D pinball game. Click image for info..."> 
        <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" 
             style="height:75%; width:75%; justify-content:center; align-items:center" 
             alt="A pinball game"> 
    </a>
</div>

<div style="text-align:center">
 <p> </p>
 An easy to play 3D pinball game for Android. Click/tap for more info.
 <p> </p>
</div>
<br>

# Space, the Final Dumpster Arcade Game for Android
 
<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/spacergyfile01" style="display:flex; height:75; width:75%; justify-content:center; align-items:center" 
    title="3D Arcade game: Space the Final Dumpster. Click image for info..."> 
        <img src="{{ site.baseurl }}/assets/Spacergy1.jpg"
             style="height:75%; width:75%; justify-content:center; align-items:center" 
             alt="A 3D Arcade game">
    </a>
</div>

<div style="text-align:center">
<p> </p>
 A 3D Arcade game for Android. Click/tap for more info.
 <p> </p>
</div>

# Memory1, a visual and auditory memory and reflex challenge game for Android
 
<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/memoryfile01" style="display:flex; height:75; width:75%; justify-content:center; align-items:center" 
    title="memory1: A visual and auditory memory challenge. Click image for info..."> 
        <img src="{{ site.baseurl }}/assets/memory1GameOpenScreen.jpg"
             style="height:75%; width:75%; justify-content:center; align-items:center" 
             alt="A game that players press a sequence of buttons based on what they remember they have seen/heard">
    </a>
</div>

<div style="text-align:center">
<p> </p>
 A visual and auditory memory and reflex challenge game for Android. Click/tap for more info.
 <p> </p>
</div>
