---
layout: page
title: "Image02"
---

<div class="grid-container">
  <div class="grid-item">
    <img src="/path/to/graphic1.png">
  </div>
  <div class="grid-item">
    <img src="/path/to/graphic2.png">
  </div>
  <div class="grid-item">
    <img src="/path/to/graphic3.png">
  </div>
  <div class="grid-item">
    <img src="/path/to/graphic4.png">
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

<img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">

<img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">

<img src="{{ site.baseurl }}/assets/PasageIcon.png" alt="Description the Robot Icon">

<img src="{{ site.baseurl }}/assets/myGraphic.jpg" alt="Description the Eye">