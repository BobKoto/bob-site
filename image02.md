---
layout: page
title: "Image02"
---

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
<!--
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
}

.grid-item {
  border: 5px solid #ccc;
  padding: 10px;
  text-align: center;
}

.grid-image {
  width: 300px;
  height: 300px; 

}
      img {
        width: 300px;
        height: 300px; 
        margin-bottom: 20px;
      }
</style>
-->
<!--
<div class="grid-container">
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/PasageIcon.png" style = "width: 25%; height:25%" alt="Description the Robot Icon">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/myGraphic.jpg" style = "width: 25%; height:25%" alt="Description the Eye">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">
  </div>
</div>
-->
the orphans:
wrapped in an html div with BOTH  passageicon and Eye @ 25x25
<div>
  <img src="{{ site.baseurl }}/assets/PasageIcon.png" style="display:inline-block; height:25%; width:25%; margin-right:40px;" alt="A Robot Icon">
  <img src="{{ site.baseurl }}/assets/myGraphic.jpg" style="display:inline-block; height:25%; width:25%; margin-right:40px" alt="A human Eye">
  <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" style="display:inline-block; height:25%; width:25%; margin-right:40px" alt="A pinball game">
</div>
a second row ? (between <div>s)
<div>
  <img src="{{ site.baseurl }}/assets/PasageIcon.png" style="display:inline-block; height:25%; width:25%; margin-right:40px;" alt="A Robot Icon">
  <img src="{{ site.baseurl }}/assets/myGraphic.jpg" style="display:inline-block; height:25%; width:25%; margin-right:40px" alt="A human Eye">
  <img src="{{ site.baseurl }}/assets/IllusionPinball.jpg" style="display:inline-block; height:25%; width:25%; margin-right:40px" alt="A pinball game">
</div>
<!--
as original:
<img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon"> 
<img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">
-->