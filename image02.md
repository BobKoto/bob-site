---
layout: page
title: "Image02"
---

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
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
      img {
        width: 25%;
        height: 25%;
        margin-bottom: 20px;
      }
</style>

the orphans:

<img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">

<img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">