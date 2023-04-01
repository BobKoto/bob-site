---
layout: page
title: "Image02"
---

<style>
      body {
        background-color: lightblue;
      }
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
  <!-- width: 25%; -->
  height: 25%;
}

      img {
 <!--       width: 300px;
        height: 300px;  -->

        margin-bottom: 20px;
      }
</style>

<div class="grid-container">
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">
  </div>
  <div class="grid-item">
    <img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">
  </div>
</div>



the orphans:
wrapped in an html div with H20% & W40%:
<div>
  <img src="{{ site.baseurl }}/assets/PasageIcon.png" style="display:inline-block; width:40%">
  <img src="{{ site.baseurl }}/assets/myGraphic.jpg" style="display:inline-block; width:40%">
</div>

as original:
<img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon"> 
<img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">