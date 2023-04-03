---
layout: page
title: "Image02 Game Screen Shots"
---
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

All stripped except in-line images 

<style>
      body {
        background-color: lightblue;
      }
</style>


<div style="display:flex; justify-content:center; align-items:center;">
   <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" style="height:25%; width:25%" alt="A pinball game">
</div>

<div style="text-align:center">
<p> </p>
A 3D, yes 3D, simple pinball game for Android

</div>


<div style="display:flex; justify-content:center; align-items:center;">
   <img src="{{ site.baseurl }}/assets/Spacergy1.jpg" style="height:25%; width:25%" alt="A pinball game">
</div>

<div style="text-align:center">

 A 3D Arcade style game for Android

</div>


