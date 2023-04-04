---
layout: page
title: "Image02..."
---
<script>
const myHeading = document.querySelector("h1");
myHeading.textContent = "GAME SCREEN SHOTS...";
</script>
<!--  ## Game screen shots  -->
<div style="display: inline-block;">
  <span>Time is now: </span> 
  <span id="time"></span>  
</div>

<script>
  var time = document.getElementById("time");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  time.innerHTML = hours + ":" + minutes;
</script>


<style>
      body {
        background-color: lightblue;
      }
</style>

<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/pinballinfo" style="display:flex; height:75; width:75%; justify-content:center; align-items:center" 
    title="A pinball image tooltip and the way home, for now"> 
        <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" 
             style="height:75%; width:75%; justify-content:center; align-items:center" 
             alt="A pinball game"> 
    </a>
</div>

<div style="text-align:center">
 <p> </p>
A 3D, yes 3D, simple pinball game for Android
 <p> </p>
 </div>

<div style="display:flex; justify-content:center; align-items:center; width: 100%;">
    <a href="https://bobkoto.github.io/bob-site/spacergyfiles/spacergyfile01" style="display:flex; height:75; width:75%; justify-content:center; align-items:center" 
    title="A 3D Arcade game image tooltip and the way home, for now"> 
        <img src="{{ site.baseurl }}/assets/Spacergy1.jpg"
             style="height:75%; width:75%; justify-content:center; align-items:center" 
             alt="A 3D Arcade game">
    </a>
</div>

<div style="text-align:center">
<p> </p>
 A 3D Arcade style game for Android
 <p> </p>
</div>

<!--
<div style="display:flex; justify-content:center; align-items:center;">
    <a href="https://bobkoto.github.io/bob-site/" title="A pinball image tooltip and the way home, for now"> 
     <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" 
     style="justify-content:center; align-items:center;height:25%; width:25%" alt="A pinball game"> 
    </a>
</div>
-->
